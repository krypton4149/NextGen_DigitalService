import type { Metadata } from "next";
import { ContactPageView } from "@/components/contact/ContactPageView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Shikohabad Creative Co. at starkarc22@gmail.com — start a project via message, call, email or WhatsApp.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactPageView />
    </main>
  );
}
