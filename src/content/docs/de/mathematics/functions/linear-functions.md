---
title: Lineare Funktionen
description: Steigung und Achsenabschnitt, Aufstellen von Geradengleichungen, direkte und indirekte Proportionalität, lineare Modelle und lineare Interpolation.
sidebar:
  order: 2
---

## Funktionsgleichung

Eine **lineare Funktion** hat die Form

$$
f(x) = k \cdot x + d
$$

Ihr Graph ist eine **Gerade**.

- $k$ ist die Steigung: Erhöht man $x$ um $1$, ändert sich $f(x)$ um $k$.
- $d$ ist der Achsenabschnitt auf der $y$-Achse: $f(0) = d$.

| Steigung  | Verlauf der Geraden           |
| --------- | ----------------------------- |
| $k > 0$   | steigend                      |
| $k < 0$   | fallend                       |
| $k = 0$   | waagrecht (konstante Funktion) |

## Steigung berechnen

Die Steigung ist das Verhältnis von Höhenunterschied zu waagrechtem Abstand, dargestellt im **Steigungsdreieck**:

$$
k = \frac{\Delta y}{\Delta x} = \frac{y_2 - y_1}{x_2 - x_1}
$$

Der Steigungswinkel $\alpha$ zur $x$-Achse erfüllt $\tan\alpha = k$.

:::tip[Beispiel: Gerade durch zwei Punkte]
Gesucht ist die Gerade durch $P_1 = (1 \mid 3)$ und $P_2 = (4 \mid 9)$.

$$
k = \frac{9 - 3}{4 - 1} = 2
$$

$d$ erhält man durch Einsetzen eines Punktes: $3 = 2 \cdot 1 + d \Rightarrow d = 1$.

Also ist $f(x) = 2x + 1$.
:::

**Punkt-Steigungs-Form:** Kennt man einen Punkt $(x_1 \mid y_1)$ und die Steigung $k$, gilt direkt

$$
y = k \cdot (x - x_1) + y_1
$$

## Lage zweier Geraden

- **Parallel:** gleiche Steigung, $k_1 = k_2$.
- **Normal** (rechtwinkelig): $k_1 \cdot k_2 = -1$, also $k_2 = -\frac{1}{k_1}$.
- **Schnittpunkt:** Gleichsetzen $k_1 x + d_1 = k_2 x + d_2$ und nach $x$ lösen.
- **Nullstelle:** $kx + d = 0 \Rightarrow x = -\frac{d}{k}$ (für $k \ne 0$).

:::tip[Beispiel: Tarifvergleich]
Mobilfunktarif A kostet 10 € Grundgebühr und 0,05 € pro Minute, Tarif B 4 € Grundgebühr und 0,09 € pro Minute. Ab wie vielen Minuten ist A günstiger?

$$
10 + 0{,}05x = 4 + 0{,}09x \;\Rightarrow\; 6 = 0{,}04x \;\Rightarrow\; x = 150
$$

Ab 150 Minuten pro Monat ist Tarif A günstiger.
:::

## Lineare Modelle

Viele technische und wirtschaftliche Zusammenhänge sind (näherungsweise) linear. In einem Sachzusammenhang haben $k$ und $d$ eine konkrete Bedeutung:

| Anwendung                    | Funktion                    | $k$                         | $d$                    |
| ---------------------------- | --------------------------- | --------------------------- | ---------------------- |
| Gleichförmige Bewegung       | $s(t) = v \cdot t + s_0$    | Geschwindigkeit             | Startposition          |
| Kosten                       | $K(x) = k_v \cdot x + K_f$  | variable Kosten pro Stück   | Fixkosten              |
| Ohmsches Gesetz              | $U(I) = R \cdot I$          | Widerstand                  | 0                      |
| Längenausdehnung             | $l(\vartheta) = l_0 (1 + \alpha \vartheta)$ | $l_0 \alpha$      | Länge bei $0\,°\text{C}$ |

:::note
Die Steigung hat immer die Einheit „Einheit von $y$ pro Einheit von $x$“, zum Beispiel €/Stück, m/s oder V/A. Das hilft, sie im Sachzusammenhang richtig zu interpretieren.
:::

## Direkte und indirekte Proportionalität

Zwei Größen sind **direkt proportional**, wenn zum doppelten (dreifachen, …) Wert der einen Größe der doppelte (dreifache, …) Wert der anderen gehört. Ihr Quotient ist konstant:

$$
y = k \cdot x \qquad \frac{y}{x} = k
$$

Der Graph ist eine Gerade durch den Ursprung ($d = 0$). Beispiel: Preis und Menge bei festem Stückpreis.

Zwei Größen sind **indirekt proportional** (umgekehrt proportional), wenn zum doppelten Wert der einen der halbe Wert der anderen gehört. Ihr Produkt ist konstant:

$$
y = \frac{c}{x} \qquad x \cdot y = c
$$

Der Graph ist eine **Hyperbel**, also keine lineare Funktion. Beispiel: Anzahl der Arbeitskräfte und benötigte Zeit, oder bei konstanter Spannung Widerstand und Stromstärke.

:::tip[Beispiel]
5 Server verarbeiten einen Auftrag in 12 Stunden. Wie lange brauchen 8 Server (bei gleicher Leistung)?

$$
5 \cdot 12 = 8 \cdot t \quad\Rightarrow\quad t = 7{,}5\ \text{h}
$$
:::

## Lineare Interpolation

Liegen nur einzelne Messwerte oder Tabellenwerte vor, schätzt man Zwischenwerte, indem man die beiden benachbarten Punkte durch eine Gerade verbindet (**lineare Interpolation**):

$$
f(x) \approx y_1 + \frac{y_2 - y_1}{x_2 - x_1} \cdot (x - x_1) \qquad \text{für } x_1 \le x \le x_2
$$

Schätzt man Werte außerhalb des Messbereichs, spricht man von **Extrapolation**. Sie ist deutlich unsicherer.

:::tip[Beispiel]
Ein Temperatursensor liefert bei $20\,°\text{C}$ einen Widerstand von $1078\ \Omega$ und bei $30\,°\text{C}$ einen Widerstand von $1117\ \Omega$. Welche Temperatur herrscht bei $1100\ \Omega$?

Man interpoliert hier die Temperatur in Abhängigkeit vom Widerstand:

$$
\vartheta \approx 20 + \frac{30 - 20}{1117 - 1078} \cdot (1100 - 1078) = 20 + \frac{10}{39} \cdot 22 \approx 25{,}6\,°\text{C}
$$
:::

Genauere Näherungen erhält man mit der [quadratischen Interpolation](/de/mathematics/functions/quadratic-functions/#quadratische-interpolation) durch drei Punkte.
