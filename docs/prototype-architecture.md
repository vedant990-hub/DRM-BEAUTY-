# DRM Beauty Prototype Architecture

## Folder Structure

```text
app/
  layout.tsx
  globals.css
  page.tsx
components/
  site/
    header.tsx
    hero-section.tsx
    featured-collection.tsx
    best-sellers-section.tsx
    category-grid.tsx
    brand-story-section.tsx
    reviews-section.tsx
    instagram-section.tsx
    newsletter-section.tsx
    footer.tsx
    product-card.tsx
    category-card.tsx
    section-heading.tsx
  ui/
    button.tsx
    card.tsx
    input.tsx
lib/
  mock-data.ts
  motion.ts
  utils.ts
public/
  placeholders/
docs/
  prototype-architecture.md
```

## Component Architecture

- `components/site/*` owns the homepage sections and page-level commerce storytelling.
- `components/site/product-card.tsx` and `components/site/category-card.tsx` are reusable content cards for discovery surfaces.
- `components/ui/*` provides lightweight shadcn-style primitives for buttons, cards, and inputs.
- `lib/mock-data.ts` centralizes content, section copy, product metadata, and category definitions.
- `lib/motion.ts` stores shared Framer Motion variants.

## Route Architecture

- `/` Home page, implemented now.
- `/shop` Shop listing with filters, search, and sorting, planned next.
- `/product/[slug]` Product details page, planned next.
- `/cart` Cart page, planned next.
- `/about` About page, planned next.
- `/contact` Contact page, planned next.

## Mock Data Structure

- `navigation`: top-level header links.
- `heroHighlights`: short trust statements in the hero.
- `featuredCollections`: curated homepage collection stories.
- `categories`: five category cards for shop-by-category.
- `products`: 15 product objects with name, description, price, MRP, rating, variants, benefits, category, and image.
- `reviews`: homepage testimonials.
- `instagramPosts`: local placeholder gallery images.
- `storyStats`: brand metrics used in the story section.
# DRM Beauty Prototype Architecture

## Folder Structure

```text
app/
  layout.tsx
  globals.css
  page.tsx
components/
  site/
    header.tsx
    hero-section.tsx
    featured-collection.tsx
    best-sellers-section.tsx
    category-grid.tsx
    brand-story-section.tsx
    reviews-section.tsx
    instagram-section.tsx
    newsletter-section.tsx
    footer.tsx
    product-card.tsx
    category-card.tsx
    section-heading.tsx
  ui/
    button.tsx
    card.tsx
    input.tsx
lib/
  mock-data.ts
  motion.ts
  utils.ts
public/
  placeholders/
docs/
  prototype-architecture.md
```

## Component Architecture

- `components/site/*` owns the homepage sections and page-level commerce storytelling.
- `components/site/product-card.tsx` and `components/site/category-card.tsx` are reusable content cards for discovery surfaces.
- `components/ui/*` provides lightweight shadcn-style primitives for buttons, cards, and inputs.
- `lib/mock-data.ts` centralizes content, section copy, product metadata, and category definitions.
- `lib/motion.ts` stores shared Framer Motion variants.

## Route Architecture

- `/` Home page, implemented now.
- `/shop` Shop listing with filters, search, and sorting, planned next.
- `/product/[slug]` Product details page, planned next.
- `/cart` Cart page, planned next.
- `/about` About page, planned next.
- `/contact` Contact page, planned next.

## Mock Data Structure

- `navigation`: top-level header links.
- `heroHighlights`: short trust statements in the hero.
- `featuredCollections`: curated homepage collection stories.
- `categories`: five category cards for shop-by-category.
- `products`: 15 product objects with name, description, price, MRP, rating, variants, benefits, category, and image.
- `reviews`: homepage testimonials.
- `instagramPosts`: local placeholder gallery images.
- `storyStats`: brand metrics used in the story section.
