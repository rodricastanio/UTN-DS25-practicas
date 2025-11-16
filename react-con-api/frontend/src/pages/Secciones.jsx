// src/paginas/Secciones.jsx
import TarjetaLibro from "../componentes/TarjetaLibro";
import { useState, useEffect } from "react";

// util para IDs de sección sin tildes/espacios
const slug = (s) =>
  (s || "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");

// helper para asegurar JSON (evita "Unexpected token '<'")
async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("application/json")) {
    const txt = await res.text();
    throw new Error(`Respuesta no-JSON desde ${url} (ct=${ct}): ${txt.slice(0, 120)}…`);
  }
  return res.json();
}

function Secciones() {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("");
  const [books, setBooks] = useState([]);
  const [gen, setGen] = useState([]);
  const [error, setError] = useState(null);

  // cargar géneros
  useEffect(() => {
    (async () => {
      try {
        const base = import.meta.env.VITE_API_URL || "";
        const url = base ? `${base}/api/generos` : "/api/generos"; // usa proxy si no hay .env
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

  // cargar libros
  useEffect(() => {
    (async () => {
      try {
        const base = import.meta.env.VITE_API_URL || "";
        const url = base ? `${base}/api/books` : "/api/books";
        const d = await fetchJson(url);
  setBooks(Array.isArray(d) ? d : (d.books ?? d.items ?? []));
      } catch (e) {
        console.error(e);
        setError(String(e));
        setBooks([]);
      }
    })();
  }, []);

  // buscador global
  const q = busqueda.trim().toLowerCase();
  const librosFiltrados = books.filter((libro) => {
    const titulo = (libro.titulo || "").toLowerCase();
    const cat = libro.categoria ?? libro.genero;
    const coincideBusqueda = q === "" || titulo.includes(q);
    const coincideCategoria = categoriaFiltro === "" || cat === categoriaFiltro;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div className="secciones bg-gradient-to-r from-[#A44A3F] to-[#D4A373] lg:p-5">
      {error && (
        <p className="text-red-600 p-2.5">
          Error cargando datos: {error}
        </p>
      )}

      {/* Buscador */}
      <div className="busqueda mt-8">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative top-1/2 mt-2.5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50px] 
                     h-[50px] bg-white rounded-full border-4 border-white p-1 transition-all duration-1000 overflow-hidden
                     hover:w-[300px] cursor-pointer"
        >
          <input
            type="search"
            placeholder="Buscar un Libro ..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="absolute top-0 appearance-none left-0 w-full h-[42.5px] text-black outline-none border-none text-base rounded-[20px] px-5 hover:block peer"
          />
          <i className="fa fa-search absolute top-0 right-0 w-[42.5px] h-[42.5px] rounded-full text-red-500 text-center text-[1.2em] flex items-center justify-center transition-all duration-1000 hover:scale-110">
            🔍
          </i>
        </form>

        {/* Mostrar productos filtrados */}
        {q !== "" && (
          <>
            <p className="text-2xl font-bold text-center lg:mb-6">
              Mostrando {librosFiltrados.length} de {books.length} libros
            </p>

            {librosFiltrados.length > 0 ? (
              <TarjetaLibro libros={librosFiltrados} />
            ) : (
              <p className="text-center m-2.5">
                No se encontraron libros que coincidan con tu búsqueda.
              </p>
            )}
          </>
        )}
      </div>

      {/* Secciones por género */}
      {gen.map((genero) => {
        const nombreGenero = genero.nombre;
        const idSec = genero.id ?? slug(nombreGenero);
       const librosDelGenero = books;

        return (
          <section key={idSec} id={idSec}>
            <h1 className="font-bold text-5xl text-center mb-5 text-white lg:text-6xl lg:mt-7">
              {nombreGenero}
            </h1>
            <p
              className="text-center text-black font-bold mb-5 lg:text-2xl"
              id="descripcion-sec"
            >
              Ofrecemos los siguientes libros a continuación
            </p>

            <TarjetaLibro genero={genero.id} libros={librosDelGenero} />
          </section>
        );
      })}
    </div>
  );
}

export default Secciones;
