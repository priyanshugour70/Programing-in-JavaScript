

// Extract the amount out of this string...
// "Please give Rs 1000"

let amt = "please give Rs 1000";

let num = amt.slice("please give Rs ".length);
let x = Number.parseInt(num);

console.log(x);