alert("You are enter in this site...")

let a = prompt("Enter First Value  : ")
let b = prompt("Enter Second Value  : ","100")

alert("Your input is String So I Will convert to Integer..",typeof(a),typeof(b))

a = Number.parseInt(a)
b = Number.parseInt(b)

let print = confirm("Do you See Sum of Number.. : ")

if(print){
    document.write("Sum of First and Second Number is : ",a+b)
}else{
    alert("Please Allow me to Sum of two numbers...")
}