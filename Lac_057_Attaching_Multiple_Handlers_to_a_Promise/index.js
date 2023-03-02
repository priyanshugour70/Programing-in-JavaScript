let p1 = new Promise((resole, reject) => {
    console.log("Hey I am not resolved..");
    setTimeout(() => {
        resole(1);
    }, 2000);
});

p1.then(() => {
    console.log("Congratulations this promise is now resolved..");
});

p1.then(() => {
    console.log("Hurray..");
});
