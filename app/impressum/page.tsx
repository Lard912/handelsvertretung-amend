export default function ImpressumPage() {
  return (
    <section className="bg-[#f5f5f3] px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm sm:p-12">

        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#145da0]">
          Rechtliches
        </p>

        <h1
          className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Impressum
        </h1>

        <div className="mt-10 space-y-8 text-base leading-8 text-slate-600">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="mt-3">
              Handelsvertretung Amend<br />
              Matthias Amend<br />
              Wilhelm-Herz-Straße 105<br />
              68766 Hockenheim<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Kontakt</h2>
            <p className="mt-3">
              Telefon:{" "}
              <a href="tel:+491752063210" className="hover:underline">
                0175-2063210
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:info@handelsvertretung-amend.de" className="hover:underline">
                info@handelsvertretung-amend.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Tätigkeit</h2>
            <p className="mt-3">Handelsvertreter gemäß § 84 HGB</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Umsatzsteuer-ID
            </h2>
            <p className="mt-3">
              [Falls vorhanden eintragen oder Abschnitt entfernen]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Verantwortlich nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-3">
              Matthias Amend<br />
              Wilhelm-Herz-Straße 105<br />
              68766 Hockenheim
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}