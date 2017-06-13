'use strict';

var PageObject = require('./PageObject');

class PaginaInicial extends PageObject {

    constructor(webdriver, driver) {
        super(webdriver, driver);
    }

    abrir() {

        console.log('abrindo pagina inicial');
        return new Promise(

            (resolve) => {

                super.navegar('http://localhost/lider').then(resolve);
            }
        );

    }

    buscarTextoDoRodape() {

        console.log('buscando texto do rodape');
        return new Promise(

            (resolve) => {

                super.buscarElementoPorClasse('footer').then((webElement) => {

                    console.log('div do rodape encontrada');
                    webElement.getText().then(resolve);
                });
            }
        );

    }


    buscarInformacoesUsuarioLogado() {

        super.esperarAteQueElementoApareca('divUsuarioLogado');

        return new Promise(

            (resolve) => {

                super.buscarElementoPorId('divUsuarioLogado').then((webElement) => {

                    console.log('encontrei usuario logado');
                    webElement.getText().then(resolve);
                });
            }
        );
    }

    encontrouTextoNoRodape(textoEncontrado) {
        console.log('validando texto: ' + textoEncontrado);
        return textoEncontrado.indexOf('Raphael Lacerda') !== -1;
    }

    encontrouUsuarioLogado(textoEncontrado) {
        console.log('validando texto: ' + textoEncontrado);
        return textoEncontrado.indexOf('teste') !== -1;
    }


    logar() {
        return super.clicar('btnLogin');
    }

    informarLogin(login) {

        return super.preencherCampo('campoLogin', login);
    }

    informarSenha(senha) {

        return super.preencherCampo('campoSenha', senha);
    }



}
module.exports = PaginaInicial;