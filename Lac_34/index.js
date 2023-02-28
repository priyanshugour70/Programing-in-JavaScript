const changebgcolor = () => {
    document.body.firstElementChild.style.background = "red";
};

let b = document.body;
console.log("First child of b is  : ", b.firstChild);
console.log("First Element child of b is  : ", b.firstElementChild);

//     console.log("PreviousElementSibling : ",document.previousElementSibling)
//     console.log("nextElementSibling : ",document.nextElementSibling)
//     console.log("firstElementChild : ",document.firstElementChild)
//     console.log("lastElementChild : ",document.lastElementChild)
