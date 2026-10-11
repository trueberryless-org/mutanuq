---
title: DNS
description: Structure of the DNS namespace, recursive and iterative name resolution, caching and TTL, resource records, zone types, forwarders and setting up a DNS server on Windows Server.
sidebar:
  order: 5
---

People remember names, computers work with IP addresses. The **Domain Name System** (DNS) translates names such as `www.example.com` into IP addresses and back. Neither the internet nor Active Directory works without DNS: clients find their domain controllers exclusively via DNS. Most problems in a domain are therefore ultimately DNS problems.

## Namespace

DNS is a worldwide distributed, hierarchical database. The namespace is structured like an upside-down tree:

![Hierarchical structure of the DNS namespace](/images/deployment/dns_namespace_en.svg)

- The **root zone** is represented by a dot. It is served by 13 logical root server addresses, behind which there are hundreds of servers worldwide.
- Below it are the **top-level domains** (TLDs), such as country codes like `at` and `de` or generic ones like `com` and `org`.
- Below those are the **second-level domains**, such as `example` in `example.com`, and any number of further subdomains.

A **fully qualified domain name** (FQDN) contains the complete path up to the root, strictly speaking with a trailing dot: `www.example.com.`

A **zone** is the part of the namespace for which a particular DNS server is responsible (authoritative). Management of individual parts can be delegated to other servers. For example, nic.at is responsible for `at` and delegates the zone `example.at` to the DNS servers of the respective owner.

## Name resolution

![How DNS name resolution works](/images/deployment/dns_resolution_en.svg)

1. The client first checks its own cache and the `hosts` file. If it finds nothing, it asks its configured DNS server. This query is **recursive**: the client expects a complete answer.
2. If the DNS server does not know the answer from its cache, it asks a root server. The root server replies with a referral to the servers for `com`.
3. The DNS server asks a server for `com`, which refers it to the servers for `example.com`.
4. The authoritative server for `example.com` returns the IP address of `www.example.com`.
5. The DNS server passes the answer on to the client and stores it in its cache.

The queries of the DNS server to the root, TLD and authoritative servers are **iterative**: each server only answers with what it knows itself, usually with a referral to the next server.

### Caching and TTL

Every record has a **time to live** (TTL) in seconds. DNS servers and clients may cache the answer for that long. A long TTL relieves the servers but means that changes arrive everywhere only with a delay. Before a planned server move, the TTL is therefore shortened in good time.

DNS uses port 53, usually over UDP for normal queries and over TCP for large answers and zone transfers.

## Resource records

| Type   | Meaning                                                | Example                                                  |
| ------ | ------------------------------------------------------ | -------------------------------------------------------- |
| A      | name to IPv4 address                                   | `fs01 → 192.168.10.20`                                   |
| AAAA   | name to IPv6 address                                   | `fs01 → 2001:db8::20`                                    |
| CNAME  | alias, points to another name                          | `intranet → fs01.corp.example.com`                       |
| MX     | responsible mail server with priority                  | `example.com → 10 mail.example.com`                      |
| NS     | responsible name server of a zone                      | `example.com → ns1.example.com`                          |
| SOA    | start of authority: administrative data of the zone, such as serial number and timers | one per zone                  |
| PTR    | IP address to name (reverse lookup)                    | `20.10.168.192.in-addr.arpa → fs01.corp.example.com`     |
| SRV    | service with server, port and priority                 | `_ldap._tcp.corp.example.com → 0 100 389 dc01.corp.example.com` |
| TXT    | arbitrary text, for example for SPF or domain verification | `v=spf1 mx -all`                                     |

When a domain controller is promoted, Active Directory automatically registers numerous **SRV records**, such as `_ldap._tcp.dc._msdcs.corp.example.com` and `_kerberos._tcp.corp.example.com`. Clients use them to find the domain controllers.

## Zone types

- **Forward lookup zone:** resolves names to IP addresses, for example `corp.example.com`.
- **Reverse lookup zone:** resolves IP addresses to names. For the network `192.168.10.0/24` it is called `10.168.192.in-addr.arpa`.

By storage and replication, there are:

| Zone type            | Description                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| primary              | writable master copy of the zone, stored in a file                                              |
| secondary            | read-only copy fetched from the primary server via zone transfer                              |
| stub                 | contains only NS and SOA records to know the responsible servers of another zone               |
| Active Directory-integrated | stored in Active Directory and distributed to all DNS servers of the domain via AD replication; every DC can accept changes |

In a domain, AD-integrated zones are almost always used. They also allow **secure dynamic updates**: domain members may automatically create and update their own records but not overwrite other records.

## Forwarders

An internal DNS server only knows its own zones. For all other names, there are several options:

- **Root hints:** The server resolves names itself via the root servers.
- **Forwarders:** The server forwards queries to another DNS server, such as the provider's.
- **Conditional forwarders** forward only queries for a specific domain to specific servers, for example to a partner company via VPN.

## DNS server on Windows Server

When a domain controller is installed with `-InstallDns`, DNS is set up automatically. A standalone DNS server is configured like this:

```powershell
Install-WindowsFeature -Name DNS -IncludeManagementTools

# Create an AD-integrated reverse lookup zone
Add-DnsServerPrimaryZone -NetworkId "192.168.10.0/24" -ReplicationScope Domain

# Create records
Add-DnsServerResourceRecordA -ZoneName "corp.example.com" -Name "fs01" `
    -IPv4Address 192.168.10.20 -CreatePtr
Add-DnsServerResourceRecordCName -ZoneName "corp.example.com" -Name "intranet" `
    -HostNameAlias "fs01.corp.example.com"
Add-DnsServerResourceRecordMX -ZoneName "corp.example.com" -Name "." `
    -MailExchange "mail.corp.example.com" -Preference 10

# Set up forwarders
Add-DnsServerForwarder -IPAddress 1.1.1.1, 9.9.9.9
Add-DnsServerConditionalForwarderZone -Name "partner.example.net" -MasterServers 10.20.0.53

# Show the records of a zone
Get-DnsServerResourceRecord -ZoneName "corp.example.com"
```

## Troubleshooting

```powershell
Resolve-DnsName fs01.corp.example.com           # resolve a name
Resolve-DnsName 192.168.10.20                   # reverse lookup
Resolve-DnsName -Type SRV _ldap._tcp.dc._msdcs.corp.example.com   # find DCs
Resolve-DnsName www.example.com -Server 1.1.1.1 # ask a specific server

ipconfig /all          # which DNS servers does the client use?
ipconfig /flushdns     # clear the client cache
ipconfig /registerdns  # re-register the client's own records
Clear-DnsServerCache   # clear the DNS server cache
```

The classic tool `nslookup` also works and is available on Linux too.

:::caution[Most common mistake]
In a domain, clients and servers may **only** have the internal DNS servers of the domain configured, never an additional public one such as 8.8.8.8. Otherwise, the client sometimes asks the public server, which does not know the internal domain, and sign-in or Group Policy fails sporadically. The internal DNS server resolves external names via forwarders.
:::
