---
title: Elementary Geometry
description: Angles, triangles, similarity, the Pythagorean theorem, quadrilaterals, circles as well as surface area and volume of elementary solids.
sidebar:
  order: 1
---

## Angles

Angles are measured in **degrees** ($360°$ for a full turn) or in **radians**. A radian measure is the length of the arc on the unit circle, so a full turn corresponds to $2\pi$:

$$
\alpha_{\text{radians}} = \frac{\pi}{180°} \cdot \alpha_{\text{degrees}} \qquad 180° \mathrel{\hat{=}} \pi \qquad 90° \mathrel{\hat{=}} \frac{\pi}{2}
$$

Depending on their size, angles are acute ($< 90°$), right ($= 90°$), obtuse ($> 90°$), straight ($= 180°$) or reflex ($> 180°$).

Where two lines intersect, **vertical angles** are equal and **adjacent angles** add up to $180°$. If a pair of parallel lines is crossed by a third line, **corresponding angles** and **alternate angles** are equal.

## Triangles

In every triangle:

- The **angle sum** is $\alpha + \beta + \gamma = 180°$.
- **Triangle inequality:** Every side is shorter than the sum of the other two.
- The largest angle is opposite the longest side.

The vertices are usually labelled $A$, $B$, $C$ anticlockwise, the opposite sides $a$, $b$, $c$ and the angles at the vertices $\alpha$, $\beta$, $\gamma$.

| Quantity         | Formula                                              |
| ---------------- | ---------------------------------------------------- |
| Perimeter        | $u = a + b + c$                                      |
| Area             | $A = \dfrac{c \cdot h_c}{2}$ (side times corresponding height divided by 2) |
| with two sides and the included angle | $A = \dfrac{1}{2}\, a b \sin\gamma$ |
| Heron's formula  | $A = \sqrt{s(s - a)(s - b)(s - c)}$ with $s = \dfrac{a + b + c}{2}$ |

### Special triangles

- **Isosceles triangle:** two sides of equal length (legs), the two base angles are equal.
- **Equilateral triangle:** all sides equal, all angles $60°$. Height $h = \frac{a}{2}\sqrt{3}$, area $A = \frac{a^2}{4}\sqrt{3}$.
- **Right-angled triangle:** one angle is $90°$. The sides next to the right angle are called **legs** (catheti), the longest side opposite it is the **hypotenuse**.

### Triangle centres

| Point            | Intersection of the …       | Property                                          |
| ---------------- | --------------------------- | ------------------------------------------------- |
| Circumcentre     | perpendicular bisectors     | equally far from all vertices                     |
| Incentre         | angle bisectors             | equally far from all sides                        |
| Centroid         | medians                     | divides the medians in the ratio $2 : 1$          |
| Orthocentre      | altitudes                   |                                                   |

## Similarity and intercept theorems

Two figures are **similar** if all their angles are equal. Then all corresponding sides are in the same ratio, the **scale factor** $k$. Areas change with $k^2$, volumes with $k^3$.

Two triangles are already similar if **two angles** are equal.

**Intercept theorems:** If two rays starting at a point $S$ are crossed by two parallel lines:

$$
\frac{\overline{SA}}{\overline{SA'}} = \frac{\overline{SB}}{\overline{SB'}} = \frac{\overline{AB}}{\overline{A'B'}}
$$

:::tip[Example: Height of a tree]
A person who is 1.8 m tall casts a 2.4 m long shadow, a tree at the same time a 16 m long shadow. Since the sun's rays are parallel, the triangles are similar:

$$
\frac{h}{16} = \frac{1.8}{2.4} \quad\Rightarrow\quad h = 12\ \text{m}
$$
:::

## Pythagorean theorem

In a right-angled triangle with the legs $a$, $b$ and the hypotenuse $c$:

$$
a^2 + b^2 = c^2
$$

Conversely, a triangle with $a^2 + b^2 = c^2$ is right-angled. Integer solutions such as $(3, 4, 5)$ or $(5, 12, 13)$ are called **Pythagorean triples**.

:::tip[Example]
A 16 : 9 screen has a diagonal of 27 inches. With width $16k$ and height $9k$:

$$
(16k)^2 + (9k)^2 = 27^2 \;\Rightarrow\; 337k^2 = 729 \;\Rightarrow\; k \approx 1.471
$$

So the screen is about $23.5$ inches wide and $13.2$ inches high.
:::

**Altitude theorem and leg theorem (Euclid's theorems):** If the altitude $h$ divides the hypotenuse into the segments $p$ (below $a$) and $q$ (below $b$), then $h^2 = p \cdot q$, $a^2 = c \cdot p$ and $b^2 = c \cdot q$.

## Quadrilaterals

| Quadrilateral  | Properties                                              | Area                            | Perimeter           |
| -------------- | ------------------------------------------------------- | ------------------------------- | ------------------- |
| Square         | 4 equal sides, 4 right angles                            | $a^2$                           | $4a$                |
| Rectangle      | opposite sides equal, 4 right angles                     | $a \cdot b$                     | $2a + 2b$           |
| Parallelogram  | opposite sides parallel and equal                        | $a \cdot h_a$                   | $2a + 2b$           |
| Rhombus        | 4 equal sides, diagonals perpendicular                   | $\dfrac{e \cdot f}{2}$          | $4a$                |
| Trapezoid      | one pair of parallel sides $a$ and $c$                   | $\dfrac{(a + c) \cdot h}{2}$    | $a + b + c + d$     |
| Kite           | two pairs of equal adjacent sides                        | $\dfrac{e \cdot f}{2}$          | $2a + 2b$           |

The angle sum in every quadrilateral is $360°$. The diagonal of a rectangle is $d = \sqrt{a^2 + b^2}$, that of a square $d = a\sqrt{2}$.

## Circle

| Quantity                               | Formula                                      |
| -------------------------------------- | -------------------------------------------- |
| Circumference                          | $u = 2 r \pi = d \pi$                        |
| Area                                   | $A = r^2 \pi = \dfrac{d^2 \pi}{4}$           |
| Arc for the angle $\alpha$             | $b = \dfrac{r \pi \alpha}{180°} = r \cdot \alpha_{\text{radians}}$ |
| Sector                                 | $A = \dfrac{r^2 \pi \alpha}{360°} = \dfrac{b \cdot r}{2}$ |
| Annulus                                | $A = (R^2 - r^2) \pi$                        |

The number $\pi \approx 3.14159$ is the ratio of the circumference to the diameter of any circle.

**Thales' theorem:** If the point $C$ lies on a semicircle over the segment $AB$, the angle at $C$ is a right angle.

## Solids

| Solid           | Volume                                | Surface area                                   |
| --------------- | ------------------------------------- | ---------------------------------------------- |
| Cube            | $V = a^3$                             | $O = 6a^2$                                     |
| Cuboid          | $V = a \cdot b \cdot c$               | $O = 2(ab + ac + bc)$                          |
| Prism           | $V = G \cdot h$                       | $O = 2G + M$                                   |
| Cylinder        | $V = r^2 \pi h$                       | $O = 2 r^2 \pi + 2 r \pi h$                    |
| Pyramid         | $V = \dfrac{G \cdot h}{3}$            | $O = G + M$                                    |
| Cone            | $V = \dfrac{r^2 \pi h}{3}$            | $O = r^2 \pi + r \pi s$ with $s = \sqrt{r^2 + h^2}$ |
| Sphere          | $V = \dfrac{4}{3} r^3 \pi$            | $O = 4 r^2 \pi$                                |

Here $G$ is the base area, $M$ the lateral surface and $s$ the slant height. Pyramids and cones have a third of the volume of the prism or cylinder with the same base area and height.

:::tip[Example]
How many litres does a cylindrical tank with a diameter of 1.2 m and a height of 2 m hold?

$$
V = 0.6^2 \cdot \pi \cdot 2 \approx 2.262\ \text{m}^3 = 2262\ \text{L}
$$
:::

In general, volumes of solids with curved surfaces are calculated with [integral calculus](/en/mathematics/analysis/applications-of-integration/#volumes-of-solids-of-revolution).
