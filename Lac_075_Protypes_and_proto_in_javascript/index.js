let a = {
    name2: "Priyanshu ",
    language: "JavaScript",
    run: () => {
        alert("Self Run ..");
    },
};

console.log(a);

let p = {
    run: () => {
        alert("run");
    },
};

p.__proto__ = {
    name: "jackie..",
};

a.__proto__ = p;
a.run();
console.log(a.name);
