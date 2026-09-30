---
title: File Services
description: Shares via SMB, share and NTFS permissions, effective permissions, access-based enumeration, home folders, DFS namespaces and replication, quotas and shadow copies.
sidebar:
  order: 7
---

A **file server** provides folders on the network that users access together. It must be precisely defined who may read, change or delete which files. Windows uses two types of permissions for this, which work together.

## Shares

A **share** makes a folder reachable over the network. Windows uses the **SMB** protocol (Server Message Block) over TCP port 445 for this. Access is via a UNC path of the form `\\Server\Share`, such as `\\fs01\Sales`.

A share whose name ends with `$`, such as `Data$`, is **hidden**: it is not shown when browsing the server, but authorised people can still reach it. Windows automatically creates administrative shares such as `C$` and `ADMIN$`.

## Permissions

### Share permissions

Share permissions only apply when accessing via the network and have three levels: **Read**, **Change** and **Full Control**.

### NTFS permissions

NTFS permissions apply to every access, local and over the network, and can be set much more finely:

| Permission             | Allows                                                           |
| ---------------------- | ---------------------------------------------------------------- |
| Full Control           | everything, including changing permissions and taking ownership |
| Modify                 | read, write, execute and delete                                  |
| Read & Execute         | view contents and run programs                                   |
| List Folder Contents   | list the files in a folder                                       |
| Read                   | open files and read attributes                                   |
| Write                  | create new files and change existing ones, but not delete them   |

By default, NTFS permissions are **inherited** from parent folders. Inheritance can be disabled on a folder to define its own permissions there.

### Effective permissions

- Permissions from several groups add up. If a user is in one group with "Read" and in another with "Modify", they may modify.
- An explicit **deny** takes precedence over an allow. Deny should therefore be used sparingly.
- When accessing over the network, the **more restrictive** of the two permissions applies, share or NTFS.

In practice, the share permission is therefore usually set generously, for example "Full Control" for authenticated users, and actual control is done only via NTFS. This way, there is only one place to check.

Permissions are granted via domain local groups according to the [AGDLP principle](/en/deployment/windows_server/active_directory/#agdlp-principle), never directly to individual users.

## Creating a share with PowerShell

```powershell
# Create the folder
New-Item -Path "D:\Shares\Sales" -ItemType Directory

# Create the share, control via NTFS
New-SmbShare -Name "Sales" -Path "D:\Shares\Sales" `
    -FullAccess "CORP\Domain Users" -FolderEnumerationMode AccessBased

# NTFS: remove inheritance, set permissions
icacls "D:\Shares\Sales" /inheritance:r
icacls "D:\Shares\Sales" /grant "CORP\Domain Admins:(OI)(CI)F"
icacls "D:\Shares\Sales" /grant "SYSTEM:(OI)(CI)F"
icacls "D:\Shares\Sales" /grant "CORP\DL_Sales_Modify:(OI)(CI)M"
icacls "D:\Shares\Sales" /grant "CORP\DL_Sales_Read:(OI)(CI)RX"

# Check
Get-SmbShareAccess -Name "Sales"
icacls "D:\Shares\Sales"
```

`(OI)(CI)` means that the permission is inherited by files (object inherit) and subfolders (container inherit). `F`, `M` and `RX` stand for Full Control, Modify and Read & Execute. The names of built-in groups such as "Domain Users" depend on the language of the system.

## Access-based enumeration

With **access-based enumeration**, users only see the folders and files they are allowed to access. This makes shares clearer and does not reveal which projects exist in other departments. In the example above, it is enabled with `-FolderEnumerationMode AccessBased`.

## Home folders

Each user can get a personal **home folder** on the file server, which is connected automatically as a drive at sign-in. It is entered in the user account, for example as `\\fs01\Home$\%username%` with the drive letter `H:`. Windows creates the folder and automatically gives the user full control of it.

With **folder redirection** via Group Policy, folders such as "Documents" or "Desktop" can also be redirected to the server. This way, the data is backed up centrally, and users find it on every PC.

## DFS

The **Distributed File System** (DFS) consists of two parts:

- **DFS Namespaces** combine shares from several servers under a uniform path, such as `\\corp.example.com\Data\Sales`. Users do not need to know on which server the data is actually stored. If a server is replaced, only the target in the namespace changes, not the path for the users.
- **DFS Replication** keeps folders on several servers in sync, for example between the Vienna and Graz sites. Only the changed parts of files are transferred.

```powershell
Install-WindowsFeature -Name FS-DFS-Namespace, FS-DFS-Replication -IncludeManagementTools

New-SmbShare -Name "Data" -Path "D:\DFSRoots\Data" -FullAccess "CORP\Domain Users"
New-DfsnRoot -Path "\\corp.example.com\Data" -TargetPath "\\fs01\Data" -Type DomainV2
New-DfsnFolder -Path "\\corp.example.com\Data\Sales" -TargetPath "\\fs01\Sales"
```

## File Server Resource Manager

The **File Server Resource Manager** (FSRM) offers additional functions:

- **Quotas** limit the storage space per folder, for example 5 GB per home folder. Hard quotas prevent further saving, soft quotas only send a warning.
- **File screens** prevent certain file types from being saved, such as videos or executable files.
- **Storage reports** show, for example, large, duplicate or long-unused files.

```powershell
Install-WindowsFeature -Name FS-Resource-Manager -IncludeManagementTools
New-FsrmQuota -Path "D:\Home\anna.huber" -Size 5GB
```

## Shadow copies

**Shadow copies** (Volume Shadow Copies) take snapshots of a volume at defined times. Users can restore older versions of files themselves via "Previous Versions" in Explorer, for example after accidentally overwriting them. Shadow copies are stored on the same disk and therefore do **not** replace a [backup](/en/deployment/security-strategies/).
