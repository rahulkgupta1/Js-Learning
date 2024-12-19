const name = "rahul"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//`` backtics

const gameName = new String('rajal-hc-com')


console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,7);
console.log(anotherString);

const newStringOne = "   hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary" // space  ki jagah %20 aa jata hei

console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'))

//console.log(gameName.bold())


