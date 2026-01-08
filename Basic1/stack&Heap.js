// stack (Primitive)   Heap(Non Primitive)

let myYoutubeName = "Aarishdotcom"

let anotherName = "myYoutubeName"


// now unique and one thing 

anotherName = "coffeewithme"

console.log(myYoutubeName)
console.log(anotherName)


let user1 = {
    email : "nk@google.com",
    upi :  "nk@ybl"
}

let user2 = user1

user2.email = "pk@google.com",
user2.upi =  "pk@ybl"

console.log(user1.email)
console.log(user2.email)   


// in the programming there is one concept of stack and heap 

// stack => it  contain copy of this (copy)
// heap => when something enter in the heap so user can get same value  (refrence)