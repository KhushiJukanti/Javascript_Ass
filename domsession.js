//  dom API ---- how to acccess elemnt from dom
//  1. getElementById..........

// let fname = document.getElementById("fname").value 
// console.log(fname)

// let box = document.getElementById("box")
// console.log(box)
// box.style.background="red"

// 2. getElementsByClassname........................................

// let boxes = document.getElementsByClassName("login-box")
// console.log(boxes)
// for(let i=0;i<boxes.length;i++){
//     boxes[i].style.width = "100px";
    
//     boxes[i].style.height = "100px";
//     boxes[i].style.background = "green";
//     boxes[i].style.margin = "10px";
// }

// 3. getElementsByTagName...............................

// let boxesByTag = document.getElementsByTagName("div")
// console.log(boxesByTag)

// 4. getElementsByName..........................................

// let input = document.getElementsByName("khushi")
// console.log(input)


// function showData(){
//     let fname = document.getElementById("Fname").value
//     let lname = document.getElementById("Lname").value
//     console.log("Full name =" ,fname,lname)
// }

// function changeColor(){
//     let colorName = document.getElementById("colorName").value
//     let box = document.getElementById("color-box")
//     box.style.background = colorName
// }


// 5. querySelector

// let list = document.querySelector("ul li")
// console.log(list)
// list.style.background="red"

// 6. querySelectorAll

// let lists = document.querySelectorAll("ul")
// console.log(lists)
// for(let i=0;i<lists.length;i++){
//     lists[i].style.color="green"
// }


//**create an element and add it in inside the DOM...........................................................................

// let p1 = document.createElement("p")
// p1.textContent = "Hiiii khushi"
// p1.style.color = "green"
// p1.style.textAlign = "center"
// document.body.appendChild(p1)

// let div = document.createElement("div")
// div.id = "box1"
// div.style.width = "100vh"
// div.style.height = "100vh"
// div.style.background = "yellow"
// div.style.display = "flex"
// div.style.justifyContent = "center"
// div.style.textAlign = "center"
// div.textContent= "I love you"
// document.body.appendChild(div)

// let box2 = document.getElementById(box1);
// // box1.innerHTML = "<p>Hiiii</p>"
// box1.insertAdjacentHTML("afterbegin","<p>Khushi</p>")
// box1.insertAdjacentHTML("beforebegin","<p>Khushi J</p>")

// function DeleteBox(){
//     let box1 = document.getElementById("box1");
//     // box1.remove();
//     document.body.removeChild(box1)
// }

// **Add Attributes and getattributes through DOM.......................................................................

// let btn = document.createElement("button")
// btn.textContent = "Login"
// btn.style.background = "blue"
// btn.style.color = "#fff"
// // btn.classList.add("login-button")
// btn.setAttribute("diabled", true)
// btn.setAttribute("class", "login-btn")

// document.body.appendChild(btn)

//  Attach event listner on element...............................................

let box = document.createElement("div")
box.id = "box1"

box.textContent = "Hi iam Box";
box.style.color = "#fff";
box.style.background = "#000";
box.style.height = "100px";
box.style.width = "100px";
document.body.appendChild(box)


//2. Button hide and show.................................................

let hidebtn = document.createElement("button")
let showbtn = document.createElement("button")
hidebtn.textContent = "Hide"
hidebtn.style.background = "Green"
showbtn.textContent = "show"
showbtn.style.background = "red"
document.body.appendChild(hidebtn)
document.body.appendChild(showbtn)

// add event listener on the button.............................


function hideBox(){
    let box1 = document.getElementById("box1")
    box1.style.display = "none"
}
function showBox(){
    let box1 = document.getElementById("box1")
    box1.style.display = "block"
}
hidebtn.addEventListener("click",hideBox)
showbtn.addEventListener("click",showBox)





