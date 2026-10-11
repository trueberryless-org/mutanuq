---
title: Exercises
description: Step-by-step exercises for building a complete Windows domain with two domain controllers, DNS, DHCP, a file server, Group Policy and automation.
sidebar:
  order: 9
---

The following exercises build on each other and result in a complete small company environment, as it is typically built in the lab exercises at technical college. You need a computer with Hyper-V, VirtualBox or VMware and about 16 GB of memory.

![Lab network with two domain controllers, a file server and a client](/images/deployment/lab_network_en.svg)

:::tip[Before you start]
Take a **snapshot** (checkpoint) of all VMs after every completed exercise. If something goes wrong, you can then return to the last working state. Record passwords and IP addresses in your own table.
:::

## Exercise 1: prepare the virtual network

1. In your virtualisation software, create an internal or private network, for example an internal switch "LAN-Vienna".
2. Create a VM "GW" as a router, for example with pfSense, OPNsense or a Linux server, with one adapter to the internet and one to the internal network (192.168.10.1/24).
3. Create three VMs with Windows Server (DC01, DC02, FS01) and one VM with Windows 11 (CL01), all in the internal network.

**Check:** All VMs start, and GW can be reached from the internal network with `ping 192.168.10.1`.

## Exercise 2: initial configuration

Carry out the [initial configuration](/en/deployment/windows_server/installation/#initial-configuration) on DC01, DC02 and FS01:

| Server | IP address    | Gateway      | DNS server                |
| ------ | ------------- | ------------ | ------------------------- |
| DC01   | 192.168.10.10 | 192.168.10.1 | 127.0.0.1 (for now)       |
| DC02   | 192.168.10.11 | 192.168.10.1 | 192.168.10.10             |
| FS01   | 192.168.10.20 | 192.168.10.1 | 192.168.10.10, 192.168.10.11 |

**Check:** `Get-NetIPConfiguration` shows the correct values, and the servers can ping each other. Note that Windows Firewall blocks pings by default until the rule "File and Printer Sharing (Echo Request - ICMPv4-In)" is enabled.

## Exercise 3: create the domain

1. Install the AD DS role on DC01 and create the forest `corp.example.com` (see [Active Directory](/en/deployment/windows_server/active_directory/#setting-up-a-domain)).
2. Promote DC02 to an additional domain controller.
3. On both DCs, set the other DC first and then the server itself as DNS servers.
4. On DC01, set up a forwarder to the DNS server of your router or a public DNS server.

**Check:**

```powershell
Get-ADDomainController -Filter * | Select-Object Name, IPv4Address, IsGlobalCatalog
repadmin /replsummary
Resolve-DnsName -Type SRV _ldap._tcp.dc._msdcs.corp.example.com
Resolve-DnsName www.example.com
```

## Exercise 4: reverse lookup zone and DNS records

1. Create an AD-integrated reverse lookup zone for `192.168.10.0/24`.
2. Create an A record with PTR for FS01 if it was not registered automatically.
3. Create a CNAME `data.corp.example.com` pointing to FS01.

**Check:** `Resolve-DnsName 192.168.10.20` returns `fs01.corp.example.com`, and `Resolve-DnsName data.corp.example.com` returns the address of FS01.

## Exercise 5: DHCP with failover

1. Install the DHCP role on DC01 and DC02 and authorise both in AD.
2. On DC01, create the scope 192.168.10.100 to 192.168.10.200 with the options router, DNS servers and DNS domain name.
3. Exclude 192.168.10.100 to 192.168.10.109 for printers.
4. Set up failover with load balancing to DC02.

**Check:** CL01 receives an address from the scope with `ipconfig /renew`. Shut down DC01 and check whether CL01 still gets an address.

## Exercise 6: structure, users and groups

1. Create the following OU structure: `Vienna` with the child OUs `Users`, `Computers` and `Groups`.
2. Use a [PowerShell script](/en/deployment/windows_server/powershell/#example-creating-users-from-a-csv-file) to create at least ten users from a CSV file, spread across the Sales and Engineering departments.
3. Create the global groups `GG_Sales` and `GG_Engineering` and add the users accordingly.
4. Join CL01 to the domain and move the computer account to the `Computers` OU.

**Check:** You can sign in to CL01 with one of the new users and must change the password.

## Exercise 7: file server according to AGDLP

1. Join FS01 to the domain and create the folders `Sales`, `Engineering` and `All` on a second disk `D:`.
2. Create the domain local groups `DL_Sales_Modify`, `DL_Sales_Read`, `DL_Engineering_Modify` and `DL_All_Modify` and add the global groups accordingly. Engineering should only be able to read in the sales folder.
3. Share the folders, set the NTFS permissions and enable access-based enumeration.
4. Set up a home folder `\\fs01\Home$\%username%` with a quota of 2 GB for every user.

**Check:** A user from engineering can open files in the sales folder but not save them. A user from sales does not see the `Engineering` folder at all.

## Exercise 8: Group Policy

Create and link GPOs that do the following:

1. All users in `Vienna` get drive `S:` mapped to their department folder (item-level targeting by group) and `P:` mapped to `\\fs01\All`.
2. The screen locks after 10 minutes of inactivity.
3. Access to USB storage is blocked on all computers in `Vienna\Computers`.
4. The domain requires passwords with at least 12 characters, and accounts are locked for 15 minutes after 10 failed attempts.

**Check:** After `gpupdate /force` and a new sign-in, `gpresult /r` shows the GPOs, and the drives are connected.

## Exercise 9: automation

Write a PowerShell script that

1. lists all users who have not signed in for 30 days,
2. disables these accounts and moves them to an OU `Disabled`,
3. creates a CSV file with the affected accounts and the date.

Test the script with `-WhatIf` first and then set it up as a weekly scheduled task.

## Exercise 10: simulate a failure

1. Shut down DC01.
2. Check whether users can still sign in to CL01, whether DNS names are resolved and whether the client gets a DHCP address.
3. Find out which FSMO roles are held by DC01 and consider what would happen if DC01 failed permanently. Research how to transfer the roles to DC02 with `Move-ADDirectoryServerOperationMasterRole`.

This exercise shows why services such as AD DS, DNS and DHCP are always operated redundantly (see [high availability](/en/deployment/operations/high_availability/)).
