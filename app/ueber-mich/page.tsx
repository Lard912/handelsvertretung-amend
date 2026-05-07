"use client";

import { useEffect, useRef, useState } from "react";

const timeline = [
  {
    year: "1990–1992",
    title: "Ausbildung Bankkaufmann",
    category: "Ausbildung",
    detail:
      "Mit einem Abitur in der Tasche und 4 beendeten Semestern BWL in Mannheim entschied ich mich gegen die theoretische Betriebswirtschaftslehre und für etwas Praktisches: Ausbildung zum Bankkaufmann. Schnell merkte ich, dass die Ausbildung mir deutlich mehr Spaß machte: Kontakt zu Kunden anstatt zu Büchern.\n\nDie Zeit prägte viele weitere Schritte in meinem Werdegang. Die tägliche Arbeit mit Kunden hat mir früh gezeigt, wie wichtig der Umgang mit Menschen ist. Ich konnte fundierte Kenntnisse im Finanz- und Wirtschaftsbereich sammeln und mein vorher gelerntes Wissen direkt praktisch einsetzen.",
  },
  {
    year: "1992–1994",
    title: "Angestellter bei der Sparkasse",
    category: "Beruf",
    detail:
      "Nach dem Bestehen meiner Ausbildung entschied ich mich nicht das Unternehmen zu wechseln, sondern weiter im Betrieb zu arbeiten. Ich war fertig ausgelernt und bereit für die Berufswelt. Der anfängliche Spaß während der Ausbildung, der häufige Kontakt mit Menschen und die täglich neuen Einblicke verflogen mit der Zeit. Es machte Spaß, aber auch hier merkte ich, dass es nicht das Richtige für mich ist. Trotz dessen war es eine der wichtigsten Entscheidungen meine Ausbildung bei der Sparkasse zu machen und diese auch dort zu beenden.\n\nEtwas Abwechslung von Zeit zu Zeit, Kontakt mit Menschen und eine schnelle Karriereleiter waren meine Bestrebungen. Ich war jung und ehrgeizig, die Karriereleiter hochzuklettern. Nicht alles sollte sich davon bewahrheiten.",
  },
  {
    year: "1994–2000",
    title: "Filialleiter Souvenirgeschäft am Titisee",
    category: "Beruf",
    detail:
      "Eine kurze Auszeit am Titisee, die zur Überbrückung für einen neuen Job dienen sollte, wurde zu 6 Jahren voller Erfahrungen mit Touristen, Souvenir und ganz vielen Kuckucksuhren. Touristen am Titisee waren im Laden oder haben ihn wahrgenommen: „World of 1000 Clocks“. Neben den Kuckucksuhren zeichnet sich der Laden besonders durch die Angestellten in weißen Kitteln aus. Überall flitzten sie umher und standen Rat und Tat beiseite.\n\nDie schnelle Karriereleiter war nicht meine Priorität, aber trotzdem wurde ich nach 2,5 Jahren Filialleiter in der 2. von 3 Filialen, die zu „World of 1000 Clocks“ gehören. Mit dem neuen Schritt trug ich auch mehr Verantwortung. Arbeiten von Montag bis Samstag waren zur Saison an der Tagesordnung.",
  },
  {
    year: "2000–2014",
    title: "Hilde Souvenir (heute: Amend Souvenir)",
    category: "Beruf",
    detail:
      "6 Jahre Titisee waren dann auch für mich genug. Das Schuften von Montag bis Samstag machte müde. Also entschied ich mich zurückzugehen in die Rhein-Neckar-Region, besser gesagt zurück nach Mannheim. In Oftersheim wartete der Familienbetrieb: Großhandel von Souvenirartikeln. Mein Vater war schon in den 80ern im Souvenirbereich tätig und hat zu dieser Zeit schon alle größeren Unternehmen vertreten. Jedoch kannte er eine Schwachstelle: Die Verfügbarkeit. Am Anfang der Saison war die Ware noch vorrätig, doch je später es wurde, desto weniger Produkte waren überhaupt noch lieferbar. Dies änderte er, indem er sich selbstständig machte und später im Jahre 2014 die Firma an mich übergab.",
  },
  {
    year: "2000–heute",
    title: "Handelsvertreter im Souvenirbereich",
    category: "Beruf",
    detail:
      "Parallel zur Rückkehr nach Mannheim machte ich mich als Handelsvertreter selbstständig. Neben damals „Hilde Souvenir“ waren auch „Smile Originals“ sowie „Reu Souvenir“ seit der ersten Stunde dabei. Hinzu kamen „Breitner“ und „Carussel“. Durch die verschiedenen Vertretungen konnte ich jedem Kunden ein Sortiment von A bis Z anbieten – alles rund um Souvenir. Egal was jemand brauchte oder wollte, ich habe es geliefert.\n\nHeute noch macht mir mein Job als Handelsvertreter sehr viel Spaß, doch der Markt an Souvenirartikeln ist kleiner geworden. „Reu“ hat sich in eine andere Richtung entwickelt und „Carussel“ gibt es ebenso nicht mehr. Falls Sie deshalb bis hierhin gelesen haben und auf der Suche nach einem Handelsvertreter sind, heiße ich Sie herzlich willkommen. Ich bin jederzeit für Sie erreichbar.",
  },
  {
    year: "2014–heute",
    title: "Amend Souvenir",
    category: "Unternehmen",
    detail:
      "2014: „Ole Ole wir sind Weltmeister!“ – Während die einen noch Wochen danach aus dem Häuschen waren, stand ich vor einem riesigen Berg voller Arbeit. Die Selbstständigkeit als Handelsvertreter ist die eine Sache, aber parallel dazu ein weiteres Unternehmen zu führen, kostete nicht nur Zeit. Von der eigenständigen Planung zur Überprüfung der Verfügbarkeit, Auslieferung und natürlich weiterhin die Beratung beim Kunden wusste ich bald nicht mehr, wo ich anfangen und aufhören soll. Hinzu kamen die Kunden, die gar nicht mehr aufhören konnten, Trikots und Fanartikel zu bestellen.\n\nHeute ist Amend Souvenir ein etabliertes Unternehmen in der Souvenirbranche. Es deckt die Regionen Süd-West mit seinem Sortiment perfekt ab. Ob München, Köln oder Frankfurt – für jeden ist etwas dabei. Seit 2014 hat sich das Sortiment nochmal um ein deutliches Stück erweitert und auch die Bestellung über den Onlineshop ist für B2B- und B2C-Kunden mittlerweile möglich.",
  },
];

const galleryImages = [
  {
    src: "/Matthias_3.jpg",
    alt: "Matthias Amend",
    label: "Porträt",
  },
    {
    src: "/Matthias_10.jpg",
    alt: "Matthias Amend beim Versand",
    label: "Beratung",
        objectPosition: "center 52%",
  },
  {
    src: "/Matthias_7.jpg",
    alt: "Matthias Amend im Lager",
    label: "Im Lager",
    objectPosition: "center 44%",
  },
  {
    src: "/Matthias_9.jpg",
    alt: "Matthias Amend persönlich",
    label: "Persönlich",
    objectPosition: "center 54%",
  },
];

const articleSlides = [
  {
    eyebrow: "Zeitungsartikel vom 02.11.1998",
    title: "Dadurch kam ich zum Souvenir",
    image: "/zeitungsartikel.png",
    imageAlt: "Zeitungsartikel über Matthias Amend",
    buttonLabel: "Bild ansehen",
    paragraphs: [
      "Mit damals 27 Jahren, abgeschlossener Ausbildung zum Bankkaufmann und auf der Suche nach etwas Neuem, begab ich mich in den Schwarzwald. Da ich schon als Jugendlicher Berührungspunkte zum Souvenir-Markt hatte, entschied ich mich für einen Souvenirladen am Titisee.",
      "Anfangs noch als Verkäufer beriet ich zum größten Teil amerikanische Touristen zum Thema „Kuckucksuhren“ – von Einsteigermodellen bis hin zu höherpreisigen Modellen war alles vertreten. Teilweise kauften Kunden handgeschnitzte Kuckucksuhren für mehrere Hundert Mark.",
    ],
  },
  {
    eyebrow: "Heute",
    title: "Aus Erfahrung wurde die Handelsvertretung",
    image: "/Matthias_6.jpg",
    imageAlt: "Matthias Amend im Lager",
    buttonLabel: "Bild ansehen",
    paragraphs: [
      "Aus den ersten Jahren im Souvenirhandel entstand über die Zeit ein tiefes Verständnis für Produkte, Standorte und Kundenwünsche. Dieses Wissen fließt heute in jedes Sortiment und jede Beratung ein.",
      "Heute steht Handelsvertretung Amend für persönliche Betreuung, verlässliche Abwicklung und ein Sortiment, das auf Händler, Touristenshops und Geschäftskunden zugeschnitten ist.",
    ],
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

export default function UeberMichPage() {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [articleModalOpen, setArticleModalOpen] = useState(false);
  const [activeArticleIndex, setActiveArticleIndex] = useState(0);

  const timelineContentRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [timelineHeights, setTimelineHeights] = useState<Record<number, number>>({});

  const articleTouchStartX = useRef<number | null>(null);
  const articleTouchEndX = useRef<number | null>(null);

  const selectedTimelineItem = timeline[activeTimelineIndex];
  const selectedArticleSlide = articleSlides[activeArticleIndex];

  const goToPreviousArticle = () => {
    setActiveArticleIndex((current) =>
      current === 0 ? articleSlides.length - 1 : current - 1
    );
  };

  const goToNextArticle = () => {
    setActiveArticleIndex((current) =>
      current === articleSlides.length - 1 ? 0 : current + 1
    );
  };

  const handleArticleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    articleTouchStartX.current = event.targetTouches[0].clientX;
    articleTouchEndX.current = null;
  };

  const handleArticleTouchMove = (event: React.TouchEvent<HTMLElement>) => {
    articleTouchEndX.current = event.targetTouches[0].clientX;
  };

  const handleArticleTouchEnd = () => {
    if (articleTouchStartX.current === null || articleTouchEndX.current === null) {
      articleTouchStartX.current = null;
      articleTouchEndX.current = null;
      return;
    }

    const distance = articleTouchStartX.current - articleTouchEndX.current;

    if (distance > 45) {
      goToNextArticle();
    }

    if (distance < -45) {
      goToPreviousArticle();
    }

    articleTouchStartX.current = null;
    articleTouchEndX.current = null;
  };

  useEffect(() => {
    if (!articleModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setArticleModalOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [articleModalOpen]);

  useEffect(() => {
    const updateHeights = () => {
      const nextHeights: Record<number, number> = {};

      timeline.forEach((_, index) => {
        const element = timelineContentRefs.current[index];

        if (element) {
          nextHeights[index] = element.scrollHeight;
        }
      });

      setTimelineHeights(nextHeights);
    };

    updateHeights();

    window.addEventListener("resize", updateHeights);

    return () => window.removeEventListener("resize", updateHeights);
  }, [activeTimelineIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
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

  return (
    <main className="min-h-screen bg-[#f6f7fb] text-slate-900 selection:bg-[#145da0] selection:text-white">
      <section className="relative isolate min-h-[90vh] overflow-hidden bg-[linear-gradient(135deg,#f8fbff_0%,#edf4fb_45%,#e6eef8_100%)] px-6 pb-16 pt-16 sm:pt-20 min-[1024px]:flex min-[1024px]:items-center min-[1024px]:pb-20 min-[1024px]:pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,93,160,0.12),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.10),transparent_24%)]" />
        <div className="pointer-events-none absolute -left-8 top-20 h-56 w-56 rounded-full bg-[#145da0]/10 blur-3xl floating" />
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl floating-delayed" />

        <div className="relative z-20 mx-auto grid w-full max-w-[1600px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="w-full max-w-[672px]">
            <p className="inline-flex rounded-full border border-[#145da0]/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#145da0] backdrop-blur">
              Über mich
            </p>

            <p
              className="mt-6 text-5xl font-semibold leading-[0.98] tracking-tight text-[#145da0] sm:text-6xl xl:text-7xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Erfahrung, die
              <br />
              Vertrauen schafft.
            </p>

            <p className="mt-7 w-full max-w-none text-lg leading-8 text-slate-600 sm:text-xl">
              Vom stationären Souvenirhandel bis zur langjährigen Handelsvertretung:
              Mein Weg ist geprägt von persönlicher Betreuung, Marktverständnis
              und einem klaren Blick für erfolgreiche Sortimente.
            </p>

            <div className="mt-10 grid w-full gap-4 sm:grid-cols-3">
              {[
                { value: "25+", label: "Jahre Erfahrung" },
                { value: "100%", label: "Persönlich betreut" },
                { value: "über 120", label: "zufriedene Kunden" },
              ].map((item) => (
                <div key={item.label} className="rounded-[24px] bg-white px-5 py-4 shadow-sm">
                  <div
                    className="text-3xl font-semibold leading-tight text-[#145da0]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.value}
                  </div>

                  <div className="mt-2 text-sm font-medium text-slate-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="w-full">
            <div className="w-full max-w-none">
              <div className="group relative overflow-hidden rounded-[38px] border border-white/70 bg-white/70 p-3 shadow-[0_24px_70px_rgba(20,93,160,0.14)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(20,93,160,0.22)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#145da0]/10 blur-2xl floating-slow" />

                <div className="aspect-[16/9] overflow-hidden rounded-[30px] bg-white">
<img
  key={galleryImages[activeImage].src}
  src={galleryImages[activeImage].src}
  alt={galleryImages[activeImage].alt}
  className="gallery-soft-fade block h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
  style={{
    objectPosition: galleryImages[activeImage].objectPosition ?? "center center",
  }}
/>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-3">
                {galleryImages.map((image, index) => {
                  const isActive = index === activeImage;

                  return (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className={`relative z-20 cursor-pointer overflow-hidden rounded-[20px] border p-1 text-left transition duration-300 ${
                        isActive
                          ? "border-[#145da0] bg-white shadow-lg"
                          : "border-slate-200 bg-white/80 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                      }`}
                    >
                      <div className="overflow-hidden rounded-[14px] bg-white">
<img
  src={image.src}
  alt={image.alt}
  width={320}
  height={140}
  loading="lazy"
  decoding="async"
  className="block h-24 w-full object-cover image-crisp transition duration-500 hover:scale-[1.03]"
  style={{
    objectPosition: image.objectPosition ?? "center center",
  }}
/>
                      </div>

                      <div className="px-2 pb-1 pt-2 text-xs font-medium text-slate-600">
                        {image.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="bg-[#145da0] px-6 py-24"
        onTouchStart={handleArticleTouchStart}
        onTouchMove={handleArticleTouchMove}
        onTouchEnd={handleArticleTouchEnd}
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -left-4 top-10 h-[85%] w-[92%] rounded-[34px] bg-[#145da0]/8 blur-2xl floating-slow" />

                <button
                  type="button"
                  onClick={() => setArticleModalOpen(true)}
                  className="group relative block w-full overflow-hidden rounded-[36px] border border-white/70 bg-white p-3 text-left shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] focus:outline-none focus:ring-2 focus:ring-white/60"
                  aria-label={`${selectedArticleSlide.buttonLabel}: ${selectedArticleSlide.title}`}
                >
                  <div className="aspect-[11/9] overflow-hidden rounded-[28px] bg-white">
                    <img
                      key={selectedArticleSlide.image}
                      src={selectedArticleSlide.image}
                      alt={selectedArticleSlide.imageAlt}
                      onError={(event) => {
                        event.currentTarget.src = "/Matthias_3.jpg";
                      }}
                      className="article-soft-fade block h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/15">
                    <span className="pointer-events-none translate-y-4 rounded-2xl bg-white/95 px-4 py-2 text-sm font-semibold text-slate-900 opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {selectedArticleSlide.buttonLabel}
                    </span>
                  </div>
                </button>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div key={selectedArticleSlide.title} className="article-soft-fade">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
                  {selectedArticleSlide.eyebrow}
                </p>

                <h2
                  className="mt-3 text-4xl font-semibold tracking-tight !text-white sm:text-5xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {selectedArticleSlide.title}
                </h2>

                <div className="mt-8 space-y-7 text-lg leading-8 text-white/85">
                  {selectedArticleSlide.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-10 flex flex-col items-start gap-5">
                  <div className="flex items-center gap-3">
                    {articleSlides.map((slide, index) => {
                      const isActive = index === activeArticleIndex;

                      return (
                        <button
                          key={slide.title}
                          type="button"
                          onClick={() => setActiveArticleIndex(index)}
                          className={`h-2.5 rounded-full transition-all duration-300 ease-in-out ${
                            isActive
                              ? "w-10 bg-white"
                              : "w-2.5 bg-white/35 hover:bg-white/60"
                          }`}
                          aria-label={`Zu Abschnitt ${index + 1} wechseln`}
                        />
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={goToPreviousArticle}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl font-semibold text-white transition duration-300 ease-in-out hover:bg-white hover:text-[#145da0]"
                      aria-label="Vorheriger Abschnitt"
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      onClick={goToNextArticle}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl font-semibold text-white transition duration-300 ease-in-out hover:bg-white hover:text-[#145da0]"
                      aria-label="Nächster Abschnitt"
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfcfd] px-6 py-24">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#145da0]">
              Werdegang
            </p>

            <h2
              className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mein Weg in die Branche
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Keine statische Vita, sondern ein Weg mit Stationen, die bis heute
              meine Arbeit prägen. Klicken Sie sich durch den Verlauf.
            </p>
          </Reveal>

          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="relative z-20 rounded-[34px] border border-slate-200 bg-[#f8fafc] p-4 shadow-sm sm:p-5">
                <div className="grid gap-3">
                  {timeline.map((item, index) => {
                    const isActive = index === activeTimelineIndex;

                    return (
                      <div key={`${item.year}-${item.title}`} className="grid gap-3">
                        <button
                          type="button"
                          onClick={() => setActiveTimelineIndex(index)}
                          className={`relative z-20 w-full cursor-pointer rounded-[24px] border px-5 py-5 text-left transition duration-300 ${
                            isActive
                              ? "border-[#145da0]/20 bg-white shadow-md"
                              : "border-transparent bg-white/60 hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white"
                          }`}
                        >
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0]">
                                {item.category}
                              </div>

                              <div className="mt-2 text-xl font-semibold text-slate-900">
                                {item.title}
                              </div>
                            </div>

                            <div
                              className={`text-sm font-semibold ${
                                isActive ? "text-[#145da0]" : "text-slate-500"
                              }`}
                            >
                              {item.year}
                            </div>
                          </div>
                        </button>

                        <div
                          className="overflow-hidden rounded-[28px] bg-[#f8fafc] transition-[max-height,opacity,padding-top] duration-500 ease-in-out xl:hidden"
                          style={{
                            maxHeight: isActive
                              ? `${(timelineHeights[index] ?? 0) + 12}px`
                              : "0px",
                            opacity: isActive ? 1 : 0,
                            paddingTop: isActive ? "12px" : "0px",
                          }}
                        >
                          <div
                            ref={(element) => {
                              timelineContentRefs.current[index] = element;
                            }}
                            className="relative overflow-hidden rounded-[28px] border border-white/70 bg-[linear-gradient(135deg,#0d3b66_0%,#145da0_60%,#1c7ed6_100%)] p-6 text-white shadow-[0_18px_50px_rgba(20,93,160,0.22)] sm:p-8"
                          >
                            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                            <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl" />

                            <div className="relative">
                              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] !text-white/80">
                                  Aktive Station
                                </div>

                                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] !text-white/80">
                                  Bereich: {item.category}
                                </div>
                              </div>

                              <div className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] !text-white/70">
                                {item.year}
                              </div>

                              <h3
                                className="mt-3 text-3xl font-semibold leading-tight !text-white sm:text-4xl"
                                style={{ fontFamily: "var(--font-playfair)" }}
                              >
                                {item.title}
                              </h3>

                              <p className="mt-6 whitespace-pre-line text-base leading-8 !text-white/85 sm:text-lg">
                                {item.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="hidden xl:block">
              <div className="relative overflow-hidden rounded-[36px] border border-white/70 bg-[linear-gradient(135deg,#0d3b66_0%,#145da0_60%,#1c7ed6_100%)] p-8 text-white shadow-[0_22px_70px_rgba(20,93,160,0.24)] sm:p-10">
                <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl floating" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl floating-delayed" />

                <div className="relative">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                      Aktive Station
                    </div>

                    <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                      Bereich: {selectedTimelineItem.category}
                    </div>
                  </div>

                  <div className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
                    {selectedTimelineItem.year}
                  </div>

                  <h3
                    className="mt-3 text-4xl font-semibold leading-tight !text-white sm:text-5xl"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {selectedTimelineItem.title}
                  </h3>

                  <p className="mt-6 w-full max-w-none whitespace-pre-line text-lg leading-8 text-white/85">
                    {selectedTimelineItem.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-24">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[40px] bg-[linear-gradient(135deg,#0b2f52_0%,#145da0_55%,#1d74c9_100%)] px-8 py-14 text-white shadow-[0_24px_70px_rgba(20,93,160,0.24)] sm:px-12 sm:py-16">
              <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl floating" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl floating-delayed" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
                    Zusammenarbeit
                  </p>

                  <h2
                    className="mt-3 text-4xl font-semibold tracking-tight !text-white sm:text-5xl"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Persönlich, erfahren und mit Blick auf den Markt.
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-white/80">
                    Wenn Sie jemanden suchen, der Produkte nicht nur vertreibt,
                    sondern Standorte, Zielgruppen und Sortimente wirklich versteht,
                    freue ich mich auf den Austausch.
                  </p>
                </div>

                <div>
                  <a
                    href="/kontakt"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-[#145da0] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    Kontakt aufnehmen →
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {articleModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
          onClick={() => setArticleModalOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-full max-w-6xl rounded-[32px] border border-white/10 bg-white p-4 shadow-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setArticleModalOpen(false)}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl font-semibold text-slate-700 transition hover:bg-slate-200"
              aria-label="Zeitungsartikel schließen"
            >
              ×
            </button>

            <div className="flex items-center justify-center rounded-[24px] bg-[#f8f8f7] p-4 sm:p-6">
              <img
                src={selectedArticleSlide.image}
                alt={selectedArticleSlide.imageAlt}
                onError={(event) => {
                  event.currentTarget.src = "/Matthias_3.jpg";
                }}
                className="block max-h-[85vh] max-w-full select-none object-contain"
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

        .glass-card {
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
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

        .article-soft-fade,
        .gallery-soft-fade {
          animation: softFade 0.28s ease-in-out both;
          will-change: opacity;
        }

        @keyframes softFade {
          from {
            opacity: 0.35;
          }

          to {
            opacity: 1;
          }
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
            transform: translateY(-14px) translateX(6px);
          }
        }

        .image-crisp {
  image-rendering: auto;
  backface-visibility: hidden;
  transform: translateZ(0);
}

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .glass-card,
          .feature-card,
          .floating,
          .floating-delayed,
          .floating-slow,
          .article-soft-fade,
          .gallery-soft-fade {
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