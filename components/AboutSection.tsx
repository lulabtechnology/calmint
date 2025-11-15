import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="sobre-calmint"
      className="py-16 md:py-20 bg-calmint-cream/90"
    >
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-[1.1fr,0.9fr] gap-10 md:gap-14 items-start">
        {/* Texto principal */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl text-calmint-dark">
              Quiénes Somos
            </h2>
            <p className="text-sm md:text-base text-calmint-dark/80">
              Calmint Scents es una marca panameña de cosmética natural y
              aromaterapia creada para acompañarte en tu camino de bienestar.
              Elaboramos productos artesanales con ingredientes botánicos,
              aceites esenciales puros y fórmulas inspiradas en la naturaleza,
              la energía y el autocuidado consciente.
            </p>
            <p className="text-sm md:text-base text-calmint-dark/80">
              Creemos en la belleza real, en los rituales que conectan con el
              alma y en fórmulas que nutren la piel sin químicos agresivos. Cada
              creación está hecha a mano con intención, amor y respeto por tu
              cuerpo y por el planeta.
            </p>
            <p className="text-xs md:text-sm text-calmint-dark/70 italic">
              Contamos con Permiso de Establecimiento No Farmacéutico del
              Ministerio de Salud Reg. 06-23/ECA/DNFD.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl text-calmint-dark">
              Nuestra Filosofía
            </h3>
            <p className="text-sm md:text-base text-calmint-dark/80">
              En Calmint Scents creemos que el autocuidado es un acto de amor
              propio. Por eso:
            </p>
            <ul className="text-sm md:text-base text-calmint-dark/80 space-y-1.5 list-disc list-inside">
              <li>Usamos ingredientes limpios, naturales y de alta calidad.</li>
              <li>Trabajamos de forma artesanal y consciente.</li>
              <li>Respetamos el ciclo de la naturaleza.</li>
              <li>
                Diseñamos productos que equilibran piel, mente y energía.
              </li>
              <li>
                Creamos experiencias sensoriales que transforman tu rutina diaria
                en momentos de paz y bienestar.
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm md:text-base text-calmint-dark">
                Nuestra Misión
              </h4>
              <p className="text-xs md:text-sm text-calmint-dark/80">
                Crear productos naturales que armonicen piel, mente y energía a
                través del poder de la naturaleza, la intención y la
                aromaterapia.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm md:text-base text-calmint-dark">
                Nuestra Visión
              </h4>
              <p className="text-xs md:text-sm text-calmint-dark/80">
                Ser una marca líder en bienestar integral y cosmética artesanal
                en Panamá, reconocida por su calidad, propósito y conexión
                emocional con cada persona.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm md:text-base text-calmint-dark">
              Nuestros Valores
            </h4>
            <div className="flex flex-wrap gap-2 text-[11px] md:text-xs text-calmint-dark/80">
              <span className="rounded-full bg-white/70 border border-calmint-peach/70 px-3 py-1">
                Amor por la naturaleza
              </span>
              <span className="rounded-full bg-white/70 border border-calmint-peach/70 px-3 py-1">
                Artesanía con propósito
              </span>
              <span className="rounded-full bg-white/70 border border-calmint-peach/70 px-3 py-1">
                Transparencia y calidad
              </span>
              <span className="rounded-full bg-white/70 border border-calmint-peach/70 px-3 py-1">
                Energía y espiritualidad
              </span>
              <span className="rounded-full bg-white/70 border border-calmint-peach/70 px-3 py-1">
                Bienestar integral
              </span>
            </div>
          </div>
        </div>

        {/* Imagen + frase */}
        <div className="space-y-6">
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-xl border border-white/60">
            <Image
              src="/images/products-soap.jpg"
              alt="Jabones y productos naturales Calmint Scents"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-white/80 border border-calmint-peach/70 rounded-2xl p-4 md:p-5 shadow-sm space-y-2">
            <p className="text-sm md:text-base text-calmint-dark/90 font-serif">
              “Tu piel merece lo mejor de la naturaleza. Tu energía merece
              equilibrio. Tu espacio merece armonía.”
            </p>
            <p className="text-xs md:text-sm text-calmint-dark/70">
              En cada vela, sérum, jabón o blend energético hay intención,
              rituales de bienestar y un toque de terapias angelicales para
              acompañarte con amor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
