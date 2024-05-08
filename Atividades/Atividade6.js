//6 - Ler 3 valores e escrever o maior deles.

let num1 = Math.floor(Math.random() *100);
let num2 = Math.floor(Math.random() *100);
let num3 = Math.floor(Math.random() *100);

console.log (num1, ",", num2, "e", num3);
if (num1 > num2 && num1 > num3) {
    console.log("O", num1, "é o maior");
} 
    else if (num2 > num1 && num2 > num3) {
       console.log("O", num2, "é o maior");
} 
        else {
            console.log("O", num3, "é o maior");
    }