import Link from "next/link";
import Logo from "@/components/Logo";
import { vendeglo } from "@/lib/adatok";
import { menupontok } from "@/lib/oldal";

export default function Lablec() {
  const ev = new Date().getFullYear();
  return (
    <footer className="lablec">
      <div className="lablec__belso">
        <div>
          <Logo meret="lablec" />
          <p className="lablec__jelmondat">{vendeglo.jelmondat}</p>
        </div>
        <address className="lablec__cim">
          {vendeglo.cim.irsz} {vendeglo.cim.varos}
          <br />
          {vendeglo.cim.utca}
          <br />
          <a href={vendeglo.telefon.href}>{vendeglo.telefon.kijelzett}</a>
          <br />
          <a href={vendeglo.facebook} rel="noopener" target="_blank">
            Facebook ↗
          </a>
        </address>
        <nav aria-label="Lábléc" className="lablec__menu">
          {menupontok.map((m) => (
            <Link key={m.href} href={m.href}>
              {m.cim}
            </Link>
          ))}
          <Link href="/ajanlatkeres">Ajánlatkérés</Link>
          <Link href="/adatkezeles">Adatkezelés</Link>
        </nav>
      </div>
      <div className="lablec__also">
        <span>© {ev} {vendeglo.nev}</span>
        <a className="lablec__keszitette" href="https://thegbr.eu">
          Készítette: <b>THE GBR</b>
        </a>
      </div>
    </footer>
  );
}
