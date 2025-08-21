
const TarjetaGenero = ({ genero }) => {
  return (
    <div className="bloque bg-amber-100 w-70 flex flex-col items-center 
    justify-start gap-2.5 p-5.5 rounded-3xl hover:scale-105 mb-4.5
    transform transition-transform duration-300 
    
  //  lg ver
  lg:w-90 lg:h-600px lg:h-[600px] lg:m-5
  
  
    ">
      <h3 className="font-bold text-2xl hover:text-gray-600 
      transform transition-transform duration-300  hover:underline"><a href={`secciones#${genero.id}`}>{genero.nombre}</a></h3>
      <h5 className="font-bold text-gray-500">Destacado</h5>
      <h4 className="font-bold text-1x1 ">{genero.destacado.titulo}</h4>
      <figure>
        <img
          src={genero.destacado.imagen}
          alt={`Portada de ${genero.destacado.titulo}`}
        />
        <figcaption>{genero.destacado.autor}</figcaption>
      </figure>
    </div>
  );
};

export default TarjetaGenero;