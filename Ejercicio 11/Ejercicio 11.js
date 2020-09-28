let num
let numInvertido
do {
    num = window.prompt("Escribe una cifra")
    numInvertido = ""
    let x = num.length
    while (x >= 0) {
        numInvertido = numInvertido + num.substring(x - 1, x)
        x--
    }
    console.log(numInvertido)
} while (num != 0)