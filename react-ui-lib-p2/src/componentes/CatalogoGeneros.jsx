import TarjetaGenero from "./TarjetaGenero";

function CatalogoGeneros({ generos }) { 
    // generos es un "nombre de parámetro", el props
  return (

    <div className="bloques p-5.5 grid place-items-center
    // lg ver
    lg:grid-cols-2
    ">

      {generos.map(genero => (
        <TarjetaGenero key={genero.id} genero={genero} />
      ))}
    </div>
  );
}

export default CatalogoGeneros;
