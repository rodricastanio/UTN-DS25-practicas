// src/componentes/Navegacion.jsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// mismo slug que usás en Secciones
const slug = (s) =>
  (s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '');

// helper para evitar "Unexpected token '<'"
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

const Navegacion = () => {
  const [gen, setGen] = useState([]);
  const [error, setError] = useState(null);

  // llamada a la API
  useEffect(() => {
    (async () => {
      try {
        const base = import.meta.env.VITE_API_URL || '';
        const url = base ? `${base}/api/generos` : '/api/generos'; // usa proxy si no hay .env
        const data = await fetchJson(url);
        const list = Array.isArray(data) ? data : (data.generos ?? data.items ?? []);
        setGen(list);
      } catch (e) {
        console.error(e);
        setError(String(e));
        setGen([]);
      }
    })();
  }, []);

  return (
    <div className="menu bg-gradient-to-l from-[#FAF3E0] to-[#C9B79C] p-2.5">
      <nav>
        <ul className="grid grid-cols-3 justify-center items-center text-center text-[#A44A3F] font-bold gap-4
                       lg:flex lg:gap-25 lg:flex-row lg:text-2xl">
          <li className="hover:underline hover:scale-105 text-[#A44A3F]">
            <Link to="/">Inicio</Link>
          </li>

          <li className="relative group hover:underline hover:scale-105 text-[#A44A3F]">
            <Link to="/secciones">Secciones</Link>
            <ul className="absolute bg-gradient-to-l from-[#FAF3E0] to-[#C9B79C] p-2.5 flex-col gap-4 rounded-md shadow-md 
                           overflow-hidden hidden group-hover:flex z-10 min-w-48">
              {error && (
                <li className="text-red-600 px-2 py-1">Error al cargar géneros</li>
              )}

              {(!error && gen.length === 0) && (
                <li className="px-2 py-1 text-[#A44A3F]/70">Cargando…</li>
              )}

              {gen.map((genero) => {
                const idSec = genero.id ?? slug(genero.nombre);
                return (
                  <li
                    key={idSec}
                    className="hover:underline hover:scale-105 text-[#A44A3F] hover:text-red-500"
                  >
                    {/* usamos <a> para que el hash salte a la sección sin libs extra */}
                    <a href={`/secciones#${idSec}`}>{genero.nombre}</a>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className="hover:underline hover:scale-105 hover:text-red-500">
            <Link to="/registro">Registrate</Link>
          </li>
          <li className="hover:underline hover:scale-105 hover:text-red-500">
            <Link to="/colaboracion">Colaboración</Link>
          </li>
          <li className="hover:underline hover:scale-105 hover:text-red-500">
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navegacion;
