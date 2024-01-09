//se ejecuta la funcion una sola vez en un intervalo de tiempo
function saludar (nombre = "mundo"){
    console.log('hola ' + nombre)
}

setTimeout(saludar, 2000)

function hey (nombre = "mundo"){
    console.log('hola ' + nombre)
}

setTimeout(hey, 2000, "Miguel")

function saludar2 (nombre = "mundo") {
    console.log('hola' + nombre)
}

const timerId = setTimeout(() => saludar("Codeable"), 1000)
clearTimeout(timerId)