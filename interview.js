// 9. qustion 
let user = [
    {
        id: 101,
        name: "test1",
        company: "ABC"
    },
    {
        id: 102,
        name: "test2",
        company: "BCA"
    },
    {
        id: 103,
        name: "test3",
        company: "ABC"
    },
    {
        id: 104,
        name: "test4",
        company: "BCA"
    },
    {
        id: 105,
        name: "test5",
        company: "ABC"
    }
]

// let groupkey = "company"
// let resultobj = {}
// for (let i = 0; i < user.length; i++) {
//     let obj = user[i];
//     let key = obj[groupkey]
//     if (resultobj[key]) {
//         resultobj[key] = []
//     }
//     resultobj[key].push(obj)

// }
// console.log("result = ", resultobj)
// .............................................................................................................................................................

// function groupDatabyKey(data, groupkey) {
//     let resultobj = {}
//     for (let i = 0; i <data.length; i++) {
//         let obj = data[i];
//         let key = obj[groupkey]
//         if (!resultobj[key]) {
//             resultobj[key] = []
//         }
//         resultobj[key].push(obj)
//     }
//     return resultobj;
// }

// let finalData = groupDatabyKey(user,"company")
// let finalData2 = groupDatabyKey(user,"id")
// console.log(finalData2)

// qustio 10....................................

function startProgress(){
    let increment = 0
    let pbr1 = document.getElementById("progress");
    // pbr1.style.width = '10%'

    let progInterval = setInterval(() => {
        if(increment === 100){
            // pbr1.style.width = 0+'%'
            // increment = 0;
            clearInterval(progInterval)
        }else{
            increment = increment + 10
            pbr1.style.width = increment+"%";
        }
    },1000);
}

// function getusers(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json))
// }
// getusers()