export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-calmint-peach/60 bg-calmint-cream/95">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-calmint-dark/80">
        <div className="space-y-1 text-center md:text-left">
          <p>
            © {year} <span className="font-semibold">Calmint Scents</span>. Todos
            los derechos reservados.
          </p>
          <p className="text-[11px] md:text-xs">
            Hecho con calma y propósito desde Panamá. Belleza natural,
            aromaterapia y bienestar energético.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1 text-[11px] md:text-xs">
          <a
            href="https://wa.me/50760703125"
            target="_blank"
            rel="noreferrer"
            className="hover:text-calmint-green transition-colors"
          >
            WhatsApp: +507 6070-3125
          </a>
          <a
            href="https://www.instagram.com/michele_mariepty"
            target="_blank"
            rel="noreferrer"
            className="hover:text-calmint-green transition-colors"
          >
            Instagram: @michele_mariepty
          </a>
        </div>
      </div>
    </footer>
  );
}
