/*
Modo estrito (ou restrito)

Ele serve para poder deixar o código mais limpo, com menos sujeira, menos coisas inutilizadas. Essas restrições nos
forçam a deixar o código funcional e elegante.

Ex.: não é possível declarar uma variável sem 'var','let' ou 
'const' usando o modo strict
*/
"use strict";

let nome = "Erica";
// isso gera um erro
// nome = "Erica";
console.log(nome);