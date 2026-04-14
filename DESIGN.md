---
name: A Narrative Lens
description: Strategic visual storytelling and technical consulting for small businesses and creatives.
status: active
version: 1.2.0
author: SESO (for Jamal Williams)
---

# Overview
A Narrative Lens (NL) is a technical and creative consultancy. The design philosophy is "Strategic & Grounded" — focusing on clarity, process, and long-term value. The aesthetic is "High-Contrast & Cinematic".

# Visuals & Specs
- **Mood:** Strategic, Grounded, Earthy, High-Authority.
- **Imagery:** High-contrast photography, dark cinematic backgrounds, luminosity effects.

# Design Tokens (Source of Truth: Vault/config/site.json)

## Colors
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `nl-brown` | `#46280e` | Primary brand color. Representing the grounded foundation. |
| `nl-olive` | `#afbd3b` | Secondary brand color. Used for accents and calls to action. |
| `nl-dark` | `#290a09` | Main background color. Deep, earthy dark mode. |
| `nl-light` | `#fbf9f6` | Primary text color. Off-white for readability on dark backgrounds. |

## Typography
| Category | Font Family | Weight | Usage |
| :--- | :--- | :--- | :--- |
| `heading` | Montserrat | 700, 800 | Bold, modern sans-serif for impact. |
| `body` | Libre Baskerville | 400 | Classic serif for narrative readability. |

# Components & Elements
- **Cinematic Hero:** Features low-opacity background imagery (`mix-blend-luminosity`) and bold typography.
- **Section Borders:** High-visibility `white/20` borders for clear structural separation.
- **High-Contrast Cards:** Dark backgrounds with sharp, light text and consistent padding.
- **Button Radius:** Subtle `rounded-xl` (matching the modern-grounded feel).

# State & Logic
- **Zero-Sync CMS:** Powered directly by `Vault/Websites/anarrativelens.com`.
- **HMR Enabled:** Instant updates upon saving Vault markdown files.
