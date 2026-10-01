---
title: Exponential- und Logarithmusfunktionen
description: Exponentielles Wachstum und exponentielle Abnahme, die Eulersche Zahl, Halbwerts- und Verdopplungszeit, Logarithmusfunktionen, Exponentialgleichungen und logarithmische Skalen.
sidebar:
  order: 5
---

## Exponentialfunktionen

Bei einer **Exponentialfunktion** steht die Variable in der Hochzahl:

$$
f(x) = c \cdot a^x \qquad (a > 0,\ a \ne 1)
$$

- $c = f(0)$ ist der Anfangswert,
- $a$ ist der Wachstumsfaktor: Erhöht man $x$ um $1$, wird der Funktionswert mit $a$ multipliziert.

| Wachstumsfaktor | Verlauf                                  |
| --------------- | ---------------------------------------- |
| $a > 1$         | exponentielles Wachstum (streng monoton steigend) |
| $0 < a < 1$     | exponentielle Abnahme (streng monoton fallend)    |

Alle Graphen von $a^x$ gehen durch $(0 \mid 1)$, liegen oberhalb der $x$-Achse und haben die $x$-Achse als Asymptote.

### Linear oder exponentiell?

| Lineares Wachstum                      | Exponentielles Wachstum                   |
| -------------------------------------- | ----------------------------------------- |
| pro Schritt wird derselbe Betrag addiert | pro Schritt wird mit demselben Faktor multipliziert |
| $f(x) = k \cdot x + d$                 | $f(x) = c \cdot a^x$                      |
| konstante Differenzen in der Wertetabelle | konstante Quotienten in der Wertetabelle |

Bei einer prozentuellen Änderung um $p\,\%$ pro Zeiteinheit ist der Wachstumsfaktor $a = 1 \pm \frac{p}{100}$.

:::tip[Beispiel]
Die Anzahl der Nutzerinnen und Nutzer einer App steigt jeden Monat um 15 %. Zu Beginn sind es 2000.

$$
N(t) = 2000 \cdot 1{,}15^t \qquad N(12) = 2000 \cdot 1{,}15^{12} \approx 10\,700
$$
:::

## Die Eulersche Zahl und die natürliche Exponentialfunktion

Besonders wichtig ist die Exponentialfunktion zur Basis $e \approx 2{,}71828$ (**Eulersche Zahl**). Sie hat die besondere Eigenschaft, dass ihre [Ableitung](/de/mathematics/analysis/differential-calculus/) wieder sie selbst ist: $(e^x)' = e^x$.

Deshalb schreibt man Wachstums- und Zerfallsprozesse meist in der Form

$$
f(t) = c \cdot e^{\lambda t}
$$

Dabei ist $\lambda$ die **Wachstumskonstante** ($\lambda > 0$) bzw. Zerfallskonstante ($\lambda < 0$). Jede Exponentialfunktion lässt sich so umschreiben, weil $a^t = e^{\ln(a) \cdot t}$.

## Verdopplungszeit und Halbwertszeit

Die **Verdopplungszeit** $T_2$ ist die Zeit, nach der sich ein exponentiell wachsender Wert verdoppelt hat. Die Halbwertszeit $T_{1/2}$ ist die Zeit, nach der sich ein exponentiell abnehmender Wert halbiert hat. Beide hängen nicht vom Anfangswert ab:

$$
T_2 = \frac{\ln 2}{\lambda} \qquad T_{1/2} = \frac{\ln 2}{\lvert\lambda\rvert}
$$

:::tip[Beispiel: Entladung eines Kondensators]
Die Spannung an einem Kondensator, der über einen Widerstand entladen wird, ist

$$
u(t) = U_0 \cdot e^{-\frac{t}{\tau}} \qquad \tau = R \cdot C
$$

Mit $R = 10\ \text{k}\Omega$ und $C = 100\ \mu\text{F}$ ist die **Zeitkonstante** $\tau = 1\ \text{s}$. Nach $\tau$ ist die Spannung auf $e^{-1} \approx 37\,\%$ gesunken, nach $5\tau$ auf unter $1\,\%$. Der Kondensator gilt dann als entladen.

Die Halbwertszeit ist $T_{1/2} = \tau \cdot \ln 2 \approx 0{,}69\ \text{s}$.
:::

### Begrenztes Wachstum

Viele Vorgänge nähern sich einer **Sättigungsgrenze** $S$, zum Beispiel die Temperatur eines Getränks im Kühlschrank oder die Spannung beim Laden eines Kondensators:

$$
f(t) = S - (S - f_0) \cdot e^{-k t}
$$

Die Differenz zur Grenze nimmt dabei exponentiell ab.

## Logarithmusfunktionen

Die **Logarithmusfunktion** $f(x) = \log_a x$ ist die [Umkehrfunktion](/de/mathematics/functions/functions/#umkehrfunktion) der Exponentialfunktion $a^x$. Ihr Graph entsteht durch Spiegelung an der Geraden $y = x$.

- Definitionsmenge: $D = \mathbb{R}^+$ (nur positive Zahlen)
- Nullstelle bei $x = 1$, weil $a^0 = 1$
- senkrechte Asymptote $x = 0$
- wächst für $a > 1$ sehr langsam: $\lg 1\,000\,000 = 6$

Die Rechenregeln für Logarithmen findest du bei [Potenzen und Wurzeln](/de/mathematics/algebra/powers-and-roots/#logarithmen).

## Exponentialgleichungen

Steht die Unbekannte in der Hochzahl, isoliert man die Potenz und **logarithmiert** beide Seiten:

:::tip[Beispiel: Wann sind es 50 000 Nutzer?]
$$
\begin{aligned}
2000 \cdot 1{,}15^t &= 50\,000 \\
1{,}15^t &= 25 && \mid \ln \\
t \cdot \ln 1{,}15 &= \ln 25 \\
t &= \frac{\ln 25}{\ln 1{,}15} \approx 23{,}0
\end{aligned}
$$

Nach etwa 23 Monaten sind es 50 000 Nutzerinnen und Nutzer.
:::

:::tip[Beispiel: Zeitkonstante bestimmen]
Ein Kondensator entlädt sich in 3 ms von 12 V auf 4 V. Wie groß ist $\tau$?

$$
4 = 12 \cdot e^{-\frac{3}{\tau}} \;\Rightarrow\; \frac{1}{3} = e^{-\frac{3}{\tau}} \;\Rightarrow\; \ln\frac{1}{3} = -\frac{3}{\tau} \;\Rightarrow\; \tau = \frac{3}{\ln 3} \approx 2{,}73\ \text{ms}
$$
:::

## Logarithmische Skalierung

Überstreichen Werte viele Größenordnungen, stellt man sie auf einer **logarithmischen Skala** dar. Dort haben gleiche Faktoren gleiche Abstände: Der Abstand von 1 zu 10 ist genauso groß wie von 10 zu 100 oder von 100 zu 1000 (eine Dekade).

- Bei einfach logarithmischer Darstellung ist nur die $y$-Achse logarithmisch. Exponentialfunktionen erscheinen dann als Geraden.
- Bei doppelt logarithmischer Darstellung sind beide Achsen logarithmisch. Dann erscheinen Potenzfunktionen als Geraden, deren Steigung die Hochzahl ist.

So kann man an Messdaten leicht erkennen, ob ein exponentieller oder ein Potenzzusammenhang vorliegt.

### Dezibel

In der Nachrichten- und Elektrotechnik werden Verhältnisse in **Dezibel** (dB) angegeben:

$$
L = 10 \cdot \lg \frac{P_2}{P_1}\ \text{dB} \qquad L = 20 \cdot \lg \frac{U_2}{U_1}\ \text{dB}
$$

Weil die Leistung proportional zum Quadrat der Spannung ist, steht bei Spannungsverhältnissen der Faktor 20.

| Leistungsverhältnis | Pegel      |
| ------------------- | ---------- |
| $2$                 | $\approx 3\ \text{dB}$ |
| $10$                | $10\ \text{dB}$ |
| $100$               | $20\ \text{dB}$ |
| $\frac{1}{2}$       | $\approx -3\ \text{dB}$ |

Weitere logarithmische Skalen sind der Schalldruckpegel, die Richterskala für Erdbeben und der pH-Wert. In **Bode-Diagrammen** wird der Frequenzgang von Filtern mit logarithmischer Frequenzachse und Verstärkung in dB dargestellt.

:::tip[Beispiel]
Ein Verstärker hebt ein Signal von 20 mV auf 2 V an. Die Verstärkung ist

$$
20 \cdot \lg \frac{2}{0{,}02} = 20 \cdot \lg 100 = 40\ \text{dB}
$$
:::
