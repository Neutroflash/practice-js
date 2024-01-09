const stringArr = ["eat", "sleep", "play"]
console.log(stringArr[0])
console.log(stringArr[1])
console.log(stringArr[2])


//nested array

const nestArr = ['one', ['two', 'three'], 1 , true, false]
console.log(nestArr[0])
console.log(nestArr[1][0])
console.log(nestArr[1][1])
console.log(nestArr[2])
console.log(nestArr[0])
console.log(nestArr[4])


const myLetter = ['h', 'e', 'l', 'l', 'o']
console.log(myLetter)

const mySingers = new Array('Luis Miguel', 'Mana', 'Soda Stereo')
function readSingers() {
    for (let i = 0; i < mySingers.length; i++){
        console.log(mySingers[i]);
    }
}

readSingers()

const myNumbers = new Array(1,2,4,5)
function readNumbers() {
    for (let i = 0; i < myNumbers.length; i++){
        console.log(myNumbers[i])
    }
}

readNumbers()

const myMixed = new Array("whatssapp", "hello", ["welcome","yep"], true , false , 2)
function readMymixed() {
    for(let i = 0; i < myMixed.length; i++){
        if (Array.isArray(myMixed[i])){
            for(let j = 0; j < myMixed[i].length; j++) {
                console.log(myMixed[i][j])
            }
        } else console.log(myMixed[i])
    }
}

readMymixed()