const person = {
  firstName: "Miguel",
  lastName: "Lorenzo",
  age: 19,
  location:  ['Lima', 'Lima'],
  isProgrammer: true,

};

console.log(person.age);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.location);
console.log(person.isProgrammer);


const car = new Object()
car.type = "Mini car"
car.model = "URUS" 
car.color = "red"

console.log(typeof car)
console.log(car.type)

car.type = "Toyota"
car.wheels = "4"

console.log(car)