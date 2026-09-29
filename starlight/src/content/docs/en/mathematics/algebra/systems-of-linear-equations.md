---
title: Systems of Linear Equations
description: Systems of linear equations with two or more variables – solvability, substitution, equating and elimination method, Gaussian elimination and matrix notation.
sidebar:
  order: 8
---

## Definition

A **system of linear equations** consists of several linear equations with several variables that must be satisfied **at the same time**. "Linear" means that the variables only appear to the first power and are not multiplied by each other.

$$
\begin{aligned}
\text{I:}\quad 2x + 3y &= 12 \\
\text{II:}\quad x - y &= 1
\end{aligned}
$$

A solution is a **pair of numbers** $(x \mid y)$ that satisfies both equations – here $(3 \mid 2)$.

## Solvability

Every linear equation with two variables describes a [line](/en/mathematics/functions/linear-functions/). The solution of the system is the common point of the two lines. This gives three cases:

| Position of the lines | Number of solutions    | recognisable during the calculation by … |
| --------------------- | ---------------------- | ---------------------------------------- |
| intersecting          | exactly one solution   | a unique result                          |
| parallel              | no solution            | a contradiction, e.g. $0 = 5$            |
| identical             | infinitely many solutions | a true statement, e.g. $0 = 0$        |

## Methods for two variables

### Substitution method

Rearrange one equation for one variable and substitute it into the other.

:::tip[Example]
From II, $x = 1 + y$. Substituted into I:

$$
2(1 + y) + 3y = 12 \;\Rightarrow\; 2 + 5y = 12 \;\Rightarrow\; y = 2 \;\Rightarrow\; x = 1 + 2 = 3
$$
:::

### Equating method

Rearrange both equations for the same variable and set them equal.

:::tip[Example]
$$
\text{I: } x = \frac{12 - 3y}{2} \qquad \text{II: } x = 1 + y \qquad\Rightarrow\qquad \frac{12 - 3y}{2} = 1 + y \;\Rightarrow\; 12 - 3y = 2 + 2y \;\Rightarrow\; y = 2
$$
:::

### Elimination method

Multiply the equations by numbers so that one variable cancels out when they are added. This method can be extended to any number of variables.

:::tip[Example]
$$
\begin{aligned}
\text{I:}\quad 2x + 3y &= 12 \\
3 \cdot \text{II:}\quad 3x - 3y &= 3 \\
\hline
\text{I} + 3 \cdot \text{II:}\quad 5x &= 15 \;\Rightarrow\; x = 3
\end{aligned}
$$
:::

## Gaussian elimination

For three or more variables, **Gaussian elimination** brings the system into **row echelon form** (triangular form). The following operations are allowed:

- swapping two equations,
- multiplying an equation by a number other than $0$,
- adding a multiple of one equation to another.

Then the variables are calculated from bottom to top by **back substitution**.

:::tip[Example]
$$
\begin{aligned}
\text{I:}\quad x + y + z &= 6 \\
\text{II:}\quad 2x - y + z &= 3 \\
\text{III:}\quad x + 2y - z &= 2
\end{aligned}
$$

With $\text{II} - 2 \cdot \text{I}$ and $\text{III} - \text{I}$, $x$ is eliminated from the lower equations:

$$
\begin{aligned}
x + y + z &= 6 \\
-3y - z &= -9 \\
y - 2z &= -4
\end{aligned}
$$

With $3 \cdot \text{III} + \text{II}$, $y$ is eliminated too:

$$
\begin{aligned}
x + y + z &= 6 \\
-3y - z &= -9 \\
-7z &= -21
\end{aligned}
$$

Back substitution: $z = 3$, $\;-3y - 3 = -9 \Rightarrow y = 2$, $\;x + 2 + 3 = 6 \Rightarrow x = 1$.

The solution is $(1 \mid 2 \mid 3)$.
:::

## Matrix notation

Since only the coefficients change during Gaussian elimination, the system is written more compactly as a **matrix**. The **coefficient matrix** $A$ contains the coefficients, the vector $\vec{b}$ the right-hand sides:

$$
\underbrace{\begin{pmatrix} 1 & 1 & 1 \\ 2 & -1 & 1 \\ 1 & 2 & -1 \end{pmatrix}}_{A} \cdot \underbrace{\begin{pmatrix} x \\ y \\ z \end{pmatrix}}_{\vec{x}} = \underbrace{\begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}}_{\vec{b}}
$$

For Gaussian elimination, the **augmented matrix** $(A \mid \vec{b})$ is written down and its rows are transformed:

$$
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 2 & -1 & 1 & 3 \\ 1 & 2 & -1 & 2 \end{array}\right)
\;\longrightarrow\;
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -3 & -1 & -9 \\ 0 & 0 & -7 & -21 \end{array}\right)
$$

Programs such as GeoGebra and calculators solve systems in matrix form directly. For a system with $n$ equations and $n$ variables, the solution is unique exactly when the **determinant** of $A$ is not $0$.

### Determinant of a 2×2 matrix and Cramer's rule

$$
\det \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} = a_{11} a_{22} - a_{12} a_{21}
$$

With **Cramer's rule**, a system with two variables can be solved directly. Replace the column of the variable you are looking for with the right-hand side:

$$
x = \frac{\det A_x}{\det A} \qquad y = \frac{\det A_y}{\det A}
$$

:::tip[Example]
For $2x + 3y = 12$ and $x - y = 1$:

$$
\det A = \begin{vmatrix} 2 & 3 \\ 1 & -1 \end{vmatrix} = -2 - 3 = -5 \qquad
x = \frac{\begin{vmatrix} 12 & 3 \\ 1 & -1 \end{vmatrix}}{-5} = \frac{-15}{-5} = 3 \qquad
y = \frac{\begin{vmatrix} 2 & 12 \\ 1 & 1 \end{vmatrix}}{-5} = \frac{-10}{-5} = 2
$$
:::

## Application example

:::tip[Example: Mixture problem]
An electronics shop sells USB sticks for €8 and SD cards for €12. On one day, 40 items were sold for a total of €380. How many USB sticks ($u$) and SD cards ($s$) were sold?

$$
\begin{aligned}
\text{I:}\quad u + s &= 40 \\
\text{II:}\quad 8u + 12s &= 380
\end{aligned}
$$

From I, $u = 40 - s$. Substituted: $8(40 - s) + 12s = 380 \Rightarrow 320 + 4s = 380 \Rightarrow s = 15$ and $u = 25$.
:::
