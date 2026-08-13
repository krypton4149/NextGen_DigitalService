import type { Metadata } from "next";
import { ServicesPageView } from "@/components/services/ServicesPageView";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media management, branding, website creation and event management by Shikohabad Creative Co. — creative agency in Shikohabad.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesPageView />
    </main>
  );
}
