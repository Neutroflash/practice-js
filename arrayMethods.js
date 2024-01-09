const fruits = [
    "apples",
    "mandarina",
    "pera",
    "manzana",
    "onion",
    "tomato"
]

console.log(fruits)
console.log(fruits.length)
fruits.push('platano')
console.log(fruits)
console.log(fruits.length)
fruits.pop()
console.log(fruits)
console.log(fruits.length)
const myvariable = fruits.shift()
console.log(fruits)
console.log(myvariable)
fruits.unshift('naranja')
console.log(fruits)

const newFruits = ['apples', 'pomegranate', 'mango']
const moreFruits = ['strawberries', 'pineapple', 'grapefruit']
const totalFruits = newFruits.concat(moreFruits)

console.log(totalFruits)

const pl = ['js', 'go', 'python', 'php']
const numbers = [3,5,2,4,1]

console.log(pl.includes('go'))
console.log(pl.includes('go3'))

console.log(pl.join(" "))
console.log(pl.reverse())
console.log(pl.slice(0,2))
console.log(numbers)
console.log(numbers.sort())