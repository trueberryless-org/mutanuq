---
title: Normal Distribution
description: "Density and distribution function of the normal distribution, standardisation, standard normal table, sigma rules, approximation of the binomial distribution, uniform and exponential distribution."
sidebar:
  order: 4
---

The **normal distribution** (Gaussian distribution) is the most important continuous distribution. Measurements, manufacturing dimensions, noise in electronic circuits and many natural quantities are approximately normally distributed. The reason is the **central limit theorem**: a sum of many small, independent random influences is approximately normally distributed, no matter how the individual influences are distributed.

## Density function

A normally distributed random variable $X \sim N(\mu; \sigma^2)$ has the density function

$$
f(x) = \frac{1}{\sigma \sqrt{2\pi}} \cdot e^{-\frac{1}{2}\left(\frac{x - \mu}{\sigma}\right)^2}
$$

Its graph is the **Gaussian bell curve**:

- symmetric about the expected value $\mu$, where the maximum is,
- points of inflection at $\mu - \sigma$ and $\mu + \sigma$,
- the $x$-axis is an asymptote, the total area is $1$.

A larger $\mu$ shifts the curve to the right. A larger $\sigma$ makes it wider and flatter because the area must stay the same.

:::caution
Some books and calculators write $N(\mu; \sigma)$ with the standard deviation instead of the variance. In tasks and calculator inputs, check which parameter is meant.
:::

Probabilities are areas under the bell curve. The distribution function $F(x) = P(X \leq x)$ cannot be expressed with elementary functions; you use technology (e.g. GeoGebra `Normal(μ, σ, x)`, calculator `normalcdf`) or the standard normal table.

## Standard normal distribution

The normal distribution with $\mu = 0$ and $\sigma = 1$ is called the **standard normal distribution**. Its distribution function is denoted $\Phi$. Every normal distribution can be reduced to it by **standardising**:

$$
z = \frac{x - \mu}{\sigma} \qquad P(X \leq x) = \Phi(z) = \Phi\left(\frac{x - \mu}{\sigma}\right)
$$

The $z$-value (z-score) states by how many standard deviations $x$ lies away from the expected value.

### Table (extract)

| $z$ | $0$ | $0.5$ | $1$ | $1.5$ | $1.645$ | $1.96$ | $2$ | $2.576$ | $3$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\Phi(z)$ | $0.5000$ | $0.6915$ | $0.8413$ | $0.9332$ | $0.9500$ | $0.9750$ | $0.9772$ | $0.9950$ | $0.9987$ |

Tables only contain positive $z$-values. Because of the symmetry,

$$
\Phi(-z) = 1 - \Phi(z)
$$

### Rules

| wanted | calculation |
| ------ | ----------- |
| $P(X \leq b)$ | $\Phi\left(\frac{b - \mu}{\sigma}\right)$ |
| $P(X \geq a)$ | $1 - \Phi\left(\frac{a - \mu}{\sigma}\right)$ |
| $P(a \leq X \leq b)$ | $\Phi\left(\frac{b - \mu}{\sigma}\right) - \Phi\left(\frac{a - \mu}{\sigma}\right)$ |
| $P(\mu - c \leq X \leq \mu + c)$ | $2\,\Phi\left(\frac{c}{\sigma}\right) - 1$ |

For continuous distributions $P(X = a) = 0$, so it makes no difference whether you use $<$ or $\leq$.

:::tip[Example: Resistors]
The resistance $X$ of a series is normally distributed with $\mu = 100\ \Omega$ and $\sigma = 2\ \Omega$.

At most $103\ \Omega$:

$$
P(X \leq 103) = \Phi\left(\frac{103 - 100}{2}\right) = \Phi(1.5) \approx 0.9332
$$

Between $97\ \Omega$ and $103\ \Omega$:

$$
P(97 \leq X \leq 103) = \Phi(1.5) - \Phi(-1.5) = 2 \cdot 0.9332 - 1 = 0.8664
$$

More than $104\ \Omega$:

$$
P(X > 104) = 1 - \Phi(2) \approx 1 - 0.9772 = 0.0228
$$
:::

### Inverse problems

If the probability is given and the value is wanted, read $z$ from the table (or use the inverse normal distribution, GeoGebra `InverseNormal`) and calculate back:

$$
x = \mu + z \cdot \sigma
$$

:::tip[Example]
In which symmetric range around $\mu$ do 95 % of the resistors lie? From $2\,\Phi(z) - 1 = 0.95$ it follows that $\Phi(z) = 0.975$, so $z = 1.96$:

$$
100 \pm 1.96 \cdot 2 \;\Rightarrow\; [96.08\ \Omega;\ 103.92\ \Omega]
$$

Which value is exceeded by only 10 % of the resistors? $\Phi(z) = 0.9$ gives $z \approx 1.2816$ and $x = 100 + 1.2816 \cdot 2 \approx 102.56\ \Omega$.
:::

## Sigma rules

Regardless of $\mu$ and $\sigma$, a normal distribution always has the same proportions in the ranges around the expected value:

| Range | Probability |
| ----- | ----------- |
| $\mu \pm 1\sigma$ | $\approx 68.3\,\%$ |
| $\mu \pm 2\sigma$ | $\approx 95.4\,\%$ |
| $\mu \pm 3\sigma$ | $\approx 99.7\,\%$ |
| $\mu \pm 1.645\sigma$ | $90\,\%$ |
| $\mu \pm 1.96\sigma$ | $95\,\%$ |
| $\mu \pm 2.576\sigma$ | $99\,\%$ |

Values outside $\mu \pm 3\sigma$ are very rare (about 3 in 1000). In quality assurance (e.g. Six Sigma), tolerance limits are therefore set many standard deviations away from the mean.

## Approximating the binomial distribution

For large $n$, a binomially distributed random variable $X \sim B(n; p)$ is approximately normally distributed with

$$
\mu = n p \qquad \sigma = \sqrt{n p (1 - p)}
$$

As a rule of thumb, the approximation is good enough if $\sigma^2 = n p (1 - p) > 9$.

### Continuity correction

The binomial distribution is discrete, the normal distribution continuous. In the bar chart, each value $k$ stands for a bar from $k - 0.5$ to $k + 0.5$. This is why the limits are shifted by $0.5$ (**continuity correction**):

$$
P(X \leq k) \approx \Phi\left(\frac{k + 0.5 - \mu}{\sigma}\right) \qquad P(a \leq X \leq b) \approx \Phi\left(\frac{b + 0.5 - \mu}{\sigma}\right) - \Phi\left(\frac{a - 0.5 - \mu}{\sigma}\right)
$$

:::tip[Example]
10 % of an online shop's customers make a complaint. How likely are at most 25 complaints for 200 orders?

$$
\mu = 200 \cdot 0.1 = 20 \qquad \sigma = \sqrt{200 \cdot 0.1 \cdot 0.9} = \sqrt{18} \approx 4.243 \qquad \sigma^2 = 18 > 9
$$

$$
P(X \leq 25) \approx \Phi\left(\frac{25.5 - 20}{4.243}\right) = \Phi(1.296) \approx 0.9026
$$

The exact binomial value is $0.8995$. Without continuity correction you would get $\Phi(1.179) \approx 0.8807$, a noticeably worse approximation.
:::

:::note
With modern technology, binomial probabilities can be calculated directly even for large $n$. The approximation is still important because confidence intervals and tests for proportions in [inferential statistics](/en/mathematics/stochastics/inferential-statistics/) are based on it.
:::

## Other continuous distributions

### Continuous uniform distribution

If every value in an interval $[a; b]$ is equally likely, the density is constant there (a rectangle with area $1$):

$$
f(x) = \frac{1}{b - a} \quad (a \leq x \leq b) \qquad E(X) = \frac{a + b}{2} \qquad \sigma = \frac{b - a}{\sqrt{12}}
$$

Probabilities are rectangle areas: $P(c \leq X \leq d) = \frac{d - c}{b - a}$ for $a \leq c \leq d \leq b$.

:::tip[Example]
An underground train runs every 10 minutes and you arrive at the station at a random time. The waiting time is uniformly distributed on $[0; 10]$ min. Waiting at most 3 minutes: $P(X \leq 3) = \frac{3}{10} = 0.3$. On average you wait $5$ min, $\sigma = \frac{10}{\sqrt{12}} \approx 2.89$ min.
:::

Random number generators in programming languages (`Random.NextDouble()` in C#, `rand::random::<f64>()` in Rust) return uniformly distributed values on $[0; 1[$.

### Exponential distribution

The **exponential distribution** describes waiting times until the next event when events occur at a constant rate $\lambda$ (i.e. are [Poisson distributed](/en/mathematics/stochastics/binomial-and-poisson-distribution/#poisson-distribution)), and the lifetime of components that do not age:

$$
f(t) = \lambda e^{-\lambda t} \qquad F(t) = P(T \leq t) = 1 - e^{-\lambda t} \qquad (t \geq 0) \qquad E(T) = \sigma = \frac{1}{\lambda}
$$

:::tip[Example: Lifetime]
An electronic component has a mean lifetime of 5 years, so $\lambda = 0.2$ per year.

$$
P(T \leq 2) = 1 - e^{-0.4} \approx 0.330 \qquad P(T > 5) = e^{-1} \approx 0.368
$$

Only about 37 % of the components reach the mean lifetime because the distribution is strongly right-skewed.
:::

The exponential distribution is **memoryless**: the probability of working for at least $t$ more years does not depend on how long the component has already been running. This fits random failures in the middle phase of the "bathtub curve", but not wear.

## Further reading

- [NIST/SEMATECH e-Handbook of Statistical Methods: Normal Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3661.htm)
- [Formula collection for the SRDP Angewandte Mathematik (matura.gv.at)](https://www.matura.gv.at/)
