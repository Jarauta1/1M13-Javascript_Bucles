let num = window.prompt("Escribe un número de tres dígitos");
let suma = 0
let x = num.length
let cifra
while (x > 0) {
    cifra = parseInt(num.substring(x - 1, x))
    suma = suma + cifra
    x--
}
console.log(suma)