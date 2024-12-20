// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Smmay"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rahul" ,
            lastname: "choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },  
]


user[1].email
/*console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLogged'));*/// ask yei property hei ya nahi 


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstrutor: "Rahul"
}

//course.courseInstrutor

const {courseInstrutor: instructor} = course 

//console.log(courseInstrutor);
console.log(instructor);

// {
//     name: "Rahul",
//     coursename: "js in hindi"
//     price: "free"
// }

[
    {},
    {},
    {},
]