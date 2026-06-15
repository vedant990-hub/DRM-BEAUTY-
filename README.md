# DRM Beauty

Production-ready frontend prototype for a premium cosmetics brand.

Tech stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react, clsx

Prerequisites
- Node.js 18+ (recommended)
- npm (uses package-lock.json)

Setup

Install dependencies:

```bash
npm install
```

Development

```bash
npm run dev
# open http://localhost:3000
```

Build

```bash
npm run build
npm run start
```

Repository structure

- app/ — Next.js App Router pages and layout
- components/ — UI components
- lib/ — utilities and mock data
- public/ — static assets and placeholders
- docs/ — design notes and architecture

Notes
- A root `.gitignore` has been added to exclude `node_modules`, `.next`, build artifacts, and env files.
- Next.js may warn about multiple lockfiles if a lockfile exists outside this repo; consider removing or ignoring external lockfiles if unintended.
