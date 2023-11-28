// let user1 = {
//     name : "test1",
//     age: 20,

// }
// let user2 = {
//     name : "test2",
//     age :50,
// }


// function show(){
//     console.log(this) // refers to window
//     console.log(this.age)
// }
// show()
// // user1.show()

// function sayHi(){
//     console.log("Hiii Khushi")
// }
// sayHi()
// sayHi.call()
// sayHi.apply()
// let newsayHi = sayHi.bind();
// newsayHi()

// // call() -- expect all parameters to be passed in individually..............................
// // apply()-- expect an array of all of our parameters....
// let emp1 = {
//     name:"test1emp",
//     age: 20,
//     email:"test1@emp1.com",
//     showInfo:function(){
//         console.log(this)
//     }
// }
// let emp2 = {
//     name:"test2emp",
//     age: 30,
//     email:"test2@emp12.com",

// }
// let emp3 = {
//     name:"test3emp",
//     age: 25,
//     email:"test3@emp3.com",

// }
// // emp1.showInfo()
// // emp2.showInfo()
// // emp3.showInfo()

// emp1.showInfo()
// emp1.showInfo.call(emp2)
// emp1.showInfo.apply(emp2)

// emp1.showInfo.call(emp3)
// emp1.showInfo.apply(emp3)

// // bind()-- in case of bind first it will take the barrow/reference of that function then in next it will excute...

// let takeFn = emp1.showInfo.bind(emp1)
// takeFn();
// let takeFn1 = emp1.showInfo.bind(emp2)
// takeFn();
// let takeFn2 = emp1.showInfo.bind(emp1)
// takeFn();

// using call() apply() and bind() you can excute function along with you can pass dynamic this.... context

let user1 = {
    name: "test1",
    greet: function (msg) {
        console.log(this.name, msg)
    }
}
let user2 = {
    name: "test2",
    
}
let user3 = {
    name: "test3",
    
}

user1.greet("Hi Khushi")
user1.greet.call(user2,"Good morning")
user1.greet.apply(user3,["Hello khushi"])

let few = user1.greet.bind(user2);
few("Good evening")
let few1 = user1.greet.bind(user3);
few1("Love")


function sayHi(){
    console.log("Hii")
    let a = 20;
    console.log(a)

    return function sayHello(){
        console.log("Hello")
        console.log(a)
    }
}
let result = sayHi()
result()




