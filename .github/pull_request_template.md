## Story

Closes **TASK-XXX**

## Description

<!-- Brief summary of what changed and why -->

## Acceptance Criteria

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Validation

### Tests

- [ ] `npm run build` — exit 0
- [ ] `npx vitest run` — all pass
- [ ] `npx playwright test` — all pass (if UI changes)
- [ ] `npx astro check` — no type errors

### Screenshots

<!-- Attach screenshots per VALIDATION.md for any UI change -->

| Route | Viewport | Before | After |
|-------|----------|--------|-------|
| `/example` | Desktop Chrome | | |
| `/example` | Pixel 5 | | |

### Console & Network

- [ ] Browser console: zero unexpected errors
- [ ] Network: zero unexpected failed requests

### Shop Changes (if applicable)

- [ ] Product pages render with correct pricing and images
- [ ] Shop index lists all expected products
- [ ] astro-icon SVGs resolve without 404

### Accessibility

- [ ] Keyboard navigation works on interactive elements

## Proof Bundle

- [ ] `proof.json` generated at repo root
- [ ] All artifacts SHA-256 hashed and non-empty

## Human Review Gates

- [ ] Design review (layout/component changes)
- [ ] Content accuracy review (services/case studies copy)
- [ ] SEO metadata review (astro-seo config)
