'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter);

//components
import Siglas from './vue/components/Siglas.vue';
import Mensagem from './vue/components/Mensagem.vue';

//views
import RepositorioGit from './vue/views/RepositorioGit.vue';
import TarefaBuild from './vue/views/TarefaBuild.vue';
import TarefaDeploy from './vue/views/TarefaDeploy.vue';
import Home from './vue/views/Home.vue';

// Vue.component('outro',Outro);
// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.

const routes = [{
    path: '/git',
    component: RepositorioGit
}, {
    path: '/tarefa-build/:sigla?/:nomeRepositorio?',
    component: TarefaBuild
}, {
    path: '/tarefa-deploy/:nomeComponente?',
    component: TarefaDeploy
}, {
    path: '/',
    component: Home
}];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes
});

// module.exports.router = router;

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.

var repositorioUsuario = require('./js/repositorioUsuario.js');
const app = new Vue({
    router,
    components: {
        Siglas,
        Mensagem
    },
    data: {
        msg: '',
        classe: '',
        foto: '',
        usuarioLogado: {}
    },
    created: function () {

        repositorioUsuario.buscarUsuarioLogado()
            .then(usuario => {

                this.usuarioLogado = usuario;
            })
            .catch(e => {
                this.setMsg('Erro ao recuperar usuário - ' + e.statusText);
            });
    },
    methods: {
        navegar: function (uri) {
            this.$router.push(uri);
        },
        setMsg: function (msg) {
            this.msg = msg.conteudo;
            this.classe = msg.classe;
        },
        setSigla: function (sigla) {

            this.sigla = sigla;
        }
    }
}).$mount('#app');

// Now the app has started!