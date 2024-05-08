//8 - Ler 3 valores e escrevê-los em ordem crescente.

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let num3 = Math.floor(Math.random() * 100);

console.log("Números gerados:", num1, ",", num2, "e", num3);

if (num1 <= num2 && num1 <= num3){
    if (num2 <= num3){
        console.log ("A sequência será:", num1, ",", num2, ",", num3)
    }
    else{
        console.log("A sequência será:", num1, ",", num3, ",", num2)
    }
}
else if (num2 <= num1 && num2 <= num3){
    if (num1 <= num3){
        console.log("A sequência é:", num2, ",", num1, "e", num3)
    }
    else{
        console.log("A sequência é:", num2, ",", num3, ",", num1)
    }
}
else if (num3 <= num2 && num3 <= num1){
    if (num2 <= num1)
    console.log("A sequencia é:", num3, ",", num2, "e", num1)
}
else{
    console.log("A sequencia é:", num3, ",", num1, "e", num2)
}