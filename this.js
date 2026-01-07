const User= {
    Username: "Aarish",
    price: "999",

    welcomeMessage: function(){
        console.log(`${Username}, Welcome to website`)
    }

}

const addTwo = (num1,num2) => {
    return num1+num2
}

console.log(addTwo(3,4))



///////////////////Other Declaration/////////////////////////////////

const addTWo = (num1,num2) => num1 + num2


console.log(addTwo(3,4))


/////////////////////////OtherMethod///////////////////////

const addThree = (num1,num2,num3) => ({username: "Aarish"})

console.log(addThree(3,4,5))