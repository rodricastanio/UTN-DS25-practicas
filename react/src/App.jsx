import './estilos/estilo.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Registro from "./pages/Registro"
import Contacto from './pages/Contacto';
import Layout from "./componentes/Layout"
import Secciones from './pages/Secciones';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* para dejar fijo el layout siempre */}
          <Route path="/" element={<Layout />}> 
            <Route index element={<Home />} />
            <Route path="registro" element={<Registro />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="secciones" element={<Secciones />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
