import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="py-16 md:py-20 bg-calmint-cream"
    >
      <div className="mx-auto max-w-4xl px-4 space-y-6 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-calmint-dark">
          ¿Lista para encender tu momento Calmint Scents?
        </h2>
        <p className="text-sm md:text-base text-calmint-dark/80 max-w-2xl mx-auto">
          Podemos crear kits personalizados, colecciones especiales, regalos
          corporativos y experiencias de bienestar para tus eventos. También
          facilitamos talleres y espacios de terapias angelicales y
          aromaterapia.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="https://wa.me/50760703125?text=Hola%20Calmint%20Scents,%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20o%20recibir%20informaci%C3%B3n."
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-calmint-green px-7 py-2.5 text-sm md:text-base font-medium text-white shadow-md shadow-calmint-green/30 hover:bg-calmint-dark transition-colors"
          >
            Escríbeme por WhatsApp
          </Link>

          <a
            href="https://www.instagram.com/michele_mariepty"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-calmint-green/70 px-6 py-2 text-sm md:text-base font-medium text-calmint-green hover:bg-calmint-green/5 transition-colors"
          >
            Ver Instagram @michele_mariepty
          </a>
        </div>

        {/* Formulario simple (sin backend real) */}
        <div className="mt-8 bg-white/80 border border-calmint-peach/70 rounded-2xl p-5 md:p-6 text-left shadow-sm">
          <p className="text-xs md:text-sm text-calmint-dark/80 mb-3">
            También puedes dejar tus datos y mensaje y con gusto te contactamos
            (este formulario es solo ilustrativo, se puede conectar luego a un
            servicio de correo).
          </p>
          <form className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <label className="text-xs font-medium text-calmint-dark/80">
                Nombre
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-calmint-peach/70 bg-calmint-cream/40 px-3 py-2 outline-none focus:border-calmint-green focus:ring-1 focus:ring-calmint-green/60"
                placeholder="Tu nombre"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-calmint-dark/80">
                Correo
              </label>
              <input
                type="email"
                className="w-full rounded-xl border border-calmint-peach/70 bg-calmint-cream/40 px-3 py-2 outline-none focus:border-calmint-green focus:ring-1 focus:ring-calmint-green/60"
                placeholder="tunombre@email.com"
              />
            </div>
            <div className="md:col-span-2 space-y-1">
              <label className="text-xs font-medium text-calmint-dark/80">
                Mensaje
              </label>
              <textarea
                className="w-full rounded-xl border border-calmint-peach/70 bg-calmint-cream/40 px-3 py-2 outline-none focus:border-calmint-green focus:ring-1 focus:ring-calmint-green/60 min-h-[80px]"
                placeholder="Cuéntanos qué necesitas: pedidos, talleres, eventos, terapias angelicales..."
              />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button
                type="button"
                className="rounded-full bg-calmint-dark px-5 py-2 text-xs md:text-sm font-medium text-white hover:bg-calmint-green transition-colors"
              >
                Enviar mensaje (demo)
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
