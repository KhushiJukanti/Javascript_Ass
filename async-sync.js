console.log("Hii")
console.log("Khushi")
console.log("Okk")
// .......................................................
let a = 10;
console.log(a)
let b = 20;
console.log(b)
// ..................................................
// console.log("1")
// setTimeout(function(){
//     console.log("2")
// },2000)
// console.log("3")

// callback, promis, async-await..
//1. call back.............................................
// function Placeorder(){
//     console.log("Placeorder")
// }
// function makePayment(x){
//     setTimeout(function(){
//         console.log("payment started")
//         console.log("payment done")
//         x();
//     },3000)
// }
// function orderPlaced(){
//     console.log("order is placed")
// }

// // Placeorder()
// // makePayment(orderPlaced);

// makePayment(function(){
//     // otherFunction(function(){

//     // })
// })

// callback hell..................................
function showA(fn){
    fn();
}
function showB(fn1){
    fn1()
}

showA(function(){
    showB(function(){
        console.log("Hii b")
    })
})

// 2. promise- pending, fulfilled, rejected.........................................................

function Placeorder(){
    console.log("placing order")
}
function makePayment(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("payment started")
            console.log("payment done")
            resolve();
        },3000)
    })
}

function orderPlaced(){
    console.log("order placed successfully")
}

Placeorder()
makePayment().then(function(res){
    orderPlaced()
}).catch(function(err){
    console.log("err")
})


// .........................................................................................

function sum(){
    return new Promise(function(resolve, reject){
        console.log("sum done")
        resolve();
    })
}
function substract(){
    console.log("substract done")
}
sum().then(function(res){
    substract();
})
