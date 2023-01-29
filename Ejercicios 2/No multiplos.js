//No multiplos
let numero = parseInt(prompt("Dame un numero:"));
for(let i = 1; i <= numero; i++){
    if(i%3 == 0 || i%7 == 0){}else{
        console.log(i);
    }
}