let pass = window.prompt("Escriba su contraseña")
let longitud = pass.length
let num
let tick1
let tick2
let tick3

do {
    num = true
    tick1 = 0
    tick2 = 0
    tick3 = 0
    if (pass.length >= 8) {
        tick1 = 1
    }
    else {
        tick1 = 0
    }
    for (let i = 1; i < longitud; i++) {
        num = isNaN(pass.substring(i - 1, i))
        if (num == false) {
            tick2 = 1
        }
    }

    if (pass.substring(0, 1) == pass.substring(0, 1).toUpperCase()) {
        tick3 = 1
    }
    if (tick1 != 1 || tick2 != 1 || tick3 != 1) {
        pass = window.prompt("Contraseña no correcta, introduzca otra")
    }

} while (tick1 != 1 || tick2 != 1 || tick3 != 1)
console.log("Contraseña correcta")
