# Future Plan

This plan is based on a review of the current K9handler2024 codebase. The project is a client-side Vite and React storefront with local product data, in-memory cart state, static content pages, and a simulated checkout flow.

## Current State Summary

The application already has a clear storefront foundation:

- React Router routes for home, shop, product details, cart, checkout, order success, about, contact, and policy pages
- Local product catalog in `src/data/products.js`
- Product images served from `public/images`
- Cart state managed through `src/context/CartContext.jsx`
- Tailwind CSS theme tokens defined in `src/index.css`
- Shared layout through header, announcement bar, and footer components
- Static build works with `npm run build`

The current implementation is not yet a production ecommerce system. Checkout is simulated in the browser, cart contents are not persisted after refresh, contact form submission only shows an alert, and product/order data is not stored in a backend.

## Key Findings

### Product and Commerce

- Product inventory is hard-coded in `src/data/products.js`.
- Product IDs are static strings.
- There is no stock tracking, SKU system, product status, sale status, or admin workflow.
- Prices display with an incorrect currency symbol in several views, likely caused by encoding issues.
- Checkout uses cash on delivery only and logs the order to the browser console.
- Orders are not saved, emailed, or visible to an admin.

### User Experience

- The main ecommerce journey exists: browse, view product, add to cart, checkout, success.
- Search and brand filtering exist on the shop page.
- Header navigation is desktop-focused; there is no dedicated mobile menu.
- Cart state is lost on page refresh because it only lives in React state.
- Contact form is mocked with a browser alert.
- Some visible text contains encoding artifacts, including unexpected separator characters, incorrect currency glyphs, placeholder question marks, and a broken heart/control character.

### Technical Foundation

- The app uses React 19, Vite 8, React Router 7, Tailwind CSS 4, and Font Awesome.
- There is no test suite.
- `npm run build` passes.
- `npm run lint` currently fails on three issues:
  - Unused `Link` import in `src/App.jsx`
  - Unused `React` import in `src/components/AnnouncementBar.jsx`
  - Fast Refresh warning caused by exporting both `CartProvider` and `useCart` from `src/context/CartContext.jsx`

### Assets and Deployment

- Product images are local, which is good for reliability.
- Brand/logo images in the header, footer, and about page currently load from remote eBay image URLs.
- The app is deployable as a static Vite build, but single-page app route fallback must be configured on the hosting provider.

## Phase 1: Stabilize the Current Storefront

Goal: Make the existing frontend clean, consistent, and ready for demo or static deployment.

- Fix encoding artifacts across all visible UI copy.
- Replace incorrect price symbols with the intended GBP/pound sterling currency display.
- Remove unused imports and resolve current lint failures.
- Split `useCart` into a separate module or adjust ESLint configuration to resolve the Fast Refresh issue.
- Add a mobile navigation menu to the header.
- Replace remote eBay logo/about images with local assets in `public/images`.
- Add persistent cart storage using `localStorage`.
- Improve add-to-cart feedback with a toast, inline confirmation, or mini-cart state.
- Confirm all policy copy matches the actual checkout, delivery, and returns process.

## Phase 2: Improve Product Experience

Goal: Make browsing and evaluating products stronger for real buyers.

- Expand product data with:
  - SKU
  - gender/category
  - UK, US, and EU size fields
  - condition grade
  - stock status
  - original box status
  - detailed flaws/notes
  - image alt text
- Add sort options for price, newest, brand, and condition.
- Add filters for size, condition, price range, and availability.
- Add empty states that reflect the active filters/search query.
- Add multi-image product galleries where real product photos are available.
- Add related products on the product detail page.
- Add metadata for SEO-friendly page titles and descriptions.

## Phase 3: Real Checkout and Orders

Goal: Move from simulated checkout to a real order workflow.

- Add a backend or commerce platform integration for order storage.
- Validate checkout fields more carefully, including postcode and phone number.
- Add order reference generation.
- Send customer and admin order confirmation emails.
- Add order status tracking for pending, confirmed, shipped, delivered, returned, and cancelled.
- Decide whether cash on delivery is the only payment method or add an online payment provider.
- Add fraud, spam, and abuse protections before public launch.
- Add clear delivery method, return window, and payment terms at checkout.

## Phase 4: Admin and Catalog Management

Goal: Allow the store owner to manage products and orders without editing code.

- Add admin authentication.
- Add product create/edit/delete screens.
- Add image upload and image ordering.
- Add inventory controls.
- Add order list and order detail screens.
- Add order status updates.
- Add customer contact history or notes.
- Add low-stock and sold-item workflows.

## Phase 5: Quality, Testing, and Maintainability

Goal: Reduce regressions as the app grows.

- Add unit tests for cart behavior.
- Add component tests for core UI states.
- Add end-to-end tests for:
  - product browsing
  - search and filters
  - add to cart
  - quantity updates
  - checkout submission
  - empty cart handling
- Add formatting tooling such as Prettier.
- Add CI checks for lint and build.
- Add accessibility checks for keyboard navigation, focus states, labels, and color contrast.
- Add error boundaries or graceful error states around product lookup and routing.

## Phase 6: Production Readiness

Goal: Prepare for a public ecommerce launch.

- Add a real domain and production hosting.
- Configure SPA fallback routing.
- Add analytics and conversion tracking with consent handling.
- Add sitemap and robots configuration.
- Add Open Graph images and social sharing metadata.
- Optimize image sizes and formats.
- Add loading states for future async data.
- Add privacy, cookie, and terms copy reviewed against the real business model.
- Add backup/export procedures for product and order data once a backend exists.

## Suggested Priority Order

1. Fix visible text and currency encoding issues.
2. Fix lint errors and keep `npm run lint` passing.
3. Persist cart state in `localStorage`.
4. Replace remote brand images with local assets.
5. Add mobile navigation.
6. Decide on the backend or commerce platform.
7. Implement real order storage and email notifications.
8. Add admin product and order management.
9. Add tests and CI.
10. Complete SEO, accessibility, analytics, and deployment hardening.

## Immediate Next Tasks

For the next development session, the highest-value technical tasks are:

- Clean up encoding artifacts and currency display.
- Fix the three current lint failures.
- Add cart persistence.
- Add a responsive mobile menu.
- Replace mocked contact and checkout behavior with clearly labeled interim states until backend work starts.
