<template>
    <div>
        <div class="ui link cards">
            <div class="card">
                <div class="image">
                    <img v-bind:src="foto">
                </div>
                <div class="content">
                    <div class="header">{{usuarioLogado.nome}}</div>
                    <div class="meta">
                        <a>Desenvolvedor</a>
                    </div>
                    <div class="description">
                        {{usuarioLogado.nome}} está na gerência GECIS
                    </div>
                </div>
                <div class="extra content">
                    <span class="right floated">
                        em 2018
                    </span>
                    <span>
                        <i class="building icon"></i>
                        75 Builds feitos
                    </span>
                </div>
            </div>
            <div class="ui card">
                <div class="content">
                    <div class="header">Log dos últimos builds</div>
                </div>
                <div class="content">
                    <h4 class="ui sub header">Builds</h4>
                    <div class="ui small feed">
                        <div class="event">
                            <div class="content">
                                <div class="summary">
                                    <a>31232</a> da sigla <a>ALM</a> no projeto alm-git-estatico
                                </div>
                            </div>
                        </div>
                        <div class="event">
                            <div class="content">
                                <div class="summary">
                                    <a>10456</a> da sigla <a>VIP</a> no projeto vip-core
                                </div>
                            </div>
                        </div>
                        <div class="event">
                            <div class="content">
                                <div class="summary">
                                    <a>864684</a> da sigla <a>CAE</a> no projeto cae-ui-web
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="extra content">
                    <button class="ui button">Procurar outros builds</button>
                </div>
            </div>
        </div>
        <!--<img src="https://connections.bb.com.br/profiles/photo.do?uid=f9342853" alt="">-->

    </div>
</template>
<script>

    var repositorioUsuario = require('../../js/repositorioUsuario.js');

    export default {
        data(){
            return {
                usuarioLogado : {},
                foto: ''
            }
        },
        created: function () {

            repositorioUsuario.buscarUsuarioLogado()
                .then(usuario => {

                    this.usuarioLogado = usuario;
                    this.foto = 'https://humanograma.intranet.bb.com.br/avatar/' +
                        this.usuarioLogado.matricula;
                });
        }
    }

</script>
<style>
</style>