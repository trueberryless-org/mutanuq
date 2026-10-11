---
title: Installation and Initial Configuration
description: Editions and licensing of Windows Server, Server Core and Desktop Experience, installation, initial configuration with sconfig and PowerShell as well as roles and features.
sidebar:
  order: 1
---

Before a server can provide services, it has to be installed and configured. These steps are repeated for every new server and should therefore be carried out carefully and always in the same way.

## Editions and licensing

A new version of Windows Server with long-term support (Long-Term Servicing Channel) is released about every three years, most recently Windows Server 2016, 2019, 2022 and 2025. Each version receives security updates for at least ten years.

| Edition     | Use                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------- |
| Standard    | physical or lightly virtualised environments; licensing all cores allows two virtual machines |
| Datacenter  | highly virtualised environments; unlimited virtual machines, additional features such as Storage Spaces Direct and software-defined networking |
| Essentials  | small businesses with up to 25 users, only available through hardware vendors             |

Windows Server is licensed **per processor core**, with a minimum of 8 cores per processor and 16 cores per server. In addition, every user or device that accesses the server needs a **Client Access License** (CAL). You can choose between user CALs and device CALs.

:::tip[For school]
Through Azure Dev Tools for Teaching or your school's Microsoft licences, you can usually use Windows Server free of charge for learning purposes. Alternatively, there is an evaluation version that is valid for 180 days.
:::

## Installation options

During installation, you choose between two variants:

- **Server Core:** installation without a graphical user interface. The server is managed via the command line, PowerShell or remotely. Advantages are lower storage requirements, fewer updates, fewer restarts and a smaller attack surface. Microsoft recommends Server Core as the default.
- **Desktop Experience:** installation with the familiar Windows interface and Server Manager. Easier for beginners and for applications that require a graphical interface.

It is not possible to switch between the two variants later; a reinstallation is required.

## Hardware requirements

The minimum requirements for Windows Server 2025 are low, but hardly sufficient in practice:

| Component     | Minimum                                          | sensible for a lab VM        |
| ------------- | ------------------------------------------------ | ---------------------------- |
| Processor     | 64-bit, 1.4 GHz, support for certain instruction sets | 2 virtual cores         |
| Memory        | 512 MB (Core), 2 GB (Desktop Experience)         | 4 GB                         |
| Disk          | 32 GB                                            | 60 GB                        |
| Network       | Ethernet adapter                                 | 1 virtual adapter            |

UEFI with Secure Boot and a TPM 2.0 are also recommended.

## Installation

1. Boot from the installation media (ISO file or USB stick).
2. Choose the language, time and keyboard layout.
3. Select the edition and installation variant (for example "Standard" or "Standard (Desktop Experience)").
4. Accept the licence terms and choose "Custom" as the installation type.
5. Select the disk and partition it if necessary.
6. After the restart, set a secure password for the local Administrator account.

With many servers, installation is automated, for example with an answer file (`autounattend.xml`), with Windows Deployment Services (WDS) or by cloning prepared virtual machines. Before cloning, the system must be generalised with `sysprep /generalize` so that each copy gets its own security identifier (SID).

## Initial configuration

After installation, the same steps are always needed.

### With sconfig

On Server Core, **sconfig**, a text-based menu, starts automatically after sign-in. It lets you choose the most important settings by number: computer name, joining a domain, network settings, updates, Remote Desktop and date/time.

### With PowerShell

```powershell
# Change the computer name and restart
Rename-Computer -NewName "DC01" -Restart

# Show network adapters
Get-NetAdapter

# Set a static IP address and default gateway
New-NetIPAddress -InterfaceAlias "Ethernet" -IPAddress 192.168.10.10 `
    -PrefixLength 24 -DefaultGateway 192.168.10.1

# Set DNS servers
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses 192.168.10.10, 192.168.10.11

# Set the time zone
Set-TimeZone -Id "W. Europe Standard Time"

# Enable Remote Desktop
Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Control\Terminal Server" `
    -Name "fDenyTSConnections" -Value 0
Enable-NetFirewallRule -DisplayGroup "Remote Desktop"
```

The name of the firewall rule group depends on the language of the system. On a German system, for example, it has a German name.

:::caution[Static addresses]
Servers that provide services for others, such as domain controllers, DNS and DHCP servers, always need a static IP address. Otherwise, clients may no longer find them after a restart.
:::

## Roles and features

The functions of a server are installed as roles and features:

- **Roles** are the main tasks of the server, such as Active Directory Domain Services (AD DS), DNS Server, DHCP Server, File Server or Web Server (IIS).
- **Features** are supporting functions, such as .NET Framework, Windows Server Backup, Failover Clustering or the Remote Server Administration Tools (RSAT).

```powershell
# Show all available and installed roles and features
Get-WindowsFeature

# Show only the installed ones
Get-WindowsFeature | Where-Object Installed

# Install a role with its management tools
Install-WindowsFeature -Name DHCP -IncludeManagementTools

# Remove a role
Uninstall-WindowsFeature -Name DHCP
```

## Management tools

- **Server Manager:** graphical tool on servers with Desktop Experience for installing roles and monitoring several servers
- **Windows Admin Center:** browser-based management tool that can also manage Server Core conveniently
- **RSAT:** Remote Server Administration Tools installed on a Windows client, such as "Active Directory Users and Computers" or the DNS console
- **PowerShell Remoting:** run commands on remote servers (see [PowerShell](/en/deployment/windows_server/powershell/))

In practice, servers are not administered directly at the console but from an administration computer. This is more convenient and more secure.
