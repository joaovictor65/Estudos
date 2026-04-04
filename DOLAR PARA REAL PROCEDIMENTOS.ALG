algoritmo "DOLAR_E_EURO_PARA_REAL_CONVERSOR)"
var
   dor,dolar, euro, reais: real
   teste: caractere
   cont: inteiro
procedimento cdol ()
inicio
    limpatela
    escreval ("-------------------------------------------")
    escreval ("               DOLAR PARA REAl")
    escreval ("-------------------------------------------")
    escreva  ("Quantos dolares você quer converter?: :")
    leia (dolar)
    reais <- (dolar * 5.16)
    Escreval ("U$:",dolar," dolares, são equivalestes a R$:",reais," reais") 
fimprocedimento

procedimento ceu ()
inicio
    limpatela
    escreval ("--------------------------------------------")
    escreval ("               EURO PARA REAL")
    escreval ("--------------------------------------------")
    escreva  ("Quantos euros você quer converter? :")
    leia (euro)
    reais <- (euro * 5.95)
    Escreval ("€:",euro," , são equivalestes a R$:",reais," reais")

fimprocedimento

inicio
      cont <- 0
      repita
            Limpatela
            Escreval ("Você quer converter Euros ou Dolares?")
            escreval ("   [1] Dolares")
            escreval ("   [2] Euros  ")
            Escreva  ("Digite aqui: ")
            leia (dor)
            se (dor = 1) entao
                 cdol ()
            fimse
            se (dor = 2) entao
                 ceu ()
            fimse
            se (dor <> 2) e (dor <> 1) entao
                 escreval ("Valor Inexistente")
            fimse
            escreva ("Deseja Continuar? [S/N]:")
            leia (teste)
            se (teste = "N") ou (teste = "n") entao
               cont <- 1
            fimse
      ate (cont = 1)
fimalgoritmo
