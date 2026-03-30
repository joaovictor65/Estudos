Algoritmo "semnome"
Var
   m: inteiro
   a, imc: real

Inicio
      escreva ("qual sua altura? ")
      leia (a)
      escreva ("qual o seu peso? ")
      leia (m)
      imc <- ( m/(a ^ 2))
      
      se (imc <= 25) e ( imc >= 18.5) entao
         escreva ("você está dentro do peso!")
         senao
         se (imc > 25 ) entao
            escreva ("voce está acima do peso!")
            senao
            escreva ("você está abaixo do peso!")
         fimse

      fimSe


Fimalgoritmo
