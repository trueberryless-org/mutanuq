---
title: Documentation and Communication
description: Contents of the project handbook, document management with filing structure and versioning, status reports, the communication plan and project marketing.
sidebar:
  order: 2
---

A project produces many documents: project order, plans, minutes, reports, requirements and technical documentation. So that everyone involved has the right information at the right time, clear rules for documentation and communication are needed.

## Project handbook

The **project handbook** (also project management plan) brings together all agreements and plans for managing a project in one place. It is created at the start of the project and updated continuously during the project. A typical structure:

1. project order with objectives and non-objectives
2. project context and stakeholder analysis
3. project organisation: organisation chart, role descriptions, responsibility assignment matrix
4. work breakdown structure and work package descriptions
5. milestone plan, schedule, resource plan and cost plan
6. risk register
7. communication plan and ground rules
8. rules for documentation and filing
9. templates, for example for minutes, status reports and change requests

Many companies also have a company-wide **project management manual** that defines how projects are generally carried out. The project handbook of an individual project builds on it.

:::tip[For the diploma thesis]
A short project handbook is also worthwhile for the diploma thesis. You can later transfer many of its contents, such as objectives, work breakdown structure and milestones, directly into the written thesis.
:::

## Document management

Document management regulates how documents are created, filed, versioned and approved.

### Filing structure

A uniform folder structure helps to find documents quickly. A structure based on the project management process or the work breakdown structure has proven itself:

```
Project_SmartRoom/
├── 01_ProjectManagement/
│   ├── ProjectOrder/
│   ├── Minutes/
│   └── StatusReports/
├── 02_Requirements/
├── 03_Design/
├── 04_Implementation/
├── 05_Testing/
└── 06_Closing/
```

### Naming conventions

File names should follow a fixed scheme, for example `YYYY-MM-DD_DocumentType_Topic_vX.Y`, such as `2025-11-03_Minutes_Weekly-Meeting_v1.0.pdf`. Because the date comes first, the files are automatically sorted chronologically.

### Versioning and approval

- Every change to a document increases the version number. Minor corrections increase the digit after the point (1.1, 1.2), fundamental revisions the digit before it (2.0).
- A **change log** at the beginning of the document records who changed what and when.
- Important documents such as the functional specification or the project order must be **approved**. Only approved versions are binding.
- Access rights define who may read and edit documents.

For program code, a version control system such as Git is standard. For other documents, platforms such as SharePoint, Microsoft Teams, Nextcloud or a wiki are suitable, as they save versions automatically.

## Reporting

### Status report

The **status report** regularly informs the client and the steering committee about the state of the project, for example every two weeks or monthly. It is short and usually contains:

- overall status as a **traffic light**: green (on track), yellow (deviations, but under control), red (objectives at risk, decision needed)
- status of scope, schedule and costs
- milestones reached and upcoming
- important risks and issues
- decisions needed from the client

### Further reports

- **minutes** of meetings (see [team and communication](/en/project_management/organisation/team_and_communication/))
- **milestone reports** when a milestone is reached
- **project closing report** at the end of the project

## Communication plan

The **communication plan** defines who receives which information, when and through which channel:

| What                    | Who informs      | Who is informed           | When                | How                   |
| ----------------------- | ---------------- | ------------------------- | ------------------- | --------------------- |
| Status report           | project manager  | client                    | every two weeks     | email, PDF            |
| Weekly meeting          | project manager  | project team              | every Monday        | meeting               |
| Steering committee      | project manager  | steering committee        | at every milestone  | presentation          |
| Project news            | project marketing | all employees            | monthly             | intranet              |
| Incidents and crises    | everyone         | project manager           | immediately         | phone, chat           |

## Project marketing

**Project marketing** covers all measures that present a project internally and externally. The aim is to create acceptance and support for the project, for example among users, management and other departments. Projects that bring change for many people in particular often fail not because of the technology but because of a lack of acceptance.

Possible measures are:

- a memorable project name and a logo
- a project page on the intranet or a newsletter
- presentations at milestones and information events for those affected
- involving users in testing early on
- reports on successes, for example at company events or on social media
- for diploma theses: presentation at the open day, posters, a website, taking part in competitions

Project marketing is the task of the project manager, but in larger projects it can be assigned to a dedicated person in the team.
