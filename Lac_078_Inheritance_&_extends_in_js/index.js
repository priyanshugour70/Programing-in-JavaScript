// Class is a like template..
class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    run() {
        console.lgo(this.name + " Is Running...");
    }
    shout() {
        console.log(this.name + " Is Barking...");
    }
}
class Monkey extends Animal {
    eatBanana() {
        conosle.lgo(this.name + " Is eating Banana...");
    }
    hide() {
        conosle.log(`${this.name} is hiding`);
    }
}

let ani = new Animal("Bruno", "White");
let m = new Monkey("Chimpu", "Orange");

ani.shout();
m.eatBanana();
m.hide();
// ani.hide() this will throw an error
