"use client";

import { useEffect, useState } from "react";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const partners = [
  {
    title: "Amend Souvenir",
    image: "/logo_amend.png",
    alt: "Amend Souvenir",
    short:
      "Amend Souvenir produziert und vertreibt ein breites Sortiment an Souvenirartikeln.",
    full:
      "Amend Souvenir produziert und vertreibt ein breites Sortiment an Souvenirartikeln – von Magneten und Schlüsselanhängern bis zu Autoschildern, Bierkrügen und Kuckucksuhren.",
  },
  {
    title: "Smile Originals",
    image: "/logo_smile.png",
    alt: "Smile Originals",
    short:
      "Smile Originals ist ein etabliertes Unternehmen mit Sortimenten im Bereich Souvenir und Textil.",
    full:
      "Mit starker Marktpräsenz und passendem Großhandelsbezug ist das Unternehmen auch auf dem deutschen Markt aktiv und bietet interessante Sortimente für unterschiedliche Standorte.",
  },
  {
    title: "Ihr Unternehmen",
    image: "/logo.png",
    alt: "Ihr Unternehmen",
    short:
      "Sie suchen einen starken Vertriebspartner im Bereich Textil- oder Souvenirartikel?",
    full:
      "Dann freue ich mich auf Ihre Anfrage. Gemeinsam können wir besprechen, wie eine Zusammenarbeit aussehen kann und welche Produkte sowie Sortimente zu Ihrem Standort passen.",
  },
];

const formerPartners = [
  {
    title: "Reu Souvenir",
    image: "/logo_reu.png",
    alt: "Reu Souvenir",
    years: "2000–2016",
    text:
      "Traditionsreicher Partner im Souvenirbereich mit Wurzeln seit 1923. REU war besonders für emaillierte Souvenirartikel, Wappenmotive sowie Münzen, Medaillen und Abzeichen bekannt.",
  },
  {
    title: "Breitner",
    image: "/logo_breitner.png",
    alt: "Breitner",
    years: "2010–2025",
    text:
      "Breitner steht seit 1976 für hochwertige Weihnachts- und Osterdekorationen mit Fokus auf Qualität, Verarbeitung und ein breites Sortiment für den Einzelhandel.",
  },
  {
    title: "Carussel",
    image: "/logo_carroussel.png",
    alt: "Carussel",
    years: "2008–2018",
    text:
      "Caroussel ist ein belgisches Unternehmen, welches primär für den Verkauf von 'Namensartikeln' bekannt ist. Darunter zählen Schilder, Schlüsselketten oder auch Tassen.",
  },
];

const productImages = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `/produktbild_${i + 1}.png`,
  alt: `Produkt ${i + 1}`,
}));

const strengths = [
  {
    title: "Vertrieb & Akquise",
    text:
      "Aktive Betreuung bestehender Kunden sowie gezielte Neukundengewinnung. ",
  },
  {
    title: "Sortimentsberatung",
    text:
      "Individuelle Zusammenstellung von Sortimenten passend zu Standort, Zielgruppe und Verkaufspotenzial.",
  },
  {
    title: "Marktanalyse",
    text:
      "Einschätzung von Trends, Standorten und Zielgruppen zur optimalen Positionierung Ihrer Produkte.",
  },
  {
    title: "Vor-Ort-Betreuung",
    text:
      "Persönliche Besuche, Beratung im Geschäft und direkte Unterstützung bei der Umsetzung.",
  },
  {
    title: "Langfristige Partnerschaft",
    text:
      "Kontinuierliche Begleitung statt einmaligem Vertrieb – mit Fokus auf nachhaltigen Erfolg.",
  },
  {
    title: "Kundenpflege",
    text:
      "Verlässliche Betreuung bestehender Kundenbeziehungen durch regelmäßigen Austausch und persönliche Präsenz.",
  },
];

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

export default function VertretungenPage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [showAllStrengthsMobile, setShowAllStrengthsMobile] = useState(false);

  const activeImage =
    activeImageIndex !== null ? productImages[activeImageIndex] : null;

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
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImageIndex(null);
      if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) =>
          prev === null ? 0 : (prev + 1) % productImages.length
        );
      }
      if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) =>
          prev === null
            ? 0
            : (prev - 1 + productImages.length) % productImages.length
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex]);

  const nextImage = () => {
    setActiveImageIndex((prev) =>
      prev === null ? 0 : (prev + 1) % productImages.length
    );
  };

  const prevImage = () => {
    setActiveImageIndex((prev) =>
      prev === null
        ? 0
        : (prev - 1 + productImages.length) % productImages.length
    );
  };

  return (
    <main
      className={`${inter.variable} ${playfair.variable} min-h-screen bg-[#f6f7fb] text-slate-900 selection:bg-[#145da0] selection:text-white`}
    >
      <section className="relative isolate flex min-h-[calc(100vh-80px)] items-start overflow-hidden bg-[#0d3b66] pb-24 pt-0 text-white lg:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_25%),radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.20),transparent_28%),linear-gradient(135deg,#0d3b66_0%,#145da0_55%,#1c7ed6_100%)]" />
        <div className="absolute -left-12 top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl floating" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl floating-delayed" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-sky-200/10 blur-3xl floating-slow" />

        <div className="relative grid w-full gap-6 px-6 pt-16 min-[1649px]:mx-auto min-[1649px]:max-w-[1600px] min-[1649px]:px-0 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pt-20">
          <Reveal className="max-w-none lg:max-w-3xl">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur">
              Vertretungen & Partnerschaften
            </p>

            <h1
              className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-white !text-white sm:text-6xl xl:text-7xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Meine Partner.
            </h1>

            <p className="mt-6 max-w-none text-lg leading-8 text-white/80 sm:text-xl lg:max-w-2xl">
              Langjährige Zusammenarbeit, starke Sortimente und ein
              Vertriebsnetz, das auf Standorte, Zielgruppen und Markterfolg
              ausgerichtet ist.
            </p>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
              {[
                { value: "2", label: "Aktive Partner" },
                { value: "Souvenir & Textil", label: "Branche" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="glass-card rounded-3xl px-5 py-5"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div
                    className="text-3xl font-semibold leading-tight text-white"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm text-white/75">{item.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="flex justify-end">
            <div className="relative w-full max-w-none lg:max-w-xl">
              <div className="absolute inset-0 rounded-[36px] bg-white/10 blur-2xl" />
              <div className="relative rounded-[36px] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
                <div className="overflow-hidden rounded-[28px] bg-white/90 p-6 text-slate-900">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-[#145da0]">
                        Highlights
                      </p>
                      <h2
                        className="mt-2 text-3xl font-semibold"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Vertriebsprofil
                      </h2>
                    </div>
                    <div className="rounded-2xl bg-[#145da0]/10 px-3 py-2 text-sm font-semibold text-[#145da0]">
                      Süd & West
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {[
                      "Souvenirartikel für touristische Standorte",
                      "Textil- und Geschenkartikel mit Marktpotenzial",
                      "Persönliche Betreuung und vertriebliche Erfahrung",
                      "Passende Sortimente für unterschiedliche Zielgruppen",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="feature-card flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
                        style={{ animationDelay: `${index * 120}ms` }}
                      >
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#145da0] text-xs font-bold text-white">
                          ✓
                        </div>
                        <p className="text-sm leading-5 text-slate-600">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="leistungen"
        className="relative overflow-hidden bg-[#f3f7fb] px-6 py-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,93,160,0.06),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(56,189,248,0.08),transparent_26%)]" />
        <div className="relative mx-auto max-w-[1600px]">
          <Reveal className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#145da0]">
              Leistungen
            </p>
            <h2
              className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Was ich als Handelsvertreter biete
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Ich unterstütze nicht nur beim Verkauf, sondern begleite
              Sortimente, Standorte und Marktauftritte mit Erfahrung,
              persönlicher Betreuung und einem klaren Blick für das, was
              nachhaltig funktioniert.
            </p>
          </Reveal>

          <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="h-full">
              <div className="h-full rounded-[34px] border border-white/70 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-10">
                <div className="inline-flex rounded-full bg-[#145da0]/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0]">
                  Im Kern
                </div>

                <h3
                  className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Vertrieb mit Marktgespür, Nähe und Verlässlichkeit
                </h3>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  Gute Vertretung bedeutet für mich, Produkte nicht isoliert zu
                  betrachten, sondern immer im Zusammenhang mit Region,
                  Zielgruppe, Präsentation und tatsächlichem Abverkauf. Genau
                  dadurch entstehen Lösungen, die im Alltag wirklich tragen.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    "Persönliche Betreuung statt anonymer Vertrieb",
                    "Standortbezogene Sortimentsberatung",
                    "Langfristige Zusammenarbeit mit Blick auf Erfolg",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="feature-card rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-[#145da0]/20 hover:bg-white hover:shadow-md"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150} className="h-full">
              <div className="relative h-full overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#0d3b66_0%,#145da0_60%,#1c7ed6_100%)] p-8 text-white shadow-[0_22px_70px_rgba(20,93,160,0.24)] sm:p-10">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl floating" />
                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl floating-delayed" />

                <div className="relative">
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                    Ihr Mehrwert
                  </div>

                  <div className="mt-6 grid gap-4">
                    {[
                      "Ich erkenne schnell, welche Produkte zum Standort passen.",
                      "Ich begleite Sortimente nicht kurzfristig, sondern mit langfristigem Blick.",
                      "Ich verbinde Marktverständnis mit persönlichem Kontakt vor Ort.",
                      "Ich unterstütze nicht nur beim Vertrieb, sondern auch bei Präsentation und Positionierung.",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="feature-card flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-[#145da0]">
                          ✓
                        </div>
                        <p className="text-sm leading-6 text-white/85">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

  <div className="mt-10">
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {strengths.map((item, index) => {
      const isExtraMobileCard = index >= 2;
      const isVisibleOnMobile = index < 2 || showAllStrengthsMobile;

      return (
        <div
          key={item.title}
          className={`${
            isExtraMobileCard
              ? isVisibleOnMobile
                ? "block"
                : "hidden md:block"
              : "block"
          }`}
        >
          <Reveal delay={index * 80}>
            <div className="group relative h-full overflow-hidden rounded-[28px] border border-white/70 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#145da0]/0 to-[#145da0]/10 opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="inline-flex rounded-full bg-[#145da0]/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#145da0]">
                  Leistung
                </div>

                <h3
                  className="mt-4 text-xl font-semibold text-slate-900"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      );
    })}
  </div>

  {strengths.length > 2 && (
    <div className="mt-6 flex justify-center md:hidden">
      <button
        type="button"
        onClick={() => setShowAllStrengthsMobile((prev) => !prev)}
        className="rounded-full bg-[#145da0] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#0d4f8c]"
      >
        {showAllStrengthsMobile
          ? "Weniger anzeigen"
          : "Weitere Leistungen anzeigen"}
      </button>
    </div>
  )}
</div>
        </div>
      </section>

      <section id="partner" className="bg-[#f6f7fb] px-6 py-24">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#145da0]">
                Aktuelle Vertretungen
              </p>

              <h2
                className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Meine Partner
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Zuverlässige Partnerschaften mit einem Sortiment, das auf
                Märkte, Standorte und Verkaufschancen abgestimmt ist.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, index) => {
              const isBlueCard = index === 2;

              return (
                <Reveal
                  key={partner.title}
                  delay={index * 120}
                  className={isBlueCard ? "md:col-span-2 lg:col-span-1" : ""}
                >
                  <article
                    className={`group relative h-full overflow-hidden rounded-[32px] p-8 transition duration-500 hover:-translate-y-2 ${
                      isBlueCard
                        ? "border border-[#145da0]/20 bg-[linear-gradient(135deg,#0d3b66_0%,#145da0_60%,#1c7ed6_100%)] text-white shadow-[0_20px_50px_rgba(20,93,160,0.24)]"
                        : "border border-white/60 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_50px_rgba(20,93,160,0.18)]"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 transition duration-500 ${
                        isBlueCard
                          ? "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%)] opacity-100"
                          : "bg-[radial-gradient(circle_at_top_right,rgba(20,93,160,0.08),transparent_30%)] opacity-0 group-hover:opacity-100"
                      }`}
                    />

                    <div
                      className={`relative ${
                        isBlueCard
                          ? "md:flex md:items-center md:gap-8 lg:block"
                          : ""
                      }`}
                    >
                      <div
                        className={`mb-8 flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full shadow-inner ${
                          isBlueCard
                            ? "mx-auto bg-white/10 ring-1 ring-white/20 md:mb-0 md:mx-0 lg:mb-8 lg:mx-auto"
                            : "mx-auto bg-gradient-to-br from-white to-slate-100 ring-1 ring-slate-200"
                        }`}
                      >
                        <img
                          src={partner.image}
                          alt={partner.alt}
                          className={`h-full w-full transition duration-700 group-hover:scale-110 ${
                            isBlueCard ? "object-contain p-4" : "object-cover"
                          }`}
                        />
                      </div>

                      <div className={isBlueCard ? "md:flex-1" : ""}>
                        <h3
                          className={`text-2xl font-semibold ${
                            isBlueCard
                              ? "!text-white text-center md:text-left lg:text-center"
                              : "text-center text-[#145da0]"
                          }`}
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {partner.title}
                        </h3>

                        <p
                          className={`mt-4 leading-7 ${
                            isBlueCard
                              ? "text-center text-white/90 md:text-left lg:text-center"
                              : "text-center text-slate-600"
                          }`}
                        >
                          {partner.short}
                        </p>

                        <div className="mt-5">
                          <div
                            className={`rounded-2xl px-4 py-4 text-sm leading-7 ${
                              isBlueCard
                                ? "bg-white/10 text-white/90"
                                : "bg-slate-50 text-slate-600"
                            }`}
                          >
                            {partner.full}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fcfcfd] px-6 py-24">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-[#145da0]">
              Erfahrung
            </p>
            <h2
              className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Vergangene Vertretungen
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Im Laufe der Jahre durfte ich mit zahlreichen Unternehmen
              erfolgreich zusammenarbeiten.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {formerPartners.map((partner, index) => (
              <Reveal key={partner.title} delay={index * 100}>
                <article className="group h-full rounded-[28px] border border-slate-200 bg-[#fafaf9] px-6 py-8 text-center shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#145da0]/20 hover:shadow-xl">
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-white shadow-inner ring-1 ring-slate-100">
                    <img
                      src={partner.image}
                      alt={partner.alt}
                      className={`h-full w-full transition duration-700 ${
                        partner.title === "Breitner"
                          ? "object-contain scale-75 group-hover:scale-90"
                          : partner.title === "Carussel"
                          ? "object-contain scale-75 group-hover:scale-90"
                          : "object-cover group-hover:scale-110"
                      }`}
                    />
                  </div>

                  <div
                    className="text-lg font-semibold text-slate-800"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {partner.title}
                  </div>

                  <div className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#145da0]">
                    {partner.years}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {partner.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#eef5fb] px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,93,160,0.08),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.10),transparent_25%)]" />
        <div className="relative mx-auto grid max-w-[1600px] items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#145da0]">
              Einsatzgebiet
            </p>

            <h2
              className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Süd- und Westdeutschland
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Mein Vertriebsgebiet umfasst insbesondere Bayern,
              Baden-Württemberg, Hessen, Rheinland-Pfalz, das Saarland sowie
              Nordrhein-Westfalen.
            </p>

            <div className="mt-8 grid gap-4 min-[450px]:grid-cols-2">
              {[
                "Bayern",
                "Baden-Württemberg",
                "Hessen",
                "Rheinland-Pfalz",
                "Saarland",
                "Nordrhein-Westfalen",
              ].map((region, index) => (
<div
  key={region}
  className="rounded-2xl border border-white/60 bg-white px-4 py-4 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-md"
>
  {region}
</div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="group flex justify-center overflow-hidden rounded-[32px] border border-white/60 bg-white p-6 shadow-xl backdrop-blur">
              <img
                src="/sued_west_deutschland.png"
                alt="Vertriebsgebiet Süd- und Westdeutschland"
                className="w-full max-w-md object-contain transition duration-700 group-hover:scale-105 group-hover:rotate-[1deg]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="sortiment" className="relative z-10 bg-[#f8f8f6] px-6 py-24">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#145da0]">
              Sortiment
            </p>

            <h2
              className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Sie sind auf der Suche nach Produkten?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Lassen Sie mich gerne wissen, ob Sie Interesse haben. Ich lasse
              Ihnen gerne Kataloge zukommen. Schreiben Sie mir einfach eine
              Nachricht – ich kümmere mich darum, dass Sie schnellstmöglich alle
              relevanten Informationen erhalten.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 min-[450px]:grid-cols-2 lg:grid-cols-4">
            {productImages.map((image, index) => (
              <Reveal key={image.id} delay={index * 70}>
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className="group relative block w-full overflow-hidden rounded-[28px] border border-white/70 bg-white p-3 text-left shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#145da0]"
                  aria-label={`${image.alt} vergrößern`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#145da0]/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[22px] bg-[#f6f7fb]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-contain transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/20 group-active:bg-black/20">
                    <span className="pointer-events-none translate-y-4 rounded-2xl bg-white/95 px-4 py-2 text-sm font-semibold text-slate-900 opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100">
                      Vergrößern
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
          onClick={() => setActiveImageIndex(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="scale-in relative w-full max-w-6xl rounded-[32px] border border-white/10 bg-white p-4 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImageIndex(null)}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl font-semibold text-slate-700 transition hover:bg-slate-200"
              aria-label="Bild schließen"
            >
              ×
            </button>

            <button
              type="button"
              onClick={prevImage}
              className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-xl text-slate-700 shadow-lg transition hover:scale-105"
              aria-label="Vorheriges Bild"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-xl text-slate-700 shadow-lg transition hover:scale-105"
              aria-label="Nächstes Bild"
            >
              ›
            </button>

            <div className="flex min-h-[320px] items-center justify-center rounded-[24px] bg-[#f8f8f7] p-4 sm:p-6">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="block max-h-[76vh] max-w-full object-contain select-none"
              />
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {productImages.map((thumb, index) => {
                const isActive = index === activeImageIndex;

                return (
                  <button
                    key={thumb.id}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className={`overflow-hidden rounded-2xl border p-1 transition duration-300 ${
                      isActive
                        ? "border-[#145da0] shadow-lg"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-[#f6f7fb]">
                      <img
                        src={thumb.src}
                        alt={thumb.alt}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: var(--font-inter), sans-serif;
        }

        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 100%;
          height: 2px;
          background: rgba(255, 255, 255, 0.95);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.35s ease;
        }

        .nav-link:hover::after,
        .nav-link[aria-current="page"]::after {
          transform: scaleX(1);
        }

        .reveal {
          opacity: 0;
          transform: translateY(36px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
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
      `}</style>
    </main>
  );
}