---
title: Sets and Number Ranges
description: The concept of a set, set operations, intervals and the number ranges from the natural to the real numbers.
sidebar:
  order: 1
---

## Sets

A **set** is a collection of distinct objects, the **elements** of the set. Sets are denoted by capital letters, and their elements are written in curly brackets.

- **Roster notation:** $A = \{1, 2, 3, 4\}$
- **Set-builder notation:** $A = \{x \in \mathbb{N} \mid 1 \le x \le 4\}$ (read: "all natural numbers $x$ for which …")

| Symbol          | Meaning                                        | Example                        |
| --------------- | ---------------------------------------------- | ------------------------------ |
| $a \in A$       | $a$ is an element of $A$                       | $2 \in \{1, 2, 3\}$            |
| $a \notin A$    | $a$ is not an element of $A$                   | $5 \notin \{1, 2, 3\}$         |
| $A \subseteq B$ | $A$ is a subset of $B$                         | $\{1, 2\} \subseteq \{1, 2, 3\}$ |
| $\{\}$ or $\emptyset$ | empty set (contains no element)          |                                |
| $\lvert A \rvert$ | cardinality: number of elements of $A$       | $\lvert \{1, 2, 3\} \rvert = 3$ |

The order of the elements does not matter, and each element occurs only once: $\{1, 2, 3\} = \{3, 1, 2\}$.

## Set operations

| Operation                   | Notation        | Contains all elements that …          |
| --------------------------- | --------------- | ------------------------------------- |
| **Intersection**            | $A \cap B$      | are in $A$ **and** in $B$             |
| **Union**                   | $A \cup B$      | are in $A$ **or** in $B$              |
| **Difference**              | $A \setminus B$ | are in $A$ but **not** in $B$         |
| **Complement**              | $\overline{A}$  | are in the universal set but not in $A$ |

:::tip[Example]
For $A = \{1, 2, 3, 4\}$ and $B = \{3, 4, 5\}$:

- $A \cap B = \{3, 4\}$
- $A \cup B = \{1, 2, 3, 4, 5\}$
- $A \setminus B = \{1, 2\}$ and $B \setminus A = \{5\}$
:::

Set operations can be visualised well with **Venn diagrams**: each set is drawn as a circle, and overlapping areas show the intersection. Two sets with $A \cap B = \{\}$ are called **disjoint**.

Set operations correspond to the logical connectives of [propositional logic](/en/mathematics/algebra/logic-and-boolean-algebra/): intersection corresponds to "and", union to "or" and the complement to negation.

## Number ranges

The number ranges build on each other. Each range was introduced because an operation could not always be carried out in the previous one:

$$
\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}
$$

| Number range  | Name                  | Description                                                         | Examples                         |
| ------------- | --------------------- | ------------------------------------------------------------------- | -------------------------------- |
| $\mathbb{N}$  | natural numbers       | $\{0, 1, 2, 3, \dots\}$ – addition and multiplication are always possible | $0, 7, 42$                    |
| $\mathbb{Z}$  | integers              | $\{\dots, -2, -1, 0, 1, 2, \dots\}$ – subtraction is always possible too | $-5, 0, 13$                  |
| $\mathbb{Q}$  | rational numbers      | all fractions $\frac{p}{q}$ with $p, q \in \mathbb{Z}$, $q \ne 0$ – division too (except by 0) | $\frac{3}{4}, -0.5, 0.\overline{3}$ |
| $\mathbb{R}$  | real numbers          | rational and irrational numbers – every point on the number line    | $\sqrt{2}, \pi, e$               |
| $\mathbb{C}$  | [complex numbers](/en/mathematics/algebra/complex-numbers/) | extension by the imaginary unit $j$ with $j^2 = -1$ | $3 + 2j$ |

:::note
Whether 0 belongs to the natural numbers is a matter of definition. In Austria (and according to the standard ISO 80000-2), it is usually included. The natural numbers without 0 are written as $\mathbb{N}^*$ or $\mathbb{N}_{>0}$.
:::

### Rational and irrational numbers

Every rational number can be written as a **terminating** or a **repeating** decimal:

- $\frac{3}{8} = 0.375$ (terminating)
- $\frac{1}{3} = 0.333\ldots = 0.\overline{3}$ (repeating)
- $\frac{5}{6} = 0.8\overline{3}$ (eventually repeating)

**Irrational numbers** such as $\sqrt{2} = 1.41421356\ldots$ or $\pi = 3.14159265\ldots$ have infinitely many decimal places without a repeating pattern. They cannot be written as a fraction of two integers.

:::tip[Example: Converting a repeating decimal into a fraction]
We are looking for the fraction of $x = 0.\overline{27}$. The repeating block has two digits, so we multiply by $100$:

$$
\begin{aligned}
100x &= 27.\overline{27} \\
x &= 0.\overline{27} \\
\hline
99x &= 27 \quad\Rightarrow\quad x = \frac{27}{99} = \frac{3}{11}
\end{aligned}
$$
:::

### Subsets with a sign

Often only the positive or negative numbers of a range are needed:

- $\mathbb{R}^+$ or $\mathbb{R}_{>0}$: all positive real numbers
- $\mathbb{R}_0^+$ or $\mathbb{R}_{\ge 0}$: all positive real numbers and 0
- $\mathbb{Z}^-$: all negative integers

## Intervals

Connected subsets of the real numbers are written as **intervals**. A square bracket that faces the number means that the endpoint is included. If it faces away from the number (or a round bracket is used), the endpoint is excluded.

| Interval                | Meaning                | Name             |
| ----------------------- | ---------------------- | ---------------- |
| $[a; b]$                | $a \le x \le b$        | closed           |
| $]a; b[$ or $(a; b)$    | $a < x < b$            | open             |
| $[a; b[$ or $[a; b)$    | $a \le x < b$          | half-open        |
| $]a; b]$ or $(a; b]$    | $a < x \le b$          | half-open        |
| $[a; \infty[$           | $x \ge a$              | unbounded        |
| $]-\infty; b[$          | $x < b$                | unbounded        |

At $\infty$, the bracket is always open, because "infinity" is not a number that can be reached.

:::tip[Example]
The solution set of the inequality $-2 < x \le 5$ is the interval $]-2; 5]$. The number $-2$ is not included, but $5$ is.
:::
