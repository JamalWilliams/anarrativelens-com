# Replication Plan for anarrativelens.com

## Goal
Build and refine Astro components to replicate the live site `https://anarrativelens.com/`.

## Status Summary
- **Phase 1: Core Layout:** COMPLETED (Sticky Nav, Dual Hero, Enhanced Footer).
- **Phase 2: Core Components:** COMPLETED (Feature Grid, Growth Acts, Testimonials, Portfolio).
- **Phase 3: Core Pages:** COMPLETED (System, Insights, Contact, Links).
- **Phase 4: Missing Pages:** COMPLETED (Privacy, Terms, Refund Policy via Vault; Shop, Thank You).
- **Phase 5: Sovereign Architecture Migration:** COMPLETED
	- [x] **Rollup Fix:** Reinstalled dependencies with `--legacy-peer-deps`.
	- [x] **Route Resolution:** Deleted redundant static pages; implemented dynamic Vault-driven routes.
	- [x] **Component Standardization:** Stabilized 24 components for brand token consistency (DetailsTable, Nav, etc.).
	- [x] **Cinematic Polish:** Global scroll reveals, mobile menu visibility fix, and border consistency.
	- [x] **Logic Unification:** Centralized `textFormatter.ts` for unified Markdown parsing.
	- [x] **Deploy Readiness:** Established Cloudflare Pages staging pipeline via Wrangler.

- **Phase 6: GHL Integration:** IN_PROGRESS
	- [ ] **SOP Generation:** Create `GHL_Implementation_Guide.md` in Operations/SOPs.
	- [ ] **Widget Migration:** Replace static CTAs with GHL booking embeds.
	- [ ] **Tracking Script:** Inject GHL analytics into `Layout.astro`.

## Decisions & Changes
- [x] **Route Protocol:** Adopted "Zero-Sync Static-Free" pattern.
- [x] **Dependency Mandate:** Use `--legacy-peer-deps` for Astro 6 + Storybook installations.
- [x] **Media Standard:** Enforced "Pure Function" naming (lowercase-hyphenated) for all CMS assets.
- [x] **Deployment Control:** Local build + Wrangler upload (bypass GitHub Actions for Vault sovereignty).

## Next Steps for SESO
1.  🟢 **Story 2.1:** [PENDING] Audit GHL forms and generate Implementation Guide.
2.  🟢 **Story 2.2:** [PENDING] Update `Layout.astro` with GHL tracking logic.
3.  🟢 **Story 2.3:** [PENDING] Final Production Launch on primary domain.
