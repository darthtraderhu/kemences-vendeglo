import Image from "next/image";

// A vendéglő logója, a feltöltött fájlból vektorosítva (public/logo/).
export default function Logo({ meret = "fejlec" }: { meret?: "fejlec" | "lablec" }) {
  return (
    <Image
      className={`logo logo--${meret}`}
      src="/logo/kemences-logo-arany.svg"
      alt="Kemencés Vendéglő Halásztelek"
      width={562}
      height={394}
      unoptimized
      priority={meret === "fejlec"}
    />
  );
}
