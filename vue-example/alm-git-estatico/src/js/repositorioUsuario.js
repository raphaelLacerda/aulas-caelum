(function () {

    'use strict';

    var httpHelper = require('./httpHelper.js');

    // var buscarUsuarioLogado = function () {

    //     return httpHelper.get('/alm-git-api/v1/usuarioLogado');
    // };

    var buscarUsuarioLogado = function () {

        var p1 = new Promise((resolve, reject) => {

            var usuarioLogado = {};
            usuarioLogado.matricula = 'F8437296';
            usuarioLogado.nome = 'Raphael Lacerda';
            resolve(usuarioLogado);
        });
        return p1;
    };

    module.exports = {
        buscarUsuarioLogado: buscarUsuarioLogado
    };

})();
