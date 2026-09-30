---
title: High Availability
description: Calculating availability, avoiding single points of failure, RTO and RPO, failover clusters, load balancing, uninterruptible power supplies and geo-redundant data centres.
sidebar:
  order: 2
---

If the mail server, the ERP system or the web shop fails, work comes to a standstill in many companies. **High availability** means building systems so that they keep running despite the failure of individual components, or are available again within a very short time.

## Availability

**Availability** is the proportion of time in which a system works as intended:

$$
\text{availability} = \frac{\text{total time} - \text{downtime}}{\text{total time}}
$$

Even small differences in per cent mean large differences in the permitted downtime:

| Availability  | Downtime per year    | Downtime per month    |
| ------------- | -------------------- | --------------------- |
| 99 %          | 3.65 days            | about 7.3 hours       |
| 99.9 %        | 8.76 hours           | about 44 minutes      |
| 99.99 %       | 52.6 minutes         | about 4.4 minutes     |
| 99.999 %      | 5.26 minutes         | about 26 seconds      |

These values are agreed with service providers in **service level agreements** (SLAs). People speak of "three nines" for 99.9 % or "five nines" for 99.999 %.

### Series and parallel systems

If a service depends on several components that **all** have to work, their availabilities multiply. A web shop with a web server (99.9 %), a database (99.9 %) and an internet connection (99.5 %) is only $0.999 \cdot 0.999 \cdot 0.995 \approx 99.3\,\%$ available.

If, on the other hand, two equivalent components exist in parallel and one of them is enough, the service only fails if **both** fail. With two servers of 99 % availability each, the result is $1 - 0.01 \cdot 0.01 = 99.99\,\%$.

## Single point of failure

A **single point of failure** (SPOF) is a component whose failure brings down the whole system. To achieve high availability, every SPOF has to be found and eliminated:

| Component            | Measure                                                      |
| -------------------- | ------------------------------------------------------------ |
| Disk                 | RAID                                                         |
| Power supply unit    | redundant power supplies on separate circuits                |
| Power supply         | UPS and emergency generator                                  |
| Network card, switch | several ports connected to different switches                |
| Server               | cluster or several servers with load balancing               |
| Domain controller, DNS, DHCP | at least two servers                                 |
| Internet connection  | two lines from different providers                           |
| Data centre          | a second data centre at another location                     |
| Person               | documentation and a deputy arrangement                       |

## RTO and RPO

For each service, it is defined how quickly it must be running again after a failure and how much data may be lost:

- The **recovery time objective** (RTO) is the maximum tolerable downtime, for example 4 hours for the ERP system.
- The **recovery point objective** (RPO) is the maximum tolerable data loss, measured as a period of time. An RPO of 24 hours allows daily backups, while an RPO of a few minutes requires continuous replication.

The smaller the RTO and RPO, the more expensive the solution.

## Failover cluster

A **failover cluster** consists of several servers (nodes) that together provide a service. If one node fails, another automatically takes over. To the clients, the cluster looks like a single server with the same name and IP address.

On Windows Server, the **Failover Clustering** feature provides this function. Typical uses are highly available Hyper-V virtual machines, file servers and SQL Server. Important terms:

- **Shared storage:** All nodes access the same storage, such as a SAN or Storage Spaces Direct, so that the node taking over has the data immediately.
- **Heartbeat:** The nodes constantly check whether the others are still reachable.
- **Quorum:** So that two halves of the cluster do not continue working at the same time after a network disruption (split brain), only the part that has the majority of votes may keep running. With an even number of nodes, an additional **witness** decides, for example a file share or cloud storage.

A distinction is made between **active-passive clusters**, in which one node works and the other stands by, and **active-active clusters**, in which all nodes work at the same time.

## Load balancing

With **load balancing**, a load balancer distributes requests across several equivalent servers, for example with the round-robin method or to the least busy server. If a server fails, the load balancer detects this via health checks and stops sending requests there. Load balancing is particularly suitable for web servers and applications that do not store state on the server. Well-known solutions are HAProxy, nginx, F5 and the load balancers of the cloud providers.

## Uninterruptible power supply

A **UPS** (uninterruptible power supply) bridges power failures with batteries and protects against voltage fluctuations:

| Type                         | How it works                                                                 |
| ---------------------------- | ---------------------------------------------------------------------------- |
| Offline or standby (VFD)     | The load is connected directly to the mains; if the power fails, it switches to battery within a few milliseconds. |
| Line-interactive (VI)        | like offline, but also compensates for voltage fluctuations                  |
| Online or double conversion (VFI) | The load is constantly supplied from the battery circuit via the inverter, with no switchover time and the best protection |

The battery runtime is usually only enough for a few minutes. During this time, an emergency generator takes over, or the servers are shut down in an orderly way via the UPS software.

## Geo-redundancy

Only a second site helps against disasters such as fire, flooding or large-scale power outages. Data is replicated there, and in a disaster, operations continue at the second site according to a prepared **disaster recovery plan**. The plan must be practised regularly.
