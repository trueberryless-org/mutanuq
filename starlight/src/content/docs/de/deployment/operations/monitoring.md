---
title: Monitoring
description: Was überwacht wird, Schwellenwerte und Alarmierung, SNMP mit MIB und OID, Syslog und Schweregrade, Windows-Ereignisprotokolle und bekannte Monitoring-Werkzeuge.
sidebar:
  order: 3
---

Beim **Monitoring** werden Server, Netzwerkgeräte und Dienste laufend überwacht. Ziel ist es, Probleme zu erkennen, bevor die Benutzer sie bemerken: Eine Festplatte, die zu 95 % voll ist, lässt sich in Ruhe erweitern. Eine volle Festplatte, die den Mailserver stoppt, verursacht dagegen einen Ausfall.

## Was wird überwacht?

- **Verfügbarkeit:** Ist der Server per Ping erreichbar? Antwortet der Webserver auf Port 443?
- **Ressourcen:** Auslastung von Prozessor, Arbeitsspeicher, Speicherplatz und Netzwerk
- **Dienste:** Laufen wichtige Dienste wie DNS, DHCP oder die Datenbank?
- **Hardware:** Temperaturen, Lüfter, Netzteile, Zustand der Festplatten und des RAID
- **Anwendungen:** Antwortzeiten, Fehlerraten, Länge von Warteschlangen
- **Sicherheit:** fehlgeschlagene Anmeldungen, ablaufende Zertifikate, fehlende Updates
- **Sicherungen:** Sind alle Sicherungsaufträge erfolgreich gelaufen?

## Schwellenwerte und Alarmierung

Für jeden Messwert werden Schwellenwerte festgelegt, etwa **Warnung** ab 80 % belegtem Speicherplatz und **kritisch** ab 90 %. Wird ein Schwellenwert überschritten, benachrichtigt das Monitoring die zuständigen Personen per E-Mail, SMS, Chat oder App.

Gute Alarmierung ist schwierig:

- Zu viele Alarme führen dazu, dass sie ignoriert werden (_Alarm Fatigue_).
- Alarme sollten nur dann ausgelöst werden, wenn jemand etwas tun muss.
- Eine **Baseline**, also der normale Verlauf eines Messwerts, hilft zu erkennen, was ungewöhnlich ist. 90 % Prozessorlast während der nächtlichen Sicherung kann normal sein, am Vormittag nicht.
- Abhängigkeiten sollten berücksichtigt werden: Fällt ein Switch aus, genügt ein Alarm für den Switch statt je einem für alle Server dahinter.

## SNMP

Das **Simple Network Management Protocol** (SNMP) ist der Standard für die Überwachung von Netzwerkgeräten wie Switches, Routern, Druckern und USVs.

- Der **Manager** (das Monitoring-System) fragt Werte bei den **Agenten** auf den Geräten ab. Die Abfragen laufen über UDP-Port 161.
- Bei wichtigen Ereignissen senden die Agenten von sich aus eine **Trap** an den Manager, über UDP-Port 162.
- Die abfragbaren Werte sind in der **MIB** (Management Information Base) beschrieben, einer hierarchischen Struktur. Jeder Wert hat eine eindeutige **OID** (Object Identifier), etwa `1.3.6.1.2.1.1.3.0` für die Betriebszeit eines Geräts.

| Version | Sicherheit                                                                   |
| ------- | ---------------------------------------------------------------------------- |
| SNMPv1, v2c | nur eine „Community“ als Kennwort, im Klartext übertragen                |
| SNMPv3  | Benutzer mit Authentifizierung und Verschlüsselung                           |

Wo möglich, sollte SNMPv3 verwendet werden. Die voreingestellten Communitys `public` und `private` müssen immer geändert werden.

```bash
# Betriebszeit eines Switches mit SNMPv2c abfragen (Linux, Paket snmp)
snmpget -v2c -c geheime-community 192.168.10.2 1.3.6.1.2.1.1.3.0
```

## Syslog

**Syslog** ist ein Standard, mit dem Geräte und Linux-Systeme Protokollmeldungen an einen zentralen Server senden, üblicherweise über UDP-Port 514 oder verschlüsselt über TCP. Jede Meldung hat einen **Schweregrad**:

| Wert | Schweregrad   | Bedeutung                         |
| ---- | ------------- | --------------------------------- |
| 0    | Emergency     | System unbenutzbar                |
| 1    | Alert         | sofortiges Handeln nötig          |
| 2    | Critical      | kritischer Zustand                |
| 3    | Error         | Fehler                            |
| 4    | Warning       | Warnung                           |
| 5    | Notice        | normal, aber bemerkenswert        |
| 6    | Informational | Information                       |
| 7    | Debug         | Meldungen zur Fehlersuche         |

Eine zentrale Sammlung aller Logs erleichtert die Fehlersuche und ist wichtig für die Sicherheit: Ein Angreifer, der einen Server übernimmt, kann dort Logs löschen, nicht aber die Kopien auf dem zentralen Server. Systeme, die Logs zentral sammeln und auf Angriffe auswerten, heißen **SIEM** (Security Information and Event Management).

## Windows-Ereignisprotokolle

Windows schreibt Meldungen in die **Ereignisprotokolle**, die mit der Ereignisanzeige (`eventvwr.msc`) oder PowerShell gelesen werden. Die wichtigsten Protokolle sind **System**, **Anwendung** und **Sicherheit**. Hilfreiche Ereignis-IDs sind etwa:

| ID   | Protokoll  | Bedeutung                                 |
| ---- | ---------- | ----------------------------------------- |
| 4624 | Sicherheit | erfolgreiche Anmeldung                    |
| 4625 | Sicherheit | fehlgeschlagene Anmeldung                 |
| 4740 | Sicherheit | Benutzerkonto wurde gesperrt              |
| 1074 | System     | Neustart oder Herunterfahren durch einen Benutzer oder Prozess |
| 6008 | System     | unerwartetes Herunterfahren               |
| 7036 | System     | Dienst wurde gestartet oder beendet       |

```powershell
# Die letzten 20 fehlgeschlagenen Anmeldungen
Get-WinEvent -FilterHashtable @{ LogName = "Security"; Id = 4625 } -MaxEvents 20

# Alle Fehler im Systemprotokoll der letzten 24 Stunden
Get-WinEvent -FilterHashtable @{ LogName = "System"; Level = 2; StartTime = (Get-Date).AddDays(-1) }
```

Mit der **Ereignisweiterleitung** können Windows-Rechner ihre Ereignisse an einen zentralen Sammelserver senden. Die **Leistungsüberwachung** (`perfmon`) zeichnet Leistungsindikatoren wie Prozessorlast oder Festplattenwartezeit über längere Zeit auf.

## Monitoring-Werkzeuge

| Werkzeug              | Merkmale                                                                        |
| --------------------- | ------------------------------------------------------------------------------- |
| Zabbix                | quelloffen, sehr umfangreich, Agenten für viele Systeme und SNMP                |
| Checkmk               | auf Nagios aufbauend, einfache automatische Erkennung von Diensten, freie und kommerzielle Version |
| Nagios, Icinga        | klassische, quelloffene Systeme mit vielen Plug-ins                             |
| PRTG                  | kommerziell, Windows-basiert, einfache Einrichtung über Sensoren                |
| Prometheus und Grafana | quelloffen, speichert Zeitreihen, sehr verbreitet bei Containern und Cloud-Anwendungen, Grafana für Dashboards |

Das Monitoring-System selbst muss ebenfalls überwacht werden. Fällt es unbemerkt aus, glaubt man, alles sei in Ordnung, während tatsächlich niemand mehr hinsieht.
