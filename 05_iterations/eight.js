const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval 
// }, )
const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 3999
    },
    {
        itemName: "dpropt eng course",
        price: 4499
    },
]

const priceTopay = shoppingCart.reduce( (acc, items) => acc + items.price, 0)

console.log(priceTopay);
