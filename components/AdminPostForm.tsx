'use client';

import { useState } from 'react';

export default function AdminPostForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, imageUrl })
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || 'No se pudo crear el post.');
      } else {
        setSuccessMessage('Post creado correctamente. Ya aparece en la landing.');
        setTitle('');
        setDescription('');
        setImageUrl('');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Error inesperado al crear el post.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="font-display text-2xl mb-4 text-calmint-dark">
        Crear nuevo post
      </h2>
      <p className="text-sm text-calmint-dark/70 mb-6">
        Completa los campos para publicar una novedad en la sección “Novedades
        Calmint” de la landing. La imagen se mostrará primero, seguida del
        título y la descripción.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-xs font-medium text-calmint-dark/80 mb-1"
          >
            Título del post
          </label>
          <input
            id="title"
            type="text"
            className="w-full rounded-full border border-calmint-green/30 px-4 py-2 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-calmint-green/50"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Ej. "Nueva colección de velas nocturnas"'
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-xs font-medium text-calmint-dark/80 mb-1"
          >
            Descripción corta
          </label>
          <textarea
            id="description"
            rows={3}
            className="w-full rounded-3xl border border-calmint-green/30 px-4 py-2 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-calmint-green/50 resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Comparte en pocas líneas de qué trata esta novedad, colección o recomendación."
            required
          />
        </div>

        <div>
          <label
            htmlFor="imageUrl"
            className="block text-xs font-medium text-calmint-dark/80 mb-1"
          >
            URL de la imagen
          </label>
          <input
            id="imageUrl"
            type="text"
            className="w-full rounded-full border border-calmint-green/30 px-4 py-2 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-calmint-green/50"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Pega aquí la URL de la imagen (Cloudinary, etc.)"
            required
          />
          <p className="text-[11px] text-calmint-dark/60 mt-1">
            Puedes usar imágenes subidas a servicios como Cloudinary o más
            adelante a la carpeta <code>/public/images</code> del proyecto.
          </p>
        </div>

        {successMessage && (
          <p className="text-sm text-green-700 bg-green-50 border border-green-100 rounded-xl px-3 py-2">
            {successMessage}
          </p>
        )}

        {errorMessage && (
          <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          className="btn-whatsapp justify-center"
          disabled={loading}
        >
          {loading ? 'Creando post...' : 'Crear post'}
        </button>
      </form>
    </div>
  );
}
