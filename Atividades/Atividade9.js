//9 - Faça um algoritmo que leia um nº inteiro e mostre uma mensagem indicando se este número é par ou ímpar. Ex: se (x%2=0) “x é par”, se (x%2=1) “x é impar”.
let num1 = Math.floor(Math.random() * 100)

if  (num1 % 2 == 0){
    console.log(num1, "o número é par")
}else(
        console.log(num1, "o número é impar")
    )