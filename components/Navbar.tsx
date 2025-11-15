import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-calmint-cream/80 backdrop-blur border-b border-calmint-peach/60">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo + nombre */}
        <Link href="#inicio" className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full bg-white shadow-md overflow-hidden border border-calmint-peach/70">
            <Image
              src="/images/calmint-logo.svg"
              alt="Logo Calmint Scents"
              fill
              className="object-contain p-1.5"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg md:text-xl text-calmint-dark">
              Calmint Scents
            </span>
            <span className="text-[11px] md:text-xs text-calmint-dark/70">
              Belleza Natural • Aromaterapia • Autocuidado Consciente
            </span>
          </div>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="#inicio"
            className="text-calmint-dark/80 hover:text-calmint-dark transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="#sobre-calmint"
            className="text-calmint-dark/80 hover:text-calmint-dark transition-colors"
          >
            Sobre Calmint
          </Link>
          <Link
            href="#productos"
            className="text-calmint-dark/80 hover:text-calmint-dark transition-colors"
          >
            Qué ofrecemos
          </Link>
          <Link
            href="#beneficios"
            className="text-calmint-dark/80 hover:text-calmint-dark transition-colors"
          >
            Filosofía
          </Link>
          <Link
            href="#novedades"
            className="text-calmint-dark/80 hover:text-calmint-dark transition-colors"
          >
            Novedades
          </Link>
          <Link
            href="#contacto"
            className="text-calmint-dark/80 hover:text-calmint-dark transition-colors"
          >
            Contacto
          </Link>
        </div>

        {/* Instagram pequeño a la derecha */}
        <a
          href="https://www.instagram.com/michele_mariepty"
          target="_blank"
          rel="noreferrer"
          className="text-xs md:text-sm text-calmint-dark/80 hover:text-calmint-green transition-colors"
        >
          @michele_mariepty
        </a>
      </nav>
    </header>
  );
}
