//Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);   
})();

// ()() => () function defination ()exsicution

( (name) => {
    console.log(`DB CONNCETED TWO ${name}`);   
} )("Rahul")
