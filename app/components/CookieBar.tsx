"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookie-consent");
    if (!saved) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-[9999] px-4">
      <div className="mx-auto max-w-[1400px] rounded-[28px] border border-slate-200 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#145da0]">
              Cookies
            </p>

            <h2
              className="mt-2 text-2xl font-semibold text-slate-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Diese Website verwendet Cookies
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Ich verwende Cookies, um die Website technisch bereitzustellen und
              die Nutzung zu verbessern. Sie können alle Cookies akzeptieren oder
              sich auf die notwendigen Cookies beschränken. Weitere Informationen
              finden Sie in der{" "}
              <Link
                href="/datenschutz"
                className="font-semibold text-[#145da0] hover:underline"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={acceptNecessary}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              Nur notwendige
            </button>

            <button
              type="button"
              onClick={acceptAll}
              className="rounded-2xl bg-[#145da0] px-5 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#0f4c86] hover:shadow-xl"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}