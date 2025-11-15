"use client";

import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  description?: string | null;
  content?: string | null;
  imageUrl?: string | null;
  createdAt?: string;
};

export default function AdminPostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [lastPost, setLastPost] = useState<Post | null>(null);
  const [loadingLast, setLoadingLast] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const fetchLastPost = async () => {
    try {
      setLoadingLast(true);
      const res = await fetch("/api/posts/last");
      if (!res.ok) {
        setLastPost(null);
        return;
      }
      const data = await res.json();
      setLastPost(data.lastPost ?? null);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingLast(false);
    }
  };

  useEffect(() => {
    fetchLastPost();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          imageUrl,
        }),
      });

      if (!res.ok) {
        console.error(await res.text());
        setStatus("Error al crear el post. Revisa los datos.");
        return;
      }

      setStatus("Post creado correctamente ✅");
      setTitle("");
      setDescription("");
      setImageUrl("");
      await fetchLastPost();
    } catch (error) {
      console.error(error);
      setStatus("Ocurrió un error al conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteLast = async () => {
    if (!lastPost) return;

    const confirmDelete = window.confirm(
      `¿Seguro que quieres borrar el último post: "${lastPost.title}"?`
    );
    if (!confirmDelete) return;

    setDeleting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/posts/last", {
        method: "DELETE",
      });

      if (!res.ok) {
        setStatus("No se pudo borrar el último post.");
        return;
      }

      setStatus("Último post eliminado correctamente 🗑️");
      await fetchLastPost();
    } catch (error) {
      console.error(error);
      setStatus("Ocurrió un error al borrar el post.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Formulario de creación */}
      <section>
        <h2 className="mb-2 text-lg font-display text-calmint-dark">
          Crear nuevo post
        </h2>
        <p className="mb-4 text-sm text-calmint-dark/70">
          Completa los campos para publicar una novedad en la sección
          “Novedades Calmint” de la landing. La imagen se mostrará primero,
          seguida del título y la descripción.
        </p>

        <form onSubmit={handleCreate} className="space-y-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-calmint-dark/80">
              Título del post
            </label>
            <input
              className="w-full rounded-lg border border-calmint-peach/60 bg-calmint-cream/60 px-3 py-2 text-sm text-calmint-dark outline-none ring-calmint-green/40 focus:ring-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-calmint-dark/80">
              Descripción corta
            </label>
            <textarea
              className="w-full rounded-lg border border-calmint-peach/60 bg-calmint-cream/60 px-3 py-2 text-sm text-calmint-dark outline-none ring-calmint-green/40 focus:ring-2"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-calmint-dark/80">
              URL de la imagen
            </label>
            <input
              className="w-full rounded-lg border border-calmint-peach/60 bg-calmint-cream/60 px-3 py-2 text-sm text-calmint-dark outline-none ring-calmint-green/40 focus:ring-2"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Pega aquí la URL de la imagen (Cloudinary, etc.)"
            />
            <p className="mt-1 text-[11px] text-calmint-dark/60">
              Puedes usar imágenes subidas a servicios como Cloudinary o más
              adelante a la carpeta <code>/public/images</code> del proyecto.
            </p>
          </div>

          {status && (
            <p className="text-xs text-calmint-dark/80">{status}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-calmint-green px-5 py-2 text-sm font-medium text-calmint-cream shadow-sm transition hover:bg-calmint-dark disabled:opacity-60"
          >
            {loading ? "Creando..." : "Crear post"}
          </button>
        </form>
      </section>

      {/* Sección de último post */}
      <section className="border-t border-calmint-peach/40 pt-6">
        <h2 className="mb-2 text-lg font-display text-calmint-dark">
          Último post publicado
        </h2>

        {loadingLast ? (
          <p className="text-sm text-calmint-dark/70">Cargando…</p>
        ) : !lastPost ? (
          <p className="text-sm text-calmint-dark/70">
            Todavía no hay posts creados.
          </p>
        ) : (
          <div className="rounded-xl border border-calmint-peach/70 bg-calmint-cream/60 p-4 text-sm text-calmint-dark">
            <p className="text-xs text-calmint-dark/60">
              ID: {lastPost.id} ·{" "}
              {lastPost.createdAt &&
                new Date(lastPost.createdAt).toLocaleString("es-PA")}
            </p>
            <p className="mt-1 font-semibold">{lastPost.title}</p>
            {(lastPost.description || lastPost.content) && (
              <p className="mt-1 text-sm text-calmint-dark/80">
                {lastPost.description ?? lastPost.content}
              </p>
            )}
            {lastPost.imageUrl && (
              <p className="mt-1 text-xs text-calmint-dark/70 break-all">
                Imagen: {lastPost.imageUrl}
              </p>
            )}

            <button
              type="button"
              onClick={handleDeleteLast}
              disabled={deleting}
              className="mt-3 rounded-full bg-red-500/90 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-red-600 disabled:opacity-60"
            >
              {deleting ? "Borrando..." : "Eliminar último post"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
