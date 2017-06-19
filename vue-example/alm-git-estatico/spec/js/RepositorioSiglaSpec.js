(function () {
    'use strict';

    var repositorioSigla = require('../../src/js/repositorioSigla.js');
    var httpHelper = require('../../src/js/httpHelper.js');

    describe('quando pesquisar por siglas', function () {

        var siglas;
        beforeEach(function (done) {

            var promisseFake = {
                then: function (resolve) {
                    var resposta = {
                        RAO: 'Cobranca e Recuperacao de Ativos',
                        CDA: 'Administracao de Contratos Bens e Servicos'
                    };
                    return resolve(resposta);
                }
            };

            spyOn(httpHelper, 'get')
                .and.callFake(function (arg) {

                    var url = '/alm-integracao/' +
                        'APPS/cat?arquivo=mapeamento-siglaAreaInteresse.properties';
                    if (arg === url) {
                        return promisseFake;
                    }
                    throw 'Parâmetros errados';
                });

            repositorioSigla.listarSiglas()
                .then(resposta => {
                    siglas = resposta;
                    done();
                });
        });

        it('deve retornar lista de siglas', function () {
            expect(siglas).toBeArray();
            expect(siglas[0].abreviacao.length).toBe(3);
            expect(siglas[0].nome).toBeNonEmptyString();

        });
    });

    describe('quando pesquisar por siglas do usuario', function () {

        var siglas;
        beforeEach(function (done) {

            var promisseFake = {
                then: function (resolve) {
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
                        ALM: ''
                    };
                    resposta.areaInteresse['Cartão'] = {
                        VIP: '',
                        MCI: '',
                        CAE: ''
                    };
                    return resolve(resposta);
                }
            };

            spyOn(httpHelper, 'get')
                .and.returnValue(promisseFake);

            repositorioSigla.listarSiglasDoUsuario('F8437296')
                .then(resposta => {
                    siglas = resposta;
                    done();
                });
        });

        it('deve retornar somente siglas que ele tem acesso', function () {
            expect(siglas).toBeArray();
            expect(siglas[0].abreviacao.length).toBe(3);
            expect(siglas[0].nome).toBe('Desenvolvimento de Sistemas');
            expect(siglas[1].nome).toBeNonEmptyString();
        });
    });

})();
