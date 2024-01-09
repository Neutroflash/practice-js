//se ejecuta la funcion repetidamente, en el intervalo de tiempo fijo entre llamada

let contador = 0

let timerId = setInterval(() => console.log(contador++), 2000)

setTimeout(() => clearInterval(timerId), 5000)