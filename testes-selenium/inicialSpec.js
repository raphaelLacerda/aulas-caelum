'use strict';

let PaginaInicial = require('./PaginaInicial');
let webdriver = require('selenium-webdriver');

describe('quando entrar na tela inicial', () => {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    let paginaInicial;
    let resultado;
    let driver;
    beforeAll((done) => {

        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();

        paginaInicial = new PaginaInicial(webdriver, driver);
        paginaInicial.abrir().then(done);
    });

    it('deve aparecer texto no rodapé', (done) => {

        paginaInicial.buscarTextoDoRodape()
            .then((texto) => {

                expect(paginaInicial.encontrouTextoNoRodape(texto)).toBe(true);
                done();
            });
    });

    it('deve conseguir fazer login', (done) => {


        paginaInicial.informarLogin('teste')
            .then(() => {
                paginaInicial.informarSenha('1')
                    .then(() => {

                        paginaInicial.logar()
                            .then(() => {
                                paginaInicial.buscarInformacoesUsuarioLogado()
                                    .then((texto) => {
                                        expect(paginaInicial.encontrouUsuarioLogado(texto)).toBe(true);
                                        done();
                                    });
                            });

                    });
            });
    });

    afterAll((done) => driver.quit().then(done));


});