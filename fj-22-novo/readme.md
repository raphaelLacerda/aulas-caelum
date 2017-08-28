# Capítulo 1

## Medo de se apaptar

* o que será o projeto
> O	objetivo	desse	projeto	é	simular	a	venda	de	ingressos	em	um	cinema	e	decidiram	utilizar	Spring
MVC	 e	 Hibernate	 na	 aplicaçã

* Explicar o receio inicial com o GIT
* Medo de mexer em coisas -- Testes automatizados
* Soluções de versionamento
    * CVS
    * SVN
    * SourceSafe - lock de arquivos
    * GIT - distribuído
    * Mercurial

## Aprendendo mais sobre o GIT
* Mostrar o início da minha palestra
* características
    * commits locais
    * repositório remotos distribuídos
* comandos básicos
    * clone
        * git, ssh, https
    * git init
    * git	config	--global	user.name	"<Digite	seu	nome	aqui>"
    * git	config	--global	user.email	"<Digite	o	mesmo	e-mail	da	sua	conta>"
    * git config -l

## entendendo os estados - git status

* **changes to be commited** arquivos que serão comitados
* **changes not staged for commit** arquivos modificados mas que não serão comitados
* **untracked** git ainda não gerencia

> Fazer Desenho com esses estados

* devemos então usar o **git add** tanto para os existentes quanto para os novos
* agora vamos **git commit**
    * -a - arquivos modificados do **changes not staged for commit**
    * -m - mensagem

## Refazendo as merdas

* usando o **git revert**
    * desfaz um commit fazendo um novo commit
* usando o **git reset**
    * retira o commit
    * git reset --hard #hash
    * **git log** para descobrir o hash
* voltando o arquivo para o estado original
    * **git checkout**


### exercício 1.3 - iniciando com o GIT

* status, add, commit, log

## Entendo os clientes Git'se
* GitLab, GItHUb, BItBucket

### exercício 1.5 - Criando conta no GItHub


## 1.6 - Utilizando GItHub
* fazer o fork do projeto [fj22-ingressos](https://github.com/caelum/fj22-ingressos.git)
* entendendo o Readme

### exercício 1.7 - Fork e clone do projeto

## 1.8 Lidando com Build e Dependências

* explicar maven, ant, ambiente de integração contínua completo
    * pom.xml
    * pastas padrão
    * goals -- validate, compile, test, clean
    * plugins -- vários goals
    * scopes

> blog caelum maven

> http://blog.caelum.com.br/integracao-continua-de-projeto-java-com-jenkins/

> http://blog.triadworks.com.br/deploy-automatizado-feito-e-melhor-que-perfeito

> http://blog.caelum.com.br/integracao-continua/

### exercício 1.9 + 1.10  - Usando gerenciador de dependência

# Capítulo 2 - Branches

## Manipulando Branches

* explicar branch pela minha palestra
* branches locais x branches remotas
* master default
* **git branch -a**
* ponteiro HEAD

> desenhar ponteiros para commits | **git branch** -v


* **git checkout** -b <nome_da_branch>

## 2.1 - Juntando commits de outra branch -- famoso MERGE

* Merge sem problemas

* git merge fast forward

> fazer DESENHO: master (commits A + B) | desenvolvimento (A + B + C + D)

> git merge master



* merge com problemas

* explicar o commit de merge
* abrir mensagem de commit de merge

> fazer DESENHO: master (commits A + B) | desenvolvimento (A + B + D) + master (commits A + B + C)

> e se o commit C for em arquivo diferente dos do commit D?

> e se o commit C tiver sido nos mesmos arquivos do commit D?


## Rebase ao invés de merge

* evitar os commits específicos para cada merge
* **git rebase**

* git	rebase	work	master -- rebase da branch master recebendo work

> desenho descartando o commit D e fazendo o commit D'

> http://www.vidageek.net/2009/07/06/git-workflow/

* falar da briga merge x rebase




### 2.2	EXERCÍCIO	-	CRIANDO	NOSSAS	BRANCHES

## 2.3 - Começando a trabalhar no sistema

* revisada geral em @Controller, @Autowired, @Repository, @PersistenceContext
* Modelar sessão com data -- Horario, Sala, Filme
* explicar esquema de datas
* explicar o @Entity, @ManyToOne
* explicar o Controller

``` java
//redirecionando para sessao.jsp

@GetMapping("/admin/sessao")
public	ModelAndView	form(@RequestParam("salaId")	Integer	salaId)	{
    ModelAndView	modelAndView	=	new	ModelAndView("sessao/sessao");

    modelAndView.addObject("sala",	salaDao.findOne(salaId));
    modelAndView.addObject("filmes",	filmeDao.findAll());

    return	modelAndView;
}
```
* Explicar o GetMapping -- apenas para requisicoes GetMapping
* injecoes de Dependencia dos DAO

* Criando **class SessaoForm** com os Ids

* persistindo, explicar o toSessao(), POST (nao indepotente)
* @Transactional
* redirecionar para as sessoes da sala **lista sessoes**
* validação básica **result.hasErros()**

``` java
@PostMapping(value	=	"/admin/sessao")
@Transactional
public	ModelAndView	salva(@Valid	SessaoForm	form)	{

    ModelAndView	modelAndView	=	new	ModelAndView("redirect:/sala/"+form.getSalaId()+"/sessoes");
    Sessao	sessao	=	form.toSessao(salaDao,	filmeDao);
    sessaoDao.save(sessao);
    return	modelAndView;
}
```

### 2.4	EXERCÍCIO	-	ADICIONANDO	A	SESSÃO	AO	SISTEMA


## 2.5	ANALISANDO	A	REGRA	DE	NEGÓCIO

* Como saber se essa sessão já não existe? **class GerenciadorDeSessao**
*
