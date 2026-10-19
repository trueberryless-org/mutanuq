---
title: Random Variables
description: "Discrete and continuous random variables, probability distribution, cumulative distribution function, expected value, variance and standard deviation with calculation rules."
sidebar:
  order: 2
---

A **random variable** $X$ assigns a number to each outcome of a random experiment, for example the number of defective components in a sample, the total of two dice or the lifetime of a hard disk. Instead of working with events you then calculate with numbers and can state a mean and a spread.

## Discrete and continuous random variables

| | discrete | continuous |
| --- | --- | --- |
| values | individual, countable values $x_1, x_2, \ldots$ | any value in an interval |
| examples | number of errors, score of a die, requests per second | time, length, voltage, weight |
| description | probability mass function $P(X = x_i)$ | probability density function $f(x)$ |
| probability | sum | area under the density (integral) |

## Probability distribution

The **probability distribution** of a discrete random variable gives the probability $p_i = P(X = x_i)$ for every possible value $x_i$. All probabilities add up to $1$: $\sum p_i = 1$. It is shown as a table or a bar chart.

:::tip[Example: Defective chips]
From a box of 10 chips, 3 of them defective, 2 are drawn without replacement ([tree diagram](/en/mathematics/stochastics/probability/#tree-diagrams)). $X$ is the number of defective chips:

| $x_i$ | $0$ | $1$ | $2$ |
| ----- | --- | --- | --- |
| $P(X = x_i)$ | $\frac{42}{90}$ | $\frac{42}{90}$ | $\frac{6}{90}$ |

Check: $\frac{42 + 42 + 6}{90} = 1$.
:::

## Cumulative distribution function

The **cumulative distribution function** (CDF) gives the probability that $X$ takes at most the value $x$:

$$
F(x) = P(X \leq x)
$$

For discrete random variables, $F$ is a step function that jumps by $p_i$ at each value $x_i$. $F$ is monotonically increasing, starts at $0$ and ends at $1$. It is used to calculate interval probabilities:

$$
P(a < X \leq b) = F(b) - F(a) \qquad P(X > a) = 1 - F(a)
$$

In the chip example, $F(0) = \frac{42}{90}$, $F(1) = \frac{84}{90}$ and $F(2) = 1$.

:::caution
For discrete random variables it matters whether you use $<$ or $\leq$: $P(X < 2) = P(X \leq 1)$, but $P(X \leq 2) \neq P(X \leq 1)$. For continuous random variables it makes no difference because $P(X = a) = 0$.
:::

## Expected value

The **expected value** $E(X)$ (also $\mu$) is the mean you expect in the long run over very many repetitions. Each value is weighted by its probability:

$$
E(X) = \mu = \sum_{i} x_i \cdot P(X = x_i)
$$

:::tip[Example]
For the defective chips:

$$
E(X) = 0 \cdot \frac{42}{90} + 1 \cdot \frac{42}{90} + 2 \cdot \frac{6}{90} = \frac{54}{90} = 0.6
$$

On average, $0.6$ of two drawn chips are defective. The expected value does not have to be a possible value of $X$ itself.
:::

:::tip[Example: Fair game]
In a dice game you pay a €1 stake. If you roll a six you are paid €5, otherwise nothing. The gain $X$ is therefore €4 (probability $\frac{1}{6}$) or €$-1$ (probability $\frac{5}{6}$):

$$
E(X) = 4 \cdot \frac{1}{6} + (-1) \cdot \frac{5}{6} = -\frac{1}{6} \approx -0.17\ \text{€}
$$

On average you lose about 17 cents per game. A game is called **fair** if $E(X) = 0$; here that would be the case with a payout of €6.
:::

## Variance and standard deviation

The **variance** measures the mean squared deviation from the expected value; the **standard deviation** is its square root and has the same unit as $X$:

$$
V(X) = \sigma^2 = \sum_{i} (x_i - \mu)^2 \cdot P(X = x_i) \qquad \sigma = \sqrt{V(X)}
$$

The **shortcut formula** is often faster:

$$
V(X) = E(X^2) - \mu^2 = \sum_{i} x_i^2 \cdot P(X = x_i) - \mu^2
$$

:::tip[Example]
For the defective chips with $\mu = 0.6$:

$$
E(X^2) = 0^2 \cdot \frac{42}{90} + 1^2 \cdot \frac{42}{90} + 2^2 \cdot \frac{6}{90} = \frac{66}{90} \approx 0.733 \qquad V(X) = 0.733 - 0.6^2 \approx 0.373 \qquad \sigma \approx 0.611
$$
:::

The formulas correspond to those of [descriptive statistics](/en/mathematics/descriptive-statistics/#variance-and-standard-deviation); there, observed frequencies are used, here probabilities.

## Calculation rules

For numbers $a$, $b$ and random variables $X$, $Y$:

| Rule | Expected value | Variance |
| ---- | -------------- | -------- |
| linear transformation | $E(aX + b) = a \cdot E(X) + b$ | $V(aX + b) = a^2 \cdot V(X)$ |
| sum | $E(X + Y) = E(X) + E(Y)$ (always) | $V(X + Y) = V(X) + V(Y)$ (only if $X$, $Y$ are independent) |

A shift by $b$ does not change the spread. For independent quantities, the squares of the standard deviations add up, not the standard deviations themselves.

:::tip[Example: Tolerances]
Two independently manufactured parts with lengths $X$ ($\mu = 20\ \text{mm}$, $\sigma = 0.3\ \text{mm}$) and $Y$ ($\mu = 30\ \text{mm}$, $\sigma = 0.4\ \text{mm}$) are placed end to end:

$$
E(X + Y) = 50\ \text{mm} \qquad \sigma_{X+Y} = \sqrt{0.3^2 + 0.4^2} = 0.5\ \text{mm}
$$
:::

## Continuous random variables

A continuous random variable is described by a **probability density function** $f$. Probabilities are areas under the graph of $f$:

$$
P(a \leq X \leq b) = \int_a^b f(x)\,\mathrm{d}x \qquad f(x) \geq 0 \qquad \int_{-\infty}^{\infty} f(x)\,\mathrm{d}x = 1
$$

The cumulative distribution function is an [antiderivative](/en/mathematics/analysis/integral-calculus/) of the density, $F(x) = \int_{-\infty}^{x} f(t)\,\mathrm{d}t$, and $F'(x) = f(x)$. Expected value and variance are calculated with integrals instead of sums:

$$
E(X) = \int_{-\infty}^{\infty} x \cdot f(x)\,\mathrm{d}x \qquad V(X) = \int_{-\infty}^{\infty} (x - \mu)^2 \cdot f(x)\,\mathrm{d}x
$$

:::tip[Example]
$X$ has the density $f(x) = 2x$ on $[0; 1]$ (otherwise $0$). The area is $\int_0^1 2x\,\mathrm{d}x = 1$, so it is a valid density.

$$
P(X \leq 0.5) = \int_0^{0.5} 2x\,\mathrm{d}x = 0.25 \qquad E(X) = \int_0^1 x \cdot 2x\,\mathrm{d}x = \frac{2}{3} \qquad V(X) = \int_0^1 x^2 \cdot 2x\,\mathrm{d}x - \left(\frac{2}{3}\right)^2 = \frac{1}{2} - \frac{4}{9} = \frac{1}{18}
$$
:::

:::note
The value of the density $f(x)$ itself is not a probability and can be greater than $1$. For a single value, continuous random variables always have $P(X = a) = 0$.
:::

The most important distributions are the [binomial and Poisson distribution](/en/mathematics/stochastics/binomial-and-poisson-distribution/) (discrete) and the [normal distribution](/en/mathematics/stochastics/normal-distribution/) (continuous).

## Further reading

- [Lothar Papula: Mathematik für Ingenieure und Naturwissenschaftler, Volume 3 (Springer Vieweg)](https://link.springer.com/book/10.1007/978-3-658-11924-9)
- [Random variable, Encyclopedia of Mathematics](https://encyclopediaofmath.org/wiki/Random_variable)
