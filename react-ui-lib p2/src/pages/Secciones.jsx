import generos from "../utils/generos"; // array de objetos {id, nombre}
import TarjetaLibro from "../componentes/TarjetaLibro";
import { useState } from "react";

function Secciones({ libros }) {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("");

  const librosFiltrados = libros.filter(libro => {  // <-- acá
    const coincideBusqueda = libro.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaFiltro === "" || libro.categoria === categoriaFiltro;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div className="secciones bg-gradient-to-r from-[#A44A3F] to-[#D4A373]
    
    // lg ver
    lg: p-5

    ">

      {/* Buscador */}
      <div className="busqueda mt-8">
        <form
          className="relative top-1/2 mt-2.5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50px] 
          h-[50px] bg-white rounded-full border-4 border-white p-1 transition-all duration-1000 overflow-hidden
         hover:w-[300px] cursor-pointer
         
        
        "
        >
          <input
            type="search"
            placeholder="Buscar un Libro ..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="absolute top-0 appearance-none left-0 w-full h-[42.5px] text-black outline-none border-none text-base rounded-[20px] px-5 hover:block peer"
          />
          <i
            className="fa fa-search absolute top-0 right-0 w-[42.5px] h-[42.5px] rounded-full text-red-500 text-center text-[1.2em] flex items-center justify-center transition-all duration-1000 peer-hover:bg-text-red-500 peer-hover:text-red-500 hover:scale-110"
          >🔍</i>
        </form>

        {/* Mostrar productos filtrados */}
        {busqueda.trim() !== "" && (
          <>
            <p className="text-2xl font-bold text-center
            // lg ver
            lg:mb-6
            
            ">Mostrando {librosFiltrados.length} de {libros.length} libros</p>

            {librosFiltrados.length > 0 ? (
              <TarjetaLibro libros={librosFiltrados} />
            ) : (
              <p className="text-center m-2.5">No se encontraron libros que coincidan con tu búsqueda.</p>
            )}
          </>
        )}
      </div>

      {
        generos.map((genero) => {
          const nombreGenero = genero.nombre;

          return (
            <section
              key={genero.id}
              id={nombreGenero.toLowerCase().replace(/\s/g, "")}
            >
              <h1 className="font-bold text-5xl text-center mb-5 text-white
              // lg ver
              lg:text-6xl lg:mt-7
              ">{nombreGenero}</h1>
              <p
                className="text-center text-black font-bold mb-5.5
                // lg ver
                lg:text-2xl lg:mb-15"
                id="descripcion-sec"
              >
                Ofrecemos los siguientes libros a continuación
              </p>

              <TarjetaLibro genero={nombreGenero} libros={libros} />  {/* acá también */}
            </section>
          );
        })
      }
    </div>
  );
}

export default Secciones;
