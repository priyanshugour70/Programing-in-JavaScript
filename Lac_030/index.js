const rndm = () =>{
    const alphabet = "swg";
    return alphabet[Math.floor(Math.random()*alphabet.length)];
}

let i = 1 ; 
let ycount = 0 ;
let ccount = 0 ;

while(10 >= i){

    let a = prompt("Enter S W G"); // S = snake , W = water , G = gun
    let b = rndm();

    if(a == b){
        document.write(i,"Match Draw..<br>")
    }
    else if(a == 's' && b == 'w'){
        document.write(i,"Computer Won..<br>")
        ccount++;
    }
    else if(a == 's' && b == 'g'){
        document.write(i,"Computer Won..<br>")
        ccount++;
    }
    else if(a == 'w' && b == 'g'){
        document.write(i,"You Won..<br>")
        ycount++;
    }
    else if(a == 'w' && b == 's'){
        document.write(i,"You Won..<br>")
        ycount++;
    }
    else if(a == 'g' && b == 's'){
        document.write(i,"You Won..<br>")
        ycount++;
    }
    else if(a == 'g' && b == 'w'){
        document.write(i,"Computer Won..<br>")
        ccount++;
    }

    i++;
}

if(ccount == ycount){
    document.write("<h1>Game Draw</h1>")
}
else if (ccount < ycount){
    document.write("<h1>",ycount,"You Won this game ...</h1>")
}
else{
    document.write("<h1>",ccount,"Computer Won this game ...</h1>")
}
