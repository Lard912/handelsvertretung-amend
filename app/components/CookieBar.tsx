"use client";

import { useEffect, useState } from "react";

type CookiePreferences = {
  necessary: true;
  externalContent: boolean;
  analytics: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "hvamend_cookie_preferences";

const defaultPreferences: CookiePreferences = {
  necessary: true,
  externalContent: false,
  analytics: false,
  updatedAt: "",
};

function loadPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;

    return JSON.parse(saved) as CookiePreferences;
  } catch {
    return null;
  }
}

function savePreferences(preferences: CookiePreferences) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      ...preferences,
      necessary: true,
      updatedAt: new Date().toISOString(),
    })
  );

  window.dispatchEvent(new Event("cookie-preferences-updated"));
}

export default function CookieBar() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    setMounted(true);

    const saved = loadPreferences();

    if (saved) {
      setPreferences(saved);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }

    const openSettings = () => {
      const current = loadPreferences();
      setPreferences(current ?? defaultPreferences);
      setShowSettings(true);
      setShowBanner(false);
    };

    window.addEventListener("open-cookie-settings", openSettings);

    return () => {
      window.removeEventListener("open-cookie-settings", openSettings);
    };
  }, []);

  if (!mounted) return null;

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      externalContent: true,
      analytics: true,
      updatedAt: new Date().toISOString(),
    });

    setShowBanner(false);
    setShowSettings(false);
  };

  const rejectOptional = () => {
    savePreferences({
      necessary: true,
      externalContent: false,
      analytics: false,
      updatedAt: new Date().toISOString(),
    });

    setShowBanner(false);
    setShowSettings(false);
  };

  const saveCustomSettings = () => {
    savePreferences(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  return (
    <>
      {showBanner && (
        <div className="fixed inset-x-0 bottom-0 z-[9998] px-4 pb-4 min-[600px]:px-6 min-[600px]:pb-6">
          <div className="mx-auto max-w-5xl rounded-[28px] border border-slate-200 bg-white p-5 text-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.18)] min-[600px]:p-6">
            <div className="grid gap-5 min-[900px]:grid-cols-[1fr_auto] min-[900px]:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0]">
                  Datenschutz
                </p>

                <h2
                  className="mt-2 text-2xl font-semibold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Cookie-Einstellungen
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Wir verwenden notwendige Funktionen für den Betrieb der
                  Webseite. Externe Inhalte wie Google Maps werden nur geladen,
                  wenn Sie zustimmen. Analysefunktionen werden aktuell nicht
                  eingesetzt.
                </p>
              </div>

              <div className="flex flex-col gap-3 min-[600px]:flex-row min-[900px]:justify-end">
                <button
                  type="button"
                  onClick={rejectOptional}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#145da0]/30 hover:text-[#145da0]"
                >
                  Nur notwendige
                </button>

                <button
                  type="button"
                  onClick={() => setShowSettings(true)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#145da0]/30 hover:text-[#145da0]"
                >
                  Einstellungen
                </button>

                <button
                  type="button"
                  onClick={acceptAll}
                  className="rounded-2xl bg-[#145da0] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0f4c86]"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="fixed inset-0 z-[9999] flex items-end justify-center bg-slate-950/45 p-4 backdrop-blur-sm min-[600px]:items-center">
          <div className="w-full max-w-2xl rounded-[30px] bg-white p-5 text-slate-900 shadow-2xl min-[600px]:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#145da0]">
                  Präferenzen
                </p>

                <h2
                  className="mt-2 text-3xl font-semibold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Cookie-Einstellungen anpassen
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-600 transition hover:bg-slate-200"
                aria-label="Cookie-Einstellungen schließen"
              >
                ×
              </button>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Notwendige Funktionen
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Diese Funktionen sind für den Betrieb der Webseite
                      erforderlich und können nicht deaktiviert werden. Dazu
                      gehört auch das Speichern Ihrer Cookie-Auswahl.
                    </p>
                  </div>

                  <span className="shrink-0 whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                    Immer aktiv
                  </span>
                </div>
              </div>

              <label className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-[#145da0]/30 hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Externe Inhalte
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Erlaubt das Laden externer Inhalte, zum Beispiel Google
                      Maps auf der Kontaktseite. Dabei können Daten wie Ihre
                      IP-Adresse an externe Anbieter übertragen werden.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={preferences.externalContent}
                    onChange={(event) =>
                      setPreferences((current) => ({
                        ...current,
                        externalContent: event.target.checked,
                      }))
                    }
                    className="mt-1 h-6 w-6 shrink-0 cursor-pointer accent-[#145da0]"
                  />
                </div>
              </label>

              <label className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-[#145da0]/30 hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">Analyse</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Aktuell verwenden wir keine Analyse-Tools. Diese Option
                      ist vorbereitet, falls später Statistikdienste eingebunden
                      werden.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(event) =>
                      setPreferences((current) => ({
                        ...current,
                        analytics: event.target.checked,
                      }))
                    }
                    className="mt-1 h-6 w-6 shrink-0 cursor-pointer accent-[#145da0]"
                  />
                </div>
              </label>
            </div>

            <div className="mt-7 flex flex-col gap-3 min-[600px]:flex-row min-[600px]:items-center">
              <button
                type="button"
                onClick={rejectOptional}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#145da0]/30 hover:text-[#145da0] min-[600px]:mr-auto"
              >
                Nur notwendige
              </button>

              <button
                type="button"
                onClick={saveCustomSettings}
                className="rounded-2xl bg-[#145da0] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0f4c86]"
              >
                Auswahl speichern
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}