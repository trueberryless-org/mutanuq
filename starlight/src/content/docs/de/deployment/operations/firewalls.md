---
title: Firewalls und VPN
description: Paketfilter, Stateful Inspection und Application Level Gateway, Firewall-Architekturen mit DMZ, Regelwerke, die Windows Defender Firewall sowie Site-to-Site- und Remote-Access-VPNs.
sidebar:
  order: 4
---

Eine **Firewall** kontrolliert den Datenverkehr zwischen Netzwerken und lässt nur erlaubte Verbindungen durch. Sie ist die wichtigste technische Maßnahme, um ein Unternehmensnetz vom Internet abzugrenzen, reicht allein aber nicht aus. Sicherheit entsteht erst durch mehrere Schutzschichten (_Defense in Depth_).

## Arten von Firewalls

### Paketfilter

Ein **Paketfilter** entscheidet für jedes einzelne Paket anhand der Header-Informationen: Quell- und Ziel-IP-Adresse, Protokoll sowie Quell- und Zielport. Er arbeitet auf den Schichten 3 und 4 des OSI-Modells, ist schnell, kennt aber keine Zusammenhänge zwischen Paketen. Antwortpakete müssen deshalb eigens erlaubt werden.

### Stateful Inspection

Eine **zustandsorientierte Firewall** (_Stateful Inspection_) merkt sich in einer Zustandstabelle, welche Verbindungen aufgebaut wurden. Antwortpakete zu einer erlaubten Verbindung werden automatisch durchgelassen, alle anderen eingehenden Pakete verworfen. Das ist heute der Standard bei allen Firewalls.

### Application Level Gateway

Ein **Application Level Gateway** (Proxy) arbeitet auf der Anwendungsschicht. Er nimmt die Verbindung des Clients entgegen, prüft den Inhalt, etwa HTTP-Anfragen oder E-Mails, und baut selbst eine neue Verbindung zum Ziel auf. Dadurch kann er Inhalte filtern, Schadsoftware erkennen und Protokollverstöße blockieren, benötigt aber viel Rechenleistung.

### Next-Generation Firewall

Eine **Next-Generation Firewall** (NGFW) kombiniert Stateful Inspection mit weiteren Funktionen: Erkennung von Anwendungen unabhängig vom Port, Einbruchserkennung und -verhinderung (IDS/IPS), Filterung von Webseiten nach Kategorien, Untersuchung verschlüsselter Verbindungen und Einbindung von Benutzeridentitäten aus Active Directory. Bekannte Hersteller sind Palo Alto Networks, Fortinet, Check Point, Cisco und Sophos. Quelloffene Alternativen sind pfSense und OPNsense.

Eine **Web Application Firewall** (WAF) schützt speziell Webanwendungen vor Angriffen wie SQL-Injection oder Cross-Site-Scripting.

## Firewall-Architekturen

### DMZ

Server, die aus dem Internet erreichbar sein müssen, etwa Webserver oder Mailrelays, dürfen nicht im internen Netz stehen. Sonst hätte ein Angreifer, der einen dieser Server übernimmt, direkten Zugang zu allen anderen Systemen. Deshalb werden sie in einer **demilitarisierten Zone** (DMZ) betrieben, einem eigenen Netz zwischen Internet und LAN.

![Firewall-Architektur mit DMZ zwischen einer äußeren und einer inneren Firewall](/images/deployment/firewall_dmz_de.svg)

- Bei der Variante mit **zwei Firewalls** (_Screened Subnet_) liegt die DMZ zwischen einer äußeren und einer inneren Firewall. Werden Produkte unterschiedlicher Hersteller verwendet, schützt eine Sicherheitslücke in einer Firewall nicht automatisch vor der anderen.
- Bei der **Dreibein-Firewall** hat eine einzige Firewall drei Schnittstellen: Internet, DMZ und LAN. Das ist günstiger, die Firewall ist aber ein Single Point of Failure für die Sicherheit.

### Regeln zwischen den Zonen

| von      | nach     | erlaubt                                              |
| -------- | -------- | ---------------------------------------------------- |
| Internet | DMZ      | nur die veröffentlichten Dienste, etwa HTTPS auf den Webserver |
| Internet | LAN      | nichts                                               |
| DMZ      | LAN      | möglichst nichts, höchstens einzelne, genau definierte Verbindungen |
| LAN      | DMZ      | Verwaltung und benötigte Dienste                     |
| LAN      | Internet | benötigte Dienste, oft über einen Proxy              |

Moderne Netze werden außerdem intern in Zonen unterteilt, etwa mit eigenen VLANs für Server, Clients, Drucker, Gäste und Verwaltungsschnittstellen, zwischen denen ebenfalls gefiltert wird (**Segmentierung**).

## Regelwerk

Ein Firewall-Regelwerk wird von oben nach unten abgearbeitet. Die erste passende Regel entscheidet. Grundsätze für ein gutes Regelwerk:

- **Default Deny:** Alles, was nicht ausdrücklich erlaubt ist, ist verboten. Die letzte Regel verwirft daher alle übrigen Pakete.
- **Minimale Rechte:** Nur die tatsächlich benötigten Verbindungen erlauben, so genau wie möglich nach Quelle, Ziel und Port.
- **Dokumentation:** Jede Regel erhält eine Beschreibung, eine verantwortliche Person und ein Datum. Nicht mehr benötigte Regeln werden entfernt.
- **Protokollierung:** Verworfene Verbindungen werden protokolliert, um Angriffe und Fehlkonfigurationen zu erkennen.

| Nr. | Quelle            | Ziel              | Dienst        | Aktion    | Beschreibung                  |
| --- | ----------------- | ----------------- | ------------- | --------- | ----------------------------- |
| 1   | beliebig          | Webserver (DMZ)   | TCP 443       | erlauben  | Website                       |
| 2   | beliebig          | Mailrelay (DMZ)   | TCP 25        | erlauben  | eingehende E-Mails            |
| 3   | Mailrelay (DMZ)   | Mailserver (LAN)  | TCP 25        | erlauben  | E-Mails nach innen zustellen  |
| 4   | LAN               | beliebig          | TCP 80, 443   | erlauben  | Webzugriff                    |
| 5   | LAN               | DNS-Server extern | UDP/TCP 53    | erlauben  | nur für die internen DNS-Server |
| 6   | beliebig          | beliebig          | beliebig      | verwerfen | Default Deny, protokollieren  |

**NAT** (_Network Address Translation_) übersetzt private interne Adressen in die öffentliche Adresse der Firewall. Mit einer **Portweiterleitung** werden Anfragen an einen bestimmten öffentlichen Port an einen internen Server weitergeleitet, etwa HTTPS an den Webserver in der DMZ.

## Windows Defender Firewall

Auch jeder einzelne Server und Client hat eine eigene Firewall (**Host-Firewall**). Die Windows Defender Firewall unterscheidet drei **Profile**, je nach Netz, mit dem der Computer verbunden ist:

- **Domäne:** Der Computer erreicht einen Domänencontroller seiner Domäne.
- **Privat:** vertrauenswürdiges Netz, etwa zu Hause
- **Öffentlich:** unbekanntes Netz, etwa ein WLAN im Café, mit den strengsten Regeln

```powershell
# Eingehende Verbindungen zu einer Webanwendung auf Port 8080 aus dem LAN erlauben
New-NetFirewallRule -DisplayName "Webanwendung 8080" -Direction Inbound `
    -Protocol TCP -LocalPort 8080 -RemoteAddress 192.168.10.0/24 -Action Allow -Profile Domain

# Regeln anzeigen und Profile prüfen
Get-NetFirewallRule -Enabled True -Direction Inbound | Select-Object DisplayName, Profile
Get-NetFirewallProfile | Select-Object Name, Enabled, DefaultInboundAction
```

In einer Domäne werden Firewall-Regeln zentral per [Gruppenrichtlinie](/de/deployment/windows_server/group_policies/) verteilt.

## VPN

Ein **Virtual Private Network** (VPN) verbindet Netze oder Geräte verschlüsselt über ein unsicheres Netz wie das Internet.

- **Site-to-Site-VPN:** verbindet zwei Standorte dauerhaft, etwa die Niederlassungen Wien und Graz. Die Verbindung wird zwischen den Firewalls aufgebaut, die Clients merken davon nichts.
- **Remote-Access-VPN:** verbindet einzelne Geräte, etwa Laptops im Homeoffice, mit dem Firmennetz. Auf dem Gerät läuft ein VPN-Client.

| Protokoll | Merkmale                                                                        |
| --------- | ------------------------------------------------------------------------------- |
| IPsec     | Standard für Site-to-Site-Verbindungen zwischen Firewalls verschiedener Hersteller, arbeitet auf der Netzwerkschicht |
| OpenVPN   | quelloffen, verwendet TLS, sehr flexibel                                        |
| WireGuard | modern, schlank und schnell, mit wenig Konfiguration                            |
| SSL-VPN   | Zugang über TLS, oft über den Browser oder einen Herstellerclient              |

Ein VPN-Zugang sollte immer mit **Mehr-Faktor-Authentifizierung** abgesichert werden, weil gestohlene Kennwörter sonst direkten Zugang zum Firmennetz ermöglichen. Moderne Konzepte wie **Zero Trust** gehen noch weiter: Jeder Zugriff wird einzeln anhand von Identität, Gerät und Kontext geprüft, egal ob er aus dem internen Netz oder von außen kommt.
