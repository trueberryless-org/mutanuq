---
title: Curve Sketching and Optimisation
description: Monotonicity, extrema, curvature and inflection points with differential calculus, the steps of curve sketching, finding functions from properties and optimisation problems.
sidebar:
  order: 4
---

## Monotonicity

The first derivative shows whether a function is increasing or decreasing:

| Condition on an interval | Behaviour of $f$          |
| ------------------------ | ------------------------- |
| $f'(x) > 0$              | strictly increasing       |
| $f'(x) < 0$              | strictly decreasing       |
| $f'(x) = 0$              | horizontal tangent        |

## Extrema

At a **local maximum** or **local minimum**, the graph has a horizontal tangent. This gives the **necessary condition**:

$$
f'(x_0) = 0
$$

Not every point with $f'(x_0) = 0$ is an extremum – it can also be a **saddle point**, like $x^3$ at $0$. That is why a **sufficient condition** is checked:

| Condition                          | Result                |
| ---------------------------------- | --------------------- |
| $f'(x_0) = 0$ and $f''(x_0) < 0$   | **maximum**           |
| $f'(x_0) = 0$ and $f''(x_0) > 0$   | **minimum**           |
| $f'(x_0) = 0$ and $f''(x_0) = 0$   | no conclusion possible – check the sign change of $f'$ |

Alternatively, examine the **sign change** of the first derivative: if $f'$ changes from $+$ to $-$ at $x_0$, it is a maximum; from $-$ to $+$, a minimum; without a sign change, a saddle point.

:::note[Local and global]
A local maximum is only the largest value in its neighbourhood. The **global** maximum on an interval $[a; b]$ can also lie at the **boundary**. In optimisation problems, the boundary values $f(a)$ and $f(b)$ must therefore be compared with the local extrema.
:::

## Curvature and inflection points

The second derivative describes the curvature:

- $f''(x) > 0$: **concave up** (convex) – the slope increases.
- $f''(x) < 0$: **concave down** (concave) – the slope decreases.

An **inflection point** is a point where the curvature changes. There the slope is locally at its largest or smallest.

$$
\text{necessary: } f''(x_0) = 0 \qquad \text{sufficient: } f''(x_0) = 0 \text{ and } f'''(x_0) \ne 0
$$

An inflection point with a horizontal tangent ($f'(x_0) = 0$) is called a **saddle point** (stationary inflection point).

:::tip[Intuition]
If you ride a bike along the graph from left to right, you steer left in a left-hand bend ($f'' > 0$) and right in a right-hand bend ($f'' < 0$). At the inflection point, you ride straight ahead for a moment.
:::

## Steps of curve sketching

1. Determine the **domain**
2. Check for **symmetry** ($f(-x) = f(x)$ or $f(-x) = -f(x)$)
3. **Zeros** ($f(x) = 0$) and $y$-intercept ($f(0)$)
4. Calculate the **derivatives** $f'$, $f''$, $f'''$
5. **Extrema** ($f'(x) = 0$, determine the type with $f''$)
6. **Inflection points** ($f''(x) = 0$, check with $f'''$) and, if needed, inflection tangents
7. **End behaviour** and behaviour at gaps in the domain, asymptotes
8. State the intervals of **monotonicity and curvature**
9. Sketch the **graph**

:::tip[Example: Curve sketching]
$$
f(x) = x^3 - 6x^2 + 9x
$$

**Domain:** $D = \mathbb{R}$ (polynomial function)

**Symmetry:** mixed even and odd exponents – no symmetry about the origin or the $y$-axis

**Zeros:** $x(x^2 - 6x + 9) = x(x - 3)^2 = 0 \Rightarrow x_1 = 0$, $x_2 = 3$ (double: the graph touches the axis)

**Derivatives:**

$$
f'(x) = 3x^2 - 12x + 9 \qquad f''(x) = 6x - 12 \qquad f'''(x) = 6
$$

**Extrema:** $3x^2 - 12x + 9 = 0 \Rightarrow x^2 - 4x + 3 = 0 \Rightarrow x = 1$ or $x = 3$

- $f''(1) = -6 < 0$: maximum $H = (1 \mid 4)$
- $f''(3) = 6 > 0$: minimum $T = (3 \mid 0)$

**Inflection point:** $6x - 12 = 0 \Rightarrow x = 2$, $f'''(2) = 6 \ne 0$: $W = (2 \mid 2)$ with the slope of the inflection tangent $f'(2) = -3$

**End behaviour:** $x \to \infty \Rightarrow f(x) \to \infty$, $\;x \to -\infty \Rightarrow f(x) \to -\infty$

**Monotonicity:** increasing on $]-\infty; 1]$ and $[3; \infty[$, decreasing on $[1; 3]$

**Curvature:** concave down for $x < 2$, concave up for $x > 2$
:::

## Finding functions from properties

Often the reverse is asked: a function has to be determined from known properties. Each property gives an equation:

| Property                             | Equation                    |
| ------------------------------------ | --------------------------- |
| point $(a \mid b)$ lies on the graph | $f(a) = b$                  |
| extremum at $a$                      | $f'(a) = 0$                 |
| inflection point at $a$              | $f''(a) = 0$                |
| slope $k$ at $a$                     | $f'(a) = k$                 |

A polynomial function of degree $n$ has $n + 1$ coefficients and therefore needs $n + 1$ conditions.

:::tip[Example]
We are looking for a polynomial function of degree 3 whose graph passes through the origin, has a maximum at $H = (1 \mid 4)$ and an inflection point at $x = 2$.

Approach: $f(x) = ax^3 + bx^2 + cx + d$, $\;f'(x) = 3ax^2 + 2bx + c$, $\;f''(x) = 6ax + 2b$

$$
\begin{aligned}
f(0) &= 0: & d &= 0 \\
f(1) &= 4: & a + b + c + d &= 4 \\
f'(1) &= 0: & 3a + 2b + c &= 0 \\
f''(2) &= 0: & 12a + 2b &= 0
\end{aligned}
$$

The solution of the [system of equations](/en/mathematics/algebra/systems-of-linear-equations/) is $a = 1$, $b = -6$, $c = 9$, $d = 0$. This gives $f(x) = x^3 - 6x^2 + 9x$ again.
:::

## Optimisation problems

In **optimisation problems**, a quantity is to be as large or as small as possible – for example an area, a volume, costs or a profit. This is the procedure:

1. **Objective:** formula for the quantity to be optimised (often with several variables).
2. **Constraint:** relationship between the variables from the problem statement.
3. Rearrange the constraint for one variable and substitute it into the objective – this gives the **objective function** with only one variable.
4. Determine the **domain** of the objective function from the context.
5. Differentiate the objective function, set it to $0$ and solve.
6. Check the type of extremum and compare with the **boundary values**.
7. Calculate all required quantities and state the result in context.

:::tip[Example: Can with minimum material]
A cylindrical can should hold $V = 500\ \text{cm}^3$. Which dimensions use the least sheet metal?

**Objective:** surface area $O = 2r^2\pi + 2r\pi h \to \min$

**Constraint:** $V = r^2 \pi h = 500 \Rightarrow h = \dfrac{500}{r^2\pi}$

**Objective function:**

$$
O(r) = 2r^2\pi + 2r\pi \cdot \frac{500}{r^2\pi} = 2\pi r^2 + \frac{1000}{r}, \qquad r > 0
$$

**Differentiate and set to zero:**

$$
O'(r) = 4\pi r - \frac{1000}{r^2} = 0 \;\Rightarrow\; r^3 = \frac{1000}{4\pi} \;\Rightarrow\; r = \sqrt[3]{\frac{250}{\pi}} \approx 4.30\ \text{cm}
$$

**Check:** $O''(r) = 4\pi + \frac{2000}{r^3} > 0$, so it is a minimum.

**Result:** $r \approx 4.30$ cm, $h = \frac{500}{r^2\pi} \approx 8.60$ cm. The optimal can is exactly as high as it is wide ($h = 2r$).
:::

:::tip[Example: Maximising profit]
The cost of producing $x$ units of a product is $K(x) = 0.01x^2 + 20x + 5000$ (in €), the selling price is €60 per unit. The profit is

$$
G(x) = 60x - K(x) = -0.01x^2 + 40x - 5000
$$

$G'(x) = -0.02x + 40 = 0 \Rightarrow x = 2000$ units. The maximum profit is $G(2000) = 35\,000$ €.
:::
