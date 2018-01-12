<?php

class ConnectionFactory
{
    function getConexao()
    {
        // $this->conexao = mysqli_connect('localhost', 'root', 'root', 'php');
        $this->conexao = new \mysqli('localhost:3306', 'root', 'root', 'php');
        return $this->conexao;
    }
    function fechar()
    {
        // mysqli_close($conexao);
        $this->conexao->close();
    }
}