
const Encabezado = () => {
  return (
    <div className="bg-[url('../../public/imagenes/header.png')] bg-cover bg-center w-full h-30" >
      <header>
        <div className="conc flex flex-row justify-center items-center" >
          <h1 className="text-red-400 drop-shadow-[2px_2px_0_black]  text-6xl font-bold">Crónicas de Tinta</h1>
          <img src="/imagenes/Logo.png" alt="Logo de la librería" className="h-25 w-25"/>
        </div>
      </header>
    </div>
  );
};

export default Encabezado;