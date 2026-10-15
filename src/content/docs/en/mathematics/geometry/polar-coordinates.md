---
title: Polar Coordinates
description: "Polar coordinates in the plane, conversion between Cartesian and polar coordinates, vectors in polar form, curves in polar form, cylindrical and spherical coordinates."
sidebar:
  order: 5
---

In **Cartesian coordinates**, a point is described by its distances $x$ and $y$ from the axes. Many technical quantities, however, are more naturally given by a **length and an angle**: the position of a target on a radar screen, a force with magnitude and direction, the position of a robot arm or an AC phasor. For these, **polar coordinates** are used.

## Definition

A point $P$ in the plane is described by two numbers:

- the **distance** $r \geq 0$ from the origin (pole),
- the **polar angle** (argument) $\varphi$, measured from the positive $x$-axis **anticlockwise**.

You write $P = (r; \varphi)$ or $P = (r \mid \varphi)$. The angle is usually given in the range $0° \leq \varphi < 360°$ or $-180° < \varphi \leq 180°$, or correspondingly in radians. Unlike Cartesian coordinates, the representation is not unique: $(2; 30°)$ and $(2; 390°)$ are the same point, and any angle is possible for the origin.

## Conversion

### Polar to Cartesian

From the right-angled triangle with hypotenuse $r$, using [sine and cosine](/en/mathematics/geometry/trigonometry/#unit-circle):

$$
x = r \cdot \cos\varphi \qquad y = r \cdot \sin\varphi
$$

:::tip[Example]
$P = (6; 210°)$:

$$
x = 6 \cdot \cos 210° \approx -5.196 \qquad y = 6 \cdot \sin 210° = -3 \qquad P \approx (-5.196 \mid -3)
$$
:::

### Cartesian to polar

$$
r = \sqrt{x^2 + y^2} \qquad \tan\varphi = \frac{y}{x}
$$

:::caution
For $\arctan\frac{y}{x}$ a calculator only returns angles between $-90°$ and $90°$, i.e. only points in the first and fourth quadrants. If the point lies to the left of the $y$-axis ($x < 0$), you must add $180°$. Make a sketch to check the quadrant.
:::

| Quadrant | Signs | Angle |
| -------- | ----- | ----- |
| I | $x > 0$, $y \geq 0$ | $\varphi = \arctan\frac{y}{x}$ |
| II, III | $x < 0$ | $\varphi = \arctan\frac{y}{x} + 180°$ |
| IV | $x > 0$, $y < 0$ | $\varphi = \arctan\frac{y}{x} + 360°$ |
| on the $y$-axis | $x = 0$ | $\varphi = 90°$ ($y > 0$) or $270°$ ($y < 0$) |

:::tip[Example]
$P = (-3 \mid 4)$:

$$
r = \sqrt{9 + 16} = 5 \qquad \arctan\frac{4}{-3} \approx -53.13° \qquad \varphi \approx -53.13° + 180° = 126.87°
$$

$P = (5; 126.87°)$. The point lies in the second quadrant, so the angle must be between $90°$ and $180°$.
:::

Programming languages provide the function `atan2(y, x)` for this (C#: `Math.Atan2`, Rust: `f64::atan2`), which takes the quadrant into account automatically and returns an angle in $]-\pi; \pi]$. For $(-2 \mid -2)$, for example, it gives $-135°$, i.e. $225°$.

## Vectors in polar form

A [vector](/en/mathematics/geometry/vectors/) in the plane is determined by its magnitude and direction angle just as uniquely as by its components:

$$
\vec{a} = \begin{pmatrix} a_x \\ a_y \end{pmatrix} = \begin{pmatrix} \lvert\vec{a}\rvert \cos\varphi \\ \lvert\vec{a}\rvert \sin\varphi \end{pmatrix}
$$

To **add** vectors, convert to components, add and convert back. Multiplying by a scalar only changes the magnitude (and, for a negative scalar, also turns the direction by $180°$).

:::tip[Example: Forces]
Acting on a point are $F_1 = 50\ \text{N}$ at $30°$ and $F_2 = 80\ \text{N}$ at $120°$:

$$
\vec{F}_1 = \begin{pmatrix} 50 \cos 30° \\ 50 \sin 30° \end{pmatrix} \approx \begin{pmatrix} 43.30 \\ 25.00 \end{pmatrix} \qquad
\vec{F}_2 = \begin{pmatrix} 80 \cos 120° \\ 80 \sin 120° \end{pmatrix} \approx \begin{pmatrix} -40.00 \\ 69.28 \end{pmatrix}
$$

$$
\vec{F} \approx \begin{pmatrix} 3.30 \\ 94.28 \end{pmatrix} \qquad \lvert\vec{F}\rvert \approx 94.34\ \text{N} \qquad \varphi = \arctan\frac{94.28}{3.30} \approx 87.99°
$$

Because the two forces are perpendicular, you can also check with $\sqrt{50^2 + 80^2} \approx 94.34$.
:::

The same idea is behind the [polar form of complex numbers](/en/mathematics/algebra/complex-numbers/#polar-form) $z = r \cdot (\cos\varphi + j \sin\varphi)$: the complex plane is a plane with polar coordinates. In AC engineering, voltages and currents are represented as **phasors** with amplitude and phase angle.

## Curves in polar form

Giving $r$ as a function of the angle, $r = f(\varphi)$, describes a curve. Some curves are much simpler in polar coordinates than in Cartesian ones:

| Curve | Polar equation | Cartesian |
| ----- | -------------- | --------- |
| circle about the origin with radius $a$ | $r = a$ | $x^2 + y^2 = a^2$ |
| half-line at the angle $\alpha$ | $\varphi = \alpha$ | $y = \tan\alpha \cdot x$ with the appropriate sign of $x$ |
| Archimedean spiral | $r = a \cdot \varphi$ | no simple form |
| cardioid | $r = a\,(1 + \cos\varphi)$ | equation of degree 4 |

To plot it with GeoGebra or in a program, substitute the polar equation into the conversion formulas to obtain a [parametric representation](/en/mathematics/functions/functions/#parametric-representation) with the parameter $\varphi$:

$$
x(\varphi) = f(\varphi) \cdot \cos\varphi \qquad y(\varphi) = f(\varphi) \cdot \sin\varphi
$$

Applications: the groove of a vinyl record and the track of a CD are Archimedean spirals, the polar pattern of a cardioid microphone is a cardioid, and antenna patterns in data sheets are always drawn in polar coordinates.

## Coordinates in space

In space there are two extensions:

| System | Coordinates | Conversion | Application |
| ------ | ----------- | ---------- | ----------- |
| cylindrical coordinates | $(r; \varphi; z)$: polar coordinates in the $xy$-plane plus height | $x = r\cos\varphi$, $y = r\sin\varphi$, $z = z$ | turned parts, spiral staircases, coils |
| spherical coordinates | $(r; \vartheta; \varphi)$: distance, polar angle from the $z$-axis, azimuth | $x = r\sin\vartheta\cos\varphi$, $y = r\sin\vartheta\sin\varphi$, $z = r\cos\vartheta$ | positions on Earth, 3D camera control, antenna radiation |

Geographic coordinates are spherical coordinates with **latitude** (from $-90°$ to $90°$, measured from the equator instead of the North Pole) and **longitude** (from $-180°$ to $180°$, measured from the prime meridian through Greenwich). Vienna lies at about $48.2°$ north and $16.4°$ east.

## Further reading

- [Polar coordinates, Encyclopedia of Mathematics](https://encyclopediaofmath.org/wiki/Polar_coordinates)
- [GeoGebra (plotting curves in polar and parametric form)](https://www.geogebra.org/)
