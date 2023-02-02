

// reduce method in javaScript.

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newarr = arr.reduce((previous,current)=>{
    return previous + current;
})

console.log(newarr);

// const red_fun = (previous,current) =>{
//     return previous + current;
// }

// let new_arr1 = arr.reduce(red_fun);

// console.log(new_arr1);