// let p = function(event){
//     console.log(event)
//     console.log(event.target)
//     console.log(event.type)
// }

let x = function () {
    alert("Hello World..1");
};

let y = function () {
    alert("Hello World..2");
};

let btn = document.getElementById("btn");

btn.addEventListener("click", x);

btn.addEventListener("click", y);

let a = prompt("What is your Favorite number ..? ");

if (a == "2") {
    btn.removeEventListener("click", x);
}
