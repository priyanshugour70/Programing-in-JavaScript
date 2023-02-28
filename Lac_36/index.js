let getid = document.getElementById("ptag");
getid.style.background = "gray";

let getcss = document.querySelectorAll(".card-title");
console.log(getcss);
getcss[0].style.color = "red";
getcss[1].style.color = "blue";
getcss[2].style.color = "green";

let getsinglecss = document.querySelector(".card-title");
getsinglecss.style.color = "aqua"; // this fast..

console.log(document.getElementsByTagName("a"));
console.log(document.body.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));
console.log(document.getElementsByClassName("body"));
console.log(document.getElementsByName("body"));
