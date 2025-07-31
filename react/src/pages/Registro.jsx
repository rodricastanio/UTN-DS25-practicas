import { Link } from "react-router-dom"

function Registro() {


    return (
        <div className="reg">
            <h1>Formulario de registro</h1>
            <h3>A continuacion, complete los siguientes datos</h3>
            <div className="datos">
                <form action="" method="post">
                    <label htmlForfor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" />
                    <label htmlForfor="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido" />
                    <label htmlForfor="nacimiento">Fecha de nacimiento</label>
                    <input type="date" id="nacimiento" name="nacimiento" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="psswd">Contraseña</label>
                    <input type="password" id="psswd" name="passwd" />
                    <label>Sexo</label>
                    <div className="sexo-opc">
                        <input type="radio" name="sexo" id="hombre" value="hombre" />
                        <label htmlFor="hombre">Hombre</label>
                        <input type="radio" name="sexo" id="mujer" value="mujer" />
                        <label htmlFor="mujer">Mujer</label>
                        <input type="radio" name="sexo" id="noesp" value="noesp" />
                        <label htmlFor="noesp">No especificado</label>
                    </div>

                    <label htmlFor="tema">Tema favorito</label>
                    <select name="tema" id="tema">
                        <option value="" selected disabled>Seleccione un tema</option>
                        <option value="romance">Romance</option>
                        <option value="psicologia">Psicologia</option>
                        <option value="terror">Terror</option>
                        <option value="ciencia">Ciencia ficcion</option>
                    </select>
                    <input type="submit" value="Enviar" />
                </form>
            </div>

        </div>

    )
}

export default Registro
