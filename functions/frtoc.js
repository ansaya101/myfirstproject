   let minus = (fahrenheight) => {
    return fahrenheight - 32
}
let inCelsius = (fahrenheight) => {
    return Math.floor(minus(fahrenheight) * 5/9)
}
console.log(`the tempterature in celsius is ${inCelsius(70)}`)