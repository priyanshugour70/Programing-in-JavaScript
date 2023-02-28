document.write("Priyanshu Gour");

// //setInterval..

// let x = setInterval(function(){
//     alert("Hello bhai ..")
// },3000)

// clearInterval(x)

//setTimeout..
const sum = (a, b, c) => {
    console.log("Yes I am Running.. : " + (a + b + c));
    a + b;
};

setTimeout(sum, 1000, 8, 2, 10);

let a = setTimeout(function () {
    alert("I am indide of settimeout..");
}, 5000);

let b = prompt("Do You want to run the settimeout..?");

if ("n" == b) {
    clearTimeout(a);
}

console.log(a);
