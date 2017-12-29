var formatador = ( function (){


    function formatar (texto ){

        return texto.replace('a', 'xxx');
    }


    return {formatar : formatar};

})();

module.exports = formatador;

