---
title: Sequences and Series
description: Explicit and recursive definitions of sequences, arithmetic and geometric sequences and series, sum formulas, infinite geometric series and compound interest.
sidebar:
  order: 1
---

## Sequences

A **sequence** is an ordered list of numbers $\langle a_1, a_2, a_3, \ldots \rangle$. Mathematically, it is a function that assigns a **term** $a_n$ to every natural number $n$ (the index).

A sequence can be defined in two ways:

- **explicitly** by a formula for the $n$-th term: $a_n = 2n + 1$ gives $3, 5, 7, 9, \ldots$
- **recursively** by the initial value and a rule for calculating a term from the previous one: $a_1 = 3$, $a_{n+1} = a_n + 2$

Recursive definitions correspond to loops in programs and are well suited to spreadsheets. With the explicit definition, any term can be calculated directly.

:::tip[Example: Fibonacci sequence]
$a_1 = 1$, $a_2 = 1$, $a_{n+2} = a_{n+1} + a_n$ gives $1, 1, 2, 3, 5, 8, 13, 21, \ldots$

Each term is the sum of the two previous ones.
:::

A sequence is called **increasing** if $a_{n+1} \ge a_n$ for all $n$, and **bounded** if all terms lie between two fixed bounds.

## Arithmetic sequences

In an **arithmetic sequence**, the **difference** between two consecutive terms is constant:

$$
a_{n+1} - a_n = d \qquad a_n = a_1 + (n - 1) \cdot d
$$

Each term is the arithmetic mean of its neighbours. Arithmetic sequences describe **linear growth**.

:::tip[Example]
A piggy bank contains €20, and €5 are added every week: $a_n = 20 + (n - 1) \cdot 5$. In week 30, it contains $a_{30} = 20 + 29 \cdot 5 = 165$ euros.
:::

### Arithmetic series

The sum of the first $n$ terms of a sequence is called a **series** (partial sum) $s_n$. For arithmetic sequences:

$$
s_n = \frac{n}{2} \cdot (a_1 + a_n)
$$

:::note[Little Gauss]
According to legend, the young Carl Friedrich Gauss was asked to add the numbers from 1 to 100. He realised that $1 + 100 = 2 + 99 = \ldots = 101$ and that there are 50 such pairs: $s_{100} = 50 \cdot 101 = 5050$.
:::

## Geometric sequences

In a **geometric sequence**, the **ratio** of two consecutive terms is constant:

$$
\frac{a_{n+1}}{a_n} = q \qquad a_n = a_1 \cdot q^{n-1}
$$

Geometric sequences describe **exponential growth** ($q > 1$) or **exponential decay** ($0 < q < 1$). If $q < 0$, the signs alternate (alternating sequence).

:::tip[Example]
A ball bounces back to 80 % of its previous height after each impact. Dropped from a height of 2 m, it only reaches $2 \cdot 0.8^5 \approx 0.66$ m after the 5th impact.
:::

### Geometric series

$$
s_n = a_1 \cdot \frac{q^n - 1}{q - 1} \qquad (q \ne 1)
$$

:::tip[Example: Chessboard]
If you place one grain of rice on the first square of a chessboard, two on the second, four on the third and so on, the board holds a total of

$$
s_{64} = 1 \cdot \frac{2^{64} - 1}{2 - 1} = 2^{64} - 1 \approx 1.8 \cdot 10^{19}
$$

grains of rice – far more than the entire world harvest. Incidentally, $2^{64} - 1$ is also the largest number that can be stored in an unsigned 64-bit variable.
:::

## Limit of a sequence

If the terms of a sequence get arbitrarily close to a number $a$ as $n \to \infty$, $a$ is called the **limit** of the sequence, and the sequence is called **convergent**:

$$
\lim_{n \to \infty} a_n = a
$$

Otherwise, the sequence is **divergent**. A sequence with the limit $0$ is called a **null sequence**.

:::tip[Examples]
- $a_n = \frac{1}{n}$: $\;1, \frac{1}{2}, \frac{1}{3}, \ldots \to 0$ (null sequence)
- $a_n = \frac{2n + 1}{n} = 2 + \frac{1}{n} \to 2$
- $a_n = 0.5^n \to 0$, but $a_n = 2^n$ is divergent.
- $a_n = (-1)^n$ jumps between $-1$ and $1$ and is divergent.
- $a_n = \left(1 + \frac{1}{n}\right)^n \to e \approx 2.71828$
:::

For geometric sequences: $q^n \to 0$ exactly when $\lvert q \rvert < 1$. More about limits can be found under [limits and continuity](/en/mathematics/analysis/limits-and-continuity/).

### Infinite geometric series

If $\lvert q \rvert < 1$, the geometric series also converges, because $q^n \to 0$:

$$
s = \lim_{n \to \infty} s_n = \frac{a_1}{1 - q}
$$

:::tip[Example]
The bouncing ball dropped from 2 m travels the following total distance: 2 m down, then up and down each time.

$$
s = 2 + 2 \cdot \frac{1.6}{1 - 0.8} = 2 + 2 \cdot 8 = 18\ \text{m}
$$

Repeating decimals are also infinite geometric series: $0.\overline{3} = 0.3 + 0.03 + \ldots = \frac{0.3}{1 - 0.1} = \frac{1}{3}$.
:::

## Compound interest

If interest is added to the capital at the end of each period and earns interest itself the following year, the capital grows geometrically. With the initial capital $K_0$ and the interest rate $i = \frac{p}{100}$, after $n$ years:

$$
K_n = K_0 \cdot (1 + i)^n
$$

The factor $q = 1 + i$ is called the **accumulation factor**. Conversely, the **present value** of an amount $K_n$ due in $n$ years is $K_0 = \frac{K_n}{(1 + i)^n}$ (**discounting**).

:::tip[Example]
€5000 earns 3 % interest per year for 8 years:

$$
K_8 = 5000 \cdot 1.03^8 \approx 6333.85\ \text{€}
$$

How long does it take for the capital to double?

$$
1.03^n = 2 \;\Rightarrow\; n = \frac{\ln 2}{\ln 1.03} \approx 23.4\ \text{years}
$$
:::

:::note
In Austria, **capital gains tax** (Kapitalertragsteuer, KESt) of currently 25 % is withheld from interest income. The effective interest rate is therefore lower than the agreed rate.
:::

### Interest compounded several times a year

If interest is compounded $m$ times a year (e.g. monthly, $m = 12$), the **equivalent** interest rate $i_m$ is used, which gives the same capital after one year as the annual interest rate $i$:

$$
(1 + i_m)^m = 1 + i \qquad\Rightarrow\qquad i_m = \sqrt[m]{1 + i} - 1
$$

### Annuities

If equal amounts $R$ are paid in regularly (an **annuity**), the final value after $n$ payments at the end of each period is a geometric series:

$$
E = R \cdot \frac{q^n - 1}{q - 1}
$$

:::tip[Example]
Someone pays €1200 into a savings account at 2.5 % at the end of each year for 10 years:

$$
E = 1200 \cdot \frac{1.025^{10} - 1}{0.025} \approx 13\,444.06\ \text{€}
$$

€12,000 was paid in, the rest is interest.
:::
