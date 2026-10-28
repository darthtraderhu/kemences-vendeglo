import Link from "next/link";
import Logo from "@/components/Logo";
import { vendeglo } from "@/lib/adatok";
import { menupontok } from "@/lib/oldal";

export default function Fejlec() {
  return (
    <header className="fejlec">
      <div className="fejlec__belso">
        <Link href="/" className="fejlec__logo">
          <Logo />
        </Link>
        <nav aria-label="Fő menü" className="fejlec__menu">
          {menupontok.map((m) => (
            <Link key={m.href} href={m.href}>
              {m.cim}
            </Link>
          ))}
        </nav>
        <div className="fejlec__cta">
          <a className="fejlec__tel" href={vendeglo.telefon.href}>
            {vendeglo.telefon.kijelzett}
          </a>
          <Link className="gomb gomb--kicsi" href="/ajanlatkeres">
            Ajánlatot kérek
          </Link>
        </div>
      </div>
      <nav aria-label="Mobil menü" className="fejlec__mobilmenu">
        {menupontok.map((m) => (
          <Link key={m.href} href={m.href}>
            {m.cim}
          </Link>
        ))}
      </nav>
    </header>
  );
}
