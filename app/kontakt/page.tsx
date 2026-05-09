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
      <section className="relative isolate flex min-h-[calc(100vh-80px)] items-start overflow-hidden bg-[#0d3b66] px-4 pb-16 pt-16 text-white min-[600px]:px-6 min-[600px]:pb-24 min-[600px]:pt-28 sm:pt-32 lg:items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(125,211,252,0.18),transparent_24%),linear-gradient(135deg,#0d3b66_0%,#145da0_55%,#1c7ed6_100%)]" />
        <div className="absolute -left-10 top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl floating" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl floating-delayed" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-sky-200/10 blur-3xl floating-slow" />

        <div className="relative mx-auto grid w-full max-w-[1600px] gap-8 min-[600px]:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="max-w-4xl">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur min-[600px]:tracking-[0.28em]">
              Kontakt
            </p>

            <h1
              className="mt-6 text-[2.35rem] font-semibold leading-[0.9] tracking-tight !text-white min-[600px]:text-5xl min-[600px]:leading-[0.98] sm:text-6xl xl:text-7xl"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Nehmen Sie
              <br />
              Kontakt auf.
            </h1>

            <p className="mt-7 max-w-2xl text-[15px] leading-[1.45] text-white/80 min-[600px]:text-lg min-[600px]:leading-8 sm:text-xl">
              Ich freue mich über Ihre Anfrage und ein erstes persönliches
              Gespräch. Ob Sortiment, Zusammenarbeit oder allgemeine Fragen –
              schreiben Sie mir gerne direkt.
            </p>

            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 min-[600px]:mt-10 min-[600px]:gap-4">
              {[
                { value: "Direkt", label: "Persönlicher Kontakt" },
                { value: "Schnell", label: "Kurze Wege" },
                { value: "Süd & West", label: "Fokusregionen" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="glass-card rounded-2xl px-4 py-3 min-[600px]:rounded-3xl min-[600px]:px-5 min-[600px]:py-4"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div
                    className="text-xl font-semibold leading-none text-white min-[600px]:text-3xl min-[600px]:leading-tight"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs font-medium leading-tight text-white/70 min-[600px]:mt-2 min-[600px]:text-sm">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative ml-auto w-full max-w-2xl">
              <div className="absolute inset-0 rounded-[32px] bg-white/10 blur-2xl min-[600px]:rounded-[38px]" />

              <div className="relative rounded-[32px] border border-white/15 bg-white/10 p-3 shadow-[0_24px_70px_rgba(20,93,160,0.22)] backdrop-blur-xl min-[600px]:rounded-[38px] min-[600px]:p-5">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-200/20 blur-2xl floating-slow" />

                <div className="rounded-[26px] bg-white/95 p-5 text-slate-900 min-[600px]:rounded-[30px] min-[600px]:p-8 sm:p-10">
                  <div className="mb-6 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0] min-[600px]:tracking-[0.28em]">
                        Direktkontakt
                      </p>
                      <h2
                        className="mt-2 text-2xl font-semibold leading-tight min-[600px]:text-3xl"
                        style={{ fontFamily: "var(--font-playfair, serif)" }}
                      >
                        Schnell erreichbar
                      </h2>
                    </div>

                    <div className="rounded-2xl bg-[#145da0]/10 px-3 py-2 text-xs font-semibold text-[#145da0] min-[600px]:text-sm">
                      Persönlich
                    </div>
                  </div>

                  <div className="grid gap-4 min-[600px]:gap-5 sm:grid-cols-2">
                    <a
                      href={`tel:${contactData.phone.replace(/\s+/g, "")}`}
                      className="feature-card group rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:border-[#145da0]/30 hover:shadow-lg min-[600px]:rounded-[24px] min-[600px]:p-5"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#145da0] min-[600px]:tracking-[0.22em]">
                        Telefon
                      </div>
                      <div className="mt-3 text-[15px] font-semibold leading-tight text-slate-900 transition group-hover:text-[#145da0] min-[600px]:text-lg">
                        {contactData.phone}
                      </div>
                      <div className="mt-2 text-xs text-slate-500 min-[600px]:text-sm">
                        Direkt anrufen
                      </div>
                    </a>

                    <a
                      href={`mailto:${contactData.email}`}
                      className="feature-card group rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:border-[#145da0]/30 hover:shadow-lg min-[600px]:rounded-[24px] min-[600px]:p-5"
                      style={{ animationDelay: "120ms" }}
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#145da0] min-[600px]:tracking-[0.22em]">
                        E-Mail
                      </div>
                      <div className="mt-3 break-all text-[15px] font-semibold leading-tight text-slate-900 transition group-hover:text-[#145da0] min-[600px]:text-lg">
                        {contactData.email}
                      </div>
                      <div className="mt-2 text-xs text-slate-500 min-[600px]:text-sm">
                        Nachricht senden
                      </div>
                    </a>

                    <div
                      className="feature-card rounded-[22px] border border-slate-200 bg-slate-50 p-4 shadow-sm transition duration-300 hover:border-[#145da0]/20 hover:bg-white hover:shadow-md min-[600px]:rounded-[24px] min-[600px]:p-5 sm:col-span-2"
                      style={{ animationDelay: "240ms" }}
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#145da0] min-[600px]:tracking-[0.22em]">
                        Einsatzgebiet
                      </div>
                      <div className="mt-3 text-[15px] font-semibold leading-tight text-slate-900 min-[600px]:text-lg">
                        {contactData.region}
                      </div>
                      <div className="mt-2 text-xs leading-[1.45] text-slate-500 min-[600px]:text-sm">
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

      <section className="bg-[#fcfcfd]  px-4 py-16 min-[600px]:px-6 md:py-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid items-stretch gap-6 min-[600px]:gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="h-full">
              <div className="flex h-full flex-col rounded-[28px] border border-white/70 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] min-[600px]:rounded-[34px] min-[600px]:p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0] min-[600px]:text-sm min-[600px]:tracking-[0.28em]">
                  Kontaktdaten
                </p>

                <h2
                  className="mt-3 text-3xl font-semibold leading-[1.05] tracking-tight text-slate-900 min-[600px]:text-4xl sm:text-5xl"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  So erreichen Sie mich
                </h2>

                <p className="mt-5 max-w-2xl text-[15px] leading-[1.45] text-slate-600 min-[600px]:text-lg min-[600px]:leading-8">
                  Von Montag bis Freitag von 8:00–18:00 Uhr verfügbar
                </p>

                <div className="mt-8 space-y-4 min-[600px]:mt-10 min-[600px]:space-y-6">
                  {[
                    { label: "Name", value: contactData.name, href: null },
                    { label: "Firma", value: contactData.company, href: null },
                    {
                      label: "Telefon",
                      value: contactData.phone,
                      href: `tel:${contactData.phone.replace(/\s+/g, "")}`,
                    },
                    {
                      label: "E-Mail",
                      value: contactData.email,
                      href: `mailto:${contactData.email}`,
                    },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="feature-card rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-4 transition duration-300 hover:border-[#145da0]/20 hover:bg-white hover:shadow-md min-[600px]:rounded-[24px] min-[600px]:px-5 min-[600px]:py-5"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#145da0] md:min-w-[140px]">
                          {item.label}
                        </div>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="break-all text-left text-[15px] font-semibold leading-tight text-slate-900 transition hover:text-[#145da0] min-[600px]:text-xl md:flex-1 md:text-right"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-left text-[15px] font-semibold leading-tight text-slate-900 min-[600px]:text-xl md:flex-1 md:text-right">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="grid gap-3 min-[420px]:grid-cols-2">
                    <button
                      type="button"
                      onClick={downloadVCard}
                      className="inline-flex items-center justify-center rounded-2xl bg-[#145da0] px-5 py-3 text-xs font-semibold text-white shadow-lg transition duration-300 hover:bg-[#0f4c86] hover:shadow-xl min-[600px]:px-6 min-[600px]:py-3.5 min-[600px]:text-base"
                    >
                      Kontakt speichern
                    </button>

                    <button
                      type="button"
                      onClick={() => setQrModalOpen(true)}
                      className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-xs font-semibold text-slate-900 shadow-sm transition duration-300 hover:border-[#145da0]/25 hover:text-[#145da0] hover:shadow-md min-[600px]:px-6 min-[600px]:py-3.5 min-[600px]:text-base"
                    >
                      QR-Code scannen
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="h-full">
              <div className="flex h-full flex-col rounded-[28px] border border-white/70 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] min-[600px]:rounded-[34px] min-[600px]:p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0] min-[600px]:text-sm min-[600px]:tracking-[0.28em]">
                  Anfrage
                </p>

                <h2
                  className="mt-3 text-3xl font-semibold leading-[1.05] tracking-tight text-slate-900 min-[600px]:text-4xl sm:text-5xl"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  Schreiben Sie mir
                </h2>

                <p className="mt-5 max-w-2xl text-[15px] leading-[1.45] text-slate-600 min-[600px]:text-lg min-[600px]:leading-8">
                  Nutzen Sie das Formular für Ihre Anfrage. Ich melde mich so
                  schnell wie möglich persönlich bei Ihnen zurück.
                </p>

                <div className="mt-8 flex flex-1 flex-col justify-between rounded-[24px] border border-slate-200 bg-slate-50 p-5 min-[600px]:mt-10 min-[600px]:rounded-[28px] min-[600px]:p-6 sm:p-8">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#145da0] min-[600px]:tracking-[0.22em]">
                      Direkte Anfrage
                    </div>

                    <h3
                      className="mt-3 text-2xl font-semibold leading-[1.05] text-slate-900 min-[600px]:text-3xl"
                      style={{ fontFamily: "var(--font-playfair, serif)" }}
                    >
                      Schreiben Sie mir direkt per E-Mail.
                    </h3>

                    <p className="mt-5 text-[15px] leading-[1.45] text-slate-600 min-[600px]:text-lg min-[600px]:leading-8">
                      Für Anfragen zu Sortiment, Zusammenarbeit oder allgemeinen
                      Fragen erreichen Sie mich am schnellsten per E-Mail oder
                      Telefon.
                    </p>

                    <div className="mt-6 grid gap-3 min-[600px]:mt-8 min-[600px]:gap-4">
                      <a
                        href={`mailto:${contactData.email}?subject=Anfrage%20über%20die%20Webseite`}
                        className="inline-flex items-center justify-center rounded-2xl bg-[#145da0] px-5 py-3 text-xs font-semibold text-white shadow-lg transition duration-300 hover:bg-[#0f4c86] hover:shadow-xl min-[600px]:px-6 min-[600px]:py-3.5 min-[600px]:text-base"
                      >
                        E-Mail schreiben →
                      </a>

                      <a
                        href={`tel:${contactData.phone.replace(/\s+/g, "")}`}
                        className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-xs font-semibold text-slate-900 shadow-sm transition duration-300 hover:border-[#145da0]/25 hover:text-[#145da0] hover:shadow-md min-[600px]:px-6 min-[600px]:py-3.5 min-[600px]:text-base"
                      >
                        Jetzt anrufen
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl bg-white px-4 py-3 text-xs leading-[1.45] text-slate-500 min-[600px]:mt-10 min-[600px]:px-5 min-[600px]:py-4 min-[600px]:text-sm min-[600px]:leading-6">
                    Hinweis: Beim Klick auf „E-Mail schreiben“ öffnet sich Ihr
                    E-Mail-Programm.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfcfd]  px-4 pb-16 pt-1.5 min-[600px]:px-6 min-[600px]:pt-4 md:pb-20"> 
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="mb-10 text-center min-[600px]:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0] min-[600px]:text-sm min-[600px]:tracking-[0.28em]">
              Standort
            </p>

            <h2
              className="mt-3 text-3xl font-semibold leading-[1.05] tracking-tight text-slate-900 min-[600px]:text-4xl sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Hier finden Sie mich
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-[1.45] text-slate-600 min-[600px]:text-lg min-[600px]:leading-8">
              {contactData.addressLine1}, {contactData.addressLine2}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:shadow-[0_25px_70px_rgba(15,23,42,0.12)] min-[600px]:rounded-[34px] min-[600px]:p-3">
              <div className="overflow-hidden rounded-[22px] min-[600px]:rounded-[26px]">
                <iframe
                  src="https://www.google.com/maps?q=Wilhelm-Herz-Stra%C3%9Fe%20105,%2068766%20Hockenheim&output=embed"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Handelsvertretung Amend"
                  className="min-[600px]:h-[500px]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 bg-[#fcfcfd] pb-16 pt-0 min-[600px]:px-6 min-[600px]:pt-4 md:pb-20">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,#0b2f52_0%,#145da0_55%,#1d74c9_100%)] px-6 py-10 text-white shadow-[0_24px_70px_rgba(20,93,160,0.24)] min-[600px]:rounded-[40px] min-[600px]:px-8 min-[600px]:py-14 sm:px-12 sm:py-16">
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl floating" />
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl floating-delayed" />

              <div className="relative  grid gap-6 min-[600px]:gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70 min-[600px]:text-sm min-[600px]:tracking-[0.28em]">
                    Austausch
                  </p>

                  <h2
                    className="mt-3 text-3xl font-semibold leading-[1.05] tracking-tight !text-white min-[600px]:text-4xl sm:text-5xl"
                    style={{ fontFamily: "var(--font-playfair, serif)" }}
                  >
                    Ich freue mich auf Ihre Nachricht.
                  </h2>

                  <p className="mt-5 text-[15px] leading-[1.45] !text-white/80 min-[600px]:text-lg min-[600px]:leading-8">
                    Ob erste Anfrage, konkretes Sortiment oder persönliche
                    Zusammenarbeit – melden Sie sich gerne direkt.
                  </p>
                </div>

                <div className="grid gap-3 min-[420px]:grid-cols-2 lg:flex lg:flex-wrap">
                  <a
                    href={`tel:${contactData.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-xs font-semibold text-[#145da0] shadow-xl transition duration-300 hover:shadow-2xl min-[600px]:px-6 min-[600px]:py-4 min-[600px]:text-sm"
                  >
                    Jetzt anrufen
                  </a>

                  <a
                    href={`mailto:${contactData.email}`}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-semibold text-white backdrop-blur transition duration-300 hover:bg-white/15 min-[600px]:px-6 min-[600px]:py-4 min-[600px]:text-sm"
                  >
                    E-Mail senden
                  </a>

                  <button
                    type="button"
                    onClick={downloadVCard}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-semibold text-white backdrop-blur transition duration-300 hover:bg-white/15 min-[420px]:col-span-2 min-[600px]:px-6 min-[600px]:py-4 min-[600px]:text-sm lg:col-span-1"
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
              className="absolute -right-2 -top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-base font-semibold text-slate-700 shadow-md transition hover:bg-slate-200 min-[600px]:h-9 min-[600px]:w-9"
              aria-label="QR-Code schließen"
            >
              ×
            </button>

            <div className="flex min-h-[320px] items-center justify-center rounded-[24px] bg-[#f8f8f7] p-2 min-[600px]:p-4 sm:p-6">
              <img
                src="/qr_code.png"
                alt="QR-Code"
                className="block max-h-[76vh] max-w-full select-none object-contain"
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
          html {
            scroll-behavior: auto;
          }

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