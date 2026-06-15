export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  mrp: number;
  rating: number;
  reviewCount: number;
  variants: string[];
  benefits: string[];
  category: "Lipsticks" | "Eyeliners" | "Kajal" | "Foundation" | "Compact Powder";
  image: string;
  badge?: string;
};

export const navigation = [
  { label: "Shop", href: "#featured-collection" },
  { label: "Best Sellers", href: "#best-sellers" },
  { label: "About", href: "#brand-story" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#newsletter" },
];

export const heroHighlights = [
  "Dermatologist-conscious formulas",
  "Buildable, skin-loving coverage",
  "Long-wear, soft-focus finish",
];

export const featuredCollections = [
  {
    title: "Soft Glow Essentials",
    subtitle: "A curated edit of everyday luxury for polished, radiant makeup looks.",
    image: "/placeholders/collection-1.svg",
  },
  {
    title: "Statement Lips",
    subtitle: "Velvet textures and luminous color stories for every mood.",
    image: "/placeholders/collection-2.svg",
  },
  {
    title: "Skin-first Base",
    subtitle: "Weightless complexion formulas that refine without masking.",
    image: "/placeholders/collection-3.svg",
  },
];

export const categories = [
  { name: "Lipsticks", accent: "Velvet and satin finishes", image: "/placeholders/category-lipsticks.svg" },
  { name: "Eyeliners", accent: "Sharp definition and smudge resistance", image: "/placeholders/category-eyeliners.svg" },
  { name: "Kajal", accent: "Deep pigment with soft glide", image: "/placeholders/category-kajal.svg" },
  { name: "Foundation", accent: "Breathable coverage for a natural finish", image: "/placeholders/category-foundation.svg" },
  { name: "Compact Powder", accent: "Instant blur with a satin matte veil", image: "/placeholders/category-compact.svg" },
];

export const products: Product[] = [
  {
    id: "luna-lip-01",
    name: "Luna Satin Lipstick",
    description: "A creamy satin lipstick with rich color payoff and a comfortable all-day feel.",
    price: 1299,
    mrp: 1499,
    rating: 4.8,
    reviewCount: 312,
    variants: ["Soft Rose", "Bare Cinnamon", "Petal Nude", "Mulberry Muse"],
    benefits: ["Comfortable satin finish", "Hydrating pigment", "One-swipe color"],
    category: "Lipsticks",
    image: "/placeholders/product-1.svg",
    badge: "Bestseller",
  },
  {
    id: "velour-lip-02",
    name: "Velour Matte Lip Cream",
    description: "A velvet-matte lip cream that stays smooth, plush, and refined through the day.",
    price: 1399,
    mrp: 1599,
    rating: 4.7,
    reviewCount: 268,
    variants: ["Rosewood", "Cocoa Bloom", "Dusty Mauve", "Amber Spice"],
    benefits: ["Weightless matte comfort", "High-impact pigment", "Non-drying finish"],
    category: "Lipsticks",
    image: "/placeholders/product-2.svg",
  },
  {
    id: "silk-line-03",
    name: "Silk Precision Eyeliner",
    description: "A precision liquid liner with a flexible tip for clean, elegant definition.",
    price: 999,
    mrp: 1199,
    rating: 4.9,
    reviewCount: 421,
    variants: ["Black Ink", "Espresso", "Deep Plum"],
    benefits: ["Smudge-resistant wear", "Ultra-fine control", "Fast-dry finish"],
    category: "Eyeliners",
    image: "/placeholders/product-3.svg",
  },
  {
    id: "moon-kajal-04",
    name: "Moon Kajal Intense Kohl",
    description: "Rich kajal with creamy glide, intense payoff, and a soft smoky effect.",
    price: 849,
    mrp: 999,
    rating: 4.8,
    reviewCount: 534,
    variants: ["Midnight Black", "Charcoal Smoke"],
    benefits: ["Deep pigment", "Comfortable glide", "Long-lasting definition"],
    category: "Kajal",
    image: "/placeholders/product-4.svg",
    badge: "Trending",
  },
  {
    id: "veil-foundation-05",
    name: "Veil Skin Foundation",
    description: "A breathable foundation with buildable coverage and a soft luminous finish.",
    price: 1899,
    mrp: 2199,
    rating: 4.7,
    reviewCount: 389,
    variants: ["Warm Beige 02", "Neutral Beige 03", "Golden Sand 04", "Honey Tan 05"],
    benefits: ["Natural second-skin finish", "Buildable medium coverage", "Comfortable all-day wear"],
    category: "Foundation",
    image: "/placeholders/product-5.svg",
  },
  {
    id: "halo-compact-06",
    name: "Halo Blur Compact Powder",
    description: "A silky compact powder that smooths shine and sets makeup with elegance.",
    price: 1199,
    mrp: 1399,
    rating: 4.6,
    reviewCount: 247,
    variants: ["Ivory Glow", "Warm Sand", "Soft Beige"],
    benefits: ["Instant soft-focus blur", "Featherlight feel", "Touch-up friendly"],
    category: "Compact Powder",
    image: "/placeholders/product-6.svg",
  },
  {
    id: "rosy-lip-07",
    name: "Rosy Muse Lipstick",
    description: "A polished pink-nude lipstick with a satin glow designed for everyday luxury.",
    price: 1249,
    mrp: 1449,
    rating: 4.8,
    reviewCount: 214,
    variants: ["Blush Nude", "Rose Cloud", "Soft Coral"],
    benefits: ["Nourishing feel", "Elegant color payoff", "Easy layering"],
    category: "Lipsticks",
    image: "/placeholders/product-1.svg",
  },
  {
    id: "line-ink-08",
    name: "Line & Define Eyeliner Pen",
    description: "A sleek pen liner for crisp wings and controlled everyday eye looks.",
    price: 899,
    mrp: 1099,
    rating: 4.7,
    reviewCount: 198,
    variants: ["Jet Black", "Soft Brown"],
    benefits: ["Easy application", "Precise felt tip", "No-transfer finish"],
    category: "Eyeliners",
    image: "/placeholders/product-3.svg",
  },
  {
    id: "satin-kajal-09",
    name: "Satin Glide Kajal",
    description: "Creamy kajal pencil designed for bold lines and diffused smoky depth.",
    price: 799,
    mrp: 949,
    rating: 4.6,
    reviewCount: 176,
    variants: ["Blackout", "Deep Brown", "Night Slate"],
    benefits: ["Smooth glide", "Versatile lining", "Soft-smudge effect"],
    category: "Kajal",
    image: "/placeholders/product-4.svg",
  },
  {
    id: "luxe-foundation-10",
    name: "Luxe Veil Foundation",
    description: "A satin-matte foundation that refines texture while keeping the complexion fresh.",
    price: 1999,
    mrp: 2299,
    rating: 4.8,
    reviewCount: 442,
    variants: ["Fair Porcelain", "Warm Ivory", "Natural Beige", "Golden Almond"],
    benefits: ["Refined satin-matte finish", "Layerable coverage", "Skin-like comfort"],
    category: "Foundation",
    image: "/placeholders/product-5.svg",
    badge: "Editor Pick",
  },
  {
    id: "soft-set-11",
    name: "Soft Set Compact Powder",
    description: "A compact that reduces shine while preserving a naturally luminous complexion.",
    price: 1099,
    mrp: 1299,
    rating: 4.5,
    reviewCount: 221,
    variants: ["Porcelain", "Sand", "Honey"],
    benefits: ["Quick complexion refresh", "Portable design", "Soft satin finish"],
    category: "Compact Powder",
    image: "/placeholders/product-6.svg",
  },
  {
    id: "velvet-lip-12",
    name: "Velvet Rose Lipstick",
    description: "A richly pigmented rose lipstick that flatters with a modern velvet touch.",
    price: 1349,
    mrp: 1549,
    rating: 4.9,
    reviewCount: 187,
    variants: ["Rose Velvet", "Petal Smoke", "Warm Taupe"],
    benefits: ["High-impact color", "Creamy comfort", "Polished finish"],
    category: "Lipsticks",
    image: "/placeholders/product-2.svg",
  },
  {
    id: "flare-line-13",
    name: "Flare Wing Liner",
    description: "A studio-style eyeliner that creates bold wings and delicate flicks with ease.",
    price: 949,
    mrp: 1149,
    rating: 4.7,
    reviewCount: 152,
    variants: ["Black Flame", "Dark Cocoa"],
    benefits: ["Wing-friendly tip", "Clean definition", "All-day hold"],
    category: "Eyeliners",
    image: "/placeholders/product-3.svg",
  },
  {
    id: "noir-kajal-14",
    name: "Noir Velvet Kajal",
    description: "An intense black kajal with a velvety finish and deep dramatic payoff.",
    price: 899,
    mrp: 1049,
    rating: 4.8,
    reviewCount: 301,
    variants: ["Noir", "Graphite"],
    benefits: ["Dramatic payoff", "Smooth application", "Smudge-ready texture"],
    category: "Kajal",
    image: "/placeholders/product-4.svg",
  },
  {
    id: "cashmere-base-15",
    name: "Cashmere Base Foundation",
    description: "A creamy complexion formula that blurs, balances, and wears like skin.",
    price: 2099,
    mrp: 2399,
    rating: 4.9,
    reviewCount: 516,
    variants: ["Neutral 01", "Warm 02", "Golden 03", "Caramel 04"],
    benefits: ["Soft blur effect", "Natural radiance", "Comfortable full day wear"],
    category: "Foundation",
    image: "/placeholders/product-5.svg",
    badge: "New",
  },
];

export const reviews = [
  {
    name: "Aanya Kapoor",
    role: "Makeup Enthusiast",
    rating: 5,
    quote:
      "DRM Beauty feels like a premium edit without being intimidating. The products and visuals are beautifully curated.",
  },
  {
    name: "Meera Nair",
    role: "Bridal Makeup Artist",
    rating: 5,
    quote:
      "The complexion range reads polished and modern. It is exactly the kind of brand I would recommend to clients.",
  },
  {
    name: "Sara Khan",
    role: "Content Creator",
    rating: 4,
    quote:
      "The premium feel is obvious from the landing experience. It would convert well for a beauty brand launch.",
  },
];

export const instagramPosts = [
  "/placeholders/instagram-1.svg",
  "/placeholders/instagram-2.svg",
  "/placeholders/instagram-3.svg",
  "/placeholders/instagram-4.svg",
  "/placeholders/instagram-5.svg",
  "/placeholders/instagram-6.svg",
];

export const storyStats = [
  { value: "15K+", label: "Happy customers" },
  { value: "4.8/5", label: "Average rating" },
  { value: "48h", label: "Fast dispatch" },
];