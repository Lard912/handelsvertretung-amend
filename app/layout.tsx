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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-[100lvh] bg-[#f5f5f3] text-slate-900`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <ScrollToTop />

        <div className="flex min-h-[100lvh] flex-col">
          <HeaderTemp />
          <main className="flex-1">{children}</main>
          <FooterTemp />
          <CookieBar />
        </div>
      </body>
    </html>
  );
}