export default function ProductsSection() {
  return (
    <section
      id="productos"
      className="section-padding bg-gradient-to-b from-calmint-cream to-calmint-peach/30"
    >
      <div className="container-calmint">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="heading-display mb-3">Nuestros productos</h2>
          <p className="subheading">
            Una colección pensada para acompañarte en diferentes momentos del
            día: desde la calma nocturna hasta esos instantes de enfoque y
            claridad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Velas */}
          <div className="card-soft p-6 flex flex-col gap-3">
            <h3 className="font-display text-xl text-calmint-dark">
              Velas aromáticas
            </h3>
            <p className="text-sm text-calmint-dark/70">
              Velas de cera suave y aromas envolventes para transformar cualquier
              rincón en un refugio acogedor. Ideales para noches tranquilas,
              rituales de journaling o momentos de lectura.
            </p>
            <ul className="text-sm text-calmint-dark/70 space-y-1">
              <li>• Notas florales, cítricas y amaderadas.</li>
              <li>• Aromas pensados para relajación y equilibrio.</li>
              <li>• Envases delicados que decoran tu espacio.</li>
            </ul>
          </div>

          {/* Aceites */}
          <div className="card-soft p-6 flex flex-col gap-3">
            <h3 className="font-display text-xl text-calmint-dark">
              Aceites aromáticos
            </h3>
            <p className="text-sm text-calmint-dark/70">
              Aceites ligeros para masajes suaves, difusores o pequeños toques
              en puntos de pulso. Diseñados para ayudarte a soltar tensión y
              conectar con tu respiración.
            </p>
            <ul className="text-sm text-calmint-dark/70 space-y-1">
              <li>• Mezclas pensadas para descanso profundo.</li>
              <li>• Ideales para rutinas de noche y spa en casa.</li>
              <li>• Pueden acompañar prácticas de meditación.</li>
            </ul>
          </div>

          {/* Jabones */}
          <div className="card-soft p-6 flex flex-col gap-3">
            <h3 className="font-display text-xl text-calmint-dark">
              Jabones artesanales
            </h3>
            <p className="text-sm text-calmint-dark/70">
              Jabones suaves con fragancias cuidadas, para que cada baño se
              sienta como un mini spa. Aromas delicados que perfuman sin
              saturar.
            </p>
            <ul className="text-sm text-calmint-dark/70 space-y-1">
              <li>• Texturas cremosas y agradables.</li>
              <li>• Aromas relajantes y frescos.</li>
              <li>• Ideales para regalar y regalarte.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
