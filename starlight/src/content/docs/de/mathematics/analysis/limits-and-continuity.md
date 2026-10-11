---
title: Grenzwert und Stetigkeit
description: Grenzwerte von Funktionen, einseitige Grenzwerte, Rechenregeln, Grenzwerte im Unendlichen, Stetigkeit und Arten von Unstetigkeitsstellen.
sidebar:
  order: 2
---

## Grenzwert einer Funktion

Der **Grenzwert** (Limes) einer Funktion $f$ an der Stelle $x_0$ ist der Wert, dem sich $f(x)$ beliebig annähert, wenn $x$ gegen $x_0$ geht:

$$
\lim_{x \to x_0} f(x) = a
$$

Wichtig: Es kommt nur darauf an, wie sich $f$ **in der Nähe** von $x_0$ verhält. Ob und welchen Wert $f$ an der Stelle $x_0$ selbst hat, spielt keine Rolle.

:::tip[Beispiel]
$f(x) = \dfrac{x^2 - 4}{x - 2}$ ist an der Stelle $2$ nicht definiert. Für $x \ne 2$ kann man kürzen:

$$
\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{(x - 2)(x + 2)}{x - 2} = \lim_{x \to 2} (x + 2) = 4
$$

Eine Wertetabelle bestätigt das: $f(1{,}9) = 3{,}9$, $f(1{,}99) = 3{,}99$, $f(2{,}01) = 4{,}01$.
:::

### Einseitige Grenzwerte

Nähert man sich $x_0$ nur von links ($x < x_0$) oder nur von rechts ($x > x_0$), erhält man den **linksseitigen** bzw. rechtsseitigen Grenzwert:

$$
\lim_{x \to x_0^-} f(x) \qquad \lim_{x \to x_0^+} f(x)
$$

Der Grenzwert existiert genau dann, wenn beide einseitigen Grenzwerte existieren und gleich sind.

:::tip[Beispiel]
$f(x) = \frac{1}{x}$ an der Stelle $0$: $\lim_{x \to 0^-} \frac{1}{x} = -\infty$, aber $\lim_{x \to 0^+} \frac{1}{x} = +\infty$. Der Grenzwert existiert nicht, die Funktion hat dort eine **Polstelle**.
:::

### Rechenregeln

Existieren $\lim f(x) = a$ und $\lim g(x) = b$, dann gilt:

$$
\lim (f \pm g) = a \pm b \qquad \lim (f \cdot g) = a \cdot b \qquad \lim \frac{f}{g} = \frac{a}{b} \;\;(b \ne 0) \qquad \lim c \cdot f = c \cdot a
$$

Bei Polynomen und vielen anderen „gutartigen“ Funktionen kann man den Grenzwert deshalb durch einfaches Einsetzen berechnen: $\lim_{x \to 3} (x^2 + 1) = 10$.

## Grenzwerte im Unendlichen

Für $x \to \pm\infty$ untersucht man, ob sich $f(x)$ einer Zahl nähert (waagrechte Asymptote) oder unbeschränkt wächst.

Grundlegende Grenzwerte:

$$
\lim_{x \to \infty} \frac{1}{x} = 0 \qquad \lim_{x \to \infty} \frac{1}{x^n} = 0 \;(n > 0) \qquad \lim_{x \to \infty} e^{-x} = 0 \qquad \lim_{x \to -\infty} e^{x} = 0
$$

Bei Quotienten von Polynomen dividiert man Zähler und Nenner durch die **höchste Potenz des Nenners**:

:::tip[Beispiel]
$$
\lim_{x \to \infty} \frac{3x^2 + 2x}{x^2 - 5} = \lim_{x \to \infty} \frac{3 + \frac{2}{x}}{1 - \frac{5}{x^2}} = \frac{3 + 0}{1 - 0} = 3
$$
:::

Exponentialfunktionen wachsen schneller als jede Potenzfunktion und Potenzfunktionen schneller als Logarithmusfunktionen:

$$
\lim_{x \to \infty} \frac{x^{100}}{e^x} = 0 \qquad \lim_{x \to \infty} \frac{\ln x}{x} = 0
$$

### Unbestimmte Ausdrücke

Ausdrücke wie $\frac{0}{0}$, $\frac{\infty}{\infty}$, $\infty - \infty$ oder $0 \cdot \infty$ haben keinen festen Wert. Man muss den Term zuerst umformen (kürzen, erweitern, durch die höchste Potenz dividieren). Mithilfe der Differentialrechnung lassen sich solche Grenzwerte auch mit der **Regel von de l'Hospital** berechnen: Für $\frac{0}{0}$ oder $\frac{\infty}{\infty}$ gilt $\lim \frac{f}{g} = \lim \frac{f'}{g'}$.

:::tip[Beispiel: Ein wichtiger Grenzwert]
$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

Für kleine Winkel im Bogenmaß gilt daher $\sin x \approx x$. Diese Näherung wird zum Beispiel beim Fadenpendel verwendet.
:::

## Stetigkeit

Anschaulich ist eine Funktion **stetig**, wenn man ihren Graphen zeichnen kann, ohne den Stift abzusetzen. Genauer: $f$ ist an der Stelle $x_0$ stetig, wenn

1. $f(x_0)$ definiert ist,
2. der Grenzwert $\lim_{x \to x_0} f(x)$ existiert und
3. beide übereinstimmen: $\lim_{x \to x_0} f(x) = f(x_0)$.

Polynomfunktionen, Exponentialfunktionen, Sinus und Cosinus sind überall stetig. Gebrochen rationale Funktionen, Logarithmus- und Wurzelfunktionen sind auf ihrer Definitionsmenge stetig. Summen, Produkte, Quotienten und Verkettungen stetiger Funktionen sind wieder stetig.

### Unstetigkeitsstellen

| Art                    | Beschreibung                                                          | Beispiel                                  |
| ---------------------- | --------------------------------------------------------------------- | ----------------------------------------- |
| Sprungstelle       | links- und rechtsseitiger Grenzwert existieren, sind aber verschieden | Einschaltvorgang, Stufenfunktion, Tarifstufen |
| Polstelle          | die Funktionswerte gehen gegen $\pm\infty$                            | $\frac{1}{x}$ bei $x = 0$                 |
| hebbare Unstetigkeit | der Grenzwert existiert, stimmt aber nicht mit $f(x_0)$ überein oder $f(x_0)$ ist nicht definiert | $\frac{x^2 - 4}{x - 2}$ bei $x = 2$ |

Eine hebbare Unstetigkeit lässt sich beseitigen, indem man $f(x_0)$ als den Grenzwert definiert.

:::tip[Beispiel: Paketpreise]
Ein Paketdienst verlangt bis 2 kg 5 €, bis 5 kg 7 € und bis 10 kg 10 €. Die Preisfunktion ist eine **Treppenfunktion** mit Sprungstellen bei 2 kg und 5 kg. Genau bei 2 kg kostet das Paket noch 5 €: Der linksseitige Grenzwert und der Funktionswert sind 5 €, der rechtsseitige Grenzwert 7 €.
:::

### Zwischenwertsatz

Ist $f$ auf dem Intervall $[a; b]$ stetig und haben $f(a)$ und $f(b)$ verschiedene Vorzeichen, dann hat $f$ zwischen $a$ und $b$ mindestens eine Nullstelle. Auf diesem Satz beruht das [Bisektionsverfahren](/de/mathematics/analysis/numerical-methods/#bisektionsverfahren) zur näherungsweisen Berechnung von Nullstellen.
