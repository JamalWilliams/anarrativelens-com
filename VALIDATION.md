# anarrativelens.com — Validation Runbook

## Repository

- **Path:** `/Users/jamalwilliams/code/anarrativelens.com/`
- **Work types:** `ui`, `content`, `build`
- **Source of truth:** `src/` (pages, components, content, layouts, lib, utils)
- **Forbidden paths:** `node_modules/`, `dist/`, `storybook-static/`, `.astro/`, `.git/`

## Runtime & Dependencies

- **Node:** `>=22.12.0`
- **Framework:** Astro 6.x, React 19, Tailwind CSS 4, TypeScript 5.x
- **Integrations:** `astro-icon`, `@astrojs/partytown`, `astro-seo`
- **Dev server:** `http://localhost:4321` (from `npm run dev`)
- **Ready signal:** "astro v6.x started" in terminal output

## Environment Variables

- None required for basic build validation. Partytown config (gtag forwarding) is static.

## Test Infrastructure

| Check | Command | Expected |
|-------|---------|----------|
| Build | `npm run build` | Exit 0, output in `dist/` |
| Dev server | `npm run dev` | Exit 0, serves on :4321 |
| Unit tests | `npx vitest run` | Exit 0, all suites pass |
| Storybook | `npm run storybook` | Exit 0, serves on :6006 |
| Playwright | `npx playwright test` | Exit 0, all specs pass |
| TypeScript | `npx astro check` | Exit 0, no type errors |

## Routes & Screens

| Route | Description | Key Elements |
|-------|-------------|-------------|
| `/` | Homepage | Brand hero, services overview, case study highlights |
| `/contact` | Contact page | Form, brand touchpoints |
| `/insights/` | Insights / blog | Content collection index |
| `/links` | Links page | External resource links |
| `/shop` | Shop index | Product listing |
| `/shop/[...slug]` | Shop product pages | Product details |
| `/[...slug]` | Catch-all content | CMS-driven pages |
| `/404` | Not found | Custom error page |

## Browser Validation (Required for UI Changes)

### Viewport
- Desktop Chrome (1280x720)
- Mobile Chrome / Pixel 5 (393x851)

### Screenshots
- Output directory: `screenshots/{TASK-ID}/`
- Naming: `{route-name}-{viewport}-{state}.png`
- Required per changed route: starting state, after primary interaction

### Console
- Zero unexpected errors (Partytown/gtag warnings permitted if non-blocking)

### Network
- Zero unexpected failed requests (4xx/5xx)
- Icon requests (astro-icon) must resolve

### Accessibility
- Run `npx playwright test` if Playwright specs exist for changed routes
- Manual keyboard nav check on interactive elements (forms, shop)

## Content Changes

- Content lives in `src/content/` with Zod-schema frontmatter validation
- Run `npm run build` to verify content references
- Check catch-all `[...slug].astro` resolves correctly

## Shop / Product Changes

- Verify product pages render with correct pricing, images, and descriptions
- Check shop index lists all expected products
- Confirm astro-icon SVGs resolve without 404

## Non-UI Work

- Content-only changes: skip screenshots, provide hashes + build proof
- lib/utils changes: provide test evidence via `npx vitest run`

## Proof Bundle

- Output: `proof.json` at repo root
- Artifacts: SHA-256 hashed, non-empty, byte-count tracked
- Every criterion: `status: pass` with executable evidence
- UI work: at least one browser check with screenshot per viewport

## Retryable Failures

- Partytown/analytics script timeouts: non-blocking, retry once
- Dev server port conflicts: kill existing process, retry

## Blockers / Escalation

- Build failures from icon resolution (astro-icon)
- Broken product links or shop routing
- Console errors from React island hydration

## Human Gates

- Visual review for homepage and shop layout changes
- Content accuracy for case studies and services copy
- SEO metadata review (astro-seo config)
