import React from 'react';

const PiePagina = () => {
  return (
    <footer>
      <div className="footer-content flex flex-col items-center 
      justify-center mt-2.5 bg-amber-200 p-8 gap-5 text-gray-800" 
      >
        <p><a href="mailto:cronicasdeTinta@gmail.com">cronicasdeTinta@gmail.com</a></p>
        <div className="redes flex flex-row gap-4">
          <a href="https://facebook.com/cronicasdeTinta" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com/cronicasdeTinta" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com/cronicasdeTinta" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <p><a href="terminos.html">Términos y Condiciones</a></p>
        <p>&copy; 2025 Librería Crónicas de Tinta. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default PiePagina;