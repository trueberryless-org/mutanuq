---
title: Integrating Linux and Windows
description: Providing shares with Samba, mounting Windows shares on Linux, joining Linux servers to Active Directory with realmd and SSSD, and sharing files via NFS.
sidebar:
  order: 3
---

In heterogeneous networks, Linux and Windows systems have to exchange files and use the same user accounts. The curriculum calls this "cross-system file access between different operating systems" and "integration of different operating systems".

## Samba

**Samba** is a free implementation of the SMB protocol for Linux. It allows a Linux server to provide shares that Windows clients access exactly like a Windows file server. Samba can even work as an Active Directory domain controller.

### Setting up a share

```bash
sudo apt install samba
sudo mkdir -p /srv/samba/projects
sudo chown root:engineering /srv/samba/projects
sudo chmod 2770 /srv/samba/projects     # 2: new files inherit the group
```

The share is described in the configuration file `/etc/samba/smb.conf`:

```ini
[projects]
   path = /srv/samba/projects
   read only = no
   valid users = @engineering
   create mask = 0660
   directory mask = 2770
```

Samba manages its own passwords for its users. Without connecting to a domain, every user must also be created as a Samba user:

```bash
sudo smbpasswd -a anna
testparm                        # check the configuration for errors
sudo systemctl restart smbd
```

On Windows, the share can then be reached via `\\192.168.10.30\projects`.

## Mounting Windows shares on Linux

Conversely, a Linux system can mount Windows shares:

```bash
sudo apt install cifs-utils
sudo mkdir /mnt/sales
sudo mount -t cifs //fs01.corp.example.com/Sales /mnt/sales \
    -o username=anna,domain=CORP,uid=anna,gid=anna
```

For a permanent mount, an entry is added to `/etc/fstab`. The credentials belong in a separate file that only root can read, not directly in `/etc/fstab`:

```
//fs01.corp.example.com/Sales /mnt/sales cifs credentials=/root/.smb-sales,uid=anna 0 0
```

## Joining Linux to Active Directory

So that domain users can sign in to Linux servers, the server is joined to the domain with **realmd** and **SSSD** (System Security Services Daemon). SSSD looks up users and groups via LDAP, authenticates via Kerberos and caches credentials so that sign-in also works for a short time without a DC.

```bash
sudo apt install realmd sssd sssd-tools adcli krb5-user packagekit
realm discover corp.example.com
sudo realm join --user=Administrator corp.example.com
realm list
id anna@corp.example.com
```

Prerequisites are that the Linux server uses the domain controllers as DNS servers and that its time matches theirs, because Kerberos only tolerates a few minutes of time difference.

`sudo realm permit -g GG_Engineering@corp.example.com` restricts sign-in to one AD group. Which AD groups may use `sudo` is defined in a file under `/etc/sudoers.d/`.

## NFS

Between Linux and Unix systems, **NFS** (Network File System) is often used for file shares. It is leaner than SMB and is used, for example, for shared storage of virtualisation hosts or container platforms.

```bash
# Server
sudo apt install nfs-kernel-server
echo "/srv/nfs/data 192.168.10.0/24(rw,sync,no_subtree_check)" | sudo tee -a /etc/exports
sudo exportfs -ra

# Client
sudo apt install nfs-common
sudo mount -t nfs 192.168.10.30:/srv/nfs/data /mnt/data
```

With NFS version 3, the server trusts the user IDs reported by the client. Shares should therefore only be allowed for trusted networks. NFS version 4 can be secured with Kerberos.

## Comparison

| Criterion          | SMB (Windows, Samba)                        | NFS                                       |
| ------------------ | ------------------------------------------- | ----------------------------------------- |
| Typical clients    | Windows, macOS, Linux                        | Linux, Unix, VMware ESXi                  |
| Authentication     | username and password, Kerberos             | host-based (v3), Kerberos (v4)            |
| Permissions        | Windows ACLs                                 | Unix permissions, ACLs with v4            |
| Port               | TCP 445                                      | TCP/UDP 2049                              |
