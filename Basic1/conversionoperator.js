let score = 33

console.log(typeof score)  // number 

console.log(typeof (score))  // number


score = "33"

console.log(typeof score) // string 

// But one unique thing 

let valueInNumber = Number(score)

console.log(typeof valueInNumber)    // number  


score = "33abc"

valueInNumber = Number(score)

console.log(typeof valueInNumber) 

// See the difference in both 

console.log(valueInNumber)    // NaN



///////////////////////////////operations//////////////////////////////////

let value = 3
let negValue = -value

console.log(negValue)  // -3


console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)

console.log(true) // true

console.log(+true) // 1

console.log(+"")  // 0