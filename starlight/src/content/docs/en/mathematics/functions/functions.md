---
title: Functions and Their Properties
description: The concept of a function, domain and range, representations, monotonicity, symmetry, periodicity, zeros, inverse functions and parametric representation.
sidebar:
  order: 1
---

## The concept of a function

A **function** $f$ is a mapping that assigns **exactly one** element $y = f(x)$ to every element $x$ of a **domain** $D$:

$$
f\colon D \to \mathbb{R}, \quad x \mapsto f(x)
$$

- $x$ is called the **argument** or independent variable,
- $y = f(x)$ is called the **function value** or dependent variable,
- the set of all function values is called the **range** $W$.

:::tip[Examples]
- Every circle radius $r$ is assigned its area: $A(r) = r^2 \pi$, $D = \mathbb{R}^+$.
- Every time of day is assigned the measured temperature.
- **Not** a function: every number $x > 0$ is assigned the numbers $y$ with $y^2 = x$ – both $y = 2$ and $y = -2$ belong to $x = 4$.
:::

Graphically, a function can be recognised by the fact that every vertical line intersects the graph **at most once**.

### Representations

| Representation     | Example                                        | Advantage                                |
| ------------------ | ---------------------------------------------- | ---------------------------------------- |
| Equation           | $f(x) = 2x^2 - 3$                              | exact, suitable for calculations         |
| Table of values    | $x = 0, 1, 2 \;\to\; y = -3, -1, 5$            | clear for individual values, measurements |
| Graph              | curve in a coordinate system                   | shows the behaviour at a glance          |
| Verbal description | "the square of a number, doubled, minus 3"     | understandable without a formula         |

### Domain

Unless stated otherwise, the **maximal domain** is the set of all real numbers for which the function can be evaluated. Excluded are:

- values for which a **denominator becomes $0$**: $f(x) = \frac{1}{x - 3}$, $D = \mathbb{R} \setminus \{3\}$
- values for which the radicand of an even **root becomes negative**: $f(x) = \sqrt{x + 2}$, $D = [-2; \infty[$
- values for which the argument of a **logarithm is not positive**: $f(x) = \ln x$, $D = \mathbb{R}^+$

In applications, the domain is often further restricted by the context, for example to non-negative times or lengths.

## Properties of functions

### Zeros and intercepts

- **Zeros** (roots) are the values $x$ with $f(x) = 0$, i.e. the intersections with the $x$-axis. They are found by solving the equation $f(x) = 0$.
- The intersection with the **$y$-axis** is $f(0)$.
- The **intersections of two functions** $f$ and $g$ are found by setting $f(x) = g(x)$.

### Monotonicity

| Property                    | Condition for $x_1 < x_2$     | Graph                              |
| --------------------------- | ----------------------------- | ---------------------------------- |
| strictly increasing         | $f(x_1) < f(x_2)$             | rises from left to right           |
| increasing                  | $f(x_1) \le f(x_2)$           | rises or stays level               |
| strictly decreasing         | $f(x_1) > f(x_2)$             | falls from left to right           |
| decreasing                  | $f(x_1) \ge f(x_2)$           | falls or stays level               |

Points where the monotonicity changes are **extrema** (maxima and minima). With [differential calculus](/en/mathematics/analysis/curve-sketching/), monotonicity and extrema can be calculated.

### Symmetry

- **Even function** (symmetric about the $y$-axis): $f(-x) = f(x)$ for all $x$. Examples: $x^2$, $x^4$, $\cos x$, $\lvert x \rvert$.
- **Odd function** (point-symmetric about the origin): $f(-x) = -f(x)$ for all $x$. Examples: $x$, $x^3$, $\sin x$, $\frac{1}{x}$.

Most functions are neither even nor odd, for example $x^2 + x$.

### Periodicity

A function is **periodic** with the period $p > 0$ if its values repeat after $p$:

$$
f(x + p) = f(x) \quad \text{for all } x
$$

The most important periodic functions are the [trigonometric functions](/en/mathematics/functions/trigonometric-functions/) with the period $2\pi$.

### Asymptotic behaviour and poles

An **asymptote** is a line that the graph approaches arbitrarily closely without reaching it:

- **Horizontal asymptote** $y = c$: the function values approach $c$ as $x \to \pm\infty$. $\frac{1}{x}$ has the asymptote $y = 0$, and so does $e^{-x}$ (for $x \to \infty$).
- **Vertical asymptote** $x = x_0$ at a **pole**: the function values become arbitrarily large (or small) near $x_0$. $\frac{1}{x - 3}$ has a pole at $x_0 = 3$.

Poles mainly occur in [rational functions](/en/mathematics/functions/polynomial-functions/#rational-functions).

## Shifting, stretching and reflecting

Many other graphs can be derived from the graph of a known function $f$:

| Function          | Change of the graph of $f$                                |
| ----------------- | --------------------------------------------------------- |
| $f(x) + c$        | shifted up by $c$ ($c < 0$: down)                          |
| $f(x - c)$        | shifted **right** by $c$ ($c < 0$: left)                   |
| $a \cdot f(x)$    | stretched vertically by the factor $a$ ($\lvert a \rvert < 1$: compressed) |
| $f(b \cdot x)$    | compressed or stretched horizontally by the factor $\frac{1}{b}$ |
| $-f(x)$           | reflected in the $x$-axis                                  |
| $f(-x)$           | reflected in the $y$-axis                                  |

:::caution
With $f(x - c)$, the graph is shifted to the **right** even though there is a minus: the value that $f$ previously had at $0$ is now only reached at $x = c$.
:::

## Inverse function

If a function is **one-to-one** (every function value occurs only once, for example in strictly monotonic functions), there is an **inverse function** $f^{-1}$ that reverses the mapping:

$$
y = f(x) \quad\Longleftrightarrow\quad x = f^{-1}(y)
$$

This is how to find the inverse function:

1. Solve $y = f(x)$ for $x$.
2. Swap $x$ and $y$.

The graph of the inverse function is the **reflection in the line $y = x$**. Domain and range are swapped.

:::tip[Example]
$f(x) = 2x + 4$: $\quad y = 2x + 4 \;\Rightarrow\; x = \frac{y - 4}{2} \;\Rightarrow\; f^{-1}(x) = \frac{x}{2} - 2$
:::

| Function         | Inverse function     | Restriction                |
| ---------------- | -------------------- | -------------------------- |
| $x^2$            | $\sqrt{x}$           | $x \ge 0$                  |
| $x^3$            | $\sqrt[3]{x}$        |                            |
| $e^x$            | $\ln x$              |                            |
| $10^x$           | $\lg x$              |                            |
| $\sin x$         | $\arcsin x$          | $-\frac{\pi}{2} \le x \le \frac{\pi}{2}$ |

Functions that are not invertible, such as $x^2$, are restricted to an interval on which they are strictly monotonic.

## Parametric representation

Some curves, such as circles or trajectories, are not functions, because several $y$ values belong to one $x$. They are described in **parametric form**, where $x$ and $y$ are given as functions of a parameter $t$ (often time):

$$
x = x(t), \quad y = y(t)
$$

:::tip[Examples]
**Circle** with radius $r$ around the origin:

$$
x(t) = r \cos t, \quad y(t) = r \sin t, \qquad t \in [0; 2\pi[
$$

**Projectile motion** with initial speed $v_0$ at the angle $\alpha$:

$$
x(t) = v_0 \cos\alpha \cdot t, \qquad y(t) = v_0 \sin\alpha \cdot t - \frac{g}{2} t^2
$$
:::

A [line in parametric form](/en/mathematics/geometry/lines-and-planes/) is also a parametric representation.
