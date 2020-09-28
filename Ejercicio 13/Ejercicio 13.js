let dia
let mes
let anyo
let sumaFecha
let total = 0
let total1
let x = 0
let y = 0

dia = parseInt(window.prompt("Escribe tu dia de nacimiento (cifra)"))
mes = parseInt(window.prompt("Escribe tu mes de nacimiento (cifra)"))
anyo = parseInt(window.prompt("Escribe tu año de nacimiento (cifra)"))
sumaFecha = (dia + mes + anyo).toString()
do {
    x = sumaFecha.length
    total = 0
    while (x > 0) {
        total1 = parseInt((sumaFecha.substring(x - 1, x)))
        total = parseInt(total)
        total = total + total1
        x--
    }
    sumaFecha = total.toString()
    y = sumaFecha.length
} while (y != 1)

console.log(`Tu número de la suerte es ${total}`)
