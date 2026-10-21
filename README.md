# Santiago Herrera — Portfolio

Personal portfolio of Santiago Herrera, Full Stack Software Engineer based in Buenos Aires, Argentina.

**Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 3, Framer Motion 11. Fonts via `next/font`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
npx tsc --noEmit
```

## Structure

- `app/` — layout, single page, OG image
- `components/` — Navbar, sections (Hero, About, Experience, Projects, Skills, Contact), UI primitives
- `lib/data.ts` — all site copy (experience, projects, skills). Edit content here, not in components.
- `public/` — images and the CV PDF

Design decisions, tokens and motion rules live in `CLAUDE.md`.

## Environment

Copy `.env.example` to `.env.local`. `NEXT_PUBLIC_SITE_URL` is needed once the production domain is known.
