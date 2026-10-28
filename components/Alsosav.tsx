"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { vendeglo } from "@/lib/adatok";

// Mobilon alul rögzített, applikációs menüsor. Középen az ajánlatkérés, jobb szélen egy érintéses hívás.
const ikonok = {
  kezdo: (
    <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
  ),
  alkalmak: (
    <>
      <path d="M4 9h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
      <path d="M3 6h18v3H3zM12 6v15M12 6c-1.5-3-5-3.5-5-1.2C7 6 10 6 12 6zm0 0c1.5-3 5-3.5 5-1.2C17 6 14 6 12 6z" />
    </>
  ),
  galeria: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="2" />
      <path d="m21 16-5-5-9 9" />
    </>
  ),
  hivas: (
    <path d="M5 4h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.1 6.1l1.4-2.3L20 15.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  ajanlat: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18M8 3v4M16 3v4M12 13v5M9.5 15.5h5" />
    </>
  ),
};

function Ikon({ nev }: { nev: keyof typeof ikonok }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {ikonok[nev]}
    </svg>
  );
}

export default function Alsosav() {
  const ut = usePathname();
  const aktiv = (href: string) => (href === "/" ? ut === "/" : ut.startsWith(href));
  const elem = (href: string, nev: keyof typeof ikonok, cim: string) => (
    <Link href={href} className="alsosav__elem" aria-current={aktiv(href) ? "page" : undefined}>
      <Ikon nev={nev} />
      <span>{cim}</span>
    </Link>
  );
  return (
    <nav className="alsosav" aria-label="Mobil menü">
      {elem("/", "kezdo", "Kezdőlap")}
      {elem("/rendezvenyek", "alkalmak", "Alkalmak")}
      <Link href="/ajanlatkeres" className="alsosav__fo" aria-current={aktiv("/ajanlatkeres") ? "page" : undefined}>
        <span className="alsosav__gomb">
          <Ikon nev="ajanlat" />
        </span>
        <span>Ajánlat</span>
      </Link>
      {elem("/galeria", "galeria", "Galéria")}
      <a href={vendeglo.telefon.href} className="alsosav__elem">
        <Ikon nev="hivas" />
        <span>Hívás</span>
      </a>
    </nav>
  );
}
