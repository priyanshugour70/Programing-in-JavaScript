console.log(document.cookie);
document.cookie = "Name : Piryansu9098393937";
document.cookie = "Name : Devanshu098393937";
console.log(document.cookie);
let key = prompt("Enter your Key : ");
let value = prompt("Enter your Value : ");

document.cookie = `${key} = ${value}`;
console.log((document.cookie = `${encodeURI(key)} = ${encodeURI(value)}`));
console.log((document.cookie = `${decodeURI(key)} = ${decodeURI(value)}`));
