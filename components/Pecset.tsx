// Forgó körpecsét a nyitóképen.
export default function Pecset() {
  return (
    <svg className="pecset" viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <path id="kor" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
      </defs>
      <circle cx="100" cy="100" r="98" fill="var(--arany)" />
      <text>
        <textPath href="#kor" startOffset="0">
          120 FŐIG ✦ CSAK RENDEZVÉNY ✦ HALÁSZTELEK ✦
        </textPath>
      </text>
      <path d="M70 128V104a30 30 0 0 1 60 0v24M86 128v-14a14 14 0 0 1 28 0v14M62 128h76" fill="none" stroke="var(--ej)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
