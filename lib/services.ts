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
      "Marketing that stays on — strategy, content calendars, reels, captions and campaigns that keep your brand active and discoverable.",
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
      "Advertising-ready identity — logos, brand systems, promo creatives and visual direction built so every campaign looks like you.",
    tags: ["LOGO", "IDENTITY", "CREATIVE", "ADS"],
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
