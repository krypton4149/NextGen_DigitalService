export type PortfolioFilter =
  | "ALL"
  | "SOCIAL"
  | "BRANDING"
  | "CONTENT"
  | "PACKAGING"
  | "EVENTS"
  | "DIGITAL";

export type ProjectLayout =
  | "full"
  | "split"
  | "tall"
  | "offset"
  | "product"
  | "campaign";

export type PortfolioProject = {
  id: string;
  slug: string;
  num: string;
  name: string;
  industry: string;
  categoryLabel: string;
  filters: Exclude<PortfolioFilter, "ALL">[];
  services: string[];
  headline: string;
  approach: string;
  image: string;
  layout: ProjectLayout;
};

export const PORTFOLIO_FILTERS: PortfolioFilter[] = [
  "ALL",
  "SOCIAL",
  "BRANDING",
  "CONTENT",
  "PACKAGING",
  "EVENTS",
  "DIGITAL",
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "01",
    slug: "maa-jaanki-hotel-restaurant",
    num: "01",
    name: "Maa Jaanki Hotel & Restaurant",
    industry: "Hospitality · Restaurant",
    categoryLabel: "Hospitality • Restaurant • Social Media • Branding • Digital Presence",
    filters: ["SOCIAL", "BRANDING", "DIGITAL", "CONTENT"],
    services: [
      "Social Media",
      "Branding",
      "Digital Presence",
      "Promotional Creatives",
    ],
    headline: "MAKING LOCAL HOSPITALITY\nLOOK AS GOOD AS IT TASTES.",
    approach:
      "We shaped a warmer digital presence for a local hospitality brand — social storytelling, brand visuals and online touchpoints that feel as inviting as the dining room.",
    image: "/images/client-maa-jaanki.jpg",
    layout: "full",
  },
  {
    id: "02",
    slug: "mbm-makeover-by-muskan",
    num: "02",
    name: "MBM Makeover by Muskan",
    industry: "Beauty · Makeup",
    categoryLabel: "Beauty • Makeup • Social Media • Creative Content",
    filters: ["SOCIAL", "CONTENT", "BRANDING"],
    services: [
      "Social Media",
      "Creative Content",
      "Promotional Creatives",
      "Visual Direction",
    ],
    headline: "BEAUTY DESERVES\nA BEAUTIFUL DIGITAL PRESENCE.",
    approach:
      "For a makeup brand built on transformation, we focused on scroll-stopping social creatives and a visual language that feels luxurious, personal and shareable.",
    image: "/images/client-mbm.jpg",
    layout: "split",
  },
  {
    id: "03",
    slug: "tws-beauty-salon",
    num: "03",
    name: "TWS Beauty Salon",
    industry: "Beauty · Salon",
    categoryLabel: "Beauty • Salon • Branding • Social Media • Promotions",
    filters: ["BRANDING", "SOCIAL", "CONTENT"],
    services: [
      "Branding",
      "Social Media",
      "Promotions",
      "Creative Content",
    ],
    headline: "TURNING BEAUTY\nINTO ATTENTION.",
    approach:
      "Salon services need presence. We built promotional and social systems that turn everyday beauty offerings into clear, confident attention online.",
    image: "/images/client-tws.jpg",
    layout: "tall",
  },
  {
    id: "04",
    slug: "styles-stitch-by-richa-agrawal",
    num: "04",
    name: "Styles & Stitch by Richa Agrawal",
    industry: "Fashion · Boutique",
    categoryLabel: "Fashion • Boutique • Branding • Social Media • Creative Content",
    filters: ["BRANDING", "SOCIAL", "CONTENT"],
    services: [
      "Branding",
      "Social Media",
      "Creative Content",
      "Promotional Design",
    ],
    headline: "STYLE SHOULD NEVER\nBLEND IN.",
    approach:
      "A boutique brand needs distinction. We crafted fashion-forward branding and social content so Styles & Stitch stands apart — not beside — the feed.",
    image: "/images/client-styles-stitch.jpg",
    layout: "offset",
  },
  {
    id: "05",
    slug: "om-sai-traders",
    num: "05",
    name: "Om Sai Traders",
    industry: "Product · Packaging",
    categoryLabel: "Product • Packaging • Branding • Social Media • Digital Presence",
    filters: ["PACKAGING", "BRANDING", "SOCIAL", "DIGITAL"],
    services: [
      "Packaging",
      "Product Branding",
      "Social Media",
      "Digital Presence",
    ],
    headline: "FROM PRODUCT\nTO BRAND.",
    approach:
      "We helped move Om Sai Traders from product-only thinking to brand thinking — packaging direction, product presence and digital creatives that sell the story as well as the goods.",
    image: "/images/client-om-sai.jpg",
    layout: "product",
  },
  {
    id: "06",
    slug: "lotus-light",
    num: "06",
    name: "Lotus Light",
    industry: "Lighting · Product",
    categoryLabel: "Lighting • Product • Promotions • Social Media • Digital Presence",
    filters: ["DIGITAL", "SOCIAL", "BRANDING", "CONTENT"],
    services: [
      "Product Promotions",
      "Social Media",
      "Digital Presence",
      "Campaign Creatives",
    ],
    headline: "MAKING PRODUCTS\nSHINE ONLINE.",
    approach:
      "Lighting products need clarity and spark. We developed promotional and digital creatives that present Lotus Light with modern product energy.",
    image: "/images/client-lotus-light.jpg",
    layout: "campaign",
  },
];

export function getProjectBySlug(slug: string) {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}
