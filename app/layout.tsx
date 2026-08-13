import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Sans_Devanagari, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: true,
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
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
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: {
    default: "Shikohabad Creative Co. | Creative & Digital Agency",
    template: "%s | Shikohabad Creative Co.",
  },
  description:
    "Shikohabad Creative Co. is a creative digital agency helping businesses grow through social media, branding, digital presence, content and events.",
  keywords: [
    "Digital agency in Shikohabad",
    "Creative agency in Shikohabad",
    "Social media agency in Shikohabad",
    "Social media management Shikohabad",
    "Branding agency Shikohabad",
    "Event management Shikohabad",
    "Digital marketing Shikohabad",
  ],
  openGraph: {
    title: "Shikohabad Creative Co. | Creative & Digital Agency",
    description:
      "Local roots. Creative reach. Social media, branding, digital presence, content and events from Shikohabad, Uttar Pradesh.",
    type: "website",
    locale: "en_IN",
    siteName: "Shikohabad Creative Co.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shikohabad Creative Co.",
    description:
      "Creative & digital agency in Shikohabad — social, branding, content and events.",
  },
  icons: {
    icon: [
      { url: "/images/favicon.png?v=2", type: "image/png" },
      { url: "/favicon.png?v=2", type: "image/png" },
    ],
    shortcut: "/images/favicon.png?v=2",
    apple: [{ url: "/apple-icon.png?v=2", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${hindi.variable}`}>
      <body className="min-h-screen overflow-x-clip bg-background font-sans text-foreground antialiased">
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
