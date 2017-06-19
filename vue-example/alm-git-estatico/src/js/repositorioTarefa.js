(function () {

    'use strict';
    var httpHelper = require('./httpHelper.js');

    var criarTarefaDeConstrucao = function (tarefa) {

        return new Promise((resolve, reject) => {

            resolve(
                {id: 684684684}
            );
        });
    };

    var criarTarefaDeDeploy = function (tarefa) {

        return new Promise((resolve, reject) => {

            resolve(
                {id: 684684684}
            );
        });
    };

    // var criarTarefaDeConstrucao = function (tarefa) {

    //     return httpHelper.post('/alm-git-api/v1/tarefas/build', tarefa);
    // };

    // var criarTarefaDeDeploy = function (tarefa) {

    //     return httpHelper.post('/alm-git-api/v1/tarefas/deploy', tarefa);
    // };

    module.exports = {
        criarTarefaDeConstrucao: criarTarefaDeConstrucao,
        criarTarefaDeDeploy: criarTarefaDeDeploy,
    };

})();
