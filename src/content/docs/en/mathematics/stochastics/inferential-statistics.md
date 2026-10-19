---
title: Inferential Statistics
description: "Sample and population, parameter estimation, confidence intervals for mean and proportion, hypothesis tests, type I and type II errors, significance level, p-value and binomial test."
sidebar:
  order: 5
---

**Inferential statistics** draws conclusions about a population from a sample. Because a sample never contains all the information, these conclusions are uncertain; probability theory makes this uncertainty measurable. Typical questions: how long does a battery last on average? What is the proportion of faulty parts in a delivery? Is a new algorithm really faster, or was that chance?

## Sample and population

The **population** is the set of all objects about which a statement is to be made; the **sample** is the subset actually examined, with size $n$. For conclusions to be valid, the sample must be drawn **at random** (every element has the same chance) and must not be biased. An online survey on a gaming website, for example, is not a random sample of all young people.

| Measure | Population (parameter, usually unknown) | Sample (estimate) |
| ------- | --------------------------------------- | ----------------- |
| mean | $\mu$ | $\bar{x}$ |
| standard deviation | $\sigma$ | $s$ (with $n - 1$ in the denominator) |
| proportion | $p$ | $\hat{p} = \frac{k}{n}$ ($k$ successes) |

## Point estimation

A **point estimate** gives a single estimated value for an unknown parameter:

$$
\hat{\mu} = \bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i \qquad \hat{\sigma} = s = \sqrt{\frac{1}{n - 1} \sum_{i=1}^{n} (x_i - \bar{x})^2} \qquad \hat{p} = \frac{k}{n}
$$

The denominator $n - 1$ in $s$ ensures that the variance is not underestimated on average (**unbiased** estimator). A single estimate, however, says nothing about how accurate it is. That is what confidence intervals are for.

Important for accuracy: the sample mean $\bar{X}$ varies less than the individual values. Its standard deviation (the **standard error**) is

$$
\sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}}
$$

To double the accuracy you therefore need four times the sample size.

## Confidence intervals

A **confidence interval** at confidence level $\gamma$ (e.g. 95 %) is an interval calculated by a method that captures the true parameter in a proportion $\gamma$ of all samples. The level $\gamma = 1 - \alpha$ determines the factor $z$:

| Confidence level $\gamma$ | 90 % | 95 % | 99 % |
| ------------------------- | ---- | ---- | ---- |
| $z$ with $\Phi(z) = 1 - \frac{\alpha}{2}$ | $1.645$ | $1.960$ | $2.576$ |

A higher confidence level gives a **wider** interval: more certainty costs precision.

### Mean with known standard deviation

$$
\left[\bar{x} - z \cdot \frac{\sigma}{\sqrt{n}};\ \bar{x} + z \cdot \frac{\sigma}{\sqrt{n}}\right]
$$

:::tip[Example]
From a series of resistors with known standard deviation $\sigma = 2\ \Omega$, $n = 25$ are measured and the mean is $\bar{x} = 100.4\ \Omega$. 95 % confidence interval:

$$
100.4 \pm 1.96 \cdot \frac{2}{\sqrt{25}} = 100.4 \pm 0.784 \;\Rightarrow\; [99.616\ \Omega;\ 101.184\ \Omega]
$$
:::

**Required sample size:** if half the interval width should be at most $E$, you need

$$
n \geq \left(\frac{z \cdot \sigma}{E}\right)^2
$$

For $E = 0.5\ \Omega$ in the example: $n \geq \left(\frac{1.96 \cdot 2}{0.5}\right)^2 \approx 61.5$, so at least 62 measurements.

### Mean with unknown standard deviation

Usually $\sigma$ is unknown and is estimated by $s$. Then, instead of $z$, you use the quantile of the **t-distribution** (Student's distribution) with $f = n - 1$ degrees of freedom. It is wider than the normal distribution because estimating $\sigma$ adds uncertainty; for large $n$ it approaches the normal distribution.

$$
\left[\bar{x} - t_{f;\,1-\frac{\alpha}{2}} \cdot \frac{s}{\sqrt{n}};\ \bar{x} + t_{f;\,1-\frac{\alpha}{2}} \cdot \frac{s}{\sqrt{n}}\right]
$$

:::tip[Example]
The battery life of $n = 10$ devices gives $\bar{x} = 50.3\ \text{h}$ and $s = 1.2\ \text{h}$. With $t_{9;\,0.975} \approx 2.262$:

$$
50.3 \pm 2.262 \cdot \frac{1.2}{\sqrt{10}} = 50.3 \pm 0.858 \;\Rightarrow\; [49.44\ \text{h};\ 51.16\ \text{h}]
$$
:::

### Proportion

For an unknown proportion $p$ you use the [normal approximation](/en/mathematics/stochastics/normal-distribution/#approximating-the-binomial-distribution) with the estimated proportion $\hat{p}$ (condition roughly $n \hat{p} (1 - \hat{p}) > 9$):

$$
\left[\hat{p} - z \cdot \sqrt{\frac{\hat{p}(1 - \hat{p})}{n}};\ \hat{p} + z \cdot \sqrt{\frac{\hat{p}(1 - \hat{p})}{n}}\right]
$$

:::tip[Example: Survey]
Of 400 randomly surveyed students, 120 use Linux as their main operating system, $\hat{p} = 0.3$. 95 % confidence interval:

$$
0.3 \pm 1.96 \cdot \sqrt{\frac{0.3 \cdot 0.7}{400}} = 0.3 \pm 0.045 \;\Rightarrow\; [0.255;\ 0.345]
$$

The proportion in the population lies between about 25.5 % and 34.5 % with 95 % confidence. This is why election polls with $n = 1000$ have a margin of error of around $\pm 3$ percentage points.
:::

:::caution
A 95 % confidence interval does **not** mean that the true value lies in exactly this calculated interval with 95 % probability; the true value is fixed and the interval is random. Correct: of many intervals calculated this way, about 95 % contain the true value.
:::

## Hypothesis tests

A **hypothesis test** uses a sample to check whether a claim about the population has to be rejected.

### Procedure

1. State the **null hypothesis** $H_0$: the assumption to be refuted, usually "no difference" or "the claim is correct", e.g. $H_0\colon p = 0.05$.
2. Specify the **alternative hypothesis** $H_1$ that you want to demonstrate. It determines the type of test:
   - **right-tailed:** $H_1\colon p > p_0$ (e.g. "more rejects than claimed")
   - **left-tailed:** $H_1\colon p < p_0$
   - **two-tailed:** $H_1\colon p \neq p_0$ (deviation in either direction)
3. Choose the **significance level** $\alpha$, usually 5 % or 1 %, **before** collecting the data.
4. Determine the **rejection region** (critical region) or calculate the **p-value**.
5. **Decide:** if the result lies in the rejection region, or if $p \leq \alpha$, $H_0$ is rejected. The result is then called **significant**.

### Type I and type II errors

Because the decision is based on a sample, it can be wrong:

| | $H_0$ is true | $H_0$ is false |
| --- | --- | --- |
| $H_0$ is rejected | **type I error** (probability at most $\alpha$) | correct decision |
| $H_0$ is not rejected | correct decision | **type II error** (probability $\beta$) |

The significance level $\alpha$ limits the type I error. If $\alpha$ is chosen smaller, the type II error becomes larger. Reducing both at the same time is only possible with a larger sample. The probability $1 - \beta$ of actually rejecting a false null hypothesis is called the **power** of the test.

:::note
"$H_0$ is not rejected" is **not proof** that $H_0$ is true. The data are simply not sufficient to refute it. This is why the claim you want to support is formulated as $H_1$.
:::

### p-value

The **p-value** is the probability, assuming $H_0$ is true, of obtaining a result at least as extreme as the one observed (in the direction of $H_1$). A small p-value means the result would be very unusual under $H_0$. Decision rule: **$p \leq \alpha \Rightarrow$ reject $H_0$.** For two-tailed tests the one-sided probability is doubled.

### Binomial test

:::tip[Example: Right-tailed binomial test]
A supplier guarantees at most 5 % faulty circuit boards. In a sample of $n = 100$ boards, 9 are faulty. At $\alpha = 5\,\%$, is this significant evidence of a higher failure rate?

- $H_0\colon p = 0.05$ (guarantee holds), $\;H_1\colon p > 0.05$ (right-tailed)
- Under $H_0$, the number of faulty boards is $X \sim B(100; 0.05)$ with $\mu = 5$.

**p-value:**

$$
P(X \geq 9) = 1 - P(X \leq 8) \approx 0.0631 > 0.05
$$

$H_0$ is **not rejected**. 9 faults are more than expected, but under $H_0$ they can still be explained by chance in just over 6 % of cases.

**Rejection region:** find the smallest $k$ with $P(X \geq k) \leq 0.05$:

| $k$ | $8$ | $9$ | $10$ | $11$ |
| --- | --- | --- | ---- | ---- |
| $P(X \geq k)$ | $0.1280$ | $0.0631$ | $0.0282$ | $0.0115$ |

The rejection region is $\{10, 11, \ldots, 100\}$. The actual probability of a type I error is $0.0282$; because of the discrete distribution it lies below $\alpha$.

**Type II error:** suppose the true failure rate is $p = 0.10$. Then $H_0$ is wrongly retained if $X \leq 9$:

$$
\beta = P(X \leq 9 \mid p = 0.10) \approx 0.451
$$

So even a failure rate twice as high goes undetected with 100 boards in 45 % of cases. A larger sample would reduce $\beta$.
:::

:::tip[Example: Two-tailed test]
A coin shows heads 60 times in 100 tosses. Is it unfair at $\alpha = 5\,\%$? $H_0\colon p = 0.5$, $H_1\colon p \neq 0.5$, $X \sim B(100; 0.5)$.

$$
P(X \geq 60) \approx 0.0284 \qquad p\text{-value} = 2 \cdot 0.0284 = 0.0569 > 0.05
$$

$H_0$ is not rejected. A one-tailed test ($H_1\colon p > 0.5$) would have rejected it with the same result. The type of test must therefore be fixed before looking at the data.
:::

### Test for a mean

With a known standard deviation, the standardised deviation of the sample mean is compared with the $z$-values (**z-test**); with unknown $\sigma$, $s$ and the t-distribution are used (**t-test**):

$$
z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}
$$

:::tip[Example]
A filling machine is supposed to fill $\mu_0 = 500\ \text{g}$ on average, $\sigma = 4\ \text{g}$. A sample of 16 packs gives $\bar{x} = 498\ \text{g}$. Two-tailed at $\alpha = 5\,\%$:

$$
z = \frac{498 - 500}{4 / \sqrt{16}} = -2 \qquad \lvert z \rvert = 2 > 1.96
$$

$H_0$ is rejected; the machine has to be readjusted. The p-value is $2 \cdot \Phi(-2) \approx 0.0455$.
:::

## Further reading

- [NIST/SEMATECH e-Handbook of Statistical Methods: Hypothesis Testing](https://www.itl.nist.gov/div898/handbook/prc/section1/prc13.htm)
- [Ronald L. Wasserstein, Nicole A. Lazar: The ASA Statement on p-Values (The American Statistician, 2016)](https://doi.org/10.1080/00031305.2016.1154108)
