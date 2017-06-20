'use strict';
(function() {


    describe('CEP', function() {
        describe("deve ser inválido", function() {
            it("quando não for informado", function() {

                expect(cepUtil.validar()).toBe(false);
            });
            it("quando for vazio", function() {

                expect(cepUtil.validar('')).toBe(false);
            });

            it("quando for nulo", function() {

                expect(cepUtil.validar(null)).toBe(false);
            });

            it("quando tiver somente com letras", function() {

                expect(cepUtil.validar('dasdasdsa')).toBe(false);
            });

            it("quando tiver número e letras", function() {

                expect(cepUtil.validar('70.673-41a')).toBe(false);
            });

            it("quando for informado sem máscara", function() {

                expect(cepUtil.validar('70673410')).toBe(false);
            });
            it("quando for informado com mais numeros do que o necessario", function() {

                expect(cepUtil.validar('706734103123123123')).toBe(false);
            });
            it("quando for informado com mascara invalida", function() {

                expect(cepUtil.validar('706.734-10')).toBe(false);
            });
        });

        describe("deve ser válido", function() {
            it("quando informado com máscara", function() {

                expect(cepUtil.validar('70.673-410')).toBe(true);
            });

        });
    });

    describe('MÁSCARA', function() {
        describe("deve ser colocada", function() {
            it("quando cep estiver correto", function() {

                expect(cepUtil.colocarMascara('70673410')).toBe('70.673-410');
            });

        });
        describe("não deve ser colocada", function() {
            it("quando cep for maior do que 8 números", function() {

                expect(cepUtil.colocarMascara('706734100')).toBe('706734100');
            });
        });
        describe("não deve ser colocada", function() {
            it("quando cep estiver com letras", function() {

                expect(cepUtil.colocarMascara('aaaaaaaa')).toBe('aaaaaaaa');
            });
        });
    });

})();