---
title: Terminplanung
description: Meilensteinplan, Balkenplan und Netzplan mit Vorwärts- und Rückwärtsrechnung, Pufferzeiten und kritischem Pfad an einem durchgerechneten Beispiel.
sidebar:
  order: 2
---

Die Terminplanung legt fest, wann welches Arbeitspaket bearbeitet wird. Grundlage sind die Arbeitspakete aus dem [Projektstrukturplan](/de/project_management/planning/work_breakdown_structure/), ihre Dauer und die Abhängigkeiten zwischen ihnen.

## Meilensteinplan

Ein **Meilenstein** ist ein wichtiges Ereignis im Projekt, das selbst keine Dauer hat, etwa „Pflichtenheft freigegeben“ oder „Go-live“. An Meilensteinen wird der Projektfortschritt überprüft, und oft wird entschieden, ob und wie das Projekt weiterläuft.

Der **Meilensteinplan** listet alle Meilensteine mit ihren geplanten Terminen auf. Er ist die einfachste Form der Terminplanung und eignet sich gut für die Kommunikation mit dem Auftraggeber.

| Nr. | Meilenstein                  | Plantermin | Isttermin |
| --- | ---------------------------- | ---------- | --------- |
| M1  | Projektauftrag unterzeichnet | 15.09.     | 15.09.    |
| M2  | Pflichtenheft freigegeben    | 20.10.     | 24.10.    |
| M3  | Prototyp fertig              | 15.12.     |           |
| M4  | Abnahme                      | 31.03.     |           |

## Balkenplan

Der **Balkenplan** (Gantt-Diagramm) stellt jedes Arbeitspaket als Balken auf einer Zeitachse dar. Er ist leicht verständlich und zeigt auf einen Blick, was wann parallel läuft. Abhängigkeiten zwischen den Vorgängen sind aber nur schwer erkennbar.

![Balkenplan des Beispielprojekts](/images/project_management/gantt_chart_de.svg)

## Netzplan

Der **Netzplan** stellt die Vorgänge und ihre Abhängigkeiten als Graph dar. Mit ihm lassen sich die frühesten und spätesten Termine, die Pufferzeiten und der kritische Pfad berechnen. Die hier gezeigte Form ist der Vorgangsknotennetzplan nach DIN 69900, bei dem jeder Vorgang ein Knoten ist.

### Anordnungsbeziehungen

Die Abhängigkeiten zwischen zwei Vorgängen heißen Anordnungsbeziehungen:

| Beziehung      | Bedeutung                                              | Beispiel                                          |
| -------------- | ------------------------------------------------------ | ------------------------------------------------- |
| Normalfolge (Ende-Anfang) | B beginnt, wenn A beendet ist. Das ist der häufigste Fall. | Tests beginnen nach der Programmierung.  |
| Anfangsfolge (Anfang-Anfang) | B beginnt, wenn A beginnt.                    | Dokumentation beginnt zusammen mit der Programmierung. |
| Endfolge (Ende-Ende) | B endet, wenn A endet.                           | Schulung endet mit dem Go-live.                   |
| Sprungfolge (Anfang-Ende) | B endet, wenn A beginnt.                     | Altes System läuft, bis das neue startet.         |

Im Folgenden werden nur Normalfolgen verwendet.

### Aufbau eines Knotens

Jeder Knoten enthält neben Nummer und Bezeichnung sechs Werte:

- **D:** Dauer des Vorgangs
- **FAZ:** frühester Anfangszeitpunkt
- **FEZ:** frühester Endzeitpunkt
- **SAZ:** spätester Anfangszeitpunkt
- **SEZ:** spätester Endzeitpunkt
- **GP:** Gesamtpuffer

### Beispiel

Ein kleines Softwareprojekt besteht aus folgenden Vorgängen (Dauer in Tagen):

| Nr. | Vorgang        | Dauer | Vorgänger |
| --- | -------------- | ----- | --------- |
| A   | Anforderungen  | 3     | keiner    |
| B   | Entwurf        | 4     | A         |
| C   | Backend        | 6     | B         |
| D   | Frontend       | 4     | B         |
| G   | Dokumentation  | 5     | B         |
| E   | Tests          | 3     | C, D      |
| F   | Übergabe       | 1     | E, G      |

### Vorwärtsrechnung

Die Vorwärtsrechnung beginnt beim ersten Vorgang mit FAZ = 0 und ermittelt die frühesten Termine:

- FEZ = FAZ + D
- Der FAZ eines Vorgangs ist der **größte** FEZ aller seiner Vorgänger, denn er kann erst beginnen, wenn alle Vorgänger fertig sind.

Für das Beispiel ergibt sich: A läuft von 0 bis 3, B von 3 bis 7. C, D und G beginnen alle bei 7 und enden bei 13, 11 und 12. E beginnt nach C und D, also beim größeren Wert 13, und endet bei 16. F beginnt nach E und G, also bei 16, und endet bei 17. Das Projekt dauert damit **17 Tage**.

### Rückwärtsrechnung

Die Rückwärtsrechnung beginnt beim letzten Vorgang mit SEZ = FEZ und ermittelt die spätesten Termine:

- SAZ = SEZ − D
- Der SEZ eines Vorgangs ist der **kleinste** SAZ aller seiner Nachfolger.

F muss spätestens bei 16 beginnen. Daraus folgt für E ein SEZ von 16 und ein SAZ von 13, für G ein SEZ von 16 und ein SAZ von 11. C und D müssen bis 13 fertig sein, damit E rechtzeitig beginnen kann. B hat drei Nachfolger mit den SAZ 7 (C), 9 (D) und 11 (G), sein SEZ ist also der kleinste Wert 7.

### Pufferzeiten

- **Gesamtpuffer:** GP = SAZ − FAZ (oder SEZ − FEZ). Um so viel kann sich ein Vorgang verschieben, ohne das Projektende zu gefährden.
- **Freier Puffer:** FP = kleinster FAZ der Nachfolger − FEZ. Um so viel kann sich ein Vorgang verschieben, ohne dass sich ein Nachfolger verschiebt.

| Vorgang | FAZ | FEZ | SAZ | SEZ | GP | FP |
| ------- | --- | --- | --- | --- | -- | -- |
| A       | 0   | 3   | 0   | 3   | 0  | 0  |
| B       | 3   | 7   | 3   | 7   | 0  | 0  |
| C       | 7   | 13  | 7   | 13  | 0  | 0  |
| D       | 7   | 11  | 9   | 13  | 2  | 2  |
| G       | 7   | 12  | 11  | 16  | 4  | 4  |
| E       | 13  | 16  | 13  | 16  | 0  | 0  |
| F       | 16  | 17  | 16  | 17  | 0  | 0  |

### Kritischer Pfad

Vorgänge mit einem Gesamtpuffer von 0 heißen **kritische Vorgänge**. Verzögert sich einer von ihnen, verschiebt sich das Projektende. Die Kette der kritischen Vorgänge bildet den **kritischen Pfad**, im Beispiel A, B, C, E, F.

![Netzplan des Beispielprojekts mit kritischem Pfad](/images/project_management/network_plan_de.svg)

:::tip[Bedeutung für die Steuerung]
Die Projektleitung muss die kritischen Vorgänge besonders genau überwachen. Soll das Projekt schneller fertig werden, bringt es nur etwas, kritische Vorgänge zu verkürzen, etwa durch zusätzliches Personal für C. Vorgänge mit Puffer, wie D und G, können dagegen verschoben werden, um Ressourcen auszugleichen.
:::

## Werkzeuge

Für größere Projekte werden Terminpläne mit Software erstellt, etwa Microsoft Project, ProjectLibre, GanttProject oder den Zeitleisten in Jira und GitLab. Die Programme berechnen den Netzplan automatisch und zeigen Auswirkungen von Verschiebungen sofort an. Die Rechenregeln solltest du trotzdem beherrschen, um die Ergebnisse interpretieren zu können.
