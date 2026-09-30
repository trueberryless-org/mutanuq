---
title: Linux und Windows integrieren
description: Freigaben mit Samba bereitstellen, Windows-Freigaben unter Linux einbinden, Linux-Server mit realmd und SSSD in Active Directory aufnehmen und Dateien über NFS teilen.
sidebar:
  order: 3
---

In heterogenen Netzen müssen Linux- und Windows-Systeme Dateien austauschen und dieselben Benutzerkonten verwenden. Der Lehrplan nennt das „systemübergreifenden Dateizugriff zwischen unterschiedlichen Betriebssystemen“ und „Integration verschiedener Betriebssysteme“.

## Samba

**Samba** ist eine freie Implementierung des SMB-Protokolls für Linux. Damit kann ein Linux-Server Freigaben bereitstellen, auf die Windows-Clients genau wie auf einen Windows-Dateiserver zugreifen. Samba kann sogar als Active Directory-Domänencontroller arbeiten.

### Freigabe einrichten

```bash
sudo apt install samba
sudo mkdir -p /srv/samba/projekte
sudo chown root:technik /srv/samba/projekte
sudo chmod 2770 /srv/samba/projekte     # 2: neue Dateien erben die Gruppe
```

In der Konfigurationsdatei `/etc/samba/smb.conf` wird die Freigabe beschrieben:

```ini
[projekte]
   path = /srv/samba/projekte
   read only = no
   valid users = @technik
   create mask = 0660
   directory mask = 2770
```

Samba verwaltet eigene Kennwörter für seine Benutzer. Ohne Anbindung an eine Domäne muss jeder Benutzer zusätzlich als Samba-Benutzer angelegt werden:

```bash
sudo smbpasswd -a anna
testparm                        # Konfiguration auf Fehler prüfen
sudo systemctl restart smbd
```

Unter Windows ist die Freigabe dann über `\\192.168.10.30\projekte` erreichbar.

## Windows-Freigaben unter Linux einbinden

Umgekehrt kann ein Linux-System Windows-Freigaben einbinden:

```bash
sudo apt install cifs-utils
sudo mkdir /mnt/vertrieb
sudo mount -t cifs //fs01.corp.example.com/Vertrieb /mnt/vertrieb \
    -o username=anna,domain=CORP,uid=anna,gid=anna
```

Für eine dauerhafte Einbindung wird ein Eintrag in `/etc/fstab` angelegt. Die Zugangsdaten gehören dabei in eine eigene Datei, die nur root lesen darf, und nicht direkt in `/etc/fstab`:

```
//fs01.corp.example.com/Vertrieb /mnt/vertrieb cifs credentials=/root/.smb-vertrieb,uid=anna 0 0
```

## Linux in Active Directory aufnehmen

Damit sich Domänenbenutzer an Linux-Servern anmelden können, wird der Server mit **realmd** und **SSSD** (System Security Services Daemon) in die Domäne aufgenommen. SSSD fragt Benutzer und Gruppen per LDAP ab, authentifiziert über Kerberos und speichert Anmeldedaten zwischen, damit die Anmeldung auch kurzzeitig ohne DC funktioniert.

```bash
sudo apt install realmd sssd sssd-tools adcli krb5-user packagekit
realm discover corp.example.com
sudo realm join --user=Administrator corp.example.com
realm list
id anna@corp.example.com
```

Voraussetzungen sind, dass der Linux-Server die Domänencontroller als DNS-Server verwendet und seine Uhrzeit mit ihnen übereinstimmt, weil Kerberos nur wenige Minuten Zeitabweichung toleriert.

Mit `sudo realm permit -g GG_Technik@corp.example.com` wird die Anmeldung auf eine AD-Gruppe beschränkt. Welche AD-Gruppen `sudo` verwenden dürfen, wird in einer Datei unter `/etc/sudoers.d/` festgelegt.

## NFS

Zwischen Linux- und Unix-Systemen wird für Dateifreigaben oft **NFS** (Network File System) verwendet. Es ist schlanker als SMB und wird etwa für gemeinsamen Speicher von Virtualisierungs-Hosts oder Container-Plattformen eingesetzt.

```bash
# Server
sudo apt install nfs-kernel-server
echo "/srv/nfs/daten 192.168.10.0/24(rw,sync,no_subtree_check)" | sudo tee -a /etc/exports
sudo exportfs -ra

# Client
sudo apt install nfs-common
sudo mount -t nfs 192.168.10.30:/srv/nfs/daten /mnt/daten
```

Bei NFS in der Version 3 vertraut der Server den Benutzer-IDs, die der Client meldet. Freigaben sollten daher nur für vertrauenswürdige Netze erlaubt werden. NFS in Version 4 kann mit Kerberos abgesichert werden.

## Vergleich

| Kriterium          | SMB (Windows, Samba)                        | NFS                                       |
| ------------------ | ------------------------------------------- | ----------------------------------------- |
| typische Clients   | Windows, macOS, Linux                        | Linux, Unix, VMware ESXi                  |
| Authentifizierung  | Benutzer und Kennwort, Kerberos             | Host-basiert (v3), Kerberos (v4)          |
| Berechtigungen     | Windows-ACLs                                 | Unix-Rechte, bei v4 auch ACLs             |
| Port               | TCP 445                                      | TCP/UDP 2049                              |
