export type HomeService = {
  num: string;
  title: string;
  summary: string;
  href: string;
  icon:
    | "palette"
    | "code"
    | "phone"
    | "video"
    | "zap"
    | "share"
    | "search"
    | "users"
    | "pen"
    | "layers"
    | "megaphone"
    | "sparkles"
    | "target"
    | "calendar";
  iconClass: string;
};

export const HOME_SERVICES: HomeService[] = [
  {
    num: "01",
    title: "Branding",
    summary:
      "Building distinctive brand identities that resonate and endure in a crowded market.",
    href: "/services",
    icon: "palette",
    iconClass: "bg-[#DFF3EC] text-navy",
  },
  {
    num: "02",
    title: "Website Development",
    summary:
      "High-performance, responsive websites built with modern frameworks for speed and scale.",
    href: "/services",
    icon: "code",
    iconClass: "bg-[#DCEBFA] text-navy",
  },
  {
    num: "03",
    title: "App Development",
    summary:
      "Intuitive mobile and web experiences designed to solve complex problems simply.",
    href: "/services",
    icon: "phone",
    iconClass: "bg-[#E6DFF6] text-navy",
  },
  {
    num: "04",
    title: "Video Editing",
    summary:
      "Professional cinematic editing that tells your story and captures your audience’s focus.",
    href: "/services",
    icon: "video",
    iconClass: "bg-[#F8D9D4] text-navy",
  },
  {
    num: "05",
    title: "Digital Marketing",
    summary:
      "Data-driven performance marketing focused on high ROI and sustainable growth.",
    href: "/services",
    icon: "zap",
    iconClass: "bg-[#DFF5D8] text-navy",
  },
  {
    num: "06",
    title: "Social Media Marketing & Management",
    summary:
      "Strategic management and growth of your voice across all major social platforms.",
    href: "/services",
    icon: "share",
    iconClass: "bg-[#F8EFC2] text-navy",
  },
  {
    num: "07",
    title: "SEO",
    summary:
      "Advanced optimization strategies to dominate search results and drive organic traffic.",
    href: "/services",
    icon: "search",
    iconClass: "bg-[#D4F1F4] text-navy",
  },
  {
    num: "08",
    title: "UGC",
    summary:
      "Authentic user-generated content that builds community trust and drives conversions.",
    href: "/services",
    icon: "users",
    iconClass: "bg-[#F3E4D8] text-navy",
  },
  {
    num: "09",
    title: "Content Creation",
    summary:
      "Creative storytelling through high-impact visuals and compelling written narrative.",
    href: "/services",
    icon: "pen",
    iconClass: "bg-[#E8EEF8] text-navy",
  },
  {
    num: "10",
    title: "Graphic Design",
    summary:
      "Stunning visual assets that elevate your brand communication across every touchpoint.",
    href: "/services",
    icon: "layers",
    iconClass: "bg-[#FDECEA] text-navy",
  },
  {
    num: "11",
    title: "Public Relations",
    summary:
      "Clear, credible brand stories that get you noticed by the right people at the right time.",
    href: "/services",
    icon: "megaphone",
    iconClass: "bg-[#F8D9D4] text-navy",
  },
  {
    num: "12",
    title: "UI/UX Design",
    summary:
      "Interfaces designed to feel simple, look premium, and guide people to act.",
    href: "/services",
    icon: "sparkles",
    iconClass: "bg-[#E6DFF6] text-navy",
  },
  {
    num: "13",
    title: "Meta Ads",
    summary:
      "Targeted Facebook and Instagram campaigns built to reach local audiences and convert.",
    href: "/services",
    icon: "target",
    iconClass: "bg-[#DCEBFA] text-navy",
  },
  {
    num: "14",
    title: "Event Management",
    summary:
      "From concept and promotion to on-ground execution — events people remember.",
    href: "/services",
    icon: "calendar",
    iconClass: "bg-[#DFF3EC] text-navy",
  },
];
