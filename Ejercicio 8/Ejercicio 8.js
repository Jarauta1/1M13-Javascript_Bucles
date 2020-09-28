let valor = window.prompt("Selecciona par (P) o impar (I)").toLowerCase()
let num = 0
while (valor != "p" && valor != "i") {
    valor = window.prompt("Ese valor es incorrecto, seleccione de nuevo").toLowerCase()
}

if (valor == "p") {
    num = 2
}
else if (valor == "i") {
    num = 1
}

for (let i=1;i<51;i++) {
    console.log(num)
    num = num + 2
}