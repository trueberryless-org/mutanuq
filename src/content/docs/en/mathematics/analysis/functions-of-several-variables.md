---
title: Functions of Several Variables
description: "Functions of two variables as surfaces, contour lines, partial derivatives, total differential, linear error propagation, maximum error and extrema."
sidebar:
  order: 8
---

In engineering, a quantity almost always depends on several others: the power $P = U \cdot I$ on voltage and current, the volume of a cylinder $V = \pi r^2 h$ on radius and height, the transfer time on data volume and bandwidth. Such relationships are described by **functions of several variables**. Their most important application at the HTL is estimating how measurement errors in the input quantities affect the result.

## Representation

A function of two variables assigns exactly one value $z = f(x, y)$ to each pair of numbers $(x, y)$ in the domain. The points $(x \mid y \mid f(x, y))$ form a **surface** in space.

:::tip[Example]
- $f(x, y) = 2x + 3y - 6$: a plane.
- $f(x, y) = x^2 + y^2$: a paraboloid of revolution open at the top ("bowl") with its minimum at the origin.
- $P(U, I) = U \cdot I$: a saddle surface.
:::

Because spatial representations are hard to read on paper, **contour lines** (level curves) are used: all points $(x, y)$ with the same function value $f(x, y) = c$ are connected. This produces maps with contour lines, weather maps with isobars, or families of characteristic curves. The contour lines of $x^2 + y^2$ are concentric circles.

If one variable is held constant, you get an ordinary function of the other variable, i.e. a **cross-section** through the surface. Families of characteristic curves in data sheets (e.g. transistor characteristics $I_C(U_{CE})$ for different base currents) are exactly such cross-sections.

## Partial derivatives

For the **partial derivative** with respect to $x$, $y$ is treated as a constant and you [differentiate](/en/mathematics/analysis/differential-calculus/) only with respect to $x$. It gives the slope of the surface in the $x$ direction:

$$
f_x = \frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x + h, y) - f(x, y)}{h} \qquad f_y = \frac{\partial f}{\partial y} = \lim_{h \to 0} \frac{f(x, y + h) - f(x, y)}{h}
$$

The symbol $\partial$ ("del", curly d) denotes partial derivatives. All differentiation rules apply unchanged.

:::tip[Example]
$f(x, y) = x^2 y + 3 x y^3$

$$
f_x = 2xy + 3y^3 \qquad f_y = x^2 + 9xy^2
$$

Second-order derivatives:

$$
f_{xx} = 2y \qquad f_{yy} = 18xy \qquad f_{xy} = f_{yx} = 2x + 9y^2
$$
:::

For the functions that occur in practice, the mixed derivatives $f_{xy}$ and $f_{yx}$ are equal (**Schwarz's theorem**), so the order of differentiation does not matter.

:::tip[Example: Ideal gas]
The pressure of an ideal gas is $p(V, T) = \frac{nRT}{V}$.

$$
\frac{\partial p}{\partial T} = \frac{nR}{V} \qquad \frac{\partial p}{\partial V} = -\frac{nRT}{V^2}
$$

The first derivative describes how strongly the pressure rises when heated at constant volume, the second how strongly it falls on expansion at constant temperature.
:::

Together, the partial derivatives form the **gradient** $\operatorname{grad} f = \begin{pmatrix} f_x \\ f_y \end{pmatrix}$. It points in the direction of steepest ascent and is perpendicular to the contour lines. Gradient descent, the method used to train neural networks, moves step by step in the direction of the negative gradient to minimise an error function.

## Total differential

If $x$ and $y$ change simultaneously by small amounts $\mathrm{d}x$ and $\mathrm{d}y$, $f$ changes approximately by

$$
\mathrm{d}f = \frac{\partial f}{\partial x}\,\mathrm{d}x + \frac{\partial f}{\partial y}\,\mathrm{d}y
$$

This is the **total differential**. Geometrically, the surface near a point is replaced by the **tangent plane**, just as the curve of a function of one variable is replaced by the tangent (linearisation). For more variables, further terms are added accordingly.

## Error propagation

Measured values are never exact. If the input quantities have absolute errors $\Delta x$, $\Delta y$, the error of the result is estimated with the total differential.

### Linear maximum error

In the worst case, all errors act in the same direction. Then the absolute values are added:

$$
\Delta f_{\max} = \left\lvert \frac{\partial f}{\partial x} \right\rvert \Delta x + \left\lvert \frac{\partial f}{\partial y} \right\rvert \Delta y
$$

The relative maximum error is $\frac{\Delta f_{\max}}{\lvert f \rvert}$. For products and quotients this yields the familiar rule that the [relative errors](/en/mathematics/algebra/calculating-with-quantities/#absolute-and-relative-error) add up.

:::tip[Example: Electrical power]
The measurements are $U = (230 \pm 2)\ \text{V}$ and $I = (5.0 \pm 0.1)\ \text{A}$. With $P = U \cdot I$, $P = 1150\ \text{W}$ and

$$
\frac{\partial P}{\partial U} = I = 5\ \text{A} \qquad \frac{\partial P}{\partial I} = U = 230\ \text{V}
$$

$$
\Delta P_{\max} = 5 \cdot 2 + 230 \cdot 0.1 = 10 + 23 = 33\ \text{W}
$$

Result: $P = (1150 \pm 33)\ \text{W}$, relative error $\frac{33}{1150} \approx 2.9\,\%$. This equals the sum of the relative errors $\frac{2}{230} + \frac{0.1}{5} \approx 0.9\,\% + 2\,\%$. The current measurement contributes most; a more accurate ammeter would improve the result the most.
:::

:::tip[Example: Cylinder volume]
A cylinder has $r = (2.0 \pm 0.05)\ \text{cm}$ and $h = (10.0 \pm 0.1)\ \text{cm}$. With $V = \pi r^2 h \approx 125.66\ \text{cm}^3$:

$$
\Delta V_{\max} = \lvert 2\pi r h \rvert \cdot \Delta r + \lvert \pi r^2 \rvert \cdot \Delta h = 2\pi \cdot 2 \cdot 10 \cdot 0.05 + \pi \cdot 4 \cdot 0.1 \approx 6.28 + 1.26 = 7.54\ \text{cm}^3
$$

The radius enters squared, so its relative error counts twice: $2 \cdot 2.5\,\% + 1\,\% = 6\,\%$.
:::

### Statistical error according to Gauss

If the measurement errors are random and independent of each other, they partly cancel out. A more realistic measure than the maximum error is then the **mean error** given by Gauss's law of error propagation:

$$
\Delta f = \sqrt{\left(\frac{\partial f}{\partial x}\,\Delta x\right)^2 + \left(\frac{\partial f}{\partial y}\,\Delta y\right)^2}
$$

For the electrical power this gives $\Delta P = \sqrt{10^2 + 23^2} \approx 25\ \text{W}$, less than the maximum error of $33\ \text{W}$.

## Extrema

At a maximum or minimum of a smooth surface, the tangent plane is horizontal. The **necessary condition** is therefore that all partial derivatives are zero:

$$
f_x(x_0, y_0) = 0 \qquad f_y(x_0, y_0) = 0
$$

Whether there really is an extremum is decided by the **sufficient condition** with $D = f_{xx} f_{yy} - f_{xy}^2$ at that point:

| Condition | Result |
| --------- | ------ |
| $D > 0$ and $f_{xx} > 0$ | local minimum |
| $D > 0$ and $f_{xx} < 0$ | local maximum |
| $D < 0$ | saddle point (no extremum) |
| $D = 0$ | no conclusion possible |

:::tip[Example]
$f(x, y) = x^2 + y^2 - 2x + 4y$

$$
f_x = 2x - 2 = 0 \;\Rightarrow\; x = 1 \qquad f_y = 2y + 4 = 0 \;\Rightarrow\; y = -2
$$

With $f_{xx} = 2$, $f_{yy} = 2$, $f_{xy} = 0$, $D = 4 > 0$ and $f_{xx} > 0$: at $(1 \mid -2)$ there is a minimum with $f(1, -2) = 1 + 4 - 2 - 8 = -5$.
:::

The formulas of [linear regression](/en/mathematics/stochastics/regression-and-correlation/#method-of-least-squares) are derived on the same principle: the sum of squared errors is a function of the two parameters $k$ and $d$ whose minimum is sought.

## Further reading

- [Lothar Papula: Mathematik für Ingenieure und Naturwissenschaftler, Volume 2 (Springer Vieweg)](https://link.springer.com/book/10.1007/978-3-658-07790-7)
- [Partial derivative, Encyclopedia of Mathematics](https://encyclopediaofmath.org/wiki/Partial_derivative)
