---
title: Funktionsbegriff und Eigenschaften
description: Funktionsbegriff, Definitions- und Wertemenge, Darstellungsformen, Monotonie, Symmetrie, Periodizität, Nullstellen, Umkehrfunktionen und Parameterdarstellung.
sidebar:
  order: 1
---

## Funktionsbegriff

Eine **Funktion** $f$ ist eine Zuordnung, die jedem Element $x$ einer **Definitionsmenge** $D$ **genau ein** Element $y = f(x)$ zuordnet:

$$
f\colon D \to \mathbb{R}, \quad x \mapsto f(x)
$$

- $x$ heißt **Argument** oder unabhängige Variable,
- $y = f(x)$ heißt **Funktionswert** oder abhängige Variable,
- die Menge aller Funktionswerte heißt **Wertemenge** $W$.

:::tip[Beispiele]
- Jedem Kreisradius $r$ wird sein Flächeninhalt zugeordnet: $A(r) = r^2 \pi$, $D = \mathbb{R}^+$.
- Jeder Uhrzeit wird die gemessene Temperatur zugeordnet.
- **Keine** Funktion: Jeder Zahl $x > 0$ werden die Zahlen $y$ mit $y^2 = x$ zugeordnet – zu $x = 4$ gehören $y = 2$ und $y = -2$.
:::

Grafisch erkennt man eine Funktion daran, dass jede senkrechte Gerade den Graphen **höchstens einmal** schneidet.

### Darstellungsformen

| Darstellung        | Beispiel                                       | Vorteil                                  |
| ------------------ | ---------------------------------------------- | ---------------------------------------- |
| Funktionsgleichung | $f(x) = 2x^2 - 3$                              | exakt, zum Rechnen geeignet              |
| Wertetabelle       | $x = 0, 1, 2 \;\to\; y = -3, -1, 5$            | übersichtlich für einzelne Werte, Messdaten |
| Graph              | Kurve im Koordinatensystem                      | zeigt den Verlauf auf einen Blick        |
| Beschreibung in Worten | „Das Quadrat einer Zahl, verdoppelt, minus 3“ | verständlich ohne Formel                 |

### Definitionsmenge

Wenn nicht anders angegeben, ist die **maximale Definitionsmenge** jene Menge aller reellen Zahlen, für die der Funktionsterm berechnet werden kann. Ausgeschlossen werden:

- Werte, für die ein **Nenner $0$** wird: $f(x) = \frac{1}{x - 3}$, $D = \mathbb{R} \setminus \{3\}$
- Werte, für die der Radikand einer geraden **Wurzel negativ** wird: $f(x) = \sqrt{x + 2}$, $D = [-2; \infty[$
- Werte, für die das Argument eines **Logarithmus nicht positiv** ist: $f(x) = \ln x$, $D = \mathbb{R}^+$

In Anwendungen ist die Definitionsmenge oft zusätzlich durch den Sachzusammenhang eingeschränkt, etwa auf nicht negative Zeiten oder Längen.

## Eigenschaften von Funktionen

### Nullstellen und Schnittpunkte

- **Nullstellen** sind die Stellen $x$ mit $f(x) = 0$, also die Schnittpunkte mit der $x$-Achse. Man findet sie durch Lösen der Gleichung $f(x) = 0$.
- Den Schnittpunkt mit der **$y$-Achse** erhält man mit $f(0)$.
- Die **Schnittpunkte zweier Funktionen** $f$ und $g$ findet man, indem man $f(x) = g(x)$ setzt.

### Monotonie

| Eigenschaft            | Bedingung für $x_1 < x_2$     | Graph                              |
| ---------------------- | ----------------------------- | ---------------------------------- |
| streng monoton steigend | $f(x_1) < f(x_2)$            | steigt von links nach rechts       |
| monoton steigend       | $f(x_1) \le f(x_2)$           | steigt oder bleibt gleich          |
| streng monoton fallend | $f(x_1) > f(x_2)$             | fällt von links nach rechts        |
| monoton fallend        | $f(x_1) \ge f(x_2)$           | fällt oder bleibt gleich           |

Stellen, an denen sich das Monotonieverhalten ändert, sind **Extremstellen** (Hoch- und Tiefpunkte). Mit der [Differentialrechnung](/de/mathematics/analysis/curve-sketching/) lassen sich Monotonie und Extremstellen berechnen.

### Symmetrie

- **Gerade Funktion** (achsensymmetrisch zur $y$-Achse): $f(-x) = f(x)$ für alle $x$. Beispiele: $x^2$, $x^4$, $\cos x$, $\lvert x \rvert$.
- **Ungerade Funktion** (punktsymmetrisch zum Ursprung): $f(-x) = -f(x)$ für alle $x$. Beispiele: $x$, $x^3$, $\sin x$, $\frac{1}{x}$.

Die meisten Funktionen sind weder gerade noch ungerade, zum Beispiel $x^2 + x$.

### Periodizität

Eine Funktion heißt **periodisch** mit der Periode $p > 0$, wenn sich ihre Werte nach $p$ wiederholen:

$$
f(x + p) = f(x) \quad \text{für alle } x
$$

Die wichtigsten periodischen Funktionen sind die [Winkelfunktionen](/de/mathematics/functions/trigonometric-functions/) mit der Periode $2\pi$.

### Asymptotisches Verhalten und Polstellen

Eine **Asymptote** ist eine Gerade, der sich der Graph beliebig nahe annähert, ohne sie zu erreichen:

- **Waagrechte Asymptote** $y = c$: Die Funktionswerte nähern sich für $x \to \pm\infty$ dem Wert $c$ an. $\frac{1}{x}$ hat die Asymptote $y = 0$, $e^{-x}$ ebenfalls (für $x \to \infty$).
- **Senkrechte Asymptote** $x = x_0$ an einer **Polstelle**: Die Funktionswerte werden in der Nähe von $x_0$ beliebig groß (oder klein). $\frac{1}{x - 3}$ hat an $x_0 = 3$ eine Polstelle.

Polstellen treten vor allem bei [gebrochen rationalen Funktionen](/de/mathematics/functions/polynomial-functions/#gebrochen-rationale-funktionen) auf.

## Verschieben, Strecken und Spiegeln

Aus dem Graphen einer bekannten Funktion $f$ lassen sich viele weitere Graphen ableiten:

| Funktion          | Veränderung des Graphen von $f$                           |
| ----------------- | --------------------------------------------------------- |
| $f(x) + c$        | um $c$ nach oben verschoben ($c < 0$: nach unten)          |
| $f(x - c)$        | um $c$ nach **rechts** verschoben ($c < 0$: nach links)    |
| $a \cdot f(x)$    | in $y$-Richtung mit dem Faktor $a$ gestreckt ($\lvert a \rvert < 1$: gestaucht) |
| $f(b \cdot x)$    | in $x$-Richtung mit dem Faktor $\frac{1}{b}$ gestaucht bzw. gestreckt |
| $-f(x)$           | an der $x$-Achse gespiegelt                                |
| $f(-x)$           | an der $y$-Achse gespiegelt                                |

:::caution
Bei $f(x - c)$ wird der Graph nach **rechts** verschoben, obwohl ein Minus dasteht: Der Wert, den $f$ bisher bei $0$ hatte, wird jetzt erst bei $x = c$ erreicht.
:::

## Umkehrfunktion

Ist eine Funktion **umkehrbar eindeutig** (jeder Funktionswert kommt nur einmal vor, zum Beispiel bei streng monotonen Funktionen), so gibt es eine **Umkehrfunktion** $f^{-1}$, die die Zuordnung umkehrt:

$$
y = f(x) \quad\Longleftrightarrow\quad x = f^{-1}(y)
$$

So bestimmt man die Umkehrfunktion:

1. $y = f(x)$ nach $x$ auflösen.
2. $x$ und $y$ vertauschen.

Der Graph der Umkehrfunktion entsteht durch **Spiegelung an der Geraden $y = x$**. Definitions- und Wertemenge werden dabei vertauscht.

:::tip[Beispiel]
$f(x) = 2x + 4$: $\quad y = 2x + 4 \;\Rightarrow\; x = \frac{y - 4}{2} \;\Rightarrow\; f^{-1}(x) = \frac{x}{2} - 2$
:::

| Funktion         | Umkehrfunktion       | Einschränkung              |
| ---------------- | -------------------- | -------------------------- |
| $x^2$            | $\sqrt{x}$           | $x \ge 0$                  |
| $x^3$            | $\sqrt[3]{x}$        |                            |
| $e^x$            | $\ln x$              |                            |
| $10^x$           | $\lg x$              |                            |
| $\sin x$         | $\arcsin x$          | $-\frac{\pi}{2} \le x \le \frac{\pi}{2}$ |

Nicht umkehrbare Funktionen wie $x^2$ werden auf einen Bereich eingeschränkt, auf dem sie streng monoton sind.

## Parameterdarstellung

Manche Kurven, etwa Kreise oder Bahnkurven, sind keine Funktionen, weil zu einem $x$ mehrere $y$ gehören. Man beschreibt sie in **Parameterdarstellung**, indem man $x$ und $y$ als Funktionen eines Parameters $t$ (oft der Zeit) angibt:

$$
x = x(t), \quad y = y(t)
$$

:::tip[Beispiele]
**Kreis** mit Radius $r$ um den Ursprung:

$$
x(t) = r \cos t, \quad y(t) = r \sin t, \qquad t \in [0; 2\pi[
$$

**Schiefer Wurf** mit Abwurfgeschwindigkeit $v_0$ unter dem Winkel $\alpha$:

$$
x(t) = v_0 \cos\alpha \cdot t, \qquad y(t) = v_0 \sin\alpha \cdot t - \frac{g}{2} t^2
$$
:::

Auch eine [Gerade in Parameterform](/de/mathematics/geometry/lines-and-planes/) ist eine Parameterdarstellung.
