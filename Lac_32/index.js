console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

// convert nodelist to array...
let arr = Array.from(document.body.childNodes);
console.log(arr);
