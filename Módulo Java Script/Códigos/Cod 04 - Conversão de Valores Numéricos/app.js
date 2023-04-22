/*Objetivo: Desenvolver um programa Js que faça a leitura de 2 número inteiros e apresente o resultado da soma entre eles.*/


//Definição de variáveis

var js_n1;
var js_n2;
var js_soma;


//Entrada de Dados

js_n1 = window.prompt ('Informe o primeiro número: ', 'Digite aqui');
js_n2 = window.prompt ('Informe o segundo número: ', 'Digite aqui');


//Processamento de dados

js_soma = parseInt(js_n1) + parseInt(js_n2);


//Saída de dados

document.write ('O resultado da soma: ' + js_n1 + ' + ' + js_n2 + ' = ' + js_soma);

