function Registro() {


    return (
        <div className="reg bg-red-400 p-10">
            <h1 className="font-bold text-4xl text-center">Formulario de registro</h1>
            <h3 className="text-center mb-8 mt-2">A continuacion, complete los siguientes datos</h3>
            <div className="bg-amber-100 w-250 h-175 m-auto rounded-3xl p-8">
                <form className="flex flex-col m-auto items-center justify-center" action="" method="post">
                    <label htmlForfor="nombre">Nombre</label>
                    <input className="input-bg" type="text" id="nombre" name="nombre" required/>
                    <label htmlForfor="apellido">Apellido</label>
                    <input className="input-bg" type="text" id="apellido" name="apellido" required/>
                    <label htmlForfor="nacimiento">Fecha de nacimiento</label>
                    <input className="input-bg" type="date" id="nacimiento" name="nacimiento" required/>
                    <label htmlFor="email">Email</label>
                    <input className="input-bg" type="email" id="email" name="email" required/>
                    <label htmlFor="psswd">Contraseña</label>
                    <input className="input-bg" type="password" id="psswd" name="passwd" required/>
                    <label className="mb-2.5">Sexo</label>
                    <div className="sexo-opc flex flex-row gap-2.5 ">
                        <input type="radio" name="sexo" id="hombre" value="hombre" />
                        <label htmlFor="hombre">Hombre</label>
                        <input type="radio" name="sexo" id="mujer" value="mujer" />
                        <label htmlFor="mujer">Mujer</label>
                        <input type="radio" name="sexo" id="noesp" value="noesp" />
                        <label htmlFor="noesp">No especificado</label>
                    </div>
                   
                    <input className=" h-12 rounded-2xl font-bold
                    bg-pink-400 hover:bg-pink-300 hover:text-black hover:scale-110
           text-white
                    " type="submit" value="Enviar" />
                </form>
            </div>

        </div>

    )
}

export default Registro
