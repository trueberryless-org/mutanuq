---
title: Power and Polynomial Functions
description: Power functions, polynomial functions with degree, zeros, linear factors and end behaviour as well as rational functions with poles and asymptotes.
sidebar:
  order: 4
---

## Power functions

A **power function** has the form $f(x) = a \cdot x^n$. Its graph depends strongly on the exponent $n$:

| Exponent                  | Example                   | Graph and properties                                                |
| ------------------------- | ------------------------- | ------------------------------------------------------------------- |
| $n$ even, $n > 0$         | $x^2$, $x^4$              | parabola shape, even function, $f(x) \ge 0$ for $a > 0$             |
| $n$ odd, $n > 0$          | $x^3$, $x^5$              | point-symmetric, strictly increasing for $a > 0$                    |
| $n$ negative              | $x^{-1} = \frac{1}{x}$, $x^{-2}$ | hyperbola, pole at $0$, asymptote $y = 0$                    |
| $n$ fraction              | $x^{\frac{1}{2}} = \sqrt{x}$ | root function, only defined for $x \ge 0$                        |

All power functions with $n > 0$ pass through $(0 \mid 0)$ and $(1 \mid a)$. The larger $n$ is, the flatter the graph for $\lvert x \rvert < 1$ and the steeper for $\lvert x \rvert > 1$.

:::tip[Example]
The mass of a sphere made of the same material is proportional to the cube of its radius: $m(r) = \frac{4}{3}\pi\rho \cdot r^3$. With double the radius, the sphere is eight times as heavy.

The illuminance of a lamp decreases with the square of the distance: $E(r) = \frac{c}{r^2}$. At twice the distance, it is only a quarter as bright.
:::

## Polynomial functions

A **polynomial function** of degree $n$ is a sum of power functions with natural exponents:

$$
f(x) = a_n x^n + a_{n-1} x^{n-1} + \ldots + a_1 x + a_0 \qquad (a_n \ne 0)
$$

Linear functions are polynomials of degree 1, quadratic functions of degree 2. Polynomials are defined on all of $\mathbb{R}$ and have a "smooth" graph without jumps or kinks.

### Properties

A polynomial function of degree $n$ has

- at most $n$ zeros,
- at most $n - 1$ extrema (maxima and minima),
- at most $n - 2$ inflection points.

If the degree is **odd**, the function has at least one zero.

### End behaviour

For very large $\lvert x \rvert$, the term with the highest power $a_n x^n$ determines the behaviour:

| Degree $n$ | $a_n > 0$                                  | $a_n < 0$                                  |
| ---------- | ------------------------------------------ | ------------------------------------------ |
| even       | to $+\infty$ on both sides                 | to $-\infty$ on both sides                 |
| odd        | from $-\infty$ (left) to $+\infty$ (right) | from $+\infty$ (left) to $-\infty$ (right) |

### Symmetry

If only **even** exponents occur (including the constant $a_0 = a_0 x^0$), the function is even. If only odd exponents occur, it is odd. $x^4 - 3x^2 + 1$ is even, $x^3 - 2x$ is odd.

## Zeros of polynomial functions

### Linear factors

If $x_1$ is a zero of $f$, the **linear factor** $(x - x_1)$ can be split off:

$$
f(x) = (x - x_1) \cdot g(x)
$$

Here $g$ has a degree that is 1 lower. If all zeros are known, the polynomial can be completely factorised:

$$
f(x) = a_n (x - x_1)(x - x_2) \cdots (x - x_n)
$$

If a linear factor occurs several times, it is a **multiple zero**. At a double (generally: even) zero, the graph only touches the $x$-axis without changing sign. At a simple or triple zero, it crosses the axis.

### Methods

- Factoring out if there is no constant term: $x^3 - 4x = x(x^2 - 4) = x(x - 2)(x + 2)$
- Substitution for biquadratic equations: $x^4 - 5x^2 + 4 = 0$ becomes $u^2 - 5u + 4 = 0$ with $u = x^2$, so $u = 1$ or $u = 4$ and $x \in \{-2, -1, 1, 2\}$.
- Polynomial long division after guessing a zero. Integer zeros are always divisors of the constant term $a_0$ (if all coefficients are integers and $a_n = 1$).
- Numerical methods such as [Newton's method](/en/mathematics/analysis/numerical-methods/#newtons-method) or a calculator.

:::tip[Example: Polynomial long division]
$f(x) = x^3 - 2x^2 - 5x + 6$. Trying the divisors of $6$ gives $f(1) = 1 - 2 - 5 + 6 = 0$. So $x_1 = 1$ is a zero.

$$
\begin{array}{l}
(x^3 - 2x^2 - 5x + 6) : (x - 1) = x^2 - x - 6 \\
\underline{-(x^3 - x^2)} \\
\qquad -x^2 - 5x \\
\qquad \underline{-(-x^2 + x)} \\
\qquad\qquad -6x + 6 \\
\qquad\qquad \underline{-(-6x + 6)} \\
\qquad\qquad\qquad 0
\end{array}
$$

$x^2 - x - 6 = 0$ gives $x_2 = 3$ and $x_3 = -2$. So $f(x) = (x - 1)(x - 3)(x + 2)$.
:::

## Rational functions

A **rational function** is the quotient of two polynomials:

$$
f(x) = \frac{p(x)}{q(x)}
$$

It is defined everywhere except at the zeros of the denominator $q$.

- **Zeros:** zeros of the numerator that are not also zeros of the denominator.
- **Poles:** zeros of the denominator that are not also zeros of the numerator. There the graph has a vertical asymptote.
- **Removable discontinuities:** points where both the numerator and the denominator are zero. After cancelling, the gap disappears and the graph only has a "hole" there.

### Horizontal and oblique asymptotes

The behaviour for $x \to \pm\infty$ depends on the degree of the numerator ($m$) and of the denominator ($n$):

| Degrees    | Asymptote                                                                |
| ---------- | ------------------------------------------------------------------------ |
| $m < n$    | $y = 0$                                                                  |
| $m = n$    | $y = \frac{a_m}{b_n}$ (quotient of the leading coefficients)             |
| $m = n + 1$ | oblique asymptote, obtained by polynomial long division                 |

:::tip[Example]
$$
f(x) = \frac{2x^2 - 2}{x^2 - 4} = \frac{2(x - 1)(x + 1)}{(x - 2)(x + 2)}
$$

- Domain: $D = \mathbb{R} \setminus \{-2, 2\}$
- Zeros: $x = \pm 1$
- Poles: $x = \pm 2$
- Horizontal asymptote: $y = \frac{2}{1} = 2$, because the numerator and denominator have the same degree
:::

:::tip[Example: Unit costs]
A company has fixed costs of €2000 and variable costs of €5 per unit. The cost per unit when $x$ units are produced is

$$
\bar{K}(x) = \frac{5x + 2000}{x}
$$

The function has a pole at $x = 0$ and the horizontal asymptote $y = 5$: at high quantities, the fixed costs are spread over so many units that the unit costs fall almost to the variable costs.
:::
