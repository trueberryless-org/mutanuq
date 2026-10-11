---
title: Firewalls and VPN
description: Packet filters, stateful inspection and application-level gateways, firewall architectures with a DMZ, rule sets, Windows Defender Firewall as well as site-to-site and remote access VPNs.
sidebar:
  order: 4
---

A **firewall** controls the traffic between networks and only lets permitted connections through. It is the most important technical measure for separating a company network from the internet, but it is not enough on its own. Security only comes from several layers of protection (defence in depth).

## Types of firewalls

### Packet filter

A **packet filter** decides for every single packet based on the header information: source and destination IP address, protocol and source and destination port. It works on layers 3 and 4 of the OSI model and is fast, but knows nothing about the relationships between packets. Reply packets therefore have to be allowed explicitly.

### Stateful inspection

A **stateful firewall** keeps track of which connections have been established in a state table. Reply packets belonging to a permitted connection are let through automatically, and all other incoming packets are dropped. This is the standard for all firewalls today.

### Application-level gateway

An **application-level gateway** (proxy) works at the application layer. It accepts the client's connection, inspects the content, such as HTTP requests or emails, and establishes a new connection to the destination itself. This allows it to filter content, detect malware and block protocol violations, but it needs a lot of computing power.

### Next-generation firewall

A **next-generation firewall** (NGFW) combines stateful inspection with further functions: detecting applications regardless of port, intrusion detection and prevention (IDS/IPS), filtering websites by category, inspecting encrypted connections and using user identities from Active Directory. Well-known vendors are Palo Alto Networks, Fortinet, Check Point, Cisco and Sophos. Open-source alternatives are pfSense and OPNsense.

A **web application firewall** (WAF) specifically protects web applications from attacks such as SQL injection or cross-site scripting.

## Firewall architectures

### DMZ

Servers that must be reachable from the internet, such as web servers or mail relays, must not be placed in the internal network. Otherwise, an attacker who takes over one of these servers would have direct access to all other systems. They are therefore operated in a **demilitarised zone** (DMZ), a separate network between the internet and the LAN.

![Firewall architecture with a DMZ between an outer and an inner firewall](/images/deployment/firewall_dmz_en.svg)

- In the variant with **two firewalls** (screened subnet), the DMZ lies between an outer and an inner firewall. If products from different vendors are used, a vulnerability in one firewall does not automatically compromise the other.
- In the **three-legged firewall**, a single firewall has three interfaces: internet, DMZ and LAN. This is cheaper, but the firewall is a single point of failure for security.

### Rules between the zones

| From     | To       | Allowed                                              |
| -------- | -------- | ---------------------------------------------------- |
| Internet | DMZ      | only the published services, such as HTTPS to the web server |
| Internet | LAN      | nothing                                              |
| DMZ      | LAN      | as little as possible, at most individual, precisely defined connections |
| LAN      | DMZ      | administration and required services                 |
| LAN      | Internet | required services, often via a proxy                 |

Modern networks are also divided into zones internally, for example with separate VLANs for servers, clients, printers, guests and management interfaces, between which traffic is also filtered (**segmentation**).

## Rule set

A firewall rule set is processed from top to bottom. The first matching rule decides. Principles for a good rule set:

- **Default deny:** Everything that is not explicitly allowed is forbidden. The last rule therefore drops all remaining packets.
- **Least privilege:** Only allow the connections that are actually needed, as precisely as possible by source, destination and port.
- **Documentation:** Every rule gets a description, a responsible person and a date. Rules that are no longer needed are removed.
- **Logging:** Dropped connections are logged to detect attacks and misconfigurations.

| No. | Source            | Destination       | Service       | Action    | Description                    |
| --- | ----------------- | ----------------- | ------------- | --------- | ------------------------------ |
| 1   | any               | web server (DMZ)  | TCP 443       | allow     | website                        |
| 2   | any               | mail relay (DMZ)  | TCP 25        | allow     | incoming email                 |
| 3   | mail relay (DMZ)  | mail server (LAN) | TCP 25        | allow     | deliver email inside           |
| 4   | LAN               | any               | TCP 80, 443   | allow     | web access                     |
| 5   | LAN               | external DNS server | UDP/TCP 53  | allow     | only for the internal DNS servers |
| 6   | any               | any               | any           | drop      | default deny, log              |

**NAT** (network address translation) translates private internal addresses into the public address of the firewall. With **port forwarding**, requests to a specific public port are forwarded to an internal server, for example HTTPS to the web server in the DMZ.

## Windows Defender Firewall

Every individual server and client also has its own firewall (**host firewall**). Windows Defender Firewall distinguishes three **profiles**, depending on the network the computer is connected to:

- **Domain:** The computer can reach a domain controller of its domain.
- **Private:** trusted network, for example at home
- **Public:** unknown network, such as Wi-Fi in a café, with the strictest rules

```powershell
# Allow incoming connections to a web application on port 8080 from the LAN
New-NetFirewallRule -DisplayName "Web application 8080" -Direction Inbound `
    -Protocol TCP -LocalPort 8080 -RemoteAddress 192.168.10.0/24 -Action Allow -Profile Domain

# Show rules and check profiles
Get-NetFirewallRule -Enabled True -Direction Inbound | Select-Object DisplayName, Profile
Get-NetFirewallProfile | Select-Object Name, Enabled, DefaultInboundAction
```

In a domain, firewall rules are distributed centrally via [Group Policy](/en/deployment/windows_server/group_policies/).

## VPN

A **virtual private network** (VPN) connects networks or devices in encrypted form over an insecure network such as the internet.

- **Site-to-site VPN:** permanently connects two sites, for example the Vienna and Graz branches. The connection is established between the firewalls, and the clients do not notice anything.
- **Remote access VPN:** connects individual devices, such as laptops working from home, to the company network. A VPN client runs on the device.

| Protocol  | Characteristics                                                                 |
| --------- | ------------------------------------------------------------------------------- |
| IPsec     | standard for site-to-site connections between firewalls from different vendors, works at the network layer |
| OpenVPN   | open source, uses TLS, very flexible                                            |
| WireGuard | modern, lean and fast, with little configuration                                |
| SSL VPN   | access via TLS, often via the browser or a vendor client                        |

VPN access should always be secured with **multi-factor authentication**, because otherwise stolen passwords give direct access to the company network. Modern concepts such as **zero trust** go even further: every access is checked individually based on identity, device and context, regardless of whether it comes from the internal network or from outside.
