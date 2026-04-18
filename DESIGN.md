---
name: A Narrative Lens
description: Strategic visual storytelling and technical consulting for small businesses and creatives.
status: active
version: 1.3.0
author: SESO (for Jamal Williams)
---

# Overview
A Narrative Lens (NL) is a technical and creative consultancy. The design philosophy is "Strategic & Grounded" — focusing on clarity, process, and long-term value. The aesthetic is "High-Contrast & Cinematic".

# Visuals & Specs
- **Mood:** Strategic, Grounded, Earthy, High-Authority.
- **Imagery:** High-contrast photography, dark cinematic backgrounds. No "mix-blend-luminosity" on heroes to ensure clarity.

# Design Tokens (Source of Truth: Vault/config/site.json)

## Colors
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `nl-brown` | `#46280e` | Primary brand color. Representing the grounded foundation. |
| `nl-olive` | `#afbd3b` | Secondary brand color. Used for accents and high-impact benefit boxes. |
| `nl-dark` | `#290a09` | Main background color. Deep, earthy dark mode. |
| `nl-light` | `#fbf9f6` | Primary text color. Off-white for high-contrast readability. |

## Typography
| Category | Font Family | Weight | Usage |
| :--- | :--- | :--- | :--- |
| `heading` | Montserrat | 700, 800 | Bold, modern sans-serif for impact. |
| `body` | Libre Baskerville | 400 | Classic serif for narrative readability. |

# Components & Elements
- **Cinematic Hero:** Features high-impact imagery with a `bg-black/40` overlay and bold 20px navigation links.
- **Sovereign Layout:** Strictly **border-free** sections. All redundant separators and "90s frames" are removed to ensure a fluid, modern flow.
- **High-Contrast Cards:** Dark backgrounds (`bg-brand-bg`) with sharp text and rounded-2xl corners.
- **Benefit Boxes:** Solid `bg-brand-secondary` (Olive Green) backgrounds with dark text for ultimate contrast.

# State & Logic
- **Zero-Sync CMS:** Powered directly by `Vault/Websites/anarrativelens.com`.
- **Navigation Scale:** Main links are exactly **20px** (text-base at root 20px).
- **HMR Enabled:** Instant updates upon saving Vault markdown files.
