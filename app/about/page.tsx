import type { Metadata } from "next";
import { AboutPageView } from "@/components/about/AboutPageView";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Shikohabad Creative Co. — a creative studio in Shikohabad, Uttar Pradesh. Local roots. Creative reach. Social media, branding, websites and events.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutPageView />
    </main>
  );
}
