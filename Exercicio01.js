let alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Bruno", notas: [5, 6, 4] },
    { nome: "Carlos", notas: [10, 9, 8] },
    { nome: "Diana", notas: [3, 5, 2] },
    { nome: "Eduardo", notas: [7, 7, 7] }
];

function analisaralunos(alunos) {
    let melhorAluno = '';
    let maiormedia = 0;
    let aprovados = 0;
    let reprovados = 0;
    let recuperacao = 0;
    for (let i = 0;i < alunos.length; i++) {
        let soma = 0;
        for (let j = 0; j < alunos[i].notas.length; j++) {
            soma += alunos[i].notas[j]
        }
        let media = soma / alunos[i].notas.length;
        
        if (media > maiormedia) {
            maiormedia = media;
            melhorAluno = alunos[i].nome;
            
        }
        if (media == 7) {
            console.log(`O aluno ${alunos[i].nome} foi aprovado no limite com média: ${media.toFixed(2)}`)
            aprovados++;
        }else if (media < 7 && media >= 5) {
            console.log(`O aluno ${alunos[i].nome} está em recuperação com média: ${media.toFixed(2)}`)
            recuperacao++;
        } else if (media > 7) {
            console.log(`O aluno ${alunos[i].nome} foi aprovado com média : ${media.toFixed(2)}`)
            aprovados++
        } else {
            console.log(`O aluno ${alunos[i].nome} foi reprovado com média: ${media.toFixed(2)}`)
            reprovados++;
        }
    }
   console.log(`O melhor aluno é ${melhorAluno} com média: ${maiormedia.toFixed(2)}`);
   console.log(`Quantidade de alunos aprovados: ${aprovados}`);
   console.log(`Quantidade de alunos em recuperação: ${recuperacao}`);
   console.log(`Quantidade de alunos reprovados: ${reprovados}`);
} 
analisaralunos(alunos);



    