---
title: Exponential and Logarithmic Functions
description: Exponential growth and decay, Euler's number, half-life and doubling time, logarithmic functions, exponential equations and logarithmic scales.
sidebar:
  order: 5
---

## Exponential functions

In an **exponential function**, the variable is in the exponent:

$$
f(x) = c \cdot a^x \qquad (a > 0,\ a \ne 1)
$$

- $c = f(0)$ is the initial value,
- $a$ is the growth factor: if $x$ increases by $1$, the function value is multiplied by $a$.

| Growth factor   | Behaviour                                |
| --------------- | ---------------------------------------- |
| $a > 1$         | exponential growth (strictly increasing) |
| $0 < a < 1$     | exponential decay (strictly decreasing)  |

All graphs of $a^x$ pass through $(0 \mid 1)$, lie above the $x$-axis and have the $x$-axis as an asymptote.

### Linear or exponential?

| Linear growth                          | Exponential growth                        |
| -------------------------------------- | ----------------------------------------- |
| the same amount is added per step  | multiplied by the same factor per step |
| $f(x) = k \cdot x + d$                 | $f(x) = c \cdot a^x$                      |
| constant differences in the table of values | constant ratios in the table of values |

For a percentage change of $p\,\%$ per unit of time, the growth factor is $a = 1 \pm \frac{p}{100}$.

:::tip[Example]
The number of users of an app grows by 15 % every month. At the start, there are 2000.

$$
N(t) = 2000 \cdot 1.15^t \qquad N(12) = 2000 \cdot 1.15^{12} \approx 10\,700
$$
:::

## Euler's number and the natural exponential function

The exponential function with the base $e \approx 2.71828$ (**Euler's number**) is particularly important. It has the special property that its [derivative](/en/mathematics/analysis/differential-calculus/) is itself: $(e^x)' = e^x$.

That is why growth and decay processes are usually written in the form

$$
f(t) = c \cdot e^{\lambda t}
$$

Here $\lambda$ is the **growth constant** ($\lambda > 0$) or decay constant ($\lambda < 0$). Every exponential function can be rewritten like this, because $a^t = e^{\ln(a) \cdot t}$.

## Doubling time and half-life

The **doubling time** $T_2$ is the time after which an exponentially growing value has doubled. The half-life $T_{1/2}$ is the time after which an exponentially decaying value has halved. Neither depends on the initial value:

$$
T_2 = \frac{\ln 2}{\lambda} \qquad T_{1/2} = \frac{\ln 2}{\lvert\lambda\rvert}
$$

:::tip[Example: Discharging a capacitor]
The voltage across a capacitor that is discharged through a resistor is

$$
u(t) = U_0 \cdot e^{-\frac{t}{\tau}} \qquad \tau = R \cdot C
$$

With $R = 10\ \text{k}\Omega$ and $C = 100\ \mu\text{F}$, the **time constant** is $\tau = 1\ \text{s}$. After $\tau$, the voltage has fallen to $e^{-1} \approx 37\,\%$, after $5\tau$ to below $1\,\%$. The capacitor is then considered discharged.

The half-life is $T_{1/2} = \tau \cdot \ln 2 \approx 0.69\ \text{s}$.
:::

### Limited growth

Many processes approach a **saturation limit** $S$, for example the temperature of a drink in the fridge or the voltage when charging a capacitor:

$$
f(t) = S - (S - f_0) \cdot e^{-k t}
$$

The difference to the limit decreases exponentially.

## Logarithmic functions

The **logarithmic function** $f(x) = \log_a x$ is the [inverse function](/en/mathematics/functions/functions/#inverse-function) of the exponential function $a^x$. Its graph is the reflection in the line $y = x$.

- Domain: $D = \mathbb{R}^+$ (positive numbers only)
- zero at $x = 1$, because $a^0 = 1$
- vertical asymptote $x = 0$
- grows very slowly for $a > 1$: $\lg 1\,000\,000 = 6$

The laws of logarithms can be found under [powers and roots](/en/mathematics/algebra/powers-and-roots/#logarithms).

## Exponential equations

If the unknown is in the exponent, isolate the power and **take the logarithm** of both sides:

:::tip[Example: When will there be 50,000 users?]
$$
\begin{aligned}
2000 \cdot 1.15^t &= 50\,000 \\
1.15^t &= 25 && \mid \ln \\
t \cdot \ln 1.15 &= \ln 25 \\
t &= \frac{\ln 25}{\ln 1.15} \approx 23.0
\end{aligned}
$$

After about 23 months, there will be 50,000 users.
:::

:::tip[Example: Determining the time constant]
A capacitor discharges from 12 V to 4 V in 3 ms. What is $\tau$?

$$
4 = 12 \cdot e^{-\frac{3}{\tau}} \;\Rightarrow\; \frac{1}{3} = e^{-\frac{3}{\tau}} \;\Rightarrow\; \ln\frac{1}{3} = -\frac{3}{\tau} \;\Rightarrow\; \tau = \frac{3}{\ln 3} \approx 2.73\ \text{ms}
$$
:::

## Logarithmic scaling

If values span many orders of magnitude, they are shown on a **logarithmic scale**. There, equal factors have equal distances: the distance from 1 to 10 is the same as from 10 to 100 or from 100 to 1000 (a decade).

- In a semi-log plot, only the $y$-axis is logarithmic. Exponential functions then appear as straight lines.
- In a log-log plot, both axes are logarithmic. Then power functions appear as straight lines whose slope is the exponent.

This makes it easy to tell from measurements whether an exponential or a power relationship is present.

### Decibels

In communications and electrical engineering, ratios are given in **decibels** (dB):

$$
L = 10 \cdot \lg \frac{P_2}{P_1}\ \text{dB} \qquad L = 20 \cdot \lg \frac{U_2}{U_1}\ \text{dB}
$$

Because power is proportional to the square of the voltage, the factor for voltage ratios is 20.

| Power ratio         | Level      |
| ------------------- | ---------- |
| $2$                 | $\approx 3\ \text{dB}$ |
| $10$                | $10\ \text{dB}$ |
| $100$               | $20\ \text{dB}$ |
| $\frac{1}{2}$       | $\approx -3\ \text{dB}$ |

Other logarithmic scales are the sound pressure level, the Richter scale for earthquakes and the pH value. In **Bode plots**, the frequency response of filters is shown with a logarithmic frequency axis and the gain in dB.

:::tip[Example]
An amplifier raises a signal from 20 mV to 2 V. The gain is

$$
20 \cdot \lg \frac{2}{0.02} = 20 \cdot \lg 100 = 40\ \text{dB}
$$
:::
