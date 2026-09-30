---
title: Updates and Maintenance
description: Patch management with WSUS and Group Policy, maintenance windows, scheduled tasks, Windows Server Backup and typical maintenance tasks on servers.
sidebar:
  order: 8
---

A server is not finished after installation. It has to be updated, monitored and backed up continuously. Unpatched systems are one of the most common entry points for attacks.

## Patch management

Microsoft regularly releases security updates on the second Tuesday of the month, known as **Patch Tuesday**. Updates should not be installed blindly but according to a fixed process:

1. **Inform yourself:** Which updates have been released, which vulnerabilities do they fix, are they already being exploited?
2. **Test:** Install updates first on test systems or a small group of pilot machines.
3. **Approve:** After a successful test, approve them for all systems.
4. **Install:** in an agreed maintenance window, for example Tuesday night, so that restarts do not disturb anyone.
5. **Verify:** Check that the updates were installed everywhere and all services are running again.

Critical vulnerabilities that are already being actively exploited must be closed immediately, even outside the usual rhythm.

## WSUS

**Windows Server Update Services** (WSUS) is a server role that downloads updates from Microsoft once and distributes them on the internal network. Advantages:

- The internet connection is only used once.
- Administrators decide which updates are approved for which computer groups and when.
- Reports show which computers still need which updates.

```powershell
Install-WindowsFeature -Name UpdateServices -IncludeManagementTools
& "C:\Program Files\Update Services\Tools\wsusutil.exe" postinstall CONTENT_DIR=D:\WSUS
```

The clients are pointed to the WSUS server via Group Policy, under Computer Configuration › Administrative Templates › Windows Components › Windows Update. There, the address of the server, such as `http://wsus01.corp.example.com:8530`, and the behaviour for automatic updates and restarts are defined. With **client-side targeting**, computers automatically assign themselves to a group in WSUS, such as "Pilot" or "Production".

:::note
Microsoft is no longer developing WSUS further, but the role is still included in Windows Server and supported. Alternatives include cloud-based services such as Windows Autopatch, Microsoft Intune and Azure Update Manager, as well as tools from other vendors.
:::

## Scheduled tasks

With **Task Scheduler**, scripts and programs are run automatically at certain times or on certain events, for example a nightly report on locked-out accounts.

```powershell
$action  = New-ScheduledTaskAction -Execute "powershell.exe" `
    -Argument "-NoProfile -File C:\Scripts\report.ps1"
$trigger = New-ScheduledTaskTrigger -Daily -At 6:00
Register-ScheduledTask -TaskName "Daily report" -Action $action -Trigger $trigger `
    -User "SYSTEM" -RunLevel Highest
```

## Windows Server Backup

The **Windows Server Backup** feature backs up individual files, volumes, the system state or the entire server (bare metal recovery). On a domain controller, the system state also includes the Active Directory database.

```powershell
Install-WindowsFeature -Name Windows-Server-Backup
wbadmin start systemstatebackup -backupTarget:E:
wbadmin get versions
```

Larger environments use specialised solutions such as Veeam, which can also back up virtual machines while they are running. How a backup strategy is structured is described on the page [backup strategies](/en/deployment/security-strategies/).

:::caution
A backup is only worth something once the restore has been tested. Schedule regular restore tests.
:::

## Regular maintenance tasks

| Frequency  | Task                                                                              |
| ---------- | --------------------------------------------------------------------------------- |
| daily      | check backups, review monitoring alerts                                           |
| weekly     | review event logs for errors, check free disk space                               |
| monthly    | install updates, disable inactive user and computer accounts                      |
| quarterly  | test restores, review permissions and group memberships                           |
| yearly     | review hardware and software, keep an eye on end-of-life dates of operating systems and warranties, update documentation |

All changes to servers are documented in an **operations manual** or wiki. Anyone who has to fix an outage at night needs up-to-date information about configuration, dependencies and access routes.
