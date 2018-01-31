<?php

class Operadores
{
    function exponencial($n)
    {
        return 2 ** $n;
    }
    function diferente($n1, $n2)
    {
        return $n1 != $n2;
    }
    function compara($n1, $n2)
    {
        echo "spacheship operator -- compareTo do Java ";
        return $n1 <=> $n2;
    }
    function booleanos()
    {
        var_dump((bool) "");
        // bool(false)
        var_dump((bool) 1);
        // bool(true)
        var_dump((bool) -2);
        // bool(true)
        var_dump((bool) "foo");
        // bool(true)
        var_dump((bool) 230000.0);
        // bool(true)
        var_dump((bool) array(12));
        // bool(true)
        var_dump((bool) array());
        // bool(false)
        var_dump((bool) "false");
        // bool(true)
        var_dump((bool) True);
        // bool(true)
        var_dump((bool) FAlse);
        // bool(false)
    }
}