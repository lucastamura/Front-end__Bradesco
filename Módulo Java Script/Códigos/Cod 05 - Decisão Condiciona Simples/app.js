
/*
Objetivo: Coletar dois valores digitados pelo usuário e apresentalos em ordem crecente
Método de entrada: método form do objeto document
Método de saída: método alert do objeto window*/

//Definição de variáveis

var js_n1;
var js_n2;
var js_n3;

//Processamento dos dados

function ordenar(){

    //Entrada de dados

    js_n1 = parseInt(document.FormOrdena.f_n1.value);
    js_n2 = parseInt(document.FormOrdena.f_n2.value);


    //Processamento dos dados

    if(js_n1 > js_n2){
        js_n3 = js_n1
        js_n1 = js_n2
        js_n2 = js_n3
    }

    window.alert('Número em ordem crescente: ' + js_n1 + ', ' + js_n2);
}

