// class Person{
//     constructor(name){
//         this.name = name
//     }
// }

// class Teacher extends Person{
//     constructor(name,course){
//         super(name)
//         this.course = course
//     }
// }

// class Company extends Teacher{
//     constructor(name,course,companyName){
//         super(name,course)
//         this.companyName = companyName
//     }
//     showInfo(){
//         console.log(this.name)
//         console.log(this.course)
//         console.log(this.companyName)
//     }
// }

// let c1 = new Company("khushi","Mern","ABC COMP")
// c1.showInfo()




//1. create player class add name, age, country
// 2. create Batsman which will contain total runs in total matches
// 3. create bowler class  which will contain total wickets , matchMedia
// * caluculate average run by Batsmane
// * caluculate average of bowler

class Player {
    constructor(name, age, country) {
        this.name = name
        this.age = age
        this.country = country
    }
}
class Batsman extends Player {
    constructor(name, age, country, totalrun, totalmatch) {
        super(name, age, country)
        this.totalrun = totalrun
        this.totalmatch = totalmatch
    }
    caluculateAverageRuns() {
        console.log(this.totalrun / this.totalmatch)
    }
    showInfo() {
        console.log("player info====")
        console.log("name=", this.name)
        console.log("age=", this.age)
        console.log("country=", this.country)
        console.log("totalRun=", this.totalrun)
        console.log("totalMatch=", this.totalmatch)

    }
}
class Bowler extends Batsman {
    constructor(name, age, country, totalWickets, totalmatches) {
        super(age, name, country)
        this.totalWickets = totalWickets
        this.totalmatches = totalmatches
    }
    caluculateAverageWickets() {
        console.log(this.totalWickets / this.totalmatches)
    }
    showInfo() {
        // super.showInfo()
        console.log("player info====")
        console.log("name=", this.name)
        console.log("age=", this.age)
        console.log("country=", this.country)
        console.log("totalWicket=", this.totalWickets)
        console.log("totalMatches=", this.totalmatches)
    }
}
let v1 = new Batsman("Ms", 35, "india", 10000, 100)
v1.caluculateAverageRuns()
v1.showInfo()









let v2 = new Bowler(33, "shami", "india", 35, 100)
v2.caluculateAverageWickets()
v2.showInfo()