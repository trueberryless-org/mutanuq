---
title: PowerShell for Administrators
description: Cmdlets, help, objects and the pipeline, variables, loops and scripts, execution policies, PowerShell Remoting and an example of creating users from a CSV file.
sidebar:
  order: 2
---

**PowerShell** is the command line and scripting language for managing Windows. Almost everything that can be clicked in a graphical interface can be done faster with PowerShell, repeatably and on many servers at once. The curriculum calls this "automating recurring tasks".

Windows PowerShell 5.1 is preinstalled on Windows Server. The cross-platform PowerShell 7 can be installed in addition and also runs on Linux and macOS.

## Cmdlets

Commands in PowerShell are called **cmdlets** and follow the **verb-noun** pattern:

| Verb      | Meaning                    | Example                      |
| --------- | -------------------------- | ---------------------------- |
| Get       | show, retrieve             | `Get-Service`, `Get-Process` |
| Set       | change                     | `Set-Service`, `Set-Location` |
| New       | create                     | `New-Item`, `New-ADUser`     |
| Remove    | delete                     | `Remove-Item`, `Remove-ADUser` |
| Start/Stop | start, end                | `Start-Service`, `Stop-Process` |
| Enable/Disable | enable, disable       | `Enable-NetFirewallRule`     |

Parameters start with a hyphen, for example `Get-Service -Name Spooler`. The Tab key completes commands and parameters automatically.

## Finding help

```powershell
# Search for commands
Get-Command -Noun *DnsServer*
Get-Command -Verb Get -Module ActiveDirectory

# Help for a command, with examples
Get-Help New-ADUser -Examples

# Update the help files (once, requires internet)
Update-Help
```

## Objects and the pipeline

Unlike Linux shells, cmdlets do not return text but **objects** with properties and methods. With the **pipeline** `|`, the output of one command is passed to the next.

```powershell
# Which properties does a service have?
Get-Service | Get-Member

# All stopped services that should start automatically
Get-Service | Where-Object { $_.Status -eq "Stopped" -and $_.StartType -eq "Automatic" }

# The five processes using the most memory
Get-Process | Sort-Object WorkingSet -Descending | Select-Object -First 5 Name, WorkingSet

# Save the result as a CSV file
Get-Service | Select-Object Name, Status | Export-Csv C:\Temp\services.csv -NoTypeInformation
```

Inside a script block, `$_` stands for the current object from the pipeline. Comparison operators in PowerShell are written as words: `-eq` (equal), `-ne` (not equal), `-gt` (greater than), `-lt` (less than), `-like` (with wildcards) and `-match` (regular expression).

## Variables and data types

```powershell
$server = "DC01"
$count = 5
$users = Get-ADUser -Filter *            # stores a list of objects
$list = @("DC01", "DC02", "FS01")        # array
$info = @{ Name = "FS01"; IP = "192.168.10.20" }   # hashtable

"The server is called $server"           # variables are expanded in double quotes
'The server is called $server'           # but not in single quotes
```

## Conditions and loops

```powershell
foreach ($name in $list) {
    if (Test-Connection -ComputerName $name -Count 1 -Quiet) {
        Write-Host "$name is reachable" -ForegroundColor Green
    }
    else {
        Write-Warning "$name is not responding"
    }
}

# Short form in the pipeline
$list | ForEach-Object { Test-Connection $_ -Count 1 -Quiet }
```

## Scripts

Commands can be saved in files with the extension `.ps1`. For security reasons, the **execution policy** defines which scripts may be run:

| Policy         | Meaning                                                                   |
| -------------- | ------------------------------------------------------------------------- |
| Restricted     | no scripts (default on Windows clients)                                   |
| RemoteSigned   | local scripts allowed, downloaded ones only if signed (default on Windows Server) |
| AllSigned      | only signed scripts                                                       |
| Unrestricted   | all scripts, with a warning for downloaded ones                           |

```powershell
Get-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
.\my-script.ps1
```

The execution policy is not a security boundary; it is meant to prevent scripts from being run by accident.

## PowerShell Remoting

**PowerShell Remoting** runs commands on remote computers. It is enabled by default on Windows Server and turned on with `Enable-PSRemoting` on clients. The connection uses WinRM (port 5985 for HTTP or 5986 for HTTPS).

```powershell
# Interactive session on another server
Enter-PSSession -ComputerName FS01
Exit-PSSession

# Run a command on several servers at once
Invoke-Command -ComputerName DC01, DC02, FS01 -ScriptBlock {
    Get-Service -Name W32Time | Select-Object Status
}
```

## Example: creating users from a CSV file

At the start of the school year, hundreds of user accounts often have to be created. The starting point is a CSV file `users.csv`:

```
FirstName;LastName;Department
Anna;Huber;Sales
Max;Mayer;Engineering
```

```powershell
Import-Module ActiveDirectory
$ou = "OU=Users,OU=Vienna,DC=corp,DC=example,DC=com"
$initialPassword = Read-Host "Initial password" -AsSecureString

Import-Csv -Path C:\Scripts\users.csv -Delimiter ";" | ForEach-Object {
    $sam = ("{0}.{1}" -f $_.FirstName, $_.LastName).ToLower()
    New-ADUser -Name "$($_.FirstName) $($_.LastName)" `
        -GivenName $_.FirstName -Surname $_.LastName `
        -SamAccountName $sam -UserPrincipalName "$sam@corp.example.com" `
        -Department $_.Department -Path $ou `
        -AccountPassword $initialPassword -ChangePasswordAtLogon $true -Enabled $true
    Write-Host "Created: $sam"
}
```

The password is requested with `Read-Host -AsSecureString` and not stored in the script. Users must change it when they first sign in.

:::tip
Test scripts that change many objects with the `-WhatIf` parameter first. PowerShell then only shows what would happen without changing anything.
:::
