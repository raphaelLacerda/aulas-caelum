<?php

class Sessao
{
    function Sessao()
    {
        //deve ficar logo apos ao comando de abertura do código
        session_start();
    }
    function adicionar($key, $value)
    {
        $_SESSION[$key] = $value;
    }
    function buscar($key)
    {
        echo "</br>";
        print_r($_SESSION);
        echo "</br>";
        return $_SESSION[$key];
    }
    function destruir()
    {
        echo "<br>destruindo sessao";
        // remove all session variables
        session_unset();
        // destroy the session
        session_destroy();
    }
}