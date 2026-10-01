---
title: Komplexe Zahlen
description: Imaginäre Einheit, komponentenweise, Polar- und Exponentialform, Gaußsche Zahlenebene, Grundrechnungsarten und die Anwendung in der Wechselstromtechnik.
sidebar:
  order: 9
---

## Die imaginäre Einheit

Die Gleichung $x^2 = -1$ hat in den reellen Zahlen keine Lösung, weil das Quadrat einer reellen Zahl nie negativ ist. Man erweitert deshalb die Zahlen um die **imaginäre Einheit** $j$ mit

$$
j^2 = -1
$$

In der Mathematik wird sie meist mit $i$ bezeichnet. In der Elektrotechnik und an der HTL verwendet man $j$, weil $i$ bereits für die Stromstärke steht.

Mit $j$ lassen sich Wurzeln aus negativen Zahlen ziehen: $\sqrt{-16} = \sqrt{16} \cdot \sqrt{-1} = 4j$.

Die Potenzen von $j$ wiederholen sich mit der Periode 4:

$$
j^1 = j \qquad j^2 = -1 \qquad j^3 = -j \qquad j^4 = 1 \qquad j^5 = j \qquad \ldots
$$

## Komponentenform

Eine **komplexe Zahl** hat die Form

$$
z = a + b\,j \qquad a, b \in \mathbb{R}
$$

- $a = \operatorname{Re}(z)$ ist der Realteil,
- $b = \operatorname{Im}(z)$ ist der Imaginärteil (ohne $j$).

Die Menge aller komplexen Zahlen heißt $\mathbb{C}$. Reelle Zahlen sind komplexe Zahlen mit $b = 0$.

Die **konjugiert komplexe Zahl** zu $z = a + bj$ ist $z^* = \overline{z} = a - bj$. Es gilt $z \cdot z^* = a^2 + b^2$, das Ergebnis ist also immer reell.

## Gaußsche Zahlenebene

Komplexe Zahlen lassen sich nicht auf einer Zahlengeraden darstellen, sondern als Punkte (oder Pfeile, sogenannte **Zeiger**) in der Gaußschen Zahlenebene: Der Realteil wird auf der waagrechten, der Imaginärteil auf der senkrechten Achse aufgetragen.

Die Zahl $z = 3 + 4j$ entspricht dem Punkt $(3 \mid 4)$. Die konjugiert komplexe Zahl $z^* = 3 - 4j$ ist ihr Spiegelbild an der reellen Achse.

## Polarform

Ein Zeiger kann auch durch seine Länge und seinen Winkel beschrieben werden:

- **Betrag:** $\lvert z \rvert = r = \sqrt{a^2 + b^2}$
- **Argument** (Winkel zur positiven reellen Achse): $\varphi = \arg(z)$ mit $\tan \varphi = \dfrac{b}{a}$

Daraus ergeben sich die trigonometrische Form und die **Versorschreibweise**, die in der Elektrotechnik üblich ist:

$$
z = r \cdot (\cos\varphi + j \sin\varphi) = r \angle \varphi
$$

Umgekehrt gilt $a = r \cos\varphi$ und $b = r \sin\varphi$.

:::caution[Quadrant beachten]
Der Taschenrechner liefert $\arctan \frac{b}{a}$ nur im Bereich $-90°$ bis $90°$. Liegt $z$ im 2. oder 3. Quadranten ($a < 0$), muss man $180°$ addieren. Am sichersten ist eine Skizze.

Beispiel: $z = -3 + 3j$ liegt im 2. Quadranten. $\arctan\frac{3}{-3} = -45°$, richtig ist $\varphi = -45° + 180° = 135°$.
:::

:::tip[Beispiel]
$z = 3 + 4j$: $\quad r = \sqrt{9 + 16} = 5$, $\quad \varphi = \arctan\frac{4}{3} \approx 53{,}13°$, also $z = 5 \angle 53{,}13°$.

$z = 10 \angle 30°$: $\quad a = 10 \cos 30° \approx 8{,}66$, $\quad b = 10 \sin 30° = 5$, also $z \approx 8{,}66 + 5j$.
:::

### Exponentialform

Mit der **Eulerschen Formel** $e^{j\varphi} = \cos\varphi + j \sin\varphi$ (Winkel im Bogenmaß) lässt sich die Polarform besonders kompakt schreiben:

$$
z = r \cdot e^{j\varphi}
$$

Setzt man $\varphi = \pi$ ein, erhält man die berühmte Formel $e^{j\pi} + 1 = 0$.

## Grundrechnungsarten

### Addition und Subtraktion

Addiert und subtrahiert wird **in Komponentenform**, getrennt nach Real- und Imaginärteil. Geometrisch entspricht das der Addition der Zeiger.

$$
(3 + 4j) + (1 - 2j) = 4 + 2j \qquad (3 + 4j) - (1 - 2j) = 2 + 6j
$$

### Multiplikation

In Komponentenform wird ausmultipliziert und $j^2 = -1$ verwendet:

$$
(3 + 4j)(1 - 2j) = 3 - 6j + 4j - 8j^2 = 3 - 2j + 8 = 11 - 2j
$$

In Polarform ist die Multiplikation einfacher: **Beträge multiplizieren, Winkel addieren.**

$$
r_1 \angle \varphi_1 \cdot r_2 \angle \varphi_2 = (r_1 \cdot r_2) \angle (\varphi_1 + \varphi_2)
$$

Geometrisch bedeutet eine Multiplikation mit $j = 1 \angle 90°$ eine Drehung um $90°$ gegen den Uhrzeigersinn.

### Division

In Komponentenform erweitert man den Bruch mit der **konjugiert komplexen Zahl des Nenners**, damit der Nenner reell wird:

$$
\frac{3 + 4j}{1 - 2j} = \frac{(3 + 4j)(1 + 2j)}{(1 - 2j)(1 + 2j)} = \frac{3 + 6j + 4j + 8j^2}{1 + 4} = \frac{-5 + 10j}{5} = -1 + 2j
$$

In Polarform gilt: **Beträge dividieren, Winkel subtrahieren.**

$$
\frac{r_1 \angle \varphi_1}{r_2 \angle \varphi_2} = \frac{r_1}{r_2} \angle (\varphi_1 - \varphi_2)
$$

### Potenzieren und Wurzelziehen

Nach der **Formel von Moivre** gilt $\left(r \angle \varphi\right)^n = r^n \angle (n \cdot \varphi)$.

Die Gleichung $z^n = w$ hat in $\mathbb{C}$ immer genau $n$ Lösungen. Sie haben alle den Betrag $\sqrt[n]{\lvert w \rvert}$ und liegen gleichmäßig verteilt auf einem Kreis, jeweils um $\frac{360°}{n}$ gedreht.

:::tip[Merke]
| Rechenart                  | am einfachsten in …   |
| -------------------------- | --------------------- |
| Addition, Subtraktion      | Komponentenform       |
| Multiplikation, Division   | Polarform             |
| Potenzieren, Wurzelziehen  | Polarform             |
:::

## Quadratische Gleichungen

Mit komplexen Zahlen hat jede quadratische Gleichung Lösungen. Ist die Diskriminante negativ, sind die beiden Lösungen konjugiert komplex.

:::tip[Beispiel]
$$
x^2 - 4x + 13 = 0 \quad\Rightarrow\quad x_{1,2} = 2 \pm \sqrt{4 - 13} = 2 \pm \sqrt{-9} = 2 \pm 3j
$$
:::

Allgemein besagt der **Fundamentalsatz der Algebra**, dass jede Polynomgleichung vom Grad $n$ in $\mathbb{C}$ genau $n$ Lösungen hat (mit Vielfachheit gezählt).

## Anwendung: Wechselstromtechnik

In der **komplexen Wechselstromrechnung** werden sinusförmige Spannungen und Ströme als rotierende Zeiger dargestellt. Widerstand, Spule und Kondensator erhalten komplexe Widerstände (Impedanzen):

| Bauteil     | Impedanz                                 | Phasenverschiebung       |
| ----------- | ---------------------------------------- | ------------------------ |
| Widerstand  | $\underline{Z}_R = R$                    | $0°$                     |
| Spule       | $\underline{Z}_L = j\omega L$            | Spannung eilt $90°$ vor  |
| Kondensator | $\underline{Z}_C = \dfrac{1}{j\omega C} = -\dfrac{j}{\omega C}$ | Spannung eilt $90°$ nach |

Dabei ist $\omega = 2\pi f$ die Kreisfrequenz. Mit Impedanzen gilt das ohmsche Gesetz $\underline{U} = \underline{Z} \cdot \underline{I}$ wie im Gleichstromkreis. In Serie werden Impedanzen addiert, parallel addiert man ihre Kehrwerte.

:::tip[Beispiel: RL-Serienschaltung]
Ein Widerstand $R = 30\ \Omega$ und eine Spule mit $L = 127\ \text{mH}$ liegen in Serie an $230\ \text{V}$, $50\ \text{Hz}$.

$$
\underline{Z} = R + j\omega L = 30 + j \cdot 2\pi \cdot 50 \cdot 0{,}127 \approx 30 + 40j\ \Omega = 50 \angle 53{,}13°\ \Omega
$$

$$
\underline{I} = \frac{\underline{U}}{\underline{Z}} = \frac{230 \angle 0°}{50 \angle 53{,}13°}\ \text{A} = 4{,}6 \angle {-53{,}13°}\ \text{A}
$$

Der Strom beträgt $4{,}6\ \text{A}$ und eilt der Spannung um $53{,}13°$ nach.
:::
