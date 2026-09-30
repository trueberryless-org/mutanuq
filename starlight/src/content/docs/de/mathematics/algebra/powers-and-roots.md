---
title: Potenzen und Wurzeln
description: Potenzen mit natürlichen, ganzen und rationalen Hochzahlen, Rechenregeln, Gleitkommaschreibweise, Wurzeln und Logarithmen.
sidebar:
  order: 4
---

## Potenzen mit natürlichen Hochzahlen

Eine **Potenz** ist eine verkürzte Schreibweise für die wiederholte Multiplikation desselben Faktors:

$$
a^n = \underbrace{a \cdot a \cdot \ldots \cdot a}_{n \text{ Faktoren}}
$$

$a$ heißt **Basis**, $n$ Hochzahl (Exponent) und $a^n$ Potenz. Es gilt $a^1 = a$.

:::caution
Die Hochzahl bezieht sich nur auf das unmittelbar davorstehende Zeichen: $-3^2 = -(3 \cdot 3) = -9$, aber $(-3)^2 = (-3) \cdot (-3) = 9$. Taschenrechner und Programmiersprachen halten sich an diese Regel.
:::

## Rechenregeln

Für $a, b \ne 0$ und beliebige Hochzahlen $m, n$ gilt:

| Regel                          | Formel                                      | Beispiel                             |
| ------------------------------ | ------------------------------------------- | ------------------------------------ |
| Multiplikation gleicher Basen  | $a^m \cdot a^n = a^{m+n}$                   | $2^3 \cdot 2^4 = 2^7$                |
| Division gleicher Basen        | $\dfrac{a^m}{a^n} = a^{m-n}$                | $\dfrac{x^5}{x^2} = x^3$             |
| Potenzieren einer Potenz       | $(a^m)^n = a^{m \cdot n}$                   | $(10^2)^3 = 10^6$                    |
| Multiplikation gleicher Hochzahlen | $a^n \cdot b^n = (a \cdot b)^n$         | $2^5 \cdot 5^5 = 10^5$               |
| Division gleicher Hochzahlen   | $\dfrac{a^n}{b^n} = \left(\dfrac{a}{b}\right)^n$ | $\dfrac{6^3}{3^3} = 2^3$        |

:::caution
Für Summen gibt es keine solche Regel: $(a + b)^2 \ne a^2 + b^2$ und $a^m + a^n \ne a^{m+n}$. Summen potenziert man mit den [binomischen Formeln](/de/mathematics/algebra/terms/#binomische-formeln).
:::

## Null und negative Hochzahlen

Damit die Rechenregeln auch für die Division $\frac{a^n}{a^n}$ und $\frac{a^m}{a^n}$ mit $m < n$ gelten, definiert man für $a \ne 0$:

$$
a^0 = 1 \qquad a^{-n} = \frac{1}{a^n}
$$

:::tip[Beispiele]
$$
5^0 = 1 \qquad 2^{-3} = \frac{1}{2^3} = \frac{1}{8} \qquad \left(\frac{2}{3}\right)^{-2} = \left(\frac{3}{2}\right)^2 = \frac{9}{4} \qquad \frac{x^2}{x^5} = x^{-3} = \frac{1}{x^3}
$$
:::

## Zehnerpotenzen und Gleitkommaschreibweise

Sehr große und sehr kleine Zahlen schreibt man in der **Gleitkommaschreibweise** (wissenschaftliche Schreibweise) als $a \cdot 10^n$ mit $1 \le \lvert a \rvert < 10$. Für die technische Schreibweise wählt man Hochzahlen, die Vielfache von $3$ sind, weil diese den SI-Vorsilben entsprechen.

| Vorsilbe | Zeichen | Faktor     | Vorsilbe | Zeichen | Faktor      |
| -------- | ------- | ---------- | -------- | ------- | ----------- |
| Kilo     | k       | $10^3$     | Milli    | m       | $10^{-3}$   |
| Mega     | M       | $10^6$     | Mikro    | µ       | $10^{-6}$   |
| Giga     | G       | $10^9$     | Nano     | n       | $10^{-9}$   |
| Tera     | T       | $10^{12}$  | Piko     | p       | $10^{-12}$  |
| Peta     | P       | $10^{15}$  | Femto    | f       | $10^{-15}$  |

:::tip[Beispiel]
Die Lichtgeschwindigkeit beträgt $c \approx 300\,000\,000\ \text{m/s} = 3 \cdot 10^8\ \text{m/s}$. Ein Kondensator mit $0{,}000\,000\,047\ \text{F}$ hat eine Kapazität von $47 \cdot 10^{-9}\ \text{F} = 47\ \text{nF}$.
:::

:::note
In der Informatik bezeichnen Kilo, Mega und Giga nach SI-Norm ebenfalls $10^3$, $10^6$ und $10^9$. Für die Zweierpotenzen $2^{10} = 1024$, $2^{20}$ und $2^{30}$ gibt es die **Binärpräfixe** Kibi (Ki), Mebi (Mi) und Gibi (Gi). $1\ \text{KiB} = 1024\ \text{Byte}$, aber $1\ \text{kB} = 1000\ \text{Byte}$.
:::

## Wurzeln

Die **$n$-te Wurzel** aus einer Zahl $a \ge 0$ ist jene nicht negative Zahl, deren $n$-te Potenz $a$ ergibt:

$$
\sqrt[n]{a} = x \quad\Longleftrightarrow\quad x^n = a, \quad x \ge 0
$$

$a$ heißt **Radikand**, $n$ Wurzelexponent. Für $n = 2$ schreibt man kurz $\sqrt{a}$ (Quadratwurzel).

:::caution
$\sqrt{9} = 3$ und nicht $\pm 3$. Die Gleichung $x^2 = 9$ hat aber zwei Lösungen: $x = \pm\sqrt{9} = \pm 3$.
:::

### Wurzeln als Potenzen

Wurzeln lassen sich als Potenzen mit **rationalen Hochzahlen** schreiben. Damit gelten für Wurzeln dieselben Rechenregeln wie für Potenzen:

$$
\sqrt[n]{a} = a^{\frac{1}{n}} \qquad \sqrt[n]{a^m} = a^{\frac{m}{n}}
$$

:::tip[Beispiele]
$$
\begin{aligned}
\sqrt[3]{8} &= 8^{\frac{1}{3}} = 2 \\
27^{\frac{2}{3}} &= \left(\sqrt[3]{27}\right)^2 = 3^2 = 9 \\
\sqrt{x} \cdot \sqrt[3]{x} &= x^{\frac{1}{2}} \cdot x^{\frac{1}{3}} = x^{\frac{5}{6}} = \sqrt[6]{x^5} \\
16^{-\frac{1}{4}} &= \frac{1}{\sqrt[4]{16}} = \frac{1}{2}
\end{aligned}
$$
:::

### Rechenregeln für Wurzeln

$$
\sqrt[n]{a} \cdot \sqrt[n]{b} = \sqrt[n]{a \cdot b} \qquad \frac{\sqrt[n]{a}}{\sqrt[n]{b}} = \sqrt[n]{\frac{a}{b}} \qquad \sqrt[m]{\sqrt[n]{a}} = \sqrt[m \cdot n]{a}
$$

**Teilweises Wurzelziehen:** $\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2}$

**Rationalmachen des Nenners:** Man erweitert so, dass im Nenner keine Wurzel mehr steht:

$$
\frac{6}{\sqrt{3}} = \frac{6 \cdot \sqrt{3}}{\sqrt{3} \cdot \sqrt{3}} = \frac{6\sqrt{3}}{3} = 2\sqrt{3}
$$

## Logarithmen

Der **Logarithmus** beantwortet die Frage, mit welcher Hochzahl man eine Basis potenzieren muss, um eine bestimmte Zahl zu erhalten:

$$
\log_a b = x \quad\Longleftrightarrow\quad a^x = b \qquad (a > 0,\ a \ne 1,\ b > 0)
$$

Besonders wichtig sind der **dekadische Logarithmus** $\lg x = \log_{10} x$, der natürliche Logarithmus $\ln x = \log_e x$ mit der Eulerschen Zahl $e \approx 2{,}71828$ und in der Informatik der Zweierlogarithmus $\operatorname{ld} x = \log_2 x$.

:::tip[Beispiele]
$\log_2 8 = 3$, weil $2^3 = 8$. $\quad \lg 0{,}001 = -3$, weil $10^{-3} = 0{,}001$. $\quad \ln 1 = 0$, weil $e^0 = 1$.
:::

### Rechenregeln für Logarithmen

| Regel             | Formel                                             |
| ----------------- | -------------------------------------------------- |
| Produkt           | $\log_a (u \cdot v) = \log_a u + \log_a v$         |
| Quotient          | $\log_a \dfrac{u}{v} = \log_a u - \log_a v$        |
| Potenz            | $\log_a u^r = r \cdot \log_a u$                    |
| Basiswechsel      | $\log_a b = \dfrac{\ln b}{\ln a} = \dfrac{\lg b}{\lg a}$ |

Mit dem Basiswechsel lässt sich jeder Logarithmus mit der `ln`- oder `log`-Taste des Taschenrechners berechnen: $\log_2 1000 = \frac{\ln 1000}{\ln 2} \approx 9{,}97$. Man braucht also knapp 10 Bit, um 1000 verschiedene Werte darzustellen.

Logarithmen werden vor allem zum Lösen von [Exponentialgleichungen](/de/mathematics/functions/exponential-and-logarithmic-functions/#exponentialgleichungen) und für [logarithmische Skalen](/de/mathematics/functions/exponential-and-logarithmic-functions/#logarithmische-skalierung) wie Dezibel verwendet.
