// Felszálló parázsszemek a kemence fölött. Tisztán CSS; csökkentett mozgásnál nem jelenik meg.
const szemek = Array.from({ length: 18 }, (_, i) => ({
  bal: (i * 37) % 100,
  kesleltetes: (i * 0.73) % 7,
  ido: 6 + ((i * 1.9) % 6),
  meret: 2 + (i % 4),
}));

export default function Parazs() {
  return (
    <div className="parazs" aria-hidden="true">
      {szemek.map((sz, i) => (
        <span
          key={i}
          style={{
            left: `${sz.bal}%`,
            width: sz.meret,
            height: sz.meret,
            animationDelay: `${sz.kesleltetes}s`,
            animationDuration: `${sz.ido}s`,
          }}
        />
      ))}
    </div>
  );
}
