let produtos = [];
let vendas = [];

function criarProduto(nome, preco, estoque){
     if (nome === "") {
    console.log("Nome é obrigatório");
    return;
    } 
     if (preco < 0){
    console.log("Preço não pode ser negativo");
    return;
    }
    const id = produtos.length + 1
    const produto = {
    id: id,
    nome: nome,
    preco: preco,
    estoque: estoque
    }
    produtos.push(produto);
}
function buscarProduto(id) {
    return produtos.find(produto => produto.id === id);
}
function atualizarEstoque(id, quantidade) {
    const produto = buscarProduto(id);
    if (!produto) {
    console.log("Produto não encontrado");
    return;
    }
    if (produto.estoque + quantidade < 0) {
    console.log("Estoque insuficiente");
    return;
}
    produto.estoque += quantidade;
}
function realizarVenda(idProduto, quantidade) {
        const produto = buscarProduto(idProduto);
    if (!produto) {
        console.log('produto não encontrado');
        return;
    }
    const total = produto.preco * quantidade;
    atualizarEstoque(idProduto, -quantidade);
    vendas.push({
        idProduto: idProduto,
        quantidade: quantidade,
        total: total
    });
}
function totalFaturado(){
    return vendas.reduce((acumulador, venda) => acumulador + venda.total, 0)
}
function produtoMaisVendido() {
    const vendasPorProduto = vendas.reduce((acumulador, venda) => {
        if (!acumulador[venda.idProduto]) {
            acumulador[venda.idProduto] = 0;
        }
        acumulador[venda.idProduto] += venda.quantidade;
        return acumulador;
    }, {});
    const idMaisVendido = Object.keys(vendasPorProduto).reduce((maisVendido, idAtual) => {
    if (vendasPorProduto[idAtual] > vendasPorProduto[maisVendido]) {
        return idAtual;
    }
    return maisVendido;
    });
    return buscarProduto(Number(idMaisVendido));
}
function produtosComEstoqueBaixo() {
    return produtos.filter(produto => produto.estoque < 5);
}
function buscarPorNome(texto) {
    return produtos.filter(produto => produto.nome.toLowerCase().includes(texto.toLowerCase())
    );
}
function ordenarPorPreco() {
    return produtos.slice().sort((a, b) => a.preco - b.preco);
} 

criarProduto("Camiseta", 50, 10);
criarProduto("Calça", 120, 5);
realizarVenda(1, 2);
realizarVenda(2, 1);
console.log(totalFaturado());
console.log(produtoMaisVendido());
console.log(produtosComEstoqueBaixo());
console.log(buscarPorNome("cam"));
console.log(ordenarPorPreco());
