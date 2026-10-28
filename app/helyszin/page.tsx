import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Oldalfej from "@/components/Oldalfej";
import { helyek, vendeglo } from "@/lib/adatok";

export const metadata: Metadata = {
  title: "A helyszín: nagyterem kemencével, napvitorlás terasz",
  description:
    "Fa burkolatú nagyterem kemencével és tánctérrel, napvitorlás terasz, téglapult. Rendezvényhelyszín 120 főig Halásztelken.",
  alternates: { canonical: "/helyszin" },
};

export default function HelyszinOldal() {
  return (
    <>
      <Oldalfej
        felcim="A helyszín"
        cim="Fa. Tégla."
        dolt="Tűz."
        szoveg={`${vendeglo.cim.irsz} ${vendeglo.cim.varos}, ${vendeglo.cim.utca} A nagyterem ${vendeglo.maxLetszam} főt fogad; nyáron a terasz is a tiétek.`}
        kep="/kepek/terem-turkiz.jpg"
        kepAlt="A nagyterem fa mennyezettel, fehér drapériával, türkiz szalagos székekkel"
      />
      {helyek.map((h, i) => (
        <section key={h.kod} className="szakasz">
          <div className={`belso ket-hasab${i % 2 ? " ket-hasab--fordit" : ""}`}>
            <div>
              <span className="hely__befogadas">{h.befogadas}</span>
              <h2 className="ori ori--kozep">{h.nev}</h2>
              <p className="nagy-bekezdes">{h.leiras}</p>
            </div>
            {h.kep && (
              <div className={`helykep${i === 0 ? " boltiv" : ""}`}>
                <Image src={h.kep.src} alt={h.kep.alt} fill sizes="(max-width: 860px) 100vw, 50vw" />
              </div>
            )}
          </div>
        </section>
      ))}
      <section className="szakasz">
        <div className="belso kozep">
          <h2 className="ori ori--kozep">
            Megnéznéd <em>személyesen?</em>
          </h2>
          <p className="nagy-bekezdes">Hívj, és egyeztessünk egy időpontot.</p>
          <div className="gombsor gombsor--kozep">
            <a className="gomb" href={vendeglo.telefon.href}>
              {vendeglo.telefon.kijelzett}
            </a>
            <Link className="gomb gomb--szellem" href="/ajanlatkeres">
              Ajánlatkérés
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
