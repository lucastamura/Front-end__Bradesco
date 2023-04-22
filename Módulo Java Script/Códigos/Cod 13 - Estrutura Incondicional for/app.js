
/*Objetivo: Aplicações de Laço Incondicional <for>, icrementando +2 na variável js_num e apresetando os valores acumulador de 1 a 10.*/ 


//Definição das variaveis

var js_num;

document.write('<p>Ãpresentação dos valores acumulados para js_num=1 e menor ou igual a 10 incrementadno a variável de +=2: ');
document.write("<p>(Note que o limite ira até 9, pois 9+2=11, portanto sera maior do que 10)");


//Aplicando laço condicional - for

for (js_num=1; js_num<=10; js_num+=2){
    document.write('<p>' + js_num);
}