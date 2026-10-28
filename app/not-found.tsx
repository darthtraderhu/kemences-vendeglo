import Link from "next/link";

export default function NemTalalhato() {
  return (
    <section className="szakasz">
      <div className="belso kozep">
        <p className="cimke">404</p>
        <h1 className="ori ori--kozep">
          Ez az asztal <em>nincs megterítve.</em>
        </h1>
        <div className="gombsor gombsor--kozep">
          <Link className="gomb" href="/">
            Vissza a főoldalra
          </Link>
        </div>
      </div>
    </section>
  );
}
