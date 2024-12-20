
function saymyname(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//saymyname()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumber(number1, number2){
    //let result = number1 + number2
    //return result
    return number1 +number2
}

const result = addTwoNumber(3, 4)
 
//console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    } 
    return `${username} just logged in` 
}

//console.log(loginUserMessage("Rahul"));
console.log(loginUserMessage());

function calculateCartPrice(val1, val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500,3008));

const user = {
    username: "Rahul",
    price: 109
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user) 
handleObject({
    username: "sam",
    price: 399
})

const mynewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200,400, 500, 2000]));
