---
title: Applications of Integration
description: Areas under and between curves, volumes of solids of revolution, arithmetic and quadratic mean, RMS value as well as distance, work and charge.
sidebar:
  order: 6
---

## Area between a graph and the x-axis

The [definite integral](/en/mathematics/analysis/integral-calculus/#definite-integral) gives a **signed** area: areas below the $x$-axis count as negative. To calculate the actual area:

1. Find the zeros of $f$ in the interval.
2. Split the integral into partial integrals at the zeros.
3. Add up the **absolute values** of the partial integrals.

:::tip[Example]
What is the area between $f(x) = x^2 - 4$ and the $x$-axis on the interval $[0; 3]$?

Zero in the interval: $x = 2$.

$$
\int_0^2 (x^2 - 4)\,\mathrm{d}x = \left[\frac{x^3}{3} - 4x\right]_0^2 = \frac{8}{3} - 8 = -\frac{16}{3}
$$

$$
\int_2^3 (x^2 - 4)\,\mathrm{d}x = \left(9 - 12\right) - \left(\frac{8}{3} - 8\right) = -3 + \frac{16}{3} = \frac{7}{3}
$$

$$
A = \frac{16}{3} + \frac{7}{3} = \frac{23}{3} \approx 7.67
$$

The integral over the whole interval would be $-\frac{16}{3} + \frac{7}{3} = -3$ – the areas would partly cancel out.
:::

## Area between two curves

The area between the graphs of $f$ and $g$ is the integral of the **difference** "upper minus lower function":

$$
A = \int_a^b \big(f(x) - g(x)\big)\,\mathrm{d}x \qquad \text{if } f(x) \ge g(x) \text{ on } [a; b]
$$

The limits of integration are often the **intersections** of the two graphs ($f(x) = g(x)$). If the graphs intersect within the interval, split it into partial areas as above. Where the graphs lie does not matter – areas below the $x$-axis are also calculated correctly this way.

:::tip[Example]
Area between $f(x) = x + 2$ and $g(x) = x^2$:

Intersections: $x^2 = x + 2 \Rightarrow x^2 - x - 2 = 0 \Rightarrow x_1 = -1$, $x_2 = 2$. In between, $f$ lies above $g$ (e.g. $f(0) = 2 > g(0) = 0$).

$$
A = \int_{-1}^{2} \left(x + 2 - x^2\right)\mathrm{d}x = \left[\frac{x^2}{2} + 2x - \frac{x^3}{3}\right]_{-1}^{2} = \left(2 + 4 - \frac{8}{3}\right) - \left(\frac{1}{2} - 2 + \frac{1}{3}\right) = \frac{10}{3} + \frac{7}{6} = 4.5
$$
:::

## Volumes of solids of revolution

If the graph of $f$ on the interval $[a; b]$ rotates about the **$x$-axis**, a **solid of revolution** is created. Think of it as made up of thin circular discs with radius $f(x)$ and thickness $\mathrm{d}x$:

$$
V_x = \pi \int_a^b \big(f(x)\big)^2\,\mathrm{d}x
$$

For rotation about the **$y$-axis**, solve the function for $x$ and integrate with respect to $y$:

$$
V_y = \pi \int_c^d x^2\,\mathrm{d}y
$$

:::tip[Example: Cone]
A cone with radius $r$ and height $h$ is created when the line $f(x) = \frac{r}{h}x$ on the interval $[0; h]$ rotates about the $x$-axis:

$$
V = \pi \int_0^h \frac{r^2}{h^2}x^2\,\mathrm{d}x = \pi \frac{r^2}{h^2} \cdot \frac{h^3}{3} = \frac{r^2 \pi h}{3}
$$

This is the familiar [volume formula](/en/mathematics/geometry/elementary-geometry/#solids) of a cone.
:::

:::tip[Example: Parabolic reflector]
A headlight reflector is created by rotating $y = \frac{x^2}{8}$ (in cm) about the $y$-axis up to a height of $y = 2$ cm. With $x^2 = 8y$:

$$
V = \pi \int_0^2 8y\,\mathrm{d}y = \pi \Big[4y^2\Big]_0^2 = 16\pi \approx 50.3\ \text{cm}^3
$$
:::

## Mean values

### Arithmetic mean

The **arithmetic mean** of a function on the interval $[a; b]$ is the height of a rectangle with the same area:

$$
\bar{f} = \frac{1}{b - a} \int_a^b f(x)\,\mathrm{d}x
$$

In electrical engineering, the arithmetic mean of a periodic signal over one period is called the **DC value**. For a pure sine voltage, it is $0$.

:::tip[Example: Rectified mean value]
The mean value of a rectified sine voltage $\lvert \hat{u} \sin(\omega t) \rvert$ over half a period ($\omega t$ from $0$ to $\pi$) is

$$
\bar{u} = \frac{1}{\pi} \int_0^{\pi} \hat{u} \sin x\,\mathrm{d}x = \frac{\hat{u}}{\pi} \Big[-\cos x\Big]_0^{\pi} = \frac{2\hat{u}}{\pi} \approx 0.637\,\hat{u}
$$
:::

### Quadratic mean and RMS value

The **quadratic mean** is

$$
f_{\text{eff}} = \sqrt{\frac{1}{b - a} \int_a^b \big(f(x)\big)^2\,\mathrm{d}x}
$$

In electrical engineering, it is called the **RMS value** (root mean square, in German _Effektivwert_). It is the DC voltage that produces the same power in a resistor as the AC voltage.

:::tip[Example: RMS value of a sine voltage]
$$
U_{\text{eff}} = \sqrt{\frac{1}{2\pi} \int_0^{2\pi} \hat{u}^2 \sin^2 x\,\mathrm{d}x} = \sqrt{\frac{\hat{u}^2}{2\pi} \cdot \pi} = \frac{\hat{u}}{\sqrt{2}}
$$

Here $\int_0^{2\pi} \sin^2 x\,\mathrm{d}x = \pi$ was used, which follows from $\sin^2 x = \frac{1 - \cos(2x)}{2}$. That is why the mains voltage with an RMS value of $230$ V has a peak value of $230 \cdot \sqrt{2} \approx 325$ V.
:::

## Further applications

### Distance, velocity, acceleration

$$
v(t) = v_0 + \int_0^t a(\tau)\,\mathrm{d}\tau \qquad s(t) = s_0 + \int_0^t v(\tau)\,\mathrm{d}\tau
$$

:::tip[Example: Braking]
A train brakes from $v_0 = 30$ m/s with a constant deceleration of $a = -1.5\ \text{m/s}^2$. It stops after $v(t) = 30 - 1.5t = 0 \Rightarrow t = 20$ s. The braking distance is

$$
s = \int_0^{20} (30 - 1.5t)\,\mathrm{d}t = \Big[30t - 0.75t^2\Big]_0^{20} = 600 - 300 = 300\ \text{m}
$$
:::

### Work

If a force is not constant along the path, the work is the integral of the force over the path:

$$
W = \int_{s_1}^{s_2} F(s)\,\mathrm{d}s
$$

:::tip[Example: Spring]
A spring with the spring constant $D = 200$ N/m is stretched by $10$ cm. According to Hooke's law, $F(s) = D \cdot s$:

$$
W = \int_0^{0.1} 200s\,\mathrm{d}s = \Big[100s^2\Big]_0^{0.1} = 1\ \text{J}
$$
:::

### Charge and energy

The charge that flows in a period of time is $Q = \int_{t_1}^{t_2} i(t)\,\mathrm{d}t$, the energy converted is $W = \int_{t_1}^{t_2} P(t)\,\mathrm{d}t$. That is why an electricity meter measures energy in kilowatt hours – power times time.
