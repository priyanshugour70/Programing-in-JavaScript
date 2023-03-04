// Class is a like template..
class Employee {
    login() {
        console.log(`Employee has logged IN`);
    }
    logout() {
        console.log(`Employee has logged OUT`);
    }
    requestleaves(leaves) {
        console.log(`Employee has requested ${leaves} leaves-Auto Approve..`);
    }
}
class Programmer extends Employee {
    requestCoffee(x) {
        console.log(`Employee has requested ${x} Coffee`);
    }
    requestLeaves(leaves) {
        super.requestleaves(4);
        console.log("One extra is granted...");
        // console.log(`Employee has requested ${leaves+1} leaves(One Extra)`)
    }
}

let e = new Programmer();
e.login();
e.requestleaves(3);
