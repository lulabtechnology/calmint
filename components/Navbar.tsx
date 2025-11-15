"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-calmint", label: "Sobre Calmint" },
  { href: "#productos", label: "Productos" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#novedades", label: "Novedades" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-calmint-peach/40 bg-calmint-cream/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo + nombre */}
        <Link
          href="#inicio"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-calmint-peach/60">
            <Image
              src="/images/calmint-logo.png"
              alt="Logo Calmint Scents"
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-calmint-dark">
              Calmint Scents
            </span>
            <span className="text-xs text-calmint-green">
              Belleza Natural • Aromaterapia
            </span>
          </div>
        </Link>

        {/* Navegación desktop */}
        <div className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-calmint-dark/80 transition hover:text-calmint-green"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Botón WhatsApp desktop */}
        <a
          href="https://wa.me/50760703125?text=Hola%20Calmint%20Scents,%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20o%20recibir%20informaci%C3%B3n."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-calmint-green px-4 py-2 text-xs font-medium text-calmint-cream shadow-sm transition hover:bg-calmint-dark md:inline-block"
        >
          Escríbeme por WhatsApp
        </a>

        {/* Botón menú móvil */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-calmint-peach/60 bg-white/80 p-2 text-calmint-dark md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <div className="border-t border-calmint-peach/40 bg-calmint-cream/95 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-calmint-dark/90"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/50760703125?text=Hola%20Calmint%20Scents,%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20o%20recibir%20informaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-calmint-green px-4 py-2 text-center text-sm font-medium text-calmint-cream shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Escríbeme por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
