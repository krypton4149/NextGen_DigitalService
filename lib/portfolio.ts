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
  /** Optional brand mark for logo walls / circular marks */
  logo?: string;
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
    image: "/images/Jaanki.png",
    logo: "/images/maa-jaanki-logo.png",
    layout: "full",
  },
  {
    id: "02",
    slug: "mbm-makeover-by-muskan",
    num: "02",
    name: "Muskan Makeup",
    industry: "Beauty · Makeup",
    categoryLabel: "Beauty • Makeup • Social Media • Digital Presence • Content",
    filters: ["SOCIAL", "DIGITAL", "CONTENT"],
    services: [
      "Social Media",
      "Digital Presence",
      "Content",
      "Creative Direction",
    ],
    headline: "SOCIAL MEDIA &\nDIGITAL PRESENCE\nFOR MUSKAN MAKEUP.",
    approach:
      "We manage Muskan Makeup's social media and digital presence — content, creatives and daily posting that match the studio: beauty, makeup and a look people remember.",
    image: "/images/mbm.png",
    logo: "/images/logo3.png",
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
    image: "/images/tws.png",
    logo: "/images/log2.png",
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
    image: "/images/Stich.png",
    logo: "/images/logo.png",
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
    image: "/images/omsai.png",
    logo: "/images/om.png",
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
    image: "/images/Light.png",
    logo: "/images/lotus.png",
    layout: "campaign",
  },
  {
    id: "07",
    slug: "gacs-gupta-associate-consultancy-service",
    num: "07",
    name: "GACS Gupta Associate",
    industry: "Consultancy · Business",
    categoryLabel:
      "Consultancy • Business • Branding • Digital Presence • Social Media",
    filters: ["BRANDING", "DIGITAL", "SOCIAL"],
    services: [
      "Branding",
      "Digital Presence",
      "Social Media",
      "Creative Direction",
    ],
    headline: "CONSULTING THAT\nLOOKS CREDIBLE.",
    approach:
      "Gupta Associate Consultancy Service needed a presence that matches the seriousness of the work — clear branding and digital touchpoints that feel professional, global and trustworthy.",
    image: "/images/gacs.png",
    layout: "split",
  },
  {
    id: "08",
    slug: "eventz-n-beyond",
    num: "08",
    name: "Eventz n Beyond",
    industry: "Events · Experiences",
    categoryLabel: "Events • Experiences • Branding • Social Media • Promotions",
    filters: ["EVENTS", "BRANDING", "SOCIAL", "CONTENT"],
    services: [
      "Event Branding",
      "Social Media",
      "Promotional Creatives",
      "Creative Direction",
    ],
    headline: "EVENTS THAT GO\nBEYOND THE NIGHT.",
    approach:
      "Eventz n Beyond is built for moments people remember. We shaped brand and promotional creatives that carry the energy of the event — before, during and after the night.",
    image: "/images/eventz-n-beyond.png",
    layout: "campaign",
  },
  {
    id: "09",
    slug: "airsupra",
    num: "09",
    name: "Airsupra",
    industry: "Perfume · Fragrance",
    categoryLabel:
      "Perfume • Fragrance • Branding • Packaging • Creative Direction",
    filters: ["BRANDING", "PACKAGING", "CONTENT"],
    services: [
      "Branding",
      "Packaging Design",
      "Creative Direction",
      "Product Identity",
    ],
    headline: "A FRAGRANCE\nTHAT LOOKS\nAS GOOD AS IT FEELS.",
    approach:
      "Airsupra is a perfume brand built on presence. We shaped the branding and packaging — so the bottle, the box and the story feel as considered as the scent itself.",
    image: "/images/air.jpeg",
    logo: "/images/air.jpeg",
    layout: "product",
  },
];

export function getProjectBySlug(slug: string) {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}

export function projectLogo(project: PortfolioProject) {
  return project.logo ?? project.image;
}

/** Fit class for circular brand marks — some assets need zoom in, others zoom out. */
export function logoFitClass(src: string, opts?: { hover?: boolean }) {
  const hover = opts?.hover;
  if (src.includes("gacs")) {
    return hover
      ? "scale-[0.88] object-contain p-1.5 transition duration-500 group-hover:scale-[0.92]"
      : "scale-[0.88] object-contain p-1.5";
  }
  if (src.includes("maa-jaanki")) {
    return hover
      ? "scale-[1.08] object-contain p-0.5 transition duration-500 group-hover:scale-[1.12]"
      : "scale-[1.08] object-contain p-0.5";
  }
  if (src.includes("logo.png") || src.endsWith("/logo.png")) {
    return hover
      ? "scale-[1.22] object-contain p-0.5 transition duration-500 group-hover:scale-[1.28]"
      : "scale-[1.22] object-contain p-0.5";
  }
  if (src.includes("air.jpeg") || src.includes("/air.")) {
    return hover
      ? "scale-[0.92] object-contain p-1.5 transition duration-500 group-hover:scale-[0.96]"
      : "scale-[0.92] object-contain p-1.5";
  }
  if (
    src.includes("logo3") ||
    src.includes("log2") ||
    src.includes("eventz") ||
    src.includes("airsupra") ||
    src.includes("/om.png") ||
    src.endsWith("om.png") ||
    src.includes("lotus.png")
  ) {
    return hover
      ? "scale-[1.05] object-contain p-0.5 transition duration-500 group-hover:scale-[1.1]"
      : "scale-[1.05] object-contain p-0.5";
  }
  return hover
    ? "scale-[1.12] object-contain p-0.5 transition duration-500 group-hover:scale-[1.18]"
    : "scale-[1.12] object-contain p-0.5";
}

export function isFramedProject(project: PortfolioProject) {
  return project.image.endsWith(".png");
}

export function isLogoMark(src: string) {
  return /\.(png|jpe?g|webp)$/i.test(src);
}
