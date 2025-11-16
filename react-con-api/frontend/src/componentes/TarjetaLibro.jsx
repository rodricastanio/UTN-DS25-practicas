function TarjetaLibro({ genero, libros = [] }) {
  // normalizador: quita tildes, espacios y pasa a minúsculas
  const slug = (s) =>
    String(s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[\s\-_/]+/g, "")
      .replace(/[^a-z0-9]/g, "");

  const librosAMostrar = genero
    ? libros.filter((libro) => slug(libro.genero) === slug(genero))
    : libros;

  if (!Array.isArray(librosAMostrar) || librosAMostrar.length === 0) {
    return (
      <div className="grid gap-10 place-items-center lg:grid-cols-2">
        <p className="text-center text-white/90 p-6">No hay libros para esta sección.</p>
      </div>
    );
  }

  return (
    <div className=" grid gap-10 place-items-center lg:grid-cols-2">
      {librosAMostrar.map((libro) => (
        <div
          key={libro.titulo}
          className="bloque bg-amber-100 flex flex-col w-70 items-center justify-center p-6 rounded-3xl hover:scale-105 m-auto min-h-[700px]  transform transition-transform duration-300 lg:w-100"
        >
          <h2 className="font-bold text-2xl text-center mb-3.5 lg:text-3xl">{libro.titulo}</h2>
          <figure>
            <img className="w-65 m-auto" src={libro.imagen} alt="imagen-libro" />
            <figcaption className="text-center mb-3.5">{libro.autor}</figcaption>
            <p className="text-center">{libro.descripcion}</p>
          </figure>
        </div>
      ))}
    </div>
  );
}

export default TarjetaLibro;