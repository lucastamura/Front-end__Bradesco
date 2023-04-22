/* 	Objetivo: Capturar o nome do usuário e apresentar uma saudação personalizada 
	Definir as variáveis com o prefixo js_
 	Elementos de Entrada: método prompt do objeto window
	Elementos de Saída: método write do objeto document 
*/

/* Definição de Variáveis */
var js_nome;

/* Entrada de Dados */
js_nome = window.prompt('Entre com seu nome: ' , 'Digite seu nome nesta caixa');

/* Saída de Dados */
document.write('Ol\u00e1 '  +  js_nome + '! Seja Bem Vindo!'); // Mensagem de Saudação Personalizada
