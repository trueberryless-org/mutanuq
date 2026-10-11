---
title: Effort Estimation and Cost Planning
description: Methods of effort estimation such as expert judgement, analogous estimating, three-point estimation and planning poker, as well as cost types, cost plan and cumulative cost curve.
sidebar:
  order: 4
---

Before costs can be planned, the effort for each work package has to be estimated. Estimates are always uncertain. With the right methods, however, the uncertainty can be reduced and made visible.

## Methods of effort estimation

### Expert judgement

One or more experienced people estimate the effort based on their experience. The method is fast but depends heavily on the estimators. Ideally, the person who will later do the work package makes the estimate.

### Delphi method

Several experts estimate independently and anonymously. The results are summarised and fed back to everyone. Those who deviate strongly from the average justify their estimate. Then everyone estimates again until the values agree sufficiently.

### Analogous estimating

The effort is derived from similar projects that have already been completed. This requires experience from earlier projects to have been documented.

### Three-point estimation

For each work package, three values are estimated: an optimistic value $O$, a most likely value $M$ and a pessimistic value $P$. According to the PERT method, the expected value is a weighted average:

$$
E = \frac{O + 4M + P}{6}
$$

The standard deviation $\sigma = \frac{P - O}{6}$ shows how uncertain the estimate is.

:::note[Example]
For connecting a payment interface, the estimates are 4 person-days (optimistic), 6 (most likely) and 14 (pessimistic):

$$
E = \frac{4 + 4 \cdot 6 + 14}{6} = \frac{42}{6} = 7 \text{ PD}, \qquad \sigma = \frac{14 - 4}{6} \approx 1.7 \text{ PD}
$$

The expected value is higher than the most likely value because the pessimistic case deviates more than the optimistic one.
:::

### Planning poker

Agile teams often estimate with **planning poker**. Each team member has cards with values from a series based on the Fibonacci sequence, such as 1, 2, 3, 5, 8, 13, 20. After a user story has been presented, everyone reveals their card at the same time. If the values differ a lot, the people with the highest and lowest values explain their reasons, and then everyone estimates again. Estimates are usually not made in hours but in **story points**, which express the relative size of a task.

### Function point analysis

In function point analysis, the functional size of software is determined from its functions, such as inputs, outputs, queries and data stores. The effort is derived from the number of function points using experience values. The method is laborious but independent of the programming language.

## Cost types

| Cost type          | Examples                                                                  |
| ------------------ | ------------------------------------------------------------------------- |
| Personnel costs    | working time of the project members (effort · hourly rate)                |
| Material costs     | hardware, software licences, cloud resources, office supplies            |
| External services  | external development, consulting, training, certificates                  |
| Travel expenses    | trips to the customer, accommodation                                      |
| Overhead costs     | proportional costs for rooms, administration and infrastructure           |

## Cost plan

In the **cost plan**, costs are assigned to each work package and added up to the total costs of the project.

| WBS code | Work package   | Effort (PD) | Personnel costs (€600/PD) | Material costs | Total     |
| -------- | -------------- | ----------- | ------------------------- | -------------- | --------- |
| 3.1      | Database       | 5           | €3,000                    | €0             | €3,000    |
| 3.2      | Back end       | 12          | €7,200                    | €0             | €7,200    |
| 3.3      | Front end      | 10          | €6,000                    | €400           | €6,400    |
| 5.1      | Server         | 2           | €1,200                    | €1,800         | €3,000    |
|          | Total          | 29          | €17,400                   | €2,200         | €19,600   |

In addition, a **contingency reserve** for risks is usually planned, for example 10 to 20 % of the planned costs. The client usually decides how it is used.

## Cost curve and cumulative cost curve

Combining the cost plan with the schedule gives the distribution of costs over time:

- The **cost curve** shows the costs per period, such as per week or month. It shows when how much money is needed.
- The **cumulative cost curve** shows the total costs incurred up to a point in time. It usually has the shape of an "S", because fewer costs arise at the beginning and at the end than during implementation.

The cumulative cost curve is the basis for comparing planned and actual values in [project controlling](/en/project_management/controlling/project_controlling/), for example in earned value analysis.
