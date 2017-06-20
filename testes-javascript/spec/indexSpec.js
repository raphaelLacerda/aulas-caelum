'use strict';
(function () {

    var endereco = {
        cep: '70.673-410',
        logradouro: 'SQSW 304 bloco j'
    };

    function criarSpyNoEndereco() {


        var promisseFake = {
            then: function (resolve) {
                return resolve(endereco);
            }
        };

        //callFake
        //callThough
        //throwError
        spyOn(todosEnderecos, 'buscarPorCep')
            .and.returnValue(promisseFake);
    }

    describe('deve preencher CEP', function () {

        beforeEach(function () {

            criarSpyNoEndereco();

            //by default
            //jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures';
            //loadFixtures('index.html')



            //The Fixture module of jasmine-jquery allows you to load
            //HTML content to be used by your tests.
            //The overall workflow is as follows:
            //In myfixture.html file:


            //Also, a helper method for creating HTML elements
            //for your tests is provided:
            //sandbox([{attributeName: value[, attributeName: value, ...]}])

            // setFixtures(sandbox({
            //     id: 'endereco'
            // }));
            setFixtures('<div id="endereco"></div><input class="input-cep"></input>');


        });

        it('quando submete form com cpf', function () {

            index.preencherEndereco('70.673-410');

            expect(todosEnderecos.buscarPorCep).toHaveBeenCalled();
            expect(todosEnderecos.buscarPorCep).toHaveBeenCalledWith('70.673-410');

            //https://github.com/velesin/jasmine-jquery
            expect($('#endereco')).toBeInDOM();
            expect($('#endereco').html()).toBe(JSON.stringify(endereco));
            expect($('#endereco')).toHaveClass('sucesso');


        });


        //Como testar um form submission?
        it('quando usuário submeter form', function () {

            $('.input-cep').val('70.673-410');
            expect($('.input-cep')).toBeInDOM();
            expect($('.input-cep').val()).toBe('70.673-410');
            // var form = $('#form');
            // spyOn(form, 'submit');
            // form.submit();
        });

    });

})();