// FUNÇÕES
// Bloco de código reutilizável que executa tarefa específica
// chamo quando eu quiser

// declaração da função (criação)
function nome(){
    console.log("CFB Cursos");
}
// chamada da função
nome();
nome();
nome();

function mudarTexto(){
    let d1 = document.getElementById("d1");
    let d2 = document.getElementById("d2");
    let d3 = document.getElementById("d3");
    d1.innerHTML="CFBCursos";
    d2.innerHTML="CFBCursos";
    d3.innerHTML="CFBCursos";
}

// mudarTexto();


// FUNÇÃO COM RETORNO
/*Após a entrada e processamento retorna um valor usando
 a keyword return  
 */
// nada abaixo de return é executado
// valor pode ser reutilizado, atribuido a variavel
function soma(n1, n2){
    return n1 + n2;
}
let total = soma(10,2);
console.log(total);


// FUNÇÕES PARAMETRIZADAS
/* Funções podem reservar espaços que serão substituidos
por valores reais 

parâmetros = são variáveis definidas na criação da função

argumentos = são os valores reais que são passados par
a a função quando ela é chamada
*/

// n = x -> parâmetro com valor default
const VALOR_PADRAO = 0
function soma2(n1 = VALOR_PADRAO, n2 = 1){
console.log(n1 + n2);
}
soma2(10);
soma2(10, 5);