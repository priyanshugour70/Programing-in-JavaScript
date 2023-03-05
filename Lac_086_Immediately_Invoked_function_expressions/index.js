let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(486);
        }, 4000);
    });
};

// const f = async () => {
//     let b = await a()
//     console.log(b)

//     let c = await a()
//     console.log(c)

//     let d = await a()
//     console.log(d)
// }

// f()

// For solving this problem we get this method..

(async () => {
    let b = await a();
    console.log(b);

    let c = await a();
    console.log(c);

    let d = await a();
    console.log(d);
})();
