# Development Context: Obsidian-as-Astro-CMS Stack (v1.3)

This project uses the **Zero-Sync Obsidian-as-CMS** architecture. Content is managed in a separate Obsidian Vault and served directly by Astro without duplication.

## 🏗 Architecture
- **Source of Truth:** `/Users/jamalwilliams/Vault/Websites/anarrativelens.com`
- **Frontend:** Astro (React + Tailwind)
- **Content Layer:** Astro Content Layer (Glob Loader) pointing to the external Vault via `.env`.
- **Media:** Symbolic link at `public/media` -> `Vault/Websites/anarrativelens.com/media`.

## 🛠 Configuration & Management

### 1. External Content Path
Controlled via `.env`:
```env
VAULT_CONTENT_PATH="/Users/jamalwilliams/Vault/Websites/anarrativelens.com"
```

### 2. Global Site Config
Managed in `Vault/config/site.json`. Controls:
- **Brand:** Name, tagline, logo path, profile image.
- **Theme:** Colors (primary, secondary, bg, etc.) and fonts.
- **Navigation:** Main header links and footer links.

### 3. Media Mandate ("Pure Functions")
All media in the Vault MUST follow the naming standard:
- **Lowercase**
- **Hyphen-separated** (no spaces or underscores)
- **Semantic** (no generic IMG_001 labels)

## 🚀 Deployment Workflow
Because content lives in a private Vault outside of Git, standard GitHub Actions cannot build the site.
1. **Build Locally:** `npm run build`
2. **Push Code:** `git push origin staging` (for code archival)
3. **Deploy Staging:** `npx wrangler pages deploy dist --project-name=anarrativelens-com --branch=staging`
4. **Deploy Production:** `npx wrangler pages deploy dist --project-name=anarrativelens-com --branch=main`

## 🏁 Milestones
- **Astro Migration:** COMPLETE (v1.3.0)
- **GHL Integration:** IN_PROGRESS
