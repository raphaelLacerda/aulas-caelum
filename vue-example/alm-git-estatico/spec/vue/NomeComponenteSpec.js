import Vue from 'vue';
import NomeComponente from '../../src/vue/components/NomeComponente.vue';

(function () {
    'use strict';

    describe('nome do componente', () => {

        var meuNomeComponente;
        beforeEach(function () {

            const VueNomeComponente = Vue.extend(NomeComponente);
            meuNomeComponente = new VueNomeComponente().$mount();
            meuNomeComponente.sigla = 'ALM';
            meuNomeComponente.atualizarSugestaoParaNomeDoComponente();
        });

        describe('quando for informada sugestao', () => {
            it('com somente sigla deve ser invalido', () => {

                meuNomeComponente.atualizarSugestaoParaNomeDoComponente();
                expect(meuNomeComponente.isNomeComponenteValido).toBe(false);
                expect(meuNomeComponente.nomeComponenteValidado).toBe('alm-');
            });
            it('com nome do componente deve ser valido', () => {

                meuNomeComponente.sugestaoNomeComponente = 'alm-git-estatico';
                meuNomeComponente.atualizarSugestaoParaNomeDoComponente();
                expect(meuNomeComponente.isNomeComponenteValido).toBe(true);
                expect(meuNomeComponente.nomeComponenteValidado).toBe('alm-git-estatico');

                meuNomeComponente.sugestaoNomeComponente = 'alm-extrator-variaveis';
                meuNomeComponente.atualizarSugestaoParaNomeDoComponente();
                expect(meuNomeComponente.isNomeComponenteValido).toBe(true);
                expect(meuNomeComponente.nomeComponenteValidado).toBe('alm-extrator-variaveis');
            });
        });
        describe('deve ser válido quando informado', () => {
            it('com letra maiuscula', () => {

                meuNomeComponente.nomeComponenteValidado = 'ALM-EXTRATOR-VARIAVEIS';
                expect(meuNomeComponente.isNomeComponenteValido).toBe(true);
            });
            it('com letra minuscula', () => {

                meuNomeComponente.nomeComponenteValidado = 'alm-extrator-variaveis';
                expect(meuNomeComponente.isNomeComponenteValido).toBe(true);
            });
            it('com sigla de 2 letras', () => {

                meuNomeComponente.sigla = 'AL';
                meuNomeComponente.nomeComponenteValidado = 'al-EXTRATOR-VARIAVEIS';
                expect(meuNomeComponente.isNomeComponenteValido).toBe(true);
            });
            it('com sigla de números', () => {

                meuNomeComponente.sigla = '99';
                meuNomeComponente.nomeComponenteValidado = '99-EXTRATOR-VARIAVEIS';
                expect(meuNomeComponente.isNomeComponenteValido).toBe(true);
            });

            it('com caracter underline', () => {

                meuNomeComponente.sigla = 'AL_';
                meuNomeComponente.nomeComponenteValidado = 'AL_-EXTRATOR-VARIAVEIS';
                expect(meuNomeComponente.isNomeComponenteValido).toBe(true);
            });
            it('com letras e números ', () => {

                meuNomeComponente.nomeComponenteValidado = 'ALM-extrator2-varia-2';
                expect(meuNomeComponente.isNomeComponenteValido).toBe(true);
            });
            it('com no mínimo duas letras apos sigla', () => {

                meuNomeComponente.nomeComponenteValidado = 'ALM-ex';
                expect(meuNomeComponente.isNomeComponenteValido).toBe(true);
            });

        });

        describe('deve ser inválido quando informado', () => {
            it('sem sigla', () => {

                meuNomeComponente.nomeComponente = 'EXTRATOR-VARIAVEIS';
                expect(meuNomeComponente.isNomeComponenteValido).toBe(false);
            });

            it('com sigla diferente da selecionada', () => {

                meuNomeComponente.nomeComponente = 'gaw-extrator';
                expect(meuNomeComponente.isNomeComponenteValido).toBe(false);
            });

            it('com sigla sem separacao', () => {

                meuNomeComponente.nomeComponente = 'almEXTRATOR-variaveis';
                expect(meuNomeComponente.isNomeComponenteValido).toBe(false);
            });
            it('com caracter *', () => {

                meuNomeComponente.sigla = 'AL*';
                meuNomeComponente.nomeComponente = 'AL*-EXTRATOR-VARIAVEIS';
                expect(meuNomeComponente.isNomeComponenteValido).toBe(false);
            });
            it('com somente números ', () => {

                meuNomeComponente.nomeComponente = 'ALM-1231322';
                expect(meuNomeComponente.isNomeComponenteValido).toBe(false);
            });
            it('sem descricao pos sigla suficiente', () => {

                meuNomeComponente.nomeComponente = 'ALM-a';
                expect(meuNomeComponente.isNomeComponenteValido).toBe(false);
            });

        });
    });

})();
