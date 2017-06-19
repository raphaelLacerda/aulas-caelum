(function () {

    'use strict';
    var httpHelper = require('./httpHelper.js');

    // var criar = function (nome, sigla) {

    //     return httpHelper.post('/alm-git-api/v1/repositorios', {nome : nome, sigla : sigla});

    // };

    // var listarRepositoriosDaSigla = function (sigla) {

    //     if (!sigla || sigla.length < 3) {
    //         throw 'Sigla inválida';
    //     }
    //     sigla = sigla.toLowerCase();
    //     return httpHelper.get('/alm-git-api/v1/repositorios' + sigla);
    // };

    var criar = function (nome, sigla) {

        return new Promise((resolve, reject) => {

            resolve({
                workItem: 84646,
                id: '6546464'
            });
        });

    };
    var listarRepositoriosDaSigla = function (sigla) {

        return new Promise((resolve, reject) => {

            resolve(['gaw-comms', 'gaw-estatico']);
        });
    };

    module.exports = {
        criar: criar,
        listarRepositoriosDaSigla: listarRepositoriosDaSigla
    };

})();
