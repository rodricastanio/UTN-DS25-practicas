import generos from '../utils/generos';
import { useState } from 'react';
import CatalogoGeneros from '../componentes/CatalogoGeneros';


const Home = () => {

  //declaro UseState
  const [gen, setGeneros] = useState(generos)
  console.log(gen)


  return (
    <div className="inicio bg-red-400 p-10">
      <h2 className='text-center font-bold text-3xl mb-6'>En Crónicas de Tinta ofrecemos distintas categorías de lectura</h2>
      <CatalogoGeneros generos={gen}/>
      {/* aca establezco que generos va a tener el valor de gen, declarado en el state */}

    </div>
  );
};

export default Home;