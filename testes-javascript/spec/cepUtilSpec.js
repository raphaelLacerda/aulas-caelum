describe('CEP', function () {
    describe("deve ser inválido", function () {
        it("quando não for informado", function () {

            expect(function () {
                cepUtil.validar();
            }).toThrow('CEP inválido');
        });
        it("quando for vazio", function () {

            expect(function () {
                cepUtil.validar('');
            }).toThrow('CEP inválido');
        });

        it("quando for nulo", function () {

            expect(function () {
                cepUtil.validar(null);
            }).toThrow('CEP inválido');
        });

        it("quando tiver somente com letras", function () {

            expect(function () {
                cepUtil.validar('dasdasd');
            }).toThrow('CEP inválido');
        });

        it("quando tiver número e letras", function () {

            expect(function () {
                cepUtil.validar('70.673-42d');
            }).toThrow('CEP inválido');
        });

        it("quando for informado sem máscara", function () {

            expect(function () {
                cepUtil.validar('70673410');
            }).toThrow('CEP inválido');
        });
    });

    describe("deve ser válido", function () {
        it("quando informado com máscara", function () {

            expect(cepUtil.validar('70.673-410')).toBe(true);
        });

    });
});


describe('MÁSCARA', function () {
    describe("deve ser colocada", function () {
        it("quando cep estiver correto", function () {

            expect(cepUtil.colocarMascara('70673410')).toBe('70.673-410');
        });

    });
    describe("não deve ser colocada", function () {
        it("quando cep for maior do que 8 números", function () {

            expect(function () {
                cepUtil.colocarMascara('706734100');
            }).toThrow('CEP inválido');
        });
    });
    describe("não deve ser colocada", function () {
        it("quando cep estiver com letras", function () {

            expect(function () {
                cepUtil.colocarMascara('aaaaaaaa');
            }).toThrow('CEP inválido');
        });
    });

    describe("deve ser retirada", function () {
        it("quando cep estiver correto", function () {

            expect(cepUtil.retirarMascara('70.673-410')).toBe('70673410');
        });

    });
});