import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adatkezelési tájékoztató",
  description: "Hogyan kezeljük az ajánlatkérésben megadott adataidat.",
  alternates: { canonical: "/adatkezeles" },
};

// A jogi szöveg a vendéglő adataival készül el; kitalált adatkezelői adat nem kerülhet ide.
export default function AdatkezelesOldal() {
  return (
    <section className="szakasz">
      <div className="belso szoveg">
        <h1 className="ori ori--kozep">Adatkezelési <em>tájékoztató</em></h1>
        <p className="megjegyzes">
          Élesítés előtt kitöltendő: az üzemeltető cég neve, székhelye, adószáma, elérhetősége, valamint az
          ajánlatkérés kézbesítéséhez használt levelezőszolgáltatás mint adatfeldolgozó.
        </p>
        <h2>Milyen adatot kérünk?</h2>
        <p>
          Az ajánlatkérésben a nevedet, a telefonszámodat, nem kötelezően az e-mail-címedet, valamint a rendezvény
          adatait (alkalom, dátum, létszám, üzenet).
        </p>
        <h2>Mire használjuk?</h2>
        <p>Kizárólag arra, hogy visszahívjunk, és ajánlatot adjunk a rendezvényedre.</p>
        <h2>Sütik</h2>
        <p>Az oldal nem használ követő- vagy hirdetési sütiket, és nem ágyaz be külső térképet.</p>
      </div>
    </section>
  );
}
