# Capítulo 1

* Web estática
* Web dinâmica

* Personal Home Page **(PHP)**
    * *Hypertext Preprocessor*

* Zend: empresa responsável

# Capítulo 2

* php -v
* descrever a estrutura da loja
* html:5 (code snnipet - **Emmet**)
* extensão PHP
* interpretador PHP (servidor)
    * Apache
    * embeded server
    * php -S localhost:8080
    * home do usuário
* desenho requisicao para servidor

## Adicionando produto
* adiciona-produto.php
* nome e preco pela URL
* $_GET["nome"]
* echo X <?= ?>
* $_POST e $_REQUEST

> Exercício: PHP standalone e $_GET

## Formulário de produto
* input
* form action
## get Bootstrap
* main (container), article (principal), alert-success
* cabecalho.php para evitar control c
* **include** com os sem parenteses
* **require** lança erro fatal
* **require_once** adicione apenas uma vez

> Exercício: mais de PHP include

# Capítulo 3 - PHP e MYSQL

* criar tabela de produtos
* inserindo dados no php

```php
//código dif[icil de ler
$query = "insert into produtos (nome, preco)
	values ('" . $nome . "', '" . $preco . "')";

//código mais fácil
$query = "insert into produtos (nome, preco)
    values ('{$nome}', {$preco})";
```
## Mysqli estruturado

* mysqlli_connect
* mysqlli_query
* mysqlli_close

* não deve ser usado mais o mysql

## Mysqli OO

* new mysqlli
* conn->query()
* conn->close()
    * será fechada automaticamente ao final da linha do PHP

## tratando erros de insercao

* if(conn->query($query))

> Exercício inserindo produtos

## Criando funções no <PHP></PHP>

* função insere produto
* text-success ao inves de alert
* outras classes do bootstrap http://getbootstrap.com/css/
* menu navegavel nav no cabecalho
    * ul li

> exercício: Criando funções e melhorando layout


## Listagem de produtos

```java
//layout padrão
<?php include 'cabecalho.php' ?>

-- CORPO AQUI --

<?php include 'rodape.php' ?>
```

* criar arquivo conecta.php;
* boa prática se arquivo for php.. nao fechar tag
* acoplamento (isolar código repetido)
* mysql_fetch_assoc
    * The mysqli_fetch_assoc() function fetches a result row as an associative array.

```php
while($produtoTemp = mysqli_fetch_assoc($resultado)){

    $produtos[] = new Produto($produtoTemp['nome'], $produtoTemp['preco']);
}
```

> Exercício: Listando produtos

## Melhorando listagem de produtos
* function listaProdutos
* Como criar um array?
* $produtos = array();
  * $produtos = [];

* falar do foreach
* criar o arquivo **banco-produto.php** análogo ao DAO
* listagem de produtos com tags html

* falar do endforeach com :

> Exercício Melhorando listagem de Produtos

# Capítulo 4

* remove-produto.php?id=<?= $produto['id']?>
* criar funcao para remover produto
* redirecionando para listagem
    * header location
* explicar o 302
* explicar o die - garantir ultima linha executada

* mostrar mensagem quando produto foi apagado na listagem
    * so deve mostrar depois da remocao
* flag removido
* true == 'true' (true)
* true === 'true' (false)

> Exercício de remoção

## diferença entre GET e POST

* melhorando formulario de produto
    * form-group - form-control
* lorem <tab>
* diminuindo descricao
    * return substr($this->descricao, 0, 30) . "...";
* tamanho máximo do URL parameters
* transformar tudo para POST
    * inclusive link de remoção
> Exercício campo descricao




