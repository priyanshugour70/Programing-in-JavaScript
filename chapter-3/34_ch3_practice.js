

// reite a program to print the marks of a student in an object using for loop 
// obj = { harry : 98 , rohan : 70  aakash : 7}

const obj = {
    harry : 98 , 
    rohan : 70 , 
    aakash : 7
}

for(a in obj){
    console.log("marks is "+ a + " is " + obj[a]);
}