<?php
    require_once 'cabecalho.php';
    require_once 'ConnectionFactory.php';
    require_once 'TodosProdutos.php';

    $fabrica = new ConnectionFactory();
    $conexao = $fabrica->getConexao();

    $todosProdutos = new TodosProdutos($conexao);
    $produtos = $todosProdutos->listar();

    /*
    foreach($produtos as $produto){
        echo "Nome $produto->nome - Preco: $produto->preco </br>";
    }
    */

?>
<?php if($_GET["removido"]):
    echo "<p class='alert-success'>Produto apagado com sucesso.</p>";
endif ?>
<table class="table table-striped table-bordered">
<?php
foreach($produtos as $produto) :
?>
	<tr>
		<td><?= $produto->nome ?></td>
		<td><?= $produto->preco ?></td>
        <td><?= $produto->getDescricaoResumida() ?></td>
        <td>
			<a href="remove-produto.php?id=<?= $produto->id ?>" class="btn btn-danger">remover</a>
		</td>
	</tr>



<?php
endforeach
?>
</table>





<?php include 'rodape.php' ?>