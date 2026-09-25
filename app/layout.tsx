import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Noto_Sans_Devanagari } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: true,
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: true,
});

const hindi = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-hindi",
  display: "swap",
  weight: ["600", "700"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0B132B",
  interactiveWidget: "resizes-content",
};

export const metadata: Metadata = {
  title: {
    default: "Shikohabad Creative Co. | Marketing, Advertising & Events",
    template: "%s | Shikohabad Creative Co.",
  },
  description:
    "Marketing agency, advertising studio and event management company in Shikohabad — social, branding, campaigns, websites and on-ground events.",
  keywords: [
    "Marketing agency Shikohabad",
    "Advertising agency Shikohabad",
    "Event management Shikohabad",
    "Digital marketing Shikohabad",
    "Social media agency Shikohabad",
    "Branding agency Shikohabad",
    "Creative agency Shikohabad",
  ],
  openGraph: {
    title: "Shikohabad Creative Co. | Marketing, Advertising & Events",
    description:
      "Three crafts. One studio. Marketing, advertising and event management from Shikohabad, Uttar Pradesh.",
    type: "website",
    locale: "en_IN",
    siteName: "Shikohabad Creative Co.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shikohabad Creative Co.",
    description:
      "Marketing, advertising and events — one creative studio in Shikohabad.",
  },
  icons: {
    icon: [
      { url: "/images/favicon.png?v=5", type: "image/png" },
      { url: "/favicon.png?v=5", type: "image/png" },
    ],
    shortcut: "/images/favicon.png?v=5",
    apple: [{ url: "/apple-icon.png?v=5", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${hindi.variable}`}>
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
