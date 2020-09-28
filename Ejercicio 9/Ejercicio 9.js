let columna
let j
let resto
for (let i = 1; i < 13; i++) {
    columna = 0
    resto = i % 2
    if (resto == 0) {
        columna = i * i * i
    }
    else {
        columna = i * i
    }
    console.log(`${i}     ${columna}`)
}

