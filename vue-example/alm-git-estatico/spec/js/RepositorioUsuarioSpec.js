(function () {
    'use strict';

    var repositorioUsuario = require('../../src/js/repositorioUsuario.js');
    var httpHelper = require('../../src/js/httpHelper.js');

    describe('quando pesquisar por usuario logado', function () {

        var usuarioLogado;
        beforeEach(function (done) {

            var promisseFake = {
                then: function (resolve) {
                    return resolve({
                        nome: 'raphael',
                        matricula: 'F8437296'
                    });
                }
            };

            spyOn(httpHelper, 'get')
                .and.callFake(function (arg) {

                    if (arg === '/alm-git-api/v1/usuarioLogado') {
                        return promisseFake;
                    }
                    throw 'Parâmetros errados';
                });

            repositorioUsuario.buscarUsuarioLogado()
                .then(resposta => {
                    usuarioLogado = resposta;
                    done();
                });
        });
        it('deve retornar usuario preenchido', function () {
            expect(usuarioLogado.nome).toBeNonEmptyString();
            expect(usuarioLogado.matricula).toBeNonEmptyString();

        });
    });

    describe('quando nao existir usuario logado', function () {

        var erro;
        beforeEach(function (done) {

            var promisseFake = {
                catch: function (reject) {
                    return reject({
                        responseText: 'Usuário não encontrado'
                    });
                }
            };

            spyOn(httpHelper, 'get')
                .and.returnValue(promisseFake);

            repositorioUsuario.buscarUsuarioLogado()
                .catch(resposta => {
                    erro = resposta;
                    done();
                });
        });
        it('deve retornar mensagem de erro', function () {
            expect(erro.responseText).toBe('Usuário não encontrado');

        });
    });
})();
