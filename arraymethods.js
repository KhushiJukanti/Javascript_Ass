// ...........OBJECTS METHODS......................................................

// 1. LENGTH........

// let ages = [20,50,40,60,46]
// console.log(ages.length)

// let names = ["khushi","ishu","xyz"]
// console.log(names.length)

// 2. PUSH............

// let n = ["khushi","ishu"]
// n.push("xyz")
// khushi = "arya"
// n.push(khushi)
// console.log(n)

// 3. POP....................................................

// let n = ["khushi","IShu","ik","xyz"]
// n.pop()
// console.log(n) //'khushi', 'IShu', 'ik'

// 4. Unshift - use to insert at begining.........................................................

// n.unshift("Ishwara")
// console.log(n)    //'Ishwara', 'khushi', 'IShu', 'ik'

// 5. shift - used to removing from begining............................

// n.shift()
// console.log(n)  //'khushi', 'IShu', 'ik'

// 6. indexof - it will check the element exist or not----> -1,1..................

// const a = [50,80,20,40,60]
// result = a.indexOf(50)
// console.log(result)

// 7. Lastindexof ...............................................

// let b = a.lastIndexOf(60)
// console.log(b)

// 8.Splice - use to remove element from array...........................................

// let a = [60,90,30,20,10,50]
// let b = a.splice(1,5)
// console.log(b)

// wap to delete user which has nbrs=123456789 for users array..................

// let nbrs = [
//     {
//         number:123456789
//     },
//     {
//         number:234567890
//     },
//     {
//         number:345678901
//     }
// ]

// let results = nbrs.indexOf(123456789)
// console.log(results)


// let index = 0
// for(let i=0;i<nbrs.length;i++){
//     if(nbrs[i].number===123456789){
//         index = i
//     }
// }
// nbrs.splice(index,1)
// console.log(nbrs)





// let courses = [
//     {
//         name:"MERN",
//         trainer:"trainer1"

//     },
//     {
//         name:"Python",
//         trainer:"khu"
//     },
//     {
//         name:"Java",
//         trainer:"ISHU"
//     },
//     {
//         name:"MERN",
//         trainer:"tainer1"
//     }
// ]
// for(let i=0;i<courses.length;i++){
//     if(courses[i].name==="MERN"){
//         console.log(courses[i])
//     }
// }
// let foundCourse = courses.findIndex(function(course){
//     return course.name==="MERN"
// })
// console.log(foundCourse)

// 9. Concat -> used to add two array.............................

// let a = ["khushi"]
// let b = ["ishu"]
// console.log(a.concat(b))


// Find findIndex of this example.............................

// let employees = [
//     {
//         name:"test1",
//         age:22,
//         salary:20000
//     },
//     {
//         name:"test2",
//         age:23,
//         salary:30000
//     },
//     {
//         name:"test3",
//         age:24,
//         salary:40000
//     },
//     {
//         name:"test4",
//         age:25,
//         salary:50000
//     }
// ]
// let result = employees.findIndex(function(employees){
//     return employees.name==="test4"
// })
// console.log(result)


// 10. FindElement................................................................

// let array = [10,20,30,40,50,60]

// let foundElement = array.find(function(currEle,index,array){
//     console.log(currEle,index,array)
//     return currEle===40 // find the element in the array
// })
// console.log(foundElement)  


// let user = [
//     {
//         id:101,
//         name:"test1"
//     },
//     {
//         id:102,
//         name:"test2"
//     },
//     {
//         id:103,
//         name:"test3"
//     },
//     {
//         id:104,
//         name:"test4"
//     }
// ]

// // wap to find user which has = 103

// let foundUser = user.find(function(curr,index,arr){
//     return curr.id === 103
// })
// console.log(foundUser)

// // findIndex...........................................................

// let foundIndex = user.findIndex(function(curr,index,arr){
//     return curr.id === 103
// })
// console.log(foundIndex)

//11. filter -> used to get filterd element in array based on condition...........

// let numbers = [10,20,30,40,41,34,55,35,99]
// let nbrArray = numbers.filter(function(curr,index,array){
//     return curr%2===0
// })
// console.log(nbrArray)
// console.log(numbers)

//12. MAP -> is used to transfer the array elements and return new array..................

// let ages = [10,20,30,40,50]
// let newAges = ages.map(function(curr,index,array){
//     return curr*2
// })
// console.log(newAges)

//  in loops 
// let doubleAges = []
// for(i=0;i<ages.lenghth;i++){
//     doubleAges.push(ages[i]*2)
// }
// console.log(doubleAges)

// 13. Reduced -> it can reduce the array value.......................

// let numbers = [10,20,30,40,50]
// let sum = numbers.reduce(function(acc,curr,index,arr){
//     console.log(acc,curr,index,arr)
//     return acc+arr
// },0)
// console.log(sum)


// wap to update on employee which has id=103 with new details: address:Blr....

let employees = [
    {
        id:101,
        name:"test1",
        address:"Hyd"
    },
    {
        id:102,
        name:"test2",
        address:"Hyd"
    },
    {
        id:103,
        name:"test3",
        address:"Hyd"
    },
    {
        id:104,
        name:"test4",
        address:"Hyd"
    }
]
console.log(employees)
Newlist = employees.map(function(curr,index,array){
    if(curr.id === 103){
        curr.address="Blr"
        return curr
    }else{
        return curr
    }
})
console.log("after changing address emlpoyees =", Newlist)



