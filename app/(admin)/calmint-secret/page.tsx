'use client';

import { useEffect, useState } from 'react';
import AdminPostForm from '@/components/AdminPostForm';

export default function CalmintSecretPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingLocal, setIsCheckingLocal] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('calmint-admin-auth');
    if (stored === 'true') {
      setIsAuthenticated(true);
    }
    setIsCheckingLocal(false);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password })
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setError(data.error || 'Contraseña incorrecta.');
        setIsAuthenticated(false);
        window.localStorage.removeItem('calmint-admin-auth');
      } else {
        setIsAuthenticated(true);
        window.localStorage.setItem('calmint-admin-auth', 'true');
        setPassword('');
      }
    } catch (err) {
      console.error(err);
      setError('Error al verificar la contraseña. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (isCheckingLocal) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-calmint-cream">
        <p className="text-calmint-dark/70">Cargando...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-calmint-cream px-4">
        <div className="card-soft max-w-md w-full p-8">
          <h1 className="heading-display mb-4">Calmint – Admin</h1>
          <p className="subheading mb-6">
            Esta sección es solo para la dueña de Calmint. Ingresa la
            contraseña para crear nuevas novedades.
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-calmint-dark/80 mb-1"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                className="w-full rounded-full border border-calmint-green/40 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-calmint-green/60 bg-white/80"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Introduce tu contraseña secreta"
              />
            </div>
            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="btn-whatsapp w-full justify-center"
              disabled={loading}
            >
              {loading ? 'Verificando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-calmint-cream px-4 py-10">
      <div className="container-calmint">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="heading-display mb-2">Panel de Novedades</h1>
            <p className="subheading">
              Crea nuevos posts para que aparezcan automáticamente en tu
              landing de Calmint.
            </p>
          </div>
          <button
            className="text-xs text-calmint-dark/70 underline"
            onClick={() => {
              window.localStorage.removeItem('calmint-admin-auth');
              setIsAuthenticated(false);
            }}
          >
            Cerrar sesión
          </button>
        </div>
        <div className="card-soft p-6 md:p-8">
          <AdminPostForm />
        </div>
      </div>
    </div>
  );
}
