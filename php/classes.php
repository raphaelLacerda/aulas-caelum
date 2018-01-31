<?php
require_once "loja/Produto.php";



$classe = "ClasseA";
$metodo1 = "somaValores";
$metodo2 = "somaValoresStatic";

$objeto = new ClasseA();

echo $objeto->somaValores(10,30);
echo "<br> notação { usando variável }".$objeto->{$metodo1}(13,30);


echo "<br> static ".ClasseA::somaValoresStatic(30,30);
echo "<br> static { usando variável} ".$classe::{$metodo2}(90,30);


class ClasseA{
    public function somaValores($n1,$n2){

        error_log("somando valores");
        return $n1+$n2;
    }
    public static function somaValoresStatic($n1,$n2){
        return $n1+$n2;
    }
}