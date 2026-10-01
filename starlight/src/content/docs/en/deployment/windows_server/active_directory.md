---
title: Active Directory
description: Directory services and LDAP, forests, domains and organisational units, domain controllers, FSMO roles, sites, groups according to the AGDLP principle and setting up a domain with PowerShell.
sidebar:
  order: 3
---

A **directory service** stores information about users, computers, groups and other resources in a network in a central place. Instead of creating separate user accounts on every PC, everyone signs in with the same account on every device in the domain. **Active Directory Domain Services** (AD DS) is Microsoft's directory service and is used in almost every company.

## Basics

Active Directory is based on several open standards:

- **LDAP** (Lightweight Directory Access Protocol, port 389 or 636 with TLS) for reading and writing directory data
- **Kerberos** (port 88) for authentication with tickets, so that the password is not sent over the network
- **DNS** for locating the domain controllers (see [DNS](/en/deployment/windows_server/dns/))

Every object in the directory has a unique name, the **distinguished name** (DN). It describes the path from the object to the domain:

```
CN=Anna Huber,OU=Users,OU=Vienna,DC=corp,DC=example,DC=com
```

`CN` stands for common name, `OU` for organizational unit and `DC` for domain component.

## Logical structure

![Structure of Active Directory with forest, domains and organisational units](/images/deployment/ad_structure_en.svg)

- The **forest** is the top-level unit and the actual security boundary. All domains in it share the same schema and the same global catalog.
- A **tree** is a group of domains with a contiguous namespace, such as `corp.example.com` and `vienna.corp.example.com`.
- A **domain** is an administrative unit with its own database, its own policies and its own administrators. Between the domains of a forest, transitive **trusts** exist automatically.
- **Organisational units** (OUs) are containers within a domain that structure objects, for example by location or department. Group Policy objects can be linked to OUs, and administrative rights can be delegated.

Most companies manage with a single domain in one forest.

:::tip[Domain name]
Use a subdomain of a domain you own as the name of the AD domain, such as `corp.example.com` or `ad.company.com`. Endings such as `.local` should no longer be used because they conflict with other protocols such as mDNS, and no public certificates are issued for them.
:::

## Physical structure

- A **domain controller** (DC) is a server running AD DS that stores a copy of the directory database (`NTDS.dit`). Every domain should have at least two DCs so that sign-in still works if one server fails.
- The DCs **replicate** changes with each other. Every DC can accept changes (multi-master replication).
- A **global catalog** is a DC that additionally holds a partial copy of all objects in the entire forest to speed up searches.
- **Sites** represent the physical network structure, for example the Vienna and Graz branches. Clients preferably sign in at a DC in their own site, and replication between sites can be scheduled.
- A **read-only domain controller** (RODC) contains a read-only copy and is suitable for branch offices with low physical security.

### FSMO roles

Some tasks may only be performed by a single DC. These **operations master roles** (FSMO roles) are:

| Role                     | Number                | Task                                                      |
| ------------------------ | --------------------- | --------------------------------------------------------- |
| Schema master            | 1 per forest          | changes to the schema, for example when installing Exchange |
| Domain naming master     | 1 per forest          | adding and removing domains                               |
| RID master               | 1 per domain          | allocates blocks of IDs for new objects to the DCs        |
| PDC emulator             | 1 per domain          | time source of the domain, password changes, account lockouts |
| Infrastructure master    | 1 per domain          | updates references to objects in other domains            |

```powershell
# Which DC holds which role?
Get-ADForest | Select-Object SchemaMaster, DomainNamingMaster
Get-ADDomain | Select-Object PDCEmulator, RIDMaster, InfrastructureMaster
```

## Objects

The most important objects in the directory are:

- **users** with sign-in name (`sAMAccountName`), user principal name (`anna.huber@corp.example.com`), password and attributes such as department or phone number
- **computers** that have joined the domain
- **groups**, to give permissions to whole groups rather than individual users
- **organisational units** for structuring

Every security principal has a unique **SID** (security identifier). Permissions are assigned internally via the SID, not the name. If a user is deleted and created again, they therefore have a new SID and lose all their old permissions.

## Groups

Groups have a **type** and a **scope**:

- **Security groups** are used for permissions, **distribution groups** only for email distribution lists.
- The scope defines who can be a member and where the group can be used:

| Scope           | Members                                           | Can be granted permissions on               |
| --------------- | ------------------------------------------------- | ------------------------------------------- |
| domain local    | users and groups from all domains of the forest and trusted domains | resources in its own domain |
| global          | users and global groups of its own domain         | resources in all domains                    |
| universal       | users and groups from all domains of the forest   | resources in all domains                    |

### AGDLP principle

The **AGDLP principle** has proven itself for permissions:

- **A**ccounts (user accounts) are placed in
- **G**lobal groups, which are formed by function or department (such as `GG_Sales`). These are placed in
- **D**omain **L**ocal groups, which stand for one resource and permission (such as `DL_Sales_Read`). These receive the
- **P**ermissions on the resource.

If a new employee joins sales, she only has to be added to the group `GG_Sales` and immediately has all the necessary rights. If the permissions on a folder change, only the assignment of the domain local group is affected. A uniform **naming convention** such as `GG_` and `DL_` makes the purpose of each group recognisable.

## Setting up a domain

### First domain controller

The first DC creates a new forest. A static IP address and a sensible computer name are prerequisites.

```powershell
Install-WindowsFeature -Name AD-Domain-Services -IncludeManagementTools

Install-ADDSForest -DomainName "corp.example.com" -DomainNetbiosName "CORP" `
    -InstallDns -SafeModeAdministratorPassword (Read-Host "DSRM password" -AsSecureString)
```

The **DSRM password** (Directory Services Restore Mode) is needed to restore the directory and must be kept safe. The server restarts automatically after installation and is then a domain controller and DNS server.

### Second domain controller

On the second server, first set the first DC as the DNS server, then:

```powershell
Install-WindowsFeature -Name AD-Domain-Services -IncludeManagementTools

Install-ADDSDomainController -DomainName "corp.example.com" -InstallDns `
    -Credential (Get-Credential "CORP\Administrator") `
    -SafeModeAdministratorPassword (Read-Host "DSRM password" -AsSecureString)
```

Afterwards, both DCs should use each other as the first DNS server and themselves as the second. `repadmin /replsummary` shows the replication status.

### Joining computers to the domain

A DC must be configured as the DNS server on the client, otherwise it cannot find the domain.

```powershell
Add-Computer -DomainName "corp.example.com" -Credential "CORP\Administrator" -Restart
```

## Managing objects

```powershell
# Create organisational units
New-ADOrganizationalUnit -Name "Vienna" -Path "DC=corp,DC=example,DC=com"
New-ADOrganizationalUnit -Name "Users" -Path "OU=Vienna,DC=corp,DC=example,DC=com"

# Create a group and add members
New-ADGroup -Name "GG_Sales" -GroupScope Global -GroupCategory Security `
    -Path "OU=Groups,OU=Vienna,DC=corp,DC=example,DC=com"
Add-ADGroupMember -Identity "GG_Sales" -Members "anna.huber", "max.mayer"

# Find and change users
Get-ADUser -Filter "Department -eq 'Sales'" -Properties Department
Set-ADUser -Identity "anna.huber" -Title "Team Lead"

# Unlock an account and reset the password
Unlock-ADAccount -Identity "max.mayer"
Set-ADAccountPassword -Identity "max.mayer" -Reset -NewPassword (Read-Host -AsSecureString)

# Find accounts that have not been used for 90 days
Search-ADAccount -AccountInactive -TimeSpan 90.00:00:00 -UsersOnly
```

Graphically, objects are managed with "Active Directory Users and Computers" (`dsa.msc`) or the "Active Directory Administrative Center". The Administrative Center shows the PowerShell commands it runs in the background at the bottom of the window. This way, you can learn PowerShell even while clicking.

## Delegation

Not everyone who has to reset passwords should be a domain administrator. With **delegation**, the support team, for example, gets the right to reset passwords in the `Vienna` OU but no further rights. This follows the **principle of least privilege**. Membership in the "Domain Admins" group should be limited to a few accounts that are only used for administrative tasks.
