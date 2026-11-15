---
"marram": minor
---

The kit is now **Marram**, a design system by ontheshore. New name, new logo (`public/logo.svg`, `public/favicon.svg`).

What you have to change:

- **npm:** the kit is no longer published to npm. Copy-source through the shadcn registry is the only way to install it; move any npm install over to `npx shadcn add`.
- **Registry (`npx shadcn add`):** the registry is now at `https://marram.ontheshore.biz/r/<name>.json` (namespace `@marram`). Files land in `components/marram/` and `styles/marram-tokens.css`. Re-add the items you use from the new URL, then delete the old component folder and tokens file and update imports.
- **Stylelint:** the rule names are now `marram/semantic-tokens` and `marram/no-token-shadow`; update any `stylelint-disable` comments that name them.
