"use client";

export default function CookiesPage() {
  const openCookieSettings = () => {
    window.dispatchEvent(new Event("open-cookie-settings"));
  };

  return (
    <section className="flex min-h-[calc(100vh-120px)] items-center bg-[#f5f5f3] px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#145da0]">
          Rechtliches
        </p>

        <h1
          className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Cookie-Hinweise
        </h1>

        <div className="mt-8 rounded-2xl border border-[#145da0]/15 bg-[#f3f7fb] p-5">
          <p className="text-[15px] leading-7 text-slate-600">
            Sie können Ihre Cookie-Einstellungen jederzeit ändern und eine
            erteilte Einwilligung mit Wirkung für die Zukunft widerrufen.
          </p>

          <button
            type="button"
            onClick={openCookieSettings}
            className="mt-5 rounded-2xl bg-[#145da0] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0f4c86]"
          >
            Cookie-Einstellungen ändern
          </button>
        </div>

        <div className="mt-10 space-y-8 text-base leading-8 text-slate-600">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              1. Verwendung von Cookies
            </h2>

            <p className="mt-3">
              Unsere Website verwendet Cookies und vergleichbare Technologien.
              Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert
              werden und bestimmte Informationen enthalten können.
            </p>

            <p className="mt-3">
              Cookies können erforderlich sein, um die Website technisch
              bereitzustellen, Funktionen nutzbar zu machen oder Einstellungen
              zu speichern. Andere Cookies können für Analyse-, Marketing- oder
              Komfortfunktionen eingesetzt werden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              2. Technisch notwendige Cookies
            </h2>

            <p className="mt-3">
              Technisch notwendige Cookies sind erforderlich, damit die Website
              ordnungsgemäß funktioniert. Dazu können zum Beispiel Cookies für
              Sicherheit, technische Bereitstellung oder die Speicherung Ihrer
              Cookie-Einstellungen gehören.
            </p>

            <p className="mt-3">
              Diese Cookies werden ohne gesonderte Einwilligung gesetzt, soweit
              sie für die Bereitstellung der von Ihnen gewünschten Website oder
              Funktion unbedingt erforderlich sind.
            </p>

            <p className="mt-3">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO. Unser berechtigtes Interesse liegt in der sicheren,
              stabilen und nutzerfreundlichen Bereitstellung unserer Website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              3. Funktionale Cookies und lokale Speicherung
            </h2>

            <p className="mt-3">
              Funktionale Speicherungen können eingesetzt werden, um bestimmte
              Einstellungen oder Funktionen zu speichern, zum Beispiel bereits
              getroffene Auswahlentscheidungen zu Cookie- oder
              Datenschutzeinstellungen.
            </p>

            <p className="mt-3">
              Für die Speicherung Ihrer Cookie-Auswahl kann diese Website den
              lokalen Speicher Ihres Browsers verwenden. Dadurch merkt sich die
              Website, ob Sie externe Inhalte oder optionale Funktionen erlaubt
              haben.
            </p>

            <p className="mt-3">
              Soweit diese Speicherungen nicht zwingend erforderlich sind,
              erfolgt der Einsatz nur auf Grundlage Ihrer Einwilligung gemäß Art.
              6 Abs. 1 lit. a DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              4. Analyse- und Statistik-Cookies
            </h2>

            <p className="mt-3">
              Analyse- und Statistik-Cookies helfen dabei zu verstehen, wie
              Besucher eine Website nutzen. Dadurch können Inhalte,
              Nutzerführung und technische Funktionen verbessert werden.
            </p>

            <p className="mt-3">
              Solche Cookies werden nur eingesetzt, wenn Sie zuvor eingewilligt
              haben. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Eine
              erteilte Einwilligung können Sie jederzeit mit Wirkung für die
              Zukunft widerrufen.
            </p>

            <p className="mt-3">
              Auf dieser Website werden derzeit keine Analyse- oder
              Statistik-Cookies zu diesem Zweck eingesetzt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              5. Marketing- und Tracking-Cookies
            </h2>

            <p className="mt-3">
              Marketing- und Tracking-Cookies können verwendet werden, um
              Nutzerverhalten auszuwerten, interessenbezogene Inhalte
              anzuzeigen oder Werbemaßnahmen zu messen.
            </p>

            <p className="mt-3">
              Solche Cookies werden nur nach Ihrer ausdrücklichen Einwilligung
              gesetzt. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO.
            </p>

            <p className="mt-3">
              Auf dieser Website werden derzeit keine Tracking- oder
              Marketing-Cookies eingesetzt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              6. Externe Inhalte
            </h2>

            <p className="mt-3">
              Auf dieser Website können externe Inhalte eingebunden werden, zum
              Beispiel Google Maps. Solche Inhalte werden nur geladen, wenn Sie
              zuvor eingewilligt haben.
            </p>

            <p className="mt-3">
              Beim Laden externer Inhalte können personenbezogene Daten,
              insbesondere Ihre IP-Adresse, an den jeweiligen Anbieter
              übertragen werden. Außerdem kann der jeweilige Anbieter eigene
              Cookies oder vergleichbare Technologien einsetzen.
            </p>

            <p className="mt-3">
              Wenn Sie externe Inhalte nicht erlauben, werden diese Inhalte
              blockiert und nicht automatisch geladen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              7. Cookie-Einstellungen und Widerruf
            </h2>

            <p className="mt-3">
              Sie können Ihre Cookie-Einstellungen jederzeit ändern oder eine
              erteilte Einwilligung mit Wirkung für die Zukunft widerrufen.
            </p>

            <p className="mt-3">
              Nutzen Sie dazu den Button „Cookie-Einstellungen ändern“ auf
              dieser Seite.
            </p>

            <p className="mt-3">
              Zusätzlich können Sie Cookies und lokal gespeicherte Daten in den
              Einstellungen Ihres Browsers löschen, blockieren oder
              einschränken. Bitte beachten Sie, dass bei einer vollständigen
              Deaktivierung bestimmte Funktionen der Website möglicherweise nur
              eingeschränkt nutzbar sind.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              8. Speicherdauer
            </h2>

            <p className="mt-3">
              Die Speicherdauer von Cookies hängt vom jeweiligen Cookie oder der
              jeweiligen lokalen Speicherung ab. Session-Cookies werden in der
              Regel nach Ende der Browsersitzung gelöscht. Permanente Cookies
              oder lokale Speicherungen können darüber hinaus gespeichert
              bleiben, bis sie automatisch ablaufen oder von Ihnen gelöscht
              werden.
            </p>

            <p className="mt-3">
              Ihre Cookie-Auswahl bleibt gespeichert, bis Sie diese Auswahl
              ändern oder die gespeicherten Daten in Ihrem Browser löschen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              9. Rechtsgrundlagen
            </h2>

            <p className="mt-3">
              Technisch notwendige Cookies und Speicherungen werden auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO eingesetzt, soweit sie
              zur Wahrung unserer berechtigten Interessen an einer sicheren und
              funktionsfähigen Website erforderlich sind.
            </p>

            <p className="mt-3">
              Für nicht notwendige Cookies, externe Inhalte, Analyse-,
              Statistik-, Marketing- oder Tracking-Funktionen erfolgt die
              Verarbeitung auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1
              lit. a DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              10. Weitere Informationen
            </h2>

            <p className="mt-3">
              Weitere Informationen zur Verarbeitung personenbezogener Daten
              finden Sie in unserer{" "}
              <a href="/datenschutz" className="text-[#145da0] hover:underline">
                Datenschutzerklärung
              </a>
              .
            </p>

            <p className="mt-3">Stand: Mai 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}