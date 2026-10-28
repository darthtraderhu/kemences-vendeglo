"use server";

import { ajanlatSema, type Ajanlat, type AjanlatAllapot } from "@/lib/ajanlat";
import { rendezvenyek } from "@/lib/adatok";

const helyNev = { terem: "nagyterem", terasz: "terasz", mindegy: "mindegy" } as const;

function levelSzoveg(a: Ajanlat): string {
  const alkalom = rendezvenyek.find((r) => r.kod === a.alkalom)?.nev ?? a.alkalom;
  return [
    `Alkalom: ${alkalom}`,
    `Dátum: ${a.datum}${a.rugalmas ? " (rugalmas)" : ""}`,
    `Létszám: ${a.letszam} fő`,
    `Helyszín: ${helyNev[a.hely]}`,
    `Név: ${a.nev}`,
    `Telefon: ${a.telefon}`,
    `E-mail: ${a.email || "nem adta meg"}`,
    "",
    a.uzenet || "(nincs üzenet)",
  ].join("\n");
}

export async function ajanlatKuldes(_elozo: AjanlatAllapot, adat: FormData): Promise<AjanlatAllapot> {
  const ertekek: Record<string, string> = {};
  for (const [k, v] of adat.entries()) if (typeof v === "string") ertekek[k] = v;

  // Rejtett mező: ember nem tölti ki, a robotok igen.
  if (ertekek.weboldal) return { allapot: "ures" };

  const eredmeny = ajanlatSema.safeParse({
    ...ertekek,
    rugalmas: ertekek.rugalmas === "on",
    hozzajarulas: ertekek.hozzajarulas === "on",
  });
  if (!eredmeny.success) {
    const hibak: Partial<Record<keyof Ajanlat, string>> = {};
    for (const h of eredmeny.error.issues) {
      const mezo = h.path[0] as keyof Ajanlat;
      hibak[mezo] ??= h.message;
    }
    return { allapot: "hibas", hibak, ertekek };
  }

  const kulcs = process.env.RESEND_API_KEY;
  const cimzett = process.env.AJANLAT_CIMZETT;
  const felado = process.env.AJANLAT_FELADO;
  if (!kulcs || !cimzett || !felado) return { allapot: "nem_elerheto", ertekek };

  const a = eredmeny.data;
  const valasz = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${kulcs}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: felado,
      to: [cimzett],
      reply_to: a.email || undefined,
      subject: `Ajánlatkérés: ${a.datum}, ${a.letszam} fő (${a.nev})`,
      text: levelSzoveg(a),
    }),
  }).catch(() => null);

  // Csak akkor mondjuk, hogy elment, ha a levelező szolgáltatás visszaadta az azonosítóját.
  const test: unknown = valasz?.ok ? await valasz.json().catch(() => null) : null;
  const azonosito =
    test && typeof test === "object" && "id" in test && typeof test.id === "string" ? test.id : null;
  if (!azonosito) return { allapot: "nem_elerheto", ertekek };

  return { allapot: "elkuldve", azonosito, nev: a.nev, datum: a.datum };
}
