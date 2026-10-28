# Kemencés Vendéglő Halásztelek – weboldal

Next.js 16 / React 19 / TypeScript. Készítette: THE GBR (thegbr.eu), 2026. október.

## Indítás

```
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Vercelre úgy, ahogy van: új projekt, ez a mappa a gyökér. A `.env.example` alapján állítsd be a változókat.

## Oldalak

| útvonal | tartalom |
|---|---|
| `/` | nyitókép boltív-keretben a kemencével, futószalag, „csak rendezvény” kijelentés, 01–08 alkalomlista (rámutatásra kép), helyszín, vízszintes galériaszalag, 3 lépés, GYIK, óriás telefonszám |
| `/rendezvenyek` | 8 alkalom a krétatábláról, mindegyiknél „amit jó, ha előre tudunk”, menü = egyeztetés |
| `/helyszin` | nagyterem, terasz, pult |
| `/galeria` | 10 kép a Facebook-oldalról |
| `/ajanlatkeres` | 3 blokkos űrlap (alkalom → dátum/létszám/hely → elérhetőség), Zod-ellenőrzés szerveroldalon, max. 120 fő |
| `/kapcsolat` | adatok, útvonaltervezés-link (nincs beágyazott térkép, így sütibanner sem kell) |
| `/adatkezeles` | váz, kitöltendő |

Minden tényadat egy helyen: `lib/adatok.ts`. Sitemap, robots, JSON-LD (Restaurant + EventVenue), egyedi title/description oldalanként.

## Arculat: „Tűz és asztal”

Éjszakai alap (`#0E0A08`), a nagyterem fájának meleg tónusai, kiemelés arannyal (`#E2B764`), ami a terítékeken és a fényfüggönyökön is ott van.
Betűk: Bricolage Grotesque (szűkített, óriás címek és törzsszöveg), Instrument Serif dőlt (arany kiemelések), Great Vibes (a logó közelítése).
Motívumok: kemenceboltív alakú képkeretek, felszálló fényszikrák, forgó körpecsét, futószalag. Minden mozgás kikapcsol, ha a látogató csökkentett mozgást kér.
A narancs homlokzat már fa borítású, ezért sem a narancs, sem a régi homlokzatfotó nem szerepel.

## Ajánlatkérés kézbesítése

Az űrlap a Resend levelezőszolgáltatáson keresztül küld e-mailt (`RESEND_API_KEY`, `AJANLAT_CIMZETT`, `AJANLAT_FELADO`).
Csak akkor írja ki, hogy „megkaptuk”, ha a szolgáltatás visszaadta a levél azonosítóját. Ha nincs beállítva vagy hibázik,
az adatok az űrlapon maradnak, és a telefonszámot ajánlja fel. Ingyenes kerettel elég egy vendéglőnek; a feladó domaint igazolni kell.

## Élesítés előtt egyeztetendő a tulajdonossal

- [ ] Eredeti logófájl (SVG/PNG) – most a kézírásos jel közelítése áll a helyén (`components/Logo.tsx`)
- [ ] Domain (→ `SITE_URL`), és melyik e-mail-címre menjenek az ajánlatkérések
- [ ] Terasz befogadóképessége (most: „egyeztetendő”)
- [ ] Fotó az új, fa borítású homlokzatról; és megnézni, hogy a teraszfotó (narancs oszlopok) aktuális-e még
- [ ] Telefonos elérhetőség időszaka, ha van
- [ ] Parkolás, akadálymentesség – ha van mit írni, a GYIK-be
- [ ] Ellenőrizni: a dekorációt (szalagok, drapéria, lufi) a vendéglő intézi-e, vagy a vendég hozza – a `/rendezvenyek` menü-blokkja most azt írja, hogy a dekorációt is az alkalomhoz igazítjuk
- [ ] Ellenőrizni: van-e lehetőség körbevezetésre (`/helyszin` alja)
- [ ] Ellenőrizni: torta behozható-e (a GYIK most csak annyit mond, hogy egyedi kérést írd meg)
- [ ] Adatkezelési tájékoztató: üzemeltető cég adatai + Resend mint adatfeldolgozó
- [ ] Impresszum (cégnév, székhely, adószám) a láblécbe vagy külön oldalra

A képek a vendéglő Facebook-oldaláról valók; a személyeket ábrázoló képeket szándékosan kihagytuk.
