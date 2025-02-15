---
layout: ../../layouts/markdownPostLayout.astro
title: Understanding ISO Weeks and the First Thursday Rule
author: Byte - Eon
description: "Writing about ISO weeks and it's relation to first thursday"
image:
    url: "https://docs.astro.build/assets/arc.webp"
    alt: "The Astro logo on a dark background with a purple gradient arc."
pubDate: 2024-02-15
tags: ["astro", "blogging", "learning in public", "ISO week", "Javascript"]
---

## 📌 What is an ISO Week?
An **ISO week** follows the **ISO 8601** standard, where:
- A week starts on **Monday**.
- **Week 1** is the first week that contains at least **4 days** of the new year.

## 📌 Why is the First Thursday Important?
ISO Week 1 is the **first week that contains a Thursday** because:
- It ensures the week has **at least 4 days** in the new year.
- If Jan 1 falls on **Friday, Saturday, or Sunday**, it belongs to the **last ISO week of the previous year**.

## 📌 Examples of ISO Week 1
| Year  | Jan 1 Falls On | First Thursday | ISO Week 1 Starts On |
|-------|--------------|---------------|--------------------|
| 2023  | Sunday      | Jan 5 (Thu)   | Jan 2 (Mon)       |
| 2024  | Monday      | Jan 4 (Thu)   | Jan 1 (Mon)       |
| 2025  | Wednesday   | Jan 2 (Thu)   | Dec 30, 2024 (Mon) |

## 📌 Impact on Your Data
- JavaScript’s `Date` object does **not** natively support **ISO week numbers**.
- A custom function is needed to **correctly compute ISO weeks**.
