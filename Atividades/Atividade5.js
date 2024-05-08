//5 - Ler 2 valores e escrevê-los em ordem crescente

let num1 = Math.floor(Math.random() *10);
let num2 = Math.floor(Math.random() *10);

console.log (num1, "e", num2)
if (num1 < num2) {
    console.log("Primeiro", num1, "Segundo", num2)
} else {
    console.log("Primeiro", num2, "Segundo", num1)
}