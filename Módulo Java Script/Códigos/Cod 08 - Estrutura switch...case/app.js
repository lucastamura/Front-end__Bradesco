   
/*  Objetivo: Utilizando o recurso de seleção multipla - switch...case, pesquisar o nome do mês de referência
- Objeticos e Métodos utilizados:
Entrada: document.form (entrada de dados via Formulário)
Saída: document.form (saida de dados via formulário)
- Importante:
    os campos de formulário serão identificados com o prefixo f_  => Exemplo: f_mes
    Os campos do JavaScript serão identificados com o prefixo js_ => Exemplo js_mes
*/

//Definição de variáveis

var js_mes

//Início da função verificames() para captura dos dados do formulário e pesquisa por seleção multipla

function verificames() {
    //Captura do valor do mês do formulário f_mes e transferencia/atribuição para variável do JavaScript js_mes
    js_mes = parseInt(document.formcalend.f_mes.value);

    //Início da estrutura da seleção switch..case

    switch (js_mes){
        case 1 : document.formcalend.f_nomemes.value = 'Janeiro'; break
        case 2 : document.formcalend.f_nomemes.value = 'Fevereiro'; break
        case 3 : document.formcalend.f_nomemes.value = 'Março'; break
        case 4 : document.formcalend.f_nomemes.value = 'Abril'; break
        case 5 : document.formcalend.f_nomemes.value = 'Maio'; break
        case 6 : document.formcalend.f_nomemes.value = 'Junho'; break
        case 7 : document.formcalend.f_nomemes.value = 'Julho'; break
        case 8 : document.formcalend.f_nomemes.value = 'Agosto'; break
        case 9 : document.formcalend.f_nomemes.value = 'Setembro'; break
        case 10 : document.formcalend.f_nomemes.value = 'Outubro'; break
        case 11 : document.formcalend.f_nomemes.value = 'Novembro'; break
        case 12 : document.formcalend.f_nomemes.value = 'Dezembro'; break
    default : document.formcalend.f_nomemes.value = '** M\u00eas Inválido! **'; break;
    }

    //Final da estrutura da seleção multipla swtch..case
}
//Final da função verificames() para captura dos dados do formulário e pesquisa por seleção multipla

/*  TABELA UNICODE
    Utilização da tabela Uncode para configuração dos caracteres de acentuação
*/
