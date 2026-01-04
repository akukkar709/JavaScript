const myArray = [0,1,2,7,4]

console.log(myArray[3])

const myHeros = ["Shaktiman", "naagraj"]

console.log(myHeros[1])

const myArray2 = new Array(1,2,3,4,5)

console.log(myArray2[0])

////////////////////////<Methods>/////////////////////////////

myArray2.push(6)

console.log(myArray2)

myArray2.pop()
console.log(myArray2)

console.log(myArray2.includes(5))

console.log(myArray2.indexOf(5))

const newArray = myArray2.join()

console.log(newArray)



// slice // splice 

const myn1 = myArray2.slice(1,3)

console.log(myn1)


const myn2 = myArray2.splice(1,3)
console.log(myn2)


const marvelHeros = ["spiderman","Ironman","thor"]

const dcHeros = ["superman","flash"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros)

const allHeros = marvelHeros.concat(dcHeros)

console.log(allHeros)


const all_new_Heros = [...marvelHeros, ...dcHeros]

console.log(all_new_Heros)


const another_array = [1,2,3,[4,5,6],7,8]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)


console.log(Array.isArray("pk"))

console.log(Array.from("madan"))

console.log(Array.from({name : "madan"}))  //interesting 

let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1,score2,score3))



/////////////////////////////objects////////////////////////////

//singleton 


const jsUser = {

    name: "github",
    userId: "gh@gmail.com",

    // price: "Rs5",
    payout: "yes/No",

    isLoggedIn: false,

    lastLoginDays: ["Monday","Saturday"]

} 

console.log(jsUser["userId"])

jsUser.greeting = function(){
    console.log("Hello Js User");
}

// console.log(jsUser.greeting())   // undefined

console.log(jsUser.greeting())


jsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greetin2)