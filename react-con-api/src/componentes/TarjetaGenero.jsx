const TarjetaGenero = ({ genero }) => {
  return (
    <div className="bg-amber-100 w-72 flex flex-col items-center gap-2.5 p-5 rounded-3xl hover:scale-105 mb-4 transition-transform duration-300 lg:w-96 lg:h-[600px] lg:m-5">
      <h3 className="font-bold text-2xl hover:text-gray-600 hover:underline transition-colors">
        <a href={`secciones#${genero.id}`}>{genero.nombre}</a>
      </h3>
      <h5 className="font-bold text-gray-500">Destacado</h5>

      <h4 className="font-bold text-xl">{genero.destacado.titulo}</h4>
      <figure className="w-full flex flex-col items-center">
        <img
          src={genero.destacado.imagen}
          alt={`Portada de ${genero.destacado.titulo}`}
          className="max-h-80 object-contain"
          loading="lazy"
        />
        <figcaption className="mt-2 text-sm text-gray-700">
          {genero.destacado.autor}
        </figcaption>
      </figure>
    </div>
  );
};

export default TarjetaGenero
