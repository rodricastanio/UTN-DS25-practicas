import generos from '../utils/generos';
import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <div className="menu bg-gradient-to-l from-[#FAF3E0] to-[#C9B79C]
 p-2.5">
  <nav >
    <ul className="grid grid-cols-3 justify-center items-center text-center text-[#A44A3F] font-bold gap-4
     transform transition-transform duration-300
    // lg ver
    lg:flex lg:gap-25 lg:flex-row lg:text-2xl
    
    ">
      <li className='hover:underline hover:scale-105 text-[#A44A3F]'>
        <Link to="/">Inicio</Link>
      </li>

      <li className="relative group hover:underline hover:scale-105 text-[#A44A3F]">
        <Link to="secciones">Secciones</Link>
        <ul className="absolute bg-gradient-to-l from-[#FAF3E0] to-[#C9B79C] p-2.5 flex-col gap-4 rounded-md shadow-md 
        overflow-hidden hidden group-hover:flex z-10">
          {generos.map(genero => (
            <li key={genero.id} className='hover:underline hover:scale-105 text-[#A44A3F] hover:text-red-500'>
              <a href={`secciones#${genero.id}`}>{genero.nombre}</a>
            </li>
          ))}
        </ul>
      </li>

      <li className='hover:underline hover:scale-105 hover:text-red-500'>
        <Link to="registro">Registrate</Link>
      </li>
       <li className='hover:underline hover:scale-105 hover:text-red-500'>
        <Link to="colaboracion">Colaboracion</Link>
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