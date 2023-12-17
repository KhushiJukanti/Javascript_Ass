function show(){
    console.log("Hello good morning")
    clearTimeout(t)
}

var t = setTimeout(show,3000)
console.log(t)

//  SetInterval......................................

let count = 0;
function greet(){
    console.log("Hiiii")
    count++;
    if(count===5)
    clearInterval(id)
}
var id = setInterval(greet,5000)


