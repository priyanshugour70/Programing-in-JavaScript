

// Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated).

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let redarr = arr.reduce((prev, pres) => {
    return prev * pres;
})

console.log(redarr);