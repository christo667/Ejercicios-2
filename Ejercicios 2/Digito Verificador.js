//Digito verificador
let suma = 0,  multiplos = 2;
let digito = prompt("Dame el Digito");
let digito_Alreves = digito.split("").reverse().map(Number);
console.log(digito_Alreves);

for(i = 0; i < digito.length; i++){
    if(multiplos <= 7){
        suma += multiplos*digito_Alreves[i];
        
    }else{
        multiplos = 2;
        suma += multiplos*digito_Alreves[i];
    }
    multiplos++;
}

console.log("Suma:",suma);
console.log("Modulo:",suma%11);
console.log("numero verificador:",digito,"-",(11-suma%11));