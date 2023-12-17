class person{
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    showInfo(){
        console.log("person info===")
        console.log(this.name,this.age)
    }
}
class Teacher extends person{
    constructor(name,age,course){
        super(name,age)
        this.course=course
    }
    showInfo(){
        console.log("Teacher info===")
        // super.showInfo()
        console.log(this.name,this.age,this.course)
    }
}

let p1 = new person("khushi", 21)
p1.showInfo()
let t1 = new Teacher("sameer",30,"Mern")
t1.showInfo()



class user extends person{
    constructor(name,age,email){
        super(name,age)
        this.email=email;
    }
    showUser(){
        console.log("userinfo====")
        console.log(this.name,this.age,this.email)
    }
}
let u1 = new user("test1",20,"test1@hmail.com")
u1.showUser()