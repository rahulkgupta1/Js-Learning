const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task is compelete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 reolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "rahul", password: "123"})
        } else{
            reject('ERROR: Something went wroung')
        }
    }, 1000)
})