---
title: Internet Law
description: "Legal requirements for websites and online shops: the E-Commerce Act, legal notice and disclosure, copyright, image rights, data protection under the GDPR and cookies."
sidebar:
  order: 6
---

Anyone running a website, an online shop or an app has to meet a number of legal requirements. As a technical college graduate, you will often build such projects yourself, so a basic understanding of these rules is particularly important.

## E-Commerce Act (ECG)

The **E-Commerce Act** applies to information society services, i.e. to almost all commercial websites and online shops. Among other things, it requires the provider to make the following information easily and permanently accessible (§ 5 ECG):

- name or company name and geographical address
- contact details, including an email address
- company register number and register court (if applicable)
- competent supervisory authority (for activities requiring a licence)
- membership of a chamber or professional association, professional title and applicable trade or professional regulations
- VAT identification number (if applicable)

Prices must be clearly recognisable and state whether they include taxes and shipping costs. For online orders, the provider must confirm receipt of the order electronically without delay and allow the customer to recognise and correct input errors before ordering.

### Responsibility for third-party content

Providers that only store third-party content (such as a forum or a social media platform) are in principle only liable for unlawful content once they become aware of it and do not remove it without delay (**notice and take-down**).

## Legal notice and disclosure

In everyday language, this is called the **Impressum** (legal notice). Legally, it consists of several obligations:

- the information obligations under § 5 ECG (see above),
- the disclosure under § 25 Media Act: for "small" websites that do not go beyond presenting one's personal life or a company, the name or company name, the object of the company and the place of residence or registered office of the media owner are sufficient,
- the details under § 14 UGB for businesses registered in the company register (company name, legal form, registered office, company register number, register court), which also apply to business letters, order forms and emails.

:::caution
Missing or incomplete information can lead to **administrative fines** and to warning letters from competitors under the Unfair Competition Act (UWG).
:::

## Copyright

The **Copyright Act (UrhG)** protects original intellectual creations in the fields of literature, music, visual arts and film. Computer programs are also considered literary works and are protected.

- Protection arises automatically when the work is created; no registration or © symbol is needed.
- It ends 70 years after the death of the author. After that, the work is in the public domain.
- The author has exploitation rights (reproduction, distribution, making available to the public on the internet, adaptation) and moral rights (e.g. being named as the author).
- Copyright itself cannot be transferred (except by inheritance). Others only receive permissions to use the work or exploitation rights (licences).

:::note[Software written by employees]
If employees write software in the course of their duties, the employer is entitled to unrestricted exploitation rights, unless agreed otherwise (§ 40b UrhG).
:::

### Permitted uses

The law allows certain uses without the author's consent, for example

- reproduction for private use (but not from obviously unlawful sources),
- the right to quote: parts of a work may be quoted with a source reference if the quotation serves a purpose of its own (e.g. discussion, criticism),
- use for teaching to a certain extent.

### Images, music and open source

- Photos from the internet may not simply be used on your own website. Without a licence, you risk claims for injunctions and damages. Your own photos, purchased licences or works under free licences such as Creative Commons (observing the licence conditions) are legally unproblematic.
- People shown in photos have a right to their own image: images may not be published if this violates the legitimate interests of the person shown.
- Open-source software may be used according to the terms of its licence. Some licences (e.g. the GPL) require derived software to be published under the same licence (copyleft), others (e.g. MIT) only require the author to be credited.

### Trademarks and domains

Companies can have their names and logos protected as a **trademark** at the Austrian Patent Office or the EU Intellectual Property Office. Anyone who registers a domain that infringes someone else's trademark or name (domain grabbing) can be sued for an injunction and transfer of the domain.

## Data protection

Since 2018, the **General Data Protection Regulation (GDPR)** has applied throughout the EU, supplemented by the Austrian Data Protection Act (DSG). It protects personal data, i.e. all information relating to an identified or identifiable person, such as name, email address, IP address or location data.

### Principles

- **Lawfulness:** Data may only be processed if there is a legal basis, such as consent, the performance of a contract, a legal obligation or a legitimate interest.
- **Purpose limitation:** Data may only be used for specified purposes.
- **Data minimisation:** Only as much data as necessary may be collected.
- **Storage limitation:** Data must be deleted when it is no longer needed.
- **Integrity and confidentiality:** Data must be protected by technical and organisational measures (e.g. encryption, access rights).

### Rights of data subjects

Data subjects have, among other things, the right of access, rectification, erasure ("right to be forgotten"), restriction of processing, data portability and objection.

### Obligations for website operators

- a privacy policy that explains which data is processed for which purpose,
- cookies and tracking that are not technically necessary (e.g. for analytics or advertising) may only be set with prior consent (cookie banner),
- contracts with service providers that process data on your behalf (data processing agreements, e.g. web hosting),
- reporting data breaches to the Data Protection Authority within 72 hours.

Violations can be punished with fines of up to **€20 million** or 4 % of worldwide annual turnover.

:::tip[Privacy by design]
The GDPR requires data protection to be considered already when developing software (**data protection by design** and by default). As a developer, you should, for example, only store the data you need, never store passwords in plain text and transmit data encrypted.
:::
