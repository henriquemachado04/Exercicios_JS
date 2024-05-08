// 7 - Ler 3 valores e escrever a soma dos 2 maiores.

let num1 = Math.floor(Math.random() *100);
let num2 = Math.floor(Math.random() *100);
let num3 = Math.floor(Math.random() *100);

console.log (num1, ",", num2, "e", num3);
if (num1 > num2 && num3 > num2) {
    console.log("A soma de", num1,"+",num3,"=", num1 + num3);
}
else if (num2 > num1 && num3 > num1) {
    console.log("A soma de", num2,"+",num3,"=", num2 + num3);
}
else {
    console.log("A soma de", num2,"+",num1,"=", num2 + num1);
}