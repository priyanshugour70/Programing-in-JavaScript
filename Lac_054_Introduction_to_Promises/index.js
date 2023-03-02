let promise = new Promise(function (resolve, reject) {
    alert("Hello... I am Promise.");
    resolve(50);
});

console.log("Hello... One.");

setTimeout(function () {
    console.log("Hello world .. Two");
}, 3000);

console.log("My name is Priyanshu Gour");
console.log(promise);
