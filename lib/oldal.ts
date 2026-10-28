// A kanonikus cím a SITE_URL környezeti változóból jön (lásd .env.example).
// Séma nélkül is elfogadjuk („www.domain.hu”), hibás értéknél a végleges domainre esünk vissza,
// hogy egy elírt környezeti változó ne döntse el a buildet.
const alapCim = "https://www.kemenceshalasztelek.hu";

function kanonikus(nyers: string | undefined): string {
  const ertek = nyers?.trim();
  if (!ertek) return alapCim;
  try {
    return new URL(/^https?:\/\//.test(ertek) ? ertek : `https://${ertek}`).origin;
  } catch {
    return alapCim;
  }
}

export const siteUrl = kanonikus(process.env.SITE_URL);

export const menupontok = [
  { href: "/rendezvenyek", cim: "Rendezvények" },
  { href: "/helyszin", cim: "Helyszín" },
  { href: "/galeria", cim: "Galéria" },
  { href: "/kapcsolat", cim: "Kapcsolat" },
] as const;
