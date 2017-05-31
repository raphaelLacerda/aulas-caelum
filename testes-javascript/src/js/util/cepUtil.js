'use strict';

var cepUtil = (function () {

    var validar = function (cep) {

        var objER = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
        if (!cep || !objER.test(cep)) {
            return false;
        }
        return true;
    };

    var colocarMascara = function (cepSemFormatacao) {

        var cepFormatado;
        //deixar somente == e ver que vai dar erro futuramente no jshint
        if (cepSemFormatacao.length === 8) {
            cepFormatado = cepSemFormatacao.substring(0, 2) +
                '.' + cepSemFormatacao.substring(2, 5) +
                '-' + cepSemFormatacao.substring(5, 8);
        }
        return validar(cepFormatado) ? cepFormatado : cepSemFormatacao;

    };

    var retirarMascara = function (cepFormatado) {

        return cepFormatado.replace(/\.|\-/g, '');
    };

    return {
        colocarMascara: colocarMascara,
        retirarMascara: retirarMascara,
        validar: validar
    };
})();
