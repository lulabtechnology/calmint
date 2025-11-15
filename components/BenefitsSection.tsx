export default function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="py-16 md:py-20 bg-calmint-peach/20"
    >
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-serif text-2xl md:text-3xl text-calmint-dark">
            Beneficios de vivir la experiencia Calmint Scents
          </h2>
          <p className="text-sm md:text-base text-calmint-dark/80">
            No solo es cosmética natural: es un acompañamiento a tu bienestar
            físico, emocional y energético. Cada creación está pensada para
            ayudarte a bajar revoluciones, conectar con tu esencia y honrar tus
            rituales diarios de autocuidado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-7">
          <div className="bg-white/85 border border-calmint-peach/70 rounded-2xl p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-calmint-dark text-sm md:text-base">
              Bienestar Integral
            </h3>
            <p className="text-xs md:text-sm text-calmint-dark/80">
              Fórmulas que armonizan piel, mente y energía, integrando activos
              naturales con aromaterapia para que cada producto se convierta en
              un mini ritual de paz.
            </p>
          </div>

          <div className="bg-white/85 border border-calmint-peach/70 rounded-2xl p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-calmint-dark text-sm md:text-base">
              Belleza Consciente
            </h3>
            <p className="text-xs md:text-sm text-calmint-dark/80">
              Ingredientes limpios, fragancias sin ftalatos ni parabenos y
              procesos artesanales que respetan tu piel y el planeta.
            </p>
          </div>

          <div className="bg-white/85 border border-calmint-peach/70 rounded-2xl p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-calmint-dark text-sm md:text-base">
              Energía & Terapias Angelicales
            </h3>
            <p className="text-xs md:text-sm text-calmint-dark/80">
              Blends energéticos, colecciones de arcángeles y chakras, y
              acompañamiento desde terapias angelicales para sostenerte en
              procesos emocionales y espirituales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
