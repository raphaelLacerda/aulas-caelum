<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>


<?php
include 'Repositorio.php';
require 'Operadores.php';
require 'Sessao.php';
require 'Exception.php';
//criando constantes GLOBAIS


//There is no need to write a dollar sign ($) before a constant, where as in Variable one has to write a dollar sign.

//Constants cannot be defined by simple assignment, they may only be defined using the define() function.
define("GRÉETING", "<h1>Constante PHP! variável com acento</h1>");
echo GRÉETING;

echo constant("GRÉETING");

//criando Arrays
echo "<br/> <h2> Explorando classes, listas e Maps </h2>";

$repositorio = new Repositorio();
$browsers = $repositorio->getBrowsers();
echo "\n";


$nomes = array("Peter", "Ben", "Joe");
rsort($nomes);
foreach($nomes as $nomesTemp){
    echo "idade do ".$nomesTemp." é ". $repositorio->getIdade($nomesTemp);
}
?>
<?= '<br/>tag curta <br/>' ?>


<h2>Concatenando + Comparando variáveis</h2>


<?php

$numero = 10;

echo "<br/>somando numero sstring === ";
echo "10"+ $numero + 30;
echo "<br/>concatenando numero sstring === ";
echo "10". $numero . 30;

//echo x print ==>
//print retorna valor
//echo por receber multiplos parametros
//echo é mais rápido

echo "<br/>";
echo var_dump($numero);
echo var_dump($browserEnviado);

//the PHP var_dump() function returns the data type and value:

//comparações

echo "<br/>";
echo "comparacoes do " .$GLOBALS['numero'];
echo "<br/>";

$numeroAsString = "10";
echo "comparanddo == ". ($numero == $numeroAsString);
echo "<br/>";
echo "comparanddo ===". ($numero === $numeroAsString);


echo "<h2>Variáveis Globais</h2>";


// globals

/*

$GLOBALS -- used to access global variables from anywhere in the PHP script
$_SERVER -- holds information about headers, paths, and script locations.
$_REQUEST -- collect data after submitting an HTML form
$_POST
$_GET
$_FILES
$_ENV
$_COOKIE
$_SESSION
$_FILES["fileToUpload"]["name"]
*/

echo "<br> PHP_SELF    ";
echo $_SERVER['PHP_SELF'];
echo "<br> SERVER_NAME   ";
echo $_SERVER['SERVER_NAME'];
echo "<br> HTTP_HOST   ";
echo $_SERVER['HTTP_HOST'];
echo "<br> HTTP_REFERER   ";
echo $_SERVER['HTTP_REFERER'];
echo "<br> HTTP_USER_AGENT   ";
echo $_SERVER['HTTP_USER_AGENT'];
echo "<br> SCRIPT_NAME  ";
echo $_SERVER['SCRIPT_NAME'];


//outras funcoes

//htmlspecialchars -- This means that it will replace HTML characters like < and > with &lt; and &gt;. This prevents attackers from exploiting the code by injecting HTML or Javascript code (Cross-site Scripting attacks) in forms.
//mktime - criar data
// readfile
//setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
// session_start();
//session_unset(); // remove all session variables
//session_destroy(); // destroy the session

//filter_var == The variable you want to check The type of check to use ==> filter_var($str, FILTER_SANITIZE_STRING);








echo "<h2>Data e Hora </h2>";

echo "Today is " . date("d/M/Y") . "<br>";
echo "The time is " . date("h:i:sa");

$d=mktime(11, 14, 54, 8, 12, 2014);
echo "</br>Created date is " . date("Y-m-d h:i:sa", $d);




echo "<h2>Manipulando Arquivos</h2>";

//include x required

//include --> when a file is included with the include statement and PHP cannot find it, the script will continue to execute:


//tratamento de erros
//die() function -- o stop the script after the error.

echo '<h3>die() and exit() are equivalent functions.</h3>';


$file=fopen("banco.php","r");
if(!file_exists("banco.php")) {
  //die("File not found");
  echo "arquivo não encontrado";
  echo "</br>";
} else {
  $file=fopen("banco.php","r");

  echo "arquivo aberto ". $file;
  echo "<br/>";

  echo fread($file,filesize("banco.php"));
  fclose($file);
}


//trigger_error("Value must be 1 or below");




//tratamento de excecoes -- igual Java

//throw new Exception("Value must be 1 or below");

?>




<h2>Formulario integrado com PHP</h2>

<form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
    <input placeholder="digite nome" type="text" name="browserEnviado" list="browsers" value="<?php echo $browserEnviado;?>">
    <button type="submit">Enviar</button>

    <datalist id="browsers">

        <?php
            foreach ($browsers as $browser){
        ?>
                <option value="<?php echo $browser ?>">
        <?php
            }
        ?>
    </datalist>
</form>



<h2> Recebendo dados do Formulário via Post </h2>

<?php

//concatenação
$browserEnviado = htmlspecialchars( $_POST["browserEnviado"]);

echo "filter ". filter_var($browserEnviado, FILTER_SANITIZE_STRING);
echo "<br/> <h3>Single quote x double quote (concatenação)</h3>";
echo "seu nome é $browserEnviado";
echo "<br/>";
echo 'seu nome é $browserEnviado';
echo "<br/>";
//não é case sensitive, exceto variáveis
Echo "I love " . $browserEnviado . "!";


echo "<br/><h2>Testando String</h2>";


//tamanho x quantidade de palavras
echo strlen($browserEnviado) ." - ". str_word_count($browserEnviado) ." - ". crypt($browserEnviado);

//echo strpos("Hello world!", "world"); // outputs 6
//echo str_replace("world", "Dolly", "Hello world!"); // outputs Hello Dolly!
//explode()	Breaks a string into an array


//https://www.w3schools.com/php/php_ref_string.asp

?>

<h2>enviando email </h2>
  <?php

  $retornoEmail = mail ( "lacerdaph@gmail.com", "teste", "olá enviando email" );

  echo "resposta email $retornoEmail";
  ?>


<h2>Operadores</h2>
  <?php

    $operadores = new Operadores();

    echo "exponencial 2 ** 5 == ";

    echo $operadores->exponencial(5);

    echo "</br>";
    echo "diferente 3 <> 5 == ";
    echo $operadores->diferente(3,5);

    echo "</br>";
    echo "diferente 5 <> 5 == ";
    echo $operadores->diferente(5,5);



    echo "</br>";
    echo "compara 6 <=> 5 == ";
    echo $operadores->compara(6,5);

    echo "</br>";
    echo "compara 6 <=> 50 == ";
    echo $operadores->compara(6,50);


    echo "<h3>Booleanos</h3>";
    echo $operadores->booleanos();
  ?>




<h2>Sessao</h2>
  <?php

    $sessao = new Sessao();
    echo "<br/> buscando de primeiro ".$sessao->buscar("teste");

    $sessao->adicionar("teste", "raphael");


    echo $sessao->buscar("teste");

    $sessao->destruir();

    echo "buscando de novo ".$sessao->buscar("teste");

  ?>

<h2>Error</h2>
  <?php

    $exception = new TratamentoExcecao();


    try{
        $exception->checkNum(10);
        #echo $exception->checkNum(1);

    }catch(Exception $e){
        echo "errroooooo";
        error_log($e->getMessage());
    }

  ?>




