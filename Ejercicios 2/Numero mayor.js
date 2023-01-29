//Numero mayor
let n = (parseInt(prompt("Ingrese n")));
let mayor = -9999;

for(let i = 0; i < n; i++){
    let numeros = parseInt(prompt("Dame un numero"));
    console.log(numeros);
    
    if(numeros > mayor){
        mayor = numeros;
    }
}

console.log("El mayor es: "+mayor);