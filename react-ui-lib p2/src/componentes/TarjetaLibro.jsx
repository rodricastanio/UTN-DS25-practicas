function TarjetaLibro({ genero, libros = [] }) {
  const librosAMostrar = genero
    ? libros.filter(libro => libro.genero === genero)
    : libros;

  return (
    <div className="p-5.5 grid grid-cols-2 gap-10 place-items-center">
      {librosAMostrar.map(libro => (
        <div
          key={libro.titulo} 
          className="bloque bg-amber-100 flex flex-col w-110 items-center justify-center p-6 rounded-3xl hover:scale-105 m-auto min-h-[700px]"
        >
          <h2 className="font-bold text-2xl text-center mb-3.5">{libro.titulo}</h2>
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

export default TarjetaLibro