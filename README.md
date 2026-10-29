# Idanimo Website

The company website for Idanimo LLC, built with Next.js.

**Live:** [idanmo-website.vercel.app](https://idanmo-website.vercel.app)

## Pages

- Home, services, solutions and financing
- Blog list, blog with sidebar, and blog post pages
- Brochure viewer with a page-flip effect
- Contact page with a newsletter box
- Sign in, sign up and a custom error page

## Features

- Light and dark theme
- Scroll-triggered animations
- Video modal
- Brochure rendered from a PDF as a flipbook
- Responsive layout with Tailwind CSS

## Tech stack

Next.js 14 (App Router) · React · TypeScript · Tailwind CSS · next-themes · react-pageflip · react-pdf · Axios

## Getting started

```bash
npm install
cp .env.example .env   # set NEXT_PUBLIC_BACKEND_URL
npm run dev            # http://localhost:3000
```

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_BACKEND_URL` | Base URL of the backend API |

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` / `npm start` | Production build and server |
| `npm run lint` | Run ESLint |
