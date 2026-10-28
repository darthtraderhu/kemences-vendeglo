import { lepesek } from "@/lib/adatok";

export default function Lepesek() {
  return (
    <ol className="lepesek">
      {lepesek.map((l, i) => (
        <li key={l.cim}>
          <span className="lepesek__szam">{i + 1}</span>
          <h3>{l.cim}</h3>
          <p>{l.szoveg}</p>
        </li>
      ))}
    </ol>
  );
}
