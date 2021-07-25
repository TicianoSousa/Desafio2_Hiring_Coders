
function cadastrar() {
    
    if (localStorage.total_Clientes) {
        localStorage.total_Clientes = Number(localStorage.total_Clientes)+1;
    }else{
        localStorage.total_Clientes = 1;
    }

    const novoCliente ={
        id1_Nome: document.getElementById('nome').value,
        id2_Documento: document.getElementById('documento').value,
        id3_Email: document.getElementById('e-mail').value,
        id4_Telefone: document.getElementById('telefone').value,
        id5_Cidade: document.getElementById('cidade').value,
        id6_Bairro: document.getElementById('bairro').value,
        id7_Endereço: document.getElementById('endereco').value,
        id8_Número: document.getElementById('numero').value,
    }

    localStorage.setItem('Cliente_' + localStorage.total_Clientes, JSON.stringify(novoCliente));
    alert('Cadastro Realizado com sucesso');

} 

function cadastro() {
   
    if (localStorage.qnt_Produtos) {
        localStorage.qnt_Produtos = Number(localStorage.qnt_Produtos)+1;
    }else{
        localStorage.qnt_Produtos = 1 ;
    }

     const novosProdutos ={

        id1_Produto: document.getElementById('nomeProduto').value,
        id2_Marca: document.getElementById('marca').value,
        id3_Qnt: document.getElementById('qnt').value,
        id4_Valor: document.getElementById('valor').value,
        id5_Data: document.getElementById('dataEntrada').value,
        id6_Fornecedor: document.getElementById('fornecedor').value,
    }

    localStorage.setItem('Produto_' + localStorage.qnt_Produtos, JSON.stringify(novosProdutos));
    alert('Produto Cadastrado com Sucesso');
}