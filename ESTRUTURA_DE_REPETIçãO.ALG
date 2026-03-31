Algoritmo "Estrutura_de_repetição"
Var
  menor ,maior, quantidade, contador, numeros, soma : inteiro
Inicio
      contador <- 1
      escreva ("Quantos numeros Você quer somar")
      leia (quantidade)
      escreval ("qual o numeros você quer somar?")
      enquanto (contador <= quantidade) faca
        leia (numeros)
        soma <- soma  + numeros
         se (numeros > maior) entao
            maior <- numeros
         fimse
         se (contador = 1) entao
            menor <- numeros
         fimse
         se (numeros < menor) entao
            menor <- numeros
         fimse
         contador <- contador + 1
      fimenquanto
      escreval ("a soma de todos os numeros é ?",soma)
      escreval ("o maior numero foi :",maior)
      escreva  ("E o menor numero foi :",menor)
      
      
      


Fimalgoritmo