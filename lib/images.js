/**
 * Deterministic image selection.
 *
 * Service pages reuse a small library of licensed photography. Picking by a
 * stable hash of the slug keeps each page visually varied while staying
 * identical between server and client renders.
 */
const library = [
  {
    src: "/images/amazon/amazon-analytics-dashboard.webp",
    alt: "Sales and advertising performance dashboard for an online store",
  },
  {
    src: "/images/business/ecommerce-consultation-team.webp",
    alt: "BifidMedia specialists planning an e-commerce engagement",
  },
  {
    src: "/images/contact/business-consultation-workspace.webp",
    alt: "Reviewing marketplace performance in a client working session",
  },
  {
    src: "/images/shopify/shopify-store-development.webp",
    alt: "Designer working on an e-commerce storefront layout",
  },
  {
    src: "/images/walmart/marketplace-management-team.webp",
    alt: "Team reviewing marketplace listings and inventory",
  },
  {
    src: "/images/home/hero-ecommerce-growth.png",
    alt: "Operator monitoring multi-channel e-commerce growth",
  },
];

function hash(seed = "") {
  let value = 0;
  for (let i = 0; i < seed.length; i += 1) {
    value = (value * 31 + seed.charCodeAt(i)) % 100003;
  }
  return value;
}

/**
 * @param {string} seed    stable key, usually a slug
 * @param {string} exclude image src already used on the page
 */
export function pickImage(seed, exclude) {
  const pool = exclude ? library.filter((item) => item.src !== exclude) : library;
  return pool[hash(seed) % pool.length];
}

export default pickImage;
