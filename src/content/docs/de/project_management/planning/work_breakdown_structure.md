---
title: Projektstrukturplan
description: Aufbau und Gliederungsprinzipien des Projektstrukturplans, Regeln für Arbeitspakete, Codierung und die Arbeitspaketbeschreibung.
sidebar:
  order: 1
---

Der **Projektstrukturplan** (PSP, englisch _Work Breakdown Structure_) zerlegt das Projekt in überschaubare Teilaufgaben. Er zeigt vollständig, was im Projekt zu tun ist, aber noch nicht, wann und in welcher Reihenfolge. Weil alle anderen Pläne auf ihm aufbauen, gilt er als „Plan der Pläne“.

![Projektstrukturplan eines Webshop-Projekts](/images/project_management/work_breakdown_structure_de.svg)

## Aufbau

Der PSP ist hierarchisch aufgebaut:

- Die oberste Ebene ist das **Projekt** selbst.
- Darunter folgen **Teilaufgaben** (auch Teilprojekte oder Phasen), die weiter unterteilt werden können.
- Die unterste Ebene bilden die **Arbeitspakete**. Sie werden nicht mehr weiter zerlegt und sind die Einheiten, die geplant, vergeben und kontrolliert werden.

Meist genügen drei bis vier Ebenen. Ein zu grober PSP lässt sich schlecht steuern, ein zu feiner verursacht unnötigen Verwaltungsaufwand.

## Gliederungsprinzipien

| Prinzip              | Gliederung nach                          | Beispiel für die zweite Ebene                                 |
| -------------------- | ---------------------------------------- | ------------------------------------------------------------- |
| objektorientiert     | Bestandteilen des Ergebnisses            | Datenbank, Backend, Frontend, Server                          |
| funktionsorientiert  | Tätigkeiten bzw. Fachbereichen           | Planen, Programmieren, Testen, Dokumentieren                  |
| phasenorientiert     | zeitlichem Ablauf                        | Analyse, Entwurf, Umsetzung, Test, Einführung                 |
| gemischt             | Kombination auf verschiedenen Ebenen     | Phasen auf Ebene 2, Objekte auf Ebene 3                       |

In der Praxis ist die gemischte Gliederung am häufigsten. Wichtig ist, dass innerhalb einer Ebene unter demselben Element nur ein Prinzip verwendet wird.

Unabhängig vom Prinzip hat fast jeder PSP ein Element **Projektmanagement**, das Aufgaben wie Projektstart, Controlling und Projektabschluss enthält. Auch diese Arbeit kostet Zeit und muss geplant werden.

## Regeln für einen guten PSP

- **100-%-Regel:** Der PSP enthält alle Leistungen des Projekts. Was nicht im PSP steht, wird nicht gemacht und nicht bezahlt.
- **Überschneidungsfreiheit:** Jede Aufgabe kommt genau einmal vor.
- **Ergebnisorientierung:** Arbeitspakete beschreiben überprüfbare Ergebnisse, etwa „Datenbankschema erstellt“.
- **Angemessene Größe:** Ein Arbeitspaket sollte eine klar verantwortliche Person haben und sich in einem überschaubaren Zeitraum erledigen lassen, als Faustregel in wenigen Tagen bis wenigen Wochen.
- **Nachvollziehbare Bezeichnungen:** Substantiv und Verb („Testfälle schreiben“) oder Ergebnis („Testfälle“).

## Codierung

Jedes Element erhält einen eindeutigen **PSP-Code**. Üblich ist eine dezimale Nummerierung, bei der jede Ebene eine weitere Stelle hinzufügt: Das Projekt hat den Code 0 oder 1, die Teilaufgaben 1, 2, 3 und die Arbeitspakete darunter 1.1, 1.2, 2.1 und so weiter. Der Code wird in allen anderen Plänen, im Controlling und in der Dokumentenablage verwendet.

## Arbeitspaketbeschreibung

Für jedes Arbeitspaket wird eine **Arbeitspaketbeschreibung** (auch Arbeitspaketspezifikation) erstellt:

| Feld                  | Beispiel                                                                  |
| --------------------- | ------------------------------------------------------------------------- |
| PSP-Code und Name     | 3.2 Backend                                                               |
| verantwortlich        | Lena Gruber                                                               |
| Inhalte               | REST-API für Produkte, Warenkorb und Bestellungen implementieren          |
| nicht enthalten       | Zahlungsabwicklung (eigenes Arbeitspaket 3.4)                              |
| Ergebnis              | API läuft auf dem Testserver, alle Endpunkte sind dokumentiert und getestet |
| Voraussetzungen       | 3.1 Datenbank abgeschlossen                                               |
| Aufwand               | 12 Personentage                                                           |
| Start und Ende        | 03.11. bis 21.11.                                                         |

## Erstellung

Ein PSP kann auf zwei Arten entstehen:

- **Top-down:** Ausgehend vom Projekt wird schrittweise weiter unterteilt. Diese Methode eignet sich, wenn das Projekt gut bekannt ist.
- **Bottom-up:** Zuerst werden alle Aufgaben gesammelt, etwa mit einem Brainstorming, und dann gruppiert. Diese Methode eignet sich für neuartige Projekte.

Am besten erstellt die Projektleitung den PSP gemeinsam mit dem Team, zum Beispiel mit Haftnotizen auf einer Pinnwand. So wird das Wissen aller genutzt, und das Team versteht den Plan.
