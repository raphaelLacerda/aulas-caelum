'use strict';

class PageObject {
    constructor(webdriver, driver) {

        this.webdriver = webdriver;
        this.By = webdriver.By;
        this.until = webdriver.until;
        this.driver = driver;
    }

    buscarElementoPorId(id) {

        console.log('buscando por id: ' + id);
        return this.driver.findElement(this.By.id(id));
    }

    buscarElementoPorClasse(classe) {

        console.log('buscando por classe ' + classe);
        return this.driver.findElement(this.By.className(classe));
    }

    buscarTextoNoElementoComClasse(classe) {

        this.driver.wait(this.until.elementLocated(this.By.className(classe)), 10000);

        return new Promise(

            (resolve) => {

                this.buscarElementoPorClasse(classe).then((webElement) => {

                    webElement.getText().then(resolve);
                });
            }
        );
    }

    buscarTextoNoElementoComId(id) {
        return new Promise(

            (resolve) => {

                this.esperarAteQueElementoApareca(id)
                    .then((webElement) => {
                        webElement.getText().then(resolve);
                    });
            }
        );
    }

    clicar(id) {
        console.log('clicando no id' + id);
        return new Promise(

            (resolve) => {

                this.buscarElementoPorId(id).then((webElement) => {

                    webElement.click().then(resolve);
                });
            }
        );
    }

    esperarAteQueElementoApareca(id) {

        console.log('esperando por elemento ser localizado: ' + id);
        this.driver.wait(this.until.elementLocated(this.By.id(id)), 10000);
        console.log('elemento foi localizado' + id);
        return new Promise(

            (resolve) => {

                this.buscarElementoPorId(id)
                    .then((webElement) => {
                        console.log('esperando elemento ficar visível ' + id);
                        webElement.isDisplayed().then(() => {
                            console.log('elemento está visível: ' + id);
                            resolve(webElement);
                        });
                    });
            }
        );
    }


    preencherCampo(id, valor) {

        console.log('preenchendo campo...' + id + ' com valor: ' + valor);
        return new Promise(

            (resolve) => {

                this.buscarElementoPorId(id).then((webElement) => {

                    webElement.sendKeys(valor).then(resolve);
                });
            }
        );
    }

    navegar(url) {

        console.log('navegando ' + url);
        return this.driver.get(url);
    }



}

module.exports = PageObject;