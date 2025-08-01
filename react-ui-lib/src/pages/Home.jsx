import generos from '../utils/generos';
import TarjetaGenero from '../componentes/TarjetaGenero';

const Home = () => {
  return (
    <div className="inicio bg-red-400 p-10">
      <h2 className='text-center font-bold text-3xl mb-6'>En Crónicas de Tinta ofrecemos distintas categorías de lectura</h2>
      <div className="bloques p-5.5 grid grid-cols-2 gap-10 place-items-center">
        {generos.map(genero => (
          <TarjetaGenero key={genero.id} genero={genero} />
        ))}
      </div>


    </div>
  );
};

export default Home;