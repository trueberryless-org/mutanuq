---
title: Zufallsvariablen
description: "Diskrete und stetige Zufallsvariablen, Wahrscheinlichkeitsverteilung, Verteilungsfunktion, Erwartungswert, Varianz und Standardabweichung mit Rechenregeln."
sidebar:
  order: 2
---

Eine **Zufallsvariable** (Zufallsgröße) $X$ ordnet jedem Ergebnis eines Zufallsexperiments eine Zahl zu, zum Beispiel die Anzahl defekter Bauteile in einer Stichprobe, die Augensumme zweier Würfel oder die Lebensdauer einer Festplatte. Statt mit Ereignissen rechnet man dann mit Zahlen und kann Mittelwert und Streuung angeben.

## Diskrete und stetige Zufallsvariablen

| | diskret | stetig |
| --- | --- | --- |
| Werte | einzelne, abzählbare Werte $x_1, x_2, \ldots$ | beliebige Werte in einem Intervall |
| Beispiele | Anzahl Fehler, Augenzahl, Anzahl Anfragen pro Sekunde | Zeit, Länge, Spannung, Gewicht |
| Beschreibung | Wahrscheinlichkeitsfunktion $P(X = x_i)$ | Dichtefunktion $f(x)$ |
| Wahrscheinlichkeit | Summe | Fläche unter der Dichte (Integral) |

## Wahrscheinlichkeitsverteilung

Die **Wahrscheinlichkeitsverteilung** einer diskreten Zufallsvariable gibt für jeden möglichen Wert $x_i$ die Wahrscheinlichkeit $p_i = P(X = x_i)$ an. Alle Wahrscheinlichkeiten zusammen ergeben $1$: $\sum p_i = 1$. Dargestellt wird sie als Tabelle oder Stabdiagramm (Säulendiagramm).

:::tip[Beispiel: Defekte Chips]
Aus einer Kiste mit 10 Chips, davon 3 defekt, werden 2 ohne Zurücklegen gezogen ([Baumdiagramm](/de/mathematics/stochastics/probability/#baumdiagramme)). $X$ ist die Anzahl der defekten Chips:

| $x_i$ | $0$ | $1$ | $2$ |
| ----- | --- | --- | --- |
| $P(X = x_i)$ | $\frac{42}{90}$ | $\frac{42}{90}$ | $\frac{6}{90}$ |

Probe: $\frac{42 + 42 + 6}{90} = 1$.
:::

## Verteilungsfunktion

Die **Verteilungsfunktion** (kumulative Verteilungsfunktion) gibt die Wahrscheinlichkeit an, dass $X$ höchstens den Wert $x$ annimmt:

$$
F(x) = P(X \leq x)
$$

Bei diskreten Zufallsvariablen ist $F$ eine Treppenfunktion, die an jedem Wert $x_i$ um $p_i$ springt. $F$ ist monoton wachsend, beginnt bei $0$ und endet bei $1$. Mit ihr berechnet man Intervallwahrscheinlichkeiten:

$$
P(a < X \leq b) = F(b) - F(a) \qquad P(X > a) = 1 - F(a)
$$

Im Chip-Beispiel ist $F(0) = \frac{42}{90}$, $F(1) = \frac{84}{90}$ und $F(2) = 1$.

:::caution
Bei diskreten Zufallsvariablen kommt es auf $<$ oder $\leq$ an: $P(X < 2) = P(X \leq 1)$, aber $P(X \leq 2) \neq P(X \leq 1)$. Bei stetigen Zufallsvariablen spielt das keine Rolle, weil $P(X = a) = 0$ ist.
:::

## Erwartungswert

Der **Erwartungswert** $E(X)$ (auch $\mu$) ist der Mittelwert, den man bei sehr vielen Wiederholungen auf lange Sicht erwartet. Jeder Wert wird mit seiner Wahrscheinlichkeit gewichtet:

$$
E(X) = \mu = \sum_{i} x_i \cdot P(X = x_i)
$$

:::tip[Beispiel]
Für die defekten Chips:

$$
E(X) = 0 \cdot \frac{42}{90} + 1 \cdot \frac{42}{90} + 2 \cdot \frac{6}{90} = \frac{54}{90} = 0{,}6
$$

Im Mittel sind unter zwei gezogenen Chips $0{,}6$ defekt. Der Erwartungswert muss selbst kein möglicher Wert von $X$ sein.
:::

:::tip[Beispiel: Faires Spiel]
Bei einem Würfelspiel zahlt man 1 € Einsatz. Bei einer Sechs erhält man 5 € ausbezahlt, sonst nichts. Der Gewinn $X$ ist also $4$ € (Wahrscheinlichkeit $\frac{1}{6}$) oder $-1$ € (Wahrscheinlichkeit $\frac{5}{6}$):

$$
E(X) = 4 \cdot \frac{1}{6} + (-1) \cdot \frac{5}{6} = -\frac{1}{6} \approx -0{,}17\ \text{€}
$$

Pro Spiel verliert man im Mittel etwa 17 Cent. Ein Spiel heißt **fair**, wenn $E(X) = 0$ ist; das wäre hier bei einer Auszahlung von 6 € der Fall.
:::

## Varianz und Standardabweichung

Die **Varianz** misst die mittlere quadratische Abweichung vom Erwartungswert, die **Standardabweichung** ist ihre Wurzel und hat dieselbe Einheit wie $X$:

$$
V(X) = \sigma^2 = \sum_{i} (x_i - \mu)^2 \cdot P(X = x_i) \qquad \sigma = \sqrt{V(X)}
$$

Oft schneller ist der **Verschiebungssatz**:

$$
V(X) = E(X^2) - \mu^2 = \sum_{i} x_i^2 \cdot P(X = x_i) - \mu^2
$$

:::tip[Beispiel]
Für die defekten Chips mit $\mu = 0{,}6$:

$$
E(X^2) = 0^2 \cdot \frac{42}{90} + 1^2 \cdot \frac{42}{90} + 2^2 \cdot \frac{6}{90} = \frac{66}{90} \approx 0{,}733 \qquad V(X) = 0{,}733 - 0{,}6^2 \approx 0{,}373 \qquad \sigma \approx 0{,}611
$$
:::

Die Formeln entsprechen denen der [beschreibenden Statistik](/de/mathematics/descriptive-statistics/#varianz-und-standardabweichung); dort werden beobachtete Häufigkeiten verwendet, hier Wahrscheinlichkeiten.

## Rechenregeln

Für Zahlen $a$, $b$ und Zufallsvariablen $X$, $Y$ gilt:

| Regel | Erwartungswert | Varianz |
| ----- | -------------- | ------- |
| lineare Transformation | $E(aX + b) = a \cdot E(X) + b$ | $V(aX + b) = a^2 \cdot V(X)$ |
| Summe | $E(X + Y) = E(X) + E(Y)$ (immer) | $V(X + Y) = V(X) + V(Y)$ (nur wenn $X$, $Y$ unabhängig) |

Eine Verschiebung um $b$ ändert die Streuung nicht. Bei der Varianz addieren sich bei unabhängigen Größen die Quadrate der Standardabweichungen, nicht die Standardabweichungen selbst.

:::tip[Beispiel: Toleranzen]
Zwei unabhängig gefertigte Bauteile mit den Längen $X$ ($\mu = 20\ \text{mm}$, $\sigma = 0{,}3\ \text{mm}$) und $Y$ ($\mu = 30\ \text{mm}$, $\sigma = 0{,}4\ \text{mm}$) werden aneinandergesetzt:

$$
E(X + Y) = 50\ \text{mm} \qquad \sigma_{X+Y} = \sqrt{0{,}3^2 + 0{,}4^2} = 0{,}5\ \text{mm}
$$
:::

## Stetige Zufallsvariablen

Eine stetige Zufallsvariable wird durch eine **Dichtefunktion** $f$ beschrieben. Wahrscheinlichkeiten sind Flächen unter dem Graphen von $f$:

$$
P(a \leq X \leq b) = \int_a^b f(x)\,\mathrm{d}x \qquad f(x) \geq 0 \qquad \int_{-\infty}^{\infty} f(x)\,\mathrm{d}x = 1
$$

Die Verteilungsfunktion ist eine [Stammfunktion](/de/mathematics/analysis/integral-calculus/) der Dichte, $F(x) = \int_{-\infty}^{x} f(t)\,\mathrm{d}t$, und es gilt $F'(x) = f(x)$. Erwartungswert und Varianz werden mit Integralen statt Summen berechnet:

$$
E(X) = \int_{-\infty}^{\infty} x \cdot f(x)\,\mathrm{d}x \qquad V(X) = \int_{-\infty}^{\infty} (x - \mu)^2 \cdot f(x)\,\mathrm{d}x
$$

:::tip[Beispiel]
$X$ hat auf $[0; 1]$ die Dichte $f(x) = 2x$ (sonst $0$). Die Fläche ist $\int_0^1 2x\,\mathrm{d}x = 1$, es ist also eine zulässige Dichte.

$$
P(X \leq 0{,}5) = \int_0^{0{,}5} 2x\,\mathrm{d}x = 0{,}25 \qquad E(X) = \int_0^1 x \cdot 2x\,\mathrm{d}x = \frac{2}{3} \qquad V(X) = \int_0^1 x^2 \cdot 2x\,\mathrm{d}x - \left(\frac{2}{3}\right)^2 = \frac{1}{2} - \frac{4}{9} = \frac{1}{18}
$$
:::

:::note
Der Wert der Dichte $f(x)$ selbst ist keine Wahrscheinlichkeit und kann größer als $1$ sein. Für einen einzelnen Wert gilt bei stetigen Zufallsvariablen immer $P(X = a) = 0$.
:::

Die wichtigsten Verteilungen sind die [Binomial- und Poisson-Verteilung](/de/mathematics/stochastics/binomial-and-poisson-distribution/) (diskret) sowie die [Normalverteilung](/de/mathematics/stochastics/normal-distribution/) (stetig).

## Weiterführende Quellen

- [Lothar Papula: Mathematik für Ingenieure und Naturwissenschaftler, Band 3 (Springer Vieweg)](https://link.springer.com/book/10.1007/978-3-658-11924-9)
- [Random variable, Encyclopedia of Mathematics](https://encyclopediaofmath.org/wiki/Random_variable)
