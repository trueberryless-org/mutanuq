---
title: Rechnen mit Zahlen und Größen
description: Überschlagsrechnung, Runden, Prozentrechnung, Umrechnung von Maßeinheiten sowie absoluter und relativer Fehler.
sidebar:
  order: 5
---

## Größen und Einheiten

In der Technik rechnet man selten mit reinen Zahlen, sondern mit **physikalischen Größen**. Eine Größe besteht aus einem **Zahlenwert** und einer **Einheit**:

$$
U = 230\ \text{V} \qquad \text{(Größe = Zahlenwert} \cdot \text{Einheit)}
$$

Das **Internationale Einheitensystem (SI)** legt sieben Basiseinheiten fest: Meter (m), Kilogramm (kg), Sekunde (s), Ampere (A), Kelvin (K), Mol (mol) und Candela (cd). Alle anderen Einheiten lassen sich daraus ableiten, zum Beispiel $1\ \text{N} = 1\ \frac{\text{kg} \cdot \text{m}}{\text{s}^2}$ oder $1\ \text{V} = 1\ \frac{\text{W}}{\text{A}}$.

### Umrechnen von Einheiten

Beim Umrechnen ersetzt man die Einheit durch ihren Wert in der Zieleinheit. Bei Flächen- und Volumeneinheiten wird der Umrechnungsfaktor quadriert bzw. hoch drei genommen.

| Größe   | Umrechnung                                                           |
| ------- | -------------------------------------------------------------------- |
| Länge   | $1\ \text{km} = 1000\ \text{m}$, $1\ \text{m} = 100\ \text{cm} = 1000\ \text{mm}$ |
| Fläche  | $1\ \text{m}^2 = 100^2\ \text{cm}^2 = 10\,000\ \text{cm}^2$, $1\ \text{ha} = 10\,000\ \text{m}^2$ |
| Volumen | $1\ \text{m}^3 = 1000\ \text{dm}^3 = 1000\ \text{L}$, $1\ \text{L} = 1\ \text{dm}^3$ |
| Zeit    | $1\ \text{h} = 60\ \text{min} = 3600\ \text{s}$                      |
| Geschwindigkeit | $1\ \frac{\text{m}}{\text{s}} = 3{,}6\ \frac{\text{km}}{\text{h}}$ |
| Datenmenge | $1\ \text{Byte} = 8\ \text{Bit}$                                  |

:::tip[Beispiel]
Wie viele Sekunden dauert der Download einer Datei mit $1{,}5\ \text{GB}$ bei einer Datenrate von $100\ \text{Mbit/s}$?

$$
t = \frac{1{,}5\ \text{GB}}{100\ \text{Mbit/s}} = \frac{1{,}5 \cdot 10^9 \cdot 8\ \text{Bit}}{100 \cdot 10^6\ \text{Bit/s}} = \frac{12 \cdot 10^9}{10^8}\ \text{s} = 120\ \text{s}
$$
:::

:::tip[Tipp]
Rechnen Sie immer mit Einheiten. Stimmt die Einheit des Ergebnisses nicht, steckt ein Fehler in der Rechnung. Diese **Einheitenkontrolle** deckt viele Formelfehler auf.
:::

## Runden und Überschlagsrechnung

**Runden:** Ist die erste wegfallende Ziffer $0$ bis $4$, wird abgerundet, ist sie $5$ bis $9$, wird aufgerundet. $3{,}14159$ gerundet auf zwei Nachkommastellen ist $3{,}14$, auf drei $3{,}142$.

Ein Ergebnis sollte nicht genauer angegeben werden als die Ausgangswerte. Als Faustregel gibt man ein Ergebnis mit so vielen **signifikanten Stellen** an wie der ungenaueste Ausgangswert. Signifikant sind alle Ziffern ab der ersten von null verschiedenen: $0{,}00340$ hat drei signifikante Stellen.

Bei der **Überschlagsrechnung** rundet man die Zahlen stark, sodass sich im Kopf rechnen lässt. So erkennt man grobe Fehler, etwa eine falsch gesetzte Kommastelle.

:::tip[Beispiel]
$\dfrac{48{,}7 \cdot 0{,}0213}{3{,}92} \approx \dfrac{50 \cdot 0{,}02}{4} = \dfrac{1}{4} = 0{,}25$. Der genaue Wert ist $0{,}2646\ldots$, das Ergebnis des Taschenrechners ist also plausibel.
:::

## Prozentrechnung

„Prozent“ bedeutet „von Hundert“: $1\,\% = \frac{1}{100} = 0{,}01$. Ebenso ist $1\,‰ = \frac{1}{1000}$ (Promille). In der Prozentrechnung gibt es drei Größen:

$$
\text{Prozentanteil} = \text{Grundwert} \cdot \text{Prozentsatz} \qquad W = G \cdot \frac{p}{100}
$$

:::tip[Beispiele]
- **Prozentanteil:** 20 % von 350 € sind $350 \cdot 0{,}2 = 70$ €.
- **Prozentsatz:** 42 von 56 Schülerinnen und Schülern haben bestanden: $\frac{42}{56} = 0{,}75 = 75\,\%$.
- **Grundwert:** 30 % eines Betrags sind 48 €. Der Betrag ist $\frac{48}{0{,}3} = 160$ €.
:::

### Vermehrter und verminderter Grundwert

Eine Erhöhung um $p\,\%$ entspricht der Multiplikation mit dem **Wachstumsfaktor** $1 + \frac{p}{100}$, eine Verminderung um $p\,\%$ der Multiplikation mit $1 - \frac{p}{100}$.

:::tip[Beispiel: Umsatzsteuer]
Ein Laptop kostet netto 800 €. Mit 20 % Umsatzsteuer kostet er brutto $800 \cdot 1{,}2 = 960$ €.

Umgekehrt: Ein Artikel kostet brutto 54 €. Der Nettopreis ist $\frac{54}{1{,}2} = 45$ €, **nicht** $54 \cdot 0{,}8 = 43{,}20$ €, weil sich die 20 % auf den Nettopreis beziehen.
:::

:::caution
Prozentsätze dürfen nicht einfach addiert werden. Steigt ein Preis zuerst um 10 % und fällt dann um 10 %, ist er danach **niedriger** als vorher: $1{,}1 \cdot 0{,}9 = 0{,}99$, also ein Minus von 1 %.

Außerdem ist zwischen **Prozent** und **Prozentpunkten** zu unterscheiden: Steigt ein Zinssatz von 2 % auf 3 %, ist das ein Anstieg um einen Prozentpunkt, aber um 50 %.
:::

Wiederholte prozentuelle Änderungen führen zum exponentiellen Wachstum, etwa bei der [Zinseszinsrechnung](/de/mathematics/analysis/sequences-and-series/#zinseszinsrechnung).

## Absoluter und relativer Fehler

Jeder gemessene oder gerundete Wert weicht vom wahren Wert ab. Ist $x$ der wahre Wert und $\tilde{x}$ der Näherungswert, so gilt:

$$
\text{absoluter Fehler: } \Delta x = \tilde{x} - x \qquad \text{relativer Fehler: } \delta x = \frac{\Delta x}{x}
$$

Häufig verwendet man die Beträge der Fehler. Der relative Fehler hat keine Einheit und wird meist in Prozent angegeben. Er ist aussagekräftiger als der absolute Fehler, weil er die Abweichung ins Verhältnis zur Größe des Werts setzt.

:::tip[Beispiel]
Eine Strecke von 2 km wird um 1 m falsch gemessen, eine Schraube mit 10 mm Länge um 1 mm.

- Strecke: $\lvert\delta\rvert = \frac{1\ \text{m}}{2000\ \text{m}} = 0{,}05\,\%$
- Schraube: $\lvert\delta\rvert = \frac{1\ \text{mm}}{10\ \text{mm}} = 10\,\%$

Obwohl der absolute Fehler bei der Strecke 1000-mal größer ist, ist die Messung der Strecke viel genauer.
:::

Messgeräte geben ihre Genauigkeit oft als relativen Fehler an, etwa „$\pm 1\,\%$ vom Messwert“. Ein mit diesem Gerät gemessener Widerstand von $470\ \Omega$ liegt dann zwischen $465{,}3\ \Omega$ und $474{,}7\ \Omega$.

### Fehler bei Rechenoperationen

Rechnet man mit fehlerbehafteten Werten weiter, pflanzen sich die Fehler fort. Als Faustregel gilt für kleine Fehler:

- Bei **Addition und Subtraktion** addieren sich die **absoluten** Fehler.
- Bei **Multiplikation und Division** addieren sich die **relativen** Fehler.

:::tip[Beispiel]
Ein Rechteck ist $a = (20 \pm 0{,}1)\ \text{cm}$ lang und $b = (10 \pm 0{,}1)\ \text{cm}$ breit. Die relativen Fehler sind $0{,}5\,\%$ und $1\,\%$. Die Fläche $A = 200\ \text{cm}^2$ hat daher einen relativen Fehler von etwa $1{,}5\,\%$, also $A \approx (200 \pm 3)\ \text{cm}^2$.
:::

Besonders gefährlich ist die **Subtraktion fast gleich großer Zahlen** (Auslöschung): Die absoluten Fehler bleiben gleich, das Ergebnis wird aber sehr klein, wodurch der relative Fehler stark wächst.
