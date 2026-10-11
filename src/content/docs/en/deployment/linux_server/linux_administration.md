---
title: Linux Administration
description: Managing users and groups, installing software with apt, controlling services with systemd, reading logs with journalctl, configuring the network, securing SSH with keys and setting up a firewall with ufw.
sidebar:
  order: 2
---

This page shows the typical tasks involved in managing a Linux server, using Debian and Ubuntu as examples. On other distributions, some tools have different names, such as `dnf` instead of `apt` on Red Hat.

## Users and groups

```bash
sudo adduser anna                 # create a user interactively with a home directory
sudo useradd -m -s /bin/bash max  # non-interactively
sudo passwd max                   # set a password
sudo groupadd engineering         # create a group
sudo usermod -aG engineering,sudo anna   # add a user to groups (-a: append!)
id anna                           # show user ID and groups
sudo deluser --remove-home max    # delete a user including the home directory
```

Users are stored in `/etc/passwd`, the hashed passwords in `/etc/shadow` and the groups in `/etc/group`.

## Installing software

Software is installed from the distribution's repositories via a **package manager**. It resolves dependencies automatically and keeps all programs up to date.

```bash
sudo apt update                  # update package lists
sudo apt upgrade                 # update all installed packages
sudo apt install nginx           # install a package
sudo apt remove nginx            # remove a package
apt search samba                 # search for packages
```

With the package `unattended-upgrades`, security updates are installed automatically.

## Services with systemd

On almost all current distributions, services (daemons) are managed with **systemd**:

```bash
sudo systemctl status nginx      # show status and the latest log lines
sudo systemctl start nginx       # start
sudo systemctl stop nginx        # stop
sudo systemctl restart nginx     # restart
sudo systemctl reload nginx      # reload the configuration without dropping connections
sudo systemctl enable nginx      # start automatically at boot
systemctl --failed               # show failed services
```

## Logs

systemd collects the logs of all services in the **journal**:

```bash
journalctl -u nginx              # logs of one service
journalctl -u nginx --since "1 hour ago"
journalctl -f                    # follow new entries live
journalctl -p err -b             # only errors since the last boot
```

Many programs also write their own log files to `/var/log`, such as `/var/log/nginx/error.log`. So that they do not fill the disk, **logrotate** compresses and deletes them regularly.

## Network

```bash
ip a                     # addresses of all interfaces
ip r                     # routing table
ss -tulpn                # open ports and the corresponding programs
ping -c 4 192.168.10.1
dig fs01.corp.example.com   # DNS query
hostnamectl set-hostname web01
```

Ubuntu Server configures the network with **Netplan**. A static address is defined in a YAML file under `/etc/netplan/`:

```yaml
network:
  version: 2
  ethernets:
    eth0:
      addresses: [192.168.10.30/24]
      routes:
        - to: default
          via: 192.168.10.1
      nameservers:
        addresses: [192.168.10.10, 192.168.10.11]
        search: [corp.example.com]
```

`sudo netplan try` tests the configuration and automatically reverts it if the connection is lost. `sudo netplan apply` applies it permanently. Debian uses the file `/etc/network/interfaces` instead.

## SSH

Linux servers are managed via **SSH** (Secure Shell, TCP port 22). The connection is encrypted.

```bash
ssh anna@192.168.10.30
```

**SSH keys** are more secure and more convenient than passwords. A key pair is generated: the private key stays on your own computer, and the public key is stored on the server.

```bash
ssh-keygen -t ed25519                # generate a key pair (on your own computer)
ssh-copy-id anna@192.168.10.30       # copy the public key to the server
```

Then password authentication is disabled in `/etc/ssh/sshd_config`:

```
PasswordAuthentication no
PermitRootLogin no
```

and the service is reloaded with `sudo systemctl reload ssh`. Test signing in with the key in a second session before closing the first one so that you do not lock yourself out.

Windows 10 and 11 also include an SSH client, so `ssh` works directly in PowerShell.

## Firewall with ufw

Ubuntu comes with **ufw** (Uncomplicated Firewall), a simple interface for the Linux firewall:

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow OpenSSH
sudo ufw allow 80,443/tcp
sudo ufw allow from 192.168.10.0/24 to any port 3306 proto tcp
sudo ufw enable
sudo ufw status verbose
```

Always allow SSH before enabling the firewall. You can find more about firewalls under [firewalls and VPN](/en/deployment/operations/firewalls/).

## Scheduled tasks with cron

Recurring tasks are scheduled with **cron**. `crontab -e` opens the list of the current user. Each line contains the minute, hour, day, month, weekday and the command:

```
# Back up the database every day at 2:30 a.m.
30 2 * * * /usr/local/bin/db-backup.sh
# Create a report every Monday at 6 a.m.
0 6 * * 1 /usr/local/bin/report.sh
```

Alternatively, tasks can be scheduled with systemd timers, which can be managed and monitored like services.
