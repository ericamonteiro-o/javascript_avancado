/*
Como declarar variáveis em JS (LET, VAR E CONST)

Variável -> posição reservada dentro da memória RAM, e 
colocou um valor dentro dessa variável. Uma variável
pode ser alterada e utilizada a qualquer momento dentro
do programa.

Embora isso não seja muito relevante nos dias de hoje (a 
depender do que está sendo feito e a tecnologia utlizada),
QUANTO MAIS VARIÁVEIS EU CRIAR, mais MEMÓRIA SERÁ
CONSUMIDA (MEMÓRIA RAM ESTÁ RELACIONADA A DESEMPENHO).
*/
"use strict";

/*
var -> Ao declarar com VAR, o JS faz a elevação dessa variável 
até o topo onde foi implementada. Ou seja dali pra "trás", ela 
estará acessível (fora do bloco). Além disso, pode ser usada
antes da sua declaração (criação) -> hoisting / içamento.

let -> já com LET, ela não é acessível fora do bloco {}. Só é 
acessível de onde foi implementada "para frente", um escopo 
"posterior". Pode ser re-atribuida.

const -> também possui escopo de bloco, mas é IMUTÁVEL, deve ser
inicializada e não pode sofrer nova atribuição.

JS realiza operações de type casting de forma automática
*/

function teste(){
    let nome = "Erica";
    nome = "Biribinha";
    const nome2 = "Zezin";
    // nome2 = "bla bla"; erro
    if(true){
        console.log(nome, nome2);
    }
}
teste();

// nome is not defined
// console.log(nome);