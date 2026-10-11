---
title: Serverhardware
description: Bauformen von Servern, Prozessoren, ECC-Arbeitsspeicher, redundante Netzteile, Hot-Swap, RAID-Controller, Fernwartung über BMC sowie Kriterien für die Auswahl von Serverhardware.
sidebar:
  order: 1
---

Ein Server sieht auf den ersten Blick aus wie ein leistungsstarker PC. Er ist aber für einen anderen Zweck gebaut: Er soll jahrelang rund um die Uhr laufen, viele Anfragen gleichzeitig bearbeiten und auch beim Ausfall einzelner Komponenten weiterarbeiten.

## Bauformen

| Bauform  | Beschreibung                                                                              | Einsatz                                   |
| -------- | ----------------------------------------------------------------------------------------- | ----------------------------------------- |
| Tower    | steht wie ein PC, leise, viel Platz für Erweiterungen                                     | kleine Büros ohne Serverraum              |
| Rack     | flaches Gehäuse für 19-Zoll-Schränke, Höhe in Höheneinheiten (1 HE = 1,75 Zoll = 4,445 cm) | Serverräume und Rechenzentren             |
| Blade    | schmale Einschübe in einem gemeinsamen Gehäuse (Chassis), das Strom, Kühlung und Netzwerk bereitstellt | große Rechenzentren mit hoher Dichte |

Ein typischer Serverschrank hat 42 HE. Neben den Servern enthält er Switches, Patchfelder, eine unterbrechungsfreie Stromversorgung und Stromverteilerleisten.

## Komponenten

- **Prozessoren:** Serverprozessoren wie Intel Xeon oder AMD EPYC haben viele Kerne, unterstützen große Mengen Arbeitsspeicher und oft mehrere Prozessoren pro Mainboard. Für Virtualisierung sind viele Kerne wichtig, für manche Datenbanken eine hohe Taktfrequenz. Da Windows Server pro Kern lizenziert wird, beeinflusst die Kernanzahl auch die Lizenzkosten.
- **ECC-Arbeitsspeicher:** Speicher mit Fehlerkorrektur (_Error Correcting Code_) erkennt und korrigiert einzelne Bitfehler. Ohne ECC können solche Fehler unbemerkt Daten verfälschen oder das System abstürzen lassen.
- **Datenträger:** SSDs mit hoher Schreibfestigkeit (angegeben in _Drive Writes Per Day_), NVMe-SSDs für hohe Leistung, Festplatten für große, günstige Speicher. Anschluss über SAS, SATA oder NVMe.
- **RAID-Controller oder HBA:** Ein Hardware-RAID-Controller fasst Datenträger zu einem RAID zusammen (siehe [Speichersysteme](/de/deployment/storage-systems/)). Ein Host Bus Adapter reicht die Datenträger direkt an das Betriebssystem weiter, etwa für softwaredefinierten Speicher.
- **Netzwerk:** mehrere Netzwerkanschlüsse, oft mit 10, 25 oder mehr Gbit/s, die zu einem Team zusammengefasst werden können, um Bandbreite und Ausfallsicherheit zu erhöhen.

## Redundanz im Server

Server sind so gebaut, dass einzelne Komponenten ausfallen dürfen:

- **redundante Netzteile**, die an zwei getrennte Stromkreise angeschlossen werden
- mehrere Lüfter, die bei einem Ausfall die Kühlung übernehmen
- **Hot-Swap**: Festplatten, Netzteile und Lüfter können im laufenden Betrieb getauscht werden
- RAID für die Datenträger und mehrere Netzwerkanschlüsse

## Fernwartung

Jeder Server hat einen eigenen kleinen Verwaltungscomputer, den **Baseboard Management Controller** (BMC), mit einem eigenen Netzwerkanschluss. Die Hersteller nennen ihn unterschiedlich, etwa iDRAC (Dell), iLO (HPE) oder XClarity Controller (Lenovo). Über den BMC kann man:

- den Server ein- und ausschalten, auch wenn das Betriebssystem hängt,
- Bildschirm und Tastatur über den Browser fernsteuern,
- ISO-Dateien als virtuelles Laufwerk einbinden und das Betriebssystem neu installieren,
- Temperaturen, Lüfter und Hardwarefehler überwachen.

Standardisierte Schnittstellen dafür sind IPMI und das modernere Redfish. Weil der BMC volle Kontrolle über den Server bietet, gehört er in ein eigenes, abgeschottetes Verwaltungsnetz.

## Auswahl von Serverhardware

Bei der Auswahl werden die Anforderungen der geplanten Dienste mit den Kosten abgewogen:

1. **Anforderungen erheben:** Welche Dienste und wie viele virtuelle Maschinen sollen laufen? Wie viele Benutzer greifen zu? Wie viel Speicher wird heute und in fünf Jahren gebraucht?
2. **Dimensionieren:** Prozessorkerne, Arbeitsspeicher, Speicherkapazität und Leistung, Netzwerkbandbreite mit Reserve für Wachstum.
3. **Verfügbarkeit festlegen:** Welche Ausfallzeit ist akzeptabel? Braucht es redundante Komponenten oder mehrere Server?
4. **Gesamtkosten betrachten:** Neben dem Kaufpreis zählen Lizenzen, Strom, Kühlung, Wartungsverträge und Administration. Man spricht von den **Total Cost of Ownership** (TCO).
5. **Service vereinbaren:** Wartungsverträge legen fest, wie schnell der Hersteller defekte Teile ersetzt, etwa am nächsten Werktag oder innerhalb von vier Stunden.

Für viele Aufgaben ist auch der Betrieb in der Cloud eine Alternative (siehe [Cloud Computing](/de/decentralised-systems/cloud-computing/)). Die Entscheidung hängt von Kosten, Datenschutz, benötigter Flexibilität und vorhandenem Know-how ab.
