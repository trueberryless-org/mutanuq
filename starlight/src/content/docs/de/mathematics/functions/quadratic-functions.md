---
title: Quadratische Funktionen
description: Parabeln in allgemeiner Form, Scheitelform und Produktform, Scheitelpunkt, Nullstellen, Anwendungen und quadratische Interpolation.
sidebar:
  order: 3
---

## Funktionsgleichung und Graph

Eine **quadratische Funktion** hat die allgemeine Form

$$
f(x) = a x^2 + b x + c \qquad (a \ne 0)
$$

Ihr Graph ist eine **Parabel**. Der höchste bzw. tiefste Punkt heißt Scheitelpunkt $S$. Die Parabel ist symmetrisch zur senkrechten Geraden durch den Scheitelpunkt.

| Koeffizient | Bedeutung                                                                 |
| ----------- | ------------------------------------------------------------------------- |
| $a > 0$     | nach oben geöffnet, Scheitel ist Tiefpunkt                                |
| $a < 0$     | nach unten geöffnet, Scheitel ist Hochpunkt                               |
| $\lvert a \rvert > 1$ | schmäler als die Normalparabel $y = x^2$                        |
| $\lvert a \rvert < 1$ | breiter als die Normalparabel                                   |
| $c$         | Schnittpunkt mit der $y$-Achse: $f(0) = c$                                |

## Darstellungsformen

### Scheitelform

$$
f(x) = a (x - x_S)^2 + y_S
$$

Aus dieser Form liest man den Scheitelpunkt $S = (x_S \mid y_S)$ direkt ab. Der Graph ist die um $x_S$ nach rechts und $y_S$ nach oben verschobene Parabel $a x^2$.

Aus der allgemeinen Form berechnet man den Scheitelpunkt mit

$$
x_S = -\frac{b}{2a} \qquad y_S = f(x_S)
$$

oder durch **quadratisches Ergänzen**:

:::tip[Beispiel]
$$
\begin{aligned}
f(x) &= 2x^2 - 8x + 5 \\
&= 2(x^2 - 4x) + 5 \\
&= 2(x^2 - 4x + 4 - 4) + 5 \\
&= 2(x - 2)^2 - 8 + 5 \\
&= 2(x - 2)^2 - 3
\end{aligned}
$$

Der Scheitelpunkt ist $S = (2 \mid -3)$. Kontrolle: $x_S = -\frac{-8}{2 \cdot 2} = 2$.
:::

### Produktform (Nullstellenform)

Hat die Funktion die Nullstellen $x_1$ und $x_2$, gilt

$$
f(x) = a (x - x_1)(x - x_2)
$$

Die Nullstellen berechnet man mit der [Lösungsformel für quadratische Gleichungen](/de/mathematics/algebra/equations-and-inequalities/#quadratische-gleichungen). Eine Parabel kann zwei, eine oder keine Nullstelle haben, je nachdem, ob die Diskriminante positiv, null oder negativ ist. Der Scheitelpunkt liegt immer genau in der Mitte zwischen den Nullstellen: $x_S = \frac{x_1 + x_2}{2}$.

## Funktionsgleichung aufstellen

Je nachdem, welche Informationen gegeben sind, wählt man die passende Form:

| Gegeben                          | Ansatz                                          |
| -------------------------------- | ----------------------------------------------- |
| Scheitelpunkt und ein Punkt      | Scheitelform, $a$ durch Einsetzen des Punktes   |
| Nullstellen und ein Punkt        | Produktform, $a$ durch Einsetzen des Punktes    |
| drei beliebige Punkte            | allgemeine Form, Gleichungssystem mit 3 Gleichungen |

:::tip[Beispiel: Brückenbogen]
Ein parabelförmiger Brückenbogen ist 40 m breit und in der Mitte 10 m hoch. Legt man den Ursprung in die Mitte am Boden, sind die Nullstellen $\pm 20$ und der Scheitelpunkt $(0 \mid 10)$:

$$
f(x) = a (x - 20)(x + 20), \qquad f(0) = -400a = 10 \;\Rightarrow\; a = -\frac{1}{40}
$$

Also $f(x) = -\frac{1}{40}x^2 + 10$. In 10 m Abstand von der Mitte ist der Bogen $f(10) = 7{,}5$ m hoch.
:::

## Anwendungen

- **Wurfbewegung:** Die Flughöhe eines geworfenen Körpers ist (ohne Luftwiderstand) eine quadratische Funktion der Zeit: $h(t) = h_0 + v_0 t - \frac{g}{2} t^2$.
- **Bremsweg:** Der Bremsweg wächst quadratisch mit der Geschwindigkeit. Bei doppelter Geschwindigkeit ist er viermal so lang.
- **Elektrische Leistung:** $P = R \cdot I^2$ ist bei konstantem Widerstand eine quadratische Funktion des Stroms.
- **Erlös und Gewinn:** Sinkt der Preis mit steigender Absatzmenge linear, ist der Erlös $E(x) = p(x) \cdot x$ quadratisch. Der Scheitel liefert den maximalen Erlös.

:::tip[Beispiel: Senkrechter Wurf]
Ein Ball wird aus 1,5 m Höhe mit 12 m/s senkrecht nach oben geworfen ($g \approx 9{,}81\ \text{m/s}^2$):

$$
h(t) = 1{,}5 + 12t - 4{,}905t^2
$$

Die maximale Höhe wird im Scheitel erreicht: $t_S = \frac{12}{2 \cdot 4{,}905} \approx 1{,}22$ s und $h(t_S) \approx 8{,}84$ m.

Der Ball landet, wenn $h(t) = 0$: Die positive Lösung ist $t \approx 2{,}57$ s.
:::

## Quadratische Interpolation

Durch drei Punkte mit verschiedenen $x$-Werten geht genau eine Parabel (oder Gerade). Sind drei Messwerte bekannt, kann man Zwischenwerte mit dieser Parabel genauer schätzen als mit der [linearen Interpolation](/de/mathematics/functions/linear-functions/#lineare-interpolation).

:::tip[Beispiel]
Gemessen wurden $(0 \mid 1)$, $(1 \mid 3)$ und $(2 \mid 9)$. Der Ansatz $f(x) = ax^2 + bx + c$ liefert:

$$
\begin{aligned}
c &= 1 \\
a + b + c &= 3 \\
4a + 2b + c &= 9
\end{aligned}
\quad\Rightarrow\quad
\begin{aligned}
a + b &= 2 \\
4a + 2b &= 8
\end{aligned}
\quad\Rightarrow\quad a = 2,\; b = 0
$$

Also $f(x) = 2x^2 + 1$ und der geschätzte Wert bei $x = 1{,}5$ ist $f(1{,}5) = 5{,}5$. Linear interpoliert hätte man $6$ erhalten.
:::
