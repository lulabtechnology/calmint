// components/ContactSection.tsx

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-calmint-cream py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-calmint-deep mb-4">
          Contáctanos
        </h2>

        <p className="text-calmint-text mb-8">
          Este formulario es ilustrativo: al enviarlo se abrirá tu aplicación de
          correo con un mensaje dirigido a{' '}
          <span className="font-semibold">Calmintscents@gmail.com</span>.
        </p>

        {/* Formulario ilustrativo. El envío abre el cliente de correo con mailto */}
        <form
          action="mailto:Calmintscents@gmail.com"
          method="GET"
          encType="text/plain"
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-calmint-deep mb-1">
              Tu nombre
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-calmint-peach/60 bg-calmint-cream px-4 py-2 text-calmint-deep placeholder-calmint-text/60 focus:outline-none focus:ring-2 focus:ring-calmint-deep/40"
              placeholder="Tu nombre"
              name="nombre"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-calmint-deep mb-1">
              Correo
            </label>
            <input
              type="email"
              className="w-full rounded-xl border border-calmint-peach/60 bg-calmint-cream px-4 py-2 text-calmint-deep placeholder-calmint-text/60 focus:outline-none focus:ring-2 focus:ring-calmint-deep/40"
              placeholder="tunombre@email.com"
              name="correo"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-calmint-deep mb-1">
              Mensaje
            </label>
            <textarea
              rows={4}
              className="w-full rounded-xl border border-calmint-peach/60 bg-calmint-cream px-4 py-2 text-calmint-deep placeholder-calmint-text/60 focus:outline-none focus:ring-2 focus:ring-calmint-deep/40"
              placeholder="Cuéntanos qué necesitas: pedidos, talleres, eventos, terapias angelicales…"
              name="mensaje"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="
                inline-flex items-center justify-center
                rounded-full px-10 py-3
                text-sm font-semibold
                bg-calmint-deep text-calmint-cream
                shadow-md hover:bg-calmint-deep/90 active:bg-calmint-deep/80
                transition-colors
              "
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
