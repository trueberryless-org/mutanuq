---
title: Vectors
description: Vectors in the plane and in space – representation, position vector, magnitude, operations, dot product, angles, orthogonality and cross product.
sidebar:
  order: 3
---

## What is a vector?

A **vector** describes a displacement with a certain **length** and **direction**. It is drawn as an arrow. All arrows with the same length and direction represent the same vector, no matter where they start. In physics, quantities such as force, velocity or electric field strength are described by vectors – unlike **scalars** such as mass or temperature, which only have a numerical value.

In a coordinate system, a vector is given by its **components**:

$$
\vec{a} = \begin{pmatrix} a_x \\ a_y \end{pmatrix} \in \mathbb{R}^2 \qquad
\vec{a} = \begin{pmatrix} a_x \\ a_y \\ a_z \end{pmatrix} \in \mathbb{R}^3
$$

### Vector between two points and position vector

The vector from $A$ to $B$ follows the rule **"tip minus tail"**:

$$
\overrightarrow{AB} = B - A = \begin{pmatrix} b_x - a_x \\ b_y - a_y \end{pmatrix}
$$

The **position vector** of a point $P$ is the vector from the origin $O$ to $P$. It has the same components as the coordinates of the point.

:::tip[Example]
$A = (1 \mid 2)$, $B = (4 \mid 6)$: $\quad \overrightarrow{AB} = \begin{pmatrix} 4 - 1 \\ 6 - 2 \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$
:::

## Magnitude

The **magnitude** (length) of a vector follows from the Pythagorean theorem:

$$
\lvert \vec{a} \rvert = \sqrt{a_x^2 + a_y^2} \qquad \lvert \vec{a} \rvert = \sqrt{a_x^2 + a_y^2 + a_z^2}
$$

The distance between two points $A$ and $B$ is $\lvert \overrightarrow{AB} \rvert$. In the example above, $\lvert \overrightarrow{AB} \rvert = \sqrt{9 + 16} = 5$.

A vector with length $1$ is called a **unit vector**. The unit vector in the direction of $\vec{a}$ is obtained by dividing $\vec{a}$ by its magnitude:

$$
\vec{a}_0 = \frac{1}{\lvert \vec{a} \rvert} \cdot \vec{a}
$$

## Operations

### Addition and subtraction

Vectors are added and subtracted **component by component**. Geometrically, the arrows are placed tip to tail. The result is called the **resultant**.

$$
\begin{pmatrix} 1 \\ 3 \end{pmatrix} + \begin{pmatrix} 4 \\ -1 \end{pmatrix} = \begin{pmatrix} 5 \\ 2 \end{pmatrix}
$$

### Scalar multiplication

If a vector is multiplied by a number $k$, every component is multiplied by $k$. The vector is stretched or compressed by the factor $\lvert k \rvert$; if $k < 0$, its direction is reversed.

$$
3 \cdot \begin{pmatrix} 2 \\ -1 \end{pmatrix} = \begin{pmatrix} 6 \\ -3 \end{pmatrix}
$$

Two vectors are **parallel** (collinear) if one is a multiple of the other: $\vec{b} = k \cdot \vec{a}$.

### Midpoint of a line segment

$$
M_{AB} = \frac{1}{2}(A + B)
$$

:::tip[Example: Forces]
The forces $\vec{F}_1 = \begin{pmatrix} 30 \\ 40 \end{pmatrix}\ \text{N}$ and $\vec{F}_2 = \begin{pmatrix} 50 \\ -10 \end{pmatrix}\ \text{N}$ act on a point. The resultant force is

$$
\vec{F} = \vec{F}_1 + \vec{F}_2 = \begin{pmatrix} 80 \\ 30 \end{pmatrix}\ \text{N} \qquad \lvert \vec{F} \rvert = \sqrt{80^2 + 30^2} \approx 85.4\ \text{N}
$$
:::

## Dot product

The **dot product** (scalar product) of two vectors is a number (a scalar):

$$
\vec{a} \cdot \vec{b} = a_x b_x + a_y b_y \;(+\; a_z b_z)
$$

It is related to the angle $\varphi$ between the vectors:

$$
\vec{a} \cdot \vec{b} = \lvert \vec{a} \rvert \cdot \lvert \vec{b} \rvert \cdot \cos\varphi
\qquad\Rightarrow\qquad
\cos\varphi = \frac{\vec{a} \cdot \vec{b}}{\lvert \vec{a} \rvert \cdot \lvert \vec{b} \rvert}
$$

### Orthogonality

Two vectors are **perpendicular** (orthogonal) exactly when their dot product is $0$:

$$
\vec{a} \perp \vec{b} \quad\Longleftrightarrow\quad \vec{a} \cdot \vec{b} = 0
$$

In the plane, a perpendicular vector is obtained by swapping the components and changing the sign of one of them: $\begin{pmatrix} -a_y \\ a_x \end{pmatrix}$ is perpendicular to $\begin{pmatrix} a_x \\ a_y \end{pmatrix}$.

:::tip[Example]
What is the angle between $\vec{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ and $\vec{b} = \begin{pmatrix} 5 \\ -2 \end{pmatrix}$?

$$
\cos\varphi = \frac{3 \cdot 5 + 4 \cdot (-2)}{5 \cdot \sqrt{29}} = \frac{7}{5\sqrt{29}} \approx 0.260 \quad\Rightarrow\quad \varphi \approx 74.9°
$$
:::

:::note[Application: Work]
In physics, the work done by a force $\vec{F}$ along a displacement $\vec{s}$ is the dot product $W = \vec{F} \cdot \vec{s}$. Only the component of the force in the direction of motion does work.
:::

## Cross product

The **cross product** (vector product) is only defined in $\mathbb{R}^3$. Its result is a **vector**:

$$
\vec{a} \times \vec{b} = \begin{pmatrix} a_y b_z - a_z b_y \\ a_z b_x - a_x b_z \\ a_x b_y - a_y b_x \end{pmatrix}
$$

Properties:

- $\vec{a} \times \vec{b}$ is **perpendicular** to both $\vec{a}$ and $\vec{b}$.
- Its magnitude is the **area of the parallelogram** spanned by $\vec{a}$ and $\vec{b}$: $\lvert \vec{a} \times \vec{b} \rvert = \lvert \vec{a} \rvert \lvert \vec{b} \rvert \sin\varphi$. The triangle has half this area.
- $\vec{a}$, $\vec{b}$ and $\vec{a} \times \vec{b}$ form a **right-handed system** (right-hand rule).
- It is not commutative: $\vec{b} \times \vec{a} = -(\vec{a} \times \vec{b})$.
- If $\vec{a}$ and $\vec{b}$ are parallel, $\vec{a} \times \vec{b} = \vec{0}$.

:::tip[Memory aid]
Write both vectors twice below each other, cross out the first and last rows and multiply "crosswise":

$$
\begin{array}{ccccc}
a_x & & b_x \\
a_y & \times & b_y & \rightarrow & a_y b_z - a_z b_y \\
a_z & \times & b_z & \rightarrow & a_z b_x - a_x b_z \\
a_x & \times & b_x & \rightarrow & a_x b_y - a_y b_x \\
a_y & & b_y
\end{array}
$$
:::

:::tip[Example: Area of a triangle]
$A = (1 \mid 0 \mid 0)$, $B = (0 \mid 2 \mid 0)$, $C = (0 \mid 0 \mid 3)$:

$$
\overrightarrow{AB} \times \overrightarrow{AC} = \begin{pmatrix} -1 \\ 2 \\ 0 \end{pmatrix} \times \begin{pmatrix} -1 \\ 0 \\ 3 \end{pmatrix} = \begin{pmatrix} 2 \cdot 3 - 0 \cdot 0 \\ 0 \cdot (-1) - (-1) \cdot 3 \\ (-1) \cdot 0 - 2 \cdot (-1) \end{pmatrix} = \begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}
$$

$$
A_\triangle = \frac{1}{2} \sqrt{36 + 9 + 4} = \frac{7}{2} = 3.5
$$
:::

:::note[Application: Torque and Lorentz force]
Torque is $\vec{M} = \vec{r} \times \vec{F}$, the force on a moving charge in a magnetic field is $\vec{F} = q \cdot (\vec{v} \times \vec{B})$.
:::

Vectors can also be used to describe [lines and planes](/en/mathematics/geometry/lines-and-planes/).
