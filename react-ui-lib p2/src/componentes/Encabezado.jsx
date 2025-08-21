
const Encabezado = () => {
  return (
    <div className="bg-[url('../../public/imagenes/header.png')] bg-cover bg-center w-full h-18" >
      <header>
        <div className="conc flex flex-row justify-center items-center" >
          <h1 className="text-red-400 drop-shadow-[2px_2px_0_black]  text-4xl font-bold">Crónicas de Tinta</h1>
          <img src="/imagenes/Logo.png" alt="Logo de la librería" className="h-15 w-15"/>
        </div>
      </header>
    </div>
  );
};

export default Encabezado;