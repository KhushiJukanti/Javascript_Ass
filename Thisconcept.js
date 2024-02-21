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


// let user1 = {
//     name:"test1",
//     show:function(){
//         console.log(this)
//     }
// }
// user1.show()


// 1.Gobal Context--------------------

console.log(this === window); // true in a browser
// 2.Function context ----------------

function greet() {
    console.log(this.name);
  }
  
  let person = {
    name: 'John',
    sayHello: greet
  };
  
  person.sayHello(); // Output: John

//   3. Constructer Context-----------------

function Person(name) {
    this.name = name;
  }
  
  let john = new Person('John');
  console.log(john.name); // Output: John

  
//   4.Event handler contaxt------------------

<button id="myButton">Click me</button>

document.getElementById('myButton').addEventListener('click', function() {
    console.log(this.id); // Output: myButton
  });
  