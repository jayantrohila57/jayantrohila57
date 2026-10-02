# Jayant Rohila — public identity docs

This repository powers [jayantrohila.com](https://jayantrohila.com) as a **public, versioned documentation site** for Jayant Rohila’s professional and public identity archive. It is built with [Next.js](https://nextjs.org) and [Fumadocs](https://fumadocs.dev).

This is **not** a personal legal vault. Do not commit phone numbers, home addresses, government IDs, salary or HR documents, bank details, or other confidential personal data. Placeholder pages may reference only public names, URLs, and high-level career context.

## Local development

Requirements: Node.js 22+, [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) for the docs home.

Other commands:

```bash
pnpm build    # production build
pnpm start    # serve production build
pnpm lint     # Biome check
```

## Content

Authoritative long-form content will be synced from Notion later. Until then, MDX files under `content/docs/` are **draft stubs** that define the information architecture:

- **About** — overview and bio
- **Career** — timeline, employers, education
- **Work** — projects, case studies, skills
- **Presence** — website, LinkedIn, GitHub, Linktree, domains
- **Archive** — mentions, conflicts, sources
- **Normalize** — charter, checklist, changelog

Edit MDX and `meta.json` files in those folders to change navigation and page copy.

## Privacy

- Public-only content in git.
- No PII, compensation, or legal correspondence in markdown.
- Use neutral placeholders when examples need a contact channel.

## License

Private repository; public site content is intended for external readers at jayantrohila.com.
