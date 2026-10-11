---
title: DNS
description: Aufbau des DNS-Namensraums, rekursive und iterative Namensauflösung, Caching und TTL, Ressourceneinträge, Zonenarten, Weiterleitungen und die Einrichtung eines DNS-Servers unter Windows Server.
sidebar:
  order: 5
---

Menschen merken sich Namen, Computer arbeiten mit IP-Adressen. Das **Domain Name System** (DNS) übersetzt Namen wie `www.example.com` in IP-Adressen und umgekehrt. Ohne DNS funktioniert weder das Internet noch Active Directory: Clients finden ihre Domänencontroller ausschließlich über DNS. Die meisten Probleme in einer Domäne sind daher letztlich DNS-Probleme.

## Namensraum

DNS ist eine weltweit verteilte, hierarchische Datenbank. Der Namensraum ist wie ein umgekehrter Baum aufgebaut:

![Hierarchischer Aufbau des DNS-Namensraums](/images/deployment/dns_namespace_de.svg)

- Die **Root-Zone** wird durch einen Punkt dargestellt. Sie wird von 13 logischen Root-Server-Adressen bedient, hinter denen weltweit hunderte Server stehen.
- Darunter liegen die **Top-Level-Domains** (TLDs), etwa länderspezifische wie `at` und `de` oder generische wie `com` und `org`.
- Darunter folgen die **Second-Level-Domains**, etwa `example` in `example.com`, und beliebig viele weitere Subdomains.

Ein **vollqualifizierter Domänenname** (FQDN) enthält den vollständigen Pfad bis zur Wurzel, genau genommen mit abschließendem Punkt: `www.example.com.`

Eine **Zone** ist der Teil des Namensraums, für den ein bestimmter DNS-Server zuständig (autoritativ) ist. Die Verwaltung einzelner Teile kann an andere Server delegiert werden. So ist etwa nic.at für `at` zuständig, das die Zone `example.at` an die DNS-Server des jeweiligen Inhabers delegiert.

## Namensauflösung

![Ablauf einer DNS-Namensauflösung](/images/deployment/dns_resolution_de.svg)

1. Der Client prüft zuerst seinen eigenen Cache und die Datei `hosts`. Findet er nichts, fragt er seinen konfigurierten DNS-Server. Diese Anfrage ist **rekursiv**: Der Client erwartet eine vollständige Antwort.
2. Kennt der DNS-Server die Antwort nicht aus seinem Cache, fragt er einen Root-Server. Dieser antwortet mit einem Verweis auf die Server für `com`.
3. Der DNS-Server fragt einen Server für `com`, der auf die Server für `example.com` verweist.
4. Der autoritative Server für `example.com` liefert die IP-Adresse von `www.example.com`.
5. Der DNS-Server gibt die Antwort an den Client weiter und speichert sie im Cache.

Die Anfragen des DNS-Servers an Root-, TLD- und autoritative Server sind **iterativ**: Jeder Server antwortet nur mit dem, was er selbst weiß, meist mit einem Verweis auf den nächsten Server.

### Caching und TTL

Jeder Eintrag hat eine **Time to Live** (TTL) in Sekunden. So lange dürfen DNS-Server und Clients die Antwort zwischenspeichern. Eine lange TTL entlastet die Server, führt aber dazu, dass Änderungen erst verzögert überall ankommen. Vor einem geplanten Serverumzug wird die TTL daher rechtzeitig verkürzt.

DNS verwendet Port 53, für normale Anfragen meist über UDP, für große Antworten und Zonenübertragungen über TCP.

## Ressourceneinträge

| Typ    | Bedeutung                                              | Beispiel                                                 |
| ------ | ------------------------------------------------------ | -------------------------------------------------------- |
| A      | Name zu IPv4-Adresse                                   | `fs01 → 192.168.10.20`                                   |
| AAAA   | Name zu IPv6-Adresse                                   | `fs01 → 2001:db8::20`                                    |
| CNAME  | Alias, verweist auf einen anderen Namen                | `intranet → fs01.corp.example.com`                       |
| MX     | zuständiger Mailserver mit Priorität                   | `example.com → 10 mail.example.com`                      |
| NS     | zuständiger Nameserver einer Zone                      | `example.com → ns1.example.com`                          |
| SOA    | Start of Authority: Verwaltungsdaten der Zone, etwa Seriennummer und Zeitwerte | eine pro Zone              |
| PTR    | IP-Adresse zu Name (Reverse Lookup)                     | `20.10.168.192.in-addr.arpa → fs01.corp.example.com`     |
| SRV    | Dienst mit Server, Port und Priorität                  | `_ldap._tcp.corp.example.com → 0 100 389 dc01.corp.example.com` |
| TXT    | beliebiger Text, etwa für SPF oder Domainbestätigungen | `v=spf1 mx -all`                                         |

Active Directory registriert beim Heraufstufen eines Domänencontrollers automatisch zahlreiche **SRV-Einträge**, etwa `_ldap._tcp.dc._msdcs.corp.example.com` und `_kerberos._tcp.corp.example.com`. Über sie finden Clients die Domänencontroller.

## Zonenarten

- **Forward-Lookupzone:** löst Namen in IP-Adressen auf, etwa `corp.example.com`.
- **Reverse-Lookupzone:** löst IP-Adressen in Namen auf. Für das Netz `192.168.10.0/24` heißt sie `10.168.192.in-addr.arpa`.

Nach der Art der Speicherung und Replikation unterscheidet man:

| Zonentyp            | Beschreibung                                                                                   |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| primär              | beschreibbare Originalkopie der Zone, gespeichert in einer Datei                               |
| sekundär            | schreibgeschützte Kopie, die per Zonenübertragung vom primären Server geholt wird              |
| Stub                | enthält nur NS- und SOA-Einträge, um die zuständigen Server einer anderen Zone zu kennen       |
| Active Directory-integriert | in Active Directory gespeichert und mit der AD-Replikation auf alle DNS-Server der Domäne verteilt; jeder DC kann Änderungen annehmen |

In einer Domäne werden fast immer AD-integrierte Zonen verwendet. Sie erlauben außerdem **sichere dynamische Updates**: Domänenmitglieder dürfen ihre eigenen Einträge automatisch anlegen und aktualisieren, fremde Einträge aber nicht überschreiben.

## Weiterleitungen

Ein interner DNS-Server kennt nur die eigenen Zonen. Für alle anderen Namen gibt es zwei Möglichkeiten:

- **Stammhinweise** (_Root Hints_): Der Server löst Namen selbst über die Root-Server auf.
- **Weiterleitungen** (_Forwarders_): Der Server leitet Anfragen an einen anderen DNS-Server weiter, etwa den des Providers.
- **Bedingte Weiterleitungen** leiten nur Anfragen für eine bestimmte Domäne an bestimmte Server weiter, etwa zu einer Partnerfirma über VPN.

## DNS-Server unter Windows Server

Bei der Installation eines Domänencontrollers mit `-InstallDns` wird DNS automatisch eingerichtet. Ein eigenständiger DNS-Server wird so konfiguriert:

```powershell
Install-WindowsFeature -Name DNS -IncludeManagementTools

# AD-integrierte Reverse-Lookupzone anlegen
Add-DnsServerPrimaryZone -NetworkId "192.168.10.0/24" -ReplicationScope Domain

# Einträge anlegen
Add-DnsServerResourceRecordA -ZoneName "corp.example.com" -Name "fs01" `
    -IPv4Address 192.168.10.20 -CreatePtr
Add-DnsServerResourceRecordCName -ZoneName "corp.example.com" -Name "intranet" `
    -HostNameAlias "fs01.corp.example.com"
Add-DnsServerResourceRecordMX -ZoneName "corp.example.com" -Name "." `
    -MailExchange "mail.corp.example.com" -Preference 10

# Weiterleitung einrichten
Add-DnsServerForwarder -IPAddress 1.1.1.1, 9.9.9.9
Add-DnsServerConditionalForwarderZone -Name "partner.example.net" -MasterServers 10.20.0.53

# Einträge einer Zone anzeigen
Get-DnsServerResourceRecord -ZoneName "corp.example.com"
```

## Fehlersuche

```powershell
Resolve-DnsName fs01.corp.example.com           # Name auflösen
Resolve-DnsName 192.168.10.20                   # Reverse Lookup
Resolve-DnsName -Type SRV _ldap._tcp.dc._msdcs.corp.example.com   # DCs finden
Resolve-DnsName www.example.com -Server 1.1.1.1 # bestimmten Server fragen

ipconfig /all          # welche DNS-Server verwendet der Client?
ipconfig /flushdns     # Client-Cache leeren
ipconfig /registerdns  # eigene Einträge neu registrieren
Clear-DnsServerCache   # Cache des DNS-Servers leeren
```

Das klassische Werkzeug `nslookup` funktioniert ebenfalls und ist auch unter Linux verfügbar.

:::caution[Häufigster Fehler]
In einer Domäne dürfen Clients und Server als DNS-Server **nur** die internen DNS-Server der Domäne eingetragen haben, niemals zusätzlich einen öffentlichen wie 8.8.8.8. Sonst fragt der Client manchmal den öffentlichen Server, der die interne Domäne nicht kennt, und Anmeldung oder Gruppenrichtlinien schlagen sporadisch fehl. Externe Namen löst der interne DNS-Server über Weiterleitungen auf.
:::
