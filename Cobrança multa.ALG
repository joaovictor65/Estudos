algoritmo "semnome"
var
  velo , cobranca : inteiro
inicio
      escreva ("qual velocidade o carro passou? :")
      leia (velo)
      se ( velo <= 80) entao
         escreva ("Parabens, você está dentro do limite de velocidade")
      senao
         cobranca <- ((velo - 80)* 5)
         escreva ("Você está acima de velocidade e tera que pagar R$:",cobranca)
      fimse


fimalgoritmo