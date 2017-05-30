describe('validação do CEP', function () {
    describe("CEP deve ser inválido", function () {
        it("quando não for informado", function () {

            expect(cepUtil.validar()).toBe(false);
        });
        it("quando for vazio", function () {

            expect(cepUtil.validar('')).toBe(false);
        });
        it("quando for nulo", function () {

            expect(cepUtil.validar(null)).toBe(false);
        });
        it("quando tiver somente letras", function () {

            expect(cepUtil.validar('dadas')).toBe(false);
        });
        it("quando tiver número e letras", function () {

            expect(cepUtil.validar('70.673-31a')).toBe(false);
        });
        it("quando informado sem máscara", function () {

            expect(cepUtil.validar('70673410')).toBe(false);
        });
    });

    describe("CEP deve ser válido", function () {
        it("quando informado com máscara", function () {

            expect(cepUtil.validar('70.673-410')).toBe(true);
        });

    });
});


describe('formatação do CEP', function () {
    describe("deve colocar mascara no cep", function () {
        it("quando cep estiver correto", function () {

            expect(cepUtil.validar()).toBe(false);
        });
        
    });
});