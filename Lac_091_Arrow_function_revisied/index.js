const sayHello = (name) => {
    console.log("greeting" + " " + name);
    console.log("hi");
};

const x = {
    name: "Priyanshu Gour",
    role: "JS Developer",
    exp: 15,
    show: function () {
        // let that = this ;
        // // console.log(this)
        // cosnole.log(that)

        setTimeout(() => {
            console.log(`The name is ${this.name}\nThe role is ${this.role}`);
        }, 2000);
    },
};

sayHello("Priyanshu", "Good Afternoon");
//console.log(x.name,x.exp)
//x.show()
