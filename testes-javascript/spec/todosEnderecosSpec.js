describe("deve buscar endereço", function () {


    var endereco;
    beforeEach(function (done) {

        todosEnderecos.buscarPorCep('70.673-410')
            .then(function (retorno) {
                endereco = retorno;
                done();
            });
    });

    it("quando cep for válido", function () {

        expect(endereco.bairro).toBe('Setor Sudoeste');
    });
});

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