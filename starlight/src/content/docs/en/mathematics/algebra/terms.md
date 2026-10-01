---
title: Algebraic Expressions
description: "Calculating with algebraic expressions: order of operations, brackets, expanding, factoring out, binomial formulas and algebraic fractions."
sidebar:
  order: 6
---

## What is an algebraic expression?

An **algebraic expression** is a meaningful mathematical expression made of numbers, variables (placeholders such as $x$ or $a$), operators and brackets, for example $3x^2 - 2x + 5$ or $\frac{a + b}{2}$. If you substitute numbers for the variables, you get the value of the expression. Expressions do not contain an equals sign. If two expressions are joined with $=$, you get an [equation](/en/mathematics/algebra/equations-and-inequalities/).

The set of numbers that may be substituted for a variable is called the **domain**. In $\frac{1}{x - 2}$, $x$ must not be $2$, because you cannot divide by $0$: $D = \mathbb{R} \setminus \{2\}$.

## Order of operations

1. Brackets first (from the inside out)
2. Powers and roots
3. Multiplication and division before addition and subtraction
4. Otherwise from left to right

:::tip[Example]
$$
2 + 3 \cdot (4 - 1)^2 = 2 + 3 \cdot 3^2 = 2 + 3 \cdot 9 = 2 + 27 = 29
$$
:::

## Adding and subtracting

Only **like terms**, that is, terms with the same variables to the same powers, can be combined:

$$
5x^2 + 3x - 2x^2 + 4 - x = 3x^2 + 2x + 4
$$

$x^2$ and $x$ are not like terms and stay separate.

**Removing brackets:** If there is a plus in front of the bracket, the signs stay the same. If there is a minus in front of it, all signs inside the bracket change:

$$
a - (b - c + d) = a - b + c - d
$$

## Multiplying

When **expanding**, every term of one bracket is multiplied by every term of the other bracket (distributive law):

$$
\begin{aligned}
3x(2x - 5) &= 6x^2 - 15x \\
(2a + 3)(a - 4) &= 2a^2 - 8a + 3a - 12 = 2a^2 - 5a - 12
\end{aligned}
$$

**Factoring out** (factorising) is the reverse: a common factor of all terms is moved in front of the bracket.

$$
12x^3 - 8x^2 + 4x = 4x(3x^2 - 2x + 1)
$$

## Binomial formulas

The three **binomial formulas** are shortcuts for frequently occurring products:

$$
\begin{aligned}
(a + b)^2 &= a^2 + 2ab + b^2 \\
(a - b)^2 &= a^2 - 2ab + b^2 \\
(a + b)(a - b) &= a^2 - b^2
\end{aligned}
$$

:::tip[Examples]
$$
\begin{aligned}
(3x + 2)^2 &= 9x^2 + 12x + 4 \\
(5 - y)^2 &= 25 - 10y + y^2 \\
(2a + 7)(2a - 7) &= 4a^2 - 49
\end{aligned}
$$

Applied in reverse, they help with factorising: $x^2 - 16 = (x + 4)(x - 4)$ and $x^2 + 6x + 9 = (x + 3)^2$.

Mental arithmetic also becomes easier: $49 \cdot 51 = (50 - 1)(50 + 1) = 2500 - 1 = 2499$.
:::

:::caution
A common mistake is $(a + b)^2 = a^2 + b^2$. The mixed term $2ab$ must not be forgotten: $(2 + 3)^2 = 25$, but $2^2 + 3^2 = 13$.
:::

Higher powers of a binomial are calculated with the coefficients from **Pascal's triangle**, in which each number is the sum of the two numbers above it:

$$
\begin{array}{c}
1 \\
1 \quad 1 \\
1 \quad 2 \quad 1 \\
1 \quad 3 \quad 3 \quad 1 \\
1 \quad 4 \quad 6 \quad 4 \quad 1
\end{array}
$$

For example, $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$.

## Algebraic fractions

An **algebraic fraction** contains variables in the denominator. The domain excludes all values for which the denominator becomes $0$. Calculations work like with ordinary fractions:

- **Cancelling:** Divide the numerator and the denominator by the same factor. To do so, they must be factorised first. You cannot cancel terms of a sum.
- **Adding/subtracting:** Bring the fractions to a common denominator (preferably the least common multiple of the denominators).
- **Multiplying:** numerator times numerator, denominator times denominator.
- **Dividing:** Multiply by the reciprocal.

:::tip[Examples]
**Cancelling:**

$$
\frac{x^2 - 9}{2x + 6} = \frac{(x + 3)(x - 3)}{2(x + 3)} = \frac{x - 3}{2} \qquad (x \ne -3)
$$

**Adding:**

$$
\frac{2}{x} + \frac{3}{x + 1} = \frac{2(x + 1) + 3x}{x(x + 1)} = \frac{5x + 2}{x(x + 1)} \qquad (x \ne 0,\ x \ne -1)
$$

**Dividing:**

$$
\frac{a^2}{b} : \frac{a}{b^3} = \frac{a^2}{b} \cdot \frac{b^3}{a} = a b^2
$$
:::

:::caution
$\dfrac{x + 3}{3} \ne x$. Only factors can be cancelled, not terms of a sum.
:::
