import { gyik } from "@/lib/adatok";

export default function Gyik() {
  return (
    <div className="gyik">
      {gyik.map((g) => (
        <details key={g.k}>
          <summary>{g.k}</summary>
          <p>{g.v}</p>
        </details>
      ))}
    </div>
  );
}
