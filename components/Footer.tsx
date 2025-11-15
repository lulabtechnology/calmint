// components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-calmint-cream border-t border-calmint-peach/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-calmint-text space-y-2">
        <p>
          © {year}{' '}
          <span className="font-semibold">Calmint Scents</span>. Todos los
          derechos reservados.
        </p>

        <p>
          Hecho con calma y propósito desde Panamá. Belleza natural, aromaterapia
          y bienestar energético.
        </p>

        <p>
          WhatsApp:{' '}
          <a
            href="https://wa.me/50760703125"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-calmint-deep underline-offset-4 hover:underline"
          >
            +507 6070-3125
          </a>
        </p>

        <p>
          Instagram:{' '}
          <a
            href="https://instagram.com/calmintscents"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-calmint-deep underline-offset-4 hover:underline"
          >
            @calmintscents
          </a>
        </p>
      </div>
    </footer>
  );
}
