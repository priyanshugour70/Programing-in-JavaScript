

//  using splice function

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // let be a normal array..

console.log(arr); // before splice program.

let splice_array = arr.splice(5,3,55,555,5555,5555); // splice in program.

console.log(typeof splice_array); // datatype in splice_array.

console.log(splice_array); // this array is only for deleted value in this splice function.

console.log(arr);  // after splice in program. 