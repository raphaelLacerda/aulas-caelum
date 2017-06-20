'use strict';
(function () {
    /*
    describe('deve pesquisar por UF, cidade, Logradouro ', function () {

        var enderecos;

        beforeEach(function(done) {

            var enderecoPesquisa = {};
            enderecoPesquisa.uf = 'DF';
            enderecoPesquisa.cidade = 'Brasilia';
            enderecoPesquisa.logradouro = 'SQSW';

            todosEnderecos.buscarPorUFCidadeLogradouro(enderecoPesquisa)
                .then(function (retorno) {
                    enderecos = retorno;
                    done();
                });
        });

        it('passando parâmetros válidos', function () {

            expect(enderecos).toBeArrayOfObjects();
            expect(enderecos.length).toBeGreaterThan(1);
            expect(enderecos[0].cep).toBeNonEmptyString();
        });
    });
    */

    describe("não deve buscar endereço", function () {


        var mensagem;
        beforeEach(function (done) {

            todosEnderecos.buscarPorCep('aaa')
                .catch(function (retorno) {
                    mensagem = retorno;
                    done();
                });
        });

        it("quando cep for inválido", function () {

            expect(mensagem).toBe('cep inválido');
        });
    });

    describe("deve buscar endereço", function () {

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
        var endereco;
        beforeEach(function (done) {

            todosEnderecos.buscarPorCep('70.673-410')
                .then(function (retorno) {
                    endereco = retorno;
                    done();
                });
        });

        it("quando cep for válido", function () {

            console.log(endereco);
            expect(endereco.bairro).toBe('Setor Sudoeste');
        });
    });
})();