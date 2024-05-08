// 2 - Ler as notas da 1a e 2a avaliação de um aluno. Calcular a média aritmética simples e escrever uma 
//mensagem que diga se o aluno foi ou não 
//aprovado (considerar que se a nota for igual ou maior que 7 o aluno é aprovado). 
//Escrever também a média calculada.

let num1 = Math.floor(Math.random() *10);
let num2 = Math.floor(Math.random() *10);
let media = ((num1 + num2) / 2);
    
console.log (media);

if (media >= 7){
    console.log("Parabéns você foi aprovado!"); 
} else{
    console.log("Infelizmente você não passou!"); 
}