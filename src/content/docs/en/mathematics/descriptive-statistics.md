---
title: Descriptive Statistics
description: "Describing one-dimensional data: types of variables, absolute and relative frequencies, charts, measures of central tendency, measures of spread and box plots."
sidebar:
  order: 4
---

**Descriptive statistics** summarises large amounts of data clearly, with tables, charts and a few meaningful key figures. It answers questions such as "How long does a request to the server typically take?" or "How much do the measurements vary?".

## Basic terms

- **Population:** all objects about which a statement is to be made, e.g. all students of a school.
- **Sample:** the subset that is actually examined.
- **Variable:** the property being examined, e.g. height or favourite subject. The possible values are called categories or values.

| Type of variable              | Description                                    | Examples                              |
| ----------------------------- | ---------------------------------------------- | ------------------------------------- |
| nominal (qualitative)     | categories without an order                    | operating system, gender, colour      |
| ordinal (qualitative)     | categories with an order                       | school grades, clothing sizes S/M/L   |
| metric (quantitative)     | numerical values, differences are meaningful   | temperature, file size, response time |

Metric variables can be **discrete** (only individual values, e.g. number of siblings) or continuous (any value in an interval, e.g. length).

## Frequencies

For $n$ observations, the **absolute frequency** $H$ is the number of times a value occurs. The relative frequency is its share of all observations:

$$
h = \frac{H}{n}
$$

The relative frequencies of all values add up to $1 = 100\,\%$. The **cumulative** frequency states how many values are less than or equal to a given value.

:::tip[Example: Grades of a test]
In Austria, grades range from 1 (excellent) to 5 (fail).

| Grade | absolute frequency | relative frequency | cumulative relative frequency |
| ----- | ------------------ | ------------------ | ----------------------------- |
| 1     | 4                  | 16 %               | 16 %                          |
| 2     | 6                  | 24 %               | 40 %                          |
| 3     | 8                  | 32 %               | 72 %                          |
| 4     | 5                  | 20 %               | 92 %                          |
| 5     | 2                  | 8 %                | 100 %                         |
| Total | 25         | 100 %          |                               |
:::

For continuous variables, the values are grouped into **classes**, for example response times of 0–100 ms, 100–200 ms and so on.

## Charts

| Chart                | suitable for                                                    |
| -------------------- | --------------------------------------------------------------- |
| Column/bar chart     | frequencies of categories or discrete values                    |
| Pie chart            | shares of a whole (few categories)                              |
| Histogram            | grouped continuous data; the area of the rectangles corresponds to the frequency |
| Line chart           | changes over time                                               |
| Box plot             | central tendency and spread at a glance, comparing several data sets |

:::caution
Charts can be misleading: if the $y$-axis does not start at $0$, small differences look huge. Always check the axis labels.
:::

## Measures of central tendency

Measures of central tendency describe where the "middle" of the data lies.

### Arithmetic mean

$$
\bar{x} = \frac{x_1 + x_2 + \ldots + x_n}{n} = \frac{1}{n} \sum_{i=1}^{n} x_i
$$

In a frequency table, each value is weighted by its frequency: $\bar{x} = \frac{1}{n}\sum H_i x_i$. In the grades example, $\bar{x} = \frac{1 \cdot 4 + 2 \cdot 6 + 3 \cdot 8 + 4 \cdot 5 + 5 \cdot 2}{25} = \frac{70}{25} = 2.8$.

### Median

The **median** $\tilde{x}$ is the value in the middle of the list sorted by size. At least half of the values are less than or equal to the median, at least half are greater than or equal to it.

- If $n$ is odd, it is the middle value.
- If $n$ is even, it is the arithmetic mean of the two middle values.

### Mode

The **mode** is the most frequent value. It is the only measure of central tendency for nominal variables.

:::tip[Example: Outliers]
Response times of a server in ms: $\;12,\ 15,\ 14,\ 13,\ 16,\ 15,\ 350$

- Mean: $\bar{x} = \frac{435}{7} \approx 62.1$ ms
- Median (sorted: 12, 13, 14, 15, 15, 16, 350): $\tilde{x} = 15$ ms
- Mode: $15$ ms

The single **outlier** of 350 ms strongly distorts the mean, while the median is not affected. That is why the median is often given for skewed distributions such as incomes or response times.
:::

## Measures of spread

Measures of spread describe how far apart the data are. Two data sets can have the same mean but a completely different spread.

### Range and quartiles

- **Range:** $R = x_{\max} - x_{\min}$. It only depends on the two extreme values and is therefore sensitive to outliers.
- **Quartiles:** The lower quartile $q_1$ divides the sorted data so that at least 25 % of the values are less than or equal to it, the upper quartile $q_3$ accordingly at 75 %. The median is the middle quartile $q_2$.
- **Interquartile range:** $q_3 - q_1$. The middle 50 % of the data lie in this range.

:::note
There are several methods for calculating quartiles, which give slightly different results for small data sets. A common method: determine the median of the lower and of the upper half of the sorted data.
:::

### Variance and standard deviation

The **variance** is the mean squared deviation from the mean, the standard deviation is its square root:

$$
\sigma^2 = \frac{1}{n} \sum_{i=1}^{n} (x_i - \bar{x})^2 \qquad \sigma = \sqrt{\sigma^2}
$$

If the data of a sample are used to estimate the spread of the population, divide by $n - 1$ instead of $n$ (**sample standard deviation** $s$). Calculators usually offer both variants ($\sigma_n$ and $s_{n-1}$).

The standard deviation has the same unit as the data. For approximately normally distributed data, about 68 % of the values lie in the range $\bar{x} \pm \sigma$ and about 95 % in the range $\bar{x} \pm 2\sigma$.

:::tip[Example]
Measurements of a resistor in $\Omega$: $\;98,\ 101,\ 100,\ 99,\ 102$

$$
\bar{x} = 100 \qquad \sigma^2 = \frac{(-2)^2 + 1^2 + 0^2 + (-1)^2 + 2^2}{5} = \frac{10}{5} = 2 \qquad \sigma = \sqrt{2} \approx 1.41\ \Omega
$$
:::

The **coefficient of variation** $\frac{\sigma}{\bar{x}}$ relates the spread to the mean and allows data sets of different orders of magnitude to be compared.

## Box plot

A **box plot** shows the five-number summary $x_{\min}$, $q_1$, $\tilde{x}$, $q_3$ and $x_{\max}$ graphically:

- The box extends from the lower to the upper quartile and contains the middle 50 % of the data.
- A line in the box marks the median.
- The whiskers extend to the smallest and largest values.

The longer the box and whiskers, the larger the spread. If the median is not in the middle of the box, the distribution is **skewed**. Box plots are especially suitable for comparing several data sets side by side.

:::tip[Example]
Sorted data: $\;2,\ 4,\ 5,\ 7,\ 8,\ 9,\ 11,\ 12,\ 15$

- $x_{\min} = 2$, $x_{\max} = 15$
- Median: $\tilde{x} = 8$ (5th of 9 values)
- lower half $2, 4, 5, 7$: $q_1 = 4.5$
- upper half $9, 11, 12, 15$: $q_3 = 11.5$
- Interquartile range: $11.5 - 4.5 = 7$
:::

Drawing conclusions about the population from samples is the subject of **inferential statistics** with probability distributions, confidence intervals and hypothesis tests.
