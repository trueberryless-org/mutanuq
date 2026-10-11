---
title: Ressourcenplanung
description: Einsatzmittel im Projekt, Kapazität und Bedarf, das Belastungsdiagramm sowie Möglichkeiten zum Ausgleich von Überlastungen.
sidebar:
  order: 3
---

Die Ressourcenplanung (auch Einsatzmittelplanung) stellt sicher, dass für jedes Arbeitspaket zur richtigen Zeit die richtigen Personen und Mittel verfügbar sind. Ein Terminplan ist wertlos, wenn die eingeplante Entwicklerin gleichzeitig in drei Projekten arbeiten soll.

## Arten von Ressourcen

- **Personal:** Projektmitarbeitende mit bestimmten Qualifikationen, etwa Backend-Entwicklung, Netzwerktechnik oder Design
- **Sachmittel:** Hardware, Software-Lizenzen, Testgeräte, Räume, Serverkapazität
- **Finanzmittel:** das Budget, das in der [Kostenplanung](/de/project_management/planning/cost_planning_and_estimation/) behandelt wird

Personal ist in IT-Projekten meist die knappste und teuerste Ressource.

## Bedarf und Kapazität

Für jede Ressource werden zwei Größen verglichen:

- Der **Bedarf** ergibt sich aus den Arbeitspaketen: Welche Qualifikation wird wann und in welchem Umfang gebraucht? Er wird meist in **Personentagen** (PT) oder Personenstunden angegeben.
- Die **Kapazität** ist die tatsächlich verfügbare Arbeitszeit. Sie ist fast immer kleiner als die Vollzeit, weil Mitarbeitende Urlaub haben, krank werden, an Besprechungen teilnehmen und oft auch Aufgaben außerhalb des Projekts erledigen.

:::note[Beispiel]
Eine Vollzeitkraft arbeitet 5 Tage pro Woche. Ist sie zu 60 % für das Projekt freigestellt, stehen dem Projekt nur 3 Personentage pro Woche zur Verfügung. Ein Arbeitspaket mit 12 Personentagen Aufwand dauert bei ihr also 4 Wochen, nicht 12 Tage.
:::

Aufwand und Dauer sind daher nicht dasselbe. Der **Aufwand** gibt an, wie viel Arbeit nötig ist. Die **Dauer** gibt an, wie lange es im Kalender dauert. Sie hängt vom Aufwand, von der Anzahl der Personen und von ihrer Verfügbarkeit ab.

## Belastungsdiagramm

Das **Belastungsdiagramm** (auch Ressourcenhistogramm) zeigt für jede Ressource den Bedarf pro Zeiteinheit im Vergleich zur Kapazität. Überschreitet der Bedarf die Kapazität, ist die Ressource überlastet.

| Woche                 | 1   | 2   | 3   | 4   | 5   |
| --------------------- | --- | --- | --- | --- | --- |
| Kapazität Backend (PT) | 5  | 5   | 5   | 5   | 5   |
| Bedarf Arbeitspaket 3.1 | 3 | 3   |     |     |     |
| Bedarf Arbeitspaket 3.2 |   | 4   | 5   | 3   |     |
| Bedarf gesamt          | 3  | 7   | 5   | 3   | 0   |

In Woche 2 ist die Backend-Entwicklung mit 7 statt 5 Personentagen überlastet.

## Ressourcenausgleich

Überlastungen können auf verschiedene Arten beseitigt werden:

- **Puffer nutzen:** Vorgänge, die nicht auf dem kritischen Pfad liegen, werden innerhalb ihres Puffers verschoben (siehe [Terminplanung](/de/project_management/planning/schedule_planning/)).
- **Vorgänge strecken:** Ein Arbeitspaket wird mit weniger Personen über einen längeren Zeitraum bearbeitet.
- **Zusätzliche Ressourcen:** Weitere Mitarbeitende oder externe Dienstleister werden eingesetzt. Neue Personen brauchen aber Einarbeitungszeit.
- **Überstunden:** kurzfristig möglich, auf Dauer senken sie aber Qualität und Motivation.
- **Umfang reduzieren:** Weniger wichtige Anforderungen werden gestrichen oder verschoben.
- **Endtermin verschieben:** wenn keine andere Möglichkeit bleibt und der Auftraggeber zustimmt.

:::caution[Brooks'sches Gesetz]
„Einem verspäteten Softwareprojekt mehr Personal hinzuzufügen, macht es noch später.“ Neue Teammitglieder müssen eingearbeitet werden, und der Abstimmungsaufwand steigt mit jeder zusätzlichen Person.
:::

## Ressourcen über mehrere Projekte

In Unternehmen arbeiten dieselben Personen oft an mehreren Projekten gleichzeitig. Die Ressourcenplanung muss dann projektübergreifend erfolgen, meist durch ein Projektmanagement-Office (PMO) oder die Abteilungsleitungen. Konflikte um Ressourcen werden anhand der Prioritäten im Projektportfolio entschieden.
