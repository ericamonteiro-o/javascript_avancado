// Comando condicional IF e IF ELSE 

/*
É uma estrutura que muda o fluxo do programa

if - se (executa bloco se condição for verdadeira)
else if = senao se (testa uma nova condição se condicao no if for false)
else - caso contrário (executa um bloco de código se 
todas as condições if e else if forem falsas)
*/

let num = 100

if (num > 10 && num < 100){
    console.log("Numeral maior que 10 e menor que 100");
} else if (num <= 10 && num > 0) {
    console.log("Número entre 1 e 10");
} else {
    console.log("0 ou abaixo de 0");
}
console.log("Fim do programa");