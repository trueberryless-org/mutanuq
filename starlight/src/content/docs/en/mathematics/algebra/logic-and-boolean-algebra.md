---
title: Propositional Logic and Boolean Algebra
description: Propositions and their connectives, truth tables, the laws of Boolean algebra, switching functions and normal forms.
sidebar:
  order: 3
---

## Propositions

A **proposition** (statement) is a sentence that is either true (T, 1) or false (F, 0), never both and never neither.

- "Vienna is the capital of Austria." is a true proposition.
- "$7$ is an even number." is a false proposition.
- "What time is it?" or "$x > 3$" are not propositions: the question has no truth value, and for $x > 3$ it depends on the value of $x$. Such sentences with variables are called predicates (open sentences).

## Connectives

Propositions can be combined into new propositions with **connectives**. Their truth value only depends on the truth values of the parts and is recorded in a truth table.

| Connective    | Logic               | Boolean algebra       | Programming    | read as                  |
| ------------- | ------------------- | --------------------- | -------------- | ------------------------ |
| Negation      | $\neg a$            | $\overline{a}$        | `!a`           | not $a$                  |
| Conjunction   | $a \land b$         | $a \cdot b$           | `a && b`       | $a$ and $b$              |
| Disjunction   | $a \lor b$          | $a + b$               | `a \|\| b`     | $a$ or $b$               |
| Exclusive or  | $a \oplus b$        | $a \oplus b$          | `a ^ b`        | either $a$ or $b$        |
| Implication   | $a \Rightarrow b$   | $\overline{a} + b$    |                | if $a$, then $b$         |
| Equivalence   | $a \Leftrightarrow b$ | $\overline{a \oplus b}$ | `a == b`   | $a$ if and only if $b$   |

| $a$ | $b$ | $\neg a$ | $a \land b$ | $a \lor b$ | $a \oplus b$ | $a \Rightarrow b$ | $a \Leftrightarrow b$ |
| --- | --- | -------- | ----------- | ---------- | ------------ | ----------------- | --------------------- |
| 0   | 0   | 1        | 0           | 0          | 0            | 1                 | 1                     |
| 0   | 1   | 1        | 0           | 1          | 1            | 1                 | 0                     |
| 1   | 0   | 0        | 0           | 1          | 1            | 0                 | 0                     |
| 1   | 1   | 0        | 1           | 1          | 0            | 1                 | 1                     |

:::note
The logical "or" is **inclusive**: $a \lor b$ is also true if both propositions are true. The everyday "either … or" corresponds to the exclusive or (XOR).

The implication $a \Rightarrow b$ is only false if a false conclusion is drawn from a true premise. From a false premise, "anything" follows: the sentence "If it rains, the street is wet" does not become false because the street is wet on a dry day.
:::

### Tautologies and contradictions

A compound proposition that is true for all assignments is called a **tautology**, for example $a \lor \neg a$. A proposition that is always false is called a contradiction, for example $a \land \neg a$. Whether a proposition is a tautology can be checked with a truth table.

:::tip[Example: Contraposition]
Show that $(a \Rightarrow b) \Leftrightarrow (\neg b \Rightarrow \neg a)$ is a tautology.

| $a$ | $b$ | $a \Rightarrow b$ | $\neg b$ | $\neg a$ | $\neg b \Rightarrow \neg a$ | total  |
| --- | --- | ----------------- | -------- | -------- | --------------------------- | ------ |
| 0   | 0   | 1                 | 1        | 1        | 1                           | 1      |
| 0   | 1   | 1                 | 0        | 1        | 1                           | 1      |
| 1   | 0   | 0                 | 1        | 0        | 0                           | 1      |
| 1   | 1   | 1                 | 0        | 0        | 1                           | 1      |

The last column only contains ones. So the statement "If it rains, the street is wet" is equivalent to "If the street is not wet, it is not raining".
:::

## Boolean algebra

**Boolean algebra** (named after George Boole, 1815–1864) calculates with the values $0$ and $1$ and the operations AND ($\cdot$), OR ($+$) and NOT ($\overline{\phantom{a}}$). As with numbers, $\cdot$ binds more strongly than $+$, and the multiplication dot may be omitted: $ab + c$ means $(a \cdot b) + c$.

### Laws

| Law                       | AND                                         | OR                                         |
| ------------------------- | ------------------------------------------- | ------------------------------------------ |
| Commutative law           | $a \cdot b = b \cdot a$                     | $a + b = b + a$                            |
| Associative law           | $(ab)c = a(bc)$                             | $(a + b) + c = a + (b + c)$                |
| Distributive law          | $a(b + c) = ab + ac$                        | $a + bc = (a + b)(a + c)$                  |
| Identity                  | $a \cdot 1 = a$                             | $a + 0 = a$                                |
| Annihilation              | $a \cdot 0 = 0$                             | $a + 1 = 1$                                |
| Idempotence               | $a \cdot a = a$                             | $a + a = a$                                |
| Complement                | $a \cdot \overline{a} = 0$                  | $a + \overline{a} = 1$                     |
| Absorption                | $a(a + b) = a$                              | $a + ab = a$                               |
| De Morgan             | $\overline{a \cdot b} = \overline{a} + \overline{b}$ | $\overline{a + b} = \overline{a} \cdot \overline{b}$ |
| Double negation           | $\overline{\overline{a}} = a$               |                                            |

The laws come in pairs (**duality principle**): if you swap $\cdot$ and $+$ as well as $0$ and $1$, you get another valid law. Unlike with ordinary numbers, the second distributive law $a + bc = (a + b)(a + c)$ also holds in Boolean algebra.

:::tip[Example: Simplifying]
$$
\begin{aligned}
\overline{a}b + ab + a\overline{b} &= (\overline{a} + a)b + a\overline{b} && \text{distributive law} \\
&= b + a\overline{b} && \text{complement} \\
&= (b + a)(b + \overline{b}) && \text{2nd distributive law} \\
&= a + b && \text{complement}
\end{aligned}
$$
:::

## Switching functions

A **switching function** assigns an output value $0$ or $1$ to every combination of input values $0$ or $1$. With $n$ inputs, its truth table has $2^n$ rows. In digital electronics, switching functions are built as circuits with logic gates (AND, OR, NOT, NAND, NOR, XOR).

:::note[NAND and NOR]
Every switching function can be built from NAND gates ($\overline{a \cdot b}$) alone, and likewise from NOR gates alone. For example, $\overline{a} = \overline{a \cdot a}$. That is why NAND gates are the basic building blocks of many integrated circuits.
:::

### Normal forms

A switching function can be read directly from a truth table:

- **Disjunctive normal form (DNF):** For each row with result $1$, form a minterm: an AND of all variables in which every variable that is $0$ in this row is negated. The minterms are combined with OR.
- **Conjunctive normal form (CNF):** For each row with result $0$, form a maxterm: an OR in which every variable that is $1$ in this row is negated. The maxterms are combined with AND.

:::tip[Example: Majority circuit]
An alarm system with three sensors $a$, $b$ and $c$ should trigger ($y = 1$) if at least two sensors respond.

| $a$ | $b$ | $c$ | $y$ | Minterm                   |
| --- | --- | --- | --- | ------------------------- |
| 0   | 0   | 0   | 0   |                           |
| 0   | 0   | 1   | 0   |                           |
| 0   | 1   | 0   | 0   |                           |
| 0   | 1   | 1   | 1   | $\overline{a}bc$          |
| 1   | 0   | 0   | 0   |                           |
| 1   | 0   | 1   | 1   | $a\overline{b}c$          |
| 1   | 1   | 0   | 1   | $ab\overline{c}$          |
| 1   | 1   | 1   | 1   | $abc$                     |

DNF: $y = \overline{a}bc + a\overline{b}c + ab\overline{c} + abc$

Simplified (the term $abc$ may be used several times because of idempotence):

$$
y = (\overline{a} + a)bc + a(\overline{b} + b)c + ab(\overline{c} + c) = bc + ac + ab
$$
:::

### Karnaugh map

For up to four variables, switching functions can be simplified graphically with a **Karnaugh map** (K-map). The rows of the truth table are arranged in a grid so that neighbouring cells (also across the edges) differ in exactly one variable. Neighbouring ones are grouped into blocks of $1$, $2$, $4$ or $8$ cells that are as large as possible. In each block, the variable that changes within the block drops out.
