---
title: DHCP
description: Automatic assignment of IP addresses with the DORA process, scopes, exclusions, reservations and options, DHCP relay, failover and setup on Windows Server.
sidebar:
  order: 6
---

The **Dynamic Host Configuration Protocol** (DHCP) assigns IP addresses and further network settings to clients automatically. Without DHCP, every IP address would have to be entered by hand, which is error-prone with many devices and leads to duplicate addresses.

## Process

A client that does not yet have an IP address obtains one in four steps, abbreviated **DORA**:

![DHCP address assignment with discover, offer, request and acknowledge](/images/deployment/dhcp_dora_en.svg)

1. **Discover:** The client sends a broadcast to all devices on the network to find DHCP servers.
2. **Offer:** Every DHCP server that can serve the client offers a free IP address.
3. **Request:** The client chooses an offer and requests the address via broadcast. This way, the other servers also learn that their offer was not accepted.
4. **Acknowledge:** The server confirms the assignment and sends the further settings along with it.

DHCP uses UDP; the server listens on port 67, the client on port 68.

## Lease

An IP address is not assigned permanently but for a certain time, the **lease duration**. After half of this time, the client tries to renew the lease with the same server. If that fails, it tries again with any server after 87.5 % of the time. If the lease expires, it must release the address.

If a Windows client finds no DHCP server at all, it assigns itself an address from the range `169.254.0.0/16` (APIPA). Such an address is a clear sign of a DHCP problem.

## Configuration

- A **scope** is a contiguous range of addresses in a subnet from which addresses are assigned, for example `192.168.10.100` to `192.168.10.200`.
- **Exclusions** are addresses within the scope that are not assigned, for example because devices with static addresses use them.
- **Reservations** always assign the same IP address to a particular MAC address. They are suitable for printers or devices that should always be reachable at the same address but are managed centrally.
- **Options** are additional settings sent along with the address:

| Option | Meaning                   | Example                      |
| ------ | ------------------------- | ---------------------------- |
| 003    | router (default gateway)  | 192.168.10.1                 |
| 006    | DNS servers               | 192.168.10.10, 192.168.10.11 |
| 015    | DNS domain name           | corp.example.com             |
| 042    | NTP servers               | 192.168.10.10                |
| 066, 067 | boot server and boot file for network boot (PXE) | wds01, boot\x64\wdsnbp.com |

Options can be set at server level (for all scopes), at scope level or for individual reservations. The more specific level wins.

## DHCP across subnets

Routers do not forward broadcasts. So that a DHCP server can serve clients in several subnets or VLANs, a **DHCP relay agent** (on Cisco devices `ip helper-address`) is configured on the router. It receives the broadcasts and forwards them to the DHCP server as unicast. The server recognises from the relay address field which subnet the request comes from and chooses the matching scope.

## Reliability

If the only DHCP server fails, new devices no longer get an address. Windows Server provides **DHCP failover** between two servers for this:

- **Load balance:** Both servers assign addresses at the same time, for example half each.
- **Hot standby:** One server works, and the other only takes over in the event of a failure.

A simpler, older solution is the **80/20 rule**: two servers manage non-overlapping parts of the same scope, one 80 %, the other 20 %.

## DHCP server on Windows Server

In a domain, a DHCP server must be **authorised** in Active Directory before it assigns addresses. This prevents a misconfigured server from disrupting the network.

```powershell
Install-WindowsFeature -Name DHCP -IncludeManagementTools

# Create the security groups and authorise the server in AD
Add-DhcpServerSecurityGroup
Restart-Service DHCPServer
Add-DhcpServerInDC -DnsName "dc01.corp.example.com" -IPAddress 192.168.10.10

# Create a scope
Add-DhcpServerv4Scope -Name "LAN Vienna" -StartRange 192.168.10.100 -EndRange 192.168.10.200 `
    -SubnetMask 255.255.255.0 -LeaseDuration 08:00:00

# Exclusion for printers with static addresses
Add-DhcpServerv4ExclusionRange -ScopeId 192.168.10.0 -StartRange 192.168.10.100 -EndRange 192.168.10.109

# Scope options
Set-DhcpServerv4OptionValue -ScopeId 192.168.10.0 -Router 192.168.10.1 `
    -DnsServer 192.168.10.10, 192.168.10.11 -DnsDomain "corp.example.com"

# Reservation
Add-DhcpServerv4Reservation -ScopeId 192.168.10.0 -IPAddress 192.168.10.150 `
    -ClientId "00-15-5D-0A-01-23" -Name "Printer Sales"

# Set up failover with the second server
Add-DhcpServerv4Failover -Name "Failover Vienna" -PartnerServer "dc02.corp.example.com" `
    -ScopeId 192.168.10.0 -LoadBalancePercent 50 -SharedSecret (Read-Host "Secret")

# Show assigned addresses
Get-DhcpServerv4Lease -ScopeId 192.168.10.0
```

`-SharedSecret` expects plain text. Here too, it is prompted for so that it does not end up in the script.

## Troubleshooting on the client

```powershell
ipconfig /all       # show address, lease times and DHCP server
ipconfig /release   # release the address
ipconfig /renew     # request a new address
```

If a client has an APIPA address, check whether the DHCP server is running and authorised, whether the scope is active and still has free addresses, and whether a relay agent is configured in other subnets.
