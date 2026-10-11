---
title: Aufwandsschätzung und Kostenplanung
description: Methoden zur Aufwandsschätzung wie Expertenschätzung, Analogieverfahren, Drei-Punkt-Schätzung und Planning Poker sowie Kostenarten, Kostenplan und Kostensummenlinie.
sidebar:
  order: 4
---

Bevor Kosten geplant werden können, muss der Aufwand für jedes Arbeitspaket geschätzt werden. Schätzungen sind immer unsicher. Mit den richtigen Methoden lässt sich die Unsicherheit aber verringern und sichtbar machen.

## Methoden der Aufwandsschätzung

### Expertenschätzung

Eine oder mehrere erfahrene Personen schätzen den Aufwand auf Basis ihrer Erfahrung. Die Methode ist schnell, hängt aber stark von den Schätzenden ab. Idealerweise schätzt die Person, die das Arbeitspaket später auch erledigt.

### Delphi-Methode

Mehrere Expertinnen und Experten schätzen unabhängig und anonym. Die Ergebnisse werden zusammengefasst und an alle zurückgemeldet. Wer stark vom Durchschnitt abweicht, begründet seine Schätzung. Danach wird erneut geschätzt, bis die Werte ausreichend übereinstimmen.

### Analogieverfahren

Der Aufwand wird aus ähnlichen, bereits abgeschlossenen Projekten abgeleitet. Voraussetzung ist, dass Erfahrungswerte aus früheren Projekten dokumentiert wurden.

### Drei-Punkt-Schätzung

Für jedes Arbeitspaket werden drei Werte geschätzt: ein optimistischer Wert $O$, ein wahrscheinlicher Wert $M$ und ein pessimistischer Wert $P$. Nach der PERT-Methode ergibt sich der Erwartungswert als gewichteter Mittelwert:

$$
E = \frac{O + 4M + P}{6}
$$

Die Standardabweichung $\sigma = \frac{P - O}{6}$ zeigt, wie unsicher die Schätzung ist.

:::note[Beispiel]
Für die Anbindung einer Zahlungsschnittstelle werden optimistisch 4, wahrscheinlich 6 und pessimistisch 14 Personentage geschätzt:

$$
E = \frac{4 + 4 \cdot 6 + 14}{6} = \frac{42}{6} = 7 \text{ PT}, \qquad \sigma = \frac{14 - 4}{6} \approx 1{,}7 \text{ PT}
$$

Der Erwartungswert liegt über dem wahrscheinlichsten Wert, weil der pessimistische Fall stärker abweicht als der optimistische.
:::

### Planning Poker

In agilen Teams wird oft mit **Planning Poker** geschätzt. Jedes Teammitglied hat Karten mit Werten aus einer an die Fibonacci-Folge angelehnten Reihe, etwa 1, 2, 3, 5, 8, 13, 20. Nachdem eine User Story vorgestellt wurde, decken alle gleichzeitig ihre Karte auf. Bei großen Unterschieden erklären die Personen mit dem höchsten und dem niedrigsten Wert ihre Gründe, danach wird erneut geschätzt. Geschätzt wird meist nicht in Stunden, sondern in **Story Points**, die die relative Größe einer Aufgabe ausdrücken.

### Function-Point-Analyse

Bei der Function-Point-Analyse wird die fachliche Größe einer Software anhand ihrer Funktionen bestimmt, etwa Eingaben, Ausgaben, Abfragen und Datenbestände. Aus der Anzahl der Function Points wird mit Erfahrungswerten der Aufwand abgeleitet. Die Methode ist aufwendig, aber unabhängig von der Programmiersprache.

## Kostenarten

| Kostenart          | Beispiele                                                                 |
| ------------------ | ------------------------------------------------------------------------- |
| Personalkosten     | Arbeitszeit der Projektmitarbeitenden (Aufwand · Stundensatz)             |
| Sachkosten         | Hardware, Software-Lizenzen, Cloud-Ressourcen, Büromaterial               |
| Fremdleistungen    | externe Entwicklung, Beratung, Schulungen, Zertifikate                    |
| Reisekosten        | Fahrten zum Kunden, Übernachtungen                                        |
| Gemeinkosten       | anteilige Kosten für Räume, Verwaltung und Infrastruktur                  |

## Kostenplan

Im **Kostenplan** werden die Kosten jedem Arbeitspaket zugeordnet und zu den Gesamtkosten des Projekts addiert.

| PSP-Code | Arbeitspaket   | Aufwand (PT) | Personalkosten (600 €/PT) | Sachkosten | Summe     |
| -------- | -------------- | ------------ | ------------------------- | ---------- | --------- |
| 3.1      | Datenbank      | 5            | 3.000 €                   | 0 €        | 3.000 €   |
| 3.2      | Backend        | 12           | 7.200 €                   | 0 €        | 7.200 €   |
| 3.3      | Frontend       | 10           | 6.000 €                   | 400 €      | 6.400 €   |
| 5.1      | Server         | 2            | 1.200 €                   | 1.800 €    | 3.000 €   |
|          | Summe          | 29           | 17.400 €                  | 2.200 €    | 19.600 €  |

Zusätzlich wird meist eine **Reserve** für Risiken eingeplant, zum Beispiel 10 bis 20 % der geplanten Kosten. Über ihre Verwendung entscheidet in der Regel der Auftraggeber.

## Kostenganglinie und Kostensummenlinie

Verknüpft man den Kostenplan mit dem Terminplan, erhält man die zeitliche Verteilung der Kosten:

- Die **Kostenganglinie** zeigt die Kosten pro Zeitabschnitt, etwa pro Woche oder Monat. Sie zeigt, wann wie viel Geld gebraucht wird.
- Die **Kostensummenlinie** zeigt die bis zu einem Zeitpunkt angefallenen Gesamtkosten. Sie hat meist die Form eines „S“, weil am Anfang und am Ende weniger Kosten anfallen als in der Umsetzungsphase.

Die Kostensummenlinie ist die Grundlage für den Soll-Ist-Vergleich im [Projektcontrolling](/de/project_management/controlling/project_controlling/), etwa für die Earned-Value-Analyse.
