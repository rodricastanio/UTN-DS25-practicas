import generos from '../utils/generos';
import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <div className="menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li className="drop">
            <Link to="secciones">Secciones</Link>
            <ul className="submenu">
              {generos.map(genero => (
                <li key={genero.id}>
                 <a href={`secciones#${genero.id}`}>{genero.nombre}</a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="registro">Registrate</Link>
          </li>
          <li>
            <Link to="contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navegacion;