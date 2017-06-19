<template>
    <div>
        <form class="ui form" v-on:submit.prevent="criarTarefaBuild">
            <h4 class="ui dividing header">Criando tarefa de build</h4>
            <div v-if="!this.$route.params.nomeRepositorio">
                <siglas id="comboSiglas" v-on:sigla-alterada="setSigla"></siglas>
                <transition name="fade">
                    <div v-show="sigla" class="field">
                        <label>Em qual repositório está o componente que será construído?</label>
                        <select  class="ui search selection dropdown" v-model="repositorio">
                            <option v-for="repo in repositorios" v-bind:value="repo">
                                {{repo}}
                            </option>
                        </select>
                    </div>
                </transition>
            </div>
            <div v-else class="field">
                <label>Sigla: {{sigla}}</label>
                <label>Repositório: {{repositorio}}</label>
            </div>

            <div v-show="repositorio" class="field">
                <nome-componente v-bind:sigla="sigla"
                    label="Qual o nome do artefato que será construído?"
                    placeholder="ex: alm-core, alm-ui-web"
                    v-bind:sugestaoNomeComponente="repositorio"
                    v-on:nome-componente-alterado="setNomeComponente"></nome-componente>
            </div>
            <transition name="fade">
                <div v-show="nomeComponente" class="field">
                    <label >Qual template você quer usar?</label>

                    <ul>
                        <li class="fields" v-for="temp in templates" v-on:click="setTemplate(temp)">
                            <div class="ui labeled button">
                                <div class="ui button" v-bind:class="{ orange : isTemplateSelecionado(temp) }">
                                    <i class="icon" v-bind:class="temp.icon"></i> {{temp.nome}}
                                </div>
                            </div>
                        </li>
                    </ul>
                    {{template.descricao}}
                </div>
            </transition>
            <transition name="fade">
                <button class="ui labeled icon button primary"
                    v-show="deveMostrarCriacaoTarefaBuild"
                    type="submit">
                        <i class="building outline icon"></i>
                        Criar Build
                    </button>
            </transition>
            <transition name="fade">
                <div v-show="deveMostrarDeploy" class="ui icon message" v-on:click="irParaTarefaDeploy">
                    <span ></span>
                    <i class="inbox icon"></i>
                    <div class="content">
                        <div class="header">
                        Tarefa de build sendo criada
                        </div>
                        <p>
                            Vamos criar a tarefa de deploy do <a class="clicavel">{{nomeComponente}}?</a>
                        </p>
                    </div>
                </div>
            </transition>
        </form>
    </div>
</template>
<script>
    import Siglas from '../components/Siglas.vue';
    import NomeComponente from '../components/NomeComponente.vue';
    var repositorioTarefa = require('../../js/repositorioTarefa.js');
    var repositorioGit = require('../../js/repositorioGit.js');

    export default {
        data(){
            return {
                sigla: '',
                nomeComponente  : '',
                repositorios: [],
                repositorio : '',
                templates : [],
                template : '',
                deveMostrarDeploy : false
            }
        },
        computed : {
            deveMostrarCriacaoTarefaBuild : function (){
                return this.nomeComponente && this.template;
            }
        },
        created : function (){

            this.setRepositorio(this.$route.params.nomeRepositorio);
            this.sigla = this.$route.params.sigla;

            this.templates.push({icon: 'coffee', nome : 'Java', descricao : 'Projetos que geram WAR e JAR'});
            this.templates.push({icon: 'html5', nome : 'JavaScript', descricao : 'NPM + NODE + Gulp ou Grunt'});
            this.templates.push({icon: 'android', nome : 'Android', descricao : 'Projetos que geram APK assinada com certificado'});
            this.templates.push({icon: 'mobile', nome : 'GAM', descricao : 'Projetos que geram artefatos GAM'});
        },
        methods : {
            criarTarefaBuild : function (){

                var tarefa = {};
                tarefa.sigla = this.sigla;
                tarefa.nomeComponente = this.nomeComponente;
                tarefa.repositorio = this.repositorio;
                tarefa.template = this.template.nome;

                repositorioTarefa.criarTarefaDeConstrucao(tarefa)
                    .then(resposta => {

                        this.$emit('nova-msg',
                                            {
                                                conteudo: 'Tarefa de build criada--> '+ resposta.id,
                                                classe: 'success'
                                            }
                        );
                        this.deveMostrarDeploy = true;
                    });
            },
            isTemplateSelecionado : function (temp){
                return this.template.nome === temp.nome;
            },
            irParaTarefaDeploy :function(){

                this.$router.push('/tarefa-deploy/'+ this.nomeComponente);
            },
            setSigla : function(sigla) {
                this.sigla = sigla.abreviacao;
            },
            setNomeComponente : function(nome) {
                this.nomeComponente = nome;
            },
            setRepositorio : function (repo){
                this.repositorio = repo;
            },
            setTemplate : function (temp){
                this.template = temp;
            }
        },
        watch: {
            '$route' (to, from) {
                this.repositorio = this.$route.params.nomeRepositorio;
            },
            sigla : function (valor){

                try{
                    repositorioGit.listarRepositoriosDaSigla(valor)
                        .then(resposta => this.repositorios = resposta);
                }catch(e){
                    console.log(e);
                }
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