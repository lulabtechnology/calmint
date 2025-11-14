import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      id="sobre-calmint"
      className="section-padding bg-calmint-cream relative"
    >
      <div className="container-calmint grid md:grid-cols-[1.25fr,1fr] gap-10 items-center">
        <div>
          <h2 className="heading-display mb-4">Sobre Calmint</h2>
          <p className="subheading mb-4">
            Calmint nace de la idea de convertir los espacios cotidianos en
            pequeños santuarios de calma. Cada vela, aceite y jabón es elaborado
            de forma artesanal, cuidando los detalles, los aromas y la textura
            para acompañar tus momentos de pausa.
          </p>
          <p className="subheading mb-4">
            Nos inspiran los rituales simples: encender una vela al final del
            día, tomar un baño cálido con jabones suaves, o aplicar unas gotas
            de aceite aromático antes de dormir. Pequeños gestos que le recuerdan
            a tu mente y a tu cuerpo que también merecen descanso.
          </p>
          <p className="subheading">
            Nuestro objetivo es que cada producto de Calmint se sienta como un
            abrazo: cálido, ligero y presente. Aromas que no invaden, sino que
            acompañan. Texturas que cuidan tu piel y envuelven tus sentidos.
          </p>
        </div>
        <div className="relative h-72 md:h-80">
          <div className="absolute inset-0 rounded-3xl bg-calmint-peach/40 blur-3xl" />
          <div className="relative h-full card-soft overflow-hidden">
            <Image
              src="/images/products-soap.jpg"
              alt="Jabones artesanales Calmint en tonos suaves"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
