import { libros } from "../utils/libros"

function Secciones() {

    return (
        <div className="secciones">
            <>
                <section id="romance">
                    <h1>Romance</h1>
                    <p id="descripcion-sec">Ofrecemos los siguientes libros a continuación</p>

                    <div className="bloques-seccion">
                        {
                            libros.filter(g => g.genero === 'Romance').map((libro, i) => (
                                <div className="bloque-seccion" key={i}>
                                    <h2>{libro.titulo}</h2>
                                    <figure>
                                        <img src={libro.imagen} alt="imagen-libro" />
                                        <figcaption>{libro.autor}</figcaption>
                                        <p>{libro.descripcion}</p>
                                    </figure>
                                </div>
                            ))
                        }
                    </div>
                </section>



                {/* PSICCOLOGIA */}
                <section id="psicologia">
                    <h1>Psicología</h1>
                    <p id="descripcion-sec">Ofrecemos los siguientes libros a continuación</p>

                    <div className="bloques-seccion">
                        {
                            libros.filter(g => g.genero === 'Psicología').map((libro, i) => (
                                <div className="bloque-seccion" key={i}>
                                    <h2>{libro.titulo}</h2>
                                    <figure>
                                        <img src={libro.imagen} alt="imagen-libro" />
                                        <figcaption>{libro.autor}</figcaption>
                                        <p>{libro.descripcion}</p>
                                    </figure>
                                </div>
                            ))
                        }
                    </div>
                </section>


                {/* TERROR */}
                <section id="terror">
                    <h1>Terror</h1>
                    <p id="descripcion-sec">Ofrecemos los siguientes libros a continuación</p>

                    <div className="bloques-seccion">
                        {
                            libros.filter(g => g.genero === 'Terror').map((libro, i) => (
                                <div className="bloque-seccion" key={i}>
                                    <h2>{libro.titulo}</h2>
                                    <figure>
                                        <img src={libro.imagen} alt="imagen-libro" />
                                        <figcaption>{libro.autor}</figcaption>
                                        <p>{libro.descripcion}</p>
                                    </figure>
                                </div>
                            ))
                        }
                    </div>
                </section>




                {/* CIENCIA FICCION */}
                <section id="cienciaficcion">
                    <h1>Ciencia Ficción</h1>
                    <p id="descripcion-sec">Ofrecemos los siguientes libros a continuación</p>

                    <div className="bloques-seccion">
                        {
                            libros.filter(g => g.genero === 'Ciencia Ficción').map((libro, i) => (
                                <div className="bloque-seccion" key={i}>
                                    <h2>{libro.titulo}</h2>
                                    <figure>
                                        <img src={libro.imagen} alt="imagen-libro" />
                                        <figcaption>{libro.autor}</figcaption>
                                        <p>{libro.descripcion}</p>
                                    </figure>
                                </div>
                            ))
                        }
                    </div>
                </section>






            </>

        </div>





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