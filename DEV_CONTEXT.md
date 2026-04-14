# Development Context: Obsidian-as-Astro-CMS Stack (v1.2)

This project uses the **Zero-Sync Obsidian-as-CMS** architecture. Content is managed in a separate Obsidian Vault and served directly by Astro without duplication.

## 🏗 Architecture
- **Source of Truth:** `/Users/jamalwilliams/Vault/Websites/anarrativelens.com`
- **Frontend:** Astro (React + Tailwind)
- **Content Layer:** Astro Content Layer (Glob Loader) pointing to the external Vault via `.env`.
- **Media:** Symbolic link at `public/images` -> `Vault/Websites/anarrativelens.com/images`.

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
- **Navigation:** Main header links and footer links (supports nested children).
- **Contact:** Email and phone number.

### 3. Page Content
Located in `Vault/pages/*.md`.
- **Hero:** Controlled via frontmatter (`hero` object).
- **Sections:** Controlled via `sections` array in frontmatter using `SectionRenderer.astro`.
- **Markdown Body:** Any content below the frontmatter is rendered via the `<Content />` component.

### 4. Blog Posts
Located in `Vault/posts/*.md`.
- Supports standard frontmatter: `title`, `pubDate`, `description`, `author`, `tags`, `image`.

### 5. Hot Reloading (HMR)
To ensure Astro reloads when the Vault changes, the `astro.config.mjs` must include:
```javascript
server: {
  watch: {
    usePolling: true,
    interval: 100,
  }
}
```

## 🖼 Media Management
All images should be placed in `Vault/Websites/anarrativelens.com/images/`. 
Refer to them in JSON/Markdown using the path `/images/filename.ext`.

## 🚀 Common Workflows
- **Update Logo:** Change `brand.logo` in `site.json` and ensure the file exists in the Vault's `images/` folder.
- **Add Nav Link:** Add a new object to the `navigation` array in `site.json`.
- **Change Theme Colors:** Update the `brand.colors` object in `site.json`.
