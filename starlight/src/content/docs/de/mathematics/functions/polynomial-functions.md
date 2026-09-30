---
title: Potenz- und Polynomfunktionen
description: Potenzfunktionen, Polynomfunktionen mit Grad, Nullstellen, Linearfaktoren und Verhalten im Unendlichen sowie gebrochen rationale Funktionen mit Polstellen und Asymptoten.
sidebar:
  order: 4
---

## Potenzfunktionen

Eine **Potenzfunktion** hat die Form $f(x) = a \cdot x^n$. Ihr Verlauf hängt stark von der Hochzahl $n$ ab:

| Hochzahl                  | Beispiel                  | Graph und Eigenschaften                                             |
| ------------------------- | ------------------------- | ------------------------------------------------------------------- |
| $n$ gerade, $n > 0$       | $x^2$, $x^4$              | Parabelform, gerade Funktion, $f(x) \ge 0$ für $a > 0$              |
| $n$ ungerade, $n > 0$     | $x^3$, $x^5$              | punktsymmetrisch, streng monoton steigend für $a > 0$               |
| $n$ negativ               | $x^{-1} = \frac{1}{x}$, $x^{-2}$ | Hyperbel, Polstelle bei $0$, Asymptote $y = 0$              |
| $n$ Bruch                 | $x^{\frac{1}{2}} = \sqrt{x}$ | Wurzelfunktion, nur für $x \ge 0$ definiert                      |

Alle Potenzfunktionen mit $n > 0$ gehen durch $(0 \mid 0)$ und $(1 \mid a)$. Je größer $n$ ist, desto flacher verläuft der Graph für $\lvert x \rvert < 1$ und desto steiler für $\lvert x \rvert > 1$.

:::tip[Beispiel]
Die Masse einer Kugel aus demselben Material ist proportional zur dritten Potenz des Radius: $m(r) = \frac{4}{3}\pi\rho \cdot r^3$. Bei doppeltem Radius ist die Kugel achtmal so schwer.

Die Beleuchtungsstärke einer Lampe nimmt mit dem Quadrat des Abstands ab: $E(r) = \frac{c}{r^2}$. Im doppelten Abstand ist es nur noch ein Viertel so hell.
:::

## Polynomfunktionen

Eine **Polynomfunktion** (ganzrationale Funktion) vom Grad $n$ ist eine Summe von Potenzfunktionen mit natürlichen Hochzahlen:

$$
f(x) = a_n x^n + a_{n-1} x^{n-1} + \ldots + a_1 x + a_0 \qquad (a_n \ne 0)
$$

Lineare Funktionen sind Polynome vom Grad 1, quadratische vom Grad 2. Polynome sind auf ganz $\mathbb{R}$ definiert und haben einen „glatten“ Graphen ohne Sprünge und Knicke.

### Eigenschaften

Eine Polynomfunktion vom Grad $n$ hat

- höchstens $n$ Nullstellen,
- höchstens $n - 1$ Extremstellen (Hoch- und Tiefpunkte),
- höchstens $n - 2$ Wendestellen.

Ist der Grad **ungerade**, hat die Funktion mindestens eine Nullstelle.

### Verhalten im Unendlichen

Für sehr große $\lvert x \rvert$ bestimmt der Summand mit der höchsten Potenz $a_n x^n$ den Verlauf:

| Grad $n$   | $a_n > 0$                                  | $a_n < 0$                                  |
| ---------- | ------------------------------------------ | ------------------------------------------ |
| gerade     | links und rechts nach $+\infty$            | links und rechts nach $-\infty$            |
| ungerade   | von $-\infty$ (links) nach $+\infty$ (rechts) | von $+\infty$ (links) nach $-\infty$ (rechts) |

### Symmetrie

Kommen nur **gerade** Hochzahlen vor (inklusive der Konstanten $a_0 = a_0 x^0$), ist die Funktion gerade. Kommen nur ungerade Hochzahlen vor, ist sie ungerade. $x^4 - 3x^2 + 1$ ist gerade, $x^3 - 2x$ ungerade.

## Nullstellen von Polynomfunktionen

### Linearfaktoren

Ist $x_1$ eine Nullstelle von $f$, lässt sich der **Linearfaktor** $(x - x_1)$ abspalten:

$$
f(x) = (x - x_1) \cdot g(x)
$$

Dabei hat $g$ einen um 1 kleineren Grad. Kennt man alle Nullstellen, kann man das Polynom vollständig zerlegen:

$$
f(x) = a_n (x - x_1)(x - x_2) \cdots (x - x_n)
$$

Kommt ein Linearfaktor mehrfach vor, spricht man von einer **mehrfachen Nullstelle**. Bei einer doppelten (allgemein: geraden) Nullstelle berührt der Graph die $x$-Achse nur, ohne das Vorzeichen zu wechseln. Bei einer einfachen oder dreifachen Nullstelle schneidet er die Achse.

### Lösungsverfahren

- Herausheben, wenn kein konstantes Glied vorhanden ist: $x^3 - 4x = x(x^2 - 4) = x(x - 2)(x + 2)$
- Substitution bei biquadratischen Gleichungen: $x^4 - 5x^2 + 4 = 0$ wird mit $u = x^2$ zu $u^2 - 5u + 4 = 0$, also $u = 1$ oder $u = 4$ und $x \in \{-2, -1, 1, 2\}$.
- Polynomdivision nach Erraten einer Nullstelle. Ganzzahlige Nullstellen sind immer Teiler des konstanten Glieds $a_0$ (wenn alle Koeffizienten ganzzahlig sind und $a_n = 1$).
- Numerische Verfahren wie das [Newton-Verfahren](/de/mathematics/analysis/numerical-methods/#newton-verfahren) oder der Taschenrechner.

:::tip[Beispiel: Polynomdivision]
$f(x) = x^3 - 2x^2 - 5x + 6$. Probieren der Teiler von $6$ ergibt $f(1) = 1 - 2 - 5 + 6 = 0$. Also ist $x_1 = 1$ eine Nullstelle.

$$
\begin{array}{l}
(x^3 - 2x^2 - 5x + 6) : (x - 1) = x^2 - x - 6 \\
\underline{-(x^3 - x^2)} \\
\qquad -x^2 - 5x \\
\qquad \underline{-(-x^2 + x)} \\
\qquad\qquad -6x + 6 \\
\qquad\qquad \underline{-(-6x + 6)} \\
\qquad\qquad\qquad 0
\end{array}
$$

$x^2 - x - 6 = 0$ liefert $x_2 = 3$ und $x_3 = -2$. Damit ist $f(x) = (x - 1)(x - 3)(x + 2)$.
:::

## Gebrochen rationale Funktionen

Eine **gebrochen rationale Funktion** ist der Quotient zweier Polynome:

$$
f(x) = \frac{p(x)}{q(x)}
$$

Sie ist überall definiert, außer an den Nullstellen des Nenners $q$.

- **Nullstellen:** Nullstellen des Zählers, die nicht gleichzeitig Nullstellen des Nenners sind.
- **Polstellen:** Nullstellen des Nenners, die nicht gleichzeitig Nullstellen des Zählers sind. Dort hat der Graph eine senkrechte Asymptote.
- **Hebbare Definitionslücken:** Stellen, an denen Zähler und Nenner null sind. Nach dem Kürzen verschwindet die Lücke, der Graph hat dort nur ein „Loch“.

### Waagrechte und schiefe Asymptoten

Das Verhalten für $x \to \pm\infty$ hängt vom Grad des Zählers ($m$) und des Nenners ($n$) ab:

| Grade      | Asymptote                                                                |
| ---------- | ------------------------------------------------------------------------ |
| $m < n$    | $y = 0$                                                                  |
| $m = n$    | $y = \frac{a_m}{b_n}$ (Quotient der höchsten Koeffizienten)              |
| $m = n + 1$ | schiefe Asymptote, die man durch Polynomdivision erhält                 |

:::tip[Beispiel]
$$
f(x) = \frac{2x^2 - 2}{x^2 - 4} = \frac{2(x - 1)(x + 1)}{(x - 2)(x + 2)}
$$

- Definitionsmenge: $D = \mathbb{R} \setminus \{-2, 2\}$
- Nullstellen: $x = \pm 1$
- Polstellen: $x = \pm 2$
- Waagrechte Asymptote: $y = \frac{2}{1} = 2$, weil Zähler und Nenner denselben Grad haben
:::

:::tip[Beispiel: Stückkosten]
Ein Betrieb hat Fixkosten von 2000 € und variable Kosten von 5 € pro Stück. Die Kosten pro Stück bei $x$ produzierten Stück sind

$$
\bar{K}(x) = \frac{5x + 2000}{x}
$$

Die Funktion hat eine Polstelle bei $x = 0$ und die waagrechte Asymptote $y = 5$: Bei großen Stückzahlen verteilen sich die Fixkosten auf so viele Stück, dass die Stückkosten fast auf die variablen Kosten sinken.
:::
