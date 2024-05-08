//10.  Leia quantos gols o TIME A marcou em uma partida e leia quantos gols o TIME B marcou. 
//Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

let time_A = Math.floor(Math.random() * 10)
let time_B = Math.floor(Math.random() * 10)

console.log("Time A", time_A, "X", time_B, "Time B")
if (time_A > time_B)
        console.log("O time A Ganhou")
    else if (time_B > time_A)   
        console.log("O Time B Ganhou");
        else{
            console.log('Empate')
        }
