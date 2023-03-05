function init() {
    var name = "Priyanshu Gour";

    function display() {
        console.log(name);
    }

    name = "Devanshu Gour";

    return display;
}

let c = init();

function returnFunc() {
    const x = () => {
        let a = 1;
        const y = () => {
            let a = 2;
            const z = () => {
                let a = 3;
                console.log(a);
            };
            z();
        };
        y();
    };

    return x;
}

let a = returnFunc();
a();
