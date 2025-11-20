'use client';

import { useState, FormEvent } from 'react';

const ADMIN_PASSWORD = 'Calmint2024!';

export default function CalmintSecretPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      setPassword('');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  const handleCreatePost = async (e: FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          imageUrl: imageUrl || null,
        }),
      });

      if (!res.ok) {
        setMessage('Error creando el post. Revisa los logs en Vercel.');
        return;
      }

      setMessage('Post creado correctamente ✅');
      setTitle('');
      setDescription('');
      setImageUrl('');
    } catch (err) {
      setMessage('Error de conexión al crear el post.');
    }
  };

  const handleDeleteLast = async () => {
    setMessage('');

    try {
      const res = await fetch('/api/posts/last', {
        method: 'DELETE',
      });

      if (!res.ok) {
        setMessage('Error borrando el último post. Revisa los logs en Vercel.');
        return;
      }

      setMessage('Último post borrado correctamente 🗑️');
    } catch (err) {
      setMessage('Error de conexión al borrar el post.');
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm space-y-4 bg-slate-900/80 border border-slate-700 rounded-2xl p-6 shadow-xl"
        >
          <h1 className="text-xl font-semibold text-center mb-2">
            Panel Calmint – Acceso
          </h1>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Contraseña de administrador
            </label>
            <input
              type="password"
              className="w-full rounded-xl border border-slate-600 bg-slate-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-sm text-red-400 text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-400 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-300 transition"
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Panel secreto Calmint</h1>
          <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
            Admin conectado
          </span>
        </header>

        <section className="bg-slate-900/80 border border-slate-700 rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-semibold">Crear nuevo post</h2>
          <form onSubmit={handleCreatePost} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Título</label>
              <input
                className="w-full rounded-xl border border-slate-600 bg-slate-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Descripción</label>
              <textarea
                className="w-full rounded-xl border border-slate-600 bg-slate-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400 min-h-[80px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                URL de imagen (opcional)
              </label>
              <input
                className="w-full rounded-xl border border-slate-600 bg-slate-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://..."
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-300 transition"
            >
              Guardar post
            </button>
          </form>

          {message && (
            <p className="text-sm mt-2 text-emerald-300">
              {message}
            </p>
          )}
        </section>

        <section className="bg-slate-900/80 border border-slate-700 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-3">Borrar último post</h2>
          <p className="text-sm text-slate-300 mb-4">
            Este botón elimina el post más reciente que aparece en la sección de
            Novedades Calmint en la landing.
          </p>
          <button
            type="button"
            onClick={handleDeleteLast}
            className="rounded-xl bg-red-500/90 px-4 py-2 text-sm font-semibold text-slate-50 hover:bg-red-400 transition"
          >
            Borrar último post
          </button>
        </section>
      </div>
    </main>
  );
}
