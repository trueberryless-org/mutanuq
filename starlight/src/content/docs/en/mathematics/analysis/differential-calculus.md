---
title: Differential Calculus
description: Difference quotient and derivative, the derivative function, differentiation rules, higher derivatives, tangents and applications in physics and engineering.
sidebar:
  order: 3
---

**Differential calculus** studies how fast a quantity changes. It is used to calculate velocities from distance-time functions, slopes of curves, maxima and minima, and optimal solutions to technical problems.

## Difference quotient

The **difference quotient** is the average rate of change of a function on the interval $[x_0; x_0 + h]$:

$$
\frac{\Delta y}{\Delta x} = \frac{f(x_0 + h) - f(x_0)}{h}
$$

Geometrically, it is the slope of the **secant** through the points $(x_0 \mid f(x_0))$ and $(x_0 + h \mid f(x_0 + h))$.

:::tip[Example: Average speed]
In the time $t$ (in s), a car covers the distance $s(t) = 2t^2$ (in m). Between $t = 2$ and $t = 5$, the average speed is

$$
\frac{s(5) - s(2)}{5 - 2} = \frac{50 - 8}{3} = 14\ \text{m/s}
$$
:::

Besides the average rate of change, there is the **absolute change** $f(x_0 + h) - f(x_0)$ and the relative change $\frac{f(x_0 + h) - f(x_0)}{f(x_0)}$.

## Derivative

If the interval is made smaller and smaller ($h \to 0$), the secant becomes the **tangent** and the average rate of change becomes the instantaneous rate of change. This [limit](/en/mathematics/analysis/limits-and-continuity/) is called the differential quotient or derivative of $f$ at $x_0$:

$$
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h} = \frac{\mathrm{d}f}{\mathrm{d}x}(x_0)
$$

If this limit exists, $f$ is called **differentiable** at $x_0$. The derivative is the slope of the tangent to the graph at the point $(x_0 \mid f(x_0))$.

:::tip[Example: Derivative of x² using the limit]
$$
f'(x) = \lim_{h \to 0} \frac{(x + h)^2 - x^2}{h} = \lim_{h \to 0} \frac{2xh + h^2}{h} = \lim_{h \to 0} (2x + h) = 2x
$$

For the car with $s(t) = 2t^2$, the instantaneous speed is $v(t) = s'(t) = 4t$. After 5 s, it is travelling at $20$ m/s $= 72$ km/h.
:::

:::note
Not every continuous function is differentiable everywhere. The absolute value function $\lvert x \rvert$ has a **kink** at $0$: from the left, the slope is $-1$, from the right $+1$, so there is no unique tangent.
:::

## The derivative function

If every point $x$ is assigned the derivative $f'(x)$, you get the **derivative function** $f'$. The process is called differentiating.

| Function $f$        | Derivative $f'$            |
| ------------------- | -------------------------- |
| $c$ (constant)      | $0$                        |
| $x^n$               | $n \cdot x^{n-1}$          |
| $\sqrt{x} = x^{\frac{1}{2}}$ | $\dfrac{1}{2\sqrt{x}}$ |
| $\dfrac{1}{x} = x^{-1}$ | $-\dfrac{1}{x^2}$     |
| $e^x$               | $e^x$                      |
| $a^x$               | $a^x \cdot \ln a$          |
| $\ln x$             | $\dfrac{1}{x}$             |
| $\sin x$            | $\cos x$                   |
| $\cos x$            | $-\sin x$                  |
| $\tan x$            | $\dfrac{1}{\cos^2 x}$      |

The **power rule** $(x^n)' = n x^{n-1}$ applies to all real exponents $n$, including roots and fractions.

## Differentiation rules

| Rule                | Formula                                                        |
| ------------------- | -------------------------------------------------------------- |
| Constant factor rule | $(c \cdot f)' = c \cdot f'$                                   |
| Sum rule            | $(f \pm g)' = f' \pm g'$                                       |
| Product rule    | $(f \cdot g)' = f' \cdot g + f \cdot g'$                       |
| Quotient rule   | $\left(\dfrac{f}{g}\right)' = \dfrac{f' \cdot g - f \cdot g'}{g^2}$ |
| Chain rule      | $\big(f(g(x))\big)' = f'(g(x)) \cdot g'(x)$, "outer derivative times inner derivative" |

:::tip[Examples]
**Sum and constant factor rules:**

$$
f(x) = 4x^3 - 5x^2 + 7x - 2 \quad\Rightarrow\quad f'(x) = 12x^2 - 10x + 7
$$

**Product rule:**

$$
f(x) = x^2 \cdot e^x \quad\Rightarrow\quad f'(x) = 2x \cdot e^x + x^2 \cdot e^x = e^x (x^2 + 2x)
$$

**Quotient rule:**

$$
f(x) = \frac{x}{x^2 + 1} \quad\Rightarrow\quad f'(x) = \frac{1 \cdot (x^2 + 1) - x \cdot 2x}{(x^2 + 1)^2} = \frac{1 - x^2}{(x^2 + 1)^2}
$$

**Chain rule:**

$$
f(x) = (3x + 1)^5 \quad\Rightarrow\quad f'(x) = 5(3x + 1)^4 \cdot 3 = 15(3x + 1)^4
$$

$$
f(x) = e^{-2x} \quad\Rightarrow\quad f'(x) = e^{-2x} \cdot (-2) = -2e^{-2x}
$$

$$
f(x) = \sin(\omega t) \quad\Rightarrow\quad f'(t) = \omega \cos(\omega t)
$$
:::

:::caution
The inner derivative is often forgotten in the chain rule: $(e^{3x})' = 3e^{3x}$, not $e^{3x}$.
:::

## Higher derivatives

The derivative of $f'$ is called the **second derivative** $f''$, its derivative the third derivative $f'''$ and so on.

- $f'$ describes the slope of $f$ (increasing/decreasing).
- $f''$ describes the curvature of $f$: if $f'' > 0$, the graph is concave up (convex, a "smile"); if $f'' < 0$, it is concave down.

In physics, the second derivative of distance with respect to time is **acceleration**:

$$
s(t) \;\xrightarrow{\ \frac{\mathrm{d}}{\mathrm{d}t}\ }\; v(t) = s'(t) \;\xrightarrow{\ \frac{\mathrm{d}}{\mathrm{d}t}\ }\; a(t) = v'(t) = s''(t)
$$

## Tangent

The tangent to the graph of $f$ at the point $(x_0 \mid f(x_0))$ has the slope $k = f'(x_0)$ and the equation

$$
t(x) = f'(x_0) \cdot (x - x_0) + f(x_0)
$$

:::tip[Example]
$f(x) = x^3 - 2x$ at $x_0 = 1$: $\;f(1) = -1$, $\;f'(x) = 3x^2 - 2$, $\;f'(1) = 1$

$$
t(x) = 1 \cdot (x - 1) - 1 = x - 2
$$
:::

Near $x_0$, the tangent is a good approximation of the function (**linearisation**): $f(x_0 + h) \approx f(x_0) + f'(x_0) \cdot h$. For example, $\sqrt{4.1} \approx 2 + \frac{1}{4} \cdot 0.1 = 2.025$ (exact: $2.0248\ldots$).

## Applications

Wherever one quantity depends on another, the derivative describes the instantaneous rate of change:

| Function                    | Derivative                        |
| --------------------------- | --------------------------------- |
| distance $s(t)$             | velocity $v(t)$                   |
| velocity $v(t)$             | acceleration $a(t)$               |
| charge $Q(t)$               | current $i(t) = \dot{Q}(t)$       |
| energy $E(t)$               | power $P(t)$                      |
| costs $K(x)$                | marginal costs $K'(x)$            |
| volume $V(t)$               | inflow or outflow rate            |

In electrical engineering, for example, the voltage across an inductor is $u_L = L \cdot \frac{\mathrm{d}i}{\mathrm{d}t}$ and the current through a capacitor is $i_C = C \cdot \frac{\mathrm{d}u}{\mathrm{d}t}$.

:::tip[Example: Capacitor current]
A voltage $u(t) = 325 \sin(314\,t)$ V is applied to a capacitor with $C = 10\ \mu\text{F}$. The current is

$$
i(t) = C \cdot u'(t) = 10 \cdot 10^{-6} \cdot 325 \cdot 314 \cos(314\,t) \approx 1.02 \cos(314\,t)\ \text{A}
$$

The current is a cosine function: it leads the voltage by $90°$.
:::

How to use derivatives to find maxima, minima and inflection points and to solve optimisation problems is shown in [curve sketching](/en/mathematics/analysis/curve-sketching/).
