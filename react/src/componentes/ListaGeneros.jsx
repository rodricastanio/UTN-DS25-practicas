import React from 'react';
import generos from '../generos';
import TarjetaGenero from './TarjetaGenero';

const ListaGeneros = () => {
  return (
    <div className="inicio">
      <h2>En Crónicas de Tinta ofrecemos distintas categorías de lectura</h2>
      <div className="bloques">
        {generos.map(genero => (
          <TarjetaGenero key={genero.id} genero={genero} />
        ))}
      </div>
    </div>
  );
};

export default ListaGeneros;