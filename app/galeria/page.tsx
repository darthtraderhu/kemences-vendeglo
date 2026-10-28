import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Oldalfej from "@/components/Oldalfej";
import { galeria } from "@/lib/adatok";

export const metadata: Metadata = {
  title: "Galéria: korábbi rendezvényeink",
  description: "Terítések, dekorációk és a nagyterem különböző rendezvényeken. Képek a Kemencés Vendéglőből, Halásztelekről.",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaOldal() {
  return (
    <>
      <Oldalfej
        felcim="Galéria"
        cim="Ugyanaz a terem."
        dolt="Soha ugyanúgy."
        szoveg="Képek korábbi rendezvényekről. Ha tetszik egy terítés, írd meg az ajánlatkérésben."
        kep="/kepek/teritek-arany.jpg"
        kepAlt="Hosszú asztal arany futóval, tollas középdíszekkel és hidegtállal"
      />
      <section className="szakasz">
        <div className="belso">
          <div className="galeria">
            {galeria.map((k, i) => (
              <figure key={k.src}>
                <Image src={k.src} alt={k.alt} width={k.w} height={k.h} sizes="(max-width: 700px) 100vw, 33vw" />
                <figcaption>
                  <span>{String(i + 1).padStart(2, "0")}</span> {k.felirat}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="gombsor gombsor--kozep" style={{ marginTop: 40 }}>
            <Link className="gomb" href="/ajanlatkeres">
              Ilyet szeretnék →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
