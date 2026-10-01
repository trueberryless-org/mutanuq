---
title: Risk Management
description: Identifying risks, assessing them by probability and impact, presenting them in a risk matrix and treating them with suitable measures.
sidebar:
  order: 5
---

A **risk** is a possible event that can have a negative effect on the project objectives if it occurs. Risks cannot be avoided completely, but they can be recognised early and prepared for. The counterpart to a risk is an **opportunity**, a possible event with a positive effect.

## Risk management process

1. **Identify risks:** Which risks are there?
2. **Analyse risks:** How likely are they, and what effects would they have?
3. **Evaluate risks:** Which risks are the most important?
4. **Plan responses:** How do we deal with each risk?
5. **Monitor risks:** Have risks changed? Have new ones appeared?

The process is not run through just once at the start of the project but repeated regularly, for example at every controlling meeting.

## Identifying risks

Helpful sources and methods are:

- brainstorming or reverse brainstorming in the team (see [creativity techniques](/en/project_management/basics/creativity_techniques/))
- checklists and experience from earlier projects
- the stakeholder analysis, because negative stakeholders can be a risk
- the work breakdown structure, by checking every work package for risks
- conversations with experts

Typical risk areas in IT projects are:

- **technical:** new technologies, performance problems, security vulnerabilities, data loss
- **personnel:** absence of key people, lack of know-how, conflicts in the team
- **organisational:** unclear responsibilities, lack of support from management, resource conflicts with other projects
- **external:** delivery delays, insolvency of a supplier, new legal requirements

## Evaluating risks

For each risk, the **probability** and the **impact** are estimated, usually on a scale from 1 to 5. The product is the **risk score**:

$$
\text{risk score} = \text{probability} \cdot \text{impact}
$$

Alternatively, you can calculate with a probability in per cent and a damage in euros. The result is then the expected damage, for example 20 % · €10,000 = €2,000.

The **risk matrix** shows which risks are particularly critical:

![Risk matrix with probability and impact](/images/project_management/risk_matrix_en.svg)

Risks in the red area need measures immediately, risks in the yellow area are monitored and treated if necessary, and risks in the green area are usually accepted.

## Responses

| Strategy            | Description                                                            | Example                                                            |
| ------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------ |
| avoid               | The cause is eliminated, for example by choosing a different solution. | A proven framework is used instead of a new one.                   |
| reduce              | Probability or impact is reduced.                                      | Knowledge is documented and shared between two people.             |
| transfer            | The risk is passed on to a third party.                                | insurance, contractual penalty for the supplier, cloud provider with an SLA |
| accept              | The risk is borne consciously, possibly with a reserve.                | small risk whose treatment would cost more than the damage         |

A further distinction:

- **preventive measures** are taken before the risk occurs to lower its probability or impact,
- **corrective measures** (contingency plan) are only carried out when the risk occurs.

For every important risk, a responsible person (risk owner) is appointed who monitors it and implements the measures.

## Risk register

All risks are documented in the **risk register**:

| No. | Risk                                       | P | I | Score | Response                                              | Owner          |
| --- | ------------------------------------------ | - | - | ----- | ----------------------------------------------------- | -------------- |
| R1  | Lead developer is absent for a long time   | 2 | 5 | 10    | pair programming, code reviews, documentation         | project manager |
| R2  | Payment provider's interface changes       | 3 | 4 | 12    | encapsulate the interface, subscribe to change notices | back end      |
| R3  | Server is not delivered on time            | 2 | 3 | 6     | prepare a cloud server as a fallback                  | IT operations  |
| R4  | Data loss on the development server        | 2 | 4 | 8     | daily backup, code in Git                             | IT operations  |
| R5  | Requirements change frequently             | 4 | 4 | 16    | sprints with reviews, agree on a change process       | project manager |

P stands for probability, I for impact.

:::tip
Formulate risks as cause and effect: "Because the supplier has only one person for the interface, there may be delays if this person is absent." This makes it easier to find suitable responses.
:::
