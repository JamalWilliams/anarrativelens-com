# Replication Plan for anarrativelens.com

## Goal
Build and refine Astro components to replicate the live site `https://anarrativelens.com/`.

## Status Summary
- **Phase 1: Core Layout:** COMPLETED (Sticky Nav, Dual Hero, Enhanced Footer).
- **Phase 2: Core Components:** COMPLETED (Feature Grid, Growth Acts, Testimonials, Portfolio).
- **Phase 3: Core Pages:** COMPLETED (System, Insights, Contact, Links).
- **Phase 4: Missing Pages:** COMPLETED (Privacy, Terms, Refund Policy via Vault; Shop, Thank You).
- **Phase 5: Sovereign Architecture Migration:** IN_PROGRESS
	- [x] **Rollup Fix:** Reinstalled dependencies with \`--legacy-peer-deps\` to resolve node_modules corruption.
	- [x] **Route Resolution:** Deleted redundant static pages (\`index.astro\`, \`about.astro\`, etc.) to favor dynamic Vault-driven routes.
	- [ ] **Component Standardization:** Refactor all 24 components for brand token consistency.
	- [ ] **Cinematic Polish:** Global scroll reveals and luminosity treatment.
	- [ ] **Logic Unification:** Centralize prop parsing for Markdown emphasis.

## Decisions & Changes
- [x] **Route Protocol:** Adopted "Zero-Sync Static-Free" pattern—all pages except \`[...slug].astro\` and \`404.astro\` are removed from \`src/pages/\` to prevent conflicts with Vault content.
- [x] **Dependency Mandate:** Use \`--legacy-peer-deps\` for Astro 6 + Storybook installations.
- [x] **Refined Design Standards:** Updated \`DESIGN.md\` to reflect the "High-Contrast & Cinematic" truth (Source: \`Vault/config/site.json\`).

## Next Steps for SESO
1.  🟢 **Story 1.1:** [PENDING] Begin component refactor for \`anarrativelens.com\`.
2.  🟢 **Story 1.2:** [PENDING] Implement global \`IntersectionObserver\` in \`Layout.astro\`.
3.  🟢 **Story 1.3:** [PENDING] Unified \`textFormatter.ts\` creation.
