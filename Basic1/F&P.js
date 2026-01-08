function sayMyName(){
    console.log("A")
    console.log("A")
    console.log("R")
    console.log("I")
    console.log("S")
    console.log("H")
}

sayMyName()

function addTwoNumber(number1,number2){
    console.log(number1+number2)
}

addTwoNumber()  //NAN\


addTwoNumber(3,4) //7

addTwoNumber(3,"4") // 34


function calculateCartPrice(...num1){

    return num1
}


console.log(calculateCartPrice(200,400,600))


const user={
    Username: "Github",
    price: "$5"
}


function handleAnyObject(anyObject){
    console.log(`Username is ${anyObject.Username} and price is ${anyObject.price}`);
}

handleAnyObject(user)


const myNewArray = [200,400,100,600]