let a = 20;
let b = 20;
let c = 20;

// console.log(a)

function hello(){
    console.log(a,b,c)
}
hello()

// Scopes..................................
// 1. global scope.................................................

var x = 40; 

// local scope................................
function Hi(msg){
    let x = 40;
    let y = 50;
    let z = 60;
    console.log(x,y,z)
}
Hi("Khushi");
console.log(x)

function sum(a,b){
    c = a*b;
    console.log(c)
}
sum(20,30)


let k = 85;
let msg = "khushi"
if(k%2===0){
    let msg = "even"
    console.log(msg)
}else{
    let msg = "odd"
    console.log(msg)
}
console.log(msg)

// Hoisting...........................................
// is a browser of js engine will move all the declaretions at the of the scope........

console.log(j)
var j = 10;
console.log(j)

function hello(){
    // console.log(u)
    let u = 100;
    console.log(u)
}
hello()

console.log(name)
var name = "test0";
function printName(){
    console.log(name)
    var name = "test1";
    console.log(name)
    {
        let name = "test2"
        console.log(name)
    }
}printName()
console.log(name)
