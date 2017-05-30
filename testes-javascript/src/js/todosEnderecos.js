'use strict';

var todosEnderecos = (function ($) {

    var buscarPorCep = function (cep) {

        var p1 = new Promise(

            function (resolve, reject) {

                if (cepUtil.validar(cep)) {

                    $.ajax({
                        url: 'https://viacep.com.br/ws/' +
                            cepUtil.retirarMascara(cep) + '/json/',
                        dataType: 'json',
                        success: resolve,
                        error: reject
                    });
                //colocar este erro de propósito
                }else{
                    reject('cep inválido');
                }

            }
        );
        return p1;
    };

    return {
        buscarPorCep: buscarPorCep
    };

})(jQuery);