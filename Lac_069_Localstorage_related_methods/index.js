let key = prompt("Enter key you want to set : ");
let value = prompt("Enter value you want to set : ");

localStorage.setItem(key, value);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if (key == "red" || key == "blue") {
    localStorage.removeItem(key);
}
if (key == 0) {
    localStorage.clear();
}

console.log("length of localstorage : ", localStorage.length()); // localstorage is use like array to acces the index of value..
// localStorage is allways store in string format..
// localstorage is stored using the help of JSON..
