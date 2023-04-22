
/*Objetivo: Capturar nome e sobrenome do usuário, concatenar (juntar) os campos e apresentar a saudação personalizada
Elementos de Entrada: método form do objeto document
Elementos de Saída: método alert do objeto window
*/

/*Definição de variáveis*/

var js_nome;
var js_sobrenome;
var js_nomecompleto;

function concatena() {
    // Entrada de dados

    js_nome = document.FormConcatena.f_nome.value;
    js_sobrenome = document.FormConcatena.f_sobrenome.value;



    //Processamento de dados

    js_nomecompleto = js_nome + ' ' + js_sobrenome;



    //Saída de dados

    window.alert('Olá, ' + js_nomecompleto);
}
