'use strict';

var cepUtil = (function () {

    var colocarMascara = function (cep){
        
    }
    var validar = function (cep) {

        var objER = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
        if(!cep){
            return false;
        }
        return objER.test(cep);
    };

    return {
        validar: validar,
        colocarMascara : colocarMascara
    };

})();