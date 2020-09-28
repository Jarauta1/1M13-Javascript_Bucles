let num
let suma = 0

do {
    num = parseInt(window.prompt("Escribe un número"))
    suma=0
    for (let i = 1; i <= num; i++) {
    suma = suma + i
    console.log(suma)
    }
} while (num !== 0);