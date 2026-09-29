---
title: Numerical Methods
description: Iterative methods for finding zeros with bisection, regula falsi and Newton's method, as well as numerical integration with the rectangle, trapezoidal and Simpson's rule.
sidebar:
  order: 7
---

Many equations and integrals cannot be solved exactly – for example $x = \cos x$ or $\int e^{-x^2}\,\mathrm{d}x$. **Numerical methods** provide approximate solutions with any desired accuracy. They are the basis of what calculators and programs such as GeoGebra do in the background, and they can be programmed in just a few lines of code.

## Iterative methods

An **iterative method** starts with an initial value $x_0$ and uses a fixed rule to calculate better and better approximations $x_1, x_2, x_3, \ldots$ The process stops when the approximations hardly change any more (e.g. $\lvert x_{n+1} - x_n \rvert < 10^{-6}$) or when $\lvert f(x_n) \rvert$ is small enough.

## Bisection method

The **bisection method** (interval halving) is based on the [intermediate value theorem](/en/mathematics/analysis/limits-and-continuity/#intermediate-value-theorem): if a continuous function has different signs at the ends of an interval, there is a zero in between.

1. Choose $[a; b]$ with $f(a) \cdot f(b) < 0$.
2. Calculate the midpoint $m = \frac{a + b}{2}$.
3. If $f(m)$ has the same sign as $f(a)$, set $a = m$, otherwise $b = m$.
4. Repeat from step 2 until the interval is small enough.

:::tip[Example: Zero of f(x) = x³ − 2x − 5]
| Step | $a$      | $b$     | $m$       | $f(m)$     |
| ---- | -------- | ------- | --------- | ---------- |
| 1    | 2        | 3       | 2.5       | $5.625$    |
| 2    | 2        | 2.5     | 2.25      | $1.891$    |
| 3    | 2        | 2.25    | 2.125     | $0.346$    |
| 4    | 2        | 2.125   | 2.0625    | $-0.351$   |
| 5    | 2.0625   | 2.125   | 2.09375   | $-0.009$   |

The zero is approximately $2.0946$.
:::

The method **always converges**, but slowly: each step halves the error, so about ten steps are needed for three additional decimal places.

### Regula falsi

The **regula falsi** (false position method) improves bisection by using the zero of the **secant** through $(a \mid f(a))$ and $(b \mid f(b))$ instead of the midpoint:

$$
x = a - f(a) \cdot \frac{b - a}{f(b) - f(a)}
$$

## Newton's method

**Newton's method** replaces the function at the current approximation by its **tangent** and takes its zero as the next approximation:

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$

:::tip[Example: Zero of f(x) = x³ − 2x − 5]
$f'(x) = 3x^2 - 2$, initial value $x_0 = 2$:

| $n$ | $x_n$            | $f(x_n)$          |
| --- | ---------------- | ----------------- |
| 0   | 2                | $-1$              |
| 1   | 2.1              | $0.061$           |
| 2   | 2.094568…        | $0.000186$        |
| 3   | 2.0945514817…    | $\approx 10^{-9}$ |

After only three steps, the result is accurate to nine decimal places.
:::

:::tip[Example: Square roots]
The square root $\sqrt{a}$ is the zero of $f(x) = x^2 - a$. Newton's method gives

$$
x_{n+1} = x_n - \frac{x_n^2 - a}{2x_n} = \frac{1}{2}\left(x_n + \frac{a}{x_n}\right)
$$

This **Babylonian method** (Heron's method) was already known in antiquity. For $\sqrt{2}$ with $x_0 = 1$: $1.5 \to 1.41\overline{6} \to 1.414215\ldots$
:::

Newton's method **converges very quickly** (quadratically: the number of correct digits roughly doubles with each step) if the initial value is close enough to the zero. However, it can fail if

- $f'(x_n) = 0$ or is very small (horizontal tangent),
- the initial value is poorly chosen and the approximations jump back and forth or run away.

A sketch or a few steps of bisection help to find a good initial value.

:::note[As a program]
```csharp
double Newton(Func<double, double> f, Func<double, double> df, double x, double eps = 1e-10)
{
    for (int i = 0; i < 100; i++)
    {
        double next = x - f(x) / df(x);
        if (Math.Abs(next - x) < eps) return next;
        x = next;
    }
    throw new Exception("The method does not converge.");
}
```
:::

## Numerical integration

If no antiderivative is known or only measurements are available, the definite integral is approximated numerically. To do so, divide $[a; b]$ into $n$ strips of equal width $h = \frac{b - a}{n}$ with the points $x_i = a + i \cdot h$ and the function values $y_i = f(x_i)$.

### Rectangle rule

Each strip is replaced by a rectangle, for example with the height at the left edge:

$$
\int_a^b f(x)\,\mathrm{d}x \approx h \cdot (y_0 + y_1 + \ldots + y_{n-1})
$$

### Trapezoidal rule

It is more accurate to replace each strip by a **trapezoid**, i.e. to connect the points with straight lines:

$$
\int_a^b f(x)\,\mathrm{d}x \approx \frac{h}{2} \cdot \big(y_0 + 2y_1 + 2y_2 + \ldots + 2y_{n-1} + y_n\big)
$$

### Simpson's rule

**Simpson's rule** connects every three neighbouring points with a [parabola](/en/mathematics/functions/quadratic-functions/#quadratic-interpolation). The number $n$ of strips must be **even**:

$$
\int_a^b f(x)\,\mathrm{d}x \approx \frac{h}{3} \cdot \big(y_0 + 4y_1 + 2y_2 + 4y_3 + \ldots + 2y_{n-2} + 4y_{n-1} + y_n\big)
$$

:::tip[Example: Comparison]
$\int_0^2 e^{x}\,\mathrm{d}x = e^2 - 1 \approx 6.3891$ with $n = 4$ strips, $h = 0.5$:

| $x_i$ | 0     | 0.5    | 1      | 1.5    | 2      |
| ----- | ----- | ------ | ------ | ------ | ------ |
| $y_i$ | 1     | 1.6487 | 2.7183 | 4.4817 | 7.3891 |

- Rectangle rule (left): $0.5 \cdot (1 + 1.6487 + 2.7183 + 4.4817) \approx 4.924$
- Trapezoidal rule: $0.25 \cdot (1 + 2 \cdot 8.8487 + 7.3891) \approx 6.521$
- Simpson's rule: $\frac{0.5}{3} \cdot (1 + 4 \cdot 1.6487 + 2 \cdot 2.7183 + 4 \cdot 4.4817 + 7.3891) \approx 6.391$

Simpson's rule is almost exact with just four strips.
:::

With all methods, the approximation improves the more strips are used. Halving $h$ reduces the error to about a quarter with the trapezoidal rule and to about a sixteenth with Simpson's rule.
