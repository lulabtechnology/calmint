"use client";

import { useEffect, useState, FormEvent } from "react";
import AdminPostForm from "@/components/AdminPostForm";

// 🔐 Leemos la variable PÚBLICA de Vercel
const ADMIN_PASSWORD =
  process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "";

export default function CalmintSecretPage() {
  const [input, setInput] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState("");

  // Si ya se autenticó antes, lo recordamos con localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("calmint_admin_auth");
      if (stored === "true") {
        setIsAuth(true);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!ADMIN_PASSWORD) {
      setError(
        "La variable NEXT_PUBLIC_ADMIN_PASSWORD no está configurada en el servidor."
      );
      return;
    }

    if (input === ADMIN_PASSWORD) {
      setIsAuth(true);
      setError("");
      if (typeof window !== "undefined") {
        window.localStorage.setItem("calmint_admin_auth", "true");
      }
    } else {
      setError("Contraseña incorrecta. Intenta de nuevo.");
    }
  };

  // Vista de login
  if (!isAuth) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-calmint-cream px-4">
        <div className="w-full max-w-sm rounded-2xl border border-calmint-peach/60 bg-white/90 p-6 shadow-sm">
          <h1 className="mb-1 text-lg font-display text-calmint-dark">
            Calmint Scents – Panel privado
          </h1>
          <p className="mb-4 text-sm text-calmint-dark/70">
            Ingresa la contraseña para gestionar las novedades de Calmint
            Scents.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-calmint-dark/80">
                Contraseña de administración
              </label>
              <input
                type="password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full rounded-lg border border-calmint-peach/70 bg-calmint-cream/60 px-3 py-2 text-sm text-calmint-dark outline-none ring-calmint-green/40 focus:ring-2"
              />
            </div>

            {error && (
              <p className="text-xs text-red-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-calmint-green px-4 py-2 text-sm font-medium text-calmint-cream shadow-sm transition hover:bg-calmint-dark"
            >
              Entrar
            </button>
          </form>

          <p className="mt-3 text-[11px] text-calmint-dark/50">
            Si olvidaste la contraseña, actualízala en Vercel en la variable{" "}
            <code className="rounded bg-calmint-cream px-1">
              NEXT_PUBLIC_ADMIN_PASSWORD
            </code>
            .
          </p>
        </div>
      </main>
    );
  }

  // Vista cuando ya estás autenticado
  return (
    <main className="min-h-screen bg-calmint-cream px-4 py-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-calmint-peach/60 bg-white/90 p-6 shadow-sm">
        <h1 className="mb-2 text-xl font-display text-calmint-dark">
          Panel de Novedades – Calmint Scents
        </h1>
        <p className="mb-4 text-sm text-calmint-dark/70">
          Crea nuevos posts para la sección “Novedades Calmint” y, si lo
          necesitas, elimina el último post publicado.
        </p>

        <AdminPostForm />
      </div>
    </main>
  );
}
