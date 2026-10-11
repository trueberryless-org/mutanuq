---
title: Group Policy
description: Structure of Group Policy objects, computer and user configuration, linking and the LSDOU processing order, inheritance, filtering, typical examples and troubleshooting.
sidebar:
  order: 4
---

**Group Policy** distributes settings centrally to all computers and users in a domain: password rules, network drives, desktop background, software installation, firewall settings and thousands more. Instead of configuring hundreds of PCs individually, a setting is defined once and applied automatically.

## Group Policy objects

Settings are stored in **Group Policy objects** (GPOs). A GPO only takes effect when it is **linked** to a site, the domain or an organisational unit. The same GPO can be linked to several places.

Every GPO has two sections:

- The **computer configuration** applies to computer accounts and is applied when the computer starts, for example firewall rules, password policies or software installation.
- The **user configuration** applies to user accounts and is applied at sign-in, for example network drives, desktop background or the Start menu.

A GPO only affects objects located in the linked OU. A computer policy linked to an OU full of users therefore has no effect.

Both sections are divided further:

- **Policies** are enforced. Users cannot change them, and they are removed as soon as the GPO no longer applies.
- **Preferences** set default values that users can partly change, such as drive mappings, shortcuts or registry values. With **item-level targeting**, preferences can be applied only to certain groups or computers.

The templates for the administrative template settings are ADMX files. For consistent management, they are stored in the **central store**: `\\corp.example.com\SYSVOL\corp.example.com\Policies\PolicyDefinitions`.

## Processing order

Group Policy is applied in the order **LSDOU**:

![Group Policy processing order: local, site, domain, OU](/images/deployment/gpo_processing_en.svg)

1. L: local policy of the computer
2. S: site
3. D: domain
4. OU: organisational units, from the top to the bottom

Settings applied later override earlier ones. If two settings contradict each other, the policy linked closer to the object wins. If several GPOs are linked to the same OU, the **link order** decides: the GPO with number 1 is applied last and therefore takes precedence.

### Controlling inheritance

- **Block inheritance:** GPOs from higher levels are not applied at an OU.
- **Enforced:** A GPO is applied despite blocked inheritance and cannot be overridden by lower-level GPOs. This allows IT, for example, to enforce security settings for the entire domain.

### Filtering

- **Security filtering:** By default, a GPO applies to all authenticated users. It can be restricted to certain groups. The computer must still be able to read the GPO, however.
- **WMI filters:** A GPO is only applied if a condition is met, for example only on laptops or only on Windows 11.

## Password and account policies

Password and account lockout policies for domain accounts are defined in the **Default Domain Policy**, which is linked to the domain:

- minimum password length
- password history and maximum password age
- complexity requirements
- account lockout after several failed attempts

If stricter rules should apply to certain groups, such as administrators, **fine-grained password policies** are used.

## Examples

| Goal                                        | Path in the GPO                                                                            |
| ------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Network drive `S:` for sales                | User Configuration › Preferences › Windows Settings › Drive Maps                           |
| Set the desktop wallpaper                   | User Configuration › Policies › Administrative Templates › Desktop › Desktop               |
| Block Control Panel                         | User Configuration › Policies › Administrative Templates › Control Panel                   |
| Block USB storage                           | Computer Configuration › Policies › Administrative Templates › System › Removable Storage Access |
| Deploy software via MSI                     | Computer Configuration › Policies › Software Settings › Software Installation              |
| Firewall rules                              | Computer Configuration › Policies › Windows Settings › Security Settings › Windows Defender Firewall with Advanced Security |
| Logon script                                | User Configuration › Policies › Windows Settings › Scripts                                 |

## Managing with PowerShell

Graphically, GPOs are created and edited with the "Group Policy Management" console (`gpmc.msc`). Many steps can also be done with PowerShell:

```powershell
# Create a GPO and link it to an OU
New-GPO -Name "Users Vienna - Drives" |
    New-GPLink -Target "OU=Users,OU=Vienna,DC=corp,DC=example,DC=com"

# Set a registry value via GPO
Set-GPRegistryValue -Name "Users Vienna - Drives" `
    -Key "HKCU\Software\Policies\Microsoft\Windows\Control Panel\Desktop" `
    -ValueName "ScreenSaveTimeOut" -Type String -Value "600"

# Enforce a link, block inheritance
Set-GPLink -Name "Security Baseline" -Target "DC=corp,DC=example,DC=com" -Enforced Yes
Set-GPInheritance -Target "OU=Lab,DC=corp,DC=example,DC=com" -IsBlocked Yes

# Back up all GPOs
Backup-GPO -All -Path "D:\GPO-Backup"
```

## Troubleshooting

Clients refresh Group Policy automatically about every 90 minutes with a random delay of up to 30 minutes, domain controllers every 5 minutes. For troubleshooting, the following help:

```powershell
gpupdate /force         # reapply policies immediately
gpresult /r             # show applied GPOs for the computer and user
gpresult /h report.html # create a detailed HTML report
```

In the Group Policy Management console, the **Group Policy Results wizard** also shows which settings actually apply to a specific user on a specific computer, and **Group Policy Modeling** simulates what would happen after a change.

Typical causes of errors:

- The GPO is linked to the wrong OU, or the object is in a different OU.
- A user setting was linked to an OU that only contains computers, or vice versa.
- Another GPO with a higher priority overrides the setting.
- Security filtering excludes the object.
- The client cannot reach a domain controller or has the wrong DNS server configured.
- Some settings, such as software installation and drive mappings, require a restart or a new sign-in.
