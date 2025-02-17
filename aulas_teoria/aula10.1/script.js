/* Switch Case
É uma estrutura condicional que testa a equivalência 
(igualdade estrita) de muitos valores (cases) com uma 
variável (valor / expressão). Evita de usar uma penca
de ifs e elses.

Caso nenhum case seja equivalente, se houver um bloco
default, ele é executado.

break para a execução do bloco, impedindo que outros
cases não equivalentes sejam executados.
*/

let capitalCountry = "Brazil";

switch(capitalCountry){
    case 'BR':
    case 'Brazil' : 
        console.log('Brasília');
    break;

    case 'USA' : 
        console.log('Washington D.C.');
    break;

    case 'France' : 
        console.log('Paris');
    break;

    default:
        console.log('Bunda lê lê');
    // break; -> no default pode ser omitido
}
