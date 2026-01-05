const tinderUser = new Object()

console.log(tinderUser);

tinderUser.name = "Ansh"

tinderUser.id = "1234"

tinderUser.gpay = "gpay@ybl"


console.log(tinderUser)

const regularUser = {

email: "some@gmail.com",
fullName:{
    Username:{
        FirstName : "Ansh",
        LastName: "Kumar",



    }
}

}

console.log(regularUser.fullName);
console.log(regularUser.fullName.Username.FirstName)
console.log(regularUser.fullName.Username.LastName) 


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = {obj1,obj2}
console.log(obj3)