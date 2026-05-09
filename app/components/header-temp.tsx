"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Startseite" },
    { href: "/ueber-mich", label: "Über mich" },
    { href: "/vertretungen", label: "Vertretungen" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const normalizePath = (path: string) => {
  if (path === "/") return "/";
  return path.replace(/\/$/, "");
};

const currentPath = normalizePath(pathname);

const isActive = (href: string) => currentPath === normalizePath(href);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#145da0] shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1650px] items-center justify-between px-4 py-0 min-[600px]:px-6 md:h-auto md:py-4">
          <Link href="/" className="group flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Handelsvertretung Amend"
              className="h-12 w-auto transition duration-300 group-hover:scale-105 sm:h-14 md:h-16"
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
              className={`ml-2 inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl ${
                isActive("/kontakt")
                  ? "bg-white text-[#145da0]"
                  : "bg-white text-[#145da0]"
              }`}
            >
              Kontakt
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/15 min-[1000px]:hidden"
            aria-label="Menü öffnen"
          >
            ☰
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] min-[1000px]:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-slate-950/35 transition duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

<div
  className={`absolute right-0 top-0 flex h-full w-full flex-col bg-[#145da0] shadow-[-20px_0_60px_rgba(15,23,42,0.22)] transition duration-300 ease-out min-[600px]:w-[88vw] min-[600px]:max-w-[360px] ${
    mobileOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
<div className="flex h-20 items-center justify-between border-b border-white/10 px-4 min-[600px]:px-5">
  <div
    className="pl-1 text-2xl font-semibold leading-none text-white"
    style={{ fontFamily: "var(--font-playfair)" }}
  >
    Menü
  </div>

  <button
    onClick={() => setMobileOpen(false)}
    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/15"
    aria-label="Menü schließen"
  >
    ✕
  </button>
</div>

          <nav className="flex flex-1 flex-col gap-2 px-5 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-2xl px-4 py-3.5 text-sm font-semibold transition ${
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
      </div>
    </>
  );
}