// Object creation in Js

// 1. using object literals.............................................................................

let user1 = {
    name:"Khushi",
    age: 22,
    getInfo:function(){
        console.log(user1)
    }
}
let user2 = {
    name:"Test",
    age:23
}
user1.getInfo()

// 2. using constructor function/ using new key word

function user(x,y){
    this.name=x
    this.age = y
}
let u1 = new user("test1",20);
console.log(u1)

let u2 = new user("khushi",23)
console.log(u2)

// ..........................................................................

function Employee(name,age,mobile){
    this.empName=name;
    this.empAge=age;
    this.empNbr=mobile;

    this.getInfo = function(){
        console.log("emp Info===")
        console.log(this.empAge)
        console.log(this.empName)
        console.log(this.empNbr)
    }
}
let e1 = new Employee("ishu",20,"77438597");
console.log(e1)
e1.getInfo()

let e2 = new Employee("khushi",24,7653489895)
console.log(e2)



// 3. Using Object.create....................................

let comp = {
    name:"google",
    address:"Hyd"
}
let comp2 = Object.create(comp)

console.log(comp2)

let user3 = {
    name:"test1"
}
let user4 = Object.create(user3)
user4.age = 23;
console.log(user3.age)

// 4. Using class object- Oops.....................................

class Student {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getInfo(){
        console.log(this.name,this.age)
    }
}
function student(name,age){
    this.name=name;
    this.age=age;
}
let s1 = new Student("Sameer",20)
s1.getInfo();
let s2 = new student("khushi",21)
console.log(s1)
console.log(s2)


// ..............................................................................

class Arthmatic{
    constructor(n){
        this.n = n;
    }
    checkEven(){
        if(this.n%2 === 0){
            console.log("even number")
        }else{
            console.log("odd number")
        }
    }
    checkPositiveNegative(){
        if(this.n<0){
            console.log("number is Negative")
        }else{
            console.log("number is Positive")
        }
    }
}
let n1 = new Arthmatic(-11)
n1.checkEven()
n1.checkPositiveNegative()