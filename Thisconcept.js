// //1. This at global level this refers to windows.......

// var a = "khushi"
// console.log(a)
// console.log(this.a)
// console.log(window.a)


// function show(){
//     console.log("Hi iam here",this)
// }
// show()
// window.show()
// this.show()

// // 2 nd rule  inside method this refers to owner of the method.........

// var user = {
//     name:"test1",
//     show: function(){
//         console.log("hii iam inside object", this)
//     }
// }
// user.show()


// function parent(){
//     console.log(this) //window
//     function child(){
//         console.log(this)
//     }
//     child();
// }
// parent()


let user1 = {
    name:"test1",
    show:function(){
        console.log(this)
    }
}
user1.show()