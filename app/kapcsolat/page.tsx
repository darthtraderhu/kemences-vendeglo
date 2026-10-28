import type { Metadata } from "next";
import Link from "next/link";
import Oldalfej from "@/components/Oldalfej";
import { vendeglo } from "@/lib/adatok";

export const metadata: Metadata = {
  title: "Kapcsolat és útvonal",
  description: "Kemencés Vendéglő, 2314 Halásztelek, II. Rákóczi Ferenc út 136. Telefon: +36 20 216 1015.",
  alternates: { canonical: "/kapcsolat" },
};

export default function KapcsolatOldal() {
  return (
    <>
      <Oldalfej
        felcim="Kapcsolat"
        cim="Hívj, írj,"
        dolt="vagy gyere el."
        szoveg="Rendezvényt telefonon a leggyorsabb egyeztetni."
        kep="/kepek/terasz.jpg"
        kepAlt="A napvitorlás terasz terített asztalokkal"
      />
      <section className="szakasz">
        <div className="belso">
          <a className="oriastel" href={vendeglo.telefon.href}>
            {vendeglo.telefon.kijelzett}
          </a>
          <div className="adatracs">
            <div>
              <p className="kis-cimke">Cím</p>
              <p>
                {vendeglo.cim.irsz} {vendeglo.cim.varos}
                <br />
                {vendeglo.cim.utca}
              </p>
              {/* Beágyazott térkép helyett link: így a látogatótól nem kell sütihozzájárulást kérni. */}
              <a className="nyillink" href={vendeglo.terkep} target="_blank" rel="noopener">
                Útvonaltervezés ↗
              </a>
            </div>
            <div>
              <p className="kis-cimke">Facebook</p>
              <p>Friss képek a rendezvényekről.</p>
              <a className="nyillink" href={vendeglo.facebook} target="_blank" rel="noopener">
                kemencesvendeglohalasztelek ↗
              </a>
            </div>
            <div>
              <p className="kis-cimke">Fizetés</p>
              <p>Készpénz és bankkártya ({vendeglo.kartyak.join(", ")}).</p>
              <Link className="nyillink" href="/ajanlatkeres">
                Ajánlatkérés →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
