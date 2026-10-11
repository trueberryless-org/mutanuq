---
title: Schedule Planning
description: Milestone plan, Gantt chart and network diagram with forward and backward pass, float and the critical path, worked through with an example.
sidebar:
  order: 2
---

Schedule planning defines when each work package is carried out. It is based on the work packages from the [work breakdown structure](/en/project_management/planning/work_breakdown_structure/), their durations and the dependencies between them.

## Milestone plan

A **milestone** is an important event in the project that has no duration itself, for example "functional specification approved" or "go-live". At milestones, the progress of the project is reviewed, and it is often decided whether and how the project continues.

The **milestone plan** lists all milestones with their planned dates. It is the simplest form of schedule planning and is well suited for communication with the client.

| No. | Milestone                         | Planned date | Actual date |
| --- | --------------------------------- | ------------ | ----------- |
| M1  | Project order signed              | 15 Sep       | 15 Sep      |
| M2  | Functional specification approved | 20 Oct       | 24 Oct      |
| M3  | Prototype finished                | 15 Dec       |             |
| M4  | Acceptance                        | 31 Mar       |             |

## Gantt chart

The **Gantt chart** (bar chart) shows each work package as a bar on a time axis. It is easy to understand and shows at a glance what runs in parallel when. Dependencies between the activities, however, are hard to see.

![Gantt chart of the example project](/images/project_management/gantt_chart_en.svg)

## Network diagram

The **network diagram** shows the activities and their dependencies as a graph. It can be used to calculate the earliest and latest dates, the float and the critical path. The form shown here is the activity-on-node network, in which each activity is a node.

### Dependency types

The dependencies between two activities are called dependency types or precedence relationships:

| Relationship     | Meaning                                                | Example                                           |
| ---------------- | ------------------------------------------------------ | ------------------------------------------------- |
| Finish-to-start  | B starts when A has finished. This is the most common case. | Testing starts after programming.            |
| Start-to-start   | B starts when A starts.                                | Documentation starts together with programming.   |
| Finish-to-finish | B finishes when A finishes.                            | Training finishes with the go-live.               |
| Start-to-finish  | B finishes when A starts.                              | The old system runs until the new one starts.     |

Only finish-to-start relationships are used below.

### Structure of a node

In addition to its ID and name, each node contains six values:

- **D:** duration of the activity
- **ES:** earliest start
- **EF:** earliest finish
- **LS:** latest start
- **LF:** latest finish
- **TF:** total float

### Example

A small software project consists of the following activities (duration in days):

| ID  | Activity       | Duration | Predecessors |
| --- | -------------- | -------- | ------------ |
| A   | Requirements   | 3        | none         |
| B   | Design         | 4        | A            |
| C   | Back end       | 6        | B            |
| D   | Front end      | 4        | B            |
| G   | Documentation  | 5        | B            |
| E   | Testing        | 3        | C, D         |
| F   | Handover       | 1        | E, G         |

### Forward pass

The forward pass starts at the first activity with ES = 0 and determines the earliest dates:

- EF = ES + D
- The ES of an activity is the **largest** EF of all its predecessors, because it can only start once all predecessors are finished.

For the example: A runs from 0 to 3, B from 3 to 7. C, D and G all start at 7 and finish at 13, 11 and 12. E starts after C and D, so at the larger value 13, and finishes at 16. F starts after E and G, so at 16, and finishes at 17. The project therefore takes **17 days**.

### Backward pass

The backward pass starts at the last activity with LF = EF and determines the latest dates:

- LS = LF − D
- The LF of an activity is the **smallest** LS of all its successors.

F must start at 16 at the latest. This gives E an LF of 16 and an LS of 13, and G an LF of 16 and an LS of 11. C and D must be finished by 13 so that E can start on time. B has three successors with the LS values 7 (C), 9 (D) and 11 (G), so its LF is the smallest value, 7.

### Float

- **Total float:** TF = LS − ES (or LF − EF). An activity can be delayed by this amount without endangering the end of the project.
- **Free float:** FF = smallest ES of the successors − EF. An activity can be delayed by this amount without delaying any successor.

| Activity | ES  | EF  | LS  | LF  | TF | FF |
| -------- | --- | --- | --- | --- | -- | -- |
| A        | 0   | 3   | 0   | 3   | 0  | 0  |
| B        | 3   | 7   | 3   | 7   | 0  | 0  |
| C        | 7   | 13  | 7   | 13  | 0  | 0  |
| D        | 7   | 11  | 9   | 13  | 2  | 2  |
| G        | 7   | 12  | 11  | 16  | 4  | 4  |
| E        | 13  | 16  | 13  | 16  | 0  | 0  |
| F        | 16  | 17  | 16  | 17  | 0  | 0  |

### Critical path

Activities with a total float of 0 are called **critical activities**. If one of them is delayed, the end of the project is delayed. The chain of critical activities forms the **critical path**, in the example A, B, C, E, F.

![Network diagram of the example project with the critical path](/images/project_management/network_plan_en.svg)

:::tip[What this means for control]
The project manager has to monitor the critical activities particularly closely. If the project should finish sooner, only shortening critical activities helps, for example by adding staff to C. Activities with float, such as D and G, can instead be shifted to balance resources.
:::

## Tools

For larger projects, schedules are created with software, such as Microsoft Project, ProjectLibre, GanttProject or the timelines in Jira and GitLab. These programs calculate the network diagram automatically and immediately show the effects of delays. You should still master the calculation rules so that you can interpret the results.
