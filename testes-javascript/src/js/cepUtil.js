'use strict';

var cepUtil = (function () {

    var colocarMascara = function (cep) {

        if (cep.length == 8) {
            var cepFormatado = cep.substring(0,2)+
                '.'+cep.substring(2,5)+
                '-'+cep.substring(5,8);

            if(validar(cepFormatado)){
                return cepFormatado;
            }
        }
        throw 'CEP inválido';
    };

    var retirarMascara = function (cep) {

        return cep.replace(/\.|\-/g, '');
    };

    var validar = function (cep) {

        var objER = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
        if (!cep || !objER.test(cep)) {
            throw 'CEP inválido';
        }
        return true;
    };

    return {
        colocarMascara: colocarMascara,
        retirarMascara : retirarMascara,
        validar: validar
    };
})();