

// Filter in javascript .

let arr = [ 1, 3, 6, 45, 32 , 32, 65, 3, 47, 65, 3, 41, 42, 43, 53, 2,45 , 6, 56, 3];

let arr1 = arr.filter((val)=>{
    return (val % 2 != 0);
})

console.log(arr1);