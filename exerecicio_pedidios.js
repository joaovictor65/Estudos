const produtos = [
  { nome: "Notebook", preco: 3000, estoque: 5 },
  { nome: "Mouse", preco: 100, estoque: 10 },
  { nome: "Teclado", preco: 200, estoque: 8 }
];

const cupons = [
  { codigo: "DESC10", desconto: 0.10 },
  { codigo: "DESC20", desconto: 0.20 }
];

const pedido = {
  itens: [
    { nome: "Notebook", quantidade: 1 },
    { nome: "Mouse", quantidade: 2 }
  ],
  cupom: "DESC10",
  cep: "01000-000"
};
function buscarProduto(nome, produto) {
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].nome === nome) {
      return produtos[i];
    }
  }
  return null;
}
function buscarCupom(codigo, cupons) {
  for (let i = 0; i < cupons.length; i++) {
    if (cupons[i].codigo === codigo) {
      return cupons[i];
    }
  }
  return null;
}

function testCep(cep) {
   if (cep.startsWith("01")) return 10;
  else if (cep.startsWith("02")) return 20;
  else return 30;
}

function processarPedido(produtos, cupons, pedido) {
  let precoTotal = 0;

  for (let i = 0; i < pedido.itens.length; i++) {
    const item = pedido.itens[i];
    const produto = buscarProduto(item.nome, produtos);

    if (!produto) {
      console.log("Produto não encontrado");
      continue;
    }

    if (produto.estoque < item.quantidade) {
      console.log("Sem estoque");
      continue;
    }

    precoTotal += produto.preco * item.quantidade;
    produto.estoque -= item.quantidade;
  }

  const frete = testCep(pedido.cep);

  const cupom = buscarCupom(pedido.cupom, cupons);
  let descontoValor = 0;

  if (cupom) {
    descontoValor = precoTotal * cupom.desconto;
    precoTotal -= descontoValor;
  }

  precoTotal += frete;

  console.log(`Subtotal:   R$${precoTotal + descontoValor - frete}`);
  console.log(`Descontos:  R$${descontoValor}`);
  console.log(`Entrega:    R$${frete}`);
  console.log(`TOTAL:      R$${precoTotal}`);
}

processarPedido(produtos, cupons, pedido);


    





/* Dentro dela:
🔁 Percorrer os itens (for)

Para cada item:

Buscar produto
Validar (if):
Produto existe?
Tem estoque suficiente?

📤 Se válido:
Subtrair do estoque
Somar subtotal (preco * quantidade)

❌ Se inválido:
Mostrar erro e ignorar item

💸 Aplicar cupom:
Buscar cupom
Se existir → aplicar desconto
Se não → mostrar "cupom inválido"

🚚 Calcular frete:
Usar função calcularFrete

📊 Resultado final:

Mostrar:

Subtotal
Desconto
Frete
Total final
*/