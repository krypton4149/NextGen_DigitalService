import type { Metadata } from "next";
import { PricingPageView } from "@/components/pricing/PricingPageView";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One-time pricing for NextGen Digital Service — Basic, Standard, and Premium packages for Indian businesses.",
};

export default function PricingPage() {
  return (
    <main>
      <PricingPageView />
    </main>
  );
}
