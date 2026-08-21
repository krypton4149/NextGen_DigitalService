import type { Metadata } from "next";
import { WorkPageView } from "@/components/portfolio/WorkPageView";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Shikohabad Creative Co. — Maa Jaanki Hotel & Restaurant, Muskan Makeup, TWS Beauty Salon, Styles & Stitch by Richa Agrawal, Om Sai Traders, Lotus Light.",
};

export default function WorkIndexPage() {
  return (
    <main>
      <WorkPageView />
    </main>
  );
}
