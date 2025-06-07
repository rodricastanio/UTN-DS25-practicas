import React from 'react';
import './estilos/estilo.css';
import Encabezado from './componentes/Encabezado';
import Navegacion from './componentes/Navegacion';
import ListaGeneros from './componentes/ListaGeneros';
import PiePagina from './componentes/PiePagina';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <Navegacion />
      <ListaGeneros />
      <PiePagina />
    </div>
  );
}

export default App;