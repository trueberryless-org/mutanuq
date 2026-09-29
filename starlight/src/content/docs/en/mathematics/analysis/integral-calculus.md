---
title: Integral Calculus
description: Antiderivatives and indefinite integrals, basic integrals, integration rules, substitution, integration by parts, definite integrals and the fundamental theorem of calculus.
sidebar:
  order: 5
---

**Integral calculus** is the reverse of differential calculus. If you know the rate of change of a quantity, you can use it to reconstruct the quantity itself – for example the distance travelled from the velocity. Integrals are also used to calculate areas, volumes, mean values and work.

## Antiderivative

A function $F$ is called an **antiderivative** of $f$ if its derivative gives $f$:

$$
F'(x) = f(x)
$$

Since the derivative of a constant is $0$, every function has infinitely many antiderivatives that only differ by a constant $C$. The set of all antiderivatives is called the **indefinite integral**:

$$
\int f(x)\,\mathrm{d}x = F(x) + C
$$

$f$ is called the **integrand**, $C$ the **constant of integration**, and $\mathrm{d}x$ states the variable of integration.

:::tip[Example]
$F(x) = x^3$, $F(x) = x^3 + 5$ and $F(x) = x^3 - 2$ are all antiderivatives of $f(x) = 3x^2$. So $\int 3x^2\,\mathrm{d}x = x^3 + C$.
:::

## Basic integrals

| $f(x)$              | $\int f(x)\,\mathrm{d}x$                       |
| ------------------- | ---------------------------------------------- |
| $k$ (constant)      | $k x + C$                                      |
| $x^n$ ($n \ne -1$)  | $\dfrac{x^{n+1}}{n + 1} + C$                   |
| $\dfrac{1}{x}$      | $\ln \lvert x \rvert + C$                      |
| $e^x$               | $e^x + C$                                      |
| $a^x$               | $\dfrac{a^x}{\ln a} + C$                       |
| $\sin x$            | $-\cos x + C$                                  |
| $\cos x$            | $\sin x + C$                                   |
| $\dfrac{1}{\cos^2 x}$ | $\tan x + C$                                 |

The **power rule** of integration: increase the exponent by 1 and divide by the new exponent. It does not work for $n = -1$ (division by 0) – that is what the logarithm is for.

:::tip[Tip]
Every result can be **checked by differentiating**: the derivative of the antiderivative must give the integrand again.
:::

## Integration rules

The **constant factor rule** and the **sum rule** apply just like in differentiation:

$$
\int c \cdot f(x)\,\mathrm{d}x = c \int f(x)\,\mathrm{d}x \qquad \int \big(f(x) \pm g(x)\big)\,\mathrm{d}x = \int f(x)\,\mathrm{d}x \pm \int g(x)\,\mathrm{d}x
$$

:::tip[Examples]
$$
\int (6x^2 - 4x + 5)\,\mathrm{d}x = 2x^3 - 2x^2 + 5x + C
$$

$$
\int \left(\sqrt{x} + \frac{2}{x^2}\right)\mathrm{d}x = \int \left(x^{\frac{1}{2}} + 2x^{-2}\right)\mathrm{d}x = \frac{2}{3}x^{\frac{3}{2}} - \frac{2}{x} + C
$$
:::

:::caution
Unlike in differentiation, there is **no** simple rule for products and quotients. $\int x \cdot e^x\,\mathrm{d}x$ is not $\frac{x^2}{2} \cdot e^x$. The following integration methods are needed for this.
:::

### Linear substitution

If the argument is a linear function $ax + b$, integrate as usual and divide by the inner derivative $a$:

$$
\int f(ax + b)\,\mathrm{d}x = \frac{1}{a} F(ax + b) + C
$$

:::tip[Examples]
$$
\int e^{3x}\,\mathrm{d}x = \frac{1}{3} e^{3x} + C \qquad
\int \cos(\omega t)\,\mathrm{d}t = \frac{1}{\omega} \sin(\omega t) + C \qquad
\int (2x - 1)^4\,\mathrm{d}x = \frac{(2x - 1)^5}{10} + C
$$
:::

### Substitution

The **substitution rule** is the reverse of the chain rule. It helps when the integrand contains a function **and its derivative**. The inner function is replaced by a new variable $u$:

1. choose $u = g(x)$
2. $\frac{\mathrm{d}u}{\mathrm{d}x} = g'(x)$, so $\mathrm{d}x = \frac{\mathrm{d}u}{g'(x)}$
3. substitute – all $x$ must disappear
4. integrate with respect to $u$ and substitute back

:::tip[Example]
$$
\int 2x \cdot (x^2 + 1)^3\,\mathrm{d}x \qquad u = x^2 + 1,\quad \mathrm{d}x = \frac{\mathrm{d}u}{2x}
$$

$$
= \int 2x \cdot u^3 \cdot \frac{\mathrm{d}u}{2x} = \int u^3\,\mathrm{d}u = \frac{u^4}{4} + C = \frac{(x^2 + 1)^4}{4} + C
$$
:::

### Integration by parts

**Integration by parts** is the reverse of the product rule:

$$
\int u(x) \cdot v'(x)\,\mathrm{d}x = u(x) \cdot v(x) - \int u'(x) \cdot v(x)\,\mathrm{d}x
$$

Choose $u$ so that it becomes simpler when differentiated (e.g. a power of $x$), and $v'$ so that it is easy to integrate.

:::tip[Example]
$$
\int x \cdot e^x\,\mathrm{d}x \qquad u = x,\; u' = 1,\qquad v' = e^x,\; v = e^x
$$

$$
= x \cdot e^x - \int 1 \cdot e^x\,\mathrm{d}x = x e^x - e^x + C = e^x(x - 1) + C
$$

Check: $\big(e^x(x - 1)\big)' = e^x(x - 1) + e^x = x e^x$ ✓
:::

## Definite integral

The **definite integral** of $f$ between the **limits** $a$ and $b$ is a number. Intuitively, it is the **signed area** between the graph and the $x$-axis: areas above the axis count as positive, areas below as negative.

It is the limit of **Riemann sums**: the interval $[a; b]$ is divided into $n$ narrow strips of width $\Delta x$, each strip is approximated by a rectangle, and the areas of the rectangles are added up. For $n \to \infty$:

$$
\int_a^b f(x)\,\mathrm{d}x = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i) \cdot \Delta x
$$

The integral sign $\int$ is an elongated S for "sum".

### Fundamental theorem of calculus

The definite integral is calculated with any antiderivative $F$:

$$
\int_a^b f(x)\,\mathrm{d}x = F(b) - F(a) = \Big[ F(x) \Big]_a^b
$$

The constant of integration $C$ cancels out.

:::tip[Example]
$$
\int_1^3 (x^2 + 1)\,\mathrm{d}x = \left[ \frac{x^3}{3} + x \right]_1^3 = \left(9 + 3\right) - \left(\frac{1}{3} + 1\right) = 12 - \frac{4}{3} = \frac{32}{3} \approx 10.67
$$
:::

### Properties

$$
\int_a^a f(x)\,\mathrm{d}x = 0 \qquad
\int_b^a f(x)\,\mathrm{d}x = -\int_a^b f(x)\,\mathrm{d}x \qquad
\int_a^b f(x)\,\mathrm{d}x + \int_b^c f(x)\,\mathrm{d}x = \int_a^c f(x)\,\mathrm{d}x
$$

## The integral as reconstruction

If $f$ is the rate of change of a quantity, then $\int_a^b f(x)\,\mathrm{d}x$ is the **total change** of this quantity on the interval $[a; b]$:

| Rate of change           | The integral gives …               |
| ------------------------ | ---------------------------------- |
| velocity $v(t)$          | distance travelled                 |
| acceleration $a(t)$      | change in velocity                 |
| current $i(t)$           | charge $Q$ that has flowed         |
| power $P(t)$             | energy or work $W$                 |
| inflow rate              | change in volume                   |
| marginal costs $K'(x)$   | change in costs                    |

:::tip[Example: Energy consumption]
The power consumption of a device while it starts up is $P(t) = 200 - 150e^{-0.1t}$ (in W, $t$ in s). The energy in the first 30 s is

$$
W = \int_0^{30} \left(200 - 150e^{-0.1t}\right)\mathrm{d}t = \Big[ 200t + 1500e^{-0.1t} \Big]_0^{30} = 6000 + 1500e^{-3} - 1500 \approx 4574.7\ \text{J}
$$
:::

Further applications such as areas between curves, volumes of revolution and mean values can be found under [applications of integration](/en/mathematics/analysis/applications-of-integration/). Integrals that cannot be calculated exactly are solved with [numerical integration](/en/mathematics/analysis/numerical-methods/#numerical-integration).
