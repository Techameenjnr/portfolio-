# Techameenjnr — Portfolio

A single-page portfolio built with Next.js 14 (App Router), React, and TypeScript,
styled with Tailwind CSS. Skills render as an open-port scan table; projects render
as case files with real status.

## Run it locally
npm install
npm run dev

Then open http://localhost:3000.

## Before you deploy — fill these in
- app/page.tsx: swap the `link: "#"` placeholders for your real GitHub repo URLs,
  and update the `your-email@example.com` mailto link.
- Add new projects to the `cases` array as you build them.
- Update `scanLines` to reflect your current skills.

## Deploy to Vercel
Option A (recommended): push this folder to a GitHub repo, then import it at
https://vercel.com/new — Vercel auto-detects Next.js, no config needed.

Option B: run `npx vercel` from this folder and follow the prompts.

No environment variables are required since this is static content.# portfolio-