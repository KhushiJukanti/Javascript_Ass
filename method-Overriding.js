class Person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    greet(){
        console.log("Hi Gm for parent class")
    }

}
class Teacher extends Person{
    constructor(name,age,course) {
        super(name,age)
        this.course=course
        
    }
    greet(){
        super.greet()
        console.log("Hi Gm from child class")
    }
}
let t1 = new Teacher("Khushi",21,"Mern")
t1.greet()


// let p1 = new Person("sameer",20)
// p1.greet()


function sum(a,b){
    console.log("sum1")
}
function sum(a,b,c){
    console.log("sum2")
}
sum()