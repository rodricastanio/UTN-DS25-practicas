//ej1
function sumar5() {
    let numero = 4
    document.getElementById("res").innerHTML = `el numero ${numero} sumado 5 es ${numero + 5}`
}

//ej2
function concatenar() {
    const c1 = 'Hola'
    const c2 = 'Como estas'
    document.getElementById("res").innerHTML = `concatenacion: ${c1 + ' ' + c2}`

}

//ej3
function comparar() {
    const num1 = 56
    const num2 = 59
    const res = document.getElementById("res")

    if (num1 < num2) {
        res.innerHTML = `${num1} es menor que ${num2}`
    } else if (num2 < num1) {
        res.innerHTML = `${num2} es menor ${num1}`
    } else {
        res.innerHTML = `${num1} y ${num2} son iguales`
    }
}

//ej4
function pedirNum() {
    const num = Number(prompt('Ingrese numero'))
    const res = document.getElementById("res")
    switch (num) {
        case 1:
        case 2:
        case 3:
            res.innerHTML = `${num} pertenece al grupo 1`
            break
        case 4:
        case 5:
        case 6:
            res.innerHTML = `${num} pertenece al grupo 2`
            break
        case 7:
        case 8:
        case 9:
        case 10:
            res.innerHTML = `${num} pertenece al grupo 3`
            break
        default:
            res.innerHTML = 'numero fuera de rango'
    }
}

//ej5
function sumatoria() {
    const res = document.getElementById("res")
    let resultado = 0
    for (let i = 0; i < 11; i++) {
        resultado += i
    }
    res.innerHTML = `Resultado: ${resultado}`
}

//ej6
function multiplicar() {
    const res = document.getElementById("res")
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    let resultado = 1

    for (let i = 0; i < array.length; i++) {
        resultado *= array[i]
    }

    res.innerHTML = `Resultado ${resultado}`
}

//ej7

function CalcularProd() {
    const valor1 = Number(document.getElementById("valor1").value)
    const valor2 = Number(document.getElementById("valor2").value)

    multiplicar2Num(valor1, valor2)
}

function multiplicar2Num(n1, n2) {
    const resultado = document.getElementById("resul")
    resultado.innerHTML = `resultado: ${n1 * n2}`
}

//ej8
function concatenarCadenas() {
    const cadena1 = document.getElementById("cadena1").value
    const cadena2 = document.getElementById("cadena2").value
    producirConcatenacion(cadena1, cadena2)
}

function producirConcatenacion(cad1, cad2) {
    const res = document.getElementById("res")
    res.innerHTML = `Concatenacion: ${cad1 + ' ' + cad2}`
}

//ej9
function guardarNumeros() {
    const numero1 = Number(document.getElementById("numero1").value)
    const numero2 = Number(document.getElementById("numero2").value)
    compararNumeros(numero1, numero2)
}

function compararNumeros(n1, n2) {
    const res = document.getElementById("res")
    if (n1 > n2) {
        res.innerHTML = `${n1} es mayor que ${n2}`
    } else if (n2 > n1) {
        res.innerHTML = `${n2} es mayor que ${n1}`
    } else {
        res.innerHTML = `${n1} es igual que ${n2}`
    }
}

//ej10

function asterisco() {
    const num = Number(document.getElementById("num").value)
    generarAsterisco(num)
}

function generarAsterisco(a) {
    const res = document.getElementById("res")
    res.innerHTML = `Resultado: ${'*'.repeat(a)}`
}

//ej11
function guardarvalores() {
    const res = document.getElementById("res")
    const monto = Number(document.getElementById("monto").value)
    const medio = (document.getElementById("medio").value).toUpperCase()

    if (medio == 'C' || medio == 'D' || medio == 'E') {
        calcularMontoFinal(monto, medio)
    } else {
        res.innerHTML = 'Ingrese el tipo de pago correctamente'
    }

}

function calcularMontoFinal(num, tipo) {
    const res = document.getElementById("res")

    if (num < 200) {
        res.innerHTML = `El monto es ${num}`
    } else if (num > 200 && num < 400) {
        if (tipo == 'E') {
            res.innerHTML = `El monto es ${num - (num * 0.3)}`
        } else if (tipo == 'D') {
            res.innerHTML = `El monto es ${num - (num * 0.2)}`
        } else if (tipo == 'C') {
            res.innerHTML = `El monto es ${num - (num * 0.1)}`
        }
    } else {
        res.innerHTML = `El monto es ${num - (num * 0.4)}`
    }
}

//ej12
function arbol() {
    const numero = document.getElementById("num").value
    if (isNaN(numero) || numero == '') {
        const res = document.getElementById("res")
        res.innerHTML = `Ingrese un numero valido`
    } else {
        generarArbol(numero)
    }
}

function generarArbol(altura) {
    const res = document.getElementById("res")
    let resultado = ''
    for (let i = 0; i <= altura; i++) {
        resultado += '*'.repeat(i) + "<br>"
    }
    res.innerHTML = resultado
}

//ej13
function semana() {
    const nroSem = Number(document.getElementById("numSem").value)
    calcularDia(nroSem)
}

function calcularDia(dia) {
    const res = document.getElementById("res")

    switch (dia) {
        case 1:
            res.innerHTML = 'Lunes'
            break
        case 2:
            res.innerHTML = 'Martes'
            break
        case 3:
            res.innerHTML = 'Miercoles'
            break
        case 4:
            res.innerHTML = 'Jueves'
            break
        case 5:
            res.innerHTML = 'Viernes'
            break
        case 6:
        case 7:
            res.innerHTML = 'fin de semana'
            break
        default:
            res.innerHTML = 'el numero ingresado no esta en el rango de la semana'
    }
}

//ej14
function solicitarDatos() {
    //creo array
    const tam = Number(prompt("ingrese el tamaño del array"))
    let array = []
    for (let i = 0; i < tam; i++) {
        let posicion = Number(prompt(`ingrese valor ${i + 1} del array`))
        array.push(posicion)
    }
    //promedio
    let total = 0
    let cant = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
        cant += 1
    }
    let prom = (total / cant)
    const res = document.getElementById("res")
    res.innerHTML = `El promedio es: ${prom}`
}

//ej15

// En el ejercicio 12 no se especifica cómo se debe invocar la función
// para generar el árbol (si es mediante prompt, input, botón, etc).
// Por eso decidí usar un input para que el usuario ingrese el valor
// y un botón para invocar la función que genera el medio arbol.
// Por lo tanto, la consigna 15 queda resuelta con la implementación del ejercicio 12


//16

let numPiso = ''
let numDto = ''

function llamar() {
    const mensaje = document.getElementById("msj")
    if (numPiso.length == 2 && numDto.length == 1) {
        if (Number(numPiso) < 0 || Number(numPiso) > 48) {
            mensaje.innerHTML = `Error: Los pisos van de 00 a 48`
        } else if (Number(numDto) < 1 || Number(numDto) > 6) {
            mensaje.innerHTML = `Error: Los dptos van de 0 a 6`
        } else {
            mensaje.innerHTML = `Llamar al piso ${numPiso}, depto ${numDto}`
        }

    }
}

function borrar() {
    numPiso = ''
    numDto = ''
    const piso = document.getElementById("piso")
    const mensaje = document.getElementById("msj")
    const dto = document.getElementById("dto")
    piso.innerHTML = 'PISO: '
    dto.innerHTML = 'DEPTO: '
    mensaje.innerHTML = ''
}

function ingresarNum(num) {
    const piso = document.getElementById("piso")
    const dto = document.getElementById("dto")
    if (numPiso.length < 2) {
        numPiso += num
        piso.innerHTML = `PISO: ${numPiso}`
    } else {
        if (numDto.length < 1) {
            numDto += num
            dto.innerHTML = `DPTO: ${numDto}`
        }
    }

}


//ej17

const fila1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
const fila2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ']
const fila3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace']
const fila4 = ['space', 'borrarTodo']

const filas = [fila1, fila2, fila3, fila4]

function ingresarTecla(fila, posicion) {
    const display = document.getElementById("dis")
    const letra = filas[fila][posicion]

    switch (letra) {
        case 'backspace':
            display.innerHTML = display.innerHTML.slice(0, -1)
            break
        case 'space':
            display.innerHTML += ' '
            break
        case 'borrarTodo':
            display.innerHTML = ''
            break
        default:
            display.innerHTML += letra
            break
    }

}
