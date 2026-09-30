---
title: Kurvendiskussion und Extremwertaufgaben
description: Monotonie, Extremwerte, Krümmung und Wendepunkte mit der Differentialrechnung, der Ablauf einer Kurvendiskussion, das Aufstellen von Funktionen aus Eigenschaften und Optimierungsaufgaben.
sidebar:
  order: 4
---

## Monotonie

Die erste Ableitung zeigt, ob eine Funktion steigt oder fällt:

| Bedingung im Intervall | Verhalten von $f$           |
| ---------------------- | --------------------------- |
| $f'(x) > 0$            | streng monoton steigend     |
| $f'(x) < 0$            | streng monoton fallend      |
| $f'(x) = 0$            | waagrechte Tangente         |

## Extremwerte

An einem **lokalen Hochpunkt** (Maximum) oder Tiefpunkt (Minimum) hat der Graph eine waagrechte Tangente. Daraus ergibt sich die notwendige Bedingung:

$$
f'(x_0) = 0
$$

Nicht jede Stelle mit $f'(x_0) = 0$ ist eine Extremstelle. Es kann auch ein **Sattelpunkt** vorliegen, wie bei $x^3$ an der Stelle $0$. Deshalb prüft man eine hinreichende Bedingung:

| Bedingung                          | Ergebnis              |
| ---------------------------------- | --------------------- |
| $f'(x_0) = 0$ und $f''(x_0) < 0$   | Hochpunkt (Maximum) |
| $f'(x_0) = 0$ und $f''(x_0) > 0$   | Tiefpunkt (Minimum) |
| $f'(x_0) = 0$ und $f''(x_0) = 0$   | keine Aussage möglich, Vorzeichenwechsel von $f'$ prüfen |

Alternativ untersucht man den **Vorzeichenwechsel** der ersten Ableitung: Wechselt $f'$ an der Stelle $x_0$ von $+$ nach $-$, liegt ein Hochpunkt vor, von $-$ nach $+$ ein Tiefpunkt, ohne Vorzeichenwechsel ein Sattelpunkt.

:::note[Lokal und global]
Ein lokales Maximum ist nur in seiner Umgebung der größte Wert. Das **globale** Maximum auf einem Intervall $[a; b]$ kann auch am Rand liegen. Bei Optimierungsaufgaben müssen daher die Randwerte $f(a)$ und $f(b)$ mit den lokalen Extremwerten verglichen werden.
:::

## Krümmung und Wendepunkte

Die zweite Ableitung beschreibt die Krümmung:

- $f''(x) > 0$: linksgekrümmt (konvex): Die Steigung nimmt zu.
- $f''(x) < 0$: rechtsgekrümmt (konkav): Die Steigung nimmt ab.

Ein **Wendepunkt** ist ein Punkt, an dem sich das Krümmungsverhalten ändert. Dort ist die Steigung lokal am größten oder am kleinsten.

$$
\text{notwendig: } f''(x_0) = 0 \qquad \text{hinreichend: } f''(x_0) = 0 \text{ und } f'''(x_0) \ne 0
$$

Ein Wendepunkt mit waagrechter Tangente ($f'(x_0) = 0$) heißt **Sattelpunkt** (Terrassenpunkt).

:::tip[Anschaulich]
Fährt man mit dem Fahrrad entlang des Graphen von links nach rechts, lenkt man in einer Linkskurve nach links ($f'' > 0$) und in einer Rechtskurve nach rechts ($f'' < 0$). Im Wendepunkt fährt man für einen Moment geradeaus.
:::

## Ablauf einer Kurvendiskussion

1. Definitionsmenge bestimmen
2. Symmetrie prüfen ($f(-x) = f(x)$ oder $f(-x) = -f(x)$)
3. Nullstellen ($f(x) = 0$) und Schnittpunkt mit der $y$-Achse ($f(0)$)
4. Ableitungen $f'$, $f''$, $f'''$ berechnen
5. Extrempunkte ($f'(x) = 0$, Art mit $f''$ bestimmen)
6. Wendepunkte ($f''(x) = 0$, mit $f'''$ prüfen) und ggf. Wendetangenten
7. Verhalten im Unendlichen bzw. an Definitionslücken, Asymptoten
8. Monotonie- und Krümmungsbereiche angeben
9. Graph zeichnen

:::tip[Beispiel: Kurvendiskussion]
$$
f(x) = x^3 - 6x^2 + 9x
$$

**Definitionsmenge:** $D = \mathbb{R}$ (Polynomfunktion)

**Symmetrie:** gerade und ungerade Hochzahlen gemischt, also keine Symmetrie zum Ursprung oder zur $y$-Achse

**Nullstellen:** $x(x^2 - 6x + 9) = x(x - 3)^2 = 0 \Rightarrow x_1 = 0$, $x_2 = 3$ (doppelt: Berührpunkt)

**Ableitungen:**

$$
f'(x) = 3x^2 - 12x + 9 \qquad f''(x) = 6x - 12 \qquad f'''(x) = 6
$$

**Extrempunkte:** $3x^2 - 12x + 9 = 0 \Rightarrow x^2 - 4x + 3 = 0 \Rightarrow x = 1$ oder $x = 3$

- $f''(1) = -6 < 0$: Hochpunkt $H = (1 \mid 4)$
- $f''(3) = 6 > 0$: Tiefpunkt $T = (3 \mid 0)$

**Wendepunkt:** $6x - 12 = 0 \Rightarrow x = 2$, $f'''(2) = 6 \ne 0$: $W = (2 \mid 2)$ mit Wendetangentensteigung $f'(2) = -3$

**Verhalten im Unendlichen:** $x \to \infty \Rightarrow f(x) \to \infty$, $\;x \to -\infty \Rightarrow f(x) \to -\infty$

**Monotonie:** steigend auf $]-\infty; 1]$ und $[3; \infty[$, fallend auf $[1; 3]$

**Krümmung:** rechtsgekrümmt für $x < 2$, linksgekrümmt für $x > 2$
:::

## Funktionen aus Eigenschaften aufstellen

Oft ist der umgekehrte Weg gefragt: Aus bekannten Eigenschaften soll eine Funktion bestimmt werden (**Umkehraufgabe**, Steckbriefaufgabe). Jede Eigenschaft liefert eine Gleichung:

| Eigenschaft                          | Gleichung                   |
| ------------------------------------ | --------------------------- |
| Punkt $(a \mid b)$ liegt auf dem Graphen | $f(a) = b$              |
| Extremstelle bei $a$                 | $f'(a) = 0$                 |
| Wendestelle bei $a$                  | $f''(a) = 0$                |
| Steigung $k$ an der Stelle $a$       | $f'(a) = k$                 |

Eine Polynomfunktion vom Grad $n$ hat $n + 1$ Koeffizienten und braucht deshalb $n + 1$ Bedingungen.

:::tip[Beispiel]
Gesucht ist eine Polynomfunktion 3. Grades, deren Graph durch den Ursprung geht und in $H = (1 \mid 4)$ einen Hochpunkt sowie bei $x = 2$ einen Wendepunkt hat.

Ansatz: $f(x) = ax^3 + bx^2 + cx + d$, $\;f'(x) = 3ax^2 + 2bx + c$, $\;f''(x) = 6ax + 2b$

$$
\begin{aligned}
f(0) &= 0: & d &= 0 \\
f(1) &= 4: & a + b + c + d &= 4 \\
f'(1) &= 0: & 3a + 2b + c &= 0 \\
f''(2) &= 0: & 12a + 2b &= 0
\end{aligned}
$$

Die Lösung des [Gleichungssystems](/de/mathematics/algebra/systems-of-linear-equations/) ist $a = 1$, $b = -6$, $c = 9$, $d = 0$. Es ergibt sich wieder $f(x) = x^3 - 6x^2 + 9x$.
:::

## Extremwertaufgaben

Bei **Extremwertaufgaben** (Optimierungsaufgaben) soll eine Größe möglichst groß oder klein werden, etwa eine Fläche, ein Volumen, Kosten oder ein Gewinn. So geht man vor:

1. **Hauptbedingung:** Formel für die Größe, die optimiert werden soll (oft mit mehreren Variablen).
2. **Nebenbedingung:** Zusammenhang zwischen den Variablen aus der Angabe.
3. Nebenbedingung nach einer Variablen umformen und in die Hauptbedingung einsetzen. So entsteht die Zielfunktion mit nur einer Variablen.
4. Definitionsmenge der Zielfunktion aus dem Sachzusammenhang bestimmen.
5. Zielfunktion ableiten, $= 0$ setzen und lösen.
6. Art des Extremums prüfen und Randwerte vergleichen.
7. Alle gesuchten Größen berechnen und das Ergebnis im Sachzusammenhang formulieren.

:::tip[Beispiel: Dose mit minimalem Materialverbrauch]
Eine zylindrische Dose soll $V = 500\ \text{cm}^3$ fassen. Bei welchen Maßen wird am wenigsten Blech verbraucht?

**Hauptbedingung:** Oberfläche $O = 2r^2\pi + 2r\pi h \to \min$

**Nebenbedingung:** $V = r^2 \pi h = 500 \Rightarrow h = \dfrac{500}{r^2\pi}$

**Zielfunktion:**

$$
O(r) = 2r^2\pi + 2r\pi \cdot \frac{500}{r^2\pi} = 2\pi r^2 + \frac{1000}{r}, \qquad r > 0
$$

**Ableiten und nullsetzen:**

$$
O'(r) = 4\pi r - \frac{1000}{r^2} = 0 \;\Rightarrow\; r^3 = \frac{1000}{4\pi} \;\Rightarrow\; r = \sqrt[3]{\frac{250}{\pi}} \approx 4{,}30\ \text{cm}
$$

**Prüfen:** $O''(r) = 4\pi + \frac{2000}{r^3} > 0$, also ein Minimum.

**Ergebnis:** $r \approx 4{,}30$ cm, $h = \frac{500}{r^2\pi} \approx 8{,}60$ cm. Die optimale Dose ist genau so hoch, wie sie breit ist ($h = 2r$).
:::

:::tip[Beispiel: Gewinnmaximierung]
Die Kosten für $x$ Stück eines Produkts sind $K(x) = 0{,}01x^2 + 20x + 5000$ (in €), der Verkaufspreis ist $p = 60$ € pro Stück. Der Gewinn ist

$$
G(x) = 60x - K(x) = -0{,}01x^2 + 40x - 5000
$$

$G'(x) = -0{,}02x + 40 = 0 \Rightarrow x = 2000$ Stück. Der maximale Gewinn beträgt $G(2000) = 35\,000$ €.
:::
