// src/paginas/Colaboracion.jsx
import { useState } from "react";
import TarjetaLibro from "../componentes/TarjetaLibro";
import { Toaster, toast } from "sonner";
import portadaGenerica from "../../public/imagenes/PortadaGenerica.jpg"; // o usa "/imagenes/PortadaGenerica.jpg"

function Colaboracion({ agregarLibro }) {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");
  const [librosNuevos, setLibrosNuevos] = useState([]);

  const enviarFormulario = async (e) => {
    e.preventDefault();

    // Objeto con las keys que TarjetaLibro suele usar
    const payload = {
      id: Date.now(),            // id temporal por si el back no devuelve
      titulo,
      autor,
      descripcion,
      genero,
      categoria: genero,         // por compatibilidad si tu card usa 'categoria'
      imagen: portadaGenerica,   // ✅ URL válida (o "/imagenes/PortadaGenerica.jpg")
    };

    try {
      // Si todavía no tenés API, podés comentar este bloque
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      // Tu API puede responder { book: {...} } o el objeto directo
      const created = data.book ?? data ?? {};
      const normalizado = {
        ...payload,
        ...created,
        id: created.id ?? payload.id,
        categoria: created.categoria ?? created.genero ?? payload.categoria,
        imagen: created.imagen || payload.imagen, // si el back no hostea imagen, usamos la genérica
      };

      // 👉 se agrega abajo y se ve con TarjetaLibro
      setLibrosNuevos((prev) => [normalizado, ...prev]);
      agregarLibro?.(normalizado);

      toast.success("¡Libro creado exitosamente!");
    } catch (err) {
      console.error(err);
      // Si falla el POST, igual mostramos localmente
      setLibrosNuevos((prev) => [payload, ...prev]);
      agregarLibro?.(payload);
      toast.error("No se pudo guardar en la API. Mostramos el libro localmente.");
    } finally {
      // limpiar form
      setTitulo("");
      setAutor("");
      setGenero("");
      setDescripcion("");
    }
  };

  return (
    <div className="colaboracion bg-gradient-to-r from-[#A44A3F] to-[#D4A373] p-5">
      <div className="descripcion">
        <h1 className="text-2xl font-bold text-center p-2.5 text-white lg:text-4xl mb-5">
          ¡Colaborá con tus libros favoritos!
        </h1>
        <h2 className="text-black text-center font-medium lg:text-2xl">
          En Crónicas de Tinta ofrecemos a nuestros lectores la posibilidad de contribuir con sus libros favoritos.
        </h2>
        <p className="text-center m-2.5 font-bold lg:mb-10">
          Completá el formulario con los datos del libro.
        </p>
      </div>

      <form
        className="bg-amber-100 w-full h-auto m-auto flex items-center flex-col rounded-3xl p-6 lg:w-[600px]"
        onSubmit={enviarFormulario}
      >
        <input
          required
          className="input-bg"
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          required
          className="input-bg"
          type="text"
          placeholder="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
        <select
          required
          name="gen"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          className="mb-6 bg-[#A44A3F] text-white appearance-none p-2.5 rounded-2xl hover:scale-105 transition"
        >
          <option value="">Seleccioná género</option>
          <option value="Romance">Romance</option>
          <option value="Psicología">Psicología</option>
          <option value="Ciencia Ficción">Ciencia Ficción</option>
          <option value="Terror">Terror</option>
        </select>
        <input
          required
          className="input-bg"
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <Toaster position="top-center" richColors />

        <button
          type="submit"
          className="bg-[#A44A3F] hover:bg-[#A44A3F] transition duration-300 hover:scale-105
                     text-white w-32 h-10 rounded-2xl font-bold hover:text-black lg:h-12 text-xl"
        >
          Enviar
        </button>
      </form>

      {librosNuevos.length > 0 && (
        <div className="libNuevo flex flex-col items-center mt-5 justify-center text-center min-h-[400px] mb-5    
        lg:m-auto lg:p-0
        ">
          <h2 className="mb-4 font-bold text-2xl">¡Tu libro se agregó!</h2>
          <div className="flex justify-center">
            <TarjetaLibro libros={librosNuevos} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Colaboracion;
