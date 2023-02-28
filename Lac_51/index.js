const freshjoke = () => {
    setInterval(function () {
        let a = new Date();
        let h = a.getHours();
        let m = a.getMinutes();
        let s = a.getSeconds();
        let d = a.getDate();

        let dt = document.getElementById("dt");
        let tym = document.getElementById("tym");

        dt.innerHTML = a;
        tym.innerHTML = h + " : " + m + " : " + s;
    }, 200);
};
