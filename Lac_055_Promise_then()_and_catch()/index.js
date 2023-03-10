let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending...");
    // setTimeout(() => {
    //     console.log("I am a promise and I am resolve..");
    //     resolve(true);
    // }, 4000);

    setTimeout(() => {
        console.log("I am a promise and I am reject..");
        reject(new Error("This is legend Error.."));
    }, 5000);
});

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending...");
    setTimeout(() => {
        console.log("I am a promise and I am resolve..");
        resolve(true);
    }, 4000);

    // setTimeout(() => {
    //     console.log("I am a promise and I am reject..");
    //     reject(new Error("This is legend Error.."));
    // }, 5000);
});

console.log(p1, p2);
//to catch the error
p1.catch((error) => {
    console.log("some error occurred..");
});

//To get the value
p2.then((value) => {
    console.log(value);
});

// In this if value is fullfiled them no problem but its give an error then catch the error using else conditon..
p1.then(
    (value) => {
        console.log(value);
    },
    (error) => {
        console.log(error);
    }
);
