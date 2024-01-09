//for-of(arrays y strings)

const cadena = "chau"

for (const letra of cadena) {
    console.log(letra)
}

const frutas = ["manzana", "platano","naranja"]

for (const fruta of frutas) {
    console.log(fruta)
}

//for-in(objetos)

const persona = {
    nombre: "Miguel",
    edad: 20,
    profesion: "Developer"
}

for (const propiedad in persona){
    console.log(`Propiedad: ${propiedad}; Valor: ${persona[propiedad]}`)
}