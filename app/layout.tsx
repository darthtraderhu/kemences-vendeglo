import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat, Great_Vibes, Instrument_Serif } from "next/font/google";
import Alsosav from "@/components/Alsosav";
import Fejlec from "@/components/Fejlec";
import Lablec from "@/components/Lablec";
import { vendeglo } from "@/lib/adatok";
import { siteUrl } from "@/lib/oldal";
import "./globals.css";

const torzs = Bricolage_Grotesque({ subsets: ["latin", "latin-ext"], axes: ["wdth", "opsz"], variable: "--f-body" });
const display = Instrument_Serif({ subsets: ["latin", "latin-ext"], weight: "400", style: ["normal", "italic"], variable: "--f-display" });
const iras = Great_Vibes({ subsets: ["latin", "latin-ext"], weight: "400", variable: "--f-iras" });
const kreta = Caveat({ subsets: ["latin", "latin-ext"], weight: ["500", "700"], variable: "--f-kreta" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kemencés Vendéglő Halásztelek · Rendezvények 120 főig",
    template: "%s · Kemencés Vendéglő Halásztelek",
  },
  description:
    "Születésnap, esküvő, keresztelő, családi összejövetel, halotti tor és zártkörű események 120 főig Halásztelken. Kérj ajánlatot vagy hívj: +36 20 216 1015.",
  openGraph: { type: "website", locale: "hu_HU", siteName: vendeglo.nev, images: ["/kepek/terem-kemence.jpg"] },
};

// Strukturált adat a keresőknek és a mesterséges intelligenciás válaszmotoroknak.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "EventVenue"],
  name: `${vendeglo.nev} ${vendeglo.telepules}`,
  slogan: vendeglo.jelmondat,
  url: siteUrl,
  image: `${siteUrl}/kepek/terem-kemence.jpg`,
  telephone: "+36202161015",
  address: {
    "@type": "PostalAddress",
    streetAddress: vendeglo.cim.utca,
    postalCode: vendeglo.cim.irsz,
    addressLocality: vendeglo.cim.varos,
    addressCountry: "HU",
  },
  maximumAttendeeCapacity: vendeglo.maxLetszam,
  paymentAccepted: "Készpénz, bankkártya",
  sameAs: [vendeglo.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${display.variable} ${torzs.variable} ${iras.variable} ${kreta.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <a className="ugras" href="#tartalom">Ugrás a tartalomra</a>
        <Fejlec />
        <main id="tartalom">{children}</main>
        <Lablec />
        <Alsosav />
      </body>
    </html>
  );
}
