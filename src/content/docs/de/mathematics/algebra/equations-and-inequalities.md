---
title: Gleichungen und Ungleichungen
description: Äquivalenzumformungen, lineare und quadratische Gleichungen, Formelumwandlung, Bruch- und Wurzelgleichungen sowie lineare Ungleichungen.
sidebar:
  order: 7
---

## Gleichungen und Lösungsmenge

Eine **Gleichung** besteht aus zwei [Termen](/de/mathematics/algebra/terms/), die durch ein Gleichheitszeichen verbunden sind. Eine Zahl, die beim Einsetzen für die Variable eine wahre Aussage ergibt, ist eine Lösung. Alle Lösungen bilden die Lösungsmenge $L$.

Die Lösungsmenge hängt von der **Grundmenge** ab: Die Gleichung $2x = 3$ hat in $\mathbb{Z}$ keine Lösung ($L = \{\}$), in $\mathbb{Q}$ die Lösung $L = \{1{,}5\}$.

## Äquivalenzumformungen

Eine **Äquivalenzumformung** verändert eine Gleichung, ohne ihre Lösungsmenge zu verändern. Erlaubt ist es, auf beiden Seiten

- denselben Term zu addieren oder zu subtrahieren,
- mit derselben Zahl ungleich $0$ zu multiplizieren oder durch sie zu dividieren.

Ziel ist es, die Variable allein auf eine Seite zu bringen.

:::tip[Beispiel: Lineare Gleichung]
$$
\begin{aligned}
5x - 7 &= 2x + 8 && \mid -2x \\
3x - 7 &= 8 && \mid +7 \\
3x &= 15 && \mid :3 \\
x &= 5
\end{aligned}
$$

**Probe:** $5 \cdot 5 - 7 = 18$ und $2 \cdot 5 + 8 = 18$. ✓
:::

:::caution
Multipliziert oder dividiert man mit einem Term, der eine Variable enthält, ist das nur dann eine Äquivalenzumformung, wenn der Term nicht $0$ werden kann. Dividiert man $x^2 = 3x$ durch $x$, verliert man die Lösung $x = 0$. Richtig ist: $x^2 - 3x = 0 \Rightarrow x(x - 3) = 0 \Rightarrow x_1 = 0,\ x_2 = 3$.
:::

## Formelumwandlung

In der Technik muss man Formeln oft nach einer anderen Größe umstellen. Dabei geht man genauso vor wie beim Lösen einer Gleichung: Die gesuchte Größe wird wie eine Variable behandelt, alle anderen wie Zahlen.

:::tip[Beispiel: Parallelschaltung von Widerständen]
Die Formel $\dfrac{1}{R} = \dfrac{1}{R_1} + \dfrac{1}{R_2}$ soll nach $R_2$ umgeformt werden.

$$
\begin{aligned}
\frac{1}{R} - \frac{1}{R_1} &= \frac{1}{R_2} \\
\frac{R_1 - R}{R \cdot R_1} &= \frac{1}{R_2} \\
R_2 &= \frac{R \cdot R_1}{R_1 - R}
\end{aligned}
$$
:::

:::tip[Beispiel: Kinetische Energie]
$E = \dfrac{m v^2}{2}$ nach $v$: $\quad 2E = m v^2 \;\Rightarrow\; v^2 = \dfrac{2E}{m} \;\Rightarrow\; v = \sqrt{\dfrac{2E}{m}}$

Die negative Lösung entfällt hier, weil der Betrag einer Geschwindigkeit nicht negativ ist.
:::

## Quadratische Gleichungen

Eine **quadratische Gleichung** hat die allgemeine Form

$$
a x^2 + b x + c = 0 \qquad (a \ne 0)
$$

Sie wird mit der **großen Lösungsformel** gelöst:

$$
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

Ist $a = 1$, schreibt man die Gleichung in der **Normalform** $x^2 + px + q = 0$ und verwendet die kleine Lösungsformel:

$$
x_{1,2} = -\frac{p}{2} \pm \sqrt{\left(\frac{p}{2}\right)^2 - q}
$$

### Diskriminante

Der Ausdruck unter der Wurzel heißt **Diskriminante** $D = b^2 - 4ac$. Sie entscheidet über die Anzahl der reellen Lösungen:

| Diskriminante | Lösungen                                                            |
| ------------- | ------------------------------------------------------------------- |
| $D > 0$       | zwei verschiedene reelle Lösungen                                   |
| $D = 0$       | eine (doppelte) reelle Lösung $x = -\frac{b}{2a}$                   |
| $D < 0$       | keine reelle Lösung, aber zwei [komplexe Lösungen](/de/mathematics/algebra/complex-numbers/#quadratische-gleichungen) |

:::tip[Beispiel]
$2x^2 - 4x - 6 = 0$ mit $a = 2$, $b = -4$, $c = -6$:

$$
x_{1,2} = \frac{4 \pm \sqrt{16 + 48}}{4} = \frac{4 \pm 8}{4} \qquad\Rightarrow\qquad x_1 = 3,\quad x_2 = -1
$$
:::

### Sonderfälle ohne Lösungsformel

- **Ohne konstantes Glied** ($c = 0$): Herausheben. $\;3x^2 - 12x = 0 \Rightarrow 3x(x - 4) = 0 \Rightarrow x_1 = 0,\ x_2 = 4$
- **Ohne lineares Glied** ($b = 0$): Wurzel ziehen. $\;x^2 - 25 = 0 \Rightarrow x^2 = 25 \Rightarrow x_{1,2} = \pm 5$

Nutzt man, dass ein Produkt genau dann $0$ ist, wenn einer der Faktoren $0$ ist, spricht man vom **Satz vom Nullprodukt**.

### Satz von Vieta

Für die Lösungen der Normalform $x^2 + px + q = 0$ gilt:

$$
x_1 + x_2 = -p \qquad x_1 \cdot x_2 = q
$$

Daraus folgt die **Zerlegung in Linearfaktoren** $x^2 + px + q = (x - x_1)(x - x_2)$. Zum Beispiel ist $x^2 - 5x + 6 = (x - 2)(x - 3)$, weil $2 + 3 = 5$ und $2 \cdot 3 = 6$.

## Bruchgleichungen

Bei **Bruchgleichungen** steht die Variable im Nenner. Man bestimmt zuerst die Definitionsmenge und multipliziert dann mit dem Hauptnenner. Lösungen, die nicht in der Definitionsmenge liegen, müssen verworfen werden.

:::tip[Beispiel]
$$
\frac{3}{x - 1} = \frac{2}{x} \qquad D = \mathbb{R} \setminus \{0, 1\}
$$

Multiplikation mit $x(x - 1)$: $\;3x = 2(x - 1) \Rightarrow 3x = 2x - 2 \Rightarrow x = -2$

Da $-2 \in D$, ist $L = \{-2\}$.
:::

## Wurzelgleichungen

Bei **Wurzelgleichungen** isoliert man die Wurzel und quadriert beide Seiten. Das Quadrieren ist keine Äquivalenzumformung, weil dabei Scheinlösungen entstehen können. Deshalb ist die Probe unbedingt notwendig.

:::tip[Beispiel]
$$
\begin{aligned}
\sqrt{x + 7} &= x + 1 && \mid (\ )^2 \\
x + 7 &= x^2 + 2x + 1 \\
0 &= x^2 + x - 6 \\
x_1 &= 2, \quad x_2 = -3
\end{aligned}
$$

**Probe:** $\sqrt{9} = 3 = 2 + 1$ ✓, aber $\sqrt{4} = 2 \ne -3 + 1 = -2$ ✗. Also ist $L = \{2\}$.
:::

## Ungleichungen

**Ungleichungen** werden mit den Zeichen $<$, $\le$, $>$ und $\ge$ gebildet. Sie werden wie Gleichungen gelöst, mit einer wichtigen Ausnahme:

:::caution[Wichtig]
Multipliziert oder dividiert man eine Ungleichung mit einer **negativen** Zahl, dreht sich das Ungleichheitszeichen um: Aus $-2x < 6$ wird $x > -3$.
:::

Die Lösungsmenge einer Ungleichung ist meist ein [Intervall](/de/mathematics/algebra/sets-and-number-ranges/#intervalle).

:::tip[Beispiel]
$$
\begin{aligned}
3 - 2x &\le 11 && \mid -3 \\
-2x &\le 8 && \mid :(-2) \\
x &\ge -4
\end{aligned}
$$

$L = [-4; \infty[$
:::

### Doppelungleichungen und Betragsungleichungen

Eine **Doppelungleichung** wie $-1 < 2x + 3 \le 7$ löst man, indem man alle drei Teile gleichzeitig umformt: $-4 < 2x \le 4$, also $-2 < x \le 2$ und $L = ]-2; 2]$.

Der **Betrag** $\lvert x \rvert$ ist der Abstand einer Zahl von $0$. Die Ungleichung $\lvert x - a \rvert \le r$ beschreibt alle Zahlen, deren Abstand von $a$ höchstens $r$ ist, also das Intervall $[a - r; a + r]$. Das ist genau die Form, in der man [Toleranzen](/de/mathematics/algebra/calculating-with-quantities/#absoluter-und-relativer-fehler) angibt: $\lvert l - 50\ \text{mm} \rvert \le 0{,}2\ \text{mm}$.
