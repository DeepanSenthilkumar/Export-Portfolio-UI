# Shipyon — Export Portfolio UI

A complete frontend prototype for **Shipyon**, a South Indian trade & export company, built with a cyan (`#10b2ce`) + white brand theme.

## Tech Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | React 18 | Fastest dev/build cycle for a frontend-only prototype |
| Build tool | Vite 5 | Instant HMR, ~83 KB gzipped production bundle |
| Routing | React Router 6 | Real URL routes, deep links, working browser history |
| Icons | lucide-react | Tree-shaken, data-driven icon registry |
| Styling | Design-token CSS | Centralized tokens, grouped feature stylesheets |

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project Structure

```
src/
├── components/
│   ├── layout/      # Header (fixed, frosted on scroll), Footer
│   ├── ui/          # Button, Modal, Reveal, Icon, Badge, PageHero, ...
│   ├── home/        # Hero, StatsBand, CategoryShowcase, TradeJourney, ...
│   ├── products/    # ProductCard, CategoryCard, CategorySelectModal
│   ├── contact/     # ContactForm (validated), ContactInfo
│   └── services/    # GlobeNetwork (animated SVG)
├── pages/           # Home, About, Services, Products, Category, Contact, Legal, 404
├── data/            # company.js, categories.js, products.js (single source of truth)
├── hooks/           # useScrolled, useBodyLock
├── styles/          # tokens → base → animations → layout → ui → home → pages
├── App.jsx          # Route table + scroll restoration
└── main.jsx         # Entry
```

## Features

- 6 product categories, ~77 products with live search & group filters
- "Enquire Now" → prefilled contact form with full validation & simulated submit
- Start Your Order modal, scroll reveals, animated stats marquee, truck & globe SVGs
- Real Terms / Privacy pages, styled 404, mobile hamburger navigation
- `prefers-reduced-motion` support, palette-matched custom scrollbar

## Notes

This is a **frontend-only prototype** — form submissions are simulated locally and no data leaves the browser.