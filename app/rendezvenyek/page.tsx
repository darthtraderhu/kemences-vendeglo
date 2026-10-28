import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Oldalfej from "@/components/Oldalfej";
import { rendezvenyek, vendeglo } from "@/lib/adatok";

export const metadata: Metadata = {
  title: "Rendezvények: születésnap, esküvő, keresztelő, halotti tor",
  description:
    "Milyen alkalmakra vállalunk rendezvényt Halásztelken, 120 főig, és mit jó előre tudnunk az ajánlathoz.",
  alternates: { canonical: "/rendezvenyek" },
};

export default function RendezvenyekOldal() {
  return (
    <>
      <Oldalfej
        felcim="Rendezvények"
        cim="Minden, ami ünnep."
        dolt="És ami búcsú."
        szoveg={`${vendeglo.maxLetszam} főig vállalunk zártkörű rendezvényt. Alkalmanként leírtuk, mit érdemes előre átgondolnod: így gyorsabban kapsz pontos ajánlatot.`}
        kep="/kepek/szuletesnap-rozsaszin.jpg"
        kepAlt="Rózsaszínre terített hosszú asztalok egy születésnapon, a mennyezeten fehér drapéria és lufik"
      />

      <section className="szakasz">
        <div className="belso alkalomlapok">
          {rendezvenyek.map((r, i) => (
            <article key={r.kod} id={r.kod} className={`alkalomlap${r.kod === "tor" ? " alkalomlap--csendes" : ""}`}>
              <div className="alkalomlap__kep">
                <Image src={r.kep} alt="" fill sizes="(max-width: 760px) 100vw, 30vw" />
                <span className="alkalomlap__szam">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="alkalomlap__szoveg">
                <h2>{r.nev}</h2>
                <p>{r.rovid}</p>
                <p className="kis-cimke">Amit jó, ha előre tudunk</p>
                <ul>
                  {r.kerdesek.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
                {r.kod === "tor" ? (
                  <a className="nyillink" href={vendeglo.telefon.href}>
                    Hívj: {vendeglo.telefon.kijelzett}
                  </a>
                ) : (
                  <Link className="nyillink" href={`/ajanlatkeres?alkalom=${r.kod}`}>
                    Ajánlatot kérek erre →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="kijelentes">
        <div className="belso ket-hasab">
          <div>
            <p className="cimke cimke--sotet">A menü</p>
            <p className="kijelentes__szoveg kijelentes__szoveg--kisebb">
              Nincs fix árlista. <em>Van egyeztetés.</em>
            </p>
          </div>
          <div>
            <p className="kijelentes__bekezdes">
              A menüt és a terítést a létszámhoz és az alkalomhoz igazítjuk, ezért az árat is az egyeztetés után
              mondjuk meg. Írd meg, mit képzelsz el, és pontos ajánlatot kapsz.
            </p>
            <Link className="gomb gomb--sotet" href="/ajanlatkeres">
              Ajánlatot kérek →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
