"use client";

import { useEffect, useRef, useState } from "react";

type CardItem = {
  id: string;
  title: string;
  logo: string;
  summary: string;
  detail: string;
};

const cards: CardItem[] = [
  {
    id: "amend",
    title: "Amend Souvenir",
    logo: "/logo.png",
    summary:
      "Breites Sortiment an Souvenirartikeln mit langjähriger Erfahrung im Vertrieb.",
    detail:
      "Amend Souvenir produziert und vertreibt ein breites Sortiment an Souvenirartikeln – von Magneten und Schlüsselanhängern bis zu Autoschildern, Bierkrügen und Kuckucksuhren. Der Kundenstamm erstreckt sich von Bayern bis Nordrhein-Westfalen, mit Schwerpunkt in Baden-Württemberg.",
  },
  {
    id: "souvenirworld",
    title: "Souvenirworld",
    logo: "/logo.png",
    summary:
      "Etabliertes Unternehmen aus Österreich mit starkem Sortiment und Großhandelsbezug.",
    detail:
      "Souvenirworld ist ein etabliertes Unternehmen mit Sitz in Österreich und produziert sowohl Souvenirartikel als auch Textilwaren. Mit über 70 Einzelhandelsgeschäften in Österreich ist das Unternehmen zudem als Großhändler auf dem deutschen Markt vertreten.",
  },
  {
    id: "partner",
    title: "Ihr Unternehmen",
    logo: "/logo.png",
    summary:
      "Sie suchen einen starken Vertriebspartner im Bereich Textil oder Souvenir?",
    detail:
      "Sie suchen einen Vertreter im Bereich Textil- und Souvenirartikel oder allgemein einen starken Vertriebspartner im Einzelhandel? Dann freue ich mich über Ihre Kontaktaufnahme und ein erstes Gespräch.",
  },
];

function Card({
  card,
  active,
  dimmed,
  onClick,
}: {
  card: CardItem;
  active: boolean;
  dimmed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "h-full w-full rounded-[28px] border border-slate-200 bg-white p-8 text-left shadow-sm",
        "transition-all duration-500 ease-in-out",
        "hover:-translate-y-1 hover:shadow-xl",
        active ? "border-[#145da0]/30 shadow-xl" : "",
        dimmed ? "scale-[0.97] opacity-0" : "scale-100 opacity-100",
      ].join(" ")}
    >
      <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-slate-100">
        <img
          src={card.logo}
          alt={card.title}
          className="h-14 w-14 object-contain"
        />
      </div>

      <h3 className="text-center text-2xl font-semibold text-[#145da0]">
        {card.title}
      </h3>

      <p className="mt-5 text-center leading-7 text-slate-600">
        {card.summary}
      </p>

      <div className="mt-6 text-center">
        <span className="inline-flex rounded-xl bg-[#145da0] px-4 py-2 text-sm font-semibold text-white">
          {active ? "Schließen" : "Mehr erfahren"}
        </span>
      </div>
    </button>
  );
}

export default function Cards() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const activeCard = cards.find((card) => card.id === activeId) ?? null;

  const toggleCard = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!activeId || !wrapRef.current) return;

      const rect = wrapRef.current.getBoundingClientRect();
      const outside =
        rect.bottom < 120 || rect.top > window.innerHeight * 0.9;

      if (outside) {
        setActiveId(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeId]);

  return (
    <div ref={wrapRef} className="relative">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
        <div className="relative min-h-[430px]">
          <div className="grid h-full gap-8 md:grid-cols-3">
            {cards.map((card) => {
              const isActive = activeId === card.id;
              const isDimmed = activeId !== null && activeId !== card.id;

              return (
<div
  key={card.id}
  className={[
    "transition-all duration-500 ease-in-out",
    activeId !== null && !isActive ? "hidden md:block opacity-40" : "",
  ].join(" ")}
>
                  <Card
                    card={card}
                    active={isActive}
                    dimmed={isDimmed}
                    onClick={() => toggleCard(card.id)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={[
            "overflow-hidden transition-all duration-500 ease-in-out",
            activeCard
              ? "max-h-[600px] translate-x-0 opacity-100"
              : "pointer-events-none max-h-0 translate-x-8 opacity-0 lg:max-h-[430px]",
          ].join(" ")}
        >
          <div className="h-full rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#145da0]">
              Details
            </p>

            <h3 className="mt-3 text-3xl font-bold text-slate-900">
              {activeCard?.title}
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {activeCard?.detail}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="rounded-xl bg-[#145da0] px-5 py-3 font-semibold text-white transition hover:bg-[#0f4c86]"
              >
                Zurück
              </button>

              <a
                href="#kontakt"
                className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}