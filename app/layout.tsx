import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0052cc",
};

export const metadata: Metadata = {
  title: {
    default: "NextGen Digital Service",
    template: "%s | NextGen Digital Service",
  },
  description:
    "NextGen Digital Service — complete digital solutions for your business. We transform your physical presence into a digital powerhouse.",
  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    apple: [{ url: "/images/logo.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen overflow-x-clip font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
