const coding = ["js", "rb", "py", "java", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);    
// } )

// coding.forEach( (items) => {
//     console.log(items);    
// } )

// function printMe(items){
//     console.log(items);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const mycoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

mycoding.forEach(  (items) => {
    console.log(items.languageName);
}  )