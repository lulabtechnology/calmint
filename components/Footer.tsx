export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/60 bg-calmint-cream">
      <div className="container-calmint py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-calmint-dark/70">
        <p>© {year} Calmint. Todos los derechos reservados.</p>
        <p>Hecho con calma desde Panamá.</p>
      </div>
    </footer>
  );
}
