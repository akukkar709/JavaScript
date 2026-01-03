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