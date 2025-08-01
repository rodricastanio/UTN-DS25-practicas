import generos from '../utils/generos';
import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <div className="menu bg-amber-200 p-4.5">
  <nav>
    <ul className="flex gap-10.5 items-center justify-center text-2xl
     text-red-400 font-bold ">
      <li className='hover:underline hover:scale-105 hover:text-red-500 '>
        <Link to="/">Inicio</Link>
      </li>

      <li className="relative group hover:underline hover:scale-105 hover:text-red-500">
        <Link to="secciones">Secciones</Link>
        <ul className="absolute bg-amber-200 p-2.5 flex-col gap-4 rounded-md shadow-md 
        overflow-hidden hidden group-hover:flex z-10">
          {generos.map(genero => (
            <li key={genero.id} className='hover:underline hover:scale-105 text-red-400 hover:text-red-500'>
              <a href={`secciones#${genero.id}`}>{genero.nombre}</a>
            </li>
          ))}
        </ul>
      </li>

      <li className='hover:underline hover:scale-105 hover:text-red-500'>
        <Link to="registro">Registrate</Link>
      </li>
      <li className='hover:underline hover:scale-105 hover:text-red-500'>
        <Link to="contacto">Contacto</Link>
      </li>
    </ul>
  </nav>
</div>

  );
};

export default Navegacion;