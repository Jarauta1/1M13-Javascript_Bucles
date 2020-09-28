let factorial
let med
let j
for (let i = 1; i < 11; i++) {
    factorial = 1
    for (j = 1; j <= i; j++) {
        factorial = factorial * j
    }
    console.log(`${i}     ${factorial}`)
}

