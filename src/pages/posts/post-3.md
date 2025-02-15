---
title: Understanding ISO Weeks and the Importance of the First Thursday
description: "A concise guide to ISO weeks, why they start with the first Thursday, and how they affect date calculations."
author: "Byte Eon"
date: 2025-02-15
tags: ["ISO 8601", "week numbering", "date calculations", "calendar systems", "Javascript"]
---

# 📅 ISO Weeks Explained

## 🔹 What is an ISO Week?
An **ISO week** follows the **ISO 8601** standard, ensuring consistent week numbering. Key rules:
- **Weeks start on Monday**.
- **Week 1** is the first week with **at least 4 days in the new year**.
- A year has **52 or 53 weeks**, depending on its structure.

## 🔹 Why is the First Thursday Important?
The **first Thursday** helps determine **Week 1** because:
- It ensures the **majority of days in the first week** belong to the new year.
- If **January 1st falls on Friday, Saturday, or Sunday**, the first ISO week starts on the following Monday.

## 🔹 Calculating ISO Weeks
| Year  | Jan 1 Day  | First ISO Monday | First Thursday | ISO Week 1 Start |
|-------|----------|----------------|---------------|----------------|
| 2023  | Sunday   | Jan 2          | Jan 5        | Jan 2 (Mon)   |
| 2024  | Monday   | Jan 1          | Jan 4        | Jan 1 (Mon)   |
| 2025  | Wednesday| Dec 30 (2024)  | Jan 2        | Dec 30 (Mon)  |

## 🔹 Avoiding Common Mistakes
- **Week 53 exists** in some years (e.g., 2020, 2026).
- **Week numbering is different** from standard calendar weeks.
- **Incorrect calculations** can affect reports and analytics.

💡 Need an **ISO week calculation function**? Let me know!