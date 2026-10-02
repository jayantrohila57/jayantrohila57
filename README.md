# Jayant Rohila — portfolio

Personal portfolio for [jayantrohila.com](https://jayantrohila.com): product engineering profile, flagship projects, and contact. Built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.

## Local development

Requirements: Node.js 22+, [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build
pnpm start
pnpm lint
```

## Site structure

- `/` — art-directed homepage (selected work, engineering, stack, experience, contact)
- `/work`, `/work/[slug]` — project index and case-study-style detail pages
- `/engineering`, `/experiments`, `/about`, `/contact`
- `/resume` — printable resume + generated PDF at `/resume.pdf`

Content is driven from `src/data/portfolio.ts` and `src/lib/resume-data.ts` (verified public facts). Google Analytics loads only when `NEXT_PUBLIC_GA_ID` is set.

## Deploy

Compatible with [Vercel](https://vercel.com). Production domain: `jayantrohila.com`.
