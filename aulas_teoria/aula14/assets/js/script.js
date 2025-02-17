// Loops (laçõs de repetição)

/*
Loops são estruturas de controle que permitem a repetição
de um bloco de código várias vezes com base em uma
condição  
*/

// for (para) é bom p/ quando sabe de antemão quantas 
// vezes o bloco deve ser executado (loop definido)
/*
for (var_de_controle, condicao, incremento/dec.)
{// código a ser executado}
*/
for(let i = 0; i < 5; i++){
    console.log(i + 1);
}

/*
while
loop repete o bloco enquanto a condição for verdadeira.
É um loop indefinido, pois a quantidade de iterações não 
é conhecida de antemão
*/
let num = 10;
while(num > 0){
    console.log(num);
    num--;
}

/*
do while 
é semelhante ao while, mas executa ao menos 1x o bloco
, mesmo que condição seja false (não é muito usado
por isso)*/
let logado = false;
do {
    console.log("bla bla");
} while(logado)