

// sort using the compare function to assending order sorting .. 

// let we make a compare function..

let compare = (a , b) => {
    return a - b ;
}


let pg = [89, 6, 75, 7, 9, 8, 4, 82, 3, 74, 5]; // this is an array .
console.log(pg);  // print function without using sort funtion..

pg.sort(compare); // sort using compare function..

console.log(pg) ; // print after the sort assending order.
// console.log("After sort in assending order : " + pg) ;
