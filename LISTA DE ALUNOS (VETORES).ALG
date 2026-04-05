algoritmo "Lista de alunos"
var
   media: vetor [1..30] de real
   notaA, notaB: real
   alunos: vetor[1..30] de caractere
   contador, acima, Nalunos: inteiro
procedimento painel()
inicio
   limpatela
   escreval ("----------------")
   escreval ("Média dos alunos")
   escreval ("----------------")
fimprocedimento
inicio
      Painel()
      escreva ("Quantos alunos Deseja tirar a média? :")
      leia(Nalunos)
      para contador <- 1 ate Nalunos faca
           painel()
           Escreva ("QUAL O NOME DO ALUNO? :")
           leia (alunos[contador])
           Escreva ("Qual a 1° nota do aluno? :")
           leia (notaA)
           Escreva ("Qual a 2° nota do aluno? :")
            leia (notaB)
           media[contador] <-  (notaA + notaB)/2
      fimpara
      painel()
      Para contador <- 1 ate Nalunos faca
         se (media[contador] >= 6) entao
            Escreval (alunos[contador]," Teve uma media de ",media[contador]," e está acima da média")
            acima <- acima + 1
         fimse
         se (media[contador] < 6) entao
            Escreval (alunos[contador]," Teve uma media de ",media[contador]," e está abaixo da média")
         fimse
      fimpara
      Escreval ("")
      Escreva ("O APROVEITAMENTO FOI DE ",acima," ALUNO(A)s ACIMA DA MÉDIA")
      escreval ("")
fimalgoritmo