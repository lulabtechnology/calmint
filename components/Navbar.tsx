'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 bg-calmint-cream/80 backdrop-blur-md border-b border-white/60">
      <div className="container-calmint flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full overflow-hidden bg-calmint-green/5 flex items-center justify-center">
            {/* Logo */}
            <Image
              src="/images/calmint-logo.svg"
              alt="Calmint logo"
              fill
              className="object-contain p-1.5"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg tracking-tight text-calmint-dark">
              Calmint
            </span>
            <span className="text-xs text-calmint-dark/60">
              Velas, Aceites y Jabones
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center text-sm">
          <a href="#inicio" className="hover:text-calmint-green transition-colors">
            Inicio
          </a>
          <a
            href="#sobre-calmint"
            className="hover:text-calmint-green transition-colors"
          >
            Sobre Calmint
          </a>
          <a
            href="#productos"
            className="hover:text-calmint-green transition-colors"
          >
            Productos
          </a>
          <a
            href="#beneficios"
            className="hover:text-calmint-green transition-colors"
          >
            Beneficios
          </a>
          <a
            href="#novedades"
            className="hover:text-calmint-green transition-colors"
          >
            Novedades
          </a>
          <a
            href="#contacto"
            className="hover:text-calmint-green transition-colors"
          >
            Contacto
          </a>
          <Link
            href="https://wa.me/50760703125?text=Hola%20Calmint,%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20o%20recibir%20informaci%C3%B3n."
            className="btn-whatsapp"
            target="_blank"
          >
            Escríbeme por WhatsApp
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-calmint-dark/15 px-3 py-2 text-sm"
          onClick={handleToggle}
          aria-label="Abrir menú"
        >
          <span className="text-calmint-dark">Menú</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/60 bg-calmint-cream/95 backdrop-blur-md">
          <div className="container-calmint py-4 flex flex-col gap-3 text-sm">
            <a href="#inicio" onClick={closeMenu}>
              Inicio
            </a>
            <a href="#sobre-calmint" onClick={closeMenu}>
              Sobre Calmint
            </a>
            <a href="#productos" onClick={closeMenu}>
              Productos
            </a>
            <a href="#beneficios" onClick={closeMenu}>
              Beneficios
            </a>
            <a href="#novedades" onClick={closeMenu}>
              Novedades
            </a>
            <a href="#contacto" onClick={closeMenu}>
              Contacto
            </a>
            <Link
              href="https://wa.me/50760703125?text=Hola%20Calmint,%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20o%20recibir%20informaci%C3%B3n."
              className="btn-whatsapp mt-2 justify-center"
              target="_blank"
            >
              Escríbeme por WhatsApp
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
