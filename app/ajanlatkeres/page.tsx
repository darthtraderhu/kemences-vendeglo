import type { Metadata } from "next";
import AjanlatUrlap from "@/components/AjanlatUrlap";
import Parazs from "@/components/Parazs";
import { rendezvenyek, vendeglo } from "@/lib/adatok";

export const metadata: Metadata = {
  title: "Ajánlatkérés rendezvényre",
  description: "Írd meg az alkalmat, a dátumot és a létszámot, és visszahívunk egy pontos ajánlattal. 120 főig, Halásztelken.",
  alternates: { canonical: "/ajanlatkeres" },
};

export default async function AjanlatkeresOldal({ searchParams }: { searchParams: Promise<{ alkalom?: string }> }) {
  const { alkalom } = await searchParams;
  const alap = rendezvenyek.some((r) => r.kod === alkalom) ? alkalom : undefined;
  return (
    <section className="ajanlatoldal">
      <Parazs />
      <div className="belso ajanlatoldal__racs">
        <div className="ajanlatoldal__fej">
          <p className="cimke">Ajánlatkérés</p>
          <h1 className="ori">
            Mesélj <em>az ünnepről.</em>
          </h1>
          <p className="oldalfej__szoveg">
            Három rövid blokk, két perc. Utána visszahívunk, és együtt összerakjuk a részleteket.
          </p>
          <p className="ajanlatoldal__tel">
            Sietős?
            <a href={vendeglo.telefon.href}>{vendeglo.telefon.kijelzett}</a>
          </p>
        </div>
        <AjanlatUrlap alapAlkalom={alap} />
      </div>
    </section>
  );
}
