let a = document.getElementById("first");

console.log(a.getAttribute("class"));

console.log(a.hasAttribute("class"));
console.log(a.hasAttribute("style"));

//for hidden attribute...
// a.setAttribute("hidden","true")
a.setAttribute("class", "hey hlo");

a.removeAttribute("class");

console.log(a.attributes);

console.log(a.dataset);
console.log(a.dataset.nam);
console.log(a.dataset.srnm);
