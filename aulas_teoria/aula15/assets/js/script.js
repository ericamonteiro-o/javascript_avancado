// Loops FOR IN e FOR OF - variações do loop for

const objs = document.getElementsByTagName("div");

let num = [10,20,30,40,50];

/*
for...in é utilizado para iterar sobre as propriedades
enumeráveis de um objeto.

itera sobre as chaves 
*/
for(let n in num){
    console.log(num[n]);
    // console.log(`${n} - ${num[n]}`);
}

/*
for...of é usado para iterar sobre os valores de objetos 
iteráveis (como arrays, strings, maps, sets, etc.).
*/
for (let o of objs){
    console.log(o.innerHTML = "Curso");
}

/* for (let obj in objs){
    console.log(objs[obj].innerHTML = "teste");
} */