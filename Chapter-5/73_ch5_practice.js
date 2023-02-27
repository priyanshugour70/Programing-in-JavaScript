

// keep adding numbers to the array in 1 until 0 is added to the array.

let pusary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let a;
do {
    a = 0;
    a = Number.parseInt(a);
    pusary.push(a);
    console.log(pusary);
} while (a != 0);