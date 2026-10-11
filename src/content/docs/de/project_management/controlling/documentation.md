---
title: Dokumentation und Kommunikation
description: Inhalt des Projekthandbuchs, Dokumentenmanagement mit Ablagestruktur und Versionierung, Statusberichte, Kommunikationsplan und Projektmarketing.
sidebar:
  order: 2
---

In einem Projekt entstehen viele Dokumente: Projektauftrag, Pläne, Protokolle, Berichte, Anforderungen und technische Dokumentation. Damit alle Beteiligten die richtigen Informationen zur richtigen Zeit haben, braucht es klare Regeln für Dokumentation und Kommunikation.

## Projekthandbuch

Das **Projekthandbuch** (auch Projektmanagement-Handbuch) fasst alle Vereinbarungen und Pläne zum Management eines Projekts an einer Stelle zusammen. Es wird beim Projektstart erstellt und während des Projekts laufend aktualisiert. Ein typischer Aufbau:

1. Projektauftrag mit Zielen und Nicht-Zielen
2. Projektkontext und Stakeholderanalyse
3. Projektorganisation: Organigramm, Rollenbeschreibungen, Projektfunktionendiagramm
4. Projektstrukturplan und Arbeitspaketbeschreibungen
5. Meilenstein-, Termin-, Ressourcen- und Kostenplan
6. Risikoliste
7. Kommunikationsplan und Spielregeln
8. Regeln für Dokumentation und Ablage
9. Vorlagen, etwa für Protokolle, Statusberichte und Änderungsanträge

Viele Unternehmen haben zusätzlich ein unternehmensweites **Projektmanagement-Handbuch**, das festlegt, wie Projekte grundsätzlich abgewickelt werden. Das Projekthandbuch eines einzelnen Projekts baut darauf auf.

:::tip[Für die Diplomarbeit]
Auch bei der Diplomarbeit lohnt sich ein kurzes Projekthandbuch. Viele Inhalte daraus, etwa Ziele, Projektstrukturplan und Meilensteine, kannst du später direkt in die schriftliche Arbeit übernehmen.
:::

## Dokumentenmanagement

Das Dokumentenmanagement regelt, wie Dokumente erstellt, abgelegt, versioniert und freigegeben werden.

### Ablagestruktur

Eine einheitliche Ordnerstruktur hilft, Dokumente schnell zu finden. Bewährt hat sich eine Struktur, die sich am Projektmanagement-Prozess oder am Projektstrukturplan orientiert:

```
Projekt_SmartRoom/
├── 01_Projektmanagement/
│   ├── Projektauftrag/
│   ├── Protokolle/
│   └── Statusberichte/
├── 02_Anforderungen/
├── 03_Entwurf/
├── 04_Umsetzung/
├── 05_Test/
└── 06_Abschluss/
```

### Namenskonventionen

Dateinamen sollten nach einem festen Schema aufgebaut sein, zum Beispiel `JJJJ-MM-TT_Dokumentart_Thema_vX.Y`, also etwa `2025-11-03_Protokoll_Jour-fixe_v1.0.pdf`. Durch das Datum am Anfang werden die Dateien automatisch chronologisch sortiert.

### Versionierung und Freigabe

- Jede Änderung eines Dokuments erhöht die Versionsnummer. Kleine Korrekturen erhöhen die Stelle nach dem Punkt (1.1, 1.2), grundlegende Überarbeitungen die Stelle davor (2.0).
- Ein **Änderungsverzeichnis** am Anfang des Dokuments hält fest, wer wann was geändert hat.
- Wichtige Dokumente wie Pflichtenheft oder Projektauftrag müssen **freigegeben** werden. Nur freigegebene Versionen sind verbindlich.
- Zugriffsrechte legen fest, wer Dokumente lesen und bearbeiten darf.

Für Programmcode ist eine Versionsverwaltung wie Git Standard. Für andere Dokumente bieten sich Plattformen wie SharePoint, Microsoft Teams, Nextcloud oder ein Wiki an, die Versionen automatisch speichern.

## Berichtswesen

### Statusbericht

Der **Statusbericht** informiert Auftraggeber und Lenkungsausschuss regelmäßig über den Projektstand, etwa alle zwei Wochen oder monatlich. Er ist kurz und enthält meist:

- Gesamtstatus als **Ampel**: grün (im Plan), gelb (Abweichungen, aber im Griff), rot (Ziele gefährdet, Entscheidung nötig)
- Status von Leistung, Terminen und Kosten
- erreichte und nächste Meilensteine
- wichtige Risiken und Probleme
- Entscheidungen, die vom Auftraggeber benötigt werden

### Weitere Berichte

- **Protokolle** von Besprechungen (siehe [Team und Kommunikation](/de/project_management/organisation/team_and_communication/))
- **Meilensteinberichte** bei Erreichen eines Meilensteins
- **Projektabschlussbericht** am Ende des Projekts

## Kommunikationsplan

Der **Kommunikationsplan** legt fest, wer welche Informationen wann und auf welchem Weg erhält:

| Was                     | Wer informiert  | Wer wird informiert       | Wann                | Wie                   |
| ----------------------- | --------------- | ------------------------- | ------------------- | --------------------- |
| Statusbericht           | Projektleitung  | Auftraggeber              | alle zwei Wochen    | E-Mail, PDF           |
| Jour fixe               | Projektleitung  | Projektteam               | jeden Montag        | Besprechung           |
| Lenkungsausschuss       | Projektleitung  | Lenkungsausschuss         | bei jedem Meilenstein | Präsentation        |
| Projektnews             | Projektmarketing | alle Mitarbeitenden      | monatlich           | Intranet              |
| Störungen und Krisen    | alle            | Projektleitung            | sofort              | Telefon, Chat         |

## Projektmarketing

**Projektmarketing** umfasst alle Maßnahmen, mit denen ein Projekt nach innen und außen dargestellt wird. Ziel ist es, Akzeptanz und Unterstützung für das Projekt zu schaffen, etwa bei Nutzerinnen und Nutzern, beim Management und in anderen Abteilungen. Gerade Projekte, die Veränderungen für viele Menschen bringen, scheitern oft nicht an der Technik, sondern an fehlender Akzeptanz.

Mögliche Maßnahmen sind:

- ein einprägsamer Projektname und ein Logo
- eine Projektseite im Intranet oder ein Newsletter
- Präsentationen bei Meilensteinen und Info-Veranstaltungen für Betroffene
- frühe Einbindung von Nutzerinnen und Nutzern in Tests
- Berichte über Erfolge, etwa bei Firmenveranstaltungen oder auf Social Media
- bei Diplomarbeiten: Präsentation beim Tag der offenen Tür, Poster, Website, Teilnahme an Wettbewerben

Projektmarketing ist Aufgabe der Projektleitung, kann bei größeren Projekten aber an eine eigene Person im Team übertragen werden.
