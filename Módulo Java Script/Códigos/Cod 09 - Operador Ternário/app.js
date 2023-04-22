
/* Objetivo:
    Exemplos práticos de aplicações com Operador Ternário ?:, Operadores Relacionais e Expressão Aritimética.
    Utilização de sintaxe [elemento condicional a testar] ? [resultado se verdadeiro] : [resultado se não verdadeiro ]
*/

//Definição de variáveis

document.write('<p>-------------------------------------...');
document.write('<p>DEFINIÇÃO E ATRIBUIÇÃO DE VARIÁVEIS:');
document.write('<p>var js_num = <b>30</b>; (js_num recebe valor30)');
var js_num = 20;

//Aplicação de Operador Ternário utilizando Operadores Relacionais

document.write('<p>--------------------------------------...');
document.write('<p>OPERADOR TERNÁRIO <b>?</b> com OPERADORES RELACIONAIS (==, !=, <):');

document.write('<p>js_num <b>==</b> 20 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta => ');
((js_num == 20) ? document.write('<b>SIM</b>') : document.write('<b>NÃO</b>'));

document.write('<p>js_num <b>!=</b> 20 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta => ');
((js_num != 20) ? document.write('<b>SIM</b>') : document.write('<b>NÃO</b>'));

    document.write('<p>js_num <b><</b> 20 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta => ');
((js_num < 20) ? document.write('<b>SIM</b>') : document.write('<b>NÃO</b>'));


//Aplicação de operador Ternáio utilizando Expressão Arítimética e Operador Relacional

document.write('<p>--------------------------------------...');
document.write('<p>(js_num <b>-</b> 20) <b>==</b> 0 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta => ');
    ((js_num - 20) == 0) ? document.write('<b>SIM</b>') : document.write('<b>NÃO</b>');
