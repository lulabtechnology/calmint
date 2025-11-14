export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Ambientes más relajados',
      description:
        'Aromas suaves que ayudan a bajar el ritmo del día, ideal para desconectar de la rutina y crear una atmósfera de calma.'
    },
    {
      title: 'Rituales de autocuidado',
      description:
        'Productos pensados para acompañar momentos que son solo tuyos: un baño cálido, una tarde de lectura o tu rutina de noche.'
    },
    {
      title: 'Fragancias cuidadas',
      description:
        'Aromas que no invaden, sino que acompañan. Diseñados para sentirse presentes, pero ligeros.'
    },
    {
      title: 'Detalles que abrazan',
      description:
        'Presentaciones delicadas que convierten cada producto en un detalle especial para regalar y decorar tu hogar.'
    }
  ];

  return (
    <section
      id="beneficios"
      className="section-padding bg-calmint-cream relative"
    >
      <div className="container-calmint">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="heading-display mb-3">Beneficios de Calmint</h2>
          <p className="subheading">
            Más que productos, son pequeños recordatorios de que mereces calma,
            suavidad y espacios donde respirar profundo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="card-soft p-6">
              <h3 className="font-display text-lg mb-2 text-calmint-dark">
                {benefit.title}
              </h3>
              <p className="text-sm text-calmint-dark/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
