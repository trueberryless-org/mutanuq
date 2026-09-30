---
title: DHCP
description: Automatische Vergabe von IP-Adressen mit dem DORA-Ablauf, Bereiche, Ausschlüsse, Reservierungen und Optionen, DHCP-Relay, Failover und die Einrichtung unter Windows Server.
sidebar:
  order: 6
---

Das **Dynamic Host Configuration Protocol** (DHCP) vergibt IP-Adressen und weitere Netzwerkeinstellungen automatisch an Clients. Ohne DHCP müsste jede IP-Adresse von Hand eingetragen werden, was bei vielen Geräten fehleranfällig ist und zu doppelt vergebenen Adressen führt.

## Ablauf

Ein Client, der noch keine IP-Adresse hat, bezieht sie in vier Schritten, abgekürzt **DORA**:

![Ablauf der DHCP-Adressvergabe mit Discover, Offer, Request und Acknowledge](/images/deployment/dhcp_dora_de.svg)

1. **Discover:** Der Client sendet einen Broadcast an alle Geräte im Netz, um DHCP-Server zu finden.
2. **Offer:** Jeder DHCP-Server, der den Client bedienen kann, bietet eine freie IP-Adresse an.
3. **Request:** Der Client wählt ein Angebot und fordert die Adresse per Broadcast an. So erfahren auch die anderen Server, dass ihr Angebot nicht angenommen wurde.
4. **Acknowledge:** Der Server bestätigt die Vergabe und sendet die weiteren Einstellungen mit.

DHCP verwendet UDP, der Server lauscht auf Port 67, der Client auf Port 68.

## Lease

Eine IP-Adresse wird nicht dauerhaft, sondern für eine bestimmte Zeit vergeben, die **Lease-Dauer**. Nach der Hälfte dieser Zeit versucht der Client, die Lease beim selben Server zu verlängern. Gelingt das nicht, versucht er es nach 87,5 % der Zeit bei jedem beliebigen Server. Läuft die Lease ab, muss er die Adresse freigeben.

Findet ein Windows-Client gar keinen DHCP-Server, gibt er sich selbst eine Adresse aus dem Bereich `169.254.0.0/16` (APIPA). Eine solche Adresse ist ein deutliches Zeichen für ein DHCP-Problem.

## Konfiguration

- Ein **Bereich** (_Scope_) ist ein zusammenhängender Adressbereich in einem Subnetz, aus dem Adressen vergeben werden, etwa `192.168.10.100` bis `192.168.10.200`.
- **Ausschlüsse** sind Adressen innerhalb des Bereichs, die nicht vergeben werden, etwa weil dort Geräte mit statischer Adresse liegen.
- **Reservierungen** ordnen einer bestimmten MAC-Adresse immer dieselbe IP-Adresse zu. Sie eignen sich für Drucker oder Geräte, die immer unter derselben Adresse erreichbar sein sollen, aber zentral verwaltet werden.
- **Optionen** sind zusätzliche Einstellungen, die mit der Adresse mitgeschickt werden:

| Option | Bedeutung              | Beispiel                     |
| ------ | ---------------------- | ---------------------------- |
| 003    | Router (Standardgateway) | 192.168.10.1               |
| 006    | DNS-Server             | 192.168.10.10, 192.168.10.11 |
| 015    | DNS-Domänenname        | corp.example.com             |
| 042    | NTP-Server             | 192.168.10.10                |
| 066, 067 | Bootserver und Bootdatei für den Netzwerkstart (PXE) | wds01, boot\x64\wdsnbp.com |

Optionen können auf Serverebene (für alle Bereiche), auf Bereichsebene oder für einzelne Reservierungen gesetzt werden. Die spezifischere Ebene gewinnt.

## DHCP über Subnetzgrenzen

Broadcasts werden von Routern nicht weitergeleitet. Damit ein DHCP-Server Clients in mehreren Subnetzen oder VLANs bedienen kann, wird auf dem Router ein **DHCP-Relay-Agent** (bei Cisco `ip helper-address`) eingerichtet. Er nimmt die Broadcasts entgegen und leitet sie als Unicast an den DHCP-Server weiter. Der Server erkennt am Feld mit der Relay-Adresse, aus welchem Subnetz die Anfrage kommt, und wählt den passenden Bereich.

## Ausfallsicherheit

Fällt der einzige DHCP-Server aus, bekommen neue Geräte keine Adresse mehr. Windows Server bietet dafür **DHCP-Failover** zwischen zwei Servern:

- **Lastenausgleich** (_Load Balance_): Beide Server vergeben gleichzeitig Adressen, etwa je zur Hälfte.
- **Hot Standby:** Ein Server arbeitet, der andere übernimmt nur bei einem Ausfall.

Eine einfachere, ältere Lösung ist die **80/20-Regel**: Zwei Server verwalten nicht überlappende Teile desselben Bereichs, der eine 80 %, der andere 20 %.

## DHCP-Server unter Windows Server

In einer Domäne muss ein DHCP-Server im Active Directory **autorisiert** werden, bevor er Adressen vergibt. So wird verhindert, dass ein falsch konfigurierter Server das Netz stört.

```powershell
Install-WindowsFeature -Name DHCP -IncludeManagementTools

# Sicherheitsgruppen anlegen und Server in AD autorisieren
Add-DhcpServerSecurityGroup
Restart-Service DHCPServer
Add-DhcpServerInDC -DnsName "dc01.corp.example.com" -IPAddress 192.168.10.10

# Bereich anlegen
Add-DhcpServerv4Scope -Name "LAN Wien" -StartRange 192.168.10.100 -EndRange 192.168.10.200 `
    -SubnetMask 255.255.255.0 -LeaseDuration 08:00:00

# Ausschluss für Drucker mit statischer Adresse
Add-DhcpServerv4ExclusionRange -ScopeId 192.168.10.0 -StartRange 192.168.10.100 -EndRange 192.168.10.109

# Optionen für den Bereich
Set-DhcpServerv4OptionValue -ScopeId 192.168.10.0 -Router 192.168.10.1 `
    -DnsServer 192.168.10.10, 192.168.10.11 -DnsDomain "corp.example.com"

# Reservierung
Add-DhcpServerv4Reservation -ScopeId 192.168.10.0 -IPAddress 192.168.10.150 `
    -ClientId "00-15-5D-0A-01-23" -Name "Drucker Vertrieb"

# Failover mit dem zweiten Server einrichten
Add-DhcpServerv4Failover -Name "Failover Wien" -PartnerServer "dc02.corp.example.com" `
    -ScopeId 192.168.10.0 -LoadBalancePercent 50 -SharedSecret (Read-Host "Geheimnis")

# Vergebene Adressen anzeigen
Get-DhcpServerv4Lease -ScopeId 192.168.10.0
```

`-SharedSecret` erwartet einen normalen Text. Auch hier wird er abgefragt, damit er nicht im Skript steht.

## Fehlersuche am Client

```powershell
ipconfig /all       # Adresse, Lease-Zeiten und DHCP-Server anzeigen
ipconfig /release   # Adresse freigeben
ipconfig /renew     # neue Adresse anfordern
```

Hat ein Client eine APIPA-Adresse, prüfe, ob der DHCP-Server läuft und autorisiert ist, ob der Bereich aktiv ist und noch freie Adressen hat und ob in einem anderen Subnetz ein Relay-Agent eingerichtet ist.
