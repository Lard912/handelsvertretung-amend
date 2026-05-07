"use client";

import React, { useEffect, useState } from "react";

const contactData = {
  name: "Matthias Amend",
  company: "Handelsvertretung Amend",
  phone: "+49 175 2063210",
  email: "info@handelsvertretung-amend.de",
  addressLine1: "Wilhelm-Herz-Straße 105",
  addressLine2: "68766 Hockenheim",
  region: "Süd- und Westdeutschland",
};

function buildVCard() {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${contactData.name}`,
    `ORG:${contactData.company}`,
    `TEL;TYPE=CELL:${contactData.phone}`,
    `EMAIL;TYPE=INTERNET:${contactData.email}`,
    `ADR;TYPE=WORK:;;${contactData.addressLine1};${contactData.addressLine2};;;Deutschland`,
    "END:VCARD",
  ].join("\n");
}

function downloadVCard() {
  const blob = new Blob([buildVCard()], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "kontakt-matthias-amend.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function KontaktPage() {
  const [qrModalOpen, setQrModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.12 }
    );

    const nodes = document.querySelectorAll(".reveal");
    nodes.forEach((node) => observer.observe(node));

    return () => {
      nodes.forEach((node) => observer.unobserve(node));
    };
  }, []);

  useEffect(() => {
    if (!qrModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setQrModalOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [qrModalOpen]);

  return (
    <main className="min-h-screen bg-[#f6f7fb] text-slate-900 selection:bg-[#145da0] selection:text-white">
      <section className="relative isolate flex min-h-[calc(100vh-80px)] items-start overflow-hidden bg-[#0d3b66] px-6 pb-24 pt-28 text-white sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(125,211,252,0.18),transparent_24%),linear-gradient(135deg,#0d3b66_0%,#145da0_55%,#1c7ed6_100%)]" />
        <div className="absolute -left-10 top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl floating" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl floating-delayed" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-sky-200/10 blur-3xl floating-slow" />

        <div className="relative mx-auto grid w-full max-w-[1600px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="max-w-4xl">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur">
              Kontakt
            </p>

            <h1
              className="mt-6 text-5xl font-semibold leading-[0.98] tracking-tight !text-white sm:text-6xl xl:text-7xl"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Nehmen Sie
              <br />
              Kontakt auf.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Ich freue mich über Ihre Anfrage und ein erstes persönliches
              Gespräch. Ob Sortiment, Zusammenarbeit oder allgemeine Fragen –
              schreiben Sie mir gerne direkt.
            </p>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                { value: "Direkt", label: "Persönlicher Kontakt" },
                { value: "Schnell", label: "Kurze Wege" },
                { value: "Süd & West", label: "Fokusregionen" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="glass-card rounded-3xl px-5 py-4"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div
  className="text-3xl font-semibold leading-tight text-white"
  style={{ fontFamily: "var(--font-playfair)" }}
>
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-white/70">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative ml-auto w-full max-w-2xl">
              <div className="absolute inset-0 rounded-[38px] bg-white/10 blur-2xl" />
              <div className="relative rounded-[38px] border border-white/15 bg-white/10 p-5 shadow-[0_24px_70px_rgba(20,93,160,0.22)] backdrop-blur-xl">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-200/20 blur-2xl floating-slow" />

                <div className="rounded-[30px] bg-white/95 p-8 text-slate-900 sm:p-10">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-[#145da0]">
                        Direktkontakt
                      </p>
                      <h2
                        className="mt-2 text-3xl font-semibold"
                        style={{ fontFamily: "var(--font-playfair, serif)" }}
                      >
                        Schnell erreichbar
                      </h2>
                    </div>
                    <div className="rounded-2xl bg-[#145da0]/10 px-3 py-2 text-sm font-semibold text-[#145da0]">
                      Persönlich
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <a
                      href={`tel:${contactData.phone.replace(/\s+/g, "")}`}
                      className="feature-card group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:border-[#145da0]/30 hover:shadow-lg"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0]">
                        Telefon
                      </div>
                      <div className="mt-3 text-lg font-semibold text-slate-900 transition group-hover:text-[#145da0]">
                        {contactData.phone}
                      </div>
                      <div className="mt-2 text-sm text-slate-500">
                        Direkt anrufen
                      </div>
                    </a>

                    <a
                      href={`mailto:${contactData.email}`}
                      className="feature-card group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:border-[#145da0]/30 hover:shadow-lg"
                      style={{ animationDelay: "120ms" }}
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0]">
                        E-Mail
                      </div>
                      <div className="mt-3 break-all text-lg font-semibold text-slate-900 transition group-hover:text-[#145da0]">
                        {contactData.email}
                      </div>
                      <div className="mt-2 text-sm text-slate-500">
                        Nachricht senden
                      </div>
                    </a>

                    <div
                      className="feature-card rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm sm:col-span-2 transition duration-300 hover:border-[#145da0]/20 hover:bg-white hover:shadow-md"
                      style={{ animationDelay: "240ms" }}
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0]">
                        Einsatzgebiet
                      </div>
                      <div className="mt-3 text-lg font-semibold text-slate-900">
                        {contactData.region}
                      </div>
                      <div className="mt-2 text-sm text-slate-500">
                        Persönliche Betreuung vor Ort und direkter Austausch
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f6f7fb] px-6 py-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid items-stretch gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="h-full">
              <div className="flex h-full flex-col rounded-[34px] border border-white/70 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#145da0]">
                  Kontaktdaten
                </p>

                <h2
                  className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  So erreichen Sie mich
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Von Montag bis Freitag von 8:00–18:00 Uhr verfügbar
                </p>

                <div className="mt-10 space-y-6">
                  <div className="feature-card rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-5 transition duration-300 hover:border-[#145da0]/20 hover:bg-white hover:shadow-md">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0] md:min-w-[140px]">
                        Name
                      </div>
                      <div className="text-left text-xl font-semibold text-slate-900 md:flex-1 md:text-right">
                        {contactData.name}
                      </div>
                    </div>
                  </div>

                  <div
                    className="feature-card rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-5 transition duration-300 hover:border-[#145da0]/20 hover:bg-white hover:shadow-md"
                    style={{ animationDelay: "100ms" }}
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0] md:min-w-[140px]">
                        Firma
                      </div>
                      <div className="text-left text-xl font-semibold text-slate-900 md:flex-1 md:text-right">
                        {contactData.company}
                      </div>
                    </div>
                  </div>

                  <div
                    className="feature-card rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-5 transition duration-300 hover:border-[#145da0]/20 hover:bg-white hover:shadow-md"
                    style={{ animationDelay: "200ms" }}
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0] md:min-w-[140px]">
                        Telefon
                      </div>
                      <a
                        href={`tel:${contactData.phone.replace(/\s+/g, "")}`}
                        className="text-left text-xl font-semibold text-slate-900 transition hover:text-[#145da0] md:flex-1 md:text-right"
                      >
                        {contactData.phone}
                      </a>
                    </div>
                  </div>

                  <div
                    className="feature-card rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-5 transition duration-300 hover:border-[#145da0]/20 hover:bg-white hover:shadow-md"
                    style={{ animationDelay: "300ms" }}
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0] md:min-w-[140px]">
                        E-Mail
                      </div>
                      <a
                        href={`mailto:${contactData.email}`}
                        className="break-all text-left text-xl font-semibold text-slate-900 transition hover:text-[#145da0] md:flex-1 md:text-right"
                      >
                        {contactData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={downloadVCard}
                      className="inline-flex items-center justify-center rounded-2xl bg-[#145da0] px-6 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:bg-[#0f4c86] hover:shadow-xl"
                    >
                      Kontakt speichern
                    </button>

                    <button
                      type="button"
                      onClick={() => setQrModalOpen(true)}
                      className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-900 shadow-sm transition duration-300 hover:border-[#145da0]/25 hover:text-[#145da0] hover:shadow-md"
                    >
                      QR-Code scannen
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="h-full">
              <div className="flex h-full flex-col rounded-[34px] border border-white/70 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#145da0]">
                  Anfrage
                </p>

                <h2
                  className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  Schreiben Sie mir
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Nutzen Sie das Formular für Ihre Anfrage. Ich melde mich so
                  schnell wie möglich persönlich bei Ihnen zurück.
                </p>

<div className="mt-10 flex flex-1 flex-col justify-between rounded-[28px] border border-slate-200 bg-slate-50 p-6 sm:p-8">
  <div>
    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0]">
      Direkte Anfrage
    </div>

    <h3
      className="mt-3 text-3xl font-semibold text-slate-900"
      style={{ fontFamily: "var(--font-playfair, serif)" }}
    >
      Schreiben Sie mir direkt per E-Mail.
    </h3>

    <p className="mt-5 text-lg leading-8 text-slate-600">
      Für Anfragen zu Sortiment, Zusammenarbeit oder allgemeinen Fragen erreichen
      Sie mich am schnellsten per E-Mail oder Telefon.
    </p>

    <div className="mt-8 grid gap-4">
      <a
        href={`mailto:${contactData.email}?subject=Anfrage%20über%20die%20Webseite`}
        className="inline-flex items-center justify-center rounded-2xl bg-[#145da0] px-6 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:bg-[#0f4c86] hover:shadow-xl"
      >
        E-Mail schreiben →
      </a>

      <a
        href={`tel:${contactData.phone.replace(/\s+/g, "")}`}
        className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-900 shadow-sm transition duration-300 hover:border-[#145da0]/25 hover:text-[#145da0] hover:shadow-md"
      >
        Jetzt anrufen
      </a>
    </div>
  </div>

  <div className="mt-10 rounded-2xl bg-white px-5 py-4 text-sm leading-6 text-slate-500">
    Hinweis: Beim Klick auf „E-Mail schreiben“ öffnet sich Ihr E-Mail-Programm.
  </div>
</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#145da0]">
              Standort
            </p>

            <h2
              className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Hier finden Sie mich
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              {contactData.addressLine1}, {contactData.addressLine2}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
              <div className="overflow-hidden rounded-[26px]">
                <iframe
                  src="https://www.google.com/maps?q=Wilhelm-Herz-Stra%C3%9Fe%20105,%2068766%20Hockenheim&output=embed"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Handelsvertretung Amend"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24 pt-16">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[40px] bg-[linear-gradient(135deg,#0b2f52_0%,#145da0_55%,#1d74c9_100%)] px-8 py-14 text-white shadow-[0_24px_70px_rgba(20,93,160,0.24)] sm:px-12 sm:py-16">
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl floating" />
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl floating-delayed" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
                    Austausch
                  </p>
                  <h2
                    className="mt-3 text-4xl font-semibold tracking-tight !text-white sm:text-5xl"
                    style={{ fontFamily: "var(--font-playfair, serif)" }}
                  >
                    Ich freue mich auf Ihre Nachricht.
                  </h2>
                  <p className="mt-5 text-lg leading-8 !text-white/80">
                    Ob erste Anfrage, konkretes Sortiment oder persönliche
                    Zusammenarbeit – melden Sie sich gerne direkt.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`tel:${contactData.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-[#145da0] shadow-xl transition duration-300 hover:shadow-2xl"
                  >
                    Jetzt anrufen
                  </a>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:bg-white/15"
                  >
                    E-Mail senden
                  </a>
                  <button
                    type="button"
                    onClick={downloadVCard}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:bg-white/15"
                  >
                    Kontakt speichern
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {qrModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
          onClick={() => setQrModalOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="scale-in relative w-full max-w-5xl rounded-[32px] border border-white/10 bg-white p-4 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQrModalOpen(false)}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl font-semibold text-slate-700 transition hover:bg-slate-200"
              aria-label="QR-Code schließen"
            >
              ×
            </button>

            <div className="flex min-h-[320px] items-center justify-center rounded-[24px] bg-[#f8f8f7] p-4 sm:p-6">
              <img
                src="/qr_code.png"
                alt="QR-Code"
                className="block max-h-[76vh] max-w-full object-contain select-none"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
          will-change: opacity, transform;
        }

        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(12px);
          animation: fadeUp 0.8s ease both;
        }

        .feature-card {
          animation: fadeUp 0.8s ease both;
        }

        .floating {
          animation: float 7s ease-in-out infinite;
        }

        .floating-delayed {
          animation: float 9s ease-in-out infinite;
        }

        .floating-slow {
          animation: float 11s ease-in-out infinite;
        }

        .scale-in {
          animation: scaleIn 0.28s ease;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-18px) translateX(8px);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .glass-card,
          .feature-card,
          .floating,
          .floating-delayed,
          .floating-slow,
          .scale-in {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </main>
  );
}