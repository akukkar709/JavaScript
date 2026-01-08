const name = "Aarish"

const repocount = 50

// console.log(name +" "+repocount+ " " + "value")  // outdated syntax

console.log(`my name is ${name} and my repocount is ${repocount}`)


const gameName = new String('abhimanyu')

console.log(gameName)

console.log(gameName[0])
console.log(gameName[1])
console.log(gameName[2])
console.log(gameName[3])

console.log(gameName.__proto__);


console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName.toLowerCase())

console.log(gameName.charAt(2))

const newString = gameName.substring(0,4)

console.log(newString)

let anotherString = gameName.slice(-9,5)
console.log(anotherString)


let newOneString = "     Aarish      "

console.log(newOneString)
console.log(newOneString.trim())


const url = "https://nk.com//nk%20nitesh"

console.log(url.replace('%20','-'))
