//Suma de naturales 
let n = parseInt(prompt("Dame un numero:"));
let s1 = 0, s2 = 0;

s2 = ((n*(n+1))/2);

for(let i = 1; i <= n; i++){
    s1 += i;
}

console.log("S1 = "+s1);
console.log("S2 = "+s2);

if(s1 != s2){
    console.log("No son iguales");
}else{
    console.log("Son iguales");
}
