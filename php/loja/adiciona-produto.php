<?php
    include 'cabecalho.php';
    require 'ConnectionFactory.php';
    require 'TodosProdutos.php';
?>
<?php
    $nome = $_GET["nome"];
    $preco = $_GET["preco"];
    $descricao = $_GET["descricao"];
    $produto = new Produto($nome, $preco, $descricao);


    $fabrica = new ConnectionFactory();
    $conexao = $fabrica->getConexao();

    $todosProdutos = new TodosProdutos($conexao);
    $todosProdutos->adicionar($produto);

    $fabrica->fechar();

    header("Location: lista-produto.php");

    die();

?>
    <p class="text-success">Produto <?php echo $nome; ?>, <?= $preco ?>
            adicionado com sucesso!</p>
<?php
    include 'rodape.php';
?>