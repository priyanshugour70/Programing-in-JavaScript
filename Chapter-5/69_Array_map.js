

// Array map method.
// may makes new array and forEach work on existing array.
// map function use to return some value . ans map gave new variable and forEach work on existing variable.

let ary = [ 1, 2, 3, 4, 5, 6, 7 , 8, 9 , 10] ;

// let p = ary.map((value)=> {
//     console.log(value);
//     return value*2 ;
// })

let p = ary.map((value,index,array)=> {
    console.log(value,index,array);
    return value*2 ;
})


console.log(p);