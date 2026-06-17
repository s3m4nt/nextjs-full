# Next.js Full Stack App

An educational Next.js 16 App Router project demonstrating modern React patterns, Tailwind CSS, dynamic routing, client/server components, data fetching, and testing.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [Deployment](#deployment)

## Features

- **Home**, **About**, **Contact**, and **Users** pages using the Next.js App Router.
- **Dynamic User Details** pages with `notFound()` fallback.
- **Client-side Search** on Users page with debounced input and "No users found" handling.
- **Incremental Static Regeneration (ISR)** for list page with `revalidate` setting.
- **Loading States** via `loading.tsx` and React `<Suspense>` patterns.
- **Lottie Animations** and layout placeholders to prevent layout shift.
- **Responsive Design** using Tailwind CSS utilities and aspect-ratio plugin.
- **Live Footer Widget** showing Malibu, CA weather via Open-Meteo and current date.
- **Accessibility**: semantic HTML, focusable links (`tel:`), hover/active states.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4 (& Tailwind plugins)
- Lottie React for vector animations
- Jest & React Testing Library for unit tests
- JSONPlaceholder for mock user data

## Project Structure

```text
app/
  layout.tsx         Root layout: fonts, navigation, Footer
  page.tsx           Redirect to /home or simple welcome
  home/
    page.tsx         Home route with hero content
  about/
    page.tsx         About page with Lottie animation
  contact/
    page.tsx         Contact page with mailto link
  users/
    loading.tsx      Client-side loading spinner
    page.tsx         Users list (ISR + client filter)
    [userId]/
      page.tsx       Dynamic user detail page
components/
  Navigation.tsx     Navbar with active link underline
  PageLayout.tsx     Shared page wrapper
  Footer.tsx         Weather + date footer
  LottieAnimation.tsx Reusable animation container
  UsersClient.tsx    Client component for search/filter
public/
  images/            Static assets (Lottie JSON, photos)
__tests__/           Jest test files
jest.setup.ts        Jest mocks & setup
tailwind.config.js   Tailwind configuration
globals.css         Global styles & CSS variables
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   # or yarn
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command               | Description                              |
|-----------------------|------------------------------------------|
| `npm run dev`         | Start Next.js development server         |
| `npm run build`       | Build for production                     |
| `npm run start`       | Run production server                    |
| `npm test`            | Run Jest once                            |
| `npm run test:watch`  | Run Jest in watch mode                   |
| `npm run lint`        | Run ESLint                              |

## Development Workflow

- **Adding Pages**: Create new directories under `app/` with `page.tsx` files.
- **Styling**: Use Tailwind utility classes or define custom components in `globals.css` under `@layer components`.
- **Data Fetching**: Use `fetch` in server components and control caching with `next: { revalidate }` or `cache: 'no-store'`.
- **Client Components**: Mark with `'use client'` at the top, manage state and effects.
- **Routing**: Use `<Link href="...">` for client transitions and dynamic route folders (`[param]`).
- **Error Handling**: Call `notFound()` in server components to trigger the 404 page.

## Testing

- Mocks provided in `jest.setup.ts` for Next.js components (Image, Link) and browser APIs (`lottie-react`).
- Write unit tests under `__tests__/` using React Testing Library to verify component rendering and interactions.
- Run `npm test` to execute tests or `npm run test:watch` for TDD workflow.

## Deployment

This app can be deployed to Vercel for zero-configuration support of Next.js App Router features:

```bash
vercel --prod
```

Environment variables and real APIs can be configured in the Vercel dashboard or using `.env` files.

---

Feel free to explore, modify, and extend this template for your own Next.js learning projects!