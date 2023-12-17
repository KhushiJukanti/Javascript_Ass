// async function greet(){
//     return "Good morning"
// }

// let r = greet();
// console.log(r)
// r.then(function (data){
//     console.log(data)
// })

// async function start(){
//     let r = await greet()
//     console.log("hello")
//     console.log(r)
// }
// start()

// function getUsers(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve({id:10,name:"Khushi",age: 22})
//         },3000)
//     })
// }
// async function getUser2(){
//     return{id:12,name:"Khushi2"}
// }
// // 1. promis
// let x1 = getUsers();
// let x2 = getUser2();
// console.log(x1,x2)

// x1.then(function(data){
//     console.log(data)
// })

// x2.then(function(data){
//     console.log(data)
// })
// // 2. await
// async function callx1x2(){
//     let data = await getUsers();
//     let data2 = await getUser2();
//     console.log(data,data2)
// }
// callx1x2()

//  get all the users by specific Id.............................

let users = [
    {
        id:101,
        name:"khushi"
    },
    {
        id:102,
        name:"khushi1"
    },
    {
        id:103,
        name:"khushi2"
    }
]
function getUsers(){
    
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(users)
        },3000)
    })
}
function getUserById(){
    let id = Number(prompt("Enter Id for user"))
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let user = users.find(function(item){
                return item.id === id
            })
            resolve(user)
        },3000)
})
}

getUsers().then(function(data){
    getUserById().then(function(result){
        console.log("get user by id done after get users",result)
    })
})