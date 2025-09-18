---
title: ARP Cache Poisoning
date: 2019-09-09

tags:
  - Computer Security
  - Wireshark
---
[View Project](https://drive.google.com/file/d/1XZ6llzPHPvosuvshQ-XCG8pNwXbSVwib/view?usp=sharing)

In computer networking, ARP spoofing, ARP cache poisoning, or ARP
poison routing, is a technique by which an attacker sends (spoofed) Address
Resolution Protocol (ARP) messages onto a local area network. Generally, the
aim is to associate the attacker’s MAC address with the IP address of another
host, such as the default gateway, causing any traffic meant for that IP address
to be sent to the attacker instead. ARP spoofing may allow an attacker to intercept data frames on a network, modify the traffic, or stop all traffic. Often
the attack is used as an opening for other attacks, such as denial of service,
man in the middle, or session hijacking attacks. The attack can only be used
on networks that use ARP, and requires attacker have direct access to the local
network segment to be attacked.

<!--more-->

### Man-in-the-Middle Attack

{{< figure src="/media/man-in-the-middle-attack.png" alt="Man-in-the-Middle Attack" >}}

### ARP Spoofing Attack Flowchart

{{< figure src="/media/arp-spoof.png" alt="ARP Spoofing Attack" >}}
