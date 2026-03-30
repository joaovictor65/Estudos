algoritmo "calculo idade e maior idade"
var
   idade_pedida, nsc, idade, ano: real
inicio
   escreva ("qual seu ano de nascimento? :")
   leia (nsc)
   escreva ("qual ano Você quer saber? :")
   leia(ano)
   idade <- (2026 - nsc)
   idade_pedida <- (ano - nsc)
   escreva ("você tem ",idade," anos ")


   se (ano < nsc) entao
      escreva ("e em ",ano, " você ainda estava no saco do seu pai")
   senao
      se(idade_pedida > 18) e (idade_pedida > idade) entao
         escreva ("e no ano de ",ano," você tera ",idade_pedida," anos e sera maior de idade")
      senao
         se(idade_pedida > 18) e (idade_pedida < idade) entao
            escreva(" e em ",ano," você tinha ",idade_pedida," anos e era maior de idade")
         senao
            se(idade_pedida < 18) e (idade_pedida > idade) entao
               escreva(" e em ",ano," você tera ",idade_pedida," anos e ainda sera menor de idade")
            senao
               se(idade_pedida < 18) e (idade_pedida < idade) entao
                  escreva(" e em ",ano," você tinha ",idade_pedida," anos e era menor de idade")
               fimse
            fimse
         fimse
      fimse
   fimse





fimalgoritmo