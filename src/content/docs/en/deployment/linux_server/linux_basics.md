---
title: Linux Basics
description: Distributions, the FHS directory structure, important shell commands, file permissions with chmod and chown, redirection and pipes, and text editors.
sidebar:
  order: 1
---

Linux is a free, open-source operating system based on the kernel developed by Linus Torvalds in 1991. Together with tools, a package manager and preconfigured programs, the kernel is shipped as a **distribution**.

## Distributions

| Distribution           | Characteristics                                                            |
| ---------------------- | -------------------------------------------------------------------------- |
| Debian                 | very stable, community-developed, basis of many other distributions        |
| Ubuntu Server          | based on Debian, by Canonical, long-term support (LTS) releases every two years |
| Red Hat Enterprise Linux (RHEL) | commercial with support, widespread in large companies             |
| Rocky Linux, AlmaLinux | free distributions compatible with RHEL                                    |
| SUSE Linux Enterprise  | commercial, particularly widespread in German-speaking countries           |
| Alpine Linux           | very small, popular as a base for container images                         |

Servers are almost always installed without a graphical interface and managed via SSH.

## Directory structure

Linux has no drive letters. All disks are mounted into a single directory tree that starts at `/` (root). The structure is defined in the **Filesystem Hierarchy Standard** (FHS):

| Directory   | Contents                                                        |
| ----------- | --------------------------------------------------------------- |
| `/bin`, `/usr/bin` | programs for all users                                   |
| `/sbin`, `/usr/sbin` | programs for system administration                     |
| `/etc`      | configuration files                                             |
| `/home`     | home directories of the users                                   |
| `/root`     | home directory of the administrator `root`                      |
| `/var`      | variable data such as log files (`/var/log`) and websites (`/var/www`) |
| `/tmp`      | temporary files                                                 |
| `/dev`      | device files, such as `/dev/sda` for the first disk             |
| `/proc`, `/sys` | virtual file systems with information about processes and hardware |
| `/mnt`, `/media` | mount points for additional disks                          |
| `/opt`      | additional software                                             |

Linux follows the principle "everything is a file": devices, process information and many system settings also appear as files.

## Important commands

| Command                 | Meaning                                             |
| ----------------------- | --------------------------------------------------- |
| `pwd`                   | show the current directory                          |
| `ls -la`                | list contents with details and hidden files         |
| `cd /etc`               | change directory                                    |
| `mkdir -p a/b/c`        | create directories                                  |
| `cp -r source target`   | copy, `-r` for directories                          |
| `mv old new`            | move or rename                                      |
| `rm -r folder`          | delete, without a recycle bin                       |
| `cat`, `less`           | show a file, `less` page by page                    |
| `head -n 20`, `tail -f` | beginning or end of a file, `-f` follows new lines  |
| `grep -i error file`    | find lines containing a search term                 |
| `find / -name "*.conf"` | search for files                                    |
| `df -h`, `du -sh *`     | show free space or the size of directories          |
| `top`, `htop`           | running processes and load                          |
| `ps aux`, `kill PID`    | show or end processes                               |
| `man command`           | manual page for a command                           |

## Redirection and pipes

```bash
ls -l > list.txt            # write output to a file (overwrite)
echo "Test" >> list.txt     # append to a file
command 2> errors.txt       # redirect error messages
cat /var/log/syslog | grep -i error | tail -n 20   # pipes connect commands
```

Unlike PowerShell, lines of text are passed between commands, not objects. Tools such as `grep`, `cut`, `sort`, `uniq` and `awk` process this text further.

## Users and root

The **root** user has unrestricted rights. You do not work as root permanently, however, but run individual commands with `sudo`. Which users may use `sudo` is defined in `/etc/sudoers` or via the group `sudo` (Debian, Ubuntu) or `wheel` (Red Hat).

## File permissions

Every file has an **owner**, a **group** and permissions for three classes: owner (u), group (g) and all others (o). There are three permissions for each class:

| Permission | File                   | Directory                            | Numeric value |
| ---------- | ---------------------- | ------------------------------------ | ------------- |
| r          | read                   | list contents                        | 4             |
| w          | write                  | create and delete files              | 2             |
| x          | execute                | enter                                | 1             |

The output of `ls -l` shows the permissions as a string:

```
-rwxr-x--- 1 anna engineering 2048 Nov  3 10:15 backup.sh
```

The first character indicates the type (`-` file, `d` directory, `l` symbolic link). It is followed by three characters each for owner, group and others. Here, `anna` may do everything, the group `engineering` may read and execute, and everyone else nothing. As a number, this is 750 (4+2+1, 4+1, 0).

```bash
chmod 750 backup.sh              # set permissions as a number
chmod u+x,o-r script.sh          # change permissions symbolically
chown anna:engineering report.txt   # change owner and group
chmod -R g+w /srv/project        # recursively for a whole directory
```

## Text editors

Configuration files are edited directly on the server. **nano** is beginner-friendly: the most important keyboard shortcuts are shown at the bottom, `Ctrl+O` saves and `Ctrl+X` exits. **vi** or **vim** is available on almost every system. There, you switch to insert mode with `i`, back with `Esc`, and save and quit with `:wq`.
