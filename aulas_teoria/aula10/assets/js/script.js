/* Operação ternária 
? -> operador ternário

condicao? se_true : se_false;

Forma de reduzir e simplificar uma condicional (if else)
*/

let num = 10;
// 0 -> false
// 1 -> True
let res = ((num % 2)? "Par":"Ìmpar");
// ! -> negação
res = (!(num % 2)? "Par":"Ìmpar");

console.log(res);