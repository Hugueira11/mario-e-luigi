 const form = document.querySelector(".formulario-fale-consco")
 const mascara = document.querySelector(".mascara-formulario")

 function mostrarform(){
  form.style.left = "50%"
  form.style.transform = "translateX(-50%)"
  mascara.style.visibility = "visible"
 }

 function esconderform(){
  form.style.left = "-16%"
  form.style.transform = "translateX(0)"
  mascara.style.visibility = "hidden"

 }
 

/*
variaveis
um espaço de memória que você 
reserva e pode guardar o que
quiser lá dentro

 3 jeitos de criar uma variável
 -var/ jeito antigo-não use 
 -let/ -> você pode alterar o valor depois
 -const -> constante

 funções
  um trecho de codigo que, só é execultado
  quando e chamado.

  Para chamar a função NOME DA FUNÇÃO + ( )
  EX: funcion soma(){const somatoria = numero1 + numero2
  console.log(somatoria)} 
soma()
*/
