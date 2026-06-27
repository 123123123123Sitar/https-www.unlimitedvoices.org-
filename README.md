# Unlimited Voices

Production redesign of the Unlimited Voices website — free STEM, AI & coding education for youth.

## Stack

- **Next.js 15** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v3** — pinned to v3 because Tailwind v4's native `oxide` binding requires Node 20, and this environment runs Node 18. v3 is pure-JS and fully compatible.
- **Framer Motion** for animation (scroll reveals, count-ups, mobile menu, segmented filter)
- **Supabase** (Postgres + Auth + Storage) behind `src/lib/supabase/*` with typed models; SQL in `supabase/migrations`
- ESLint + Prettier

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Supabase URL + anon key (optional — app renders from seed content without them)
npm run dev                  # http://localhost:3000
```

The app renders entirely from local typed content (`src/content/*`) when Supabase env vars are absent, so pages work before any backend is wired.

## Design system

Tokens live in `src/app/globals.css` (CSS custom properties, light + true-dark). Reusable primitives are in `src/components/ui/`:

`Button` · `Card` · `Badge` · `Input`/`Textarea` · `Accordion` · `StatNumber` · `Reveal` · `Container` · `Section` · `ThemeToggle` · line `icons`

Aesthetic rules: single ink-blue accent (`#2D4EDB`), hairline borders, no gradients, no emoji, no heavy shadows. Fonts: Space Grotesk (display), Hanken Grotesk (body), Space Mono (code).

Accessibility is a brand value — theme, font-size, and reduce-motion are first-class preferences (`ThemeProvider`).

## Structure

```
src/
  app/(site)/        # marketing routes (shared Nav + Footer layout)
  components/ui/      # design-system primitives
  components/home/    # Home page sections
  content/            # typed content (seed source for the database)
  hooks/              # useCountUp
  lib/supabase/       # typed Supabase access (browser + server clients)
```

## Scripts

- `npm run dev` — dev server
- `npm run build` / `npm run start` — production
- `npm run lint` — ESLint
