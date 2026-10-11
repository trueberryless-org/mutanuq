---
title: Monitoring
description: What is monitored, thresholds and alerting, SNMP with MIB and OID, syslog and severity levels, Windows event logs and well-known monitoring tools.
sidebar:
  order: 3
---

**Monitoring** continuously watches servers, network devices and services. The aim is to detect problems before users notice them: a disk that is 95 % full can be extended calmly. A full disk that stops the mail server, on the other hand, causes an outage.

## What is monitored?

- **Availability:** Can the server be reached by ping? Does the web server respond on port 443?
- **Resources:** utilisation of processor, memory, storage and network
- **Services:** Are important services such as DNS, DHCP or the database running?
- **Hardware:** temperatures, fans, power supplies, state of the disks and the RAID
- **Applications:** response times, error rates, queue lengths
- **Security:** failed sign-ins, expiring certificates, missing updates
- **Backups:** Did all backup jobs complete successfully?

## Thresholds and alerting

Thresholds are defined for every metric, for example **warning** from 80 % disk usage and **critical** from 90 %. If a threshold is exceeded, the monitoring system notifies the responsible people by email, SMS, chat or app.

Good alerting is difficult:

- Too many alerts lead to them being ignored (alert fatigue).
- Alerts should only fire when someone has to do something.
- A **baseline**, the normal course of a metric, helps to recognise what is unusual. 90 % CPU load during the nightly backup may be normal, but not in the morning.
- Dependencies should be taken into account: if a switch fails, one alert for the switch is enough instead of one for every server behind it.

## SNMP

The **Simple Network Management Protocol** (SNMP) is the standard for monitoring network devices such as switches, routers, printers and UPSs.

- The **manager** (the monitoring system) queries values from the **agents** on the devices. Queries use UDP port 161.
- For important events, the agents send a **trap** to the manager on their own, via UDP port 162.
- The values that can be queried are described in the **MIB** (Management Information Base), a hierarchical structure. Each value has a unique **OID** (object identifier), such as `1.3.6.1.2.1.1.3.0` for the uptime of a device.

| Version | Security                                                                     |
| ------- | ---------------------------------------------------------------------------- |
| SNMPv1, v2c | only a "community" as password, sent in plain text                       |
| SNMPv3  | users with authentication and encryption                                     |

Where possible, SNMPv3 should be used. The default communities `public` and `private` must always be changed.

```bash
# Query the uptime of a switch with SNMPv2c (Linux, package snmp)
snmpget -v2c -c secret-community 192.168.10.2 1.3.6.1.2.1.1.3.0
```

## Syslog

**Syslog** is a standard with which devices and Linux systems send log messages to a central server, usually via UDP port 514 or encrypted via TCP. Every message has a **severity**:

| Value | Severity      | Meaning                           |
| ----- | ------------- | --------------------------------- |
| 0     | Emergency     | system unusable                   |
| 1     | Alert         | immediate action required         |
| 2     | Critical      | critical condition                |
| 3     | Error         | error                             |
| 4     | Warning       | warning                           |
| 5     | Notice        | normal but significant            |
| 6     | Informational | information                       |
| 7     | Debug         | debugging messages                |

Collecting all logs centrally makes troubleshooting easier and is important for security: an attacker who takes over a server can delete the logs there, but not the copies on the central server. Systems that collect logs centrally and analyse them for attacks are called **SIEM** (security information and event management).

## Windows event logs

Windows writes messages to the **event logs**, which are read with Event Viewer (`eventvwr.msc`) or PowerShell. The most important logs are **System**, **Application** and **Security**. Useful event IDs include:

| ID   | Log        | Meaning                                   |
| ---- | ---------- | ----------------------------------------- |
| 4624 | Security   | successful sign-in                        |
| 4625 | Security   | failed sign-in                            |
| 4740 | Security   | user account was locked out               |
| 1074 | System     | restart or shutdown by a user or process  |
| 6008 | System     | unexpected shutdown                       |
| 7036 | System     | service was started or stopped            |

```powershell
# The last 20 failed sign-ins
Get-WinEvent -FilterHashtable @{ LogName = "Security"; Id = 4625 } -MaxEvents 20

# All errors in the System log in the last 24 hours
Get-WinEvent -FilterHashtable @{ LogName = "System"; Level = 2; StartTime = (Get-Date).AddDays(-1) }
```

With **event forwarding**, Windows computers can send their events to a central collector. **Performance Monitor** (`perfmon`) records performance counters such as CPU load or disk queue length over longer periods.

## Monitoring tools

| Tool                  | Characteristics                                                                 |
| --------------------- | ------------------------------------------------------------------------------- |
| Zabbix                | open source, very comprehensive, agents for many systems and SNMP               |
| Checkmk               | based on Nagios, easy automatic discovery of services, free and commercial editions |
| Nagios, Icinga        | classic open-source systems with many plug-ins                                  |
| PRTG                  | commercial, Windows-based, easy setup via sensors                               |
| Prometheus and Grafana | open source, stores time series, very common for containers and cloud applications, Grafana for dashboards |

The monitoring system itself must also be monitored. If it fails unnoticed, you believe everything is fine while in fact nobody is watching any more.
