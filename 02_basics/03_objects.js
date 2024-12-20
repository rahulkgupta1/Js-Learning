//singleton

// object literals 

const mySym = Symbol("key1")


const JsUser = {
    name: "Rahul",
    "full name": "Rahul gupta",
    [mySym]: "myKey1",
    age: 18,
    location: "jaipur",
    email: "Rahul@google.com",
    isLoggedIn: false,
    lastLogindays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Rahul@microsoft.com"
//Object.freeze(JsUser)
JsUser.email = "rahul@chatgpt.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

 