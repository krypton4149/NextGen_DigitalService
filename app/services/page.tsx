import type { Metadata } from "next";
import { ServicesPageView } from "@/components/services/ServicesPageView";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media, branding, websites, ads, content and events by Shikohabad Creative Co. — full digital services from Shikohabad.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesPageView />
    </main>
  );
}
