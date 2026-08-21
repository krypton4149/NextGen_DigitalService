export type CoreService = {
  num: string;
  slug: string;
  titleLines: string[];
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  variation: "default" | "offset" | "compact" | "wide";
};

export const CORE_SERVICES: CoreService[] = [
  {
    num: "01",
    slug: "social-media-management",
    title: "Social Media Management",
    titleLines: ["SOCIAL", "MEDIA", "MANAGEMENT"],
    description:
      "We manage your social presence from strategy to execution — content planning, creative posts, reels, captions, campaigns and consistent brand communication.",
    tags: ["CONTENT", "REELS", "STRATEGY", "GROWTH"],
    image: "/images/Social.png",
    href: "/contact",
    variation: "default",
  },
  {
    num: "02",
    slug: "branding",
    title: "Branding",
    titleLines: ["BRANDING"],
    description:
      "We build visual identities that make businesses recognizable — from logos and brand direction to social creatives, promotional designs and complete visual systems.",
    tags: ["LOGO", "IDENTITY", "CREATIVE", "DESIGN"],
    image: "/images/Brand.png",
    href: "/contact",
    variation: "offset",
  },
  {
    num: "03",
    slug: "website-creation",
    title: "Website Creation",
    titleLines: ["WEBSITE", "CREATION"],
    description:
      "We create modern, responsive websites designed to represent your brand professionally and turn visitors into customers.",
    tags: ["UI/UX", "WEBSITE", "RESPONSIVE", "DIGITAL"],
    image: "/images/Website.png",
    href: "/contact",
    variation: "wide",
  },
  {
    num: "04",
    slug: "event-management",
    title: "Event Management",
    titleLines: ["EVENT", "MANAGEMENT"],
    description:
      "From concept and promotion to on-ground execution, we create and manage events that people remember.",
    tags: ["PLANNING", "PROMOTION", "EXECUTION", "EXPERIENCE"],
    image: "/images/Event.png",
    href: "/events",
    variation: "compact",
  },
];
