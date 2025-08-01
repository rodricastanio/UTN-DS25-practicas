function Registro() {


    return (
        <div className="reg bg-red-400 p-10">
            <h1 className="font-bold text-4xl text-center">Formulario de registro</h1>
            <h3 className="text-center mb-8 mt-2">A continuacion, complete los siguientes datos</h3>
            <div className="bg-amber-100 w-250 h-200 m-auto rounded-3xl p-8">
                <form className="flex flex-col m-auto items-center justify-center" action="" method="post">
                    <label htmlForfor="nombre">Nombre</label>
                    <input className="input-bg" type="text" id="nombre" name="nombre" />
                    <label htmlForfor="apellido">Apellido</label>
                    <input className="input-bg" type="text" id="apellido" name="apellido" />
                    <label htmlForfor="nacimiento">Fecha de nacimiento</label>
                    <input className="input-bg" type="date" id="nacimiento" name="nacimiento" />
                    <label htmlFor="email">Email</label>
                    <input className="input-bg" type="email" id="email" name="email" />
                    <label htmlFor="psswd">Contraseña</label>
                    <input className="input-bg" type="password" id="psswd" name="passwd" />
                    <label className="mb-2.5">Sexo</label>
                    <div className="sexo-opc flex flex-row gap-2.5 ">
                        <input type="radio" name="sexo" id="hombre" value="hombre" />
                        <label htmlFor="hombre">Hombre</label>
                        <input type="radio" name="sexo" id="mujer" value="mujer" />
                        <label htmlFor="mujer">Mujer</label>
                        <input type="radio" name="sexo" id="noesp" value="noesp" />
                        <label htmlFor="noesp">No especificado</label>
                    </div>
                    <label className="mb-3 mt-2.5" htmlFor="tema">Tema favorito</label>
                    <select className="bg-pink-300 hover:text-white h-12 w-50 p-2.5 mb-2.5 font-bold rounded-2xl " name="tema" id="tema">
                        <option value="" selected disabled>Seleccione un tema</option>
                        <option value="romance">Romance</option>
                        <option value="psicologia">Psicologia</option>
                        <option value="terror">Terror</option>
                        <option value="ciencia">Ciencia ficcion</option>
                    </select>
                    <input className="bg-red-400 h-12 rounded-2xl font-bold hover:text-white hover:scale-105" type="submit" value="Enviar" />
                </form>
            </div>

        </div>

    )
}

export default Registro
