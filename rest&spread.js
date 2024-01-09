//rest parameters 
function sumarTodos(...numeros) {
    let result = 0

    for (let i = 0; i < numeros.length; i++) {
        result += numeros[i]
    }

    return result
}

console.log(sumarTodos(1,2,3))
console.log(sumarTodos(10,20,30,40,50))

function ejemplo(a,b,c = 0, ...rest) {
    console.log("Requeridos: ", a,b)
    console.log("Opcional: ", c);
    console.log("Resto: ", rest)
}

ejemplo(10,20,30,40,50,60,70)


//spread parameters

//en arrays
const arr1 = [1,2,3]
const arr2 = [...arr1, 4,5]
console.log(arr2)

let suma = (a, b) => a+b

const nums = [10, 30]

console.log(suma(...nums))

//en objetos
const datos1 = {nombre: "Juan", apellido: "Perez"}
const persona = {...datos1, pais: "Mexico", ciudad: "Guadalajara"}

console.log(persona)