<?php

class Repositorio {

    function Repositorio (){
        $this->lista = array("IE shit","Firefox","Chrome");
        $this->mapaDePessoas = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
    }

    function getBrowsers(){

        echo "quantidade de browsers é ". count($this->lista);
        echo "<br/>";
        echo "<br/>";
        echo "constante global acessada de outro arquivo ".GRÉETING;

        sort($this->lista);
        //rsort($this->lista); --> reversa
        return $this->lista;
    }
    function getIdade($pessoa){
        echo "<br/>";
        return $this->mapaDePessoas[$pessoa];
    }
}

?>