// http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html


describe('quando entrar na tela inicial', function () {

    var textoEncontrado;
    var webdriver;
    beforeEach(function (done) {
        webdriver = require('selenium-webdriver');
        var By = webdriver.By;
        var until = webdriver.until;

        var driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();

        driver.get('http://localhost/lider');
        driver.findElement(By.className('footer')).then(function (e) {
            e.getText().then(function (texto) {
                textoEncontrado = texto;
                console.log('achei');
                done();
            });

        });
    });

    it('deve aparecer texto no rodapé', function () {
        expect(textoEncontrado).toBe('Raphael Lacerda');
    });

    afterEach(() => driver.quit());
});