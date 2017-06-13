'use strict';

var PageObject = require('./PageObject');

class PaginaInicial extends PageObject {

    constructor(webdriver, driver) {
        super(webdriver, driver);
    }

    abrir() {

        console.log('abrindo pagina inicial');
        return super.navegar('http://localhost/lider');
    }

    buscarTextoDoRodape() {

        console.log('buscando texto do rodape');
        return super.buscarTextoNoElementoComClasse('footer');

    }


    buscarInformacoesUsuarioLogado() {

        return super.buscarTextoNoElementoComId('divUsuarioLogado');
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