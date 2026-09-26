import type { Metadata } from "next";
import { AboutPageView } from "@/components/about/AboutPageView";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "About Shikohabad Creative Co. — marketing, advertising and event management studio in Shikohabad. Local roots. Creative reach.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutPageView />
    </main>
  );
}
