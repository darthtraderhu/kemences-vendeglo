import { z } from "zod";
import { rendezvenyek, vendeglo } from "@/lib/adatok";

const kodok = rendezvenyek.map((r) => r.kod) as [string, ...string[]];

export const ajanlatSema = z.object({
  alkalom: z.enum(kodok, { error: "Válaszd ki, milyen alkalomról van szó." }),
  datum: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Adj meg egy dátumot.")
    .refine((d) => d >= new Date().toISOString().slice(0, 10), "A dátum nem lehet a múltban."),
  rugalmas: z.boolean(),
  letszam: z.preprocess(
    (v) => (v === "" || v === undefined ? undefined : Number(v)),
    z
      .number({ error: "Adj meg egy létszámot." })
      .int("Egész számot adj meg.")
      .min(1, "Legalább 1 fő.")
      .max(vendeglo.maxLetszam, `Legfeljebb ${vendeglo.maxLetszam} főt tudunk fogadni.`),
  ),
  hely: z.enum(["terem", "terasz", "mindegy"]),
  nev: z.string().trim().min(2, "Add meg a neved.").max(100),
  telefon: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s/-]{7,18}$/, "Adj meg egy telefonszámot, amin elérünk."),
  email: z.union([z.literal(""), z.email("Ez nem tűnik e-mail-címnek.")]),
  uzenet: z.string().trim().max(2000, "Legfeljebb 2000 karakter."),
  hozzajarulas: z.literal(true, { error: "Ehhez el kell fogadnod az adatkezelési tájékoztatót." }),
});

export type Ajanlat = z.infer<typeof ajanlatSema>;

export type AjanlatAllapot =
  | { allapot: "ures" }
  | { allapot: "hibas"; hibak: Partial<Record<keyof Ajanlat, string>>; ertekek: Record<string, string> }
  | { allapot: "nem_elerheto"; ertekek: Record<string, string> }
  | { allapot: "elkuldve"; azonosito: string; nev: string; datum: string };
