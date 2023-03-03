try {
    let age = prompt("Enter your age : ");

    age = Nubmer.parseInt(age);

    if (age > 150) {
        throw new ReferenceError("This is probably not ture.. !");
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
