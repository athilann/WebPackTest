const produto = {
    nome: "Caneta Bic Preta",
    preco: 1.90,
    desconto: 0.05
};

function Clone(object){
    return  { ...object }
};

const novoProduto = Clone(produto);
novoProduto.nome = "Caneta Big Azul";

console.log(novoProduto, produto);