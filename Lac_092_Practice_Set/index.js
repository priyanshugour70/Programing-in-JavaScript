// Que .1  = write a javascript program to print the following ofter 2 second delay Hello, World
const a = async (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 2000);
    });
};

(async () => {
    let text = await a("Hello");
    console.log(text);
    text = await a("World");
    console.log(text);
})();

// Que .2   Write a javascript program to find average of numbers in an array uding sprad Syntax..
function sum(a, b, c) {
    return a + b + c;
}
let x = [5, 10, 15];
sum(...x);

// Que .3 Write a javascript function which resolves a promise after n seconds . the funcion takes n as the parameter use an IIFE to execute the functions with different values of n ..

const f = async (text, n = 2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 1000 * n);
    });
};

(async () => {
    let text = await f("I am resolving 3 Seconds ..", 3);
    console.log(text);
    text = await f("I am resolving 3 Seconds ..", 5);
    console.log(text);
})();

// Que .4 Write a simple Interest Calculator using JavaScript..

function SimpleInterest(P, T, R) {
    return (P * T * R) / 100;
}

let SI = SimpleInterest(5000, 5, 10);
console.log(SI);
