---
title: Integralrechnung
description: Stammfunktion und unbestimmtes Integral, Grundintegrale, Integrationsregeln, Substitution, partielle Integration, bestimmtes Integral und Hauptsatz der Differential- und Integralrechnung.
sidebar:
  order: 5
---

Die **Integralrechnung** ist die Umkehrung der Differentialrechnung. Kennt man die Änderungsrate einer Größe, kann man mit ihr die Größe selbst rekonstruieren – etwa den zurückgelegten Weg aus der Geschwindigkeit. Außerdem berechnet man mit Integralen Flächen, Volumen, Mittelwerte und Arbeit.

## Stammfunktion

Eine Funktion $F$ heißt **Stammfunktion** von $f$, wenn ihre Ableitung $f$ ergibt:

$$
F'(x) = f(x)
$$

Da die Ableitung einer Konstanten $0$ ist, hat jede Funktion unendlich viele Stammfunktionen, die sich nur durch eine Konstante $C$ unterscheiden. Die Gesamtheit aller Stammfunktionen heißt **unbestimmtes Integral**:

$$
\int f(x)\,\mathrm{d}x = F(x) + C
$$

$f$ heißt **Integrand**, $C$ **Integrationskonstante** und $\mathrm{d}x$ gibt die Integrationsvariable an.

:::tip[Beispiel]
$F(x) = x^3$, $F(x) = x^3 + 5$ und $F(x) = x^3 - 2$ sind alle Stammfunktionen von $f(x) = 3x^2$. Also ist $\int 3x^2\,\mathrm{d}x = x^3 + C$.
:::

## Grundintegrale

| $f(x)$              | $\int f(x)\,\mathrm{d}x$                       |
| ------------------- | ---------------------------------------------- |
| $k$ (konstant)      | $k x + C$                                      |
| $x^n$ ($n \ne -1$)  | $\dfrac{x^{n+1}}{n + 1} + C$                   |
| $\dfrac{1}{x}$      | $\ln \lvert x \rvert + C$                      |
| $e^x$               | $e^x + C$                                      |
| $a^x$               | $\dfrac{a^x}{\ln a} + C$                       |
| $\sin x$            | $-\cos x + C$                                  |
| $\cos x$            | $\sin x + C$                                   |
| $\dfrac{1}{\cos^2 x}$ | $\tan x + C$                                 |

Die **Potenzregel** der Integration: Hochzahl um 1 erhöhen und durch die neue Hochzahl dividieren. Für $n = -1$ funktioniert sie nicht (Division durch 0) – dafür gibt es den Logarithmus.

:::tip[Tipp]
Jedes Ergebnis lässt sich durch **Ableiten überprüfen**: Die Ableitung der Stammfunktion muss wieder den Integranden ergeben.
:::

## Integrationsregeln

**Faktorregel** und **Summenregel** gelten wie beim Differenzieren:

$$
\int c \cdot f(x)\,\mathrm{d}x = c \int f(x)\,\mathrm{d}x \qquad \int \big(f(x) \pm g(x)\big)\,\mathrm{d}x = \int f(x)\,\mathrm{d}x \pm \int g(x)\,\mathrm{d}x
$$

:::tip[Beispiele]
$$
\int (6x^2 - 4x + 5)\,\mathrm{d}x = 2x^3 - 2x^2 + 5x + C
$$

$$
\int \left(\sqrt{x} + \frac{2}{x^2}\right)\mathrm{d}x = \int \left(x^{\frac{1}{2}} + 2x^{-2}\right)\mathrm{d}x = \frac{2}{3}x^{\frac{3}{2}} - \frac{2}{x} + C
$$
:::

:::caution
Für Produkte und Quotienten gibt es **keine** einfache Regel wie beim Differenzieren. $\int x \cdot e^x\,\mathrm{d}x$ ist nicht $\frac{x^2}{2} \cdot e^x$. Dafür braucht man die folgenden Integrationsmethoden.
:::

### Lineare Substitution

Ist das Argument eine lineare Funktion $ax + b$, integriert man wie gewohnt und dividiert durch die innere Ableitung $a$:

$$
\int f(ax + b)\,\mathrm{d}x = \frac{1}{a} F(ax + b) + C
$$

:::tip[Beispiele]
$$
\int e^{3x}\,\mathrm{d}x = \frac{1}{3} e^{3x} + C \qquad
\int \cos(\omega t)\,\mathrm{d}t = \frac{1}{\omega} \sin(\omega t) + C \qquad
\int (2x - 1)^4\,\mathrm{d}x = \frac{(2x - 1)^5}{10} + C
$$
:::

### Substitution

Die **Substitutionsregel** ist die Umkehrung der Kettenregel. Sie hilft, wenn im Integranden eine Funktion **und ihre Ableitung** vorkommen. Man ersetzt die innere Funktion durch eine neue Variable $u$:

1. $u = g(x)$ wählen
2. $\frac{\mathrm{d}u}{\mathrm{d}x} = g'(x)$, also $\mathrm{d}x = \frac{\mathrm{d}u}{g'(x)}$
3. einsetzen – alle $x$ müssen verschwinden
4. nach $u$ integrieren und zurücksubstituieren

:::tip[Beispiel]
$$
\int 2x \cdot (x^2 + 1)^3\,\mathrm{d}x \qquad u = x^2 + 1,\quad \mathrm{d}x = \frac{\mathrm{d}u}{2x}
$$

$$
= \int 2x \cdot u^3 \cdot \frac{\mathrm{d}u}{2x} = \int u^3\,\mathrm{d}u = \frac{u^4}{4} + C = \frac{(x^2 + 1)^4}{4} + C
$$
:::

### Partielle Integration

Die **partielle Integration** ist die Umkehrung der Produktregel:

$$
\int u(x) \cdot v'(x)\,\mathrm{d}x = u(x) \cdot v(x) - \int u'(x) \cdot v(x)\,\mathrm{d}x
$$

Man wählt $u$ so, dass es durch das Ableiten einfacher wird (z. B. eine Potenz von $x$), und $v'$ so, dass man es leicht integrieren kann.

:::tip[Beispiel]
$$
\int x \cdot e^x\,\mathrm{d}x \qquad u = x,\; u' = 1,\qquad v' = e^x,\; v = e^x
$$

$$
= x \cdot e^x - \int 1 \cdot e^x\,\mathrm{d}x = x e^x - e^x + C = e^x(x - 1) + C
$$

Probe: $\big(e^x(x - 1)\big)' = e^x(x - 1) + e^x = x e^x$ ✓
:::

## Bestimmtes Integral

Das **bestimmte Integral** von $f$ zwischen den **Grenzen** $a$ und $b$ ist eine Zahl. Anschaulich ist es der **orientierte Flächeninhalt** zwischen dem Graphen und der $x$-Achse: Flächen oberhalb der Achse zählen positiv, Flächen unterhalb negativ.

Man erhält es als Grenzwert von **Riemann-Summen**: Das Intervall $[a; b]$ wird in $n$ schmale Streifen der Breite $\Delta x$ geteilt, jeder Streifen durch ein Rechteck angenähert, und die Rechteckflächen werden addiert. Für $n \to \infty$ gilt:

$$
\int_a^b f(x)\,\mathrm{d}x = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i) \cdot \Delta x
$$

Das Integralzeichen $\int$ ist ein langgezogenes S für „Summe“.

### Hauptsatz der Differential- und Integralrechnung

Berechnet wird das bestimmte Integral mit einer beliebigen Stammfunktion $F$:

$$
\int_a^b f(x)\,\mathrm{d}x = F(b) - F(a) = \Big[ F(x) \Big]_a^b
$$

Die Integrationskonstante $C$ fällt dabei weg.

:::tip[Beispiel]
$$
\int_1^3 (x^2 + 1)\,\mathrm{d}x = \left[ \frac{x^3}{3} + x \right]_1^3 = \left(9 + 3\right) - \left(\frac{1}{3} + 1\right) = 12 - \frac{4}{3} = \frac{32}{3} \approx 10{,}67
$$
:::

### Eigenschaften

$$
\int_a^a f(x)\,\mathrm{d}x = 0 \qquad
\int_b^a f(x)\,\mathrm{d}x = -\int_a^b f(x)\,\mathrm{d}x \qquad
\int_a^b f(x)\,\mathrm{d}x + \int_b^c f(x)\,\mathrm{d}x = \int_a^c f(x)\,\mathrm{d}x
$$

## Integral als Rekonstruktion

Ist $f$ die Änderungsrate einer Größe, dann ist $\int_a^b f(x)\,\mathrm{d}x$ die **Gesamtänderung** dieser Größe im Intervall $[a; b]$:

| Änderungsrate            | Integral ergibt …                  |
| ------------------------ | ---------------------------------- |
| Geschwindigkeit $v(t)$   | zurückgelegten Weg                 |
| Beschleunigung $a(t)$    | Geschwindigkeitsänderung           |
| Stromstärke $i(t)$       | geflossene Ladung $Q$              |
| Leistung $P(t)$          | Energie bzw. Arbeit $W$            |
| Zuflussrate              | Änderung der Füllmenge             |
| Grenzkosten $K'(x)$      | Kostenänderung                     |

:::tip[Beispiel: Energieverbrauch]
Die Leistungsaufnahme eines Geräts beim Hochfahren ist $P(t) = 200 - 150e^{-0{,}1t}$ (in W, $t$ in s). Die Energie in den ersten 30 s beträgt

$$
W = \int_0^{30} \left(200 - 150e^{-0{,}1t}\right)\mathrm{d}t = \Big[ 200t + 1500e^{-0{,}1t} \Big]_0^{30} = 6000 + 1500e^{-3} - 1500 \approx 4574{,}7\ \text{J}
$$
:::

Weitere Anwendungen wie Flächen zwischen Kurven, Rotationsvolumen und Mittelwerte finden Sie bei den [Anwendungen der Integralrechnung](/de/mathematics/analysis/applications-of-integration/). Integrale, die sich nicht exakt berechnen lassen, löst man mit [numerischer Integration](/de/mathematics/analysis/numerical-methods/#numerische-integration).
