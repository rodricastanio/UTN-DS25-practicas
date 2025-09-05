import { useState, useEffect } from 'react';
import CatalogoGeneros from '../componentes/CatalogoGeneros';

const Home = () => {
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/generos`) // 👈 que coincida con tu back
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => setGeneros(Array.isArray(data) ? data : (data.generos ?? [])))
      .catch(err => setError(String(err)));
  }, []);

  return (
    <div className="inicio bg-gradient-to-r from-[#A44A3F] to-[#D4A373]

 p-2.5">
      <h2 className='text-center font-medium text-2xl p-2.5'>En Crónicas de Tinta ofrecemos distintas categorías de lectura</h2>
      <CatalogoGeneros generos={generos} />
    </div>
  );
};

export default Home;