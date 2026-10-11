---
title: Server Hardware
description: Server form factors, processors, ECC memory, redundant power supplies, hot swap, RAID controllers, remote management via BMC and criteria for choosing server hardware.
sidebar:
  order: 1
---

At first glance, a server looks like a powerful PC. However, it is built for a different purpose: it should run around the clock for years, handle many requests at once and keep working even if individual components fail.

## Form factors

| Form factor | Description                                                                            | Use                                       |
| ----------- | -------------------------------------------------------------------------------------- | ----------------------------------------- |
| Tower       | stands like a PC, quiet, lots of room for expansion                                    | small offices without a server room       |
| Rack        | flat case for 19-inch cabinets, height in rack units (1 U = 1.75 inches = 4.445 cm)     | server rooms and data centres             |
| Blade       | narrow modules in a shared enclosure (chassis) that provides power, cooling and networking | large data centres with high density  |

A typical server rack has 42 U. Besides the servers, it contains switches, patch panels, an uninterruptible power supply and power distribution units.

## Components

- **Processors:** Server processors such as Intel Xeon or AMD EPYC have many cores, support large amounts of memory and often several processors per mainboard. Many cores are important for virtualisation, a high clock speed for some databases. Since Windows Server is licensed per core, the number of cores also affects licence costs.
- **ECC memory:** Memory with error correction (Error Correcting Code) detects and corrects single-bit errors. Without ECC, such errors can silently corrupt data or crash the system.
- **Storage:** SSDs with high write endurance (specified in drive writes per day), NVMe SSDs for high performance, hard disks for large, cheap storage. Connected via SAS, SATA or NVMe.
- **RAID controller or HBA:** A hardware RAID controller combines disks into a RAID (see [storage systems](/en/deployment/storage-systems/)). A host bus adapter passes the disks directly to the operating system, for example for software-defined storage.
- **Network:** several network ports, often with 10, 25 or more Gbit/s, which can be combined into a team to increase bandwidth and reliability.

## Redundancy inside the server

Servers are built so that individual components may fail:

- **redundant power supplies** connected to two separate circuits
- several fans that take over cooling if one fails
- **hot swap**: disks, power supplies and fans can be replaced while the server is running
- RAID for the disks and several network ports

## Remote management

Every server has its own small management computer, the **baseboard management controller** (BMC), with its own network port. Manufacturers give it different names, such as iDRAC (Dell), iLO (HPE) or XClarity Controller (Lenovo). Via the BMC, you can:

- switch the server on and off, even if the operating system hangs,
- control the screen and keyboard remotely in the browser,
- mount ISO files as a virtual drive and reinstall the operating system,
- monitor temperatures, fans and hardware errors.

Standardised interfaces for this are IPMI and the more modern Redfish. Because the BMC offers full control over the server, it belongs in a separate, isolated management network.

## Choosing server hardware

When choosing hardware, the requirements of the planned services are weighed against the costs:

1. **Gather requirements:** Which services and how many virtual machines should run? How many users access them? How much storage is needed today and in five years?
2. **Size the system:** processor cores, memory, storage capacity and performance, network bandwidth with headroom for growth.
3. **Define availability:** What downtime is acceptable? Are redundant components or several servers needed?
4. **Consider total costs:** Besides the purchase price, licences, power, cooling, maintenance contracts and administration count. This is called the **total cost of ownership** (TCO).
5. **Agree on service:** Maintenance contracts define how quickly the manufacturer replaces defective parts, for example on the next business day or within four hours.

For many tasks, running them in the cloud is also an alternative (see [cloud computing](/en/decentralised-systems/cloud-computing/)). The decision depends on costs, data protection, the flexibility required and the available know-how.
