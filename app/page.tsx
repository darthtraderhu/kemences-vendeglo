import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Alkalmak from "@/components/Alkalmak";
import Futoszalag from "@/components/Futoszalag";
import Gyik from "@/components/Gyik";
import Lepesek from "@/components/Lepesek";
import Parazs from "@/components/Parazs";
import Pecset from "@/components/Pecset";
import { galeria, helyek, vendeglo } from "@/lib/adatok";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Fooldal() {
  return (
    <>
      {/* Nyitókép */}
      <section className="nyito">
        <Parazs />
        <div className="belso nyito__racs">
          <div className="nyito__szoveg">
            <p className="cimke">Rendezvényhelyszín · Halásztelek</p>
            <h1 className="ori nyito__cim">
              <span>Te ünnepelsz.</span>
              <em>Mi terítünk.</em>
            </h1>
            <p className="nyito__alcim">
              Születésnap, esküvő, keresztelő, családi összejövetel, halotti tor, {vendeglo.maxLetszam} főig. Fa,
              tégla, és a terem végében egy igazi kemence.
            </p>
            <div className="gombsor">
              <Link className="gomb" href="/ajanlatkeres">
                Ajánlatot kérek <span aria-hidden="true">→</span>
              </Link>
              <a className="gomb gomb--szellem" href={vendeglo.telefon.href}>
                {vendeglo.telefon.kijelzett}
              </a>
            </div>
          </div>
          <div className="nyito__kepoldal">
            <div className="izzas" aria-hidden="true" />
            <div className="boltiv nyito__kep">
              <Image
                src="/kepek/nyito-kemence.jpg"
                alt="A nagyterem végében a kemence, előtte terített hosszú asztal piros székekkel"
                fill
                priority
                sizes="(max-width: 860px) 90vw, 44vw"
              />
            </div>
            <Pecset />
            <p className="nyito__jelmondat">{vendeglo.jelmondat}</p>
          </div>
        </div>
      </section>

      <Futoszalag />

      {/* Kijelentés: csak rendezvény */}
      <section className="kijelentes">
        <div className="belso">
          <p className="cimke cimke--sotet">Fontos tudni</p>
          <p className="kijelentes__szoveg">
            Nálunk nincs napi menü, és nincs véletlen vendég. <em>Amikor nyitunk, az a te napod.</em>
          </p>
          <div className="kijelentes__tenyek">
            <div>
              <b>{vendeglo.maxLetszam}</b>
              <span>fő fér el a nagyteremben</span>
            </div>
            <div>
              <b>8</b>
              <span>féle alkalom, és ami kimaradt, arra is van hely</span>
            </div>
            <div>
              <b>1</b>
              <span>igazi kemence a nagyterem végében</span>
            </div>
          </div>
        </div>
      </section>

      {/* Alkalmak */}
      <section className="szakasz">
        <div className="belso">
          <div className="szakaszfej">
            <p className="cimke">Mit vállalunk</p>
            <h2 className="ori">
              Minden, ami ünnep. <em>És ami búcsú.</em>
            </h2>
          </div>
          <Alkalmak />
        </div>
      </section>

      {/* Helyszín */}
      <section className="szakasz helyszin">
        <div className="belso">
          <div className="szakaszfej">
            <p className="cimke">A helyszín</p>
            <h2 className="ori">
              Fa. Tégla. <em>Tűz.</em>
            </h2>
          </div>
          <div className="helyek">
            {helyek.map((h, i) => (
              <article key={h.kod} className={`hely hely--${i}`}>
                {h.kep && (
                  <div className={`hely__kep${i === 0 ? " boltiv" : ""}`}>
                    <Image src={h.kep.src} alt={h.kep.alt} fill sizes="(max-width: 860px) 100vw, 40vw" />
                  </div>
                )}
                <div className="hely__szoveg">
                  <span className="hely__befogadas">{h.befogadas}</span>
                  <h3>{h.nev}</h3>
                  <p>{h.leiras}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Galéria: vízszintes szalag */}
      <section className="szakasz galeriaszalag">
        <div className="belso szakaszfej szakaszfej--sor">
          <div>
            <p className="cimke">Galéria</p>
            <h2 className="ori">
              Ugyanaz a terem. <em>Soha ugyanúgy.</em>
            </h2>
          </div>
          <Link className="gomb gomb--szellem" href="/galeria">
            Összes kép
          </Link>
        </div>
        <div className="szalag" tabIndex={0} aria-label="Képek korábbi rendezvényekről, vízszintesen görgethető">
          {galeria.slice(0, 9).map((k, i) => (
            <figure key={k.src} className={i % 3 === 1 ? "szalag__boltiv" : undefined}>
              <div className="szalag__kep">
                <Image src={k.src} alt={k.alt} fill sizes="(max-width: 700px) 80vw, 30vw" loading={i < 5 ? "eager" : "lazy"} />
              </div>
              <figcaption>
                <span>{String(i + 1).padStart(2, "0")}</span> {k.felirat}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Folyamat */}
      <section className="szakasz folyamat">
        <div className="belso">
          <div className="szakaszfej">
            <p className="cimke">Hogyan megy</p>
            <h2 className="ori">
              Három lépés, <em>és már csak koccintani kell.</em>
            </h2>
          </div>
          <Lepesek />
        </div>
      </section>

      {/* GYIK */}
      <section className="szakasz">
        <div className="belso ket-hasab">
          <div>
            <p className="cimke">Gyakori kérdések</p>
            <h2 className="ori">
              Mielőtt <em>hívnál.</em>
            </h2>
          </div>
          <Gyik />
        </div>
      </section>

      {/* Zárás */}
      <section className="zaras">
        <Image src="/kepek/fenyfuggony.jpg" alt="" fill sizes="100vw" className="zaras__hatter" />
        <Parazs />
        <div className="belso zaras__belso">
          <p className="cimke">Foglalj időpontot</p>
          <h2 className="ori">
            Melyik napod <em>legyen a miénk?</em>
          </h2>
          <a className="zaras__tel" href={vendeglo.telefon.href}>
            {vendeglo.telefon.kijelzett}
          </a>
          <div className="gombsor gombsor--kozep">
            <Link className="gomb" href="/ajanlatkeres">
              Ajánlatot kérek <span aria-hidden="true">→</span>
            </Link>
            <Link className="gomb gomb--szellem" href="/kapcsolat">
              Útvonal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
