---
title: Complex Numbers
description: The imaginary unit, rectangular, polar and exponential form, the complex plane, basic operations and applications in AC circuit analysis.
sidebar:
  order: 9
---

## The imaginary unit

The equation $x^2 = -1$ has no solution in the real numbers, because the square of a real number is never negative. So the numbers are extended by the **imaginary unit** $j$ with

$$
j^2 = -1
$$

In mathematics, it is usually written as $i$. In electrical engineering and at technical college, $j$ is used, because $i$ already stands for electric current.

With $j$, roots of negative numbers can be taken: $\sqrt{-16} = \sqrt{16} \cdot \sqrt{-1} = 4j$.

The powers of $j$ repeat with a period of 4:

$$
j^1 = j \qquad j^2 = -1 \qquad j^3 = -j \qquad j^4 = 1 \qquad j^5 = j \qquad \ldots
$$

## Rectangular form

A **complex number** has the form

$$
z = a + b\,j \qquad a, b \in \mathbb{R}
$$

- $a = \operatorname{Re}(z)$ is the real part,
- $b = \operatorname{Im}(z)$ is the imaginary part (without $j$).

The set of all complex numbers is called $\mathbb{C}$. Real numbers are complex numbers with $b = 0$.

The **complex conjugate** of $z = a + bj$ is $z^* = \overline{z} = a - bj$. It holds that $z \cdot z^* = a^2 + b^2$, so the result is always real.

## The complex plane

Complex numbers cannot be shown on a number line, but as points (or arrows, called **phasors**) in the complex plane (Gaussian plane): the real part is plotted on the horizontal axis and the imaginary part on the vertical axis.

The number $z = 3 + 4j$ corresponds to the point $(3 \mid 4)$. The complex conjugate $z^* = 3 - 4j$ is its reflection in the real axis.

## Polar form

A phasor can also be described by its length and its angle:

- **Magnitude:** $\lvert z \rvert = r = \sqrt{a^2 + b^2}$
- **Argument** (angle to the positive real axis): $\varphi = \arg(z)$ with $\tan \varphi = \dfrac{b}{a}$

This gives the trigonometric form and the **phasor (versor) notation** common in electrical engineering:

$$
z = r \cdot (\cos\varphi + j \sin\varphi) = r \angle \varphi
$$

Conversely, $a = r \cos\varphi$ and $b = r \sin\varphi$.

:::caution[Watch the quadrant]
A calculator only returns $\arctan \frac{b}{a}$ in the range $-90°$ to $90°$. If $z$ lies in the 2nd or 3rd quadrant ($a < 0$), $180°$ must be added. A sketch is the safest approach.

Example: $z = -3 + 3j$ lies in the 2nd quadrant. $\arctan\frac{3}{-3} = -45°$, the correct angle is $\varphi = -45° + 180° = 135°$.
:::

:::tip[Example]
$z = 3 + 4j$: $\quad r = \sqrt{9 + 16} = 5$, $\quad \varphi = \arctan\frac{4}{3} \approx 53.13°$, so $z = 5 \angle 53.13°$.

$z = 10 \angle 30°$: $\quad a = 10 \cos 30° \approx 8.66$, $\quad b = 10 \sin 30° = 5$, so $z \approx 8.66 + 5j$.
:::

### Exponential form

With **Euler's formula** $e^{j\varphi} = \cos\varphi + j \sin\varphi$ (angle in radians), the polar form can be written particularly compactly:

$$
z = r \cdot e^{j\varphi}
$$

Substituting $\varphi = \pi$ gives the famous formula $e^{j\pi} + 1 = 0$.

## Basic operations

### Addition and subtraction

Addition and subtraction are done **in rectangular form**, separately for the real and imaginary parts. Geometrically, this corresponds to adding the phasors.

$$
(3 + 4j) + (1 - 2j) = 4 + 2j \qquad (3 + 4j) - (1 - 2j) = 2 + 6j
$$

### Multiplication

In rectangular form, expand and use $j^2 = -1$:

$$
(3 + 4j)(1 - 2j) = 3 - 6j + 4j - 8j^2 = 3 - 2j + 8 = 11 - 2j
$$

In polar form, multiplication is easier: **multiply the magnitudes, add the angles.**

$$
r_1 \angle \varphi_1 \cdot r_2 \angle \varphi_2 = (r_1 \cdot r_2) \angle (\varphi_1 + \varphi_2)
$$

Geometrically, multiplying by $j = 1 \angle 90°$ means a rotation by $90°$ anticlockwise.

### Division

In rectangular form, the fraction is expanded with the **complex conjugate of the denominator** so that the denominator becomes real:

$$
\frac{3 + 4j}{1 - 2j} = \frac{(3 + 4j)(1 + 2j)}{(1 - 2j)(1 + 2j)} = \frac{3 + 6j + 4j + 8j^2}{1 + 4} = \frac{-5 + 10j}{5} = -1 + 2j
$$

In polar form: **divide the magnitudes, subtract the angles.**

$$
\frac{r_1 \angle \varphi_1}{r_2 \angle \varphi_2} = \frac{r_1}{r_2} \angle (\varphi_1 - \varphi_2)
$$

### Powers and roots

According to **De Moivre's formula**, $\left(r \angle \varphi\right)^n = r^n \angle (n \cdot \varphi)$.

The equation $z^n = w$ always has exactly $n$ solutions in $\mathbb{C}$. They all have the magnitude $\sqrt[n]{\lvert w \rvert}$ and are evenly distributed on a circle, each rotated by $\frac{360°}{n}$.

:::tip[Remember]
| Operation                  | easiest in …          |
| -------------------------- | --------------------- |
| addition, subtraction      | rectangular form      |
| multiplication, division   | polar form            |
| powers, roots              | polar form            |
:::

## Quadratic equations

With complex numbers, every quadratic equation has solutions. If the discriminant is negative, the two solutions are complex conjugates.

:::tip[Example]
$$
x^2 - 4x + 13 = 0 \quad\Rightarrow\quad x_{1,2} = 2 \pm \sqrt{4 - 13} = 2 \pm \sqrt{-9} = 2 \pm 3j
$$
:::

In general, the **fundamental theorem of algebra** states that every polynomial equation of degree $n$ has exactly $n$ solutions in $\mathbb{C}$ (counted with multiplicity).

## Application: AC circuits

In **complex AC circuit analysis**, sinusoidal voltages and currents are represented as rotating phasors. Resistors, inductors and capacitors are given complex resistances (impedances):

| Component   | Impedance                                | Phase shift              |
| ----------- | ---------------------------------------- | ------------------------ |
| Resistor    | $\underline{Z}_R = R$                    | $0°$                     |
| Inductor    | $\underline{Z}_L = j\omega L$            | voltage leads by $90°$   |
| Capacitor   | $\underline{Z}_C = \dfrac{1}{j\omega C} = -\dfrac{j}{\omega C}$ | voltage lags by $90°$ |

Here $\omega = 2\pi f$ is the angular frequency. With impedances, Ohm's law $\underline{U} = \underline{Z} \cdot \underline{I}$ applies just like in a DC circuit. In series, impedances are added; in parallel, their reciprocals are added.

:::tip[Example: RL series circuit]
A resistor $R = 30\ \Omega$ and an inductor with $L = 127\ \text{mH}$ are connected in series to $230\ \text{V}$, $50\ \text{Hz}$.

$$
\underline{Z} = R + j\omega L = 30 + j \cdot 2\pi \cdot 50 \cdot 0.127 \approx 30 + 40j\ \Omega = 50 \angle 53.13°\ \Omega
$$

$$
\underline{I} = \frac{\underline{U}}{\underline{Z}} = \frac{230 \angle 0°}{50 \angle 53.13°}\ \text{A} = 4.6 \angle {-53.13°}\ \text{A}
$$

The current is $4.6\ \text{A}$ and lags the voltage by $53.13°$.
:::
