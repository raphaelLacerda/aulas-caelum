# JavaScript

## Geral

* explicar o var
* explicar IFFE
* explicar o this

```javascript
    var Pessoa = function (arg){
        this.nome = arg;
        console.log(this.nome);
    }
    Pessoa('rafa'); //rafa
    window.nome; // rafa

    //new
    new Pessoa('rafa'); // rafa
    window.nome; // undefined
```

    >   * O uso da palavra new quando utilizando o Pseudo-classical pattern não é dispensável.
        Uma vez que você utilizou a referência this dentro de sua função, caso não utilize o new para instanciá-la, o this apontará para window, criando variáveis globais!.
* explicar hosting


```javascript
    var teste = function (){
        console.log(ok); //referenceError
    };
    var teste = function (){
        var ok;
        console.log(ok); //undefined
    };
    var teste = function (){
        console.log(ok); //undefined
        var ok;
    };
    var teste = function (){
        console.log(ok); //undefined
        var ok;
    };
teste();
```

> http://blog.caelum.com.br/organize-seu-codigo-javascript-de-maneira-facil/
>
> http://blog.caelum.com.br/criacao-de-objetos-em-javascript/
>
> http://blog.caelum.com.br/as-multiplas-personalidades-do-this-em-javascript/
>
> http://blog.caelum.com.br/javascript-entenda-a-nova-especificacao-de-classes-do-harmony-es6/

## Testes de Unidade

### instalação

* npm install -g phantomjs-prebuilt
* npm install -g phantomjs
* npm install karma --save-dev
    * npm install -g karma-cli
    * ./node_modules/karma/bin/karma start
* npm install jasmine
* npm install --save-dev karma-phantomjs-launcher
* karma init karma.conf.js


  also installed on npm install on a directory that contains package.json,
  unless you pass the --production
  not installed on npm install "$package"



  on any other directory, unless you give it the --dev option
  dependencies are installed on both:
  npm install from a directory that contains package.json
  npm install $package on any other directory



### Criando nossos testes

* https://jasmine.github.io/2.6/introduction
* criando nosso primeiro teste -- validar cep
* atenção no nome
* mostra falhando
* depois fazer funcao para colocar mascara

### Coverage
* npm install karma karma-coverage --save-dev
* reporters: ['progress', 'coverage'],
* preprocessors: {
      'src/js/*.js': ['coverage']
    },
* 100% de cobertura de codigo
* comenta o retirar mascara, a cobertura cai para 75%


### Testes de Integracao
* todosEnderecos
* criar os testes (beforeEach) -> done
* criar as promisses
* colocar jQuery
* resolvendo a promisse no PhantomJS
* roda no Chrome
* "babel-polyfill"
* 'node_modules/babel-polyfill/dist/polyfill.js',


### Testes com Spys

* spy do todosEnderecos
* como simular a tag endereco?
* npm install jasmine-jquery --save-dev
* npm install karma-jasmine-jquery
* frameworks: ['jasmine-jquery','jasmine'],
* setFixture




## Buildando projeto com Gulp
npm install --save-dev gulp gulp-clean gulp-htmlmin gulp-include gulp-inject gulp-jscs gulp-jshint gulp-rename gulp-rimraf gulp-strip-comments gulp-uglify gulp-util gulp-watch merge-stream jshint stream-series run-sequence

* clean
* teste
* pasta www
* JavaScript
* htmlmin
* watch

* browser-sync start --server --files .
> http://blog.caelum.com.br/browser-sync-indispensavel-para-desenvolver-sites-em-varios-dispositivos/

