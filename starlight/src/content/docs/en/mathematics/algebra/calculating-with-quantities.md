---
title: Calculating with Numbers and Quantities
description: Estimation, rounding, percentages, converting units as well as absolute and relative error.
sidebar:
  order: 5
---

## Quantities and units

In engineering, you rarely calculate with pure numbers but with **physical quantities**. A quantity consists of a **numerical value** and a **unit**:

$$
U = 230\ \text{V} \qquad \text{(quantity = numerical value} \cdot \text{unit)}
$$

The **International System of Units (SI)** defines seven base units: metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol) and candela (cd). All other units can be derived from them, for example $1\ \text{N} = 1\ \frac{\text{kg} \cdot \text{m}}{\text{s}^2}$ or $1\ \text{V} = 1\ \frac{\text{W}}{\text{A}}$.

### Converting units

To convert, replace the unit by its value in the target unit. For units of area and volume, the conversion factor is squared or cubed.

| Quantity | Conversion                                                          |
| -------- | ------------------------------------------------------------------- |
| Length   | $1\ \text{km} = 1000\ \text{m}$, $1\ \text{m} = 100\ \text{cm} = 1000\ \text{mm}$ |
| Area     | $1\ \text{m}^2 = 100^2\ \text{cm}^2 = 10\,000\ \text{cm}^2$, $1\ \text{ha} = 10\,000\ \text{m}^2$ |
| Volume   | $1\ \text{m}^3 = 1000\ \text{dm}^3 = 1000\ \text{L}$, $1\ \text{L} = 1\ \text{dm}^3$ |
| Time     | $1\ \text{h} = 60\ \text{min} = 3600\ \text{s}$                     |
| Speed    | $1\ \frac{\text{m}}{\text{s}} = 3.6\ \frac{\text{km}}{\text{h}}$    |
| Data     | $1\ \text{byte} = 8\ \text{bits}$                                   |

:::tip[Example]
How many seconds does it take to download a $1.5\ \text{GB}$ file at a data rate of $100\ \text{Mbit/s}$?

$$
t = \frac{1.5\ \text{GB}}{100\ \text{Mbit/s}} = \frac{1.5 \cdot 10^9 \cdot 8\ \text{bit}}{100 \cdot 10^6\ \text{bit/s}} = \frac{12 \cdot 10^9}{10^8}\ \text{s} = 120\ \text{s}
$$
:::

:::tip[Tip]
Always calculate with units. If the unit of the result is wrong, there is a mistake in the calculation. This **unit check** reveals many formula errors.
:::

## Rounding and estimation

**Rounding:** If the first digit to be dropped is $0$ to $4$, round down; if it is $5$ to $9$, round up. $3.14159$ rounded to two decimal places is $3.14$, to three decimal places $3.142$.

A result should not be stated more precisely than the input values. As a rule of thumb, give a result with as many **significant figures** as the least precise input value. All digits starting from the first non-zero digit are significant: $0.00340$ has three significant figures.

When **estimating**, you round the numbers so much that you can calculate in your head. This reveals gross errors such as a misplaced decimal point.

:::tip[Example]
$\dfrac{48.7 \cdot 0.0213}{3.92} \approx \dfrac{50 \cdot 0.02}{4} = \dfrac{1}{4} = 0.25$. The exact value is $0.2646\ldots$, so the calculator result is plausible.
:::

## Percentages

"Percent" means "per hundred": $1\,\% = \frac{1}{100} = 0.01$. Similarly, $1\,‰ = \frac{1}{1000}$ (per mille). There are three quantities in percentage calculations:

$$
\text{percentage value} = \text{base value} \cdot \text{rate} \qquad W = G \cdot \frac{p}{100}
$$

:::tip[Examples]
- **Percentage value:** 20 % of €350 is $350 \cdot 0.2 = 70$ euros.
- **Rate:** 42 of 56 students passed: $\frac{42}{56} = 0.75 = 75\,\%$.
- **Base value:** 30 % of an amount is €48. The amount is $\frac{48}{0.3} = 160$ euros.
:::

### Increasing and decreasing by a percentage

An increase by $p\,\%$ corresponds to multiplying by the **growth factor** $1 + \frac{p}{100}$, a decrease by $p\,\%$ to multiplying by $1 - \frac{p}{100}$.

:::tip[Example: VAT]
A laptop costs €800 net. With 20 % VAT, it costs $800 \cdot 1.2 = 960$ euros gross.

The other way round: an item costs €54 gross. The net price is $\frac{54}{1.2} = 45$ euros, **not** $54 \cdot 0.8 = 43.20$ euros, because the 20 % refers to the net price.
:::

:::caution
Percentages must not simply be added up. If a price first rises by 10 % and then falls by 10 %, it is **lower** than before: $1.1 \cdot 0.9 = 0.99$, i.e. a decrease of 1 %.

Also distinguish between **percent** and **percentage points**: if an interest rate rises from 2 % to 3 %, that is an increase of one percentage point, but of 50 %.
:::

Repeated percentage changes lead to exponential growth, for example in [compound interest](/en/mathematics/analysis/sequences-and-series/#compound-interest).

## Absolute and relative error

Every measured or rounded value deviates from the true value. If $x$ is the true value and $\tilde{x}$ the approximation:

$$
\text{absolute error: } \Delta x = \tilde{x} - x \qquad \text{relative error: } \delta x = \frac{\Delta x}{x}
$$

Often the absolute values of the errors are used. The relative error has no unit and is usually given as a percentage. It is more meaningful than the absolute error because it relates the deviation to the size of the value.

:::tip[Example]
A distance of 2 km is measured 1 m wrong, a screw with a length of 10 mm 1 mm wrong.

- Distance: $\lvert\delta\rvert = \frac{1\ \text{m}}{2000\ \text{m}} = 0.05\,\%$
- Screw: $\lvert\delta\rvert = \frac{1\ \text{mm}}{10\ \text{mm}} = 10\,\%$

Although the absolute error is 1000 times larger for the distance, the measurement of the distance is much more precise.
:::

Measuring instruments often state their accuracy as a relative error, for example "$\pm 1\,\%$ of the reading". A resistance of $470\ \Omega$ measured with such an instrument then lies between $465.3\ \Omega$ and $474.7\ \Omega$.

### Errors in calculations

If you keep calculating with values that contain errors, the errors propagate. For small errors, the following rule of thumb applies:

- For **addition and subtraction**, the **absolute** errors add up.
- For **multiplication and division**, the **relative** errors add up.

:::tip[Example]
A rectangle is $a = (20 \pm 0.1)\ \text{cm}$ long and $b = (10 \pm 0.1)\ \text{cm}$ wide. The relative errors are $0.5\,\%$ and $1\,\%$. The area $A = 200\ \text{cm}^2$ therefore has a relative error of about $1.5\,\%$, i.e. $A \approx (200 \pm 3)\ \text{cm}^2$.
:::

**Subtracting almost equal numbers** is particularly dangerous (cancellation): the absolute errors stay the same, but the result becomes very small, so the relative error grows strongly.
