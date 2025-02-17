/* 
Dá pra fazer isso pelo CSS  mais fácil, mas 
também é possível mudar a forma de visualização da página
conforme tamanho da tela pelo JS
*/
if(navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/Iphone|Ipad|Ipod/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/IEMobile/i)){
    console.log("Celular");
}else {
    console.log("PC");
}

/**
DOM -> árvore de elementos dentro do HTML
O JS consegue manipular os elementos da página, porque
ele enxerga essa árvore de componentes (e o que tá relacionado a 
eles, propriedades), o DOM.
 */