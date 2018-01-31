<?php

require_once("cabecalho.php");
//require_once("PHPMailerAutoload.php");

$nome = $_POST["nome"];
$email = $_POST["email"];
$mensagem = $_POST["mensagem"];

//$mail = new PHPMailer();


?>

<form action="envia-contato.php" method="post">
	<div class="form-group">
		<label for="nome">Nome</label>
		<input type="text" id="nome" name="nome" class="form-control">
	</div>

	<div class="form-group">
		<label for="email">Email</label>
		<input type="email" id="email" name="email" class="form-control">
	</div>

	<div class="form-group">
		<label for="mensagem">Mensagem</label>
		<textarea id="mensagem" name="mensagem" class="form-control"></textarea>
	</div>

	<button type="submit" class="btn btn-primary">Enviar</button>
</form>

<?php require_once("rodape.php"); ?>