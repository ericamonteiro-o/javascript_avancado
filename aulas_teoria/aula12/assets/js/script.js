// Operador Spread (espalhador em JS)
/* Ele é usado pra combinar elementos (espalhar) ou
para copiar elementos de um array / objeto p/ outro */
let n1 = [10,20,30]
let n2 = [40,50,60]
let n3 = [...n1, ...n2]
console.log(n3);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
/*
Quando copia objetos assim, as propriedades comuns entre os dois são  sobrescritas pelo último objeto colocado
(jogador2) e as propriedades únicas de ambos são 
copiadas pro novo objeto
*/
const jogador1 = {nome: "Zezin", energia:100, vidas: 1, magia: 150};
const jogador2 = {nome: "Zezin", energia:100, vidas: 1, velocidade: 10};
const jogador3 = {...jogador1, ...jogador2};

console.log(jogador3);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const soma = (v1,v2,v3) => {
    return v1 + v2 + v3;
}

let valores = [1,3,5]

console.log(soma(...valores));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

/*
HTMLCollection é uma coleção de elementos do DOM 
(Document Object Model) retornada por métodos como 
getElementsByTagName, getElementsByClassName, entre 
outros

Ela não tem acesso a métodos como um array (forEach,
map, filter...), por isso é bão converter em array
*/
const objs1 = document.getElementsByTagName("div")
// convertendo em array com spread
const objs2 = [...document.getElementsByTagName("div")]

objs2.forEach((element) => {
    element.innerHTML = "olha eu aqui";
});

console.log(objs1);
console.log(objs2);