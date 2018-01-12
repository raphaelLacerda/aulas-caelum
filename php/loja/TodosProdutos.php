<?php

require 'Produto.php';
class TodosProdutos
{
    function TodosProdutos($conexao)
    {
        $this->conexao = $conexao;
    }
    function adicionar($produto)
    {
        $query = "insert into produtos (nome, preco, descricao) values ('{$produto->nome}', {$produto->preco}, '{$produto->descricao}')";
        // mysqli_query($conexao, $query);
        $this->conexao->query($query);
    }
    function remover($id){
        $query = "delete from produtos where id = {$id}";
        return $this->conexao->query($query);
    }
    function listar()
    {
        $resultado = $this->conexao->query("select * from produtos");
        $produtos = array();
        #$produtos = [];
        while ($produtoTemp = mysqli_fetch_assoc($resultado)) {

            #$produtos[] = new Produto($produtoTemp['nome'], $produtoTemp['preco']);

            array_push($produtos, Produto::produtoComId($produtoTemp['id'], $produtoTemp['nome'], $produtoTemp['preco'], $produtoTemp['descricao']));
            //produtoComId é um método static
        }
        return $produtos;
    }
}