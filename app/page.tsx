"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
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

const productImages = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `/produktbild_${i + 1}.png`,
  alt: `Produkt ${i + 1}`,
}));

export default function Home() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const activeImage =
    activeImageIndex !== null ? productImages[activeImageIndex] : null;

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

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImageIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex]);

  return (
    <>
<section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d3b66_0%,#145da0_60%,#1c7ed6_100%)] py-12 text-white min-[600px]:py-20 md:min-h-[calc(100vh-88px)] md:flex md:items-center">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.18),transparent_24%)]" />
  <div className="absolute -left-10 top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl floating" />
  <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl floating-delayed" />

<div className="relative grid w-full items-center gap-6 px-4 min-[600px]:px-6 min-[1648px]:mx-auto min-[1648px]:w-[1600px] min-[1648px]:px-0 md:-mt-10 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:gap-14">    <Reveal>
      <div className="max-w-3xl">
        <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur">
          seit 2000
        </p>
<p
  className="mt-6 text-[2.35rem] font-semibold leading-[0.9] tracking-tight text-[#fff] min-[600px]:text-5xl sm:text-6xl xl:text-7xl"
  style={{ fontFamily: "var(--font-playfair)" }}
>
  Vertrieb mit Erfahrung <br />
  und Verlässlichkeit.
</p>

        <p className="mt-6 max-w-2xl text-[15px] leading-[1.45] text-white/85 min-[600px]:text-lg min-[600px]:leading-8 sm:text-xl">
          Ich begleite meine Partner in der Souvenirbranche mit persönlicher
          Betreuung, langjähriger Erfahrung und einem klaren Blick für Produkte und
          Standorte.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/vertretungen"
            className="inline-flex items-center rounded-2xl bg-white px-5 py-2.5 text-xs font-semibold text-[#145da0] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl min-[600px]:px-6 min-[600px]:py-3 min-[600px]:text-sm"
          >
            Mehr erfahren
          </a>

          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-2xl border border-white/25 bg-white/12 px-5 py-2.5 text-xs font-semibold text-white shadow-lg backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20 min-[600px]:px-6 min-[600px]:py-3 min-[600px]:text-sm"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </Reveal>

    <Reveal delay={120}>
      <div className="relative w-full md:mx-auto md:max-w-2xl">
        <div className="absolute inset-0 rounded-[36px] bg-white/10 blur-2xl" />

<div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/10 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:rounded-[36px] sm:p-4">          <div className="overflow-hidden rounded-[28px] bg-white">
            <img
              src="/Matthias_3.jpg"
              alt="Matthias Amend"
              className="h-[260px] w-full object-cover object-[72%_center] sm:h-[320px] md:h-[520px] lg:h-[560px]"
            />
          </div>

          <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/20 bg-[#0d3b66]/78 px-5 py-4 text-white backdrop-blur-md">
            <p className="hidden md:block text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Handelsvertretung
            </p>
            <h2
              className="mt-0 md:mt-2 text-2xl font-semibold !text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Matthias Amend
            </h2>
          </div>
        </div>
      </div>
    </Reveal>
  </div>
</section>


      <section id="partner" className="bg-[#f6f7fb] px-4 py-24 min-[600px]:px-6">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0] min-[600px]:text-sm min-[600px]:tracking-[0.28em]">
                Aktuelle Vertretungen
              </p>

              <h2
                className="mt-3 text-3xl font-semibold leading-[1.05] tracking-tight text-slate-900 min-[600px]:text-4xl sm:text-5xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Meine Partner
              </h2>

              <p className="mt-5 max-w-3xl text-[15px] leading-[1.45] text-slate-600 min-[600px]:text-lg min-[600px]:leading-8">
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
  className={`mt-4 text-[15px] leading-[1.45] min-[600px]:leading-7 ${
    isBlueCard
      ? "text-center text-white/90 md:text-left lg:text-center"
      : "text-center text-slate-600"
  }`}
>
                          {partner.short}
                        </p>

                        <div className="mt-5">
                          <div
                            className={`rounded-2xl px-4 py-4 text-xs leading-[1.45] min-[600px]:text-sm min-[600px]:leading-7 ${
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

      <section id="profil" className="bg-white px-4 py-24 min-[600px]:px-6">
        <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0] min-[600px]:text-sm min-[600px]:tracking-[0.28em]">
                Profil
              </p>
              <h2
                className="mt-3 text-3xl font-semibold leading-[1.05] tracking-tight text-slate-900 min-[600px]:text-4xl sm:text-5xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Erfahrung, Verlässlichkeit und persönlicher Kontakt
              </h2>

              <p className="mt-6 text-[15px] leading-[1.45] text-slate-600 min-[600px]:text-lg min-[600px]:leading-8">
                Seit vielen Jahren bin ich als Handelsvertreter in der
                Souvenirbranche tätig. Dabei stehen für mich <strong>Vertrauen,
                Verbindlichkeit und eine enge Zusammenarbeit mit meinen Partnern </strong>
                im Mittelpunkt.
              </p>

              <p className="mt-4 text-[15px] leading-[1.45] text-slate-600 min-[600px]:text-lg min-[600px]:leading-8">
                Mein Anspruch ist es, Produkte nicht nur zu vermitteln, sondern
                gemeinsam passende Sortimente, Märkte und Chancen zu erkennen und
                langfristig zu entwickeln.
              </p>

              <div className="mt-8">
                <Link
                  href="/ueber-mich"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#145da0] px-5 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#0f4c86] hover:shadow-xl"
                >
                  Mehr über mich <span>→</span>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2 min-[600px]:gap-6">
              <div className="rounded-[22px] border border-slate-200 bg-[#f8f8f7] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg min-[600px]:rounded-[28px] min-[600px]:p-8">
                <div
                  className="text-3xl font-semibold leading-none text-[#145da0] min-[600px]:text-4xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  25+
                </div>
                <div className="mt-1.5 text-sm font-semibold leading-tight min-[600px]:mt-2 min-[600px]:text-lg">Jahre Erfahrung</div>
                <p className="mt-3 text-sm leading-[1.35] text-slate-600 min-[600px]:mt-4 min-[600px]:text-[15px] min-[600px]:leading-7">
                  Langjährige Erfahrung im Vertrieb und im Souvenirhandel.
                </p>
              </div>

              <div className="rounded-[22px] border border-slate-200 bg-[#f8f8f7] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg min-[600px]:rounded-[28px] min-[600px]:p-8">
                <div
                  className="text-3xl font-semibold leading-none text-[#145da0] min-[600px]:text-4xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  100%
                </div>
                <div className="mt-1.5 text-sm font-semibold leading-tight min-[600px]:mt-2 min-[600px]:text-lg">Persönlich</div>
                <p className="mt-3 text-sm leading-[1.35] text-slate-600 min-[600px]:mt-4 min-[600px]:text-[15px] min-[600px]:leading-7">
                  Direkte Betreuung, kurze Wege und ehrlicher Austausch.
                </p>
              </div>

              <div className="rounded-[22px] border border-slate-200 bg-[#f8f8f7] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg min-[600px]:rounded-[28px] min-[600px]:p-8 sm:col-span-2">
                <div
                  className="text-3xl font-semibold leading-none text-[#145da0] min-[600px]:text-4xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Süd & West
                </div>
                <div className="mt-1.5 text-sm font-semibold leading-tight min-[600px]:mt-2 min-[600px]:text-lg">Starkes Netzwerk</div>
                <p className="mt-3 text-sm leading-[1.35] text-slate-600 min-[600px]:mt-4 min-[600px]:text-[15px] min-[600px]:leading-7">
                  Ein verlässliches Netzwerk im süd- und westdeutschen Raum mit
                  gutem Gespür für Märkte, Sortimente und Zielgruppen.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="sortiment" className="relative z-10 bg-[#f3f7fb] px-4 py-24 min-[600px]:px-6">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0] min-[600px]:text-sm min-[600px]:tracking-[0.28em]">
              Sortiment
            </p>

            <h2
              className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Sie sind auf der Suche nach Produkten?
            </h2>

            <p className="mt-6 text-[15px] leading-[1.45] text-slate-600 min-[600px]:text-lg min-[600px]:leading-8">
              Lassen Sie mich gerne wissen, ob Sie Interesse haben. Ich lasse
              Ihnen gerne Kataloge zukommen. Schreiben Sie mir einfach eine
              Nachricht – ich kümmere mich darum, dass Sie schnellstmöglich alle
              relevanten Informationen erhalten.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-3 min-[350px]:grid-cols-2 min-[600px]:mt-14 min-[600px]:gap-5 lg:grid-cols-4">
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

      <section id="kontakt" className="bg-[#f3f7fb] px-4 py-16 min-[600px]:px-6 md:py-20">
        <div className="mx-auto max-w-[1600px] rounded-[34px] bg-[#145da0] p-6 text-white shadow-xl min-[600px]:p-10 sm:p-14">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
                Kontakt
              </p>
              <h2
                className="mt-3 text-4xl font-semibold tracking-tight !text-white sm:text-5xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Interesse an einer Zusammenarbeit?
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.45] text-white/85 min-[600px]:text-lg min-[600px]:leading-8">
                Ich freue mich über Ihre Anfrage und ein erstes persönliches
                Gespräch. Gerne bespreche ich mit Ihnen, wie eine Zusammenarbeit
                aussehen kann.
              </p>

              <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3">
                <a
                  href="tel:01752063210"
                  className="rounded-2xl bg-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/20"
                >
                  <div className="text-xs uppercase tracking-[0.12em] text-white/70 min-[600px]:text-sm min-[600px]:tracking-[0.15em]">
                    Telefon
                  </div>
                  <div className="mt-2 text-[15px] font-semibold text-white min-[600px]:text-lg">
                    0175-2063210
                  </div>
                </a>

                <a
                  href="mailto:info@handelsvertretung-amend.de"
                  className="rounded-2xl bg-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/20"
                >
                  <div className="text-xs uppercase tracking-[0.12em] text-white/70 min-[600px]:text-sm min-[600px]:tracking-[0.15em]">
                    E-Mail
                  </div>
                  <div className="mt-2 break-all text-[15px] font-semibold text-white min-[600px]:text-lg">
                    info@handelsvertretung-amend.de
                  </div>
                </a>

                <div className="rounded-2xl bg-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/20">
                  <div className="text-xs uppercase tracking-[0.12em] text-white/70 min-[600px]:text-sm min-[600px]:tracking-[0.15em]">
                    Region
                  </div>
                  <div className="mt-2 text-lg font-semibold">
                    Süd- und Westdeutschland
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
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

        .reveal {
          opacity: 0;
          transform: translateY(34px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
          will-change: opacity, transform;
        }

        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .floating {
          animation: float 7s ease-in-out infinite;
        }

        .floating-delayed {
          animation: float 9s ease-in-out infinite;
        }

        .scale-in {
          animation: scaleIn 0.28s ease;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-16px) translateX(6px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.988);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
          .floating,
          .floating-delayed,
          .scale-in {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </>
  );
}