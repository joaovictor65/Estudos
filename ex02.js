const produtos = [
  { nome: "Notebook", preco: 3000, estoque: 5 },
  { nome: "Mouse", preco: 50, estoque: 10 },
  { nome: "Teclado", preco: 150, estoque: 7 },
  { nome: "Monitor", preco: 1200, estoque: 3 }
];

const vendas = [
  { nome: "Mouse", quantidade: 2 },
  { nome: "Notebook", quantidade: 1 },
  { nome: "Monitor", quantidade: 4 }, // estoque insuficiente
  { nome: "Teclado", quantidade: 3 }
];

function buscarProduto(nome) {
   for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].nome == nome) {
        produtoEncontrado = produtos[i];
        return produtos[i];
    }
   }
   return null;
}

function realizarVendas(produto, quantidade) { 
  if (produto.estoque >= quantidade) {
    produto.estoque -= quantidade;
    return produto.preco * quantidade;
  } else {
      return `Estoque insuficiente`;
  }  
}

for (let i = 0; i < vendas.length; i++) {
    let venda = vendas[i];
    let produto = buscarProduto(venda.nome);
    if (buscarProduto !== null) {
       let resultado = realizarVendas(produto, venda.quantidade);
       if (resultado === `Estoque insuficiente`) {
        console.log(`Não foi possível realizar a venda de ${venda.nome} devido ao estoque insuficiente.`);
       } 
       else {
        console.log(`Venda realizada: ${venda.nome} - Quantidade: ${venda.quantidade} - Total: R$${resultado.toFixed(2)}`);
       }
    } else {
        console.log(`Produto ${venda.nome} não encontrado.`);
    }
}
console.log ('Estoque atualizado')
for (let i = 0; i < produtos.length; i++) {
  console.log (`${produtos[i].nome} : ${produtos[i].estoque}`)
}
  