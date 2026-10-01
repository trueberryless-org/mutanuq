---
title: PowerShell für Administratoren
description: Cmdlets, Hilfe, Objekte und Pipeline, Variablen, Schleifen und Skripte, Ausführungsrichtlinien, PowerShell Remoting und ein Beispiel für die Benutzeranlage aus einer CSV-Datei.
sidebar:
  order: 2
---

**PowerShell** ist die Kommandozeile und Skriptsprache für die Verwaltung von Windows. Fast alles, was sich in einer grafischen Oberfläche klicken lässt, geht mit PowerShell schneller, wiederholbar und auf vielen Servern gleichzeitig. Im Lehrplan heißt das „wiederkehrende Abläufe automatisieren“.

Auf Windows Server ist Windows PowerShell 5.1 vorinstalliert. Die plattformübergreifende PowerShell 7 kann zusätzlich installiert werden und läuft auch unter Linux und macOS.

## Cmdlets

Die Befehle in PowerShell heißen **Cmdlets** und folgen dem Schema **Verb-Substantiv**:

| Verb      | Bedeutung                  | Beispiel                     |
| --------- | -------------------------- | ---------------------------- |
| Get       | anzeigen, abrufen          | `Get-Service`, `Get-Process` |
| Set       | ändern                     | `Set-Service`, `Set-Location` |
| New       | neu anlegen                | `New-Item`, `New-ADUser`     |
| Remove    | löschen                    | `Remove-Item`, `Remove-ADUser` |
| Start/Stop | starten, beenden          | `Start-Service`, `Stop-Process` |
| Enable/Disable | aktivieren, deaktivieren | `Enable-NetFirewallRule` |

Parameter beginnen mit einem Bindestrich, etwa `Get-Service -Name Spooler`. Mit der Tabulatortaste werden Befehle und Parameter automatisch ergänzt.

## Hilfe finden

```powershell
# Befehle suchen
Get-Command -Noun *DnsServer*
Get-Command -Verb Get -Module ActiveDirectory

# Hilfe zu einem Befehl, mit Beispielen
Get-Help New-ADUser -Examples

# Hilfedateien aktualisieren (einmalig, benötigt Internet)
Update-Help
```

## Objekte und Pipeline

Anders als in Linux-Shells geben Cmdlets keinen Text zurück, sondern **Objekte** mit Eigenschaften und Methoden. Mit der **Pipeline** `|` wird die Ausgabe eines Befehls an den nächsten weitergegeben.

```powershell
# Welche Eigenschaften hat ein Dienst?
Get-Service | Get-Member

# Alle gestoppten Dienste, die automatisch starten sollten
Get-Service | Where-Object { $_.Status -eq "Stopped" -and $_.StartType -eq "Automatic" }

# Die fünf Prozesse mit dem höchsten Arbeitsspeicherverbrauch
Get-Process | Sort-Object WorkingSet -Descending | Select-Object -First 5 Name, WorkingSet

# Ergebnis als CSV-Datei speichern
Get-Service | Select-Object Name, Status | Export-Csv C:\Temp\dienste.csv -NoTypeInformation
```

`$_` steht innerhalb eines Skriptblocks für das aktuelle Objekt aus der Pipeline. Vergleichsoperatoren werden in PowerShell als Wörter geschrieben: `-eq` (gleich), `-ne` (ungleich), `-gt` (größer), `-lt` (kleiner), `-like` (mit Platzhaltern) und `-match` (regulärer Ausdruck).

## Variablen und Datentypen

```powershell
$server = "DC01"
$anzahl = 5
$benutzer = Get-ADUser -Filter *        # speichert eine Liste von Objekten
$liste = @("DC01", "DC02", "FS01")      # Array
$info = @{ Name = "FS01"; IP = "192.168.10.20" }   # Hashtable

"Der Server heißt $server"              # Variablen werden in doppelten Anführungszeichen ersetzt
'Der Server heißt $server'              # in einfachen Anführungszeichen nicht
```

## Bedingungen und Schleifen

```powershell
foreach ($name in $liste) {
    if (Test-Connection -ComputerName $name -Count 1 -Quiet) {
        Write-Host "$name ist erreichbar" -ForegroundColor Green
    }
    else {
        Write-Warning "$name antwortet nicht"
    }
}

# Kurzform in der Pipeline
$liste | ForEach-Object { Test-Connection $_ -Count 1 -Quiet }
```

## Skripte

Befehle können in Dateien mit der Endung `.ps1` gespeichert werden. Aus Sicherheitsgründen legt die **Ausführungsrichtlinie** fest, welche Skripte gestartet werden dürfen:

| Richtlinie     | Bedeutung                                                                 |
| -------------- | ------------------------------------------------------------------------- |
| Restricted     | keine Skripte (Standard auf Windows-Clients)                              |
| RemoteSigned   | lokale Skripte erlaubt, heruntergeladene nur mit Signatur (Standard auf Windows Server) |
| AllSigned      | nur signierte Skripte                                                     |
| Unrestricted   | alle Skripte, mit Warnung bei heruntergeladenen                           |

```powershell
Get-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
.\mein-skript.ps1
```

Die Ausführungsrichtlinie ist keine Sicherheitsgrenze, sondern soll verhindern, dass Skripte versehentlich ausgeführt werden.

## PowerShell Remoting

Mit **PowerShell Remoting** werden Befehle auf entfernten Computern ausgeführt. Auf Windows Server ist es standardmäßig aktiviert, auf Clients wird es mit `Enable-PSRemoting` eingeschaltet. Die Verbindung läuft über WinRM (Port 5985 für HTTP bzw. 5986 für HTTPS).

```powershell
# Interaktive Sitzung auf einem anderen Server
Enter-PSSession -ComputerName FS01
Exit-PSSession

# Befehl auf mehreren Servern gleichzeitig ausführen
Invoke-Command -ComputerName DC01, DC02, FS01 -ScriptBlock {
    Get-Service -Name W32Time | Select-Object Status
}
```

## Beispiel: Benutzer aus einer CSV-Datei anlegen

Zu Schulbeginn müssen oft hunderte Benutzerkonten angelegt werden. Ausgangspunkt ist eine CSV-Datei `benutzer.csv`:

```
Vorname;Nachname;Abteilung
Anna;Huber;Vertrieb
Max;Mayer;Technik
```

```powershell
Import-Module ActiveDirectory
$ou = "OU=Benutzer,OU=Wien,DC=corp,DC=example,DC=com"
$startkennwort = Read-Host "Startkennwort" -AsSecureString

Import-Csv -Path C:\Skripte\benutzer.csv -Delimiter ";" | ForEach-Object {
    $sam = ("{0}.{1}" -f $_.Vorname, $_.Nachname).ToLower()
    New-ADUser -Name "$($_.Vorname) $($_.Nachname)" `
        -GivenName $_.Vorname -Surname $_.Nachname `
        -SamAccountName $sam -UserPrincipalName "$sam@corp.example.com" `
        -Department $_.Abteilung -Path $ou `
        -AccountPassword $startkennwort -ChangePasswordAtLogon $true -Enabled $true
    Write-Host "Angelegt: $sam"
}
```

Das Kennwort wird mit `Read-Host -AsSecureString` abgefragt und nicht im Skript gespeichert. Beim ersten Anmelden müssen die Benutzer es ändern.

:::tip
Teste Skripte, die viele Objekte verändern, zuerst mit dem Parameter `-WhatIf`. PowerShell zeigt dann nur an, was passieren würde, ohne etwas zu ändern.
:::
