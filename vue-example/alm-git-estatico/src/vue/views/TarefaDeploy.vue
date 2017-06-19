<template>
    <div>
        <form class="ui form" v-on:submit.prevent="criarTarefaDeploy">
            <h4 class="ui dividing header">Criando tarefa de deploy</h4>
            <div v-if="this.$route.params.nomeComponente" class="field">
                <label for="">
                    Deploy do artefato: {{this.$route.params.nomeComponente}}
                </label>
            </div>
            <div v-else class="field">
                <siglas id="comboSiglas" v-on:sigla-alterada="setSigla"></siglas>
                <nome-componente label="Qual nome do artefato que será deployado?"
                                placeholder="ex: alm-core, alm-ui-web"
                                v-show="sigla"
                                v-bind:sigla="sigla"
                                v-on:nome-componente-alterado="setNomeComponente"></nome-componente>
            </div>
            <transition name="fade">
                <div class="field" v-show="nomeComponente">
                    <label for="">Qual será o nome do contexto?</label>
                    <input type="text" v-model="nomeContexto">
                </div>
            </transition>
            <transition name="fade">
                <div v-show="isNomeContextoValido" class="field">
                    <label>Qual será o canal?</label>
                    <ul>
                        <li v-for="c in canais" v-on:click="setCanal(c)" class="fields">
                            <div class="ui labeled button">
                                <div class="ui button" v-bind:class="{ orange : isCanalSelecionado(c) }">
                                    <i class="icon" v-bind:class="c.icon"></i> {{c.nome}}
                                </div>
                            </div>
                        </li>
                    </ul>
                    {{canal.descricao}}
                </div>
            </transition>

            <transition name="fade">
                <button class="ui labeled icon button primary"
                        v-show="deveMostrarCriacaoDeTarefaDeploy"
                        type="submit">
                            <i class="pied piper outline icon"></i>
                            Criar Deploy
                        </button>
            </transition>
        </form>
    </div>
</template>
<script>
    var repositorioTarefa = require('../../js/repositorioTarefa.js');
    import NomeComponente from '../components/NomeComponente.vue';
    import Siglas from '../components/Siglas.vue';

    export default {
        data(){
            return {
                canais : [],
                canal : '',
                nomeComponente : '',
                nomeContexto : '',
                sigla: ''
            }
        },
        created : function (){

            this.nomeComponente = this.$route.params.nomeComponente;

            this.canais.push({icon: 'laptop', nome: 'PLTBB', descricao: 'Plataforma BB - aplicações JSF'});
            this.canais.push({icon: 'users', nome: 'PLTBBv3', descricao: 'Plataforma BB v3 - backend api rest deployado em application server'});
            this.canais.push({icon: 'html5', nome: 'CDN', descricao: 'CDN BB v3 - frontend - arquivos estáticos como css, js deployados em apache'});
            this.canais.push({icon: 'plug', nome: 'INTRA', descricao: 'INTRANET - deployado em tomcat'});
        },
        computed : {

            deveMostrarCriacaoDeTarefaDeploy : function (){

                return this.nomeComponente && this.canal;
            },
            isNomeContextoValido : function (){
                return this.nomeContexto && this.nomeComponente? (this.nomeContexto.length >= 3 ? true : false) : false  ;
            }
        },
        methods : {
            setCanal : function(canal){
                this.canal = canal;
            },
            setSigla : function(sigla) {
                this.sigla = sigla.abreviacao;
            },
            setNomeComponente : function(nome) {
                this.nomeComponente = nome;
            },
            isCanalSelecionado : function (canalTemp){

                return this.canal ? (this.canal.nome === canalTemp.nome ? true : false) : false
            },
            criarTarefaDeploy : function (){

                var tarefa = {};
                tarefa.nomeComponente = this.nomeComponente;
                tarefa.canal = this.canal.nome;
                tarefa.contexto = this.nomeContexto;

                repositorioTarefa.criarTarefaDeDeploy(tarefa)
                    .then(resposta => {

                        this.$emit('nova-msg',
                                            {
                                                conteudo: 'Tarefa de deploy criada--> '+ resposta.id,
                                                classe: 'success'
                                            }
                        );
                    });
            }
        },
         watch: {
            '$route' (to, from) {
                this.nomeComponente = this.$route.params.nomeComponente;
            }
        },
        components : {
            Siglas,
            NomeComponente
        }
    }

</script>
<style scoped>

</style>