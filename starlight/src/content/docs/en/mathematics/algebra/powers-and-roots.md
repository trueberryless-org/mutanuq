---
title: Powers and Roots
description: Powers with natural, integer and rational exponents, laws of exponents, scientific notation, roots and logarithms.
sidebar:
  order: 4
---

## Powers with natural exponents

A **power** is a short way of writing the repeated multiplication of the same factor:

$$
a^n = \underbrace{a \cdot a \cdot \ldots \cdot a}_{n \text{ factors}}
$$

$a$ is called the **base**, $n$ the **exponent** and $a^n$ the **power**. By definition, $a^1 = a$.

:::caution
The exponent only applies to the symbol directly in front of it: $-3^2 = -(3 \cdot 3) = -9$, but $(-3)^2 = (-3) \cdot (-3) = 9$. Calculators and programming languages follow this rule.
:::

## Laws of exponents

For $a, b \ne 0$ and any exponents $m, n$:

| Law                            | Formula                                     | Example                              |
| ------------------------------ | ------------------------------------------- | ------------------------------------ |
| Multiplying equal bases        | $a^m \cdot a^n = a^{m+n}$                   | $2^3 \cdot 2^4 = 2^7$                |
| Dividing equal bases           | $\dfrac{a^m}{a^n} = a^{m-n}$                | $\dfrac{x^5}{x^2} = x^3$             |
| Power of a power               | $(a^m)^n = a^{m \cdot n}$                   | $(10^2)^3 = 10^6$                    |
| Multiplying equal exponents    | $a^n \cdot b^n = (a \cdot b)^n$             | $2^5 \cdot 5^5 = 10^5$               |
| Dividing equal exponents       | $\dfrac{a^n}{b^n} = \left(\dfrac{a}{b}\right)^n$ | $\dfrac{6^3}{3^3} = 2^3$        |

:::caution
There is no such law for sums: $(a + b)^2 \ne a^2 + b^2$ and $a^m + a^n \ne a^{m+n}$. Sums are raised to a power with the [binomial formulas](/en/mathematics/algebra/terms/#binomial-formulas).
:::

## Zero and negative exponents

So that the laws also work for the division $\frac{a^n}{a^n}$ and $\frac{a^m}{a^n}$ with $m < n$, we define for $a \ne 0$:

$$
a^0 = 1 \qquad a^{-n} = \frac{1}{a^n}
$$

:::tip[Examples]
$$
5^0 = 1 \qquad 2^{-3} = \frac{1}{2^3} = \frac{1}{8} \qquad \left(\frac{2}{3}\right)^{-2} = \left(\frac{3}{2}\right)^2 = \frac{9}{4} \qquad \frac{x^2}{x^5} = x^{-3} = \frac{1}{x^3}
$$
:::

## Powers of ten and scientific notation

Very large and very small numbers are written in **scientific notation** as $a \cdot 10^n$ with $1 \le \lvert a \rvert < 10$. In **engineering notation**, exponents that are multiples of $3$ are used, because they correspond to the **SI prefixes**.

| Prefix | Symbol | Factor     | Prefix | Symbol | Factor      |
| ------ | ------ | ---------- | ------ | ------ | ----------- |
| kilo   | k      | $10^3$     | milli  | m      | $10^{-3}$   |
| mega   | M      | $10^6$     | micro  | µ      | $10^{-6}$   |
| giga   | G      | $10^9$     | nano   | n      | $10^{-9}$   |
| tera   | T      | $10^{12}$  | pico   | p      | $10^{-12}$  |
| peta   | P      | $10^{15}$  | femto  | f      | $10^{-15}$  |

:::tip[Example]
The speed of light is $c \approx 300\,000\,000\ \text{m/s} = 3 \cdot 10^8\ \text{m/s}$. A capacitor with $0.000\,000\,047\ \text{F}$ has a capacitance of $47 \cdot 10^{-9}\ \text{F} = 47\ \text{nF}$.
:::

:::note
In computing, kilo, mega and giga also mean $10^3$, $10^6$ and $10^9$ according to the SI standard. For the powers of two $2^{10} = 1024$, $2^{20}$ and $2^{30}$, there are the **binary prefixes** kibi (Ki), mebi (Mi) and gibi (Gi). $1\ \text{KiB} = 1024\ \text{bytes}$, but $1\ \text{kB} = 1000\ \text{bytes}$.
:::

## Roots

The **$n$-th root** of a number $a \ge 0$ is the non-negative number whose $n$-th power is $a$:

$$
\sqrt[n]{a} = x \quad\Longleftrightarrow\quad x^n = a, \quad x \ge 0
$$

$a$ is called the **radicand** and $n$ the **index** of the root. For $n = 2$, we simply write $\sqrt{a}$ (square root).

:::caution
$\sqrt{9} = 3$ and not $\pm 3$. However, the equation $x^2 = 9$ has two solutions: $x = \pm\sqrt{9} = \pm 3$.
:::

### Roots as powers

Roots can be written as powers with **rational exponents**. This means the same laws apply to roots as to powers:

$$
\sqrt[n]{a} = a^{\frac{1}{n}} \qquad \sqrt[n]{a^m} = a^{\frac{m}{n}}
$$

:::tip[Examples]
$$
\begin{aligned}
\sqrt[3]{8} &= 8^{\frac{1}{3}} = 2 \\
27^{\frac{2}{3}} &= \left(\sqrt[3]{27}\right)^2 = 3^2 = 9 \\
\sqrt{x} \cdot \sqrt[3]{x} &= x^{\frac{1}{2}} \cdot x^{\frac{1}{3}} = x^{\frac{5}{6}} = \sqrt[6]{x^5} \\
16^{-\frac{1}{4}} &= \frac{1}{\sqrt[4]{16}} = \frac{1}{2}
\end{aligned}
$$
:::

### Laws for roots

$$
\sqrt[n]{a} \cdot \sqrt[n]{b} = \sqrt[n]{a \cdot b} \qquad \frac{\sqrt[n]{a}}{\sqrt[n]{b}} = \sqrt[n]{\frac{a}{b}} \qquad \sqrt[m]{\sqrt[n]{a}} = \sqrt[m \cdot n]{a}
$$

**Partially taking the root:** $\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2}$

**Rationalising the denominator:** Expand the fraction so that there is no root left in the denominator:

$$
\frac{6}{\sqrt{3}} = \frac{6 \cdot \sqrt{3}}{\sqrt{3} \cdot \sqrt{3}} = \frac{6\sqrt{3}}{3} = 2\sqrt{3}
$$

## Logarithms

The **logarithm** answers the question of which exponent a base must be raised to in order to get a certain number:

$$
\log_a b = x \quad\Longleftrightarrow\quad a^x = b \qquad (a > 0,\ a \ne 1,\ b > 0)
$$

Particularly important are the **common logarithm** $\lg x = \log_{10} x$, the **natural logarithm** $\ln x = \log_e x$ with Euler's number $e \approx 2.71828$ and, in computing, the **binary logarithm** $\operatorname{lb} x = \log_2 x$.

:::tip[Examples]
$\log_2 8 = 3$, because $2^3 = 8$. $\quad \lg 0.001 = -3$, because $10^{-3} = 0.001$. $\quad \ln 1 = 0$, because $e^0 = 1$.
:::

### Laws of logarithms

| Law               | Formula                                            |
| ----------------- | -------------------------------------------------- |
| Product           | $\log_a (u \cdot v) = \log_a u + \log_a v$         |
| Quotient          | $\log_a \dfrac{u}{v} = \log_a u - \log_a v$        |
| Power             | $\log_a u^r = r \cdot \log_a u$                    |
| Change of base    | $\log_a b = \dfrac{\ln b}{\ln a} = \dfrac{\lg b}{\lg a}$ |

With the change of base, any logarithm can be calculated with the `ln` or `log` key of a calculator: $\log_2 1000 = \frac{\ln 1000}{\ln 2} \approx 9.97$. So almost 10 bits are needed to represent 1000 different values.

Logarithms are mainly used to solve [exponential equations](/en/mathematics/functions/exponential-and-logarithmic-functions/#exponential-equations) and for [logarithmic scales](/en/mathematics/functions/exponential-and-logarithmic-functions/#logarithmic-scaling) such as decibels.
