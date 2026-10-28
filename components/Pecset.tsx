import KemenceJel from "@/components/KemenceJel";

// Forgó körpecsét a nyitóképen.
export default function Pecset() {
  return (
    <svg className="pecset" viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <path id="kor" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
      </defs>
      <circle cx="100" cy="100" r="98" fill="var(--arany)" />
      <text className="pecset__szoveg">
        <textPath href="#kor" startOffset="0">
          120 FŐIG ✦ CSAK RENDEZVÉNY ✦ HALÁSZTELEK ✦
        </textPath>
      </text>
      <KemenceJel x="70" y="72" width="60" height="56" fill="var(--ej)" color="var(--ej)" />
    </svg>
  );
}
