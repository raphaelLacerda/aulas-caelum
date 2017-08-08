'use strict';
(function () {

    describe('Busca por UF, cidade, Logradouro', function () {

        describe('deve retornar endereços', function () {

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

            it('quando parâmetros forem válidos', function () {
                expect(enderecos.length).toBeGreaterThan(1);
                expect(enderecos[0].bairro).toBe('Setor Sudoeste');
            });
        });
    });

    describe('Busca por Cep', function () {

        describe('não deve retornar endereço', function () {

            var mensagem;
            beforeEach(function (done) {

                todosEnderecos.buscarPorCep('aaa')
                    .catch(function (retorno) {
                        mensagem = retorno;
                        done();
                    });
            });

            it('quando cep for inválido', function () {

                expect(mensagem).toBe('cep inválido');
            });
        });

        describe('deve retornar endereço', function () {

            jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
            var endereco;
            beforeEach(function (done) {

                todosEnderecos.buscarPorCep('70.673-410')
                    .then(function (retorno) {
                        endereco = retorno;
                        done();
                    });
            });

            it('quando cep for válido', function () {

                expect(endereco.bairro).toBe('Setor Sudoeste');
                expect(endereco.localidade).toBe('Brasília');
            });
        });
    });
})();