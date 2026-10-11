---
title: Updates und Wartung
description: Patchmanagement mit WSUS und Gruppenrichtlinien, Wartungsfenster, geplante Aufgaben, Windows Server-Sicherung und typische Wartungsaufgaben auf Servern.
sidebar:
  order: 8
---

Ein Server ist nach der Installation nicht fertig. Er muss laufend aktualisiert, überwacht und gesichert werden. Ungepatchte Systeme sind eines der häufigsten Einfallstore für Angriffe.

## Patchmanagement

Microsoft veröffentlicht Sicherheitsupdates regelmäßig am zweiten Dienstag im Monat, dem **Patch Tuesday**. Updates sollten nicht blind installiert werden, sondern nach einem festen Ablauf:

1. **Informieren:** Welche Updates sind erschienen, welche Lücken schließen sie, werden sie bereits ausgenutzt?
2. **Testen:** Updates zuerst auf Testsystemen oder einer kleinen Gruppe von Pilotrechnern installieren.
3. **Freigeben:** Nach erfolgreichem Test für alle Systeme freigeben.
4. **Installieren:** in einem vereinbarten Wartungsfenster, etwa Dienstagnacht, damit Neustarts niemanden stören.
5. **Kontrollieren:** Prüfen, ob die Updates überall installiert wurden und alle Dienste wieder laufen.

Kritische Lücken, die bereits aktiv ausgenutzt werden, müssen sofort geschlossen werden, auch außerhalb des üblichen Rhythmus.

## WSUS

Die **Windows Server Update Services** (WSUS) sind eine Serverrolle, die Updates einmal von Microsoft herunterlädt und im internen Netz verteilt. Vorteile:

- Die Internetleitung wird nur einmal belastet.
- Administratoren entscheiden, welche Updates wann für welche Computergruppen freigegeben werden.
- Berichte zeigen, welche Computer welche Updates noch benötigen.

```powershell
Install-WindowsFeature -Name UpdateServices -IncludeManagementTools
& "C:\Program Files\Update Services\Tools\wsusutil.exe" postinstall CONTENT_DIR=D:\WSUS
```

Die Clients werden per Gruppenrichtlinie auf den WSUS-Server verwiesen, unter Computerkonfiguration › Administrative Vorlagen › Windows-Komponenten › Windows Update. Dort wird die Adresse des Servers, etwa `http://wsus01.corp.example.com:8530`, sowie das Verhalten bei automatischen Updates und Neustarts festgelegt. Mit der **clientseitigen Zielzuordnung** ordnen sich die Computer automatisch einer Gruppe in WSUS zu, etwa „Pilot“ oder „Produktion“.

:::note
Microsoft entwickelt WSUS nicht mehr weiter, die Rolle ist aber weiterhin in Windows Server enthalten und wird unterstützt. Als Alternativen gibt es cloudbasierte Dienste wie Windows Autopatch, Microsoft Intune und Azure Update Manager sowie Werkzeuge anderer Hersteller.
:::

## Geplante Aufgaben

Mit der **Aufgabenplanung** werden Skripte und Programme automatisch zu bestimmten Zeiten oder bei bestimmten Ereignissen ausgeführt, etwa ein nächtlicher Bericht über gesperrte Konten.

```powershell
$aktion  = New-ScheduledTaskAction -Execute "powershell.exe" `
    -Argument "-NoProfile -File C:\Skripte\bericht.ps1"
$ausloeser = New-ScheduledTaskTrigger -Daily -At 6:00
Register-ScheduledTask -TaskName "Täglicher Bericht" -Action $aktion -Trigger $ausloeser `
    -User "SYSTEM" -RunLevel Highest
```

## Windows Server-Sicherung

Das Feature **Windows Server-Sicherung** sichert einzelne Dateien, Volumes, den Systemstatus oder den gesamten Server (_Bare Metal Recovery_). Der Systemstatus enthält auf einem Domänencontroller auch die Active Directory-Datenbank.

```powershell
Install-WindowsFeature -Name Windows-Server-Backup
wbadmin start systemstatebackup -backupTarget:E:
wbadmin get versions
```

Für größere Umgebungen werden spezialisierte Lösungen wie Veeam verwendet, die auch virtuelle Maschinen im laufenden Betrieb sichern. Wie eine Sicherungsstrategie aufgebaut ist, beschreibt die Seite [Sicherungsstrategien](/de/deployment/security-strategies/).

:::caution
Eine Sicherung ist erst dann etwas wert, wenn die Wiederherstellung getestet wurde. Plane regelmäßige Wiederherstellungstests ein.
:::

## Regelmäßige Wartungsaufgaben

| Häufigkeit | Aufgabe                                                                           |
| ---------- | --------------------------------------------------------------------------------- |
| täglich    | Sicherungen kontrollieren, Warnungen des Monitorings prüfen                       |
| wöchentlich | Ereignisprotokolle auf Fehler durchsehen, freien Speicherplatz prüfen            |
| monatlich  | Updates installieren, inaktive Benutzer- und Computerkonten deaktivieren          |
| vierteljährlich | Wiederherstellung testen, Berechtigungen und Gruppenmitgliedschaften überprüfen |
| jährlich   | Hardware- und Softwarestand prüfen, Lebensende von Betriebssystemen und Garantien im Blick behalten, Dokumentation aktualisieren |

Alle Änderungen an Servern werden in einem **Betriebshandbuch** oder Wiki dokumentiert. Wer nachts einen Ausfall beheben muss, braucht aktuelle Informationen über Konfiguration, Abhängigkeiten und Zugangswege.
