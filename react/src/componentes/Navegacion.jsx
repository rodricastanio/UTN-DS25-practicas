import React from 'react';
import generos from '../generos';

const Navegacion = () => {
  return (
    <div className="menu">
      <nav>
        <ul>
          <li><a href="principal.html">Inicio</a></li>
          <li className="drop">
            <a href="secciones.html">Secciones</a>
            <ul className="submenu">
              {generos.map(genero => (
                <li key={genero.id}>
                  <a href={`secciones.html#${genero.id}`}>{genero.nombre}</a>
                </li>
              ))}
            </ul>
          </li>
          <li><a href="registro.html">Registrate</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navegacion;