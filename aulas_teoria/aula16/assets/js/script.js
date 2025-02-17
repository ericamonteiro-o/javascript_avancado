// BREAK e CONTINUE

// break -> para o loop e continua a execução normal do
// programa
// continue -> pula a iteração atual e continua o loop

// iteração ->

let max = 100;
let pares = 0;
for(let p = 0; p <= max; p++){
    if(p % 2 !== 0){
        continue;
    }
    pares++;
}
console.log("Qtd. de pares: " + pares);
console.log("Fim do programa");