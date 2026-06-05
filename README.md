# nextjs-full

A personal Next.js project built with the App Router, Tailwind CSS, and TypeScript.

## Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Font** — Satoshi (Fontshare), Geist / Geist Mono (Google Fonts)
- **Animation** — Lottie React
- **Testing** — Jest + React Testing Library

## Project Structure

```
app/
  layout.tsx          # Root layout — nav, footer, fonts
  page.tsx            # Home route (/)
  home/page.tsx       # Home page content
  about/page.tsx      # About route (/about)
  contact/page.tsx    # Contact route (/contact)
  globals.css         # Global styles and Tailwind config

components/
  Navigation.tsx      # Nav bar with active link indicator
  Footer.tsx          # Footer with live Malibu weather + date
  PageLayout.tsx      # Shared page wrapper (gray wings layout)
  LottieAnimation.tsx # Lottie animation wrapper

__tests__/            # Jest test files
public/               # Static assets
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

## Features

- Active nav link indicator using `usePathname`
- Live weather widget in footer (Malibu, CA) via [Open-Meteo](https://open-meteo.com) — no API key required
- Lottie animation on the About page
- Shared `PageLayout` component for consistent page structure
- Global Satoshi font with Tailwind utility fallbacks
