nam = { Priyanshu: 18, Nilesh: 17, Abhay: 19 };

console.log("hey Priyanshu Gour..  ");
console.error("This is an Error..");
console.assert(5 > 100); // this is an function if your input is false then show error.
console.table(nam);
console.warn("Dont hack my Laptop...");
console.info("Plz.. Give me Some money..");

console.time("forloop");

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.timeEnd("forloop");

console.time("whileloop");

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

console.timeEnd("whileloop");