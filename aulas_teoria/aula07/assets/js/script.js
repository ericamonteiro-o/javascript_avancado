/*
Operadores Lógicos

AND (&&)
OR (||)
NOT (!) -> megação / inversão

Tabela verdade (para entender o resultado do uso
dos operadores)

&& 
V e V = V
V e F = F
F e V = F
F e F = F

1 e 1 = true
1 e 0 = false
0 e 0 = false
0 e 1 = false

||
V e V = V
V e F = V
F e V = V
F e F = F

1 e 1 = true
1 e 0 = true
0 e 0 = false
0 e 1 = true
*/

let n1,n2,n3, n4;
n1 = 10;
n2 = 5;
n3 = 15;
n4 = 2;

console.log((n1 > n2) && (n1 > n3));
console.log(!(n1 > n2) && (n1 < n3));

if((n1>n2) || (n3 < n2)){
    console.log("verdadeiro");
} else {
    console.log("falso");
}