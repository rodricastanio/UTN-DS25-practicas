import { useState, useEffect } from 'react';
import CatalogoGeneros from '../componentes/CatalogoGeneros';

export default function Home() {
  const [generos, setGeneros] = useState([]);
  const [error, setError] = useState(null);

  // Helper para asegurarnos que la respuesta sea JSON
  async function fetchJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
    const ct = res.headers.get('content-type') || '';
    if (!ct.includes('application/json')) {
      const txt = await res.text();
      throw new Error(`Respuesta no-JSON desde ${url} (ct=${ct}): ${txt.slice(0, 100)}…`);
    }
    return res.json();
  }

  useEffect(() => {
    (async () => {
      try {
        // Si tenés VITE_API_URL en .env, usa esa base; de lo contrario, probá con proxy /api
        const base = import.meta.env.VITE_API_URL || '';
        const url = base ? `${base}/api/generos` : '/api/generos';

        const data = await fetchJson(url);
        const list = Array.isArray(data) ? data : (data.generos ?? data.items ?? []);
        setGeneros(list);
      } catch (e) {
        console.error(e);
        setError(String(e));
      }
    })();
  }, []);

  return (
    <div className="inicio bg-gradient-to-r from-[#A44A3F] to-[#D4A373] p-2.5">
      <h2 className="text-center font-medium text-2xl p-2.5">
        En Crónicas de Tinta ofrecemos distintas categorías de lectura
      </h2>

      {error && (
        <p className="text-red-600 p-2.5">
          Error cargando géneros: {error}
        </p>
      )}

      <CatalogoGeneros generos={generos} />
    </div>
  );
}
