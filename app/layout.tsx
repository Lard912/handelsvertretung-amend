import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CookieBar from "./components/CookieBar";

import HeaderTemp from "./components/header-temp";
import FooterTemp from "./components/footer-temp";
import ScrollToTop from "./ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Handelsvertretung Amend",
  description: "Handelsvertretung für Souvenirartikel",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f5f5f3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-[100svh] bg-[#f5f5f3] text-slate-900 antialiased">
        <ScrollToTop />

        <div className="flex min-h-[100svh] flex-col bg-transparent">
          <HeaderTemp />
          <main className="flex-1 bg-transparent">{children}</main>
          <FooterTemp />
          <CookieBar />
        </div>
      </body>
    </html>
  );
}