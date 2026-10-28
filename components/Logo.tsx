// A vendéglő kézírásos szövegjelének közelítése. Élesítés előtt az eredeti
// logófájl (SVG vagy nagy felbontású PNG) kerül a helyére.
export default function Logo() {
  return (
    <span className="logo" aria-label="Kemencés Vendéglő Halásztelek">
      <svg className="logo__kemence" viewBox="0 0 40 32" aria-hidden="true">
        <path d="M4 30V17a16 16 0 0 1 32 0v13" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path d="M13 30v-8a7 7 0 0 1 14 0v8" fill="currentColor" />
        <path d="M2 30h36" stroke="currentColor" strokeWidth="2.4" />
        <path d="M27 6V1.5h5V10" fill="none" stroke="currentColor" strokeWidth="2.4" />
      </svg>
      <span className="logo__szoveg">
        <span className="logo__nev">Kemencés Vendéglő</span>
        <span className="logo__hely">Halásztelek</span>
      </span>
    </span>
  );
}
