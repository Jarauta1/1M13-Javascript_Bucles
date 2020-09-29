let fechaUsu = window.prompt("Escribe la fecha de hoy (dia/mes/año)")
let fecha = new Date();
let fechaHoy = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
do {
    console.log(fechaUsu)
    console.log(fechaHoy)
    if (fechaUsu == fechaHoy) {
        window.alert("La fecha de mañana es: " + (fecha.getDate() + 1) + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear())
    } else {
        fechaUsu = window.prompt("Fecha incorrecta, intruduzca de nuevo")
    }
} while (fechaUsu != fechaHoy)
window.alert("La fecha de mañana es: " + (fecha.getDate() + 1) + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear())