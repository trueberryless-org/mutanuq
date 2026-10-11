---
title: Equations and Inequalities
description: Equivalence transformations, linear and quadratic equations, rearranging formulas, rational and radical equations as well as linear inequalities.
sidebar:
  order: 7
---

## Equations and solution sets

An **equation** consists of two [expressions](/en/mathematics/algebra/terms/) joined by an equals sign. A number that gives a true statement when substituted for the variable is a solution. All solutions together form the solution set $L$.

The solution set depends on the **universal set**: the equation $2x = 3$ has no solution in $\mathbb{Z}$ ($L = \{\}$), but the solution $L = \{1.5\}$ in $\mathbb{Q}$.

## Equivalence transformations

An **equivalence transformation** changes an equation without changing its solution set. On both sides, you may

- add or subtract the same expression,
- multiply or divide by the same number that is not $0$.

The aim is to get the variable on its own on one side.

:::tip[Example: Linear equation]
$$
\begin{aligned}
5x - 7 &= 2x + 8 && \mid -2x \\
3x - 7 &= 8 && \mid +7 \\
3x &= 15 && \mid :3 \\
x &= 5
\end{aligned}
$$

**Check:** $5 \cdot 5 - 7 = 18$ and $2 \cdot 5 + 8 = 18$. ✓
:::

:::caution
Multiplying or dividing by an expression that contains a variable is only an equivalence transformation if the expression cannot become $0$. If you divide $x^2 = 3x$ by $x$, you lose the solution $x = 0$. The correct way is: $x^2 - 3x = 0 \Rightarrow x(x - 3) = 0 \Rightarrow x_1 = 0,\ x_2 = 3$.
:::

## Rearranging formulas

In engineering, formulas often have to be rearranged for another quantity. This works exactly like solving an equation: the quantity you are looking for is treated like a variable, all others like numbers.

:::tip[Example: Resistors in parallel]
The formula $\dfrac{1}{R} = \dfrac{1}{R_1} + \dfrac{1}{R_2}$ is to be rearranged for $R_2$.

$$
\begin{aligned}
\frac{1}{R} - \frac{1}{R_1} &= \frac{1}{R_2} \\
\frac{R_1 - R}{R \cdot R_1} &= \frac{1}{R_2} \\
R_2 &= \frac{R \cdot R_1}{R_1 - R}
\end{aligned}
$$
:::

:::tip[Example: Kinetic energy]
$E = \dfrac{m v^2}{2}$ for $v$: $\quad 2E = m v^2 \;\Rightarrow\; v^2 = \dfrac{2E}{m} \;\Rightarrow\; v = \sqrt{\dfrac{2E}{m}}$

The negative solution is dropped here, because the magnitude of a velocity cannot be negative.
:::

## Quadratic equations

A **quadratic equation** has the general form

$$
a x^2 + b x + c = 0 \qquad (a \ne 0)
$$

It is solved with the **quadratic formula**:

$$
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

If $a = 1$, the equation is written in the **normalised form** $x^2 + px + q = 0$ and solved with the $pq$ formula:

$$
x_{1,2} = -\frac{p}{2} \pm \sqrt{\left(\frac{p}{2}\right)^2 - q}
$$

### Discriminant

The expression under the root is called the **discriminant** $D = b^2 - 4ac$. It determines the number of real solutions:

| Discriminant  | Solutions                                                           |
| ------------- | ------------------------------------------------------------------- |
| $D > 0$       | two different real solutions                                        |
| $D = 0$       | one (double) real solution $x = -\frac{b}{2a}$                      |
| $D < 0$       | no real solution, but two [complex solutions](/en/mathematics/algebra/complex-numbers/#quadratic-equations) |

:::tip[Example]
$2x^2 - 4x - 6 = 0$ with $a = 2$, $b = -4$, $c = -6$:

$$
x_{1,2} = \frac{4 \pm \sqrt{16 + 48}}{4} = \frac{4 \pm 8}{4} \qquad\Rightarrow\qquad x_1 = 3,\quad x_2 = -1
$$
:::

### Special cases without the formula

- **No constant term** ($c = 0$): factor out. $\;3x^2 - 12x = 0 \Rightarrow 3x(x - 4) = 0 \Rightarrow x_1 = 0,\ x_2 = 4$
- **No linear term** ($b = 0$): take the root. $\;x^2 - 25 = 0 \Rightarrow x^2 = 25 \Rightarrow x_{1,2} = \pm 5$

The fact that a product is $0$ exactly when one of its factors is $0$ is called the **zero product property**.

### Vieta's formulas

For the solutions of the normalised form $x^2 + px + q = 0$:

$$
x_1 + x_2 = -p \qquad x_1 \cdot x_2 = q
$$

This gives the **factorisation into linear factors** $x^2 + px + q = (x - x_1)(x - x_2)$. For example, $x^2 - 5x + 6 = (x - 2)(x - 3)$, because $2 + 3 = 5$ and $2 \cdot 3 = 6$.

## Rational equations

In **rational equations**, the variable appears in the denominator. First determine the domain, then multiply by the common denominator. Solutions that are not in the domain must be discarded.

:::tip[Example]
$$
\frac{3}{x - 1} = \frac{2}{x} \qquad D = \mathbb{R} \setminus \{0, 1\}
$$

Multiplying by $x(x - 1)$: $\;3x = 2(x - 1) \Rightarrow 3x = 2x - 2 \Rightarrow x = -2$

Since $-2 \in D$, $L = \{-2\}$.
:::

## Radical equations

In **radical equations**, isolate the root and square both sides. Squaring is not an equivalence transformation, because it can produce extraneous solutions. That is why checking the solutions is essential.

:::tip[Example]
$$
\begin{aligned}
\sqrt{x + 7} &= x + 1 && \mid (\ )^2 \\
x + 7 &= x^2 + 2x + 1 \\
0 &= x^2 + x - 6 \\
x_1 &= 2, \quad x_2 = -3
\end{aligned}
$$

**Check:** $\sqrt{9} = 3 = 2 + 1$ ✓, but $\sqrt{4} = 2 \ne -3 + 1 = -2$ ✗. So $L = \{2\}$.
:::

## Inequalities

**Inequalities** are formed with the signs $<$, $\le$, $>$ and $\ge$. They are solved like equations, with one important exception:

:::caution[Important]
If you multiply or divide an inequality by a **negative** number, the inequality sign flips: $-2x < 6$ becomes $x > -3$.
:::

The solution set of an inequality is usually an [interval](/en/mathematics/algebra/sets-and-number-ranges/#intervals).

:::tip[Example]
$$
\begin{aligned}
3 - 2x &\le 11 && \mid -3 \\
-2x &\le 8 && \mid :(-2) \\
x &\ge -4
\end{aligned}
$$

$L = [-4; \infty[$
:::

### Double inequalities and absolute value inequalities

A **double inequality** such as $-1 < 2x + 3 \le 7$ is solved by transforming all three parts at the same time: $-4 < 2x \le 4$, so $-2 < x \le 2$ and $L = ]-2; 2]$.

The **absolute value** $\lvert x \rvert$ is the distance of a number from $0$. The inequality $\lvert x - a \rvert \le r$ describes all numbers whose distance from $a$ is at most $r$, i.e. the interval $[a - r; a + r]$. This is exactly how [tolerances](/en/mathematics/algebra/calculating-with-quantities/#absolute-and-relative-error) are stated: $\lvert l - 50\ \text{mm} \rvert \le 0.2\ \text{mm}$.
