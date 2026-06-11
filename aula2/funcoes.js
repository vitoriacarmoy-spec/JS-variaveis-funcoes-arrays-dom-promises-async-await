 /* a funcao e um trecho de codigo que so vai ser executado quando for chamado
 sem o return a funcao é void */

 function digaMeuNome(){

    console.log("lorrayne vekanandre bueno de hahaha bala de icekiss")
 }

 digaMeuNome()
 digaMeuNome()

 /**
  parametros
  */

  function digaQualquerNome(nome){
   console.log(nome)
  }

  digaQualquerNome("Maria")
  digaQualquerNome("jorge")
  digaQualquerNome("Altair")
  function Soma(numero1,numero2){
    const resultado = numero1 + numero2
    console.log(resultado)
  }
  Soma(2,6)
  Soma(2,50)

  /*return*/ 
function divisao(j1,j2){
    const resultad = j1 / j2
    return resultad
}
const resultaddivi = divisao(30,40)
console.log( resultaddivi)

/* Arrow function 
forma moderna de representar funcao
*/
function abobora(){} //forma classica
const pepino = ( )=> { //moderna
    console.log("joana")
}
pepino()