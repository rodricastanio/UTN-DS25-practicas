function Contacto() {

    return (
        <div className="contacto">
            <h1>Contacto</h1>
            <div className="info-contacto">
                <ul>
                    <li><strong>Instagram:</strong> <a href="">cronicasdeTinta</a></li>
                    <li><strong>Facebook:</strong> <a href="">cronicasdeTinta</a></li>
                    <li><strong>Twitter:</strong> <a href="">cronicasdeTinta</a></li>
                    <li><strong>Gmail:</strong> <a href="">cronicasdetinta@gmail.com</a></li>
                    <li><strong>Telefono:</strong> 1122334455</li>
                    <li><strong>Direccion:</strong> av SiempreViva 123</li>
                </ul>
            </div>

            <div className="form-contacto">
                <h2>Formulario de contacto</h2>
                <form action="" method="post">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" />
                    <label for="nombre">Apellido</label>
                    <input type="text" id="apellido" />
                    <label for="email">Email</label>
                    <input type="email" id="email" />
                    <label for="asunto">Asunto</label>
                    <input type="text" id="asunto" />
                    <label for="mensaje">Mensaje</label>
                    <textarea name="mensaje" id="mensaje"></textarea>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>

    )

}

export default Contacto


