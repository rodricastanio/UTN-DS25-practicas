function Contacto() {

    return (
        <div className="contacto bg-red-400 p-10">
            <h1 className="font-bold text-3xl text-center mb-5">Contacto</h1>
            <div className="info-contacto bg-amber-100 w-full h-100 m-auto flex 
            items-center flex-col
                 rounded-3xl p-8" >
                <ul className=" flex flex-col gap-4.5">
                    <li><strong>Instagram:</strong> <a href="">cronicasdeTinta</a></li>
                    <li><strong>Facebook:</strong> <a href="">cronicasdeTinta</a></li>
                    <li><strong>Twitter:</strong> <a href="">cronicasdeTinta</a></li>
                    <li><strong>Gmail:</strong> <a href="">cronicasdetinta@gmail.com</a></li>
                    <li><strong>Telefono:</strong> 1122334455</li>
                    <li><strong>Direccion:</strong> av SiempreViva 123</li>
                </ul>
            </div>

            <div className="info-contacto">
                <h2 className="font-bold text-2xl text-center mt-10 mb-5">Formulario de contacto</h2>
                <div className="formulario bg-amber-100 w-full h-160 m-auto flex items-center flex-col
                 rounded-3xl p-8">
                     <form className="form-cont flex flex-col items-center 
            justify-center " action="" method="post">
                    <label  htmlFor="nombre">Nombre</label>
                    <input className="input-bg-contacto w-1.5" type="text" id="nombre" />
                    <label htmlFor="nombre">Apellido</label>
                    <input className="input-bg-contacto" type="text" id="apellido" />
                    <label htmlFor="email">Email</label>
                    <input className="input-bg-contacto" type="email" id="email" />
                    <label htmlFor="asunto">Asunto</label>
                    <input className="input-bg-contacto" type="text" id="asunto" />
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea className="bg-pink-300 w-65 rounded-2xl pt-5 pl-2 mb-3 h-15" name="mensaje" id="mensaje"></textarea>
                    <input className="bg-red-400 h-12 rounded-2xl font-bold hover:text-white hover:scale-105 " type="submit" value="Enviar" />
                </form>
                </div>
               
            </div>
        </div>

    )

}

export default Contacto


