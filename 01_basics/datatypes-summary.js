// primitive

// 7 types : string,Number,Bollearn,null,undefined,Symbol,BigInt(big value not hanndle)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsidetemp = null //output object
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34363284628746848n


//Reference (Non primitive)

// Array, objects, Functions 
/* if you want master in java scripts JS Objcts and brower events*/

const heros = ["shaktiman", "naagra", "doga"]
let myObj = {
    name: "rahul",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object*/

//**************************** */
       // Stack (primitive), Heap (Non-primitive)

let myYoutubename = "rahulji"
 
let anothername = myYoutubename
anothername = "chai or code"

console.log(myYoutubename);

console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

