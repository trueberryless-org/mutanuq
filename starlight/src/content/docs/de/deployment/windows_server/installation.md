---
title: Installation und Grundkonfiguration
description: Editionen und Lizenzierung von Windows Server, Server Core und Desktopdarstellung, Installation, Grundkonfiguration mit sconfig und PowerShell sowie Rollen und Features.
sidebar:
  order: 1
---

Bevor ein Server Dienste bereitstellen kann, muss er installiert und grundlegend konfiguriert werden. Diese Schritte wiederholen sich bei jedem neuen Server und sollten daher sorgfältig und immer gleich durchgeführt werden.

## Editionen und Lizenzierung

Windows Server erscheint etwa alle drei Jahre in einer neuen Version mit langfristigem Support (_Long-Term Servicing Channel_), zuletzt Windows Server 2016, 2019, 2022 und 2025. Jede Version wird mindestens zehn Jahre mit Sicherheitsupdates versorgt.

| Edition     | Einsatz                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------- |
| Standard    | physische oder schwach virtualisierte Umgebungen; eine Lizenz für alle Kerne erlaubt zwei virtuelle Maschinen |
| Datacenter  | stark virtualisierte Umgebungen; unbegrenzt viele virtuelle Maschinen, zusätzliche Funktionen wie Storage Spaces Direct und softwaredefinierte Netzwerke |
| Essentials  | kleine Unternehmen mit bis zu 25 Benutzern, nur über Hardwarehersteller erhältlich        |

Windows Server wird **pro Prozessorkern** lizenziert, mindestens 8 Kerne pro Prozessor und 16 Kerne pro Server. Zusätzlich braucht jeder Benutzer oder jedes Gerät, das auf den Server zugreift, eine **Client Access License** (CAL). Man kann zwischen Benutzer-CALs und Geräte-CALs wählen.

:::tip[Für die Schule]
Über das Programm Azure Dev Tools for Teaching bzw. die Microsoft-Lizenzen deiner Schule kannst du Windows Server meist kostenlos für Übungszwecke nutzen. Alternativ gibt es eine 180 Tage lang gültige Evaluierungsversion.
:::

## Installationsoptionen

Bei der Installation wählst du zwischen zwei Varianten:

- **Server Core:** Installation ohne grafische Oberfläche. Der Server wird über die Kommandozeile, PowerShell oder remote verwaltet. Vorteile sind weniger Speicherbedarf, weniger Updates, weniger Neustarts und eine kleinere Angriffsfläche. Microsoft empfiehlt Server Core als Standard.
- **Desktopdarstellung** (_Desktop Experience_): Installation mit der gewohnten Windows-Oberfläche und dem Server-Manager. Einfacher für Einsteiger und für Anwendungen, die eine grafische Oberfläche benötigen.

Ein nachträglicher Wechsel zwischen den beiden Varianten ist nicht möglich, es muss neu installiert werden.

## Hardwareanforderungen

Die Mindestanforderungen für Windows Server 2025 sind gering, reichen in der Praxis aber kaum aus:

| Komponente    | Minimum                                         | sinnvoll für eine Übungs-VM   |
| ------------- | ----------------------------------------------- | ----------------------------- |
| Prozessor     | 64 Bit, 1,4 GHz, Unterstützung für bestimmte Befehlssätze | 2 virtuelle Kerne     |
| Arbeitsspeicher | 512 MB (Core), 2 GB (Desktopdarstellung)      | 4 GB                          |
| Festplatte    | 32 GB                                           | 60 GB                         |
| Netzwerk      | Ethernet-Adapter                                | 1 virtueller Adapter          |

Außerdem werden UEFI mit Secure Boot und ein TPM 2.0 empfohlen.

## Installation

1. Vom Installationsmedium (ISO-Datei oder USB-Stick) booten.
2. Sprache, Uhrzeit und Tastaturlayout wählen.
3. Edition und Installationsvariante auswählen (etwa „Standard“ oder „Standard (Desktopdarstellung)“).
4. Lizenzbedingungen akzeptieren und „Benutzerdefiniert“ als Installationsart wählen.
5. Festplatte auswählen, bei Bedarf partitionieren.
6. Nach dem Neustart ein sicheres Kennwort für das lokale Administratorkonto festlegen.

Bei vielen Servern wird die Installation automatisiert, etwa mit einer Antwortdatei (`autounattend.xml`), mit Windows-Bereitstellungsdiensten (WDS) oder durch das Klonen vorbereiteter virtueller Maschinen. Vor dem Klonen muss das System mit `sysprep /generalize` verallgemeinert werden, damit jede Kopie eine eigene Sicherheitskennung (SID) erhält.

## Grundkonfiguration

Nach der Installation sind immer dieselben Schritte nötig.

### Mit sconfig

Auf Server Core startet nach der Anmeldung automatisch **sconfig**, ein textbasiertes Menü. Damit lassen sich die wichtigsten Einstellungen über Nummern auswählen: Computername, Domänenbeitritt, Netzwerkeinstellungen, Updates, Remotedesktop und Datum/Uhrzeit.

### Mit PowerShell

```powershell
# Computernamen ändern und neu starten
Rename-Computer -NewName "DC01" -Restart

# Netzwerkadapter anzeigen
Get-NetAdapter

# Statische IP-Adresse und Standardgateway setzen
New-NetIPAddress -InterfaceAlias "Ethernet" -IPAddress 192.168.10.10 `
    -PrefixLength 24 -DefaultGateway 192.168.10.1

# DNS-Server eintragen
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses 192.168.10.10, 192.168.10.11

# Zeitzone setzen
Set-TimeZone -Id "W. Europe Standard Time"

# Remotedesktop aktivieren
Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Control\Terminal Server" `
    -Name "fDenyTSConnections" -Value 0
Enable-NetFirewallRule -DisplayGroup "Remotedesktop"
```

Der Name der Firewall-Regelgruppe hängt von der Sprache des Systems ab. Auf einem englischen System heißt sie „Remote Desktop“.

:::caution[Statische Adressen]
Server, die Dienste für andere bereitstellen, etwa Domänencontroller, DNS- und DHCP-Server, brauchen immer eine statische IP-Adresse. Sonst finden die Clients sie nach einem Neustart möglicherweise nicht mehr.
:::

## Rollen und Features

Die Funktionen eines Servers werden als Rollen und Features installiert:

- **Rollen** sind Hauptaufgaben des Servers, etwa Active Directory-Domänendienste (AD DS), DNS-Server, DHCP-Server, Dateiserver oder Webserver (IIS).
- **Features** sind unterstützende Funktionen, etwa .NET Framework, Windows Server-Sicherung, Failoverclustering oder die Remoteserver-Verwaltungstools (RSAT).

```powershell
# Alle verfügbaren und installierten Rollen und Features anzeigen
Get-WindowsFeature

# Nur die installierten anzeigen
Get-WindowsFeature | Where-Object Installed

# Eine Rolle mit den zugehörigen Verwaltungstools installieren
Install-WindowsFeature -Name DHCP -IncludeManagementTools

# Eine Rolle entfernen
Uninstall-WindowsFeature -Name DHCP
```

## Verwaltungswerkzeuge

- **Server-Manager:** grafisches Werkzeug auf Servern mit Desktopdarstellung, um Rollen zu installieren und mehrere Server zu überwachen
- **Windows Admin Center:** browserbasiertes Verwaltungswerkzeug, das auch Server Core komfortabel verwalten kann
- **RSAT:** Remoteserver-Verwaltungstools, die auf einem Windows-Client installiert werden, etwa „Active Directory-Benutzer und -Computer“ oder die DNS-Konsole
- **PowerShell Remoting:** Befehle auf entfernten Servern ausführen (siehe [PowerShell](/de/deployment/windows_server/powershell/))

In der Praxis werden Server nicht direkt an der Konsole, sondern von einem Verwaltungsrechner aus administriert. Das ist bequemer und sicherer.
