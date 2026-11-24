/**
 * Category registry — single source of truth for the six trade categories.
 * `slug` drives the /products/:slug route; `image` lives in /public/images.
 */
export const CATEGORIES = [
  {
    slug: 'fresh-produce',
    name: 'Fresh Produce',
    label: 'Fresh Products',
    icon: 'Carrot',
    image: '/images/fresh-produce.png',
    tagline: 'Farm-fresh bulk vegetables from trusted sources.',
    description: 'Farm-fresh vegetables sourced directly from trusted local growers.',
    accent: 'leaf',
  },
  {
    slug: 'spices',
    name: 'Spices & Plantation Crops',
    label: 'Premium Spices',
    icon: 'Flame',
    image: '/images/spices.png',
    tagline: 'Premium spices and plantation products.',
    description: 'Premium-grade spices and plantation crops for domestic and global markets.',
    accent: 'coral',
  },
  {
    slug: 'fruits',
    name: 'Fruits',
    label: 'Fresh & Dry Fruits',
    icon: 'Apple',
    image: '/images/fruits.png',
    tagline: 'Quality fruits for domestic and global trade.',
    description: 'Carefully selected fruits with quality grading and export-ready packaging.',
    accent: 'amber',
  },
  {
    slug: 'processed',
    name: 'Processed & Value-Added',
    label: 'Value-Added Goods',
    icon: 'Package',
    image: '/images/processed.png',
    tagline: 'Ready-to-trade processed and specialty products.',
    description: 'High-demand processed products with consistent quality and scalable supply.',
    accent: 'brand',
  },
  {
    slug: 'industrial',
    name: 'Industrial & Commercial',
    label: 'Industrial Supply',
    icon: 'Factory',
    image: '/images/industrial.png',
    tagline: 'Bulk industrial and commercial supply solutions.',
    description: 'Reliable sourcing of industrial and commercial goods at bulk scale.',
    accent: 'ocean',
  },
  {
    slug: 'granite-tiles',
    name: 'Granite & Tiles',
    label: 'Stone & Surfaces',
    icon: 'Gem',
    image: '/images/granite.png',
    tagline: 'Premium natural stone and ceramic surfaces.',
    description: 'Natural granite, marble and high-quality ceramic tiles for industrial and residential projects.',
    accent: 'amber',
  },
];

export const getCategory = (slug) => CATEGORIES.find((c) => c.slug === slug);