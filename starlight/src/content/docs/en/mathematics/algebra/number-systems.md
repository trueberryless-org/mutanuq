---
title: Number Systems
description: Positional number systems with decimal, binary, octal and hexadecimal numbers, conversions, binary arithmetic as well as fixed-point and floating-point representation.
sidebar:
  order: 2
---

## Positional number systems

In a **positional number system**, the value of a digit depends on its position in the number. Each position has the value of a power of the base $b$. A number with the digits $z_n \dots z_1 z_0$ has the value

$$
z_n \cdot b^n + \dots + z_1 \cdot b^1 + z_0 \cdot b^0
$$

Base $b$ requires exactly $b$ different digits: $0$ to $b - 1$. To avoid confusion, the base is written as a subscript, for example $1011_2$ or $\text{FF}_{16}$.

| System          | Base  | Digits                    | Used for                                     |
| --------------- | ----- | ------------------------- | -------------------------------------------- |
| Decimal         | 10    | 0–9                       | everyday life                                |
| Binary          | 2     | 0, 1                      | internal representation in computers         |
| Octal           | 8     | 0–7                       | file permissions on Unix (`chmod 755`)       |
| Hexadecimal     | 16    | 0–9, A (10) to F (15)     | memory addresses, colours (`#FF8800`), registers |

:::tip[Example]
$$
2025_{10} = 2 \cdot 10^3 + 0 \cdot 10^2 + 2 \cdot 10^1 + 5 \cdot 10^0
$$
:::

## Converting to decimal

Multiply each digit by its place value and add up the results.

:::tip[Examples]
$$
\begin{aligned}
1011\,0101_2 &= 1 \cdot 2^7 + 0 \cdot 2^6 + 1 \cdot 2^5 + 1 \cdot 2^4 + 0 \cdot 2^3 + 1 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0 \\
&= 128 + 32 + 16 + 4 + 1 = 181_{10} \\[1em]
\text{2F}_{16} &= 2 \cdot 16^1 + 15 \cdot 16^0 = 32 + 15 = 47_{10} \\[1em]
755_8 &= 7 \cdot 64 + 5 \cdot 8 + 5 = 493_{10}
\end{aligned}
$$
:::

## Converting from decimal

For integers, the **repeated division method** is used: divide the number by the target base using integer division until the quotient is 0. The remainders, read from bottom to top, are the digits of the result.

:::tip[Example: 181 to binary]
| Division    | Quotient | Remainder |
| ----------- | -------- | --------- |
| $181 : 2$   | 90       | 1         |
| $90 : 2$    | 45       | 0         |
| $45 : 2$    | 22       | 1         |
| $22 : 2$    | 11       | 0         |
| $11 : 2$    | 5        | 1         |
| $5 : 2$     | 2        | 1         |
| $2 : 2$     | 1        | 0         |
| $1 : 2$     | 0        | 1         |

Read from bottom to top: $181_{10} = 1011\,0101_2$.
:::

For **fractional parts**, repeatedly multiply the fractional part by the base. The integer parts of the results, read from top to bottom, are the digits after the point.

:::tip[Example: 0.625 to binary]
$$
\begin{aligned}
0.625 \cdot 2 &= 1.25 \quad\rightarrow 1 \\
0.25 \cdot 2 &= 0.5 \quad\;\;\rightarrow 0 \\
0.5 \cdot 2 &= 1.0 \quad\;\;\rightarrow 1
\end{aligned}
$$

So $0.625_{10} = 0.101_2$.
:::

:::caution
Many decimal fractions cannot be represented exactly in binary. For example, $0.1_{10} = 0.0\overline{0011}_2$ is repeating. That is why `0.1 + 0.2` does not give exactly `0.3` in most programming languages, but `0.30000000000000004`.
:::

## Converting between binary, octal and hexadecimal

Because $8 = 2^3$ and $16 = 2^4$, each octal digit corresponds to exactly **three** and each hexadecimal digit to exactly four binary digits. So the binary number is split into groups of three or four (a nibble), starting from the right, and each group is translated separately.

| Binary | Hex | Binary | Hex |
| ------ | --- | ------ | --- |
| 0000   | 0   | 1000   | 8   |
| 0001   | 1   | 1001   | 9   |
| 0010   | 2   | 1010   | A   |
| 0011   | 3   | 1011   | B   |
| 0100   | 4   | 1100   | C   |
| 0101   | 5   | 1101   | D   |
| 0110   | 6   | 1110   | E   |
| 0111   | 7   | 1111   | F   |

:::tip[Example]
$$
\underbrace{1011}_{\text{B}}\;\underbrace{0101}_{5}{}_2 = \text{B5}_{16}
\qquad
\underbrace{010}_{2}\;\underbrace{110}_{6}\;\underbrace{101}_{5}{}_2 = 265_8
$$

Both results equal $181_{10}$.
:::

## Binary arithmetic

### Addition

Addition works digit by digit from right to left, just like in decimal. Here $1_2 + 1_2 = 10_2$, so a **carry** is produced.

$$
\begin{array}{r}
  0110\,1011 \\
+ 0011\,0110 \\
\hline
  1010\,0001
\end{array}
\qquad (107 + 54 = 161)
$$

### Negative numbers in two's complement

Computers store integers with a fixed number of bits. Negative numbers are usually represented in **two's complement**. This is how to get the representation of $-x$:

1. Write $x$ as a binary number with the given number of bits.
2. Invert all bits (ones' complement).
3. Add $1$.

:::tip[Example: −54 with 8 bits]
$$
54 = 0011\,0110_2 \;\xrightarrow{\text{invert}}\; 1100\,1001_2 \;\xrightarrow{+1}\; 1100\,1010_2 = -54
$$

The most significant bit of a negative number is always $1$. With 8 bits, the numbers from $-128$ to $+127$ can be represented.
:::

The advantage: a subtraction can be carried out as the addition of the two's complement. $107 - 54$ becomes $0110\,1011_2 + 1100\,1010_2 = 1\,0011\,0101_2$. The carry beyond the eighth bit is discarded, leaving $0011\,0101_2 = 53$.

### Value ranges

| Data type (C#) | Bits | unsigned             | signed (two's complement)          |
| -------------- | ---- | -------------------- | ---------------------------------- |
| `byte`/`sbyte` | 8    | $0$ to $255$         | $-128$ to $127$                    |
| `ushort`/`short` | 16 | $0$ to $65\,535$     | $-32\,768$ to $32\,767$            |
| `uint`/`int`   | 32   | $0$ to $2^{32} - 1$  | $-2^{31}$ to $2^{31} - 1$          |

In general: with $n$ bits, $2^n$ different values can be represented.

## Fixed-point and floating-point representation

### Fixed-point representation

In **fixed-point representation**, the number of bits for the integer part and for the fractional part is fixed. It is simple and fast but has a small value range. It is used, for example, on microcontrollers without a floating-point unit or for amounts of money that are stored internally in cents.

### Floating-point representation

For very large and very small numbers, **floating-point representation** is used. It corresponds to scientific notation such as $6.022 \cdot 10^{23}$:

$$
x = (-1)^S \cdot M \cdot 2^E
$$

- $S$: sign bit ($0$ = positive, $1$ = negative)
- $M$: mantissa (significand), the significant digits
- $E$: exponent

According to the **IEEE 754** standard, a single-precision number (`float`) consists of 32 bits: 1 sign bit, 8 exponent bits and 23 mantissa bits. A double-precision number (`double`) has 64 bits: 1 sign bit, 11 exponent bits and 52 mantissa bits. The mantissa is normalised so that there is always a $1$ before the point, which does not need to be stored. The exponent is stored with a bias ($127$ for `float`) so that no negative exponents have to be encoded.

:::tip[Example: 13.25 as a float]
1. Convert to binary: $13.25_{10} = 1101.01_2$
2. Normalise: $1101.01_2 = 1.10101_2 \cdot 2^3$
3. Sign: $S = 0$
4. Exponent with bias: $3 + 127 = 130 = 1000\,0010_2$
5. Mantissa without the leading $1$: $1010\,1000\,0000\ldots$

Result: `0 10000010 10101000000000000000000`
:::

Floating-point numbers only have a limited number of significant digits (`float` about 7, `double` about 15–16 decimal digits). This causes rounding errors, so floating-point numbers should never be compared with `==` in code. Instead, check whether their difference is smaller than a tolerance.
