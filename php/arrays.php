<?php

//$numeros = array();
// $numeros = array(10,40,30,50,100,200);
$numeros = [10,40,30,50,100,200];

// print_r ($numeros[0]);

echo "Total de itens no array ". count($numeros);
echo "Total de itens no array ". sizeof($numeros);

foreach ($numeros as $num):

    echo "<br/>". $num;

endforeach;


$filtro = function ($numero){

    return $numero < 50;
};

echo "<br/>";
print_r(array_filter($numeros, $filtro)); //Prints human-readable information about a variable
echo "<br/> array permanece imutavel </br>";
print_r($numeros);

print_r("<br/>soma ". array_sum($numeros)); //search
print_r("<br/>search 50 está na posição ". array_search(50, $numeros)); //search
print_r("<br/>pop ". array_pop($numeros)); //remove o último
print_r("<br/>shift ". array_shift($numeros)); //remove o primeiro





// Array Map

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

echo "<br/> Peter is " . $age['Peter'] . " years old.";


arsort($age);

//arsort()	Sorts an associative array in descending order, according to the value
//asort()	Sorts an associative array in ascending order, according to the value

//ja foi cobrado
foreach($age as $x => $x_value) {
    echo "<br/>Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
}



$reordenar = array();
$reordenar[1] = 30;
$reordenar[2] = 50;
$reordenar[3] = 10;

print_r($reordenar);
sort($reordenar);
echo ("<br/>");
print_r($reordenar);

