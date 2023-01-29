//Historigrama 
let seleccion = 1, negativos = 0, positvos = 0; 
while(seleccion != 0){
    seleccion = parseInt(prompt("Dame un numero:"));
    console.log(seleccion);

    if(seleccion > 0){
        positvos++;
    }
    if(seleccion < 0){
        negativos++;
    }
}
let texto = "";
for(let i = 0; i < positvos; i++){
    texto += "*";
}
console.log("Positivos:"+texto);

texto = "";
for(i = 0; i < negativos; i++){
    texto += "*";
}
console.log("Negativos:"+texto);