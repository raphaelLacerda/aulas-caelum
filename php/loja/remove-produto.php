<?php
    require_once 'cabecalho.php';
    require_once 'ConnectionFactory.php';
    require_once 'TodosProdutos.php';


    $id = $_GET["id"];

    $fabrica = new ConnectionFactory();
    $conexao = $fabrica->getConexao();

    $todosProdutos = new TodosProdutos($conexao);
    $todosProdutos->remover($id);

    $fabrica->fechar();

    header("Location: lista-produto.php?removido=true");

    die();
    #exit(); mesma coisa