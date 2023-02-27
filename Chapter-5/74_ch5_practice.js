

// filter for numbers divisible by 10 from a given array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let flt = arr.filter((val) => {
    return 10 % val == 0;
})

console.log(flt);
