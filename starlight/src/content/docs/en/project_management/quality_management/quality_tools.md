---
title: Quality Tools
description: The seven basic quality tools with check sheet, Pareto and Ishikawa diagrams, the 5 whys method, FMEA with the risk priority number and Six Sigma.
sidebar:
  order: 2
---

There are proven tools for recognising quality problems, finding their causes and checking improvements. Many of them are simple and can be used without special software.

## The seven basic quality tools

The **seven basic quality tools** originate in Japan and are mainly used to analyse problems.

### Check sheet

On a **check sheet**, defects are recorded by type and frequency with tally marks. It is often the first step in collecting data about a problem.

| Defect type                   | Mon | Tue | Wed | Thu | Fri | Total |
| ----------------------------- | --- | --- | --- | --- | --- | ----- |
| Forgotten password            | 12  | 9   | 11  | 8   | 10  | 50    |
| Printer not working           | 4   | 6   | 3   | 5   | 2   | 20    |
| VPN connection drops          | 3   | 2   | 4   | 3   | 3   | 15    |
| Missing software              | 2   | 1   | 2   | 3   | 2   | 10    |
| Other                         | 1   | 1   | 1   | 1   | 1   | 5     |

### Histogram

A **histogram** shows the frequency distribution of measured values as columns, for example the distribution of a server's response times. It shows whether the values scatter around a mean, whether there are outliers and whether limits are exceeded.

### Pareto chart

The **Pareto chart** sorts causes of defects by frequency in descending order and also shows the cumulative share. It is based on the **Pareto principle**: often, about 20 % of the causes are responsible for around 80 % of the problems. In the check sheet above, the two most frequent defect types together account for 70 % of all tickets. A self-service for resetting passwords would therefore have the greatest effect.

### Cause-and-effect diagram

The **cause-and-effect diagram** (Ishikawa or fishbone diagram) collects possible causes of a problem sorted by category. The six Ms are often used; in English they are usually named people, machine, method, material, measurement and environment.

![Ishikawa diagram on why a website loads slowly](/images/project_management/ishikawa_en.svg)

### Scatter diagram

The **scatter diagram** shows whether two quantities are related, for example the number of simultaneous users and the response time. A correlation, however, is not yet proof of a cause.

### Control chart

In a **control chart**, measured values are plotted over time together with a centre line and upper and lower control limits. If a value lies outside the limits or a conspicuous trend appears, action must be taken. Monitoring dashboards for servers work on the same principle.

### Flowchart

The **flowchart** shows a process step by step. It helps to understand procedures, find weak points and plan improvements. Some versions of the seven tools list stratification instead, where data is analysed separately by characteristics such as location or shift.

## 5 whys

With the **5 whys method**, you keep asking "why" until the actual cause is found, usually after about five questions:

1. Why was the web shop unavailable? Because the server had no disk space left.
2. Why did it have no disk space left? Because the log files filled the disk.
3. Why did the log files fill the disk? Because they were never deleted.
4. Why were they never deleted? Because no log rotation was set up.
5. Why was no log rotation set up? Because there is no checklist for setting up new servers.

The actual cause is therefore not the full disk, but the missing checklist.

## FMEA

The **failure mode and effects analysis** (FMEA) examines in advance which failures can occur in a product or process. For each possible failure, three values from 1 to 10 are assigned:

- **S** for the severity of the effect
- **O** for the likelihood of occurrence
- **D** for detection, where 10 means that the failure is hardly ever detected

The product is the **risk priority number** $RPN = S \cdot O \cdot D$ with values between 1 and 1000. Failures with a high RPN are dealt with first. Newer versions of the FMEA use an action priority instead of the RPN, but the basic principle remains the same.

| Possible failure             | Effect                        | S | O | D | RPN | Measure                                   |
| ---------------------------- | ----------------------------- | - | - | - | --- | ----------------------------------------- |
| Backup does not complete     | data loss in an emergency     | 9 | 3 | 7 | 189 | automatic alert, monthly restore test     |
| Certificate expires          | website unreachable           | 7 | 4 | 5 | 140 | automatic renewal, monitoring             |
| Typo in the configuration    | service does not start        | 6 | 5 | 2 | 60  | version the configuration, review         |

## Six Sigma

**Six Sigma** is a data-driven method for improving processes. The aim is a process with at most 3.4 defects per million opportunities. Improvement projects follow the **DMAIC** cycle:

- **Define:** define the problem and the goal
- **Measure:** measure the current state
- **Analyze:** analyse the causes
- **Improve:** implement improvements
- **Control:** secure the improvement permanently
