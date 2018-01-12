<?php
    include 'cabecalho.php';
?>
            <h1>Formulário de cadastro</h1>
            <form action="adiciona-produto.php">
                <div class="form-group">
                    <label>Nome:</label>
                    <input type="text" name="nome" class="form-control">
                </div>

                <div class="form-group">
                    <label>Preço:</label>
                    <input type="number" name="preco" class="form-control">
                </div>

                <div class="form-group">
                    <label>Descrição:</label>
                    <textarea name="descricao" class="form-control"></textarea>
                </div>
                <input type="submit" value="Cadastrar" class="btn btn-primary">
            </form>
<?php
    include 'rodape.php';
?>