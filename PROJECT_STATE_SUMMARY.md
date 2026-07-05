# 🌸 Jalé Florist — Project State Summary

**Last Updated:** June 2, 2026  
**Project Type:** Frontend Catalog & E-commerce Landing Page  
**Status:** MVP (Minimum Viable Product) — Core UI Complete, Backend Not Implemented

---

## 1. Current Tech Stack

### Core Dependencies
- **React:** `19.2.5` — Latest major version with improved compiler
- **React Router DOM:** `7.15.0` — Client-side routing (4 routes implemented)
- **Build Tool:** Vite `8.0.10` — Fast build and HMR development server

### Styling & UI
- **Tailwind CSS:** `4.2.4` — Utility-first CSS framework with `@tailwindcss/vite` plugin
- **PostCSS:** `8.5.13` — CSS transformation pipeline
- **Autoprefixer:** `10.5.0` — Automatic vendor prefixes

### Development & Linting
- **ESLint:** `10.2.1` — Code quality/linting with React-specific rules
- **eslint-plugin-react-hooks:** `7.1.1` — Best practices for React Hooks
- **eslint-plugin-react-refresh:** `0.5.2` — Fast Refresh support
- **TypeScript Declarations:** Included (`@types/react`, `@types/react-dom`) but TS not enforced

### Image Processing (Build Scripts)
- **Sharp:** `0.34.5` — Image optimization/conversion utility
- **heic-convert:** `2.1.0` — HEIC to WebP format conversion

### Styling Approach
- **Design System:** CSS-in-JS variables defined in `index.css` using Tailwind `@theme`
  - Primary colors: `--color-cream` (#FAF7F3), `--color-rose-brand` (#D9A299), `--color-sand` (#DCC5B2)
  - Extensively using custom Tailwind classes (e.g., `text-charcoal`, `bg-blush`)
- **Typography:** Google Fonts (`Inter` for body, `Playfair Display` for headings) via Tailwind
- **No CSS-in-JS library** (styled-components, emotion, etc.)
- **No UI component library** (shadcn/ui, Material-UI, etc.) — components built from scratch

---

## 2. Project Architecture

### Folder Structure

```
src/
├── components/              # 17 reusable UI components
│   ├── About.jsx           # Brand story section
│   ├── Catalog.jsx         # Product grid + filters (category, size)
│   ├── CategoryShowcase.jsx # 4-category teaser grid
│   ├── Features.jsx        # 3-feature highlight row
│   ├── FloatingWA.jsx      # Fixed WhatsApp button (bottom-right)
│   ├── Footer.jsx          # Sticky footer with socials & info
│   ├── Hero.jsx            # Auto-carousel hero (4 slides)
│   ├── HeroIntro.jsx       # Intro section with tagline
│   ├── HighlightProduct.jsx# Showcase featured products
│   ├── InstagramPromo.jsx  # Instagram feed embed placeholder
│   ├── Navbar.jsx          # Sticky header with 4 nav links + search
│   ├── Pricelist.jsx       # Flower add-ons pricing table
│   ├── ProductCard.jsx     # Individual product card (image, name, price)
│   ├── ProductMarquee.jsx  # Auto-scrolling product carousel (2 rows)
│   ├── QuickView.jsx       # Modal: product details + add-ons + WhatsApp CTA
│   ├── SectionBackground.jsx # Decorative background component
│   └── Testimonial.jsx     # Customer review cards
├── pages/                   # 4 page routes
│   ├── Home.jsx            # Landing page (8 sections)
│   ├── CatalogPage.jsx     # Catalog page wrapper
│   ├── AboutPage.jsx       # About page wrapper
│   └── ContactPage.jsx     # Contact page with 3 contact methods
├── data/
│   ├── products.js         # Auto-generated product array (21+ items)
│   ├── products-new.json   # Newer product JSON (dual data source)
│   └── testimonials.js     # Hardcoded 7 customer testimonials
├── utils/
│   └── whatsapp.js         # WhatsApp URL generator + price formatter
├── App.jsx                 # Main app with BrowserRouter & routes
├── main.jsx                # React entry point
├── App.css                 # App-level CSS (minimal)
└── index.css               # Global styles + Tailwind @theme config

public/
├── images/
│   ├── hero/              # 4 hero slides (desktop + mobile variants)
│   ├── produk/            # Product photos organized by category
│   │   ├── bloom-box/
│   │   ├── bouquet-artificial/   # Petite-S-M-L-XL-XXL-Human Size
│   │   ├── bouquet-fresh/        # Multiple size variants
│   │   ├── bouquet-fresh-mix-artificial/
│   │   ├── bouquet-mix/
│   │   ├── bucket-pipe/
│   │   ├── custom-bucket/
│   │   ├── money-bucket/
│   │   ├── snack-bucket/
│   │   ├── uncategorized/
│   │   ├── vas-artificial/
│   │   ├── vas-fresh/
│   │   ├── wedding-arrangement/
│   │   └── toko/           # Store location photos
│   └── highlights/
├── logo.png               # Brand logo
└── favicon.png            # Site favicon

scripts/                    # Build & data organization utilities
├── generate-products-js.mjs      # Auto-generate products.js from products-new.json
├── organize-and-generate-products.mjs  # Organize files + generate data
├── organize-produk.mjs            # Photo organization script
├── convert-heic-to-webp.mjs       # Image format conversion
├── add-extension-to-heic.mjs      # HEIC file extension utility
├── check-images.mjs               # Image validation script
├── cleanup-uncategorized.mjs      # Remove orphaned files
└── make-favicon-rounded.mjs       # Favicon generator

Configuration Files
├── vite.config.js         # Vite + React + Tailwind setup
├── eslint.config.js       # ESLint rules
├── vercel.json            # SPA rewrite rule (route fallback to /index.html)
├── tailwind.config.js     # Custom Tailwind theme (if exists)
├── package.json           # Project metadata & scripts
├── README.md              # Project documentation
└── checklist.md           # Development progress tracker
```

### Routing Structure (React Router v7)
```
/ ........................... Home (Landing page with 8 sections)
/about ....................... About page
/catalog ..................... Product catalog with filtering
/contact ..................... Contact page with 3 contact options
```

### Component Hierarchy

```
App
├── Navbar (sticky, top-fixed)
├── main (pt-16 for nav offset)
│   ├── Home Page
│   │   ├── Hero (carousel)
│   │   ├── ProductMarquee (auto-scroll carousel)
│   │   ├── HeroIntro
│   │   ├── Pricelist
│   │   ├── HighlightProduct
│   │   ├── InstagramPromo
│   │   ├── CategoryShowcase (4-category grid)
│   │   └── Testimonial
│   ├── Catalog Page
│   │   └── Catalog
│   │       ├── CustomDropdown (category filter)
│   │       ├── CustomDropdown (size filter)
│   │       └── ProductCard[] (grid)
│   │           └── QuickView (modal)
│   ├── About Page
│   │   └── About
│   ├── Contact Page
│   │   └── ContactPage (3 card CTA section)
├── Footer (bottom-fixed)
└── FloatingWA (fixed button, bottom-right)
```

---

## 3. Data Management

### Data Sources & Strategy

**Current Approach:** Static, auto-generated from image filenames

#### Primary Data: `src/data/products.js`
- **Auto-generated** from script `scripts/generate-products-js.mjs`
- **Source:** Reads `src/data/products-new.json`
- **Format:** JavaScript ES6 module (default export array)
- **Current Size:** 21+ product objects (bloated from bouquet-artificial category predominantly)
- **Structure per product:**
  ```javascript
  {
    id: "BLBOXARTIF_001",
    name: "Bloombox Artificial 001",
    category: "Bloom Box",
    size: "Artificial",
    price: 170000,                               // IDR (Rupiah)
    image: "/images/produk/bloom-box/...",      // Relative path to static asset
    description: "...",                          // Optional, some are empty
    available: true                              // Boolean flag (all true)
  }
  ```

#### Secondary Data: `src/data/products-new.json`
- Alternative/newer product data structure in JSON format
- Similar structure but with category as kebab-case (`bloom-box-artificial` vs `Bloom Box`)
- Image paths lack file extensions in some entries (inconsistent)
- No description field in all entries

#### Testimonial Data: `src/data/testimonials.js`
- **Hardcoded array** of 7 customer testimonials
- Structure:
  ```javascript
  { id, name, rating: 5, review: "...", date: "X months ago" }
  ```
- All ratings are 5-star (no variance)
- Dates are approximate ("2 months ago", "4 months ago")

#### Flower Add-ons: `src/components/QuickView.jsx`
- **Hardcoded list** of 16 accessory items (flowers for additional bouquets)
  ```javascript
  { id: 'add_sedapmalam', name: 'Sedap Malam pink', price: 15000 }
  ```
- Used in QuickView modal for upselling

### Data Flow

1. **Image Files** → Organized in `public/images/produk/[category]/[size]/`
2. **Manual/Script Processing** → `scripts/organize-and-generate-products.mjs` reads directory + filename metadata
3. **Generated JSON** → `src/data/products-new.json` (extract id, category, size, price from filename)
4. **Generated JS** → `src/data/products.js` exported as React-consumable module

### Issues & Limitations

- **No Database/Backend:** All data is static and hardcoded
- **No Real-time Updates:** Product inventory, prices, availability require code changes
- **Photo Naming Convention Dependency:** Product data quality depends on strict filename format
- **Dual Data Sources:** `products.js` and `products-new.json` create maintenance confusion
- **Missing Product Details:** No descriptions, specifications, or detailed product info
- **Hard-coded Discrepancies:** 
  - Testimonials are all 5-star (unrealistic)
  - Add-on flower items only in QuickView (not reusable)
  - Category names inconsistent across files (kebab-case vs Title Case)

---

## 4. Completed Features

### ✅ Fully Implemented & Functional

#### Navigation & Routing
- [x] Sticky navbar with 4 navigation links (Home, About, Catalog, Contact)
- [x] Search input in navbar (routes to catalog with search query state)
- [x] Mobile-responsive navbar with 5 design style options (configurable via `MOBILE_NAV_STYLE`)
- [x] Scroll-to-top on route change
- [x] Active link highlighting

#### Home Page
- [x] **Hero Section:** 4-slide carousel (auto-play, manual prev/next, swipe support)
- [x] **Product Marquee:** 2-row infinite auto-scroll carousel (30 random products)
- [x] **Hero Intro:** Tagline + CTAs
- [x] **Pricelist Section:** Flower add-ons pricing table with custom styling
- [x] **Highlight Product:** Featured products showcase
- [x] **Instagram Promo:** Promotional section (placeholder for Instagram feed embed)
- [x] **Category Showcase:** 4-category teaser cards with image hover effects
- [x] **Testimonial Section:** 7 customer reviews in carousel/grid

#### Catalog Page
- [x] **Product Grid:** Responsive grid (2 columns mobile, 3-6 columns desktop)
- [x] **Filtering:** 
  - Category dropdown (extracts unique categories from product data)
  - Size dropdown (extracts unique sizes from product data)
- [x] **Product Cards:** Image, SKU/ID, product name, price (IDR formatted)
- [x] **Card Interactions:**
  - Hover effects (image zoom, overlay "Lihat Detail" button)
  - Click to open QuickView modal

#### Product Quick View Modal
- [x] **Product Details Modal:** 
  - Large product image
  - Product name, ID, category, size, price
  - Product description (if available)
- [x] **Add-ons System:**
  - 16 additional flower items with individual pricing
  - Increment/decrement quantity controls
  - Real-time total price calculation
- [x] **WhatsApp Integration:**
  - Generate pre-filled WhatsApp message with order details
  - Include product name, code, price, add-ons, total
  - Button to open WhatsApp Web/App with message
- [x] **Modal Controls:**
  - Close on ESC key press
  - Close on backdrop click
  - Fixed positioning

#### About Page
- [x] Brand story section (component exists)
- [x] Responsive layout

#### Contact Page
- [x] 3 contact method cards:
  - WhatsApp with chat link
  - Instagram link
  - Google Maps link (implied)
- [x] Contact form section (HTML structure)

#### WhatsApp Integration
- [x] **Floating Button:** Fixed green button (bottom-right corner) with pulse animation
- [x] **Order Messages:** Pre-formatted order details including:
  - Product name & code
  - Base price
  - Add-ons breakdown (if any)
  - Total price calculation
  - Custom message footer
- [x] **Links:** Hardcoded WhatsApp number (+62 813-6793-1303)

#### Shared UI Components
- [x] **Footer:** Sticky footer with store info, social links (Instagram, TikTok, WhatsApp)
- [x] **Pricing Formatter:** Indonesian currency (IDR) with automatic K/M notation
- [x] **Section Backgrounds:** Decorative animated backgrounds for visual hierarchy
- [x] **Features Section:** 3-column highlight (Quality, Customizable, Safe Shipping)

---

## 5. Backend/Database Status

### Current State: **None — Purely Frontend SPA**

- **No Backend Server:** No Node.js/Express, Python/Django, or similar
- **No Database:** No PostgreSQL, MongoDB, Firebase, or any data persistence layer
- **No API Endpoints:** All communication is client-side only
- **No Authentication:** No user accounts, login system, or session management
- **No Payment Integration:** No Stripe, midtrans, or payment processor
- **No Order Management:** Orders go directly to WhatsApp (business manual handling)
- **No Admin Panel:** No content management system (CMS) for product updates

### Deployment

- **Hosting:** Configured for Vercel (via `vercel.json` with SPA rewrite rule)
- **Build Output:** Vite generates static `dist/` folder
- **CI/CD:** Not configured (no GitHub Actions, etc.)

### Current Workflow

```
Customer → Browse Catalog (Frontend) → Click Product → Fill Add-ons → Send WhatsApp → Admin Handles Manually
```

---

## 6. Code Quality & Gaps

### ✅ Code Quality Strengths

- **Component Reusability:** Well-modularized components with clear responsibilities
- **React Best Practices:** 
  - Proper use of hooks (`useState`, `useEffect`, `useRef`, `useCallback`, `useMemo`)
  - Controlled components for forms
  - Proper dependency arrays
- **Responsive Design:** Mobile-first approach, multiple breakpoints (sm, md, lg, xl)
- **Accessibility:** 
  - Semantic HTML (nav, section, footer)
  - ARIA labels on key elements
  - Keyboard support (ESC to close modals, Tab navigation)
- **Performance:**
  - Lazy image loading (`loading="lazy"`)
  - CSS-based animations (pure CSS, no JS animations)
  - Optimized images (WebP format)
  - Efficient re-renders with proper memo/callback usage
- **Code Style:** 
  - Consistent naming conventions (camelCase, PascalCase)
  - ESLint configured and enforced
  - Proper formatting and indentation

### ⚠️ Code Quality Gaps & Technical Debt

#### Data Management Issues
- **Hardcoded Data:** Flower add-ons list duplicated in `QuickView.jsx` (line 4-19)
  - Should be extracted to `src/data/addons.js`
- **Inconsistent Category naming:**
  - `products.js` uses: "Bloom Box", "Bouquet Artificial"
  - `products-new.json` uses: "bloom-box-artificial", "bouquet-mix"
  - `CategoryShowcase.jsx` uses custom mapping
- **Mock Testimonials:** All ratings are 5-star, dates are approximate
  - Should source from real Google Maps/reviews API
- **Static Product Descriptions:** Many products have empty or generic descriptions

#### Component Issues
- **InstagramPromo.jsx:** Appears to be placeholder (no implementation details read)
  - Likely contains hardcoded embed or stub
- **ProductMarquee.jsx:** Uses random selection on every render
  - Could cause performance issues with large datasets
  - Randomness is not deterministic (different on each page load)
- **Navbar.jsx:** 
  - `MOBILE_NAV_STYLE` constant hardcoded to 4 (should be configurable)
  - Search functionality incomplete (search query passed to catalog but may not filter)
- **Form Placeholder:** `ContactPage.jsx` has no actual form implementation
  - Contact form appears to be 3 link cards only
  - No email/message submission capability

#### Missing Features
- [ ] **Search Functionality:** Navbar has search input but catalog doesn't implement search filtering
- [ ] **Wishlist/Cart:** No mechanism to save favorite products or create shopping cart
- [ ] **Product Sorting:** Only filters (category, size), no sorting (price, newest, rating)
- [ ] **Product Details Page:** No dedicated `/product/:id` route for deep linking
- [ ] **Advanced Filtering:** No multi-select, price range, or availability filters
- [ ] **Product Reviews/Ratings:** No user review submission (testimonials are hardcoded)
- [ ] **Image Gallery:** QuickView may only show single image (carousel not confirmed)
- [ ] **Pagination:** Catalog loads all products on one page (no pagination/lazy load)
- [ ] **Email Contact Form:** Contact page lacks functional form submission
- [ ] **Analytics:** No tracking setup (Google Analytics, Mixpanel, etc.)
- [ ] **SEO:** No meta tags, structured data, sitemap, or robots.txt
- [ ] **Error Boundaries:** No error handling for failed image loads or API errors
- [ ] **Loading States:** No skeleton loaders or loading indicators

#### Build & Tooling Issues
- **Unused Dependencies:** `heic-convert` and `sharp` installed but not actively used in components
- **Script Organization:** Multiple similar scripts in `scripts/` directory (code duplication potential)
- **No Environment Config:** No `.env` files or config management for WhatsApp number, API keys
- **No Tailwind Config File:** Custom theme defined in `index.css` instead of `tailwind.config.js`

#### Testing & Documentation
- [ ] **No Tests:** No Jest, Vitest, or React Testing Library tests
- [ ] **Limited Documentation:** README covers features but not API/component documentation
- [ ] **No JSDoc Comments:** Components lack inline documentation
- [ ] **No Storybook:** No component preview/documentation tool

#### Image & Asset Issues
- **Photo Organization:** Files organized by product type + size (works but not scalable)
- **Image Path Inconsistency:** `products-new.json` has missing file extensions
- **No Image Optimization Pipeline:** Images are WebP but no compression/delivery optimization service (Cloudinary, Imgix)
- **Mobile Images:** Hero has mobile variants; other sections may not (responsive image handling incomplete)

#### Security & Performance
- [ ] **No HTTPS Enforcement:** `vercel.json` doesn't configure HTTPS
- [ ] **XSS Prevention:** Project sanitizes input in WhatsApp URL (uses `encodeURIComponent`), but no general XSS defense
- [ ] **Rate Limiting:** No rate limiting on WhatsApp message generation
- [ ] **CORS:** Not applicable yet (no external API calls)
- [ ] **Bundle Size:** No analysis tooling (webpack-bundle-analyzer, etc.)

#### Accessibility Gaps
- [ ] **Images Alt Text:** Some images may be missing descriptive alt attributes
- [ ] **Color Contrast:** No WCAG contrast validation
- [ ] **Form Labels:** Contact page lacks proper form labels (if form exists)
- [ ] **Focus Management:** Modal focus trap not confirmed

---

## 7. Summary: Project Maturity & Readiness

### Current Stage: **MVP - Pre-Production Ready**

| Aspect | Status | Notes |
|--------|--------|-------|
| **Frontend UI** | ✅ Complete | All visual sections implemented, responsive design working |
| **E-commerce Flow** | ⚠️ Partial | Browsing & selection work; no checkout/payment system |
| **Product Data** | ✅ Working | Static data functional, but not production-ready scale |
| **Backend** | ❌ Not Started | No orders database, user accounts, or inventory system |
| **Payment Processing** | ❌ Missing | No payment gateway integration |
| **Admin Tools** | ❌ Missing | No CMS for product updates, inventory management |
| **Deployment** | ✅ Ready | Vercel configuration in place; ready to deploy SPA |
| **Mobile Experience** | ✅ Complete | Responsive design with mobile-specific navbar |
| **Performance** | ✅ Good | Image optimization, lazy loading, efficient rendering |
| **Code Quality** | ⚠️ Good | Well-structured, but missing tests & documentation |

### Recommended Next Steps for Final Project (Tugas Akhir)

1. **Backend Development:** Build Node.js/Express API for order management, user accounts, payment processing
2. **Database Design:** Schema for products, orders, customers, inventory tracking
3. **Payment Integration:** Integrate midtrans or similar for Indonesian market
4. **Admin Dashboard:** Create management interface for inventory, orders, analytics
5. **Search & Filtering:** Implement full-text search, advanced filters
6. **User Accounts:** Registration, login, order history, wishlist
7. **Testing:** Add Jest/React Testing Library tests, E2E with Cypress
8. **Analytics & Monitoring:** Setup error tracking (Sentry), analytics (Mixpanel)
9. **Documentation:** API docs (Swagger), component storybook, deployment guide
10. **Security Audit:** HTTPS enforcement, input validation, SQL injection prevention

---

## 🎯 Key Takeaways

- **Strengths:** Beautiful, fully-functional frontend catalog with excellent UX, proper React patterns, mobile-ready
- **Gaps:** No backend, database, payment processing, user authentication — all manual WhatsApp-based flow
- **Ready for:** Presentation as MVP; full production deployment requires backend development
- **Scalability:** Current architecture works for ~100-500 products; needs pagination/virtualization + backend for larger scale

