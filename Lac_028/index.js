window.console.log(window)
console.log(document)
console.log(document.body)


window.document.body.style.background = "red";

let a = confirm("Do you want to go google.com........!");

if(a){
    location.href = "https://google.com"
}else{
    document.write("You will not transfer the google ..!")
}