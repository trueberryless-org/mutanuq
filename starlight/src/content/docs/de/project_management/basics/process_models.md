---
title: Vorgehensmodelle
description: Klassische Vorgehensmodelle wie Wasserfall- und V-Modell, iterative Ansätze sowie agile Methoden mit Scrum und Kanban im Vergleich.
sidebar:
  order: 6
---

Ein **Vorgehensmodell** legt fest, in welcher Reihenfolge die Aufgaben eines Projekts erledigt werden. Welches Modell passt, hängt davon ab, wie genau die Anforderungen am Anfang bekannt sind und wie oft sie sich ändern.

## Klassische Vorgehensmodelle

### Wasserfallmodell

Beim **Wasserfallmodell** werden die Phasen streng nacheinander durchlaufen: Anforderungsanalyse, Entwurf, Implementierung, Test, Inbetriebnahme und Wartung. Jede Phase endet mit einem Ergebnis, etwa einem Dokument, das freigegeben werden muss, bevor die nächste Phase beginnt.

- **Vorteile:** klare Struktur, gute Planbarkeit von Terminen und Kosten, einfache Steuerung
- **Nachteile:** Änderungen sind spät und teuer, der Kunde sieht das Ergebnis erst am Ende, Fehler in den Anforderungen fallen oft erst beim Test auf

Das Wasserfallmodell eignet sich, wenn die Anforderungen von Anfang an klar und stabil sind, etwa bei der Installation einer Netzwerkinfrastruktur nach einem fertigen Plan.

### V-Modell

Das **V-Modell** erweitert das Wasserfallmodell: Jeder Entwurfsphase auf der linken Seite des „V“ steht eine Testphase auf der rechten Seite gegenüber.

| Entwurfsphase               | zugehörige Testphase   |
| --------------------------- | ---------------------- |
| Anforderungsdefinition      | Abnahmetest            |
| Systementwurf               | Systemtest             |
| Architekturentwurf          | Integrationstest       |
| Modulentwurf                | Modultest (Unit-Test)  |

Die Testfälle werden bereits in der jeweiligen Entwurfsphase festgelegt. In Österreich und Deutschland ist das V-Modell XT bei öffentlichen IT-Projekten verbreitet.

### Iterative und inkrementelle Modelle

Beim **Spiralmodell** wird das Projekt in mehreren Durchläufen (Iterationen) entwickelt. Jeder Durchlauf umfasst Zielfestlegung, Risikoanalyse, Entwicklung und Planung der nächsten Runde. Beim **Prototyping** wird früh ein vereinfachtes Modell gebaut, um Anforderungen mit dem Kunden zu klären.

## Agile Vorgehensmodelle

Agile Methoden gehen davon aus, dass sich Anforderungen während des Projekts ändern. Statt alles am Anfang zu planen, wird in kurzen Zyklen gearbeitet, und nach jedem Zyklus steht ein nutzbares Zwischenergebnis.

### Agiles Manifest

2001 formulierten 17 Softwareentwickler das **Agile Manifest** mit vier Werten. Sie schätzen

- Individuen und Interaktionen mehr als Prozesse und Werkzeuge,
- funktionierende Software mehr als umfassende Dokumentation,
- Zusammenarbeit mit dem Kunden mehr als Vertragsverhandlungen,
- Reagieren auf Veränderung mehr als das Befolgen eines Plans.

Die Dinge auf der rechten Seite sind dabei nicht wertlos, die auf der linken Seite werden aber höher bewertet.

### Scrum

**Scrum** ist das bekannteste agile Rahmenwerk. Die Arbeit wird in **Sprints** von einer bis vier Wochen eingeteilt.

![Ablauf von Scrum](/images/project_management/scrum_de.svg)

**Rollen** (im Scrum Guide als Verantwortlichkeiten bezeichnet):

- **Product Owner:** verantwortet das Product Backlog, priorisiert die Anforderungen und vertritt die Interessen der Stakeholder.
- **Scrum Master:** sorgt dafür, dass Scrum verstanden und gelebt wird, beseitigt Hindernisse und unterstützt das Team.
- **Developers:** setzen die Anforderungen um und organisieren ihre Arbeit im Sprint selbst.

**Ereignisse:**

- **Sprint Planning:** Das Team wählt die Einträge für den nächsten Sprint aus und legt ein Sprintziel fest.
- **Daily Scrum:** tägliches Treffen von höchstens 15 Minuten, um den Fortschritt abzustimmen.
- **Sprint Review:** Das Ergebnis wird den Stakeholdern gezeigt, und ihr Feedback fließt ins Product Backlog ein.
- **Sprint Retrospective:** Das Team überlegt, wie es seine Zusammenarbeit verbessern kann.

**Artefakte:**

- **Product Backlog:** geordnete Liste aller Anforderungen, oft als User Stories formuliert („Als Lehrerin möchte ich einen Raum buchen, damit ich meinen Unterricht planen kann.“)
- **Sprint Backlog:** die für den aktuellen Sprint ausgewählten Einträge samt Plan zur Umsetzung
- **Increment:** das nutzbare Ergebnis am Ende des Sprints, das die Definition of Done erfüllt

### Kanban

**Kanban** stammt ursprünglich aus der Produktion bei Toyota. In der IT wird die Arbeit auf einem Board mit Spalten wie „To do“, „In Arbeit“ und „Erledigt“ visualisiert. Wichtige Prinzipien sind:

- die Arbeit sichtbar machen,
- die Anzahl gleichzeitig bearbeiteter Aufgaben begrenzen (_Work in Progress Limit_),
- den Durchfluss messen und verbessern.

Im Gegensatz zu Scrum gibt es bei Kanban keine festen Sprints und keine vorgeschriebenen Rollen. Kanban eignet sich daher gut für laufende Aufgaben wie den IT-Support.

## Vergleich

| Kriterium            | klassisch (Wasserfall, V-Modell)          | agil (Scrum, Kanban)                          |
| -------------------- | ----------------------------------------- | --------------------------------------------- |
| Anforderungen        | am Anfang vollständig festgelegt          | entwickeln sich während des Projekts          |
| Planung              | detaillierter Gesamtplan                  | grober Rahmen, Detailplanung pro Sprint       |
| Kundenkontakt        | vor allem am Anfang und bei der Abnahme   | laufend, nach jedem Sprint                    |
| Ergebnis             | am Ende                                   | laufend nutzbare Zwischenergebnisse           |
| Änderungen           | aufwendig, über Änderungsanträge          | erwünscht, werden im Backlog priorisiert      |
| geeignet für         | stabile, gut bekannte Anforderungen       | unsichere, sich ändernde Anforderungen        |

In der Praxis werden oft **hybride** Ansätze verwendet: Das Gesamtprojekt wird klassisch mit Meilensteinen geplant, die Softwareentwicklung selbst erfolgt in Sprints.
