---
title: 'Linux Filesystem Permissions: Users, Groups, and File Masks'
published: 2026-02-19
description: 'Understand how Linux filesystem permissions work through users, groups, and file masks to control access and keep your system secure.'
tags: [ 'linux', 'beginners', 'tutorial' ]
draft: false
---

On Linux, *everything* is a file. Devices, disks, directories, input and output, everything is represented by files with different flags and permissions.

Permissions are granted per user and per group. There are mainly three different permission levels a user or group can have over a file: read, execute, and write. The adminitrative user root is the only user with unlimited access to the whole system, able to change permissions on any file at any time.

That's why the root user account is so powerful and must be protected at all costs. You shouldn't log into your Linux system as root. Instead, use a regular user with sudo privileges - this will allow you to use the root superpower only when absolutely needed.

## Users and Groups

All files on a Linux system have an owner and a group. This is automatically assigned whenever a new file is created, but can be manually changed with a command called "chown".

In addition to ownership information, all files have a *mask* that determines how that file can be used by its owner, the users in its group, and the other users in the system.

## Understanding File Masks

To have a look at detailed information about the files in a directory, you can use the command `ls -la`.

When running that command, you'll notice that file permissions are represented by a sequence of letters and/or numbers. These are called 'file masks'.

The first position indicates if the resource is a directory. The following three positions represent the permissions granted to the file owner, then 3 positions representing permissions granted to the group linked to this file, and finally 3 positions representing permissions granted to everyone else.
