<?php

class Produto
{
    function Produto($nome, $preco, $descricao)
    {
        $this->nome = $nome;
        $this->preco = $preco;
        $this->descricao = $descricao;
    }

    //php nao pode ter overload de constructor
    static function ProdutoComId($id, $nome, $preco, $descricao){

        $produto = new Produto($nome, $preco, $descricao);
        $produto->id = $id;

        return $produto;
    }

    function getDescricaoResumida(){
        return substr($this->descricao, 0, 30) . "...";
    }
}