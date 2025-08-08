import { useState } from "react";
import TarjetaLibro from "../componentes/TarjetaLibro";
import { Toaster, toast } from "sonner";

function Colaboracion({ agregarLibro }) {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [genero, setGenero] = useState("");
    const [librosNuevos, setLibrosNuevos] = useState([]);

    const enviarFormulario = (e) => {
        e.preventDefault();

        const libroNuevo = {
            titulo,
            autor,
            genero,
            descripcion,
            imagen: "/imagenes/PortadaGenerica.jpg",
        };

        agregarLibro(libroNuevo);

        setLibrosNuevos([libroNuevo]);

        toast.success("Libro creado exitosamente!");

        setTitulo("");
        setAutor("");
        setGenero("");
        setDescripcion("");
    };

    return (
        <div className="colaboracion bg-red-400 p-0.5">
            <div className="descripcion">
                <h1 className="text-4xl font-bold text-center p-5">
                    ¡Colaborá con tus libros favoritos!
                </h1>
                <h2 className="text-2xl text-center font-medium">
                    En Crónicas de Tinta ofrecemos a nuestros lectores la posibilidad de
                    contribuir con sus libros favoritos.
                </h2>
                <p className="text-center font-medium">
                    A continuación, te proponemos un formulario para completar los datos
                    del libro en cuestión.
                </p>
            </div>

            <form
                className="bg-white text-black flex flex-col gap-3 items-center justify-center p-15 w-180 h-130 m-auto rounded-3xl mt-10 mb-10"
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
                    className="mb-6 bg-pink-300 appearance-none p-2.5 rounded-2xl hover:scale-110"
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
                    className=" bg-pink-400 hover:bg-pink-300 hover:text-black hover:scale-110
           text-white text-2xl font-bold py-3 px-8 rounded-3xl 
           shadow-lg transition-colors duration-300"
                >
                    Enviar
                </button>
            </form>


            {librosNuevos.length !== 0 && (
                <div className="libNuevo flex flex-col items-center justify-center text-center min-h-[400px] mb-5">
                    <h2 className="mb-4 font-bold text-2xl">
                        Tu libro favorito ya se encuentra en Crónicas de Tinta!
                    </h2>
                    <div className="flex justify-center ml-100">
                        <TarjetaLibro libros={librosNuevos} />
                    </div>
                </div>
            )}



        </div>
    );
}

export default Colaboracion;
