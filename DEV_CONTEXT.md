# Development Context: Repository-Local Content Stack (v1.4)

This project has shifted from the "Zero-Sync Obsidian-as-CMS" architecture to a **Repository-Local Content** model. All website content (markdown, media, and data) now lives directly within the project's source code.

## 🏗 Architecture
- **Source of Truth:** `src/content/` (Local)
- **Frontend:** Astro (React + Tailwind)
- **Content Layer:** Astro Content Layer (Glob Loader) pointing to local `src/content/`.
- **Media:** Assets are tracked in the repository and served from `src/content/media/` or standard public paths.

## 🛠 Configuration & Management

### 1. Content Path
Content is now managed in `src/content/`. The previous `.env` based external path is deprecated.

### 2. Site Collections
- **Pages:** Managed in `src/content/pages/`.
- **Posts:** Managed in `src/content/posts/`.
- **Data:** Managed in `src/content/data/` (Testimonials, Projects, Features, Pricing).
- **Products:** Managed in `src/content/products/`.

### 3. Media Mandate ("Pure Functions")
All media MUST follow the naming standard:
- **Lowercase**
- **Hyphen-separated** (no spaces or underscores)
- **Semantic** (no generic IMG_001 labels)

## 🚀 Deployment Workflow
Content is now bundled with the code, enabling standard CI/CD builds.
1. **Develop:** Edit files in `src/content/`.
2. **Push:** `git push origin staging`
3. **Deploy:** Automated via Cloudflare Pages (tracked branches: `master`, `staging`).

## 🏁 Milestones
- **Astro Migration:** COMPLETE (v1.3.0)
- **Local Content Migration:** COMPLETE (v1.4.0)
- **GHL Integration:** IN_PROGRESS
