//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shakitiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr2[0]);

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()// remove last element

myArr.unshift(9)// statring array me add hoga [9,0,1,2,3,4,5,6]
myArr.shift()

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));

const newArr = myArr.join()

//console.log(myArr);
//console.log(typeof newArr);


// slice, splice 

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3)
console.log("c", myArr);
console.log(myn2);