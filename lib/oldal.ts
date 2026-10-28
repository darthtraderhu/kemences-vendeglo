// A kanonikus cím a SITE_URL környezeti változóból jön (lásd .env.example).
export const siteUrl = (process.env.SITE_URL ?? "https://www.kemenceshalasztelek.hu").replace(/\/$/, "");

export const menupontok = [
  { href: "/rendezvenyek", cim: "Rendezvények" },
  { href: "/helyszin", cim: "Helyszín" },
  { href: "/galeria", cim: "Galéria" },
  { href: "/kapcsolat", cim: "Kapcsolat" },
] as const;
