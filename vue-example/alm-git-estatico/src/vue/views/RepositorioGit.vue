<template>
    <div>
        <form class="ui form" v-on:submit.prevent="criarRepositorio">
            <h4 class="ui dividing header">Criando repositório <i class="git square icon"></i></h4>
            <siglas id="comboSiglas" v-on:sigla-alterada="setSigla"></siglas>
            <transition name="fade">
                <div v-show="sigla.abreviacao" class="fields">
                    <div class="sixteen wide field">
                        <nome-componente v-bind:sigla="sigla.abreviacao"
                            label="Qual será o nome do repositório?"
                            placeholder="ex: alm-api, gaw-estatico, mov-centralizador"
                            v-on:nome-componente-alterado="setNomeComponente">
                        </nome-componente>
                    </div>
                </div>
            </transition>
            <transition name="fade">
                    <button class="ui labeled icon button primary" v-show="nomeRepositorio" type="submit">
                        <i class="github alternate icon"></i>
                        Criar repo
                    </button>
            </transition>

            <transition name="fade">
                <div v-show="isRepositorioCriado" v-on:click="irParaTarefaBuild" class="ui icon message">
                    <i class="inbox icon"></i>
                    <div class="content">
                        <div class="header">
                        Repositório sendo criado....
                        </div>
                        <p>Vamos criar a tarefa de build para o componente do repositório <a class="clicavel"> {{this.nomeRepositorio}}? </a></p>
                    </div>
                </div>
            </transition>
        </form>

    </div>
</template>
<script>
    import Siglas from '../components/Siglas.vue';
    import NomeComponente from '../components/NomeComponente.vue';

    var repositorioGit = require('../../js/repositorioGit.js');

    export default {
        data(){
            return {
                sigla: {abreviacao : ''},
                nomeRepositorio : '',
                isRepositorioCriado: false
            }
        },
        methods: {
            criarRepositorio: function () {

                repositorioGit.criar(this.nomeRepositorio, this.sigla.abreviacao)
                    .then(resposta => {

                        this.$emit('nova-msg',{conteudo: 'Repositório ' + this.nomeRepositorio + ' sendo criado - WI: ' + resposta.workItem,
                                                classe: 'success'
                                            });
                        this.isRepositorioCriado = true;

                    })
                    .catch(e => {

                        this.$emit('nova-msg',{conteudo: 'Erro na criação do Repositório' + e ,
                                                classe: 'error'
                                            });

                    });
            },
            setSigla : function(sigla) {
                this.sigla = sigla;
            },
            setNomeComponente : function(nome) {
                this.nomeRepositorio = nome;
            },
            irParaTasetSigla : function(sigla) {
                this.sigla = sigla;
            },
            irParaTarefaBuild : function(){

                this.$router.push('tarefa-build/'+ this.sigla.abreviacao + '/'+this.nomeRepositorio);
            }
        },
        components : {
            Siglas,
            NomeComponente
        }
    }

</script>
<style>

</style>