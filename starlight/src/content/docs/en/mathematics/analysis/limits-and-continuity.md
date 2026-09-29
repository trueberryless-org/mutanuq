---
title: Limits and Continuity
description: Limits of functions, one-sided limits, limit laws, limits at infinity, continuity and types of discontinuities.
sidebar:
  order: 2
---

## Limit of a function

The **limit** of a function $f$ at the point $x_0$ is the value that $f(x)$ approaches arbitrarily closely as $x$ approaches $x_0$:

$$
\lim_{x \to x_0} f(x) = a
$$

Important: only the behaviour of $f$ **near** $x_0$ matters. Whether $f$ has a value at $x_0$ itself, and which one, is irrelevant.

:::tip[Example]
$f(x) = \dfrac{x^2 - 4}{x - 2}$ is not defined at $2$. For $x \ne 2$, it can be cancelled:

$$
\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{(x - 2)(x + 2)}{x - 2} = \lim_{x \to 2} (x + 2) = 4
$$

A table of values confirms this: $f(1.9) = 3.9$, $f(1.99) = 3.99$, $f(2.01) = 4.01$.
:::

### One-sided limits

If $x_0$ is only approached from the left ($x < x_0$) or only from the right ($x > x_0$), you get the **left-hand** or **right-hand** limit:

$$
\lim_{x \to x_0^-} f(x) \qquad \lim_{x \to x_0^+} f(x)
$$

The limit exists exactly when both one-sided limits exist and are equal.

:::tip[Example]
$f(x) = \frac{1}{x}$ at $0$: $\lim_{x \to 0^-} \frac{1}{x} = -\infty$, but $\lim_{x \to 0^+} \frac{1}{x} = +\infty$. The limit does not exist, the function has a **pole** there.
:::

### Limit laws

If $\lim f(x) = a$ and $\lim g(x) = b$ exist, then:

$$
\lim (f \pm g) = a \pm b \qquad \lim (f \cdot g) = a \cdot b \qquad \lim \frac{f}{g} = \frac{a}{b} \;\;(b \ne 0) \qquad \lim c \cdot f = c \cdot a
$$

For polynomials and many other "well-behaved" functions, the limit can therefore be calculated by simply substituting: $\lim_{x \to 3} (x^2 + 1) = 10$.

## Limits at infinity

For $x \to \pm\infty$, you examine whether $f(x)$ approaches a number (horizontal asymptote) or grows without bound.

Basic limits:

$$
\lim_{x \to \infty} \frac{1}{x} = 0 \qquad \lim_{x \to \infty} \frac{1}{x^n} = 0 \;(n > 0) \qquad \lim_{x \to \infty} e^{-x} = 0 \qquad \lim_{x \to -\infty} e^{x} = 0
$$

For quotients of polynomials, divide the numerator and denominator by the **highest power of the denominator**:

:::tip[Example]
$$
\lim_{x \to \infty} \frac{3x^2 + 2x}{x^2 - 5} = \lim_{x \to \infty} \frac{3 + \frac{2}{x}}{1 - \frac{5}{x^2}} = \frac{3 + 0}{1 - 0} = 3
$$
:::

Exponential functions grow faster than any power function, and power functions grow faster than logarithmic functions:

$$
\lim_{x \to \infty} \frac{x^{100}}{e^x} = 0 \qquad \lim_{x \to \infty} \frac{\ln x}{x} = 0
$$

### Indeterminate forms

Expressions such as $\frac{0}{0}$, $\frac{\infty}{\infty}$, $\infty - \infty$ or $0 \cdot \infty$ have no fixed value. The expression must be transformed first (cancelling, expanding, dividing by the highest power). With differential calculus, such limits can also be calculated using **L'Hôpital's rule**: for $\frac{0}{0}$ or $\frac{\infty}{\infty}$, $\lim \frac{f}{g} = \lim \frac{f'}{g'}$.

:::tip[Example: An important limit]
$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

So for small angles in radians, $\sin x \approx x$. This approximation is used, for example, for the simple pendulum.
:::

## Continuity

Intuitively, a function is **continuous** if its graph can be drawn without lifting the pen. More precisely, $f$ is continuous at $x_0$ if

1. $f(x_0)$ is defined,
2. the limit $\lim_{x \to x_0} f(x)$ exists and
3. both agree: $\lim_{x \to x_0} f(x) = f(x_0)$.

Polynomial functions, exponential functions, sine and cosine are continuous everywhere. Rational, logarithmic and root functions are continuous on their domain. Sums, products, quotients and compositions of continuous functions are continuous again.

### Discontinuities

| Type                   | Description                                                           | Example                                   |
| ---------------------- | --------------------------------------------------------------------- | ----------------------------------------- |
| **Jump discontinuity** | left-hand and right-hand limits exist but are different              | switching on, step function, price tiers  |
| **Pole**               | the function values tend to $\pm\infty$                               | $\frac{1}{x}$ at $x = 0$                  |
| **Removable discontinuity** | the limit exists but does not match $f(x_0)$, or $f(x_0)$ is not defined | $\frac{x^2 - 4}{x - 2}$ at $x = 2$ |

A removable discontinuity can be eliminated by defining $f(x_0)$ as the limit.

:::tip[Example: Parcel prices]
A parcel service charges €5 up to 2 kg, €7 up to 5 kg and €10 up to 10 kg. The price function is a **step function** with jumps at 2 kg and 5 kg. At exactly 2 kg, the parcel still costs €5 – the left-hand limit and the function value are €5, the right-hand limit is €7.
:::

### Intermediate value theorem

If $f$ is continuous on the interval $[a; b]$ and $f(a)$ and $f(b)$ have different signs, then $f$ has at least one zero between $a$ and $b$. The [bisection method](/en/mathematics/analysis/numerical-methods/#bisection-method) for approximating zeros is based on this theorem.
