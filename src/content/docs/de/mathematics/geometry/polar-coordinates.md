---
title: Polarkoordinaten
description: "Polarkoordinaten in der Ebene, Umrechnung zwischen kartesischen und Polarkoordinaten, Vektoren in Polarform, Kurven in Polardarstellung sowie Zylinder- und Kugelkoordinaten."
sidebar:
  order: 5
---

In **kartesischen Koordinaten** beschreibt man einen Punkt durch seine Abstände $x$ und $y$ zu den Achsen. Viele technische Größen sind aber natürlicher durch eine **Länge und einen Winkel** gegeben: die Position eines Ziels auf dem Radarschirm, eine Kraft mit Betrag und Richtung, die Stellung eines Roboterarms oder ein Wechselstromzeiger. Dafür verwendet man **Polarkoordinaten**.

## Definition

Ein Punkt $P$ der Ebene wird durch zwei Zahlen beschrieben:

- den **Abstand** $r \geq 0$ vom Ursprung (Pol),
- den **Polarwinkel** (Argument) $\varphi$, gemessen von der positiven $x$-Achse **gegen den Uhrzeigersinn**.

Man schreibt $P = (r; \varphi)$ oder $P = (r \mid \varphi)$. Der Winkel wird meist im Bereich $0° \leq \varphi < 360°$ oder $-180° < \varphi \leq 180°$ angegeben, in Bogenmaß entsprechend. Anders als bei kartesischen Koordinaten ist die Darstellung nicht eindeutig: $(2; 30°)$ und $(2; 390°)$ sind derselbe Punkt, und für den Ursprung ist jeder Winkel möglich.

## Umrechnung

### Polar in kartesisch

Aus dem rechtwinkeligen Dreieck mit Hypotenuse $r$ folgt mit [Sinus und Cosinus](/de/mathematics/geometry/trigonometry/#einheitskreis):

$$
x = r \cdot \cos\varphi \qquad y = r \cdot \sin\varphi
$$

:::tip[Beispiel]
$P = (6; 210°)$:

$$
x = 6 \cdot \cos 210° \approx -5{,}196 \qquad y = 6 \cdot \sin 210° = -3 \qquad P \approx (-5{,}196 \mid -3)
$$
:::

### Kartesisch in polar

$$
r = \sqrt{x^2 + y^2} \qquad \tan\varphi = \frac{y}{x}
$$

:::caution
Der Taschenrechner liefert für $\arctan\frac{y}{x}$ nur Winkel zwischen $-90°$ und $90°$, also nur Punkte im I. und IV. Quadranten. Liegt der Punkt links der $y$-Achse ($x < 0$), muss man $180°$ addieren. Fertige eine Skizze an, um den Quadranten zu kontrollieren.
:::

| Quadrant | Vorzeichen | Winkel |
| -------- | ---------- | ------ |
| I | $x > 0$, $y \geq 0$ | $\varphi = \arctan\frac{y}{x}$ |
| II, III | $x < 0$ | $\varphi = \arctan\frac{y}{x} + 180°$ |
| IV | $x > 0$, $y < 0$ | $\varphi = \arctan\frac{y}{x} + 360°$ |
| auf der $y$-Achse | $x = 0$ | $\varphi = 90°$ ($y > 0$) bzw. $270°$ ($y < 0$) |

:::tip[Beispiel]
$P = (-3 \mid 4)$:

$$
r = \sqrt{9 + 16} = 5 \qquad \arctan\frac{4}{-3} \approx -53{,}13° \qquad \varphi \approx -53{,}13° + 180° = 126{,}87°
$$

$P = (5; 126{,}87°)$. Der Punkt liegt im II. Quadranten, der Winkel muss also zwischen $90°$ und $180°$ liegen.
:::

Programmiersprachen bieten dafür die Funktion `atan2(y, x)` (C#: `Math.Atan2`, Rust: `f64::atan2`), die den Quadranten automatisch berücksichtigt und einen Winkel in $]-\pi; \pi]$ liefert. Für $(-2 \mid -2)$ ergibt sie zum Beispiel $-135°$, also $225°$.

## Vektoren in Polarform

Ein [Vektor](/de/mathematics/geometry/vectors/) in der Ebene ist durch Betrag und Richtungswinkel ebenso eindeutig bestimmt wie durch seine Komponenten:

$$
\vec{a} = \begin{pmatrix} a_x \\ a_y \end{pmatrix} = \begin{pmatrix} \lvert\vec{a}\rvert \cos\varphi \\ \lvert\vec{a}\rvert \sin\varphi \end{pmatrix}
$$

Zum **Addieren** rechnet man in Komponenten um, addiert und rechnet zurück. Multiplizieren mit einem Skalar ändert nur den Betrag (bei negativem Skalar zusätzlich die Richtung um $180°$).

:::tip[Beispiel: Kräfte]
Auf einen Punkt wirken $F_1 = 50\ \text{N}$ unter $30°$ und $F_2 = 80\ \text{N}$ unter $120°$:

$$
\vec{F}_1 = \begin{pmatrix} 50 \cos 30° \\ 50 \sin 30° \end{pmatrix} \approx \begin{pmatrix} 43{,}30 \\ 25{,}00 \end{pmatrix} \qquad
\vec{F}_2 = \begin{pmatrix} 80 \cos 120° \\ 80 \sin 120° \end{pmatrix} \approx \begin{pmatrix} -40{,}00 \\ 69{,}28 \end{pmatrix}
$$

$$
\vec{F} \approx \begin{pmatrix} 3{,}30 \\ 94{,}28 \end{pmatrix} \qquad \lvert\vec{F}\rvert \approx 94{,}34\ \text{N} \qquad \varphi = \arctan\frac{94{,}28}{3{,}30} \approx 87{,}99°
$$

Weil die beiden Kräfte normal aufeinander stehen, kann man zur Kontrolle auch $\sqrt{50^2 + 80^2} \approx 94{,}34$ rechnen.
:::

Dieselbe Idee steckt hinter der [Polarform komplexer Zahlen](/de/mathematics/algebra/complex-numbers/#polarform) $z = r \cdot (\cos\varphi + j \sin\varphi)$: Die Gaußsche Zahlenebene ist eine Ebene mit Polarkoordinaten. In der Wechselstromtechnik werden Spannungen und Ströme als **Zeiger** mit Amplitude und Phasenwinkel dargestellt.

## Kurven in Polardarstellung

Gibt man $r$ als Funktion des Winkels an, $r = f(\varphi)$, beschreibt das eine Kurve. Manche Kurven sind in Polarkoordinaten viel einfacher als in kartesischen:

| Kurve | Polargleichung | kartesisch |
| ----- | -------------- | ---------- |
| Kreis um den Ursprung mit Radius $a$ | $r = a$ | $x^2 + y^2 = a^2$ |
| Halbgerade unter dem Winkel $\alpha$ | $\varphi = \alpha$ | $y = \tan\alpha \cdot x$ mit passendem Vorzeichen von $x$ |
| archimedische Spirale | $r = a \cdot \varphi$ | keine einfache Form |
| Kardioide (Herzkurve) | $r = a\,(1 + \cos\varphi)$ | Gleichung 4. Grades |

Für die Darstellung mit GeoGebra oder in einem Programm setzt man die Polargleichung in die Umrechnungsformeln ein und erhält eine [Parameterdarstellung](/de/mathematics/functions/functions/#parameterdarstellung) mit dem Parameter $\varphi$:

$$
x(\varphi) = f(\varphi) \cdot \cos\varphi \qquad y(\varphi) = f(\varphi) \cdot \sin\varphi
$$

Anwendungen: Die Spur einer Schallplatte und einer CD ist eine archimedische Spirale, die Richtcharakteristik eines Nierenmikrofons ist eine Kardioide, und Antennendiagramme in Datenblättern werden immer in Polarkoordinaten gezeichnet.

## Koordinaten im Raum

Im Raum gibt es zwei Erweiterungen:

| System | Koordinaten | Umrechnung | Anwendung |
| ------ | ----------- | ---------- | --------- |
| Zylinderkoordinaten | $(r; \varphi; z)$: Polarkoordinaten in der $xy$-Ebene plus Höhe | $x = r\cos\varphi$, $y = r\sin\varphi$, $z = z$ | Drehteile, Wendeltreppen, Spulen |
| Kugelkoordinaten | $(r; \vartheta; \varphi)$: Abstand, Polarwinkel von der $z$-Achse, Azimut | $x = r\sin\vartheta\cos\varphi$, $y = r\sin\vartheta\sin\varphi$, $z = r\cos\vartheta$ | Ortsangaben auf der Erde, 3D-Kamerasteuerung, Abstrahlung von Antennen |

Geografische Koordinaten sind Kugelkoordinaten mit der **Breite** (von $-90°$ bis $90°$, gemessen vom Äquator statt vom Nordpol) und der **Länge** (von $-180°$ bis $180°$, gemessen vom Nullmeridian durch Greenwich). Wien liegt etwa bei $48{,}2°$ nördlicher Breite und $16{,}4°$ östlicher Länge.

## Weiterführende Quellen

- [Polar coordinates, Encyclopedia of Mathematics](https://encyclopediaofmath.org/wiki/Polar_coordinates)
- [GeoGebra (Kurven in Polar- und Parameterdarstellung zeichnen)](https://www.geogebra.org/)
