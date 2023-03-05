// Destructuring ....
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [a, b, c, d, e, ...rest] = arr; // using rest this is known as Destructuring...

console.log(arr);
console.log(a, b, c, d, e);
console.log(a, b, c, d, e, rest); // using rest this is known as Destructuring...
// let [a, , , ...rest] = arr
// console.log(a, rest)

let { x, y } = { x: 10, y: 20 };
console.log(x, y);

// Sprad Syntax..
//Sprad operator use for convert to array to object .. in javascript
let leg = [2, 4, 6, 8, 10];
let obj = { ...leg };
console.log(obj);

const fun = (a, b, c, d, e) => {
    return a + b + c + d + e;
};
console.log(fun(...leg));

let obj2 = {
    name: "Priyanshu Gour",
    Age: 45,
    school: "BAC 'Advance Cloud Computing '",
};

console.log(obj2);
console.log({ name: "Devanshu Gour", Age: 35, ...obj2 });
console.log({ ...obj2, name: "Devanshu Gour", Age: 35 });
