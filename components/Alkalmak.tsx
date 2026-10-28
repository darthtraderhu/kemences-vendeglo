import Image from "next/image";
import Link from "next/link";
import { rendezvenyek } from "@/lib/adatok";

// Számozott, nagy betűs lista; asztali nézetben rámutatáskor előúszik a hozzá illő kép.
export default function Alkalmak() {
  return (
    <ol className="alkalmak">
      {rendezvenyek.map((r, i) => (
        <li key={r.kod}>
          <Link href={`/rendezvenyek#${r.kod}`}>
            <span className="alkalmak__szam">{String(i + 1).padStart(2, "0")}</span>
            <span className="alkalmak__nev">{r.nev}</span>
            <span className="alkalmak__rovid">{r.rovid}</span>
            <span className="alkalmak__kep">
              <Image src={r.kep} alt="" fill sizes="280px" />
            </span>
            <span className="alkalmak__nyil" aria-hidden="true">
              →
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
