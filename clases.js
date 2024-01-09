/*
function Hechicero(nombre, casa) {
    this.nombre = nombre;
    this.casa = casa;
}

Hechicero.prototype.casting = function(hechizo) {
    console.log(`${this.nombre} lanza el hechizo: ${hechizo}!`);
}

function Alumno(nombre, casa, año) {
    Hechicero.call(this, nombre, casa);
    this.año = año;
}

Alumno.prototype = Object.create(Hechicero.prototype);
Alumno.prototype.constructor = Alumno;

Alumno.prototype.estudiar = function(materia) {
    console.log(`${this.nombre} está estudiando ${materia} en su ${this.año}° año en Hogwarts.`);
}
*/


class Hechicero {
   constructor(nombre,casa) {
    this.nombre = nombre
    this.casa = casa
   }
   
   casting(hechizo) {
    return console.log(`${this.nombre} lanza el hechizo: ${hechizo}!`)
   }
}

class Alumno extends Hechicero {
    constructor(nombre, casa, año) {
        super(nombre,casa)
        this.año = año
    }

    estudiar(materia) {
        return console.log(`${this.nombre} está estudiando ${materia} en su ${this.año}° año en Hogwarts.`);
    }
}

class Profesor extends Hechicero {
    constructor(nombre,casa,materia,añosExperiencia) {
        super(nombre,casa)
        this.materia = materia
        this.añosExperiencia = añosExperiencia
    }

    enseñar(){
        return console.log(`El profesor ${this.nombre} de la casa ${this.casa} enseña ${this.materia}`)
    }
}

const harry = new Alumno ("Harry Potter", "Griffindor", 5)
harry.casting("Aqueamenti")
harry.estudiar("Defensa contra las artes oscuras")

const snape = new Profesor ("Snape", "Slytherin", "Defensa contra las artes oscuras", 20)
snape.enseñar()