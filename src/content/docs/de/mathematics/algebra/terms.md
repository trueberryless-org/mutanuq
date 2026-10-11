---
title: Terme
description: "Rechnen mit Termen: Vorrangregeln, Klammern, Ausmultiplizieren, Herausheben, binomische Formeln und Bruchterme."
sidebar:
  order: 6
---

## Was ist ein Term?

Ein **Term** ist ein sinnvoller mathematischer Ausdruck aus Zahlen, Variablen (Platzhaltern wie $x$ oder $a$), Rechenzeichen und Klammern, zum Beispiel $3x^2 - 2x + 5$ oder $\frac{a + b}{2}$. Setzt man für die Variablen Zahlen ein, erhält man den Wert des Terms. Terme enthalten kein Gleichheitszeichen. Verbindet man zwei Terme mit $=$, entsteht eine [Gleichung](/de/mathematics/algebra/equations-and-inequalities/).

Die Menge der Zahlen, die man für eine Variable einsetzen darf, heißt **Definitionsmenge**. Bei $\frac{1}{x - 2}$ darf $x$ nicht $2$ sein, weil man nicht durch $0$ dividieren kann: $D = \mathbb{R} \setminus \{2\}$.

## Vorrangregeln

1. Klammern zuerst (von innen nach außen)
2. Potenzen und Wurzeln
3. Punktrechnung ($\cdot$, $:$) vor Strichrechnung ($+$, $-$)
4. Sonst von links nach rechts

:::tip[Beispiel]
$$
2 + 3 \cdot (4 - 1)^2 = 2 + 3 \cdot 3^2 = 2 + 3 \cdot 9 = 2 + 27 = 29
$$
:::

## Addieren und Subtrahieren

Nur **gleichartige Terme**, also Terme mit denselben Variablen in denselben Potenzen, lassen sich zusammenfassen:

$$
5x^2 + 3x - 2x^2 + 4 - x = 3x^2 + 2x + 4
$$

$x^2$ und $x$ sind nicht gleichartig und bleiben getrennt stehen.

**Klammern auflösen:** Steht ein Plus vor der Klammer, bleiben die Vorzeichen erhalten. Steht ein Minus davor, ändern sich alle Vorzeichen in der Klammer:

$$
a - (b - c + d) = a - b + c - d
$$

## Multiplizieren

Beim **Ausmultiplizieren** wird jedes Glied der einen Klammer mit jedem Glied der anderen Klammer multipliziert (Distributivgesetz):

$$
\begin{aligned}
3x(2x - 5) &= 6x^2 - 15x \\
(2a + 3)(a - 4) &= 2a^2 - 8a + 3a - 12 = 2a^2 - 5a - 12
\end{aligned}
$$

Das **Herausheben** (Faktorisieren) ist die Umkehrung: Ein gemeinsamer Faktor aller Glieder wird vor die Klammer gezogen.

$$
12x^3 - 8x^2 + 4x = 4x(3x^2 - 2x + 1)
$$

## Binomische Formeln

Die drei **binomischen Formeln** sind Abkürzungen für häufig vorkommende Produkte:

$$
\begin{aligned}
(a + b)^2 &= a^2 + 2ab + b^2 \\
(a - b)^2 &= a^2 - 2ab + b^2 \\
(a + b)(a - b) &= a^2 - b^2
\end{aligned}
$$

:::tip[Beispiele]
$$
\begin{aligned}
(3x + 2)^2 &= 9x^2 + 12x + 4 \\
(5 - y)^2 &= 25 - 10y + y^2 \\
(2a + 7)(2a - 7) &= 4a^2 - 49
\end{aligned}
$$

Rückwärts angewendet helfen sie beim Faktorisieren: $x^2 - 16 = (x + 4)(x - 4)$ und $x^2 + 6x + 9 = (x + 3)^2$.

Auch Kopfrechnen wird einfacher: $49 \cdot 51 = (50 - 1)(50 + 1) = 2500 - 1 = 2499$.
:::

:::caution
Ein häufiger Fehler ist $(a + b)^2 = a^2 + b^2$. Das gemischte Glied $2ab$ darf nicht vergessen werden: $(2 + 3)^2 = 25$, aber $2^2 + 3^2 = 13$.
:::

Höhere Potenzen eines Binoms berechnet man mit den Koeffizienten aus dem **Pascalschen Dreieck**, in dem jede Zahl die Summe der beiden darüberstehenden ist:

$$
\begin{array}{c}
1 \\
1 \quad 1 \\
1 \quad 2 \quad 1 \\
1 \quad 3 \quad 3 \quad 1 \\
1 \quad 4 \quad 6 \quad 4 \quad 1
\end{array}
$$

So ist zum Beispiel $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$.

## Bruchterme

Ein **Bruchterm** enthält Variablen im Nenner. Die Definitionsmenge schließt alle Werte aus, für die der Nenner $0$ wird. Gerechnet wird wie mit Brüchen:

- **Kürzen:** Zähler und Nenner durch denselben Faktor dividieren. Dazu müssen sie zuerst faktorisiert werden. Aus Summen darf man nicht kürzen.
- **Addieren/Subtrahieren:** Auf einen gemeinsamen Nenner bringen (am besten das kleinste gemeinsame Vielfache der Nenner).
- **Multiplizieren:** Zähler mal Zähler, Nenner mal Nenner.
- **Dividieren:** Mit dem Kehrwert multiplizieren.

:::tip[Beispiele]
**Kürzen:**

$$
\frac{x^2 - 9}{2x + 6} = \frac{(x + 3)(x - 3)}{2(x + 3)} = \frac{x - 3}{2} \qquad (x \ne -3)
$$

**Addieren:**

$$
\frac{2}{x} + \frac{3}{x + 1} = \frac{2(x + 1) + 3x}{x(x + 1)} = \frac{5x + 2}{x(x + 1)} \qquad (x \ne 0,\ x \ne -1)
$$

**Dividieren:**

$$
\frac{a^2}{b} : \frac{a}{b^3} = \frac{a^2}{b} \cdot \frac{b^3}{a} = a b^2
$$
:::

:::caution
$\dfrac{x + 3}{3} \ne x$. Man darf nur Faktoren kürzen, keine Summanden: „Aus Differenzen und Summen kürzen nur die Dummen.“
:::
