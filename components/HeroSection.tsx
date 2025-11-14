import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="section-padding bg-gradient-to-b from-calmint-cream to-calmint-peach/20"
    >
      <div className="container-calmint grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="uppercase tracking-[0.25em] text-xs text-calmint-dark/60">
            Calmint Scents 2024
          </p>
          <h1 className="heading-display">
            Aromas que abrazan
            <span className="block text-calmint-green">tu calma.</span>
          </h1>
          <p className="subheading max-w-xl">
            Velas, aceites y jabones artesanales para encender momentos de
            bienestar, calidez y autocuidado. Crea tu propio ritual de calma en
            casa con fragancias pensadas para tu pausa del día.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://wa.me/50760703125?text=Hola%20Calmint,%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20o%20recibir%20informaci%C3%B3n."
              className="btn-whatsapp"
              target="_blank"
            >
              Escríbeme por WhatsApp
            </Link>
            <a href="#productos" className="btn-secondary">
              Ver productos
            </a>
          </div>
        </div>

        <div className="relative h-80 md:h-[420px]">
          <div className="absolute inset-0 rounded-3xl bg-calmint-green/10 blur-3xl" />
          <div className="relative h-full card-soft overflow-hidden">
            <Image
              src="/images/hero-candle.jpg"
              alt="Velas aromáticas Calmint encendidas en un ambiente acogedor"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white text-sm">
              <p className="font-medium">
                Enciende una vela, respira profundo y regálate unos minutos solo
                para ti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
