# AGENTS.md

Single-page portfolio SPA (Vite 7 + React 19, JS only). No TypeScript, no tests, no CI.

## Commands

- `npm run dev` — dev server (HMR)
- `npm run build` — production build to `dist/` (Firebase serves this)
- `npm run preview` — preview `dist/` locally
- `npm run lint` — `eslint .` (only verification available; no test/typecheck scripts)

## Entrypoints & routing

- Entry: `src/main.jsx` — defines `createBrowserRouter` inline and calls `Aos.init()`.
- Routes: `/`, `/RateWise`, `/PlateKeeper` (note spelling: "Plate", not "Plant"), `/Wedlyn`.
- Import router from `"react-router"` (v7), not `react-router-dom`.
- `src/App.jsx` is dead Vite template code — `main.jsx` renders the router, not `App`. Do not wire new work through `App.jsx`.
- Project detail pages (`src/pages/*Page.jsx`) each mount `<ScrollToTop/>` manually — copy that pattern for new routes.

## Styling

- Tailwind v4 via `@tailwindcss/vite` plugin in `vite.config.js` — no `tailwind.config.js`.
- Global styles live in `src/App.css` (imported by `main.jsx`); `src/index.css` is empty — do not add styles there.
- daisyUI v5 (`@plugin "daisyui"` in `App.css`) with a custom `light` theme override (`--color-background`, `--color-primary`, etc.). `index.html` sets `data-theme="light"`.
- `cn()` helper at `src/lib/utils.ts` (clsx + tailwind-merge) — lone `.ts` file in a JS repo.

## Deploy (Firebase Hosting)

- `firebase.json`: `public: dist` + SPA rewrite `** -> /index.html` (required for deep routes like `/RateWise`).
- Flow: `npm run build && firebase deploy` (project: `rafi-shariar-ce5b2` in `.firebaserc`).

## Gotchas

- Contact form (`src/components/homepage/Contact.jsx`) posts to Web3Forms with a hardcoded `access_key` — the `emailjs`/`@emailjs/browser` deps are unused. Do not "migrate" to EmailJS or externalize the key without asking.
- Scroll animations: AOS initialized once in `main.jsx`; per-element via `data-aos` attributes.
- ESLint: `dist/` ignored; `no-unused-vars` ignores `^[A-Z_]`.
