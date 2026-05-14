import Link from "next/link";

export default function FooterTemp() {
  return (
    <footer className="border-t border-slate-200 bg-[#f5f5f3] px-4 pb-8 pt-8 text-slate-600 min-[600px]:px-10 min-[600px]:pb-10 min-[600px]:pt-10 lg:px-16">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-4 text-center text-xs min-[600px]:max-w-[1600px] min-[600px]:text-sm md:flex-row md:justify-between md:text-left">
        <div>© Handelsvertretung Amend</div>

        <div className="flex flex-wrap items-center justify-center gap-5 min-[600px]:gap-6">
          <Link href="/impressum" className="transition hover:text-[#145da0]">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition hover:text-[#145da0]">
            Datenschutz
          </Link>
          <Link href="/cookies" className="transition hover:text-[#145da0]">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}