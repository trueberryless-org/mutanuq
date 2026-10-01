---
title: Linear Functions
description: Slope and intercept, finding equations of lines, direct and inverse proportionality, linear models and linear interpolation.
sidebar:
  order: 2
---

## Equation

A **linear function** has the form

$$
f(x) = k \cdot x + d
$$

Its graph is a **straight line**.

- $k$ is the slope: if $x$ increases by $1$, $f(x)$ changes by $k$.
- $d$ is the intercept on the $y$-axis: $f(0) = d$.

| Slope     | Line                          |
| --------- | ----------------------------- |
| $k > 0$   | increasing                    |
| $k < 0$   | decreasing                    |
| $k = 0$   | horizontal (constant function) |

:::note
In many English-speaking countries, a linear function is written as $y = mx + b$ or $y = mx + c$. At Austrian schools, $k$ and $d$ are used.
:::

## Calculating the slope

The slope is the ratio of the vertical change to the horizontal change, shown in the **slope triangle**:

$$
k = \frac{\Delta y}{\Delta x} = \frac{y_2 - y_1}{x_2 - x_1}
$$

The angle of inclination $\alpha$ to the $x$-axis satisfies $\tan\alpha = k$.

:::tip[Example: Line through two points]
We are looking for the line through $P_1 = (1 \mid 3)$ and $P_2 = (4 \mid 9)$.

$$
k = \frac{9 - 3}{4 - 1} = 2
$$

$d$ is obtained by substituting a point: $3 = 2 \cdot 1 + d \Rightarrow d = 1$.

So $f(x) = 2x + 1$.
:::

**Point-slope form:** If a point $(x_1 \mid y_1)$ and the slope $k$ are known:

$$
y = k \cdot (x - x_1) + y_1
$$

## Relative position of two lines

- **Parallel:** same slope, $k_1 = k_2$.
- **Perpendicular:** $k_1 \cdot k_2 = -1$, i.e. $k_2 = -\frac{1}{k_1}$.
- **Intersection:** set $k_1 x + d_1 = k_2 x + d_2$ and solve for $x$.
- **Zero:** $kx + d = 0 \Rightarrow x = -\frac{d}{k}$ (for $k \ne 0$).

:::tip[Example: Comparing tariffs]
Mobile tariff A costs €10 per month plus €0.05 per minute, tariff B costs €4 per month plus €0.09 per minute. From how many minutes on is A cheaper?

$$
10 + 0.05x = 4 + 0.09x \;\Rightarrow\; 6 = 0.04x \;\Rightarrow\; x = 150
$$

From 150 minutes per month on, tariff A is cheaper.
:::

## Linear models

Many technical and economic relationships are (approximately) linear. In context, $k$ and $d$ have a concrete meaning:

| Application                  | Function                    | $k$                         | $d$                    |
| ---------------------------- | --------------------------- | --------------------------- | ---------------------- |
| Uniform motion               | $s(t) = v \cdot t + s_0$    | velocity                    | starting position      |
| Costs                        | $K(x) = k_v \cdot x + K_f$  | variable cost per unit      | fixed costs            |
| Ohm's law                    | $U(I) = R \cdot I$          | resistance                  | 0                      |
| Thermal expansion            | $l(\vartheta) = l_0 (1 + \alpha \vartheta)$ | $l_0 \alpha$      | length at $0\,°\text{C}$ |

:::note
The slope always has the unit "unit of $y$ per unit of $x$", for example €/unit, m/s or V/A. This helps to interpret it correctly in context.
:::

## Direct and inverse proportionality

Two quantities are **directly proportional** if doubling (tripling, …) one quantity doubles (triples, …) the other. Their quotient is constant:

$$
y = k \cdot x \qquad \frac{y}{x} = k
$$

The graph is a line through the origin ($d = 0$). Example: price and quantity at a fixed unit price.

Two quantities are **inversely proportional** if doubling one halves the other. Their product is constant:

$$
y = \frac{c}{x} \qquad x \cdot y = c
$$

The graph is a **hyperbola**, so this is not a linear function. Examples: the number of workers and the time required, or resistance and current at a constant voltage.

:::tip[Example]
5 servers process a job in 12 hours. How long do 8 servers (with the same performance) need?

$$
5 \cdot 12 = 8 \cdot t \quad\Rightarrow\quad t = 7.5\ \text{h}
$$
:::

## Linear interpolation

If only individual measurements or table values are available, intermediate values are estimated by connecting the two neighbouring points with a straight line (**linear interpolation**):

$$
f(x) \approx y_1 + \frac{y_2 - y_1}{x_2 - x_1} \cdot (x - x_1) \qquad \text{for } x_1 \le x \le x_2
$$

Estimating values outside the measured range is called **extrapolation**. It is much less reliable.

:::tip[Example]
A temperature sensor has a resistance of $1078\ \Omega$ at $20\,°\text{C}$ and $1117\ \Omega$ at $30\,°\text{C}$. What is the temperature at $1100\ \Omega$?

Here the temperature is interpolated as a function of the resistance:

$$
\vartheta \approx 20 + \frac{30 - 20}{1117 - 1078} \cdot (1100 - 1078) = 20 + \frac{10}{39} \cdot 22 \approx 25.6\,°\text{C}
$$
:::

More accurate approximations are obtained with [quadratic interpolation](/en/mathematics/functions/quadratic-functions/#quadratic-interpolation) through three points.
