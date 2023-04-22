
  /*
  Objetivo: Capturar o nome do curso e aprensentar com o código correspondente
  Verificar:
    Se js_corsodig for igual a SIST, apresentar o código "SIST001/FB".
      Caso contrário, apresentar a mensagem "Curso Inválido".
    Objetos e Métodos:
      Entrada: document.form
      Saída: document.form (para código válido no campo de saída do formulário)
      Saída: window.alert(para código inválido por jánela de alerta)
    Formulário: formcurso
    Função: cadcurso
    Evento: onClick
  */

  //Definição de variáveis
  var js_cursodig;;

  //Função cadcurso()
  function cadcurso() {
    js_cursodig = document.formcurso.f_cursodig.value;
    if (js_cursodig.toUpperCase() == 'SIST'){
      document.formcurso.f_codcurso.value = 'SIST001/FB'
    }
    else{
      window.alert('Curso Inválido')
    }
  }
