import Link from 'next/link';

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="section-padding bg-calmint-cream relative"
    >
      <div className="container-calmint grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="heading-display mb-4">
            ¿Lista para encender tu momento Calmint?
          </h2>
          <p className="subheading mb-6">
            Si quieres hacer un pedido, cotizar un detalle especial o recibir
            recomendaciones de aromas según tu espacio, escríbeme directamente
            por WhatsApp. Juntas podemos crear el ritual perfecto para ti.
          </p>
          <Link
            href="https://wa.me/50760703125?text=Hola%20Calmint,%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20o%20recibir%20informaci%C3%B3n."
            className="btn-whatsapp"
            target="_blank"
          >
            Escríbeme por WhatsApp
          </Link>
        </div>

        {/* Formulario simple (sin backend aún) */}
        <div className="card-soft p-6 md:p-7">
          <p className="text-sm text-calmint-dark/70 mb-4">
            Si prefieres, también puedes dejar tus datos y un mensaje. Esta
            sección puede conectarse más adelante a un correo o CRM.
          </p>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-calmint-dark/80 mb-1"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-full border border-calmint-green/30 px-4 py-2 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-calmint-green/50"
                placeholder="¿Cómo te llamas?"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-calmint-dark/80 mb-1"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-full border border-calmint-green/30 px-4 py-2 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-calmint-green/50"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-calmint-dark/80 mb-1"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={3}
                className="w-full rounded-3xl border border-calmint-green/30 px-4 py-2 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-calmint-green/50 resize-none"
                placeholder="Cuéntame qué tipo de producto o aroma estás buscando..."
              />
            </div>
            <button
              type="button"
              className="w-full btn-secondary justify-center"
            >
              Enviar (pendiente de configurar)
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
