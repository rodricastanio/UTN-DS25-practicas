import React from 'react';

const TarjetaGenero = ({ genero }) => {
  return (
    <div className="bloque">
      <h3><a href={`secciones.html#${genero.id}`}>{genero.nombre}</a></h3>
      <h5>Destacado</h5>
      <h4>{genero.destacado.titulo}</h4>
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