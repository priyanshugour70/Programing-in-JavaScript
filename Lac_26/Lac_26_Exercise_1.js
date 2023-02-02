

// rendom number Game. 

let a = Math.random()*100 ;
a = Number.parseInt(a);

let inp ;
let score = 0 ;

while(inp != a) {
    score++
    inp = 15 ; // prompt("Enter the Number : ") use prount function .

    if(inp == a){
        console.log("Congratulation ! You guess teh correct numbe. ");
        console.log("YOu guess the actual number in chances."+ score);
    }
    else if(inp > a && inp < 100){
        console.log("Your number is greater than the actual number. ");
    }
    else if(inp < a && inp > 0 ){
        console.log("Your number is smaller than the actual number. ");
    }
    else{
        console.log("Enter number between 1 to 100 .");
    }

}