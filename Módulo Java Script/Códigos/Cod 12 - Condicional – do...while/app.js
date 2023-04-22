
/*Objetivo: Calcular o salário de um funcionário que trabalha por hora (horista)
- Para desenvolver o calculo é necessário ter as seuintes informações:
    -Quantidade de horas trabalhadas no mês(js_qht)
    - Valor da hora de trabalho (js_vht)
    - Porcentutal de desconto do INSS (js_inss)
- Informar a classificação Salárial
- Objetos/Métodos utilizados:
    entrada: window.prompt
    sainda: socument.write
*/


//Definição de Variáveis

var js_qht;  // var de entrada - quantidade de horas trabalhadas
var js_vht;  //var de entrada - valor da hora trabalhada
var js_inss;  //var de entrada - porcentual de desconro do Inss
var js_tdes;  // var de saída - total de descontos
var js_sb;  //var de saída - valor do salário bruto
var js_sl;  //var de saída - valor do salário liquido
var js_resposta=true;


do{
    //Entrada de dados

    js_qht = parseFloat(window.prompt('Informe a quantidade de horas trabalhadas/mês:  (135 a 180)', '00'));
    js_vht = parseFloat(window.prompt('Informe o valor da hora trabalhada:  (25 a 50)', '00'));
    js_inss = parseFloat(window.prompt('Informe o percentual de desconto do INSS:  (5 a 15)', '00'));


    //Processamento de dados

    js_sb = js_vht * js_qht;
    js_tdes = (js_inss/100) * js_sb;
    js_sl = js_sb - js_tdes;


    //Saida de dados com consistencia de valores

    document.write('<p><b> DEMONSTRAÇÃO PARA CALCULO DO SALÁRIO LÍQUIDO </b>')
    

    document.write('<p>Quantidade de horas trabalhadas (135 a 180) => <b>' + js_qht + '</b>');

    if (js_qht > 180){
        document.write('...(<b>Valor máximo execidido!</b>');
    }

    if (js_qht < 135){
        document.write('...(<b>Valor mínimo execidido!</b>');
    }


    document.write('<p> Valor da hora trabalhada (25 a 50) => <b>' + js_vht + '</b>');

    if (js_vht > 50){
        document.write('...(<b>Valor máximo execidido!</b>');
    }

    if (js_vht < 25){
        document.write('...(<b>Valor mínimo execidido!</b>');
    }


    document.write('<p> Percentual de desconto do INSS (5 a 15) => <b>' + js_inss + '</b>');

    if (js_inss > 15){
        document.write('...(<b>Valor máximo execidido!)</b>');
    }

    if (js_inss < 5){
        document.write('...(<b>Valor mínimo execidido!)</b>');
    }

    document.write('<p>================================================');
    document.write('<p><b>Salário BRUTO = $</b>' + js_sb);
    document.write('<p>Total de Descontos INSS = $' + js_tdes);
    document.write('<p><b>Salário LÍQUIDO = $</b>' + js_sl);

    //Saída de dados com aninhamento de if


    if (js_sl > 10500){
        document.write(' ... (<b>Salário Elevado! </b>maior que 10.500)');
    }
    else {
        if (js_sl > 6000){
            document.write(' ... (<b>Salário Satisfatório! </b>maior que 6.000)');
        }
        else {
            if (js_sl > 3000){
                document.write(' ... (<b>Salário Moderado! </b>maior que 3.000)');
            }
            else {
                document.write(' ... (<b>Salário inSatisfatório! </b>menor ou igual a 3.000)');
            }
        }
    }

    document.write('<p>======================================================');
    
    js_resposta = window.confirm('Deseja continuar');

}
while (js_resposta== true);

