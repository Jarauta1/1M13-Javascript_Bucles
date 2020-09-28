let num
let suma = 0

do {
    num = parseInt(window.prompt("Escribe un número"))
    if (num < 0) {
        window.alert("Se ignorarán los valores negativos")
    }
    else {
        suma = suma + num
    }
} while (num !== 0);
console.log(suma)