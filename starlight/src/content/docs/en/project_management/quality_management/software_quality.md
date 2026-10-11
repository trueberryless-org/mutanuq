---
title: Software Quality
description: Quality characteristics of software according to ISO/IEC 25010, quality assurance measures such as reviews, static analysis and tests, as well as test levels and the Definition of Done.
sidebar:
  order: 3
---

Software has special properties: it does not wear out, but it contains defects that often only become visible under certain conditions. Quality management in IT projects must therefore start early and accompany the entire development.

## Quality characteristics according to ISO/IEC 25010

The ISO/IEC 25010 standard describes which characteristics make up the quality of a software product. In the current 2023 edition, these are:

| Characteristic            | Question                                                                 |
| ------------------------- | ------------------------------------------------------------------------ |
| Functional suitability    | Does the software provide the required functions completely and correctly? |
| Performance efficiency    | How fast is it, and how many resources does it need?                     |
| Compatibility             | Does it work together with other systems?                                |
| Interaction capability    | Is it easy to learn, operate and accessible?                             |
| Reliability               | Does it run stably, and does it recover from failures?                   |
| Security                  | Does it protect data from unauthorised access?                           |
| Maintainability           | Is it easy to understand, change and test?                               |
| Flexibility               | Can it be adapted to new environments and installed?                     |
| Safety                    | Does it avoid endangering people and the environment?                    |

In the older 2011 edition, interaction capability and flexibility were still called usability and portability, and the characteristic safety was missing.

Not all characteristics are equally important in every project. For a banking app, security is crucial; for an internal tool, maintainability may matter most. The most important characteristics should therefore already be defined in the requirements and formulated in a measurable way, for example "95 % of all page requests are answered in under one second".

## Quality assurance measures

### Constructive measures

Constructive measures prevent defects from the outset:

- clear requirements and acceptance criteria
- coding guidelines and uniform formatting
- proven architectures and [design patterns](/en/software-development/design-patterns/)
- training and pair programming

### Analytical measures

Analytical measures find defects that have nevertheless arisen:

- **Reviews:** Other people read code or documents and look for defects. In many teams, every change must be approved via a pull request by at least one other person.
- **Static analysis:** Tools such as linters or SonarQube examine the code without running it and find typical defects, security vulnerabilities and poor structures (see [software metrics](/en/software-development/software-metrics/)).
- **Dynamic testing:** The software is run, and its behaviour is compared with the expected behaviour.

## Test levels

| Test level          | What is tested?                                           | Who tests?                   |
| ------------------- | --------------------------------------------------------- | ---------------------------- |
| Unit test           | individual functions or classes, in isolation             | developers, automated        |
| Integration test    | interaction of several components, such as API and database | development team, automated |
| System test         | the whole system against the requirements                 | test team                    |
| Acceptance test     | Does the system meet the client's requirements?           | client and users             |

In addition, there are test types that cut across the levels, such as load tests, security tests (penetration tests), usability tests and regression tests. Regression tests check whether everything that worked before still works after a change. They are therefore automated wherever possible.

## Continuous integration

With **continuous integration** (CI), every change to the code is automatically built and tested, for example with GitHub Actions, GitLab CI or Azure Pipelines. If a test fails, the change is not merged. This way, defects are noticed shortly after they arise, and the cost of fixing them stays low.

## Definition of Done

The **Definition of Done** specifies when a task is really finished. An example:

- The code is written and reviewed by another person.
- All unit tests pass, and test coverage does not drop.
- The acceptance criteria are met and tested.
- The documentation is updated.
- The change is deployed to the test environment.

A shared Definition of Done prevents "done" from meaning something different to everyone.
