---
title: Work Breakdown Structure
description: Structure and decomposition principles of the work breakdown structure, rules for work packages, coding and the work package description.
sidebar:
  order: 1
---

The **work breakdown structure** (WBS) breaks the project down into manageable sub-tasks. It shows completely what has to be done in the project, but not yet when and in which order. Because all other plans build on it, it is considered the "plan of plans".

![Work breakdown structure of a web shop project](/images/project_management/work_breakdown_structure_en.svg)

## Structure

The WBS is hierarchical:

- The top level is the **project** itself.
- Below it are **sub-tasks** (also sub-projects or phases), which can be broken down further.
- The lowest level consists of **work packages**. They are not broken down any further and are the units that are planned, assigned and monitored.

Three to four levels are usually enough. A WBS that is too coarse is hard to control, while one that is too fine creates unnecessary administrative effort.

## Decomposition principles

| Principle            | Structured by                            | Example for the second level                                  |
| -------------------- | ---------------------------------------- | ------------------------------------------------------------- |
| object-oriented      | components of the result                 | database, back end, front end, server                         |
| function-oriented    | activities or disciplines                | planning, programming, testing, documenting                   |
| phase-oriented       | sequence over time                       | analysis, design, implementation, testing, rollout            |
| mixed                | combination at different levels          | phases on level 2, objects on level 3                         |

In practice, the mixed structure is the most common. It is important that only one principle is used within one level below the same element.

Regardless of the principle, almost every WBS has a **project management** element containing tasks such as project start, controlling and project closing. This work also takes time and must be planned.

## Rules for a good WBS

- **100 % rule:** The WBS contains all deliverables of the project. Anything that is not in the WBS will not be done and will not be paid for.
- **No overlap:** Every task appears exactly once.
- **Result orientation:** Work packages describe verifiable results, such as "database schema created".
- **Appropriate size:** A work package should have one clearly responsible person and be completable in a manageable period, as a rule of thumb within a few days to a few weeks.
- **Clear names:** noun and verb ("write test cases") or result ("test cases").

## Coding

Each element gets a unique **WBS code**. A decimal numbering is common, where each level adds another digit: the project has the code 0 or 1, the sub-tasks 1, 2, 3, and the work packages below them 1.1, 1.2, 2.1 and so on. The code is used in all other plans, in controlling and in the document filing system.

## Work package description

For each work package, a **work package description** is created:

| Field                 | Example                                                                    |
| --------------------- | -------------------------------------------------------------------------- |
| WBS code and name     | 3.2 Back end                                                               |
| Responsible           | Lena Gruber                                                                |
| Content               | implement REST API for products, shopping cart and orders                  |
| Not included          | payment processing (separate work package 3.4)                             |
| Result                | API runs on the test server, all endpoints are documented and tested      |
| Prerequisites         | 3.1 Database completed                                                     |
| Effort                | 12 person-days                                                             |
| Start and end         | 3 Nov to 21 Nov                                                            |

## Creating a WBS

A WBS can be created in two ways:

- **Top-down:** Starting from the project, it is broken down step by step. This method is suitable when the project is well understood.
- **Bottom-up:** First, all tasks are collected, for example in a brainstorming session, and then grouped. This method is suitable for novel projects.

Ideally, the project manager creates the WBS together with the team, for example with sticky notes on a board. This way, everyone's knowledge is used, and the team understands the plan.
