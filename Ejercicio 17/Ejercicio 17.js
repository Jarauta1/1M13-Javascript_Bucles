let simbolo = window.prompt("Introduzca un símbolo")
let num = parseInt(window.prompt("Escribe un número"))
let icon = "*"
let salida = ""
let espacio = " "
let hueco = espacio.repeat(num + 1)
let salida2 = ""

for (let i = 1; i <= num; i++) {
    salida2 = salida
    salida = salida + simbolo
    hueco = espacio.repeat(num - i)
    console.log(hueco + salida + salida2)
}

