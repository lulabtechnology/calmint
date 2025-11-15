// components/ContactSection.tsx
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent('Consulta desde la web Calmint Scents');
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`
    );

    // Abre el cliente de correo del usuario
    window.location.href = `mailto:Calmintscents@gmail.com?subject=${subject}&body=${body}`;
  };

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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-calmint-deep mb-1">
              Tu nombre
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-calmint-peach/60 bg-calmint-cream px-4 py-2 text-calmint-deep focus:outline-none focus:ring-2 focus:ring-calmint-deep/40"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-calmint-deep mb-1">
              Correo
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-calmint-peach/60 bg-calmint-cream px-4 py-2 text-calmint-deep focus:outline-none focus:ring-2 focus:ring-calmint-deep/40"
              placeholder="tunombre@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-calmint-deep mb-1">
              Mensaje
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full rounded-xl border border-calmint-peach/60 bg-calmint-cream px-4 py-2 text-calmint-deep focus:outline-none focus:ring-2 focus:ring-calmint-deep/40"
              placeholder="Cuéntanos qué necesitas: pedidos, talleres, eventos, terapias angelicales…"
              required
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-calmint-deep px-8 py-2 text-sm font-semibold text-calmint-cream shadow-md hover:bg-calmint-deep/90 transition-colors"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
