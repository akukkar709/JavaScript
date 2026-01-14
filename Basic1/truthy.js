const userEmail = "aarish.ai"

if(userEmail){
    console.log("Got User Email")
}

else{
    console.log("Not User Email")
}


// falsy value

//false, 0, -0, BigInt , "", null, undefined, NaN

// truthy value

// "0", 'false', " "

if (userEmail.length === 0){
    console.log("Array is empty");
}



//  NUllinsh Cociening operations (??) : null undefined

let val1;
val1  = 5 ?? 10   // 5


val1 = null ?? 10 // 10

val1 = undefined ?? 15 //15


console.log(val1) 

//condition ?  true : false

const iceTea = 80

iceTea>= 100 ? console.log("less than 100") : console.log("More than 80")

