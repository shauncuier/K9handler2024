# K9handler2024

K9handler2024 is a Vite and React storefront for premium new and preloved trainers. The app presents a curated sneaker collection, product detail pages, cart management, a checkout flow, and supporting brand/policy pages.

## Features

- Responsive storefront built with React, React Router, and Tailwind CSS
- Home page with hero content, trust highlights, and featured products
- Shop and product detail pages powered by local product data
- Cart state managed with React context
- Checkout form with cash-on-delivery order simulation
- Order success, contact, about, privacy, terms, shipping, and returns pages
- Product images served from `public/images`

## Tech Stack

- React 19
- Vite 8
- React Router 7
- Tailwind CSS 4
- Font Awesome
- ESLint

## Getting Started

### Prerequisites

Install Node.js and npm. This project was built with modern Vite dependencies, so use a current Node.js LTS release.

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Vite will print a local development URL, usually:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
```

The optimized static build is generated in `dist/`.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
.
├── public/
│   ├── favicon.svg
│   └── images/              # Product images
├── src/
│   ├── components/          # Shared layout components
│   ├── context/             # Cart context and cart actions
│   ├── data/                # Local product catalog
│   ├── pages/               # Route-level pages
│   ├── App.jsx              # App routes and page shell
│   ├── index.css            # Global styles and Tailwind import
│   └── main.jsx             # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/shop` | Product listing |
| `/product/:id` | Product details |
| `/cart` | Shopping cart |
| `/checkout` | Checkout form |
| `/order-success` | Order confirmation |
| `/about` | Brand story |
| `/contact` | Contact page |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |
| `/shipping-policy` | Shipping policy |
| `/returns-policy` | Returns policy |

## Product Catalog

Product data is stored in:

```text
src/data/products.js
```

Each product includes an ID, name, price, brand, size, condition, description, feature list, badges, and image paths. Product image files should be placed in:

```text
public/images/
```

Use root-relative image paths in product data, for example:

```js
image: '/images/example.png'
```

## Checkout Behavior

The checkout page currently simulates order placement on the client. Submitting the checkout form logs the order details to the browser console, clears the cart, and redirects to the order success page.

There is no backend, payment gateway, database, email notification, or persistent order storage in the current implementation.

## Deployment

This is a static Vite app. After running `npm run build`, deploy the generated `dist/` directory to any static hosting provider such as Netlify, Vercel, GitHub Pages, Cloudflare Pages, or a standard web server.

For single-page app routing, configure the host to serve `index.html` for unknown routes.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

