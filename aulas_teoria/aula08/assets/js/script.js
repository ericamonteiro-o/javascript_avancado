/* 
Operadores Bitwise 

Opera os bits dos elementos
Bom p/ ver a manipulação dos bits em baixo nível
*/

/*
& (AND)
Onde houver equivalência de bits, retornará
bit 1; ex.: 1 e 1. O resto das combinações
retornará bit 0 

1010
1011
-----
1010 (10 em decimal)

=======================================================

| (OR)
Onde eu tiver bit 1 (independente do outro
bit ser 0 ou 1), retornará bit 1

1010
1011
----
1011 (11 em decimal)


=======================================================

^ (XOR - OR exclusivo)
Onde houver equivalência (tanto 1 e 1 e 0 e 0) retorna 0.
Só retorna 1 onde não houver equivalência
1010
1011
----
0001 (1 em decimal)



~ (NOT)
Inverte todos os bits de um número (também chamado de 
complemento de 1).
O operador ~ considera o número como assinado (com sinal) em
muitas linguagens, como JavaScript, então o resultado pode 
parecer estranho para números positivos.
ex.:
~5 // 5 = 101
Resultado: ~(00000101) = 11111010 (-6 em decimal, 
considerando o bit de sinal)

=======================================================

<< (DESLOCAMENTO À ESQ.)
Desloca os bits do elemento para a esquerda 

ex.: 15 << 1 (1 = deslocar 1 bit p/ esquerda -> resultado: 30 )

se eu quiser deslocar +1 bit eu posso
ex.: 15 << 2 (deslocando 2 bits p/ esquerda -> resultado 60)

Bom para quando eu quiser DOBRAR um valor (*2)


(15 p/ 30)
1111 -> 11110
=======================================================

>> (DESLOCAMENTO À DIR.)
Desloca os bits do elemento para a DIREITA 

ex.: 15 >> 1 (1 = deslocar 1 bit p/ direita -> resultado: 7)

Bom para quando eu quiser DIVIDIR um valor pela 
metade (/2)


(15 p/ 7)
1111 -> 111
*/

let n1 = 10
let n2 = 11

// let res = n1 & n2;
let res = n1 | n2;
res = n1 ^ n2;

// deslocando p/ direita
// res = 15 >> 1;

// deslocando p/ esquerda 2x
res = 15 << 2;
console.log(res);

