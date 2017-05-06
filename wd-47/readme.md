# Curso WD 47

# Capitulo 1

> http://blog.caelum.com.br/desenhando-a-logo-da-caelum-com-css/

> http://blog.caelum.com.br/css-menos-sofrido-com-sass/

> http://blog.caelum.com.br/css-facil-flexivel-e-dinamico-com-less/


* complexo mundo do front-end
* explicação CEEP - clicar no layout
* Site otimizado para celulares
* TODO list
* falar do MDN
* falar do w3schools




# Capitulo 2 - Introdução HTML



* DOCTYPE -- ultima versao estavel
* header
* h1
* emmet.io
	* html:5 + tab
	* ul#lista>li.item{Item $}*6
	* header>h1+button*2

> http://docs.emmet.io/cheat-sheet/

## **exercício - iniciando o projeto com emmet**


* inspect element - pick color -- site caelum
* poderiamos colocar no html, mas não
* estilo.css
    * cabecalho
        * h1 --> background-color
* background: #E8E8E8; no body --> cinzinha no fundo
* como remover os espaçamentos? Olha que margem tosca!!
    * RESET.css == margin firefox X chrome
        * como tirar a margerm de todos os elementos?
        * criar o css/reset.css

> http://meyerweb.com/eric/tools/css/reset/

> http://blog.caelum.com.br/seu-codigo-css-pode-ser-mais-limpo-flexivel-e-reaproveitavel/



## **exercício - preparando terreno para os cartões**

* importar o css link<tab>

``` html
   <h1 class="cabecalho">
    ceep
   </h1>
```
``` css
  .cabecalho {
    background: #0082c7;
  }
  .body {
    background: #E8E8E8;
  }
  *{
    margin: 0;
    padding: 0;
  }
```
* O título ficou muito grudado na esquerda. Vamos colocar um espaço para
	corrigir isso. Acrescente em **estilos.css**:

	``` css
      .cabecalho {
        padding: 16px;
      }
   ```

> blog caelum browser sync


## **exercício - cartões e o container**

* montando cartões de um jeito fácil
    * section>div.cartao*5>p.cartao-conteudo>lorem (curso)
    * section>ol>li*5>p.cartao-conteudo>lorem40 (alura)
        * retirando o list style
* falar do lorem40
* falar já do margin e padding
	* 16px e 16px

* vamos colocar um estilo maneiro

	``` css
      .cartao {
        background: #EBEF40;
        margin: 16px;
        padding: 16px;
      }
	```



* vamos testar no mobile e no desktop
* devtools, celular, rede, debug remoto
* no celular fica uma merda... tela pequena com resolução alta

## Design responsivo

* view-port (meta:vp) -- apaga o resto
	* espaço disponível em px
  * pega o site responsivo
  * será que ele está realmente funcionando no celular?
  * dizer para o disposito móvel que o site está adaptado pra ela
  * <meta name="viewport" content="width=device-width">
  * A propriedade initial-scale controla o nível de amplificação
  quando a página é carregada pela primeira vez.
  As propriedades maximum-scale, minimum-scale,
  e user-scalable controlam a permissão
  para o usuário efetuar aumento ou diminuição da página.

**The viewport is the user's visible area of a web page.**

**Then, when we started surfing the internet using tablets
and mobile phones, fixed size web pages were too large to fit the viewport.
To fix this, browsers on those devices scaled down the entire
web page to fit the screen.**

> https://www.w3schools.com/css/css_rwd_viewport.asp

* mostrar o chrome mobile mode


* Media Types
	* print, screen, projection, speench
	* <link media="screen"/>


* falar sobre media query
* * bostonglobe.com
  * primeiro site responsivo
* mesmo site, mesmo endereço, mesma url

* mobile específico x site responsivo
* progressive webapps
* o que é mobile? rede? touch? praça? tamanho de tela
  * nao existe mobile!!
* layout fluido?
  * 960px? 470 + 470?
* precisamos de medidas flexíveis
  * porcentagens  + proporções
* Como funciona as porcentagens?
    * body> main width: 90% > section 50%
    * aqui é sempre com relação ao pai
    * e o font-size.. e com relação ao que?
      * ao font-size do elemento pai: do body o default é 16px;
      * pode usar em 1.25em - 120% == 1.20em
* como limitar até onde o site fica responsivo?
  * max-width:1200px;
  * margin: 0 auto centralizado
* min-width para nao ficar tao apertado
  * display: inline-block;
  * min-width: 200px;
* como lidar com imagens?
  * width: 100% -- estoura tamanho maximo
  * max-width


* porcentagens resolve apenas parte do problema
  * telas muito apertadas?
    * media-query -- layout condicional
    * baseado nos media types -- screen, print
    * @media (min-width: 1200px;)
      * device-width: resolução nativa da tela inteira
      * width: tamanho da janela do navegador
    * como chegar nos valores?

      > http://getbootstrap.com/css/#grid

    * media query mobile first - min-width ( float default none)




## **exercício - devtoools e o modo responsivo**

* inserir view port


*.container {
    padding: 0 10%;
  }

* vamos aplicar o container no cabecalho tbm
* vamos retirar o padding do cabeçalho pq ele nao faz mais sentido
* como esta no mobile e como esta nas telas grandes?
	* cmo deveria ficar?


<hr/>



* mobile first -- aproveitar o default do browser. Div é block por exemplo

> http://blog.caelum.com.br/seu-codigo-css-pode-ser-mais-limpo-flexivel-e-reaproveitavel/

* Progressive Enhancement
* .card --> explicar os diplays
* padrão do li é block

> há vários displays:
>
> inline (nao respeita top, down),
>
> inline-block (respeita top, bottom, margin),
>
> block, flex
>
> http://www.w3schools.com/cssref/pr_class_display.asp

> http://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_flexline


* colocar 7 divs
* aumentar o container para 550px;
* fazer primeiro display block no cartao
* depois fazer inline -- ver que ele não obedece width
	* fazer inline-block no card -- vai ficar show
	* mas **sobrou alguns espaços**
* depois usa display flex no container - vai ficar tudo apertado
* usa flex-wrap
* ficou a mesma coisa do inline-block neh???
* usa flex-grow no card


```css
.flex-container {
	width: 550px;
	background-color: lightgrey;
	display: flex;
	flex-wrap: wrap;

}

.flex-item {
	background-color: cornflowerblue;
	width: 100px;
	height: 100px;
	margin: 10px;
	flex-grow: 1;
}

```



motivação: Precisamos alinhar o button à direta! Mas como agrupá-los?


* Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based). While those work well for pages, they lack flexibility (no pun intended) to support large or complex applications (especially when it comes to orientation changing, resizing, stretching, shrinking, etc.).



* os cartões ainda estão ocupando a linha toda.
* display: inline-block;
* vamos definir width para os cartões
* width: 190px;

```css
.cartao{

	display: inline-block;
	width: 190px;

}
```

* Mas os cartões estão descentralizados, vai colocando da esquerda pra direita
* * vamos alinhar os cartões
	* text-align: center; no mural
	* mas o texto fica zuado
	* text-align: left; no card


* precisamos alinhar os cartões
* O flexbox é um tipo de display pensado para dizer como os filhos de um elemento devem se posicionar dentro dele, como um conjunto, e ele é responsável em fazer os cálculos necessários.
* section class mural

```css
.mural{
	display: flex
}
```

* Nesse caso, ele redimensionou todo mundo pra caber em uma única linha.
*  que ele deve manter o tamanho original e passar os elementos que não couberem para a linha de baixo. Fazemos isso com a propriedade
* **flex-wrap**
* podemos pedir pra ele: se tiver espaço, cresça!
* **flex-grow** no card 1
	* distribuir igual para todos
* **flex-basis** tamanho base

> https://css-tricks.com/snippets/css/a-guide-to-flexbox/



```css

@media (min-width: 560px){

	.cartao {
		width: 190px;
		display: inline-block;
	}
}
```
* Nossos cartões não estão respeitando o tamanho de 190px

 	* .cartao {
    box-sizing: border-box;
  }

* **box-sizing** diz ao browser como o width e height devem se comportar
* padrão `box-sizing: content-box`


* QUal tamanho que está o cartão? 190px?


> content-box o que indica que o tamanho dele é definido pelo seu conteúdo apenas.
Mas podemos trocar por box-sizing:

> border-box que indica que o tamanho agora levará em conta até a borda – ou seja, o width será a soma do conteúdo com a borda e o padding.

> entrar no w3schools foi legal


## **exercício - cartões e os layouts responsivos**

* vamos criar um mural para envolver os cartões
* ###atom-wrap-in-tag - alt+shfit+w
	* colocar os cartoes dentro do mural
* como alinhar? beautify editor - alt+control+b


### resumão do capítulo
* cartões ok no mobile
* adaptação para desktop usando inline-block
* flexbox css 3 para ocupar e alinhar
* mobile first
* testando em vários dispositivos com Browser Sync

<hr/>

# Capítulo 3 Funcionalidades e JavaScript

* falar um pouco sobre css selectors

* css div p{
  //seleciona todos os filhos de div
}


* css div + p{
  todos os p imediatamente após as DIV's
}

* vamos mudar o layout com linhas e blocos

	> modificador -- css guidelines

* antes usava flex:wrap, e vamos usar flex-direction para row
* altera o significado do flex-basis
	* O `flex-basis` refere-se sempre à dimensão que está no mesmo sentido do `flex-direction`
	* .mural {
		flex-direction: column;
	}

	.cartao {
		flex-basis: 190px;
		flex-grow: 1;
	}
* flex-basis refere-se à altura do cartão agora

* Para que o cartão tenha a altura ajustada dependendo do tamanho do seu conteúdo e
não de um número fixo de pixels, podemos alterá-lo da seguinte forma:

``` css
.cartao {
    flex-basis: auto;
    width: auto;
}
```



* ficaria assim

``` html
	<button id="botaoMudaLayout">Muda Layout</button>
	<section class="mural">
		<div class="cartao"></div>
		<div class="cartao"></div>
	</section>
```

``` css
	#botaoMudaLayout:active + .mural {
		flex-direction: column;
	}

	#botaoMudaLayout:active + .mural .cartao {
		flex-basis: auto;
		width: auto;
		display: block;
	}
```

* muitos problemas aqui!!  e se eu mudasse o mural de posição?






* Introdução ao JavaScript

> http://blog.caelum.com.br/javascript-entenda-a-nova-especificacao-de-classes-do-harmony-es6/

> https://imasters.com.br/front-end/javascript/o-ecmascript-6-e-o-futuro-do-javascript/?trace=1519021197&source=category-archive

> https://www.thoughtworks.com/pt/radar/languages-and-frameworks

> http://blog.caelum.com.br/logging-debugging-profiling-de-javascript-e-muito-mais-com-o-firebug/

> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/A_re-introduction_to_JavaScript

* explicar o que é dom
* explicar que daria para "alterar" por css
botaoMudaLayout:active + .mural {
		flex-direction: column;
	}
* mudanças permanentes com JavaScript
* Você pode pedir para os alunos imprimirem `document` no console. Ele lembrará a
estrutura do página que estamos exibindo.
* JSON
* BOM (**B**rowser **O**bject **M**odel). --> estrutura do próprio navegador
	* Podemos acessá-lo através da propriedade **window**.

	* `alert` e `setTimeout`, e as variávies  `console` e até mesmo


* console.log
* alert
* 2+2
* typeof 2
* var idade
* typeof "rafa"
* if's
* == x ===
* if(check)
* function calcularAnoDeNascimento()
* JSON
* document
* window
* querySelector
* textContent, id
* querySelectorAll
*  0.3 + 0.3 + 0.3
* Map, Set, Array

## **exercício - Manipulando DOM**

<hr/>

## Desacoplando o JavaScript

* vamos criar mural--linhas
* não indicam a criação de componentes novos
*
.mural--linhas {
		flex-direction: column;
	}

	.mural--linhas .cartao {
		flex-direction: auto;
		width: auto;
		display: block;
	}
* testar com eles adicionar e remover o modificador
* jogando o button junto com o h1 dentro de um header
* header>h1+button*2

* document.querySelector(".mural").classList.add("mural--linhas")

``` javascript
function mudaLayout(){
	document.querySelector(".mural")
		.classList.toggle("mural--linhas");
}
```

	Agora adicione a chamada dessa função na propriedade `onclick` do botão:

``` html
<button id="mudaLayout" onclick="mudaLayout()" >Linhas</button>
```



* contains, add, remove, toggle

* button id="mudaLayout" Linhas/button>
* button id="mudaLayout" onclick="alerta()" /button>

* aparecer somente para celular
* h1 é block



* button id="mudaLayout" onclick="mudaLayout()"
* h1 deve ser display inline-block
* além disso, o button deve ser um float right
* mas copia uns arquivos ai que vao te ajudar
* * dando um reset nos links
    * cor deve vir do pai -> color: inhreit, text-decoration

* mais ainda não está alinhado com o título!!!
    * nav é block!, mas o h1 é inline
        * float right

        >	css float: http://www.w3schools.com/css/css_float.asp
        >
        > wrap text around images.
        Elements after a floating element will flow around it. To avoid this, use the clear property.

        > clear

        > right

        > left





* alinhando/centralizando texto --- padding nos lados
    * .header-button:first-child
        * margin-right: 15px

* vamos espaçar os buttons


## exercício - Alterando visualização dos cartões com JS 
<hr/>

## JavaScript onde?

> http://blog.caelum.com.br/organize-seu-codigo-javascript-de-maneira-facil/
* vamos colocar o JS no seu devido lugar


* Mas html devia conter apenas conteúdo, e não lógica como fizemos

``` javascript
document.querySelector("#mudaLayout").addEventListener("click", function(){

	//Pega o elemento com a class="mural"
	var mural = document.querySelector(".mural");

	//Tira ou coloca a classe
	mural.classList.toggle("mural--linhas");

	//Muda o texto do botão
	if (mural.classList.contains("mural--linhas")){
		this.textContent = "Blocos";
	} else {
		this.textContent = "Linhas";
	}
});
```



* boa prática JS sempre no final
* tem que abrir e fechar a tag script

> http://stackoverflow.com/questions/69913/why-dont-self-closing-script-tags-work

## exercício - Colocando JS no devido lugar

<hr/>

### Ounvindo eventos em vários elementos

* removendo os cartões
* * nav>ul>li>a acima do <p> parágrafo
* adicionando menu de cores nos cartoes
    * .card-colors_colorFirst
* retirando o texto
    * text-indent -999px ou simplesmente nao coloca texto
* deixando arredondado e com borda rgba
    * border-radius 50%
* display inline-block

	* aqui da mostrar o inline não respeita o texto

* descolocando ele pra cima
    * colocar position **absolute**: top -16px
        * deu merda pq ele está fazendo com relação à página inteira e não com relação ao pai
    * mudamos o pai para position **relative**
        * agora o filho respeita o pai

> static por default, não são afetados por top, bottom
>
> relative
>
> fixed: relative to viewport -- sempre fica no mesmo lugar
>
> **absolute**: posicionado relativamento ao seu pai

> entrar com os alunos aqui
> http://www.w3schools.com/css/tryit.asp?filename=trycss_position_absolute


* boas práticas $ (elementos do html)
* document.querySelector | selectorAll
* $cardColors[0].addEventListener('click'
    * primeiro faz somente no primeiro elemento
    * fazer control c + v 16 vezes?
    * $cardColors.forEach(function(elemento, contador)



## excluir o cartão - Como descobrir qual foi clicado?
* li.card-delete>a
* mudar card-colors para card-options
* card_delete
* background-image: url('../../img/remove.png');
* background-size: 80%;
* background-repeat: no-repeat;
* fazer o if classList contains card_delete
* this.parentNode.parentNode.parentNode.remove();

``` javascript
var $card = document.querySelector('.card');
debugger;
console.log($card);
```


* removendo com transitions


``` css
.cartao--some {
	opacity: 0;
	transition: opacity 0.3s linear;
}
```

> http://www.w3schools.com/css/css3_transitions.asp

> duas coisas:
>
> the CSS property you want to add an effect to
>
> the duration of the effect
>linear - velocidade constante na animação;
>ease - redução gradual na velocidade da animação;
>ease-in - aumento gradual na velocidade da animação;
>ease-in-out - aumento gradual, depois redução gradual na velocidade da animação;
>cubic-bezier(x1,y1,x2,y2) - curva de velocidade para animação customizada (avançado);

```html
<div class="cartao">
	<div class="opcoesDoCartao">
		<button class="opcoesDoCartao-remove">Remover</button>
	</div>
	<p class="cartao-conteudo">
		Lorem...
	</p>
</div>
```


> aqui é interessante fazer um gráfico de árvore

* parentNode - Tag pai do elemento
* previousSibling - Tag irmã que veio antes do elemento
* nextSibling - Tag irmã que veio depois do elemento
* childNodes - Lista com todos os nós filhos
* firstChild - Primeiro nó filho do elemento
* lastChild - Último nó filho do elemento

```javascript
var botoes = document.querySelectorAll(".opcoesDoCartao-remove");

for(var i = 0; i < botoes.length; i++){
	botoes[i].addEventListener("click", removeCartao);
}
function removeCartao(){
	var botaoRemove = this;
	this.remove() //não funciona
	this.parentNode.parentNode.remove(); //aí sim funciona .... mas
}
```
> Entendendo o this -- http://blog.caelum.com.br/as-multiplas-personalidades-do-this-em-javascript/

> Exemplo do entendendo o **this**

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


* Se em algum momento decidirmos não colocar o botão de remoção dentro da
`<div class="opcoesDoCartao">`, nossa lógica de remoção para de funcionar.
* link para qual cartao!! href="#cartao_1"
* botao.href // não rola!! getAttribute
* mas semanticamente está errado, deveria estar no `<a>`
* dataset api
* data-ref

* usar o Control + D para colocar ID nos cartões

```html
<div class="cartao" id="cartao_1">
<button class="opcoesDoCartao-remove" data-ref="cartao_1">Remover</button>
```


* Entendendo o setTimeout

* vamos usar o css3 transitions
* **problema** No caso, nossa transição de .2s aplicada na classe `cartao--some` não será
visível, já que, logo após a adição da classe, o cartão é removido.
* vamos agendar uma função

``` javascript
function removeCartao(){
	var botaoRemove = this;
	var seletorCartao = "#cartao_" + botaoRemove.dataset.ref;
	var cartao = document.querySelector(seletorCartao);

	cartao.classList.add("cartao--some");

	setTimeout(function(){
		cartao.remove()
	}, 170);
}
```

## Exercício: Removendo cartões com Data-Attributes




# Capítulo 4 - JQuery

> http://blog.caelum.com.br/boas-praticas-com-javascript-e-jquery-codigo-nao-obstrusivo/

* Concorrentes
	* Mootools, Dojo, Underscore

## formulário para adiconar novos TODO's

> hipsters mundo encantado do JavaScript

* section>form>textarea+input[type="submit" value="Salvar"]
* input:submit.novoCartao-salvar <tab>
* criar newCard, newCard-content, newCard-action
* quando o mouse estiver houver, deve aumentar o tamanho
	* .newCard-content{
  width: 560px;
  height: 24px;
}

* padding nos forms
* como centralizar o form?
* margin-right e margin-left auto no conteúdo
* margin-right e margin-left auto no button
	* pq nao funcionou? por causa do display!! tem que ser block
* mas a fonte do placeholder e do button estão zuadas!!
	* apesar de termos colocado no body, ele não respeita
* posso informar no body o textarea tbm body, textarea
	* ou posso falar para o text area respeitar o pai
		* textarea{
  font-family: inherit;
}

```javascript
$newCardForm[0].addEventListener('submit', function(e){

	// explicar o preventDefault
	e.preventDefault();

	var $newCardContent = document.querySelector('.newCard-content');

	if(!$newCardContent.value){

		if(document.querySelector('.error')){

			var $card = document.querySelector('.card');
			$newCard = $card.cloneNode(true);

			//ou

			newCardContent = document.createElement('p')
			newCard = document.createElement('div')
			newCard.appendChild(newCardContent);


			$newCard.querySelector('.cartao-conteudo').textContent = $newCardContent.value;
			document.querySelector('.wrap-card').insertBefore($newCard, $card);
	}

	//explicar o formReset
	$newCardForm[0].reset();
});
```

* poderia ter clonado uma estrutura ja existente


## Motivação JQUery


* Hello world com JQuery
* sem manipulação direta do DOM
var botao = document.querySelector("#mudaLayout");

botao.textContent = "Blocos";

var botao = $("#mudaLayout");

botao.text("Blocos");

* text x val
* A função val() é utilizada para obter e
alterar o valor de elementos como input, select e textarea.

* querySelector incompatível, addEventListener (atachEvent), textContent (innerText)
* Bibliotecas JS: prototype, mootools, YUI, DOJO, ExtJS, JQuery

> fala um pouco sobre o Angular, Ember e Blackout aqui

* sempre executar como função anônima


* jQuery espera todos os elementos serem carregados


``` javascript
$(function() {
	var jqBotao = $("#botaoaviso");
	jqBotao.text("novo texto");
});
```

A forma acima é um atalho para a função `ready`:

``` javascript
$(document).ready(function() {
	var jqBotao = $("#botaoaviso");
	jqBotao.text("novo texto");
});
```
desnecessário se colocar tag de script ao final

## adicionando novo cartão

```javascript
$(".novoCartao").submit(function(event){

	//impede que a página recarregue
	event.preventDefault();

	//pega o que o usuário digitou
	var campoConteudo = $(".novoCartao-conteudo");
	var conteudo = campoConteudo.val().trim();

	//cria os elementos do cartão e adiciona no DOM
	if (conteudo){
		var conteudoTag = $("<p>").addClass("cartao-conteudo")
									.text(conteudo);

		$("<div>").addClass("cartao")
					.append(conteudoTag)
					.prependTo(".mural");
	}

	//apaga o conteúdo do textarea
	campoConteudo.val('');
});
```

* pai.append(filho)
* pai.prepend(filho)
* filho.appendTo(pai)
* filho. prependTo(pai)
* next, prev, parent, parents
* insertAfter() -- irmao



* posso ouvir vários eventos

```javascript
$("button").on("click mouseover", function(event) {
	alert("Executou");
	event.preventDefault();
});
```

* encadeamento
```javascript
$(".opecoesDoCartao-remove").text("Remover").click(function(event) {
  // seu código
});
```

* CSS
Podemos alterar o estilo de elementos dinamicamente com jQuery através de sua função **css**:

``` javascript
$(".mural").css("flex-direction", "column").css("background-color", "black");
```


* addClass e removeClass
Como no JavaScript puro, o ideal é deixarmos o CSS no seu 'quadrado', facilitando sua manutenção. Podemos adicionar e remover classes usando jQuery com suas funções **addClass** e **removeClass** respectivamente:

``` javascript
$(".aviso").addClass("invisivel");
$(".aviso").removeClass("invisivel");
```


### adicionando botão de remover no cartão recém criado

```javascript
//cria os elementos do cartão e adiciona no DOM
if(conteudo){

	//cria o botão de remover
	var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
									.text("Remover")
									.click(removeCartao);
	//cria a div de opcoes
	var opcoes = $("<div>").addClass("opcoesDoCartao")
							.append(botaoRemove);

	var conteudoTag = $("<p>").addClass("cartao-conteudo")
								.append(conteudo);

	//acrescenta o append para colocar a div opcoes no cartão
	$("<div>").addClass("cartao")
				.append(opcoes)
				.append(conteudoTag)
				.prependTo(".mural");
}
```

* remover não funciona, precisa de ID
* como vai ficar o ID do Cartão?
* Contador de quantos cartões existem
* $(".cartao").length + 1


```javascript
if(conteudo){

	//soma um no contador
	contador++;

	//cria atributo data-ref no botaoRemove
	var botaoRemove = $("<button>").attr("data-ref", contador)

	//cria atributo id no cartao
	$("<div>").attr("id","cartao_" + contador);
}
```
## **Exercício:** Adicionando cartões com jQuery


# Capítulo 5 - expressões regulares


* quebra de linha não está rolando
* resença de caracteres "\n" e trocá-los por uma tag
`<br>`.
* mas só substitui o primeiro \n
* var frase = "Quanto é 10 mais 20?";
var padrao = /\d/;
* var frase = "Quanto é 10 mais 20?";
var padrao = /\d/g;

padrao.test(frase);

>/g global

* ainda não está legal
* var ocorrencias = frase.match(/\d+/g);

> http://stackoverflow.com/questions/890686/should-i-use-d-or-0-9-to-match-digits-in-a-perl-regex


```javascript
// esse Event Listener já existe, fizemos ele no exercício anterior
$(".novoCartao").submit(function(event){
	var conteudo = campoConteudo.val().trim()
										.replace(/\n/g, "<br>");
});
```

## **Exercício:** Cartões mais poderosos com Expressões Regulares
<hr/>

* Medidas relativas - em

``` html
<html>
  <body>
    <main style="font-size: 1.5em">
       <h1 style="font-size: 2em">Titulo</h1>
       <p style="font-size: 0.75em">Texto.</p>
    </main>
  </body>
</html>
```

..acaba sendo equivalente a:

``` html
<html style="font-size: 16px">
  <body style="font-size: 16px">
    <main style="font-size: 24px">
       <h1 style="font-size: 48px">Titulo</h1>
       <p style="font-size: 18px">Texto.</p>
    </main>
  </body>
</html>
```

* Conforme o tamanho da tela aumenta, aumentamos o valor do `em` base na tag html

* O `rem` é uma medida nova parecida.
A diferença é que a conta não leva em consideração todos os pais,
mas apenas a raiz, o `<html>`


``` css
@media (min-width: 560px){

	.cartao--textoPequeno {
		font-size: 1em;
		width: 11em;
		flex-basis: 11em;

	}

	.cartao--textoMedio {
		font-size: 1.5em;
		width: 9em;
		flex-basis: 9em;
	}

	.cartao--textoGrande {
		font-size: 2em;
		width: 6em;
		flex-basis: 6em;
	}
}
```
> http://blog.caelum.com.br/porque-usar-em-no-seu-css-hoje-em-dia/

* adicionar no cartão css

* a altura dos cartão está sendo esticada

* align-items: flex-start;
* Além de `flex-start`, temos `flex-end`, `center` e outros. Essa imagem ajuda
a entender:
* explicar o foreach

> fazer o align-itens no w3schools

> https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_align-items


* decidindo o tipo de cartão
* ver quantas quebras de linha
* ver total de letras
* descobrir o tamanho da maior palavra
* definir o tipo do cartao


* Explicação do forEach
> exemplo forEach

``` javascript
var paises = ['brasil', 'eua'];
paises.forEach(p => console.log('p: '+ p));

```

``` javascript


//ao criar novo cartão
var tipoCartao = decideTipoCartao(conteudo);
//...

function decideTipoCartao(conteudo){
	var quebras = conteudo.split("<br>").length;

	var totalDeLetras = conteudo.replace(/<br>/g, " ").length;

	var ultimoMaior = "";
	conteudo.replace(/<br>/g, " ")
			.split(" ")
			.forEach(function(palavra){
				if (palavra.length > ultimoMaior.length) {
					ultimoMaior = palavra;
				}
			});
	var tamMaior = ultimoMaior.length;

	//no mínimo, todo cartão tem o texto pequeno
	var tipoCartao = "cartao--textoPequeno";

	if (tamMaior < 9 && quebras < 5 && totalDeLetras < 55) {
		tipoCartao = "cartao--textoGrande";
	} else if (tamMaior < 12 && quebras < 6 && totalDeLetras < 75) {
		tipoCartao = "cartao--textoMedio";
	}

	return tipoCartao;
}
```


## **Exercício:** Melhorando a vizualização dos cartões


* outras funções do JQuery

	* filter
	* hide / show
	* animate


* buscar por um termo digitado no cartao

``` javascript
	//conteúdo de um cartão
	var conteudo = "Conteudo do meu cartão"

	//termo que o usuário digitou
	var termoBuscado = "conteudo"

	var temPalavraConteudo = conteudo.match(/termoBuscado/i)
```

	* não funciona!! buscar por 'termoBuscado'

* precisamos parametrizar

``` javascript
var texto = "Conteudo do meu cartão";
var termoBuscado = "conteudo";

var regex = new RegExp(termoBuscado, "i");

var temPalavraConteudo = texto.match(regex);
```
	* i == case insensitve

## **Exercício:** Buscando cartões com jQuery

``` html
 <input type="search" id="busca" placeholder="busca" class="opcoesDaPagina-opcao">
```
``` javascript
$("#busca").on("input", function(){
	//guarda o valor digitado, removendo espaços extras.
	var busca = $(this).val().trim();

	if(busca.length){

		//esconde todos os cartoes
		//filtra apenas os cartoes que tem o conteudo
		//mostra os cartoes

		$(".cartao").hide().filter(function(){
			return $(this).find(".cartao-conteudo")
							.text()
							.match(new RegExp(busca, "i"));
		}).show();
	}else{
		$(".cartao").show();
	}
});
```

# Capítulo 6 - Ajax


* mostrar a função load no w3schools

* chamada básica

``` javascript
$.ajax({
	url: "http://www.servidor.com/servico",
	success: function (data, textStatus, jqXHR) {
	// a resposta da requisição pode ser acessada pelo objeto "data"
	}
});
```

* passando parâmetros

``` javascript
$.ajax({
	url: "http://www.servidor.com/servico",
	data: {
	"busca": "evento caelum"
	},
	success: function (data, textStatus, jqXHR) {
	// callback
	}
});
```


* dataType: "xml",


* error
``` javascript
$.ajax( ......... ).fail(function(xhr){
	console.log("erro( " + xhr.status + "):" + xhr.responseText);
});
```



* JSON ==> objeto x texto


		Para os alunos entenderem que JSON é apenas texto, e ainda não é um objeto:

```javascript
var textoProduto = "{"preco": 100, "descricao": "Cardigan"}";
var objetoProduto = JSON.parse(textoProduto);

console.log(objetoProduto.preco);
console.log(objetoProduto.descricao);
```


> **Google Chrome e acesso a arquivos locais**
>
> O Google Chrome não permite requisições AJAX localmente por questões de segurança. Para permitir que uma página local chame outra utilizando AJAX no Chrome é necessário
> iniciar o navegador pela linha de comando passando parâmetros especiais:
>
> *Linux: google-chrome --allow-file-access-from-files
> *Mac: open /Applications/Google\ Chrome.app --args --allow-file-access-from-files





* getJSon

``` javascript
$.getJSON("http://www.servidor.com/servico", function(retorno) {

});
```



* colocando o button ?

``` html
	<button id="ajuda" class="opcoesDaPagina-opcao
	opcoesDaPagina-botao">?</button>
```

``` javascript
$("#ajuda").click(function(){
	$.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes",
		function(res){
			res.instrucoes.forEach(function(instrucao){
				adicionaCartao(instrucao.conteudo, instrucao.cor);
			});
		}
	);
});
```


## **exercício** Pegando instruções com Ajax em JSON

<hr/>



* Explicar o Same Origin Policy

	* access-controle-allow-origin


	* Mostrar o Network do F12
		* Method: o método da requisição (GET ou POST)
		* Status: código de resposta do servidor
		* Initiator: linha de código que iniciou a requisição
		* Size: quantidade de dados baixados
		* Time: tempo total desde a chamada até ela ser completada
		* Timeline: gráfico mais detalhado do tempo gasto
	* mostrar os headers


* Código para salvar cartoes

``` javascript
$("#sync").click(function(){

	var cartoes = [];

	//salvando os cartões
	$(".cartao").each(function(){
		var cartao= {};
		cartao.conteudo = $(this).find(".cartao-conteudo").html();
		cartoes.push(cartao);
	});

	//escolha seu nome de usuario aqui
	var mural = {
		usuario: "seu.email@exemplo.com.br"
		,cartoes: cartoes
	}

	$.ajax({
			url: "https://ceep.herokuapp.com/cartoes/salvar"
		,method: "POST"
		,data: mural
		,success: function(res){
			console.log(res.quantidade + " cartões salvos em "
			+ res.usuario);
		}
		,error: function(){
			console.log("Não foi possível salvar o mural");
		}
	});
});
```

## **exercício** Salvando os Cartões com AJAX

<hr/>

* nem sempr eo browser vai entender o HEADER allow-origin
* explicar o conceito de proxy e proxy reverso
* explicar JSONP - (JSON with Padding)

```javascript
qualquerFuncao({
	local: "Caelum",
	horaInicial: "19:00",
	horaFinal: "23:00"
})


$.getJSON("http://servidor.com.br/servico?callback=nomeFuncao",
	function(retorno) {});

var usuario = "seu.email@exemplo.com.br";

$.getJSON(
	"https://ceep.herokuapp.com/cartoes/carregar?callback=?",
	{usuario: usuario},
	function(res){
		var cartoes = res.cartoes;
		console.log(cartoes.length + " carregados em " + res.usuario);
		cartoes.forEach(function(cartao){
			adicionaCartao(cartao.conteudo);
		});
	}
);
```

## **Exercício** Carregando o mural quando a página carrega

# Capítulo 7 - Boas Práticas

> http://blog.caelum.com.br/conhecendo-o-operator-new-e-os-prototipos-no-javascript/

* escopo das variáveis
	* A linguagem JS só tem dois escopos possíveis: o global que vimos e o escopo de função. Ou a variável é acessível por todos, ou ela é uma variável local de função.

``` javascript
function executa() {
	var usuario = "seu.email@exemplo.com.br";
	$.getJSON(...);
}
```

* Claro que só criar a função não é suficiente. Afinal ela precisa ser chamada com `executa();` para rodar o código. Isso deixa escancarado outro problema: o nome da função é o nosso novo global.

* poderíamos deixá-la anônima para não dar conflitos

``` javascript
function() {
	var usuario = "seu.email@exemplo.com.br";
	$.getJSON(...);
}
```

> explicar o porquê devemos colocar var
			
	criar o executa sem declarar o var

* Como vamos chamá-la?
* podemos chamá-la logo depois q ela foi criada - IIFE

> http://benalman.com/news/2010/11/immediately-invoked-function-expression/


``` javascript
(function() {
	var usuario = "seu.email@exemplo.com.br";
	$.getJSON(...);
})();
```


## **Exercício:** Protegendo o nome de usuário com uma IIFE

<hr/>

### Organização de arquivos

* principal.js esta todo zuado
* funcionalidades atuais
	* sincronizacao.js
	* mudaLayout.js
	* novoCartao.js
	* ajuda.js
	* adicionaCartao.js


* Isso nem sempre é verdade, mas em geral é uma boa diminuir sim, em especial
se usarmos o HTTP/1.1 clássico.

* Falar de spdy

* Falar do HTTP 2.0

> http://blog.caelum.com.br/o-que-muda-nas-praticas-de-otimizacoes-de-performance-na-web-com-o-http-2-0-e-o-spdy/
>
> http://blog.caelum.com.br/as-fantasticas-novidades-do-http-2-0-e-do-spdy/
>
> http://blog.caelum.com.br/http2-server-push-na-pratica/



## **Exercício:** Organizando nosso código em arquivos e IIFE's



* Quando queremos uma IIFE para encapsular tudo mas precisamos expor alguma coisa para as pessoas chamarem em outras partes do programa?

* Módulos em JavaScript.

``` javascript
(function(){
	var usuario = "seu.email@exemplo.com.br";

	$.getJSON(...);

	function descartaUsuario() {
		usuario = undefined;
	}

})()
```

* A nova função descartaUsuario faz exatamente o que queremos. Mas ela está dentro da IIFE. Isso quer dizer que só lá dentro vamos enxergá-la. Apenas código da IIFE pode chamar a função nova.


* retornando o que vc quer expor

``` javascript
var descartaUsuario = (function(){
	var usuario = "seu.email@exemplo.com.br";

	$.getJSON(...);

	function descartaUsuario() {
		usuario = undefined;
	}

	return descartaUsuario;
})();
```

*  Essa variável (por acaso com mesmo nome, mas não precisaria) está no escopo global. Isso quer dizer que qualquer parte do programa pode chamá-la.
	* **expor aquilo que realmente é necessário**


* vamos encapsular a funcionalidade de adicionar cartao

``` javascript
var adicionaCartao = (function(){

	function removeCartao(conteudo){
		//... aqui, código que fizemos em aulas anteriores
	}

	function decideTipoCartao(conteudo){
		//... aqui, código que fizemos em aulas anteriores
	}

	var contador = 0;

	return function(conteudo, cor){
		contador++;

		var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
										.attr("data-ref", contador)
									.text("Remover")
									.click(removeCartao);

		var opcoes = $("<div>").addClass("opcoesDoCartao")
								.append(botaoRemove);

		var tipoCartao = decideTipoCartao(conteudo);

		var conteudoTag = $("<p>").addClass("cartao-conteudo")
							.append(conteudo);

		$("<div>").attr("id","cartao_" + contador)
					.addClass("cartao")
					.addClass(tipoCartao)
					.append(opcoes)
					.append(conteudoTag)
					.css("background-color", cor)
					.prependTo(".mural");

	}

})();
```

## **Exercício:** Adição e criação de cartões com módulos


* Mas e se quisermos expor mais de uma função para o exterior? Como é tudo uma função, há apenas 1 retorno.

* Imagine que queremos mais comportamentos. Além de `descartaUsuario`, agora queremos
também um `atualizaDados` que faz uma chamada JSON para pegar dados mais atuais do usuário.

``` javascript
var ??? = (function(){
	var usuario = "seu.email@exemplo.com.br";

	$.getJSON(...);

	function descartaUsuario() {
		usuario = undefined;
	}

	function atualizaDados() {
		// chama JSON de usuário
	}

	return ???;
})();
```

### Agrupando funções num objeto

* Ao invés de devolver uma única função, podemos devolver um simples objeto JavaScript

``` javascript
var moduloUsuario = (function(){
	var usuario = "seu.email@exemplo.com.br";

	$.getJSON(...);

	function descartaUsuario() {
		usuario = undefined;
	}

	function atualizaDados() {
		// chama JSON de usuário
	}

	return {
		descarta: descartaUsuario,
		atualizaDados: atualizaDados
	};
})();
```


* Fazendo a controladora de cartões

``` javascript
var controladorDeCartoes = (function(){

	//... aqui, código de exercícios anteriores

	var contador = 0;

	function adicionaCartao(conteudo, cor){
		//... lógica do adicionaCartao
	}

	return {
		adicionaCartao: adicionaCartao
		,idUltimoCartao: function(){
			return contador;
		}
	}

})();


controladorDeCartoes.adicionaCartao(conteudo);
```

## **Exercício** Organizando nosso módulo com objetos

<hr/>

### Dependências com IIFE

* adicionaCartao is not defined. O que pode acontecer para o javascript falar pra gente que não existe uma função chamada adicionaCartao?


* a IIFE do novoCartao.js depende de um objeto externo, o objeto controladorDeCartao.


```javascript
(function(controlador){

$(".novoCartao").submit(function(event){

	var campoConteudo = $(".novoCartao-conteudo");

	var conteudo = campoConteudo.val()
					.trim()
					.replace(/\n/g, "<br>");

	if(conteudo){
		controlador.adicionaCartao(conteudo);
	}

	campoConteudo.val("");

	event.preventDefault();

});
})(controladorDeCartoes);
```


* Vantagens
	* A primeira é que podemos dar o nome que quisermos para a variável internamente, potencialmente deixando nosso código menos verboso.
	* A segunda é que no final da IIFE temos uma lista de dependências que ela precisa para funcionar.


### Uso do strict

* Vimos que o Javascript permite muita liberdade na hora de escrever nosso código. Muitas vezes, ao invés de dar algum erro, o javascript simplesmente tenta executar o que ele entendeu, mesmo que não seja o que queremos.
* Por isso, o ECMAScript 5 introduziu o modo estrito no JavaScript. Sua intenção é permitir que desenvolvedores escolham por uma "versão" do JavaScript na qual alguns dos erros mais comuns são tratados de maneira diferente.


As principais proibições deste modo são:


* declaração `with`
* omissão de var na declaração de variáveis
* objetos com propriedades duplicadas
* funções com parâmetros duplicados


``` javascript
(function(){
	"use strict";

	// código omitido

})();
```


		fazer este exemplo aí

```javascript
function teste(){
	user = "rafa";
};
user;
teste();
user; // criou global
```

* Dê uma olhadas em suas IIFE's identifique as dependências e passe elas como parâmetro. Além do `controladorDeCartoes` existe mais algum javascript que tem que ser lido antes dos nossos?


> http://blog.caelum.com.br/organize-seu-codigo-javascript-de-maneira-facil/
>
> http://blog.caelum.com.br/criacao-de-objetos-em-javascript/


## Exercício: Dependências com IIFE

## Exercício: JavaScript mais restrito com use strict

# Capítulo 8 - Eventos


* Podemos resolver esse problema fazendo ele sincronizar automaticamente toda vez que adicionamos um novo cartão.

* qualquer alteração que o usuário fizer é interessante já salvar no servidor para ele não perder a mudança.

* criaremos uma função sincroniza

* agora precisamos chamar ela de vários lugares
	* aqui já temos um problema que são vários lugares precisando chamar a mesma função

* Além disso, precisamos fazer outras coisas
	* que, além da sincronização, seja mostrado um spinner pro usuário, que o formulário de adição seja desabilitado e que um log seja feito. Onde adicionar esses comportamentos?

* vamos espalhar as chamadas dessas funções?
	* mostraSpinner();
	* desabilitaFormulario();
	* logDeSincronizacao();
	* sincroniza();

* Repare que já tivemos o trabalho de colocar cada lógica numa função separada, mas ainda temos que chamar todas elas em todos os lugares. Não é uma boa ideia e vamos esquecer alguma.


* Outra opção seria manter apenas a chamada ao sincroniza() e colocar toda as outras lógicas (spinner, formulário, log) dentro dela. Mas aí teremos uma grande função super complicada cheia de comportamento.


* programacao orientada a eventos


``` javascript

$(document).trigger("precisaSincronizar");

$(document).on("precisaSincronizar", function(event) {
// posso fazer o ajax
});

$(document).on("precisaSincronizar", function(event) {
// e eu posso fazer o spinner
});
```

> falar do meu artigo no blog da caelum sobre Observer Pattern
>
>http://blog.caelum.com.br/usando-o-padrao-observer-do-cdi-para-lidar-com-o-kafka/
>
>http://blog.caelum.com.br/diminua-suas-dependencias-com-os-eventos-do-cdi/


## Exercício: Melhorando a sincronização com Eventos Customizados

<hr/>

### ContentEditable

* eventos JS
* tabindex

## editar o cartão

* criar o card_edit
* reaproveitar o que for diferente em card_options
	* apaixar o selector de data-color
* this.parentNode.parentNode.nextElementSibling.setAttribute(contenteditable,true)
* focus();
* como tirar essa borda?
	* outline

	>entrar no mdn outline
* reset.css
* card-content
	* outline style
	* .cartao-conteudo{
  outline: 2px dashed rgba(255, 0, 0, 0.5);
}

* o problema é que agora essa linha fica sempre!! Como vamos evitar dela ficar aparecendo?
	* poderíamos fazer algo JavaScript?
		* add e remove class seria legal
	* mas por quê não deixar o CSS resolver?
	* .cartao-conteudo[contenteditable="true"]
* ainda temos um problema... o componente permance editado quando troco de cor!! deveria fazer isso?
	* this.parentNode.parentNode.nextElementSibling.setAttribute('contenteditable',false);
* agora e se eu clicar fora????? Deveria continuar editável?
*


## agora vamos esconder os wrap_options
* display none;
* poderíamos fazer via javascript
* 	elemento.addEventListener('mouseover', function() {
      alert('ok');
    });
* mas vamos resolver com css
* .card:hover .wrap-card-options{
  display: block;
}



## Exercício: Acrescentando a opção de edição do cartão


* Um padrão bem conhecido é o "debounce".

Ele é muito útil quando estamos interessados apenas no final da interação do usuário. Por exemplo: o usuário faz scroll mas quero executar algo apenas quando ele parar de fazer scroll. Ou o usuário está digitando algo e quero executar algo ao fim da digitação.


			``` javascript
				// evento que dispara muito
				window.onscroll = function() {
					setTimeout(function(){
						// lógica pesada
					}, 1000);
				}
			```

* mas ainda não resolvemos o problema.. ainda será chamada

			``` javascript
				var timer;

				// evento que dispara muito
				window.onscroll = function() {
					clearTimeout(timer);

					timer = setTimeout(function(){
						// lógica pesada
					}, 1000);
				}
			```

* Repare que guardamos o último timer na variável global timer. Antes de agendar o próximo timeout, removemos o anterior. Isso efetivamente deixa apenas um timer ativo por vez. E é o último que foi chamado.
* Efetivamente, o que fazemos é zerar o contador a cada vez que o evento é disparado. Assim, a lógica só será executada depois que o usuário parou de fazer aquela interação repetida.

## Exercício (opcional): Edição do cartão e o Debounce Pattern



* trocando as cores dos cartões
* Será que é necessário colocar um `event listener` em cada opção de cor?
Quantos `event listeners` teremos se nossa página tiver 20 caixas?

* borbulhando!!

				$(".lista").click(function(event){
					if(event.target.classList.contains("lista-trocaCor")){
						var itemDaLista = event.target
					}
				});


## Exercício: Delegação de eventos na troca de cores


# Capítlo 9 - Gulp

* falar de gulp, grunt, npm, node, artifactory,

* npm init
* npm install
* npm publish

# Capítulo 10 - SaSS













































## criando elemento no html - msg amigável
*  document.createElement
	* class error
	* insertBefore
*  como evitar dele ser criado várias vezes?
	* querySelector x querySelectorAll
	* if(!document.querySelector('.error')){
      var $error = document.createElement('span');
      $error.classList.add('error');
      $error.textContent = 'Preencha o campo acima!';
      $newCardForm[0].insertBefore($error, $newCardAction[0]);
    }
* quando ele começar a digitar, deveríamos retirar a mensagem de erro!!!
	* o change só é disparado no blur
	* focus?
	* check as we type

	> onchange occurs only when you blur the textbox

	>onkeyup & onkeypress doesn't always occur on text change

	>onkeydown occurs on text change (but cannot track cut & paste with mouse click)

	>onpaste & oncut occurs with keypress and even with the mouse right click.

* agora, como adicionamos vários eventos em JavaScript??? vamos para JQuery
* primeiro código

* $(".newCard-content").on('change keydown paste input', function(){
  if(this.value.length > 0){
    if($('.error')){
      $('.error').remove();
    }
  }
});

* mas pereceba que ele sempre está entrando no if!! vamos debuggar!
* if($('.error')[0])


## estilizando a mensagem de erro

* primeiro vamos resetar o form no submit
* ao colocar o estilo no error
	* text-align center, ele nao identa, pois span é inline
		* mudamos para block
	*colocar margin-top no button



## adicionando o TODO

* vamos clonar uma estrutura já existente
	* clone(true)
	*     var $card = document.querySelector('.card');
    $newCard = $card.cloneNode(true);
    $newCard.querySelector('.cartao-conteudo').textContent = $newCardContent.value;
    document.querySelector('.wrap-card').insertBefore($newCard, $card);



## Por quê o card não funciona?

* o evento é feito no momento que a página é carregada.. nao pega o novo cartao






## Clicando na bolinha para alterar a cor do cartão

* preciso chegar no pai
    * this.parentNode.parentNode.parentNode

	> aqui neste ponto é interessante debugar com eles, e ver o que tem no this
	>
	> child, sibling

* usando a api **DATASET**

		* motivação: Como guardar dados no DOM?
			* antigamente guardava no class
	*  data-color
   * [data-color="first"]
   * should only be used when no suitable HTML5 element or attribute exists.
   * Como pegar este valor?
   	* getAttribute?
   	* JQuery.data()
   	* dataset
			* $card.dataset.color = this.dataset.color;

	> https://www.sitepoint.com/use-html5-data-attributes/

* cursor: pointer

## feedback na bolinha selecionada

* this.classList.add('isActive');
* .card-colors.isActive{
  border-width: 4px;
}
* ao fazer isso, ele desloca todo mundo (está usando context-box
	* box-sizing: border-box;
* temos que remover as os botoes que estao com isActive
	* mas remover somente dos card-colors do item que foi selecionado
	*   for (var i = 0; i < this.parentNode.children.length; i++) {
          this.parentNode.children[i].classList.remove('isActive');
        }














## Opcionais

* Express
* Vue
* Testes com Jasmine, Karma, PhantomJS
* Hosting
* Ecmma Script
* Gulp, Grunt --> task runners