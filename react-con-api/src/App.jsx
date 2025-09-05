// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componentes/Layout";
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import Contacto from "./pages/Contacto";
import Secciones from "./pages/Secciones";
import Colaboracion from "./pages/Colaboracion";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="registro" element={<Registro />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="secciones" element={<Secciones />} />
          <Route path="colaboracion" element={<Colaboracion/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
