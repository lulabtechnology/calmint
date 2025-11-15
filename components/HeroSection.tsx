import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-calmint-cream to-calmint-peach/25"
    >
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
        {/* Texto */}
        <div className="space-y-4 md:space-y-6">
          <p className="inline-flex items-center rounded-full bg-white/70 border border-calmint-peach/70 px-3 py-1 text-[11px] md:text-xs text-calmint-dark/80 shadow-sm">
            Calmint Scents · Cosmética natural & aromaterapia
          </p>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-calmint-dark leading-snug">
            Calmint Scents – Belleza Natural que Nutre tu Piel y tu Energía
          </h1>

          <p className="text-sm md:text-base text-calmint-dark/80 max-w-xl">
            En Calmint Scents creamos cosmética artesanal inspirada en la
            naturaleza, elaborada con ingredientes botánicos, aceites esenciales
            puros y fragancias sin ftalatos ni parabenos. Cada producto es
            hecho a mano con intención, amor y calidad para transformar tus
            rutinas en rituales de autocuidado consciente.
          </p>

          <p className="text-sm md:text-base text-calmint-dark/75 max-w-xl">
            Ofrecemos líneas faciales y corporales, aromaterapia, velas de soja,
            jabones naturales, colecciones especiales de bienestar y
            acompañamiento energético, incluyendo terapias angelicales y
            talleres para eventos y corporativos.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="https://wa.me/50760703125?text=Hola%20Calmint%20Scents,%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20o%20recibir%20informaci%C3%B3n."
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-calmint-green px-6 py-2.5 text-sm md:text-base font-medium text-white shadow-md shadow-calmint-green/30 hover:bg-calmint-dark transition-colors"
            >
              Escríbeme por WhatsApp
            </Link>

            <a
              href="#productos"
              className="inline-flex items-center justify-center rounded-full border border-calmint-green/70 px-5 py-2 text-sm md:text-base font-medium text-calmint-green hover:bg-calmint-green/5 transition-colors"
            >
              Ver qué ofrecemos
            </a>
          </div>

          <p className="text-xs md:text-sm text-calmint-dark/60">
            Calmint Scents: belleza natural, intención y armonía en cada
            creación.
          </p>
        </div>

        {/* Imagen */}
        <div className="relative h-64 md:h-80 lg:h-96">
          <div className="absolute inset-0 rounded-3xl bg-calmint-peach/40 blur-3xl" />
          <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-xl border border-white/60">
            <Image
              src="/images/hero-candle.jpg"
              alt="Velas y productos de Calmint Scents"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
