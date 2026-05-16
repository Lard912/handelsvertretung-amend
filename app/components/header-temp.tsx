"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const navItems = [
    { href: "/", label: "Startseite" },
    { href: "/ueber-mich", label: "Über mich" },
    { href: "/vertretungen", label: "Vertretungen" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const color = showHeader || mobileOpen ? "#145da0" : "#f5f5f3";

    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]'
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }

    meta.content = color;
  }, [showHeader, mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (mobileOpen) {
        setShowHeader(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY < 20) {
        setShowHeader(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 90) {
        setShowHeader(false);
      }

      if (currentScrollY < lastScrollY.current) {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileOpen]);

  const normalizePath = (path: string) => {
    if (path === "/") return "/";
    return path.replace(/\/$/, "");
  };

  const currentPath = normalizePath(pathname);
  const isActive = (href: string) => currentPath === normalizePath(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-[#145da0] shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-transform duration-500 ease-in-out min-[600px]:translate-y-0 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1650px] items-center justify-between px-4 py-0 min-[600px]:px-6 md:h-24 md:py-0">
        <Link
          href="/"
          className="group flex items-center gap-4 pl-1 min-[600px]:pl-0"
        >
          <img
            src="/logo.png"
            alt="Handelsvertretung Amend"
            className="h-14 w-auto transition duration-300 group-hover:scale-105 min-[600px]:h-12 sm:h-14 md:h-16"
          />

          <div className="hidden leading-none md:block">
            <div
              className="-mt-1 text-2xl font-semibold text-white min-[1000px]:text-[2.1rem]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Handelsvertretung Amend
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 min-[1000px]:flex">
          {navItems.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition duration-300 ${
                isActive(item.href)
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/kontakt"
            className="ml-2 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#145da0] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Kontakt
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="group relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition duration-300 hover:bg-white/15 active:scale-90 min-[1000px]:hidden"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`absolute h-0.5 w-4 rounded-full bg-white transition duration-300 ease-out ${
              mobileOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-4 rounded-full bg-white transition duration-300 ease-out ${
              mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-4 rounded-full bg-white transition duration-300 ease-out ${
              mobileOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <div
        className={`absolute left-0 right-0 top-full overflow-hidden border-t border-white/10 bg-[#145da0] shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-[max-height,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] min-[1000px]:hidden ${
          mobileOpen
            ? "max-h-[360px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-[1650px] flex-col gap-2 px-5 py-5 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] min-[600px]:px-6 ${
            mobileOpen
              ? "translate-y-0 opacity-100 delay-75"
              : "-translate-y-2 opacity-0"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`rounded-2xl px-3 py-2 text-[13px] font-semibold transition duration-300 md:text-sm ${
                isActive(item.href)
                  ? item.href === "/kontakt"
                    ? "bg-white text-[#145da0]"
                    : "bg-white/15 text-white"
                  : item.href === "/kontakt"
                  ? "mt-2 bg-white text-[#145da0] shadow-lg"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}