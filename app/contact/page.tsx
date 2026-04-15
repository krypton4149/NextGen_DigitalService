import type { Metadata } from "next";
import { ContactPageView } from "@/components/contact/ContactPageView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NextGen Digital Service — send a message, call, email, or reach us on WhatsApp.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactPageView />
    </main>
  );
}
