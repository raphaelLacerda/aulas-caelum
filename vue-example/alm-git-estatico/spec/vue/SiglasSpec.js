import Vue from 'vue';
import Siglas from '../../src/vue/components/Siglas.vue';

(function () {
    'use strict';

    describe('quando carregar siglas do usuarios', () => {
        // Inspect the raw component options

        it('deve ter valores definidos no inicio', () => {

            expect(typeof Siglas.created).toBe('function');
            expect(Siglas.data().siglas).toBeArray();
        });

    });

    describe('quando carregar siglas do usuarios ao criar o componente', () => {
        // Inspect the raw component options

        var repositorioUsuario = require('../../src/js/repositorioUsuario.js');
        var repositorioSigla = require('../../src/js/repositorioSigla.js');

        beforeEach(function () {

            var promisseFake = {
                then: function (resolve) {
                    return resolve({nome: 'raphael', matricula: 'F8437296'});
                }
            };

            var promisseFakeSiglas = {
                then: function (resolve) {
                    var resposta = [];
                    resposta.push({abreviacao: 'ALM', nome: 'Desenvolvimento'});
                    resposta.push({abreviacao: 'GAW', nome: 'Interface de negócio'});

                    return resolve(resposta);
                }
            };

            spyOn(repositorioUsuario, 'buscarUsuarioLogado')
                .and.returnValue(promisseFake);

            spyOn(repositorioSigla, 'listarSiglasDoUsuario')
                .and.callFake(function (arg) {

                    if (arg === 'F8437296') {
                        return promisseFakeSiglas;
                    }
                    throw 'Parâmetros errados';
                });
        });

        it('deve montar uma combo com as siglas', () => {
            const VueSigla = Vue.extend(Siglas);
            const minhaSigla = new VueSigla().$mount();
            expect(minhaSigla.siglas[0].abreviacao).toBe('ALM');
        });
    });
})();
