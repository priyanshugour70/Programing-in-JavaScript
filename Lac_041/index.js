let x = document.getElementsByTagName("span")[0];
console.log(x);

let y = document.getElementsByTagName("sapn")[0];
console.dir(y);

// console.log(document.body.firstChild.nodeName)
// comsole.log(document.body.firstElementChild.nodeName)

let first = document.getElementById("first");

console.log(first.innerHTML);

first.innerHTML = "<h2> Sorry I am not span I am Priyanshu Gour</h2>";

let second = document.getElementById("second");

console.log(second.outerHTML);

second.outerHTML = "<div> hello Bro not a buddy ... </div>";

// for show the data of the element..
console.log(document.body.firstChild.data);
console.log(document.body.firstChild.nodeValue);

console.log(document.body.textContent); // for all text.

console.log((document.getElementById("third").hidden = false));
