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


# Capítulo 5 - Categorias

* relacionar produto com categoria
```html
<input type="radio" name="categoria_id" value="<?=$categoria['id']?>">

```
> Exercício

## Lidando com Selects e Checkbox

* problema com o checkbox usado
    * não é enviado quando não checado

```javascript
if(array_key_exists('usado', $_POST)) {
	$usado = true;
} else {
	$usado = false;
}
```

* problema ao concatenar booleans

    * O que acontece é que quando a variável usado é false,
na hora da concatenação, o PHP não escreve a palavra "false", mas sim põe um espaço vazio.

    * altera para String "false"

> Exercicio com Select e Checkboxs



# Capitulo 6 - Autenticacao e Autorizacao

* tabela de usuarios
* como armazenar a senha?
    * discussao sobre hash

> post da caelum sobre senhas no banco

* como buscar o usuario?

```php
$senhaMd5 = md5($senha);
$query = "select * from usuarios where login='{$login}'
    and senha='{$senhaMd5}'";

```

* apos trazer o usuario tentar imprimir com echo
    * Ele mostrou que tentou converter uma array em uma string.

* isset($_GET["login"]) ==> index.php?login=false

* Não deu certo! Ele mostrou a mensagem de sucesso. Como assim? Vamos olhar nosso código. Sabemos que o parâmetro login é "false". Mas a string false vale true.... Já passamos por isso, no php o == faz a conversão automática. Lembra? E nele, toda string é true. Somente duas strings valem false. Uma delas é "0" e a outra é a string vazia. Vamos testar? Na URI testamos com index.php?login=0:

> Exercicio: fazer login

## Cookies

## Session

* session_start();

## Logout

echo "<br>destruindo sessao";
// remove all session variables
session_unset();

// destroy the session
session_destroy();



# Capitulo 7 - SQL INjection

* mysqli_real_escape_string($conexao, $login);
    * leva em conta o encoding do banco de dados


# Capitulo 8 - O.O

* classe produto

```php
<?php

    $produto = new Produto();
    $produto->setPreco(59.90);

    $outroProduto = new Produto();
    $outroProduto->setPreco(59.90);

    if ($produto == $outroProduto) {
        echo "são iguais";
    } else {
        echo "são diferentes";
    }
?>

```

*
== para comparar objetos em PHP, as instâncias são consideradas iguais se são instâncias da mesma classe e tem as mesmas propriedades e valores

*  === (3 iguais). Neste caso a comparação só será verdadeira se os objetos se referem a mesma instância da mesma classe.


## métodos mágicos

 * __construct(), __destruct(), __call(), __callStatic(), __get(), __set(), __isset(), __unset(), __sleep(), __wakeup(), __toString(), __invoke(), __set_state(), __clone() e __debugInfo()

 * O método __invoke() é chamado quando um script tenta chamar um objeto como uma função.
    * $obj = new CallableClass;
    * $obj(5);



* auto_load php


## DAO


# Capítulo 9 - Enviando Email



