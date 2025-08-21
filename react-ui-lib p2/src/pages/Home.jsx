import generos from '../utils/generos';
import { useState } from 'react';
import CatalogoGeneros from '../componentes/CatalogoGeneros';


const Home = () => {

  //declaro UseState
  const [gen, setGeneros] = useState(generos)
  console.log(gen)


  return (
    <div className="inicio bg-gradient-to-r from-[#A44A3F] to-[#D4A373]

 p-2.5">
      <h2 className='text-center font-medium text-2xl p-2.5'>En Crónicas de Tinta ofrecemos distintas categorías de lectura</h2>
      <CatalogoGeneros generos={gen}/>
      {/* aca establezco que generos va a tener el valor de gen, declarado en el state */}

    </div>
  );
};

export default Home;