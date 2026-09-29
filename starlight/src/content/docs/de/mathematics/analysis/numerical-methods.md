---
title: Numerische Verfahren
description: Iterationsverfahren zur Nullstellenbestimmung mit Bisektion, Regula falsi und Newton-Verfahren sowie numerische Integration mit Rechteck-, Trapez- und Simpsonregel.
sidebar:
  order: 7
---

Viele Gleichungen und Integrale lassen sich nicht exakt lösen – etwa $x = \cos x$ oder $\int e^{-x^2}\,\mathrm{d}x$. **Numerische Verfahren** liefern dafür Näherungslösungen mit beliebiger Genauigkeit. Sie sind die Grundlage dessen, was Taschenrechner und Programme wie GeoGebra im Hintergrund tun, und lassen sich mit wenigen Zeilen Code selbst programmieren.

## Iterationsverfahren

Ein **Iterationsverfahren** beginnt mit einem Startwert $x_0$ und berechnet nach einer festen Vorschrift immer bessere Näherungen $x_1, x_2, x_3, \ldots$ Man bricht ab, wenn sich die Näherungen kaum noch ändern (z. B. $\lvert x_{n+1} - x_n \rvert < 10^{-6}$) oder wenn $\lvert f(x_n) \rvert$ klein genug ist.

## Bisektionsverfahren

Das **Bisektionsverfahren** (Intervallhalbierung) beruht auf dem [Zwischenwertsatz](/de/mathematics/analysis/limits-and-continuity/#zwischenwertsatz): Hat eine stetige Funktion an den Rändern eines Intervalls verschiedene Vorzeichen, liegt dazwischen eine Nullstelle.

1. Wähle $[a; b]$ mit $f(a) \cdot f(b) < 0$.
2. Berechne den Mittelpunkt $m = \frac{a + b}{2}$.
3. Hat $f(m)$ dasselbe Vorzeichen wie $f(a)$, setze $a = m$, sonst $b = m$.
4. Wiederhole ab Schritt 2, bis das Intervall klein genug ist.

:::tip[Beispiel: Nullstelle von f(x) = x³ − 2x − 5]
| Schritt | $a$      | $b$     | $m$       | $f(m)$     |
| ------- | -------- | ------- | --------- | ---------- |
| 1       | 2        | 3       | 2,5       | $5{,}625$  |
| 2       | 2        | 2,5     | 2,25      | $1{,}891$  |
| 3       | 2        | 2,25    | 2,125     | $0{,}346$  |
| 4       | 2        | 2,125   | 2,0625    | $-0{,}351$ |
| 5       | 2,0625   | 2,125   | 2,09375   | $-0{,}009$ |

Die Nullstelle liegt bei etwa $2{,}0946$.
:::

Das Verfahren **konvergiert immer**, ist aber langsam: Jeder Schritt halbiert den Fehler, für drei zusätzliche Dezimalstellen braucht man etwa zehn Schritte.

### Regula falsi

Die **Regula falsi** verbessert die Bisektion, indem sie statt des Mittelpunkts die Nullstelle der **Sekante** durch $(a \mid f(a))$ und $(b \mid f(b))$ verwendet:

$$
x = a - f(a) \cdot \frac{b - a}{f(b) - f(a)}
$$

## Newton-Verfahren

Das **Newton-Verfahren** ersetzt die Funktion an der aktuellen Näherung durch ihre **Tangente** und nimmt deren Nullstelle als nächste Näherung:

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$

:::tip[Beispiel: Nullstelle von f(x) = x³ − 2x − 5]
$f'(x) = 3x^2 - 2$, Startwert $x_0 = 2$:

| $n$ | $x_n$            | $f(x_n)$          |
| --- | ---------------- | ----------------- |
| 0   | 2                | $-1$              |
| 1   | 2,1              | $0{,}061$         |
| 2   | 2,094568…        | $0{,}000186$      |
| 3   | 2,0945514817…    | $\approx 10^{-9}$ |

Schon nach drei Schritten ist das Ergebnis auf neun Stellen genau.
:::

:::tip[Beispiel: Wurzelziehen]
Die Quadratwurzel $\sqrt{a}$ ist die Nullstelle von $f(x) = x^2 - a$. Das Newton-Verfahren liefert

$$
x_{n+1} = x_n - \frac{x_n^2 - a}{2x_n} = \frac{1}{2}\left(x_n + \frac{a}{x_n}\right)
$$

Dieses **Heron-Verfahren** war schon in der Antike bekannt. Für $\sqrt{2}$ mit $x_0 = 1$: $1{,}5 \to 1{,}41\overline{6} \to 1{,}414215\ldots$
:::

Das Newton-Verfahren **konvergiert sehr schnell** (quadratisch: die Anzahl der richtigen Stellen verdoppelt sich ungefähr pro Schritt), wenn der Startwert nahe genug an der Nullstelle liegt. Es kann aber versagen, wenn

- $f'(x_n) = 0$ oder sehr klein ist (waagrechte Tangente),
- der Startwert schlecht gewählt ist und die Näherungen hin- und herspringen oder davonlaufen.

Eine Skizze oder ein paar Schritte Bisektion helfen, einen guten Startwert zu finden.

:::note[Als Programm]
```csharp
double Newton(Func<double, double> f, Func<double, double> df, double x, double eps = 1e-10)
{
    for (int i = 0; i < 100; i++)
    {
        double next = x - f(x) / df(x);
        if (Math.Abs(next - x) < eps) return next;
        x = next;
    }
    throw new Exception("Das Verfahren konvergiert nicht.");
}
```
:::

## Numerische Integration

Ist keine Stammfunktion bekannt oder liegen nur Messwerte vor, nähert man das bestimmte Integral numerisch an. Dazu teilt man $[a; b]$ in $n$ gleich breite Streifen der Breite $h = \frac{b - a}{n}$ mit den Stellen $x_i = a + i \cdot h$ und den Funktionswerten $y_i = f(x_i)$.

### Rechteckregel

Jeder Streifen wird durch ein Rechteck ersetzt, zum Beispiel mit der Höhe am linken Rand:

$$
\int_a^b f(x)\,\mathrm{d}x \approx h \cdot (y_0 + y_1 + \ldots + y_{n-1})
$$

### Trapezregel

Genauer ist es, jeden Streifen durch ein **Trapez** zu ersetzen, also die Punkte linear zu verbinden:

$$
\int_a^b f(x)\,\mathrm{d}x \approx \frac{h}{2} \cdot \big(y_0 + 2y_1 + 2y_2 + \ldots + 2y_{n-1} + y_n\big)
$$

### Simpsonregel

Die **Simpsonregel** verbindet jeweils drei benachbarte Punkte durch eine [Parabel](/de/mathematics/functions/quadratic-functions/#quadratische-interpolation). Die Anzahl $n$ der Streifen muss dafür **gerade** sein:

$$
\int_a^b f(x)\,\mathrm{d}x \approx \frac{h}{3} \cdot \big(y_0 + 4y_1 + 2y_2 + 4y_3 + \ldots + 2y_{n-2} + 4y_{n-1} + y_n\big)
$$

:::tip[Beispiel: Vergleich]
$\int_0^2 e^{x}\,\mathrm{d}x = e^2 - 1 \approx 6{,}3891$ mit $n = 4$ Streifen, $h = 0{,}5$:

| $x_i$ | 0     | 0,5    | 1      | 1,5    | 2      |
| ----- | ----- | ------ | ------ | ------ | ------ |
| $y_i$ | 1     | 1,6487 | 2,7183 | 4,4817 | 7,3891 |

- Rechteckregel (links): $0{,}5 \cdot (1 + 1{,}6487 + 2{,}7183 + 4{,}4817) \approx 4{,}924$
- Trapezregel: $0{,}25 \cdot (1 + 2 \cdot 8{,}8487 + 7{,}3891) \approx 6{,}521$
- Simpsonregel: $\frac{0{,}5}{3} \cdot (1 + 4 \cdot 1{,}6487 + 2 \cdot 2{,}7183 + 4 \cdot 4{,}4817 + 7{,}3891) \approx 6{,}391$

Die Simpsonregel ist schon mit vier Streifen fast exakt.
:::

Bei allen Verfahren wird die Näherung besser, je mehr Streifen man verwendet. Halbiert man $h$, sinkt der Fehler bei der Trapezregel etwa auf ein Viertel, bei der Simpsonregel etwa auf ein Sechzehntel.
