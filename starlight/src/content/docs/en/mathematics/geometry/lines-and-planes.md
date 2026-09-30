---
title: Lines and Planes
description: Parametric and normal vector forms of lines in the plane and in space, planes in space, relative positions, intersections and distances.
sidebar:
  order: 4
---

## Lines in parametric form

A line is determined by a **point** $P$ and a direction vector $\vec{v}$. Every point $X$ on the line can be reached by starting at $P$ and moving a multiple of $\vec{v}$:

$$
g\colon X = P + t \cdot \vec{v} \qquad t \in \mathbb{R}
$$

The number $t$ is called the **parameter**. This representation works in the plane ($\mathbb{R}^2$) and in space ($\mathbb{R}^3$). If two points $A$ and $B$ are given, choose $\vec{v} = \overrightarrow{AB}$.

:::tip[Example]
The line through $A = (1 \mid 2 \mid 0)$ and $B = (3 \mid 1 \mid 4)$:

$$
g\colon X = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix} + t \cdot \begin{pmatrix} 2 \\ -1 \\ 4 \end{pmatrix}
$$

For $t = 0$ you get $A$, for $t = 1$ the point $B$, for $t = 0.5$ the midpoint of the segment $AB$.
:::

**Point test:** To check whether a point $Q$ lies on the line, substitute $Q$ for $X$. If $Q$ lies on $g$, every coordinate equation gives the same value for $t$.

In physics, the parametric form describes uniform motion: $P$ is the starting point, $\vec{v}$ the velocity and $t$ the time.

## Lines in the plane: normal vector form

In $\mathbb{R}^2$, a line can also be described with a **normal vector** $\vec{n}$ that is perpendicular to the line. For every point $X$ on the line, $\overrightarrow{PX}$ is perpendicular to $\vec{n}$:

$$
\vec{n} \cdot X = \vec{n} \cdot P \qquad\Longleftrightarrow\qquad a x + b y = c \quad\text{with } \vec{n} = \begin{pmatrix} a \\ b \end{pmatrix}
$$

:::tip[Example]
Line through $P = (2 \mid 1)$ with direction vector $\vec{v} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$. Swapping the components and changing one sign gives $\vec{n} = \begin{pmatrix} -1 \\ 3 \end{pmatrix}$:

$$
-x + 3y = -2 + 3 = 1
$$

Rearranged for $y$, this gives the familiar form $y = \frac{1}{3}x + \frac{1}{3}$ of a [linear function](/en/mathematics/functions/linear-functions/).
:::

## Relative position of two lines

| Position in $\mathbb{R}^2$ | Position in $\mathbb{R}^3$ | Direction vectors parallel? | Common points |
| -------------------------- | -------------------------- | --------------------------- | ------------- |
| identical                  | identical                  | yes                         | all           |
| parallel                   | parallel                   | yes                         | none          |
| intersecting               | intersecting               | no                          | exactly one   |
| does not exist             | skew                   | no                          | none          |

Skew lines only exist in space: they are neither parallel nor do they intersect, like two roads on different levels of an interchange.

To find the intersection, set the two lines equal (with **different** parameters $s$ and $t$) and solve the [system of equations](/en/mathematics/algebra/systems-of-linear-equations/).

:::tip[Example]
$$
g\colon X = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} + s \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} \qquad
h\colon X = \begin{pmatrix} 0 \\ 3 \\ 1 \end{pmatrix} + t \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}
$$

Setting them equal gives for the three coordinates:

$$
\begin{aligned}
1 + s &= t \\
s &= 3 - t \\
2 &= 1 + t
\end{aligned}
$$

The third equation gives $t = 1$, the second $s = 2$. Check in the first: $1 + 2 = 3 \ne 1$. The equations contradict each other, and the direction vectors are not parallel. The lines are **skew**.
:::

## Planes in space

A plane in $\mathbb{R}^3$ is determined by a point and two non-parallel direction vectors (**parametric form**):

$$
\varepsilon\colon X = P + s \cdot \vec{u} + t \cdot \vec{v}
$$

The **normal vector form** is used more often. The normal vector is obtained with the [cross product](/en/mathematics/geometry/vectors/#cross-product) $\vec{n} = \vec{u} \times \vec{v}$:

$$
\vec{n} \cdot X = \vec{n} \cdot P \qquad\Longleftrightarrow\qquad a x + b y + c z = d
$$

:::caution
In $\mathbb{R}^3$, an equation $ax + by + cz = d$ describes a **plane**, not a line. A line in space can only be given in parametric form (or as the intersection of two planes).
:::

:::tip[Example]
The plane through $A = (1 \mid 0 \mid 0)$, $B = (0 \mid 2 \mid 0)$ and $C = (0 \mid 0 \mid 3)$ has the normal vector $\vec{n} = \overrightarrow{AB} \times \overrightarrow{AC} = \begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}$. Substituting $A$:

$$
6x + 3y + 2z = 6
$$

Check with $B$: $6 \cdot 0 + 3 \cdot 2 + 2 \cdot 0 = 6$ ✓
:::

### Line and plane

A line can lie in a plane, be parallel to it or intersect it in exactly one point. The **intersection point** is found by substituting the coordinates of the line into the equation of the plane and solving for $t$.

If the direction vector of the line is perpendicular to the normal vector of the plane ($\vec{v} \cdot \vec{n} = 0$), the line is parallel to the plane or lies in it.

## Distances

**Distance from a point to a plane (or from a point to a line in $\mathbb{R}^2$):** With the Hesse normal form, for the plane $ax + by + cz = d$ and the point $Q = (q_x \mid q_y \mid q_z)$:

$$
d(Q, \varepsilon) = \frac{\lvert a q_x + b q_y + c q_z - d \rvert}{\sqrt{a^2 + b^2 + c^2}}
$$

In the plane, the $z$ part is omitted.

:::tip[Example]
Distance of the origin from the plane $6x + 3y + 2z = 6$:

$$
d = \frac{\lvert 0 - 6 \rvert}{\sqrt{36 + 9 + 4}} = \frac{6}{7} \approx 0.857
$$
:::

**Distance from a point to a line in space:** With the cross product, for $g\colon X = P + t\vec{v}$

$$
d(Q, g) = \frac{\lvert \overrightarrow{PQ} \times \vec{v} \rvert}{\lvert \vec{v} \rvert}
$$

This corresponds to the height of the parallelogram spanned by $\overrightarrow{PQ}$ and $\vec{v}$.
