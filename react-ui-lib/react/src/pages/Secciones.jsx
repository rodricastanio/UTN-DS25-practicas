import { libros } from "../utils/libros"

function Secciones() {

    return (
        <div className="secciones bg-red-400 p-10">
            <>
                <section  id="romance">
                    <h1 className="font-bold text-5xl text-center mb-4">Romance</h1>
                    <p className="text-center text-gray-800 font-bold mb-5.5" id="descripcion-sec">Ofrecemos los siguientes libros a continuación</p>

                    <div className="p-5.5 grid grid-cols-2 gap-10 place-items-center" >
                        {
                            libros.filter(g => g.genero === 'Romance').map((libro, i) => (
                                <div className="bloque bg-amber-100 flex flex-col w-110 items-center 
    justify-center p-6 rounded-3xl  hover:scale-105 m-auto min-h-[700px]" key={i}>
                                    <h2 className="font-bold text-2xl text-center mb-3.5">{libro.titulo}</h2>
                                    <figure>
                                        <img className="w-65 m-auto" src={libro.imagen} alt="imagen-libro" />
                                        <figcaption className="text-center mb-3.5">{libro.autor}</figcaption>
                                        <p className="text-center">{libro.descripcion}</p>
                                    </figure>
                                </div>
                            ))
                        }
                    </div>
                </section>



                {/* PSICCOLOGIA */}
                <section id="psicologia">
                    <h1 className="font-bold text-5xl text-center mb-4">Psicología</h1>
                    <p className="text-center text-gray-800 font-bold mb-5.5" id="descripcion-sec">Ofrecemos los siguientes libros a continuación</p>

                    <div className="p-5.5 grid grid-cols-2 gap-10 place-items-center" >
                        {
                            libros.filter(g => g.genero === 'Psicología').map((libro, i) => (
                                <div className="bloque bg-amber-100 flex flex-col w-110 items-center 
    justify-center p-6 rounded-3xl  hover:scale-105 m-auto min-h-[700px]" key={i}>
                                    <h2 className="font-bold text-2xl text-center mb-3.5">{libro.titulo}</h2>
                                    <figure>
                                        <img className="w-65 m-auto" src={libro.imagen} alt="imagen-libro" />
                                        <figcaption className="text-center mb-3.5">{libro.autor}</figcaption>
                                        <p className="text-center">{libro.descripcion}</p>
                                    </figure>
                                </div>
                            ))
                        }
                    </div>
                </section>


                {/* TERROR */}
                <section id="terror">
                    <h1 className="font-bold text-5xl text-center mb-4">Terror</h1>
                    <p className="text-center text-gray-800 font-bold mb-5.5" id="descripcion-sec">Ofrecemos los siguientes libros a continuación</p>

                    <div className="p-5.5 grid grid-cols-2 gap-10 place-items-center" >
                        {
                            libros.filter(g => g.genero === 'Terror').map((libro, i) => (
                                <div className="bloque bg-amber-100 flex flex-col w-110 items-center 
    justify-center p-6 rounded-3xl  hover:scale-105 m-auto min-h-[700px]" key={i}>
                                    <h2 className="font-bold text-2xl text-center mb-3.5">{libro.titulo}</h2>
                                    <figure>
                                        <img className="w-65 m-auto" src={libro.imagen} alt="imagen-libro" />
                                        <figcaption className="text-center mb-3.5">{libro.autor}</figcaption>
                                        <p className="text-center">{libro.descripcion}</p>
                                    </figure>
                                </div>
                            ))
                        }
                    </div>
                </section>




                {/* CIENCIA FICCION */}
                <section id="cienciaficcion">
                    <h1 className="font-bold text-5xl text-center mb-4">Ciencia Ficción</h1>
                    <p className="text-center text-gray-800 font-bold mb-5.5" id="descripcion-sec">Ofrecemos los siguientes libros a continuación</p>

                    <div className="p-5.5 grid grid-cols-2 gap-10 place-items-center" >
                        {
                            libros.filter(g => g.genero === 'Ciencia Ficción').map((libro, i) => (
                                <div className="bloque bg-amber-100 flex flex-col w-110 items-center 
    justify-center p-6 rounded-3xl  hover:scale-105 m-auto min-h-[700px]" key={i}>
                                    <h2 className="font-bold text-2xl text-center mb-3.5">{libro.titulo}</h2>
                                    <figure>
                                        <img className="w-65 m-auto" src={libro.imagen} alt="imagen-libro" />
                                        <figcaption className="text-center mb-3.5">{libro.autor}</figcaption>
                                        <p className="text-center">{libro.descripcion}</p>
                                    </figure>
                                </div>
                            ))
                        }
                    </div>
                </section>






            </>

        </div >





    )

}

export default Secciones



//         <h1>Romance</h1>
// <p id="descripcion-sec">Ofrecemos los siguientes libros a continuación</p>

// <div class="bloques-seccion">

//     <div class="bloque-seccion">
//         <h2>HeartStopper</h2>
//         <figure>
//             <img src="imagenes/PortadaHeartStopper.jpeg" alt="">
//             <figcaption>By Alice Oseman</figcaption>
//             <p>Una novela gráfica tierna y honesta sobre el amor adolescente entre Charlie, un chico
//                 sensible, y Nick, un jugador de rugby amable. Una historia que celebra la amistad, el
//                 autodescubrimiento y los vínculos reales.</p>
//         </figure>
//     </div>