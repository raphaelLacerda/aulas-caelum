(function () {
    'use strict';

    var repositorioTarefa = require('../../src/js/repositorioTarefa.js');
    var httpHelper = require('../../src/js/httpHelper.js');

    describe('quando criar tarefa de build', function () {

        var tarefaBuild;
        beforeEach(function (done) {

            var promisseFake = {
                then: function (resolve) {
                    return resolve({id: 684684684});
                }
            };

            spyOn(httpHelper, 'post')
                .and.callFake(function(arg) {

                if (arg === '/alm-git-api/v1/tarefas/build') {
                    return promisseFake;
                }
                throw 'Parâmetros errados';
            });

            repositorioTarefa.criarTarefaDeConstrucao({nomeArtefato: 'alm-extrator'})
                .then(resposta => {
                    tarefaBuild = resposta;
                    done();
                });
        });
        it('deve retornar o id do build', function () {
            expect(tarefaBuild.id).toBe(684684684);

        });
    });

})();
