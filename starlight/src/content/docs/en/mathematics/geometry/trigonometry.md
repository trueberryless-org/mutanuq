---
title: Trigonometry
description: Sine, cosine and tangent in the right-angled triangle, the unit circle, the law of sines, the law of cosines and the area formula for general triangles.
sidebar:
  order: 2
---

**Trigonometry** (triangle measurement) relates the sides and angles of a triangle. It is used to calculate lengths that cannot be measured directly, such as the height of a tower, the gradient of a road or the forces in a truss.

## Right-angled triangle

With respect to an acute angle $\alpha$ of a right-angled triangle, we distinguish the opposite side (opposite the angle), the adjacent side (next to the angle) and the hypotenuse (opposite the right angle).

$$
\sin\alpha = \frac{\text{opposite}}{\text{hypotenuse}} \qquad
\cos\alpha = \frac{\text{adjacent}}{\text{hypotenuse}} \qquad
\tan\alpha = \frac{\text{opposite}}{\text{adjacent}}
$$

These ratios only depend on the angle, not on the size of the triangle, because all right-angled triangles with the same angle $\alpha$ are [similar](/en/mathematics/geometry/elementary-geometry/#similarity-and-intercept-theorems).

If a ratio of sides is known, the angle is obtained with the inverse functions $\arcsin$, $\arccos$ and $\arctan$ (on a calculator $\sin^{-1}$, $\cos^{-1}$, $\tan^{-1}$).

:::caution
Make sure the calculator is in the right angle mode: **DEG** for degrees, RAD for radians.
:::

### Important relationships

$$
\tan\alpha = \frac{\sin\alpha}{\cos\alpha} \qquad \sin^2\alpha + \cos^2\alpha = 1 \qquad \sin\alpha = \cos(90° - \alpha)
$$

The second formula is the Pythagorean theorem on the unit circle.

### Special values

| $\alpha$      | $0°$ | $30°$                | $45°$                  | $60°$                  | $90°$       |
| ------------- | ---- | -------------------- | ---------------------- | ---------------------- | ----------- |
| $\sin\alpha$  | $0$  | $\frac{1}{2}$        | $\frac{\sqrt{2}}{2}$   | $\frac{\sqrt{3}}{2}$   | $1$         |
| $\cos\alpha$  | $1$  | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$   | $\frac{1}{2}$          | $0$         |
| $\tan\alpha$  | $0$  | $\frac{\sqrt{3}}{3}$ | $1$                    | $\sqrt{3}$             | undefined   |

:::tip[Example: Gradient]
A road sign shows a 12 % gradient. This means that the road rises by 12 m over a horizontal distance of 100 m. The angle of inclination is

$$
\tan\alpha = 0.12 \quad\Rightarrow\quad \alpha = \arctan 0.12 \approx 6.84°
$$
:::

:::tip[Example: Height of a tower]
From a point 50 m away from the foot of a tower, the top of the tower is seen at an **angle of elevation** of $38°$. The eye level is 1.6 m.

$$
h = 50 \cdot \tan 38° + 1.6 \approx 39.06 + 1.6 \approx 40.7\ \text{m}
$$
:::

## Unit circle

To define sine and cosine for angles larger than $90°$, consider a circle with radius $1$ around the origin. The point $P$ on the circle whose radius forms the angle $\alpha$ with the positive $x$-axis has the coordinates

$$
P = (\cos\alpha \mid \sin\alpha)
$$

This gives the signs in the four quadrants:

| Quadrant | Angle          | $\sin$ | $\cos$ | $\tan$ |
| -------- | -------------- | ------ | ------ | ------ |
| I        | $0°$ – $90°$   | $+$    | $+$    | $+$    |
| II       | $90°$ – $180°$ | $+$    | $-$    | $-$    |
| III      | $180°$ – $270°$| $-$    | $-$    | $+$    |
| IV       | $270°$ – $360°$| $-$    | $+$    | $-$    |

Also, $\sin(180° - \alpha) = \sin\alpha$ and $\cos(-\alpha) = \cos\alpha$. That is why an equation like $\sin\alpha = 0.5$ has two solutions between $0°$ and $360°$: $30°$ and $150°$.

The graphs of sine and cosine as functions of the angle are covered under [trigonometric functions](/en/mathematics/functions/trigonometric-functions/).

## General triangle

In an arbitrary triangle, sine and cosine cannot be used directly as ratios of sides. Instead, the law of sines and the law of cosines apply.

### Law of sines

$$
\frac{a}{\sin\alpha} = \frac{b}{\sin\beta} = \frac{c}{\sin\gamma} = 2r
$$

Here $r$ is the circumradius. The law of sines is used when **a side and its opposite angle** are known, i.e. in the cases:

- two angles and one side (ASA, AAS),
- two sides and the angle opposite one of them (SSA).

:::caution[Ambiguous case]
In the SSA case, there can be two solutions, because $\sin\beta = \sin(180° - \beta)$. If the given angle is opposite the **longer** of the two sides, the solution is unique.
:::

### Law of cosines

$$
\begin{aligned}
a^2 &= b^2 + c^2 - 2bc \cos\alpha \\
b^2 &= a^2 + c^2 - 2ac \cos\beta \\
c^2 &= a^2 + b^2 - 2ab \cos\gamma
\end{aligned}
$$

The law of cosines is a generalisation of the Pythagorean theorem: for $\gamma = 90°$, $\cos\gamma = 0$ and $c^2 = a^2 + b^2$ remains. It is used for

- two sides and the included angle (SAS),
- three sides (SSS).

### Area formula

$$
A = \frac{1}{2}\, a b \sin\gamma = \frac{1}{2}\, b c \sin\alpha = \frac{1}{2}\, a c \sin\beta
$$

:::tip[Example: Surveying]
The distance between two points $A$ and $B$ on opposite sides of a lake is to be determined. From a point $C$, $\overline{CA} = b = 420\ \text{m}$, $\overline{CB} = a = 350\ \text{m}$ and the angle $\gamma = 72°$ are measured.

Law of cosines (case SAS):

$$
c^2 = 350^2 + 420^2 - 2 \cdot 350 \cdot 420 \cdot \cos 72° \approx 298\,900 - 90\,852 = 208\,048 \quad\Rightarrow\quad c \approx 456\ \text{m}
$$

The law of sines gives the angle at $A$:

$$
\sin\alpha = \frac{a \sin\gamma}{c} = \frac{350 \cdot \sin 72°}{456} \approx 0.730 \quad\Rightarrow\quad \alpha \approx 46.9°
$$

Since $a$ is not the longest side, $\alpha$ is acute and the solution is unique. Then $\beta = 180° - 72° - 46.9° = 61.1°$.
:::

### Which law when?

| Given                                       | Case | Procedure                                        |
| ------------------------------------------- | ---- | ------------------------------------------------ |
| three sides                                 | SSS  | law of cosines for one angle, then law of sines  |
| two sides and the included angle            | SAS  | law of cosines for the third side, then law of sines |
| two sides and an opposite angle             | SSA  | law of sines (check for ambiguity)               |
| one side and two angles                     | ASA  | third angle from the angle sum, then law of sines |

:::tip[Tip]
If possible, calculate angles with the law of cosines, because $\arccos$ is unique in the range $0°$ to $180°$. With the law of sines, you have to check whether the angle is acute or obtuse.
:::
