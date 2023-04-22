
/*Objetivo: coletar dois valores digitados pelo usuário e apresentalos em ordem cescente
Elementos de entrada: método prompt do objeto window
Elementos de saída: método write do objeto document*/

//Definição de variáveis

var js_n1;
var js_n2;


//Entrada de dados

js_n1 = parseInt(window.prompt('Digite o primeiro número:', 'Digite aqui'));
js_n2 = parseInt(window.prompt('Digite o segundo número', 'Digite aqui'));


//Processamento de dados

if(js_n1 < js_n2){
    document.write('<br> Números em ordem crescente: ' + js_n1 + ', ' + js_n2);
}
else{
    document.write('<br> Números em ordem crescente: ' + js_n2 + ', ' + js_n1);
}
