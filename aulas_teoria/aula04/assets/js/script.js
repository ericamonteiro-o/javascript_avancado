/*
Operadores Aritméticos (ou Matemáticos)

+ - * / % (módulo - retorna resto da divisão), ** (exponenciação)

Boa prática: inicializar variáveis ao criá-las. Ao deixar uma 
variável undefined, ela é criada na memória com um "lixo" nela.

Precedência é a mesma da matemática tradicional:
()
**
* /
+ -

*/

// let num1,num2,num3 = 10;
// let num1,num2,num3;
// num1=num2=num3=10;

let num1,num2 = 0; let res = 0;

num1 = 5;
num2 = 10;
// ++ -> adiciona 1 a variável
// -- -> remove 1 da variável
num1++;

// Atribuição + operação
num1 += 1; // mesmo que num1 = num1 + 1;
num1 -= 1;
num1 *= 1;
num1 /= 1;
num1 %= 1;

res = (num1 + num2) * 2;

console.log(res);