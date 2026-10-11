---
title: Risikomanagement
description: Risiken erkennen, mit Eintrittswahrscheinlichkeit und Auswirkung bewerten, in der Risikomatrix darstellen und mit geeigneten Maßnahmen behandeln.
sidebar:
  order: 5
---

Ein **Risiko** ist ein mögliches Ereignis, das die Projektziele negativ beeinflussen kann, wenn es eintritt. Risiken lassen sich nicht vollständig vermeiden, aber man kann sie früh erkennen und sich auf sie vorbereiten. Das Gegenstück zum Risiko ist die **Chance**, ein mögliches Ereignis mit positiver Wirkung.

## Risikomanagement-Prozess

1. **Risiken identifizieren:** Welche Risiken gibt es?
2. **Risiken analysieren:** Wie wahrscheinlich sind sie, und welche Auswirkungen hätten sie?
3. **Risiken bewerten:** Welche Risiken sind am wichtigsten?
4. **Maßnahmen planen:** Wie gehen wir mit jedem Risiko um?
5. **Risiken überwachen:** Haben sich Risiken verändert? Sind neue dazugekommen?

Der Prozess wird nicht nur einmal beim Projektstart durchlaufen, sondern regelmäßig wiederholt, etwa bei jedem Controlling-Termin.

## Risiken identifizieren

Hilfreiche Quellen und Methoden sind:

- Brainstorming oder die Kopfstandmethode im Team (siehe [Kreativitätstechniken](/de/project_management/basics/creativity_techniques/))
- Checklisten und Erfahrungen aus früheren Projekten
- die Stakeholderanalyse, weil negative Stakeholder ein Risiko sein können
- der Projektstrukturplan, indem jedes Arbeitspaket auf Risiken geprüft wird
- Gespräche mit Expertinnen und Experten

Typische Risikobereiche in IT-Projekten sind:

- **technisch:** neue Technologien, Performance-Probleme, Sicherheitslücken, Datenverlust
- **personell:** Ausfall wichtiger Personen, fehlendes Know-how, Konflikte im Team
- **organisatorisch:** unklare Zuständigkeiten, fehlende Unterstützung durch das Management, Ressourcenkonflikte mit anderen Projekten
- **extern:** Lieferverzögerungen, Insolvenz eines Lieferanten, neue gesetzliche Vorgaben

## Risiken bewerten

Für jedes Risiko werden die **Eintrittswahrscheinlichkeit** und die **Auswirkung** (Schadensausmaß) geschätzt, meist auf einer Skala von 1 bis 5. Das Produkt ist die **Risikokennzahl**:

$$
\text{Risikokennzahl} = \text{Eintrittswahrscheinlichkeit} \cdot \text{Auswirkung}
$$

Alternativ kann mit einer Wahrscheinlichkeit in Prozent und einem Schaden in Euro gerechnet werden. Das Ergebnis ist dann der erwartete Schaden, zum Beispiel 20 % · 10.000 € = 2.000 €.

Die **Risikomatrix** zeigt, welche Risiken besonders kritisch sind:

![Risikomatrix mit Eintrittswahrscheinlichkeit und Auswirkung](/images/project_management/risk_matrix_de.svg)

Risiken im roten Bereich brauchen sofort Maßnahmen, Risiken im gelben Bereich werden beobachtet und bei Bedarf behandelt, Risiken im grünen Bereich werden meist akzeptiert.

## Maßnahmen

| Strategie           | Beschreibung                                                          | Beispiel                                                          |
| ------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| vermeiden           | Die Ursache wird beseitigt, etwa durch eine andere Lösung.           | Statt eines neuen Frameworks wird ein bewährtes verwendet.        |
| vermindern          | Eintrittswahrscheinlichkeit oder Auswirkung werden verringert.       | Wissen wird dokumentiert und auf zwei Personen verteilt.          |
| übertragen          | Das Risiko wird an Dritte weitergegeben.                              | Versicherung, Vertragsstrafe für den Lieferanten, Cloud-Anbieter mit SLA |
| akzeptieren         | Das Risiko wird bewusst getragen, eventuell mit einer Reserve.        | Kleines Risiko, dessen Behandlung teurer wäre als der Schaden     |

Man unterscheidet außerdem:

- **präventive Maßnahmen**, die vor dem Eintritt gesetzt werden, um Wahrscheinlichkeit oder Auswirkung zu senken,
- **korrektive Maßnahmen** (Notfallplan), die erst beim Eintritt umgesetzt werden.

Für jedes wichtige Risiko wird eine verantwortliche Person festgelegt, die es beobachtet und die Maßnahmen umsetzt.

## Risikoliste

Alle Risiken werden in der **Risikoliste** (auch Risikoregister) dokumentiert:

| Nr. | Risiko                                     | W | A | RKZ | Maßnahme                                              | verantwortlich |
| --- | ------------------------------------------ | - | - | --- | ----------------------------------------------------- | -------------- |
| R1  | Hauptentwickler fällt länger aus           | 2 | 5 | 10  | Pair Programming, Code-Reviews, Dokumentation         | Projektleitung |
| R2  | Schnittstelle des Zahlungsanbieters ändert sich | 3 | 4 | 12 | Schnittstelle kapseln, Änderungsmitteilungen abonnieren | Backend     |
| R3  | Server wird nicht rechtzeitig geliefert    | 2 | 3 | 6   | Cloud-Server als Ausweichlösung vorbereiten           | IT-Betrieb     |
| R4  | Datenverlust auf dem Entwicklungsserver    | 2 | 4 | 8   | tägliche Sicherung, Code in Git                       | IT-Betrieb     |
| R5  | Anforderungen ändern sich häufig           | 4 | 4 | 16  | Sprints mit Review, Änderungsprozess vereinbaren      | Projektleitung |

W steht für Eintrittswahrscheinlichkeit, A für Auswirkung und RKZ für Risikokennzahl.

:::tip
Formuliere Risiken als Ursache und Wirkung: „Weil der Lieferant nur eine Person für die Schnittstelle hat, kann es zu Verzögerungen kommen, wenn diese ausfällt.“ So lassen sich passende Maßnahmen leichter finden.
:::
