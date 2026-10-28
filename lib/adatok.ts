// A vendéglő tényadatai egy helyen. Ami „egyeztetendő”, azt a tulajdonossal
// kell pontosítani, mielőtt az oldal élesbe megy (lista: README.md).

export const vendeglo = {
  nev: "Kemencés Vendéglő",
  telepules: "Halásztelek",
  jelmondat: "Ahol jó lenni, ahol jókat lehet enni…",
  cim: { irsz: "2314", varos: "Halásztelek", utca: "II. Rákóczi Ferenc út 136." },
  telefon: { kijelzett: "+36 20 216 1015", href: "tel:+36202161015" },
  facebook: "https://www.facebook.com/kemencesvendeglohalasztelek",
  terkep: "https://www.google.com/maps/search/?api=1&query=Kemenc%C3%A9s+Vend%C3%A9gl%C5%91+Hal%C3%A1sztelek+R%C3%A1k%C3%B3czi+Ferenc+%C3%BAt+136",
  maxLetszam: 120,
  kartyak: ["Visa", "Mastercard", "Maestro", "V Pay"],
} as const;

export type Rendezveny = {
  kod: string;
  nev: string;
  rovid: string;
  kerdesek: string[];
  kep: string;
};

// A sorrend és a nevek a vendéglő krétatáblájáról valók.
export const rendezvenyek: Rendezveny[] = [
  {
    kod: "szuletesnap",
    kep: "/kepek/terem-50.jpg",
    nev: "Születésnap",
    rovid: "Kerek évforduló vagy csak egy jó ok, hogy együtt legyen a család és a baráti kör.",
    kerdesek: ["Hány éves lesz az ünnepelt?", "Hoztok tortát, vagy kérnétek?", "Lesz zene, köszöntő?"],
  },
  {
    kod: "eskuvo",
    kep: "/kepek/teritek-bordo.jpg",
    nev: "Esküvő",
    rovid: "Lakodalom 120 főig, a vacsorától a hajnali menüig egy helyen.",
    kerdesek: ["Mikor van a polgári vagy egyházi szertartás?", "Hány vendéggel számoltok?", "Lesz zenekar vagy DJ?"],
  },
  {
    kod: "csaladi",
    kep: "/kepek/terem-kemence.jpg",
    nev: "Családi összejövetel",
    rovid: "Évfordulók, ballagás, nagy családi ebéd, amikor otthon már kevés a hely.",
    kerdesek: ["Ebéd vagy vacsora?", "Lesznek gyerekek?", "Kell-e külön asztal valakinek?"],
  },
  {
    kod: "zart",
    kep: "/kepek/terem-turkiz.jpg",
    nev: "Zárt tárgyalás, céges esemény",
    rovid: "Megbeszélés, csapatvacsora vagy évzáró, idegenek nélkül.",
    kerdesek: ["Kell-e számla cégnévre?", "Hány órás lesz?", "Kell-e kivetítő vagy hangosítás?"],
  },
  {
    kod: "kereszteles",
    kep: "/kepek/lufikapu.jpg",
    nev: "Keresztelő",
    rovid: "A templom után ebéd a keresztszülőkkel és a nagy családdal.",
    kerdesek: ["Hánykor ér véget a szertartás?", "Hány gyerek lesz?", "Kell-e etetőszék?"],
  },
  {
    kod: "tor",
    kep: "/kepek/terasz.jpg",
    nev: "Halotti tor",
    rovid: "Csendes, méltó búcsú a temetés után. Ilyenkor a legegyszerűbb, ha felhívsz.",
    kerdesek: ["Mikor és hol lesz a temetés?", "Nagyjából hányan jönnek?"],
  },
  {
    kod: "elozene",
    kep: "/kepek/fenyfuggony.jpg",
    nev: "Élőzenés est",
    rovid: "Zenés vacsora, nótaest, buli: a terem és a terasz is jó hozzá.",
    kerdesek: ["Saját zenészt hoztok?", "Meddig tartana?"],
  },
  {
    kod: "egyeb",
    kep: "/kepek/gyumolcsasztal.jpg",
    nev: "Egyéb program",
    rovid: "Osztálytalálkozó, búcsúztató, egyesületi vacsora. Ha nem találod a listán, kérdezz.",
    kerdesek: ["Mi lesz az alkalom?", "Mire lesz szükségetek?"],
  },
];

export type Hely = {
  kod: string;
  nev: string;
  leiras: string;
  kep?: { src: string; alt: string };
  befogadas: string;
};

export const helyek: Hely[] = [
  {
    kod: "terem",
    nev: "A nagyterem",
    leiras:
      "Fa burkolat, gerendás mennyezet, parkettás tánctér, és a terem végében ott áll a kemence. Hosszú, terített asztalok, fehér székszoknya, az ablakokon túl a kert.",
    kep: { src: "/kepek/terem-50.jpg", alt: "A nagyterem kék-fehér terítéssel, fehér székszoknyákkal, fa burkolattal és téglafallal" },
    befogadas: "120 főig",
  },
  {
    kod: "terasz",
    nev: "A napvitorlás terasz",
    leiras: "Fapadok, kockás abrosz, fölötte napvitorla. A nagyterem üvegajtói egyenesen ide nyílnak.",
    kep: { src: "/kepek/terasz.jpg", alt: "A terasz napvitorlákkal, piros-fehér kockás abrosszal terített asztalokkal és fapadokkal" },
    befogadas: "egyeztetendő",
  },
  {
    kod: "pult",
    nev: "A pult",
    leiras: "Téglaburkolatú, kivilágított pult: innen indul a koccintás.",
    kep: { src: "/kepek/pult.jpg", alt: "A vendéglő téglaburkolatú, lila fénnyel megvilágított pultja a logóval és az elérhetőséggel" },
    befogadas: "a terem része",
  },
];

export type Kep = { src: string; alt: string; w: number; h: number; felirat: string };

// A képek a vendéglő Facebook-oldaláról valók.
export const galeria: Kep[] = [
  { src: "/kepek/terem-kemence.jpg", w: 1800, h: 1350, felirat: "A nagyterem, hátul a kemence", alt: "Terített nagyterem két hosszú asztalsorral, arany szalvétákkal, piros székekkel, a háttérben a kemence" },
  { src: "/kepek/terem-turkiz.jpg", w: 1800, h: 1350, felirat: "Türkiz-fehér terítés", alt: "A terem türkiz szalagos székszoknyákkal, fehér drapériával a mennyezeten, balra a tánctér" },
  { src: "/kepek/teritek-arany.jpg", w: 1350, h: 1800, felirat: "Hidegtál a terítéken", alt: "Hosszú asztal arany asztali futóval, tollas középdíszekkel, tányérokon rántott hús, fasírt, saláta" },
  { src: "/kepek/terem-50.jpg", w: 1800, h: 1350, felirat: "50. születésnap", alt: "Kék-fehér terítés, lufikapu és 50-es szám a fényfüggöny előtt" },
  { src: "/kepek/fenyfuggony.jpg", w: 1800, h: 1350, felirat: "Főasztal fényfüggönnyel", alt: "Főasztal fényfüggöny előtt, arany és ezüst lufik, arany masnis székek, terített tányérok" },
  { src: "/kepek/teritek-bordo.jpg", w: 1350, h: 1800, felirat: "Bordó-fehér terítés", alt: "Hosszú asztal bordó futóval, hajtogatott szalvétákkal, a háttérben a főasztal" },
  { src: "/kepek/szuletesnap-rozsaszin.jpg", w: 1800, h: 1350, felirat: "Rózsaszín születésnap", alt: "Rózsaszín pöttyös szalvéták, hidegtál és sütemény a terített asztalon, a mennyezeten lufik" },
  { src: "/kepek/gyumolcsasztal.jpg", w: 1800, h: 1350, felirat: "Gyümölcsasztal", alt: "Ananász, banán, szőlő és dinnye fatálakon, mögötte a kék-fehérre terített terem" },
  { src: "/kepek/lufikapu.jpg", w: 1800, h: 1350, felirat: "Lufifal a fa burkolat előtt", alt: "Fehér, arany és ezüst lufifal névtáblával a fa burkolatú fal előtt" },
  { src: "/kepek/terasz.jpg", w: 1536, h: 2048, felirat: "A terasz", alt: "Napvitorlás terasz kockás abrosszal terített asztalokkal" },
];

export const lepesek = [
  { cim: "Szólj", szoveg: "Hívj, vagy töltsd ki az ajánlatkérést: alkalom, dátum, nagyjából hány fő." },
  { cim: "Egyeztetünk", szoveg: "Átbeszéljük a menüt, a terítést, a zenét és mindent, ami fontos neked." },
  { cim: "Ünnepelj", szoveg: "A napon már csak meg kell érkezned. A többi a mi dolgunk." },
] as const;

export const gyik = [
  {
    k: "Be lehet ülni hozzátok rendezvény nélkül is?",
    v: "Nem: a vendéglőben nincs napi vendégfogadás, csak előre egyeztetett rendezvények vannak. Ezért mindig hívj vagy írj előre.",
  },
  {
    k: "Hány főt tudtok fogadni?",
    v: `Legfeljebb ${vendeglo.maxLetszam} főt. Kisebb társaságot is szívesen látunk.`,
  },
  {
    k: "Hozhatunk saját ételt vagy italt?",
    v: "A vendéglőbe ételt és italt behozni nem lehet. Ha egyedi kérésed van, írd meg az ajánlatkérésben, és megbeszéljük.",
  },
  {
    k: "Lehet kártyával fizetni?",
    v: `Igen, bankkártyát elfogadunk (${vendeglo.kartyak.join(", ")}).`,
  },
  {
    k: "Mennyibe kerül egy rendezvény?",
    v: "A létszámtól, a menütől és az alkalomtól függ, ezért nincs fix árlistánk. Az ajánlatkérés után pontos ajánlatot adunk.",
  },
] as const;
