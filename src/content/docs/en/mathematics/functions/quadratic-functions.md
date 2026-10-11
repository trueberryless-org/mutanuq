---
title: Quadratic Functions
description: Parabolas in standard form, vertex form and factored form, vertex, zeros, applications and quadratic interpolation.
sidebar:
  order: 3
---

## Equation and graph

A **quadratic function** has the standard form

$$
f(x) = a x^2 + b x + c \qquad (a \ne 0)
$$

Its graph is a **parabola**. The highest or lowest point is called the vertex $S$. The parabola is symmetric about the vertical line through the vertex.

| Coefficient | Meaning                                                                   |
| ----------- | ------------------------------------------------------------------------- |
| $a > 0$     | opens upwards, the vertex is a minimum                                    |
| $a < 0$     | opens downwards, the vertex is a maximum                                  |
| $\lvert a \rvert > 1$ | narrower than the standard parabola $y = x^2$                   |
| $\lvert a \rvert < 1$ | wider than the standard parabola                                |
| $c$         | intersection with the $y$-axis: $f(0) = c$                                |

## Forms

### Vertex form

$$
f(x) = a (x - x_S)^2 + y_S
$$

The vertex $S = (x_S \mid y_S)$ can be read off directly from this form. The graph is the parabola $a x^2$ shifted $x_S$ to the right and $y_S$ up.

From the standard form, the vertex is calculated with

$$
x_S = -\frac{b}{2a} \qquad y_S = f(x_S)
$$

or by **completing the square**:

:::tip[Example]
$$
\begin{aligned}
f(x) &= 2x^2 - 8x + 5 \\
&= 2(x^2 - 4x) + 5 \\
&= 2(x^2 - 4x + 4 - 4) + 5 \\
&= 2(x - 2)^2 - 8 + 5 \\
&= 2(x - 2)^2 - 3
\end{aligned}
$$

The vertex is $S = (2 \mid -3)$. Check: $x_S = -\frac{-8}{2 \cdot 2} = 2$.
:::

### Factored form

If the function has the zeros $x_1$ and $x_2$:

$$
f(x) = a (x - x_1)(x - x_2)
$$

The zeros are calculated with the [quadratic formula](/en/mathematics/algebra/equations-and-inequalities/#quadratic-equations). A parabola can have two, one or no zeros, depending on whether the discriminant is positive, zero or negative. The vertex always lies exactly halfway between the zeros: $x_S = \frac{x_1 + x_2}{2}$.

## Finding the equation

Depending on the information given, choose the appropriate form:

| Given                            | Approach                                        |
| -------------------------------- | ----------------------------------------------- |
| vertex and one point             | vertex form, $a$ by substituting the point      |
| zeros and one point              | factored form, $a$ by substituting the point    |
| any three points                 | standard form, system of 3 equations            |

:::tip[Example: Bridge arch]
A parabolic bridge arch is 40 m wide and 10 m high in the middle. If the origin is placed in the middle at ground level, the zeros are $\pm 20$ and the vertex is $(0 \mid 10)$:

$$
f(x) = a (x - 20)(x + 20), \qquad f(0) = -400a = 10 \;\Rightarrow\; a = -\frac{1}{40}
$$

So $f(x) = -\frac{1}{40}x^2 + 10$. At a distance of 10 m from the middle, the arch is $f(10) = 7.5$ m high.
:::

## Applications

- **Projectile motion:** The height of a thrown object is (without air resistance) a quadratic function of time: $h(t) = h_0 + v_0 t - \frac{g}{2} t^2$.
- **Braking distance:** The braking distance grows quadratically with speed. At double the speed, it is four times as long.
- **Electrical power:** $P = R \cdot I^2$ is a quadratic function of the current at a constant resistance.
- **Revenue and profit:** If the price falls linearly as the quantity sold increases, the revenue $E(x) = p(x) \cdot x$ is quadratic. The vertex gives the maximum revenue.

:::tip[Example: Vertical throw]
A ball is thrown vertically upwards at 12 m/s from a height of 1.5 m ($g \approx 9.81\ \text{m/s}^2$):

$$
h(t) = 1.5 + 12t - 4.905t^2
$$

The maximum height is reached at the vertex: $t_S = \frac{12}{2 \cdot 4.905} \approx 1.22$ s and $h(t_S) \approx 8.84$ m.

The ball lands when $h(t) = 0$: the positive solution is $t \approx 2.57$ s.
:::

## Quadratic interpolation

Exactly one parabola (or line) passes through three points with different $x$ values. If three measurements are known, intermediate values can be estimated more accurately with this parabola than with [linear interpolation](/en/mathematics/functions/linear-functions/#linear-interpolation).

:::tip[Example]
The measurements $(0 \mid 1)$, $(1 \mid 3)$ and $(2 \mid 9)$ were taken. The approach $f(x) = ax^2 + bx + c$ gives:

$$
\begin{aligned}
c &= 1 \\
a + b + c &= 3 \\
4a + 2b + c &= 9
\end{aligned}
\quad\Rightarrow\quad
\begin{aligned}
a + b &= 2 \\
4a + 2b &= 8
\end{aligned}
\quad\Rightarrow\quad a = 2,\; b = 0
$$

So $f(x) = 2x^2 + 1$ and the estimated value at $x = 1.5$ is $f(1.5) = 5.5$. Linear interpolation would have given $6$.
:::
