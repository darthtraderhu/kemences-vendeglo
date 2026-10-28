import { rendezvenyek } from "@/lib/adatok";

export default function Futoszalag() {
  const elemek = rendezvenyek.map((r) => r.nev.split(",")[0]);
  const sor = (rejtett: boolean) => (
    <div className="futoszalag__sor" aria-hidden={rejtett || undefined}>
      {elemek.map((e, i) => (
        <span key={e} className={i % 2 ? "korvonal" : undefined}>
          {e}
          <i>✦</i>
        </span>
      ))}
    </div>
  );
  return (
    <div className="futoszalag">
      <div className="futoszalag__palya">
        {sor(false)}
        {sor(true)}
      </div>
    </div>
  );
}
