"use client";

import { useState } from "react";

type Post = {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  createdAt: string;
};

export default function CalmintSecretPage() {
  const [step, setStep] = useState<"login" | "panel">("login");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [lastPost, setLastPost] = useState<Post | null>(null);
  const [panelLoading, setPanelLoading] = useState(false);

  // 🔐 Login usando la API /api/check-admin
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const res = await fetch("/api/check-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.ok) {
        setStep("panel");
        setPassword("");
        // Cargar último post al entrar
        await fetchLastPost();
      } else {
        setLoginError("Contraseña incorrecta.");
      }
    } catch (err) {
      console.error(err);
      setLoginError("Hubo un error al validar la contraseña.");
    } finally {
      setLoginLoading(false);
    }
  }

  // 🔁 Cargar último post
  async function fetchLastPost() {
    try {
      const res = await fetch("/api/posts/last", { cache: "no-store" });
      if (!res.ok) {
        setLastPost(null);
        return;
      }
      const data = await res.json();
      setLastPost(data.post ?? null);
    } catch (err) {
      console.error(err);
      setLastPost(null);
    }
  }

  // ➕ Crear post nuevo
  async function handleCreatePost(e: React.FormEvent) {
    e.preventDefault();
    setPanelLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          imageUrl: imageUrl || null,
        }),
      });

      if (!res.ok) {
        setMessage("No se pudo crear el post. Revisa los datos.");
        return;
      }

      setTitle("");
      setDescription("");
      setImageUrl("");
      setMessage("Post creado correctamente ✅");

      await fetchLastPost();
    } catch (err) {
      console.error(err);
      setMessage("Ocurrió un error al crear el post.");
    } finally {
      setPanelLoading(false);
    }
  }

  // 🗑️ Eliminar último post
  async function handleDeleteLast() {
    if (!lastPost) return;
    const confirmDelete = window.confirm(
      "¿Seguro que deseas eliminar el último post?"
    );
    if (!confirmDelete) return;

    setPanelLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/posts/last", {
        method: "DELETE",
      });

      if (!res.ok) {
        setMessage("No se pudo eliminar el último post.");
        return;
      }

      setMessage("Último post eliminado correctamente 🗑️");
      await fetchLastPost();
    } catch (err) {
      console.error(err);
      setMessage("Ocurrió un error al eliminar el post.");
    } finally {
      setPanelLoading(false);
    }
  }

  // UI: LOGIN
  if (step === "login") {
    return (
      <main className="min-h-screen bg-calmint-cream flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white/80 rounded-3xl shadow-lg p-8 border border-calmint-green/10">
          <h1 className="text-2xl font-semibold text-calmint-green mb-2">
            Panel de Novedades – Calmìnt Scents
          </h1>
          <p className="text-sm text-calmint-text/70 mb-6">
            Ingresa la contraseña de administración para gestionar las
            novedades que aparecen en la landing.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-calmint-text mb-1">
                Contraseña
              </label>
              <input
                type="password"
                className="w-full rounded-2xl border border-calmint-green/20 bg-calmint-cream/60 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-calmint-green focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            {loginError && (
              <p className="text-sm text-red-500 bg-red-50 rounded-2xl px-3 py-2">
                {loginError}
              </p>
            )}

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full rounded-2xl bg-calmint-green text-white font-medium py-2.5 hover:bg-calmint-green/90 transition disabled:opacity-60"
            >
              {loginLoading ? "Verificando..." : "Entrar al panel"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  // UI: PANEL DE NOVEDADES
  return (
    <main className="min-h-screen bg-calmint-cream px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white/80 rounded-3xl shadow-lg border border-calmint-green/10 p-8 space-y-8">
        <header className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-calmint-green">
              Panel de Novedades – Calmìnt Scents
            </h1>
            <p className="text-sm text-calmint-text/70">
              Crea nuevos posts para la sección “Novedades Calmint” y, si lo
              necesitas, elimina el último post publicado.
            </p>
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-calmint-text">
            Crear nuevo post
          </h2>
          <form onSubmit={handleCreatePost} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-calmint-text mb-1">
                Título del post
              </label>
              <input
                className="w-full rounded-2xl border border-calmint-green/20 bg-calmint-cream/60 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-calmint-green focus:border-transparent"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-calmint-text mb-1">
                Descripción corta
              </label>
              <textarea
                className="w-full rounded-2xl border border-calmint-green/20 bg-calmint-cream/60 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-calmint-green focus:border-transparent min-h-[100px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-calmint-text mb-1">
                URL de la imagen
              </label>
              <input
                className="w-full rounded-2xl border border-calmint-green/20 bg-calmint-cream/60 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-calmint-green focus:border-transparent"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Pega aquí la URL de la imagen (Cloudinary, etc.)"
              />
              <p className="text-xs text-calmint-text/60 mt-1">
                Puedes usar imágenes subidas a servicios como Cloudinary o más
                adelante a la carpeta <code>/public/images</code> del proyecto.
              </p>
            </div>

            {message && (
              <p className="text-sm text-calmint-text bg-calmint-cream/80 border border-calmint-green/20 rounded-2xl px-3 py-2">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={panelLoading}
              className="inline-flex items-center rounded-2xl bg-calmint-green text-white font-medium px-5 py-2.5 hover:bg-calmint-green/90 transition disabled:opacity-60"
            >
              {panelLoading ? "Guardando..." : "Crear post"}
            </button>
          </form>
        </section>

        <section className="space-y-4 border-t border-calmint-green/10 pt-6">
          <h2 className="text-lg font-semibold text-calmint-text">
            Último post publicado
          </h2>

          {lastPost ? (
            <div className="rounded-2xl border border-calmint-green/20 bg-calmint-cream/60 p-4 space-y-2 text-sm">
              <p className="text-xs text-calmint-text/60">
                ID: {lastPost.id} ·{" "}
                {new Date(lastPost.createdAt).toLocaleString("es-PA")}
              </p>
              <p className="font-semibold text-calmint-text">
                {lastPost.title}
              </p>
              <p className="text-calmint-text/80">{lastPost.description}</p>
              {lastPost.imageUrl && (
                <p className="text-xs text-calmint-text/70 break-all">
                  Imagen: {lastPost.imageUrl}
                </p>
              )}

              <button
                type="button"
                onClick={handleDeleteLast}
                disabled={panelLoading}
                className="mt-2 inline-flex items-center rounded-2xl bg-red-500 text-white text-xs font-medium px-4 py-1.5 hover:bg-red-600 transition disabled:opacity-60"
              >
                Eliminar último post
              </button>
            </div>
          ) : (
            <p className="text-sm text-calmint-text/70">
              No hay posts publicados todavía.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
