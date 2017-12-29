# Capítulo 1


possíveis erros: setDuration(Duration d)
%s na url

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


### exercício 1.3 - iniciando com o GIT

* melhorando o editor
* git config -l
* pq linha de comando?
* status, add, commit, log, reset, revert, deleted file, blame, show, --amend, checkout, push

### Refazendo as merdas

* usando o **git revert**
    * desfaz um commit fazendo um novo commit
* usando o **git reset**
    * retira o commit
    * git reset --hard #hash
    * **git log** para descobrir o hash
* voltando o arquivo para o estado original
    * **git checkout**



## Entendo os clientes Git'se
* GitLab, GItHUb, BItBucket

## 1.6 - Utilizando GitHub
* fazer o fork do projeto [fj22-ingressos](https://github.com/caelum/fj22-ingressos.git)
* entendendo o Readme - MarkDown


### exercício 1.5 - Criando conta no GItHub
* git remote add origin https://github.com/raphaellacerda/perfil.git



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
* fazer git stash

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

> Se	a	sessão	nova	A	começa	antes	de	uma	sessão	já	existente	B,	a	duração	do	filme	da	sessão	A
deve	acabar	antes	da	sessão	B	começar

> Se	a	sessão	nova	A	começa	depois	de	uma	sessão	já	existente	B,	a	duração	do	filme	da	sessão	B
deve	acabar	antes	da	sessão	A	começar

* substituindo forEach por stream do Java8
* Map para colletar os Booleans
* reduce para saber se em algum horario a sessão está inválida
* explicar o optional no caso de vazia

``` java
public	boolean	cabe(Sessao	sessaoAtual)	{
    Stream<Sessao>	stream	=	sessoesDaSala
                                    .stream();
    Stream<Boolean>	booleanStream	=	stream
                                    .map(sessaoExistente	->	horarioIsValido(sessaoExistente,	sessaoAtual));
    booleanStream.reduce(Boolean::logicalAnd)

    Optional<Boolean>	optionalCabe	=	booleanStream.reduce(Boolean::logicalAnd)
    return	optionalCabe.orElse(true);
}
```


## 2.6	TESTES	DE	UNIDADE

* Junit
* cenários de testes

``` java
@Test
public	void	deveAdicionarSeListaDaSessaoEstiverVazia(){
    List<Sessao>	sessoes	=	Collections.emptyList();
    GerenciadorDeSessao	gerenciador	=	new	GerenciadorDeSessao(sessoes);
    Filme	filme	=	new	Filme();
    filme.setDuracao(120);
    LocalTime	horario	=	LocalTime.parse("10:00:00");
    Sala	sala	=	new	Sala("");
    Sessao	sessao	=	new	Sessao(horario,	filme,	sala);
    boolean	cabe	=	gerenciador.cabe(sessao);

    //Assert
}
```


### 2.9	 EXERCÍCIO	 -	 GARANTINDO	 QUE	 A	 VALIDAÇÃO	 DE	 HORÁRIOS PARA	CADASTRAR	UMA	SESSÃO	ESTÁ	CORRETA

# Capítulo 3 - ADICIONANDO	PREÇO

## 3.1	MELHORANDO	A	MODELAGEM	DO	SISTEMA

> Nossa	regra	de	negócio	diz	que	cada	filme	deve	ter	seu	preço,	para	poder	ser	algo	dinâmico	e	rentável
para	 o	 cinema.

* colocar preco em filme --> Discutir BigDecimal
* preco no constructor

> 	cada	sala	deve	possuir	seu	preço

* Logo, preco da sessao = sala + filme

### 3.2	EXERCÍCIO	-	COLOCANDO	PREÇO	NA	SALA	E	FILME

## 3.3	APLICANDO	STRATEGY


* adicionando ingressos

* sessao + preco
* como lidar com os descontos?
* vamos colocar os If's?
* interface Desconto

### 3.4	EXERCÍCIO	-	CRIANDO	DESCONTOS	E	INGRESSO

# Capítulo 4 - MELHORANDO	A	USABILIDADE	DA APLICAÇÃO

## 4.1	DEFININDO	O	CATÁLOGO	DE	FILMES	E	A	TELA	DE	DETALHES

* filmes em cartaz

``` java
@GetMapping("/filme/{id}/detalhe")
public	ModelAndView	detalhes(@PathVariable("id")	Integer	id){
    ModelAndView	modelAndView	=	new	ModelAndView("/filme/detalhe");
    Filme	filme	=	filmeDao.findOne(id);
    List<Sessao>	sessoes	=	sessaoDao.buscaSessoesDoFilme(filme);
    modelAndView.addObject("sessoes",	sessoes);
    return	modelAndView;
}
```

### 4.2	 EXERCÍCIO	 -	 CRIANDO	 O	 CATÁLOGO	 DE	 FILMES	 E	 TELA	 DE DETALHES	DO	FILME	COM	SESSÕES	PARA	COMPRA

## 4.3	TRAZENDO	DADOS	REAIS	PARA	NOSSA	APLICAÇÃO

* consumindo rest


> http://www.omdbapi.com/?t=tropa+de+elite&apikey=plzBanMe

``` java

@Component
public	class	ImdbClient	{
    public	Optional<DetalhesDoFilme>	request(Filme	filme)	{
        RestTemplate	client	=	new	RestTemplate();
        String	url	=	//
        try	{
                        DetalhesDoFilme	detalhesDoFilme	=	client.getForObject(url,	DetalhesDoFilme.class);
                        return	Optional.of(detalhesDoFilme);
        }	catch	(RestClientException	e)	{
                        return	Optional.empty();
        }
    }
}
```

* log4j na aplicacao
* explicar os niveis de logs

### 4.4	EXERCÍCIO	-	CONSUMINDO	SERVIÇO	PARA	DETALHES	DO	FILME

# CAPÍTULO5 - INICIANDO	O	PROCESSO	DE	VENDA

##
