(function () {
    'use strict';

    var repositorioGit = require('../../src/js/repositorioGit.js');
    var httpHelper = require('../../src/js/httpHelper.js');

    describe('quando solicitar criação de repositorio', function () {

        var retorno;
        beforeEach(function (done) {
            var promisseFake = {
                then: function (resolve) {
                    var resposta = {
                        workItem: 84646,
                        id: '6546464'
                    };
                    return resolve(resposta);
                }
            };
            spyOn(httpHelper, 'post')
                .and.returnValue(promisseFake);

            repositorioGit.criar('alm-git-estatico', 'alm')
                .then(resposta => {
                    retorno = resposta;
                    done();
                });
        });
        it('deve criar repo', function () {
            expect(retorno.workItem).toBeGreaterThan(1);
            expect(retorno.id).toBeNonEmptyString();

        });
    });

    describe('quando solicitar repositórios da sigla', function () {

        var retorno;
        beforeEach(function (done) {

            var promisseFake = {
                then: function (resolve) {
                    return resolve(['gaw-comms', 'gaw-estatico']);
                }
            };
            spyOn(httpHelper, 'get')
                .and.returnValue(promisseFake);

            repositorioGit.listarRepositoriosDaSigla('alm')
                .then(resposta => {
                    retorno = resposta;
                    done();
                });
        });
        it('deve listar repos', function () {
            expect(retorno).toBeArray();
            expect(retorno[0]).toBeNonEmptyString();

        });
    });

    describe('quando sigla for inválida', function () {

        it('deve lançar erro', function () {
            expect(function () {
                repositorioGit.listarRepositoriosDaSigla('');
            }).toThrow('Sigla inválida');
        });

        it('deve lançar erro', function () {
            expect(function () {
                repositorioGit.listarRepositoriosDaSigla('AC');
            }).toThrow('Sigla inválida');
        });
    });

})();