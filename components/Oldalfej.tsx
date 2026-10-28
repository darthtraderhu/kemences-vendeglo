import Image from "next/image";
import Parazs from "@/components/Parazs";

// Aloldalak fejléce: óriás cím balra, boltív alakú kép jobbra.
export default function Oldalfej({
  felcim,
  cim,
  dolt,
  szoveg,
  kep,
  kepAlt,
  children,
}: {
  felcim: string;
  cim: string;
  dolt?: string;
  szoveg: React.ReactNode;
  kep: string;
  kepAlt: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="oldalfej">
      <Parazs />
      <div className="belso oldalfej__racs">
        <div>
          <p className="cimke">{felcim}</p>
          <h1 className="ori">
            {cim} {dolt && <em>{dolt}</em>}
          </h1>
          <p className="oldalfej__szoveg">{szoveg}</p>
          {children}
        </div>
        <div className="boltiv oldalfej__kep">
          <Image src={kep} alt={kepAlt} fill priority sizes="(max-width: 860px) 90vw, 40vw" />
        </div>
      </div>
    </header>
  );
}
