'use strict';
var index = (function ($, todosEnderecos) {

    var preencherEndereco = function (cep) {

        todosEnderecos.buscarPorCep(cep)
            .then(function(endereco) {
                $('#endereco').html(JSON.stringify(endereco));
                $('#endereco').addClass('sucesso');
            });
    };

    $('#form').on('submit', function(event) {

        console.log('=========chamando foorrrm!====================');
        $('#endereco').html('pesquisando.....');
        event.preventDefault();
        preencherEndereco($('.input-cep').val());
    });
    return {preencherEndereco : preencherEndereco};

})(jQuery, todosEnderecos);
