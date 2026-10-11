---
title: Resource Planning
description: Resources in a project, capacity and demand, the resource histogram and ways of resolving overloads.
sidebar:
  order: 3
---

Resource planning makes sure that the right people and means are available for each work package at the right time. A schedule is worthless if the developer it relies on is supposed to work on three projects at once.

## Types of resources

- **Staff:** project members with certain skills, such as back-end development, network engineering or design
- **Equipment and materials:** hardware, software licences, test devices, rooms, server capacity
- **Financial resources:** the budget, which is covered in [cost planning](/en/project_management/planning/cost_planning_and_estimation/)

In IT projects, staff is usually the scarcest and most expensive resource.

## Demand and capacity

For each resource, two quantities are compared:

- The **demand** results from the work packages: which skill is needed when and to what extent? It is usually stated in **person-days** (PD) or person-hours.
- The **capacity** is the working time actually available. It is almost always less than full time, because employees take holidays, fall ill, attend meetings and often also have tasks outside the project.

:::note[Example]
A full-time employee works 5 days per week. If they are assigned to the project at 60 %, only 3 person-days per week are available to the project. A work package with an effort of 12 person-days therefore takes them 4 weeks, not 12 days.
:::

Effort and duration are therefore not the same. The **effort** states how much work is needed. The **duration** states how long it takes on the calendar. It depends on the effort, the number of people and their availability.

## Resource histogram

The **resource histogram** (also load diagram) shows for each resource the demand per time unit compared with the capacity. If the demand exceeds the capacity, the resource is overloaded.

| Week                      | 1   | 2   | 3   | 4   | 5   |
| ------------------------- | --- | --- | --- | --- | --- |
| Capacity back end (PD)    | 5   | 5   | 5   | 5   | 5   |
| Demand work package 3.1   | 3   | 3   |     |     |     |
| Demand work package 3.2   |     | 4   | 5   | 3   |     |
| Total demand              | 3   | 7   | 5   | 3   | 0   |

In week 2, back-end development is overloaded with 7 instead of 5 person-days.

## Resource levelling

Overloads can be resolved in different ways:

- **Use float:** activities that are not on the critical path are shifted within their float (see [schedule planning](/en/project_management/planning/schedule_planning/)).
- **Stretch activities:** a work package is done by fewer people over a longer period.
- **Additional resources:** more employees or external service providers are brought in. New people need time to get up to speed, however.
- **Overtime:** possible in the short term, but in the long run it lowers quality and motivation.
- **Reduce scope:** less important requirements are dropped or postponed.
- **Move the end date:** if there is no other option and the client agrees.

:::caution[Brooks's law]
"Adding manpower to a late software project makes it later." New team members must be onboarded, and the coordination effort grows with every additional person.
:::

## Resources across several projects

In companies, the same people often work on several projects at the same time. Resource planning must then be done across projects, usually by a project management office (PMO) or the heads of department. Conflicts over resources are decided on the basis of the priorities in the project portfolio.
