"use client";

import { useActionState, useState } from "react";
import { ajanlatKuldes } from "@/app/ajanlatkeres/action";
import type { AjanlatAllapot } from "@/lib/ajanlat";
import { rendezvenyek, vendeglo } from "@/lib/adatok";

const kezdo: AjanlatAllapot = { allapot: "ures" };

export default function AjanlatUrlap({ alapAlkalom }: { alapAlkalom?: string }) {
  const [allapot, kuldes, folyamatban] = useActionState(ajanlatKuldes, kezdo);
  const ertek = (k: string, alap = "") =>
    allapot.allapot === "hibas" || allapot.allapot === "nem_elerheto" ? (allapot.ertekek[k] ?? alap) : alap;
  const hiba = (k: string) => (allapot.allapot === "hibas" ? allapot.hibak[k as keyof typeof allapot.hibak] : undefined);
  const [alkalom, setAlkalom] = useState(ertek("alkalom", alapAlkalom ?? ""));
  const kivalasztott = rendezvenyek.find((r) => r.kod === alkalom);

  if (allapot.allapot === "elkuldve") {
    return (
      <div className="urlap-kesz" role="status">
        <p className="kreta">Köszönjük, {allapot.nev}!</p>
        <h2>Megkaptuk az ajánlatkérésed.</h2>
        <p>
          Hamarosan visszahívunk a megadott számon a(z) {allapot.datum} napi rendezvény ügyében. Ha sürgős,
          hívj most: <a href={vendeglo.telefon.href}>{vendeglo.telefon.kijelzett}</a>.
        </p>
      </div>
    );
  }

  const ma = new Date().toISOString().slice(0, 10);

  return (
    <form action={kuldes} className="urlap" noValidate>
      {allapot.allapot === "nem_elerheto" && (
        <div className="urlap-figyelem" role="alert">
          Most nem sikerült elküldeni az ajánlatkérést. Hívj minket:{" "}
          <a href={vendeglo.telefon.href}>{vendeglo.telefon.kijelzett}</a>. Az adataid megmaradtak az űrlapon.
        </div>
      )}

      <fieldset className="urlap__blokk">
        <legend>
          <span className="urlap__szam">1</span> Milyen alkalom?
        </legend>
        <div className="csipek">
          {rendezvenyek.map((r) => (
            <label key={r.kod} className="csip">
              <input
                type="radio"
                name="alkalom"
                value={r.kod}
                checked={alkalom === r.kod}
                onChange={() => setAlkalom(r.kod)}
              />
              <span>{r.nev}</span>
            </label>
          ))}
        </div>
        {hiba("alkalom") && <p className="urlap__hiba">{hiba("alkalom")}</p>}
        {kivalasztott && (
          <p className="urlap__tipp">
            <span className="kreta">Amit jó, ha előre tudunk:</span> {kivalasztott.kerdesek.join(" ")}
          </p>
        )}
      </fieldset>

      <fieldset className="urlap__blokk">
        <legend>
          <span className="urlap__szam">2</span> Mikor, hányan, hol?
        </legend>
        <div className="urlap__racs">
          <label className="mezo">
            <span>Dátum</span>
            <input type="date" name="datum" min={ma} defaultValue={ertek("datum")} required aria-invalid={!!hiba("datum")} />
            {hiba("datum") && <em className="urlap__hiba">{hiba("datum")}</em>}
          </label>
          <label className="mezo">
            <span>Létszám (fő)</span>
            <input
              type="number"
              name="letszam"
              min={1}
              max={vendeglo.maxLetszam}
              inputMode="numeric"
              defaultValue={ertek("letszam")}
              required
              aria-invalid={!!hiba("letszam")}
            />
            {hiba("letszam") && <em className="urlap__hiba">{hiba("letszam")}</em>}
          </label>
          <label className="mezo">
            <span>Hol lenne?</span>
            <select name="hely" defaultValue={ertek("hely", "mindegy")}>
              <option value="mindegy">Mindegy, javasoljatok</option>
              <option value="terem">Nagyterem</option>
              <option value="terasz">Terasz</option>
            </select>
          </label>
        </div>
        <label className="pipa">
          <input type="checkbox" name="rugalmas" defaultChecked={ertek("rugalmas") === "on"} />
          <span>A dátum rugalmas, pár nap ide vagy oda belefér.</span>
        </label>
      </fieldset>

      <fieldset className="urlap__blokk">
        <legend>
          <span className="urlap__szam">3</span> Kit keressünk?
        </legend>
        <div className="urlap__racs">
          <label className="mezo">
            <span>Neved</span>
            <input name="nev" autoComplete="name" defaultValue={ertek("nev")} required aria-invalid={!!hiba("nev")} />
            {hiba("nev") && <em className="urlap__hiba">{hiba("nev")}</em>}
          </label>
          <label className="mezo">
            <span>Telefonszám</span>
            <input
              name="telefon"
              type="tel"
              autoComplete="tel"
              defaultValue={ertek("telefon")}
              required
              aria-invalid={!!hiba("telefon")}
            />
            {hiba("telefon") && <em className="urlap__hiba">{hiba("telefon")}</em>}
          </label>
          <label className="mezo">
            <span>
              E-mail <small>(nem kötelező)</small>
            </span>
            <input name="email" type="email" autoComplete="email" defaultValue={ertek("email")} aria-invalid={!!hiba("email")} />
            {hiba("email") && <em className="urlap__hiba">{hiba("email")}</em>}
          </label>
        </div>
        <label className="mezo">
          <span>Bármi, amit tudnunk kell</span>
          <textarea
            name="uzenet"
            rows={5}
            defaultValue={ertek("uzenet")}
            placeholder="Menü, zene, torta, gyerekek, ételérzékenység, kezdés időpontja…"
          />
          {hiba("uzenet") && <em className="urlap__hiba">{hiba("uzenet")}</em>}
        </label>
        <label className="rejtett" aria-hidden="true">
          Weboldal <input name="weboldal" tabIndex={-1} autoComplete="off" />
        </label>
        <label className="pipa">
          <input type="checkbox" name="hozzajarulas" defaultChecked={ertek("hozzajarulas") === "on"} required />
          <span>
            Elolvastam az <a href="/adatkezeles">adatkezelési tájékoztatót</a>, és hozzájárulok, hogy az ajánlatkérés
            miatt felvegyétek velem a kapcsolatot.
          </span>
        </label>
        {hiba("hozzajarulas") && <p className="urlap__hiba">{hiba("hozzajarulas")}</p>}
      </fieldset>

      <div className="urlap__kuld">
        <button className="gomb" type="submit" disabled={folyamatban}>
          {folyamatban ? "Küldés…" : "Ajánlatkérés elküldése"}
        </button>
        <p>
          Inkább beszélnél? <a href={vendeglo.telefon.href}>{vendeglo.telefon.kijelzett}</a>
        </p>
      </div>
    </form>
  );
}
