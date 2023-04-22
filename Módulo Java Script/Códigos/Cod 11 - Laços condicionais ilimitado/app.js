
    /*Objetivo: Executar uma sequencia  de comandos por uma quantidade indeterminada de vezes utilizando uma variável de controle
    (Valor lógico = true, por exemplo) no lugar de contadores delimitadores. O controle pode ser feito um controle através de perguntas na
    tela, utilizando o método  confirm (OK ou Cancelar, por exemplo).*/

    //Definição de variáveis

    var js_contador=1;
    var js_resposta= true;

    //Laço de repetição condicional - while utilizando controle de limitação pelo usuário

    while(js_resposta == true){
        document.write('<p>' + js_contador + '&ordf; Repetição de uma única linha de comando dentro de um laço condicional: ');
        js_contador +=1;
        js_resposta = window.confirm('Deseja continuar?');
    }