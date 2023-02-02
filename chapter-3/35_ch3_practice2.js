

// reite a program to print the marks of a student in an object using for loop 
// obj = { harry : 98 , rohan : 70  aakash : 7}

let marks = {
    priyanshu : 99 , 
    abhay : 93 , 
    nilesh : 83 , 
    jay : 98 , 
    nihal : 93
}

for(let i = 0 ; i < Object.keys(marks).length ; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}