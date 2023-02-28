// let clr = document.getElementsByTagName('nav')[0]
let clr = document.getElementsByTagName("body")[0];
clr.firstElementChild.style.background = "red";

let fclr = document.getElementsByTagName("div")[0];
fclr.firstElementChild.style.color = "blue";
fclr.lastElementChild.style.color = "aqua";

Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "cyan";
});
