'use strict';

class PageObject {
    constructor(webdriver, driver) {

        this.webdriver = webdriver;
        this.By = webdriver.By;
        this.until = webdriver.until;
        this.driver = driver;
    }

    buscarElementoPorId(id) {

        console.log('buscando por id: '+id);
        return this.driver.findElement(this.By.id(id));
    }

    buscarElementoPorClasse(classe) {

        console.log('buscando por classe '+classe);
        return this.driver.findElement(this.By.className(classe));
    }

    clicar(id){
        console.log('clicando no id'+ id);
        return new Promise(

            (resolve) => {

                this.buscarElementoPorId(id).then((webElement) => {

                    webElement.click().then(resolve);
                });
            }
        );
    }

    esperarAteQueElementoApareca(id){

        console.log('esperando por '+ id);
        this.driver.wait(this.until.elementLocated(this.By.id(id)), 10000);
        console.log('acabou a espera por '+ id);
    }


    preencherCampo(id, valor){

        console.log('preenchendo campo...'+id + ' com valor: '+ valor);
        return new Promise(

            (resolve) => {

                this.buscarElementoPorId(id).then((webElement) => {

                    webElement.sendKeys(valor).then(resolve);
                });
            }
        );
    }

    navegar(url){

        console.log('navegando '+ url);
        return this.driver.get(url);
    }



}

module.exports = PageObject;