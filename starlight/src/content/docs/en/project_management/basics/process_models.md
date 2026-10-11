---
title: Process Models
description: Traditional process models such as the waterfall and V-model, iterative approaches and agile methods with Scrum and Kanban compared.
sidebar:
  order: 6
---

A **process model** defines the order in which the tasks of a project are carried out. Which model fits depends on how precisely the requirements are known at the beginning and how often they change.

## Traditional process models

### Waterfall model

In the **waterfall model**, the phases are run through strictly one after the other: requirements analysis, design, implementation, testing, deployment and maintenance. Each phase ends with a result, such as a document, which must be approved before the next phase begins.

- **Advantages:** clear structure, good predictability of deadlines and costs, simple control
- **Disadvantages:** changes are late and expensive, the customer only sees the result at the end, errors in the requirements are often only noticed during testing

The waterfall model is suitable when the requirements are clear and stable from the beginning, for example when installing a network infrastructure according to a finished plan.

### V-model

The **V-model** extends the waterfall model: each design phase on the left side of the "V" has a corresponding test phase on the right side.

| Design phase               | Corresponding test phase |
| -------------------------- | ------------------------ |
| Requirements definition    | Acceptance test          |
| System design              | System test              |
| Architecture design        | Integration test         |
| Module design              | Unit test                |

The test cases are already defined in the respective design phase. The V-Modell XT, a German variant, is widely used in public-sector IT projects in German-speaking countries.

### Iterative and incremental models

In the **spiral model**, the project is developed in several rounds (iterations). Each round includes setting objectives, risk analysis, development and planning of the next round. In **prototyping**, a simplified model is built early to clarify requirements with the customer.

## Agile process models

Agile methods assume that requirements change during the project. Instead of planning everything at the beginning, work is done in short cycles, and after each cycle there is a usable interim result.

### Agile Manifesto

In 2001, 17 software developers formulated the **Agile Manifesto** with four values. They value

- individuals and interactions over processes and tools,
- working software over comprehensive documentation,
- customer collaboration over contract negotiation,
- responding to change over following a plan.

The items on the right are not worthless, but the items on the left are valued more.

### Scrum

**Scrum** is the best-known agile framework. Work is divided into **sprints** of one to four weeks.

![The Scrum process](/images/project_management/scrum_en.svg)

**Roles** (called accountabilities in the Scrum Guide):

- **Product Owner:** is responsible for the product backlog, prioritises the requirements and represents the interests of the stakeholders.
- **Scrum Master:** makes sure Scrum is understood and applied, removes impediments and supports the team.
- **Developers:** implement the requirements and organise their own work within the sprint.

**Events:**

- **Sprint Planning:** The team selects the items for the next sprint and defines a sprint goal.
- **Daily Scrum:** a daily meeting of at most 15 minutes to coordinate progress.
- **Sprint Review:** The result is shown to the stakeholders, and their feedback flows into the product backlog.
- **Sprint Retrospective:** The team considers how it can improve its collaboration.

**Artefacts:**

- **Product Backlog:** ordered list of all requirements, often formulated as user stories ("As a teacher, I want to book a room so that I can plan my lessons.")
- **Sprint Backlog:** the items selected for the current sprint together with a plan for implementing them
- **Increment:** the usable result at the end of the sprint that meets the Definition of Done

### Kanban

**Kanban** originally comes from production at Toyota. In IT, work is visualised on a board with columns such as "To do", "In progress" and "Done". Important principles are:

- making work visible,
- limiting the number of tasks in progress at the same time (_work in progress limit_),
- measuring and improving the flow.

Unlike Scrum, Kanban has no fixed sprints and no prescribed roles. Kanban is therefore well suited to ongoing work such as IT support.

## Comparison

| Criterion            | traditional (waterfall, V-model)          | agile (Scrum, Kanban)                          |
| -------------------- | ----------------------------------------- | ---------------------------------------------- |
| Requirements         | fully defined at the beginning            | evolve during the project                      |
| Planning             | detailed overall plan                     | rough framework, detailed planning per sprint  |
| Customer contact     | mainly at the beginning and at acceptance | continuous, after every sprint                 |
| Result               | at the end                                | usable interim results throughout              |
| Changes              | costly, via change requests               | welcome, prioritised in the backlog            |
| Suitable for         | stable, well-known requirements           | uncertain, changing requirements               |

In practice, **hybrid** approaches are often used: the overall project is planned traditionally with milestones, while the software development itself takes place in sprints.
