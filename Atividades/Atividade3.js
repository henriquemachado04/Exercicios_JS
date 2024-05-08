//3 - Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano 
//(não é necessário considerar o mês em que a pessoa nasceu).

let num1 = (2024);
let num2 = (2008);
Eleicao = num1 - num2;

if (Eleicao > 17) {
    console.log("Você pode votar!")
} else {
    console.log("Você não pode Votar!")
}
