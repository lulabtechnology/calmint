import Image from "next/image";

const items = [
  {
    title: "Línea Facial Natural",
    description:
      "Sérums botánicos, cremas, tónicos y fórmulas especiales para restaurar, iluminar y equilibrar tu piel. Incluye favoritos como Niacinamida con extracto de manzanilla, Vitamina C e Hyalurónico con rosa.",
  },
  {
    title: "Velas Aromáticas de Soya",
    description:
      "Velas hechas a mano con cera vegetal y fragancias libres de ftalatos y parabenos. Aromas pensados para crear atmósferas acogedoras, elevar la energía y acompañar tus rituales de journaling, lectura o meditación.",
    highlight: "Fragancias sin ftalatos ni parabenos.",
  },
  {
    title: "Jabones Artesanales",
    description:
      "Jabones de aceite y glicerina con activos naturales, arcillas, flores secas y aromas botánicos. Texturas suaves que limpian delicadamente mientras nutren la piel.",
  },
  {
    title: "Aromaterapia y Energía",
    description:
      "Roll-ons, sprays energéticos, oleatos y blends para relajación, enfoque, protección y armonización energética. Acompañamiento desde la aromaterapia vibracional y terapias angelicales.",
  },
  {
    title: "Colecciones Especiales y Talleres",
    description:
      "Colecciones temáticas para Navidad, Día de la Madre, Maestro, Arcángeles, Chakras y más. También realizamos talleres y experiencias sensoriales para eventos y espacios corporativos.",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="productos"
      className="py-16 md:py-20 bg-gradient-to-b from-calmint-cream to-calmint-cream/40"
    >
      <div className="mx-auto max-w-6xl px-4 space-y-8 md:space-y-10">
        <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-8 md:gap-12 items-start">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl text-calmint-dark">
              Qué Ofrecemos
            </h2>
            <p className="text-sm md:text-base text-calmint-dark/80">
              Diseñamos productos de cosmética natural y aromaterapia que
              acompañan tu belleza, tu energía y tu bienestar. Todo se elabora
              en pequeños lotes, a mano, con ingredientes limpios y fragancias
              sin ftalatos ni parabenos.
            </p>
            <p className="text-sm md:text-base text-calmint-dark/80">
              Además de nuestra línea regular, creamos colecciones especiales y
              experiencias personalizadas para regalos, rituales y eventos.
            </p>
          </div>

          <div className="relative h-56 md:h-72 rounded-3xl overflow-hidden shadow-xl border border-white/60">
            <Image
              src="/images/products-oil.jpg"
              alt="Aceites y aromaterapia Calmint Scents"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white/80 border border-calmint-peach/70 rounded-2xl p-5 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <h3 className="font-serif text-lg text-calmint-dark">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-calmint-dark/80">
                  {item.description}
                </p>
                {item.highlight && (
                  <p className="text-xs text-calmint-dark/90 font-medium">
                    {item.highlight}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
