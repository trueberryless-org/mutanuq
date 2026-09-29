---
title: Trigonometric Functions
description: The sine, cosine and tangent functions in radians, amplitude, period, frequency and phase shift of the general sine function, and trigonometric equations.
sidebar:
  order: 6
---

## Sine and cosine functions

On the [unit circle](/en/mathematics/geometry/trigonometry/#unit-circle), $\sin x$ and $\cos x$ are defined for any angle. If they are plotted as functions of the angle $x$ **in radians**, you get the sine and cosine curves.

| Property          | $f(x) = \sin x$                          | $f(x) = \cos x$                         |
| ----------------- | ---------------------------------------- | --------------------------------------- |
| Domain            | $\mathbb{R}$                             | $\mathbb{R}$                            |
| Range             | $[-1; 1]$                                | $[-1; 1]$                               |
| Period            | $2\pi$                                   | $2\pi$                                  |
| Zeros             | $0, \pm\pi, \pm 2\pi, \ldots$ ($k\pi$)   | $\pm\frac{\pi}{2}, \pm\frac{3\pi}{2}, \ldots$ |
| Maxima            | at $\frac{\pi}{2} + 2k\pi$               | at $2k\pi$                              |
| Symmetry          | odd: $\sin(-x) = -\sin x$                | even: $\cos(-x) = \cos x$               |

The cosine curve is the sine curve shifted $\frac{\pi}{2}$ to the left: $\cos x = \sin\left(x + \frac{\pi}{2}\right)$.

### Tangent function

$$
\tan x = \frac{\sin x}{\cos x}
$$

The tangent function has the period $\pi$ and is not defined at the zeros of the cosine ($x = \frac{\pi}{2} + k\pi$). There it has **poles** with vertical asymptotes. Its range is $\mathbb{R}$.

## The general sine function

Oscillations and alternating quantities are described with the **general sine function**:

$$
f(t) = A \cdot \sin(\omega t + \varphi) + d
$$

| Parameter | Name                              | Effect on the graph                                 |
| --------- | --------------------------------- | --------------------------------------------------- |
| $A$       | **amplitude**                     | vertical stretch, maximum deflection                |
| $\omega$  | **angular frequency**             | horizontal stretch/compression                      |
| $\varphi$ | **phase angle**                   | horizontal shift by $-\frac{\varphi}{\omega}$       |
| $d$       | DC component (offset)             | vertical shift                                      |

The angular frequency, the **frequency** $f$ and the **period** $T$ are related by:

$$
\omega = 2\pi f = \frac{2\pi}{T} \qquad f = \frac{1}{T}
$$

:::tip[Example: Mains voltage]
The mains voltage in Austria has an RMS value of 230 V and a frequency of 50 Hz. The peak value (the amplitude) is $\hat{u} = 230\ \text{V} \cdot \sqrt{2} \approx 325\ \text{V}$:

$$
u(t) = 325\ \text{V} \cdot \sin(2\pi \cdot 50\ \text{Hz} \cdot t) = 325\ \text{V} \cdot \sin(314.16\ \text{s}^{-1} \cdot t)
$$

The period is $T = \frac{1}{50\ \text{Hz}} = 20\ \text{ms}$.
:::

:::tip[Example: Reading off parameters]
An oscillation has its maximum $5$ at $t = 1$ and its minimum $-1$ at $t = 3$.

- DC component: $d = \frac{5 + (-1)}{2} = 2$
- Amplitude: $A = \frac{5 - (-1)}{2} = 3$
- Half a period passes from maximum to minimum, so $T = 4$ and $\omega = \frac{2\pi}{4} = \frac{\pi}{2}$.
- The maximum of the sine function is where $\omega t + \varphi = \frac{\pi}{2}$: $\frac{\pi}{2} \cdot 1 + \varphi = \frac{\pi}{2} \Rightarrow \varphi = 0$.

$$
f(t) = 3 \sin\left(\frac{\pi}{2}t\right) + 2
$$
:::

### Phase shift

Two oscillations with the same frequency are **phase-shifted** if their phase angles differ. In an AC circuit with an inductor, the current lags the voltage; with a capacitor, it leads. Such phasors are easiest to calculate with [complex numbers](/en/mathematics/algebra/complex-numbers/#application-ac-circuits).

The superposition of two sine oscillations with the same frequency is again a sine oscillation with that frequency. Superimposing oscillations with different frequencies creates more complicated periodic signals – conversely, every periodic signal can be represented as a sum of sine oscillations (**Fourier analysis**).

## Important formulas

$$
\sin^2 x + \cos^2 x = 1
$$

**Angle addition formulas:**

$$
\begin{aligned}
\sin(\alpha \pm \beta) &= \sin\alpha \cos\beta \pm \cos\alpha \sin\beta \\
\cos(\alpha \pm \beta) &= \cos\alpha \cos\beta \mp \sin\alpha \sin\beta
\end{aligned}
$$

**Double angle:**

$$
\sin(2x) = 2 \sin x \cos x \qquad \cos(2x) = \cos^2 x - \sin^2 x = 1 - 2\sin^2 x
$$

## Trigonometric equations

Equations in which the unknown is the argument of a trigonometric function usually have **infinitely many solutions** because of periodicity. First find the solutions within one period, then add multiples of the period.

:::tip[Example]
$$
2 \sin x = 1 \quad\Rightarrow\quad \sin x = \frac{1}{2}
$$

The calculator gives $x_1 = \arcsin\frac{1}{2} = \frac{\pi}{6}$. Because $\sin(\pi - x) = \sin x$, $x_2 = \pi - \frac{\pi}{6} = \frac{5\pi}{6}$ is also a solution.

All solutions: $x = \frac{\pi}{6} + 2k\pi$ or $x = \frac{5\pi}{6} + 2k\pi$ with $k \in \mathbb{Z}$.
:::

:::tip[Example: When does the mains voltage reach 200 V?]
$$
325 \sin(314.16\,t) = 200 \;\Rightarrow\; 314.16\,t = \arcsin\frac{200}{325} \approx 0.6633 \;\Rightarrow\; t \approx 2.11\ \text{ms}
$$

In every period, the value is reached a second time as the voltage falls: $314.16\,t = \pi - 0.6633$, so $t \approx 7.89\ \text{ms}$.
:::
