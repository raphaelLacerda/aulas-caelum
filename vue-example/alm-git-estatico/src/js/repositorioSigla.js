(function () {
    'use strict';
    var httpHelper = require('./httpHelper.js');
    var listarSiglas = function () {

        var urlSiglas = '/alm-integracao/APPS/cat?arquivo=mapeamento-siglaAreaInteresse.properties';

        //TODO: chamada rest
        //http.get(urlSiglas).then(resolve);

        var p1 = new Promise((resolve, reject) => {

            var resposta = {
                RAO: 'Cobranca e Recuperacao de Ativos',
                CDA: 'Administracao de Contratos Bens e Servicos'
            };

            resolve(transformarEmArray(resposta));

        });
        return p1;
    };

    var listarSiglasDoUsuario = function (matricula) {

        var urlSiglasUsuario = '/alm-integracao/APPS/verificaIntegracao?matricula=' +
            matricula + '&saida=json';

        return new Promise((resolve, reject) => {

            var resposta = {};
            resposta.areaInteresse = {};
            resposta.areaInteresse[''] = {
                CDE: ''
            };
            resposta.areaInteresse['Gestao Estrategica'] = {
                GSV: ''
            };
            resposta.areaInteresse['Desenvolvimento de Sistemas'] = {
                DPR: '',
                ALM: '',
                GAW : ''
            };
            resposta.areaInteresse['Cartão'] = {
                VIP: '',
                MCI: '',
                CAE: ''
            };

            var siglas = [];
            var areaInteresse = resposta.areaInteresse;
            for (var nomeDaArea in areaInteresse) {

                if (areaInteresse.hasOwnProperty(nomeDaArea)) {

                    var siglaTemp = areaInteresse[nomeDaArea];

                    for (var abreviacao in siglaTemp) {

                        if (siglaTemp.hasOwnProperty(abreviacao)) {

                            siglas.push(criarSigla(abreviacao, nomeDaArea));
                        }
                    }

                }
            }

            resolve(siglas);

        });
    };

    // var listarSiglas = function () {
    //     var urlSiglas = '/alm-integracao/APPS/cat?arquivo=mapeamento-siglaAreaInteresse.properties';
    //     var p1 = new Promise((resolve, reject) => {

    //         httpHelper.get(urlSiglas).then(resposta => {
    //             resolve(transformarEmArray(resposta));
    //         });

    //     });
    //     return p1;
    // };

    // var listarSiglasDoUsuario = function (matricula) {

    //     var urlSiglasUsuario = '/alm-integracao/APPS/verificaIntegracao?matricula=' +
    //         matricula + '&saida=json';

    //     return new Promise((resolve, reject) => {

    //         httpHelper.get(urlSiglasUsuario).then(resposta => {

    //             var siglas = [];
    //             var areaInteresse = resposta.areaInteresse;
    //             for (var nomeDaArea in areaInteresse) {

    //                 if (areaInteresse.hasOwnProperty(nomeDaArea)) {

    //                     var siglaTemp = areaInteresse[nomeDaArea];

    //                     for (var abreviacao in siglaTemp) {

    //                         if (siglaTemp.hasOwnProperty(abreviacao)) {

    //                             siglas.push(criarSigla(abreviacao, nomeDaArea));
    //                         }
    //                     }

    //                 }
    //             }
    //             resolve(ordenarSiglas(siglas));
    //         });
    //     });
    // };

    function transformarEmArray(siglasAsJson) {

        var siglas = [];
        for (var abreviacao in siglasAsJson) {
            if (siglasAsJson.hasOwnProperty(abreviacao)) {

                siglas.push(criarSigla(abreviacao, siglasAsJson[abreviacao]));
            }
        }

        return ordenarSiglas(siglas);
    }

    function criarSigla(abreviacao, nome) {

        var siglaAsJson = {
            toString: function () {
                return this.abreviacao + ' - ' + this.nome;
            }
        };
        siglaAsJson.abreviacao = abreviacao;
        siglaAsJson.nome = nome;
        return siglaAsJson;
    }

    function ordenarSiglas(siglas) {

        siglas.sort((a, b) => {
            return a.abreviacao.length - b.abreviacao.length;
        });
        siglas.sort();
        return siglas;
    }

    module.exports = {
        listarSiglas: listarSiglas,
        listarSiglasDoUsuario: listarSiglasDoUsuario
    };

})();
