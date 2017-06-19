<template>
    <div class="field">
        <label for="comboSiglas">Escolha a sigla</label>
        <select class="ui search selection dropdown" id="comboSiglas" v-on:change="siglaAlterada" v-model="siglaSelecionada">
            <option v-for="sigla in siglas" v-bind:value="sigla">{{sigla.toString()}}</option>
        </select>
    </div>
</template>
<script>
    var repositorioSigla = require('../../js/repositorioSigla.js');
    var repositorioUsuario = require('../../js/repositorioUsuario.js');
    // var $ = require('../../../node_modules/jquery/dist/jquery.js');

    module.exports = {
        data: function () {
            return {
                siglaSelecionada: {},
                siglas: []
            };
        },
        created: function () {
            this.carregarSiglas();
        },
        mounted : function (){
            $(function (){
                $('.ui.dropdown').dropdown();
            });
        },
        methods: {
            carregarSiglas: function () {

                repositorioUsuario.buscarUsuarioLogado()
                    .then(usuarioLogado => {

                        repositorioSigla.listarSiglasDoUsuario(usuarioLogado.matricula)
                            .then(resposta => {

                                this.siglas = resposta;
                            })
                            .catch(e => {
                                console.log(e);
                            });
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            siglaAlterada : function () {

                this.$emit('sigla-alterada', this.siglaSelecionada);
            }
        }
    }
</script>