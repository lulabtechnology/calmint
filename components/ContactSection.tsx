"use client";

import React from "react";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name =
      (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const email =
      (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const message =
      (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`
    );

    window.location.href = `mailto:Calmintscents@gmail.com?subject=Nuevo mensaje desde la web Calmint Scents&body=${body}`;
  };

  return (
    <section id="contacto" className="py-20 bg-[#FFF8E9]">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-semibold tracking-tight text-emerald-900">
          Contáctanos
        </h2>

        <p className="mt-3 text-base text-emerald-900/80">
          Este formulario es ilustrativo: al enviarlo se abrirá tu aplicación de
          correo con un mensaje dirigido a{" "}
          <span className="font-semibold">Calmintscents@gmail.com</span>.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-6 rounded-3xl bg-white/70 p-6 shadow-sm"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-emerald-900"
            >
              Tu nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-2 w-full rounded-xl border border-emerald-100 bg-emerald-50/30 px-4 py-3 text-sm text-emerald-900 placeholder:text-emerald-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-emerald-900"
            >
              Correo
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-2 w-full rounded-xl border border-emerald-100 bg-emerald-50/30 px-4 py-3 text-sm text-emerald-900 placeholder:text-emerald-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
              placeholder="tunombre@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-emerald-900"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 w-full rounded-xl border border-emerald-100 bg-emerald-50/30 px-4 py-3 text-sm text-emerald-900 placeholder:text-emerald-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
              placeholder="Cuéntanos qué necesitas: pedidos, talleres, eventos, terapias angelicales…"
            />
          </div>

          {/* BOTÓN BIEN VISIBLE */}
          <div className="mt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[#008C7A] px-10 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#007364] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#008C7A]"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
