async function priyanshu() {
    let harda = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Deg");
        }, 1000);
    });

    let bhopal = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Deg");
        }, 5000);
    });

    // harda.then((x)=>{
    //     console.log(x)
    // })

    // bhopal.then((x)=>{
    //     console.log(x)
    // })

    console.log("Fetching harda Weather Please Wait...!");
    let harda1 = await harda;
    console.log("Fetched harda Weather is :  " + harda1);

    console.log("Fetching Bhopal Weather Please Wait...!");
    let bhopal1 = await bhopal;
    console.log("Fetched Bhopal Weather is :  " + bhopal1);

    return [harda1, bhopal1];
}

console.log("Welcome to Weather Control Room..!");

const gour = () => {
    console.log("Gour is the Surname of Priyansu ...... !");
};

let w = priyanshu();

w.then((w) => {
    console.log(w);
});

gour();
// console.log(w)
