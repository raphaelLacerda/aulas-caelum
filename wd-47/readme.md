# Curso WD 47

# Capitulo 1

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

>http://meyerweb.com/eric/tools/css/reset/

* *{
    margin: 0;
    padding: 0;
}

* O título ficou muito grudado na esquerda. Vamos colocar um espaço para
	corrigir isso. Acrescente em **estilos.css**:
	
	``` css
      .cabecalho {
        padding: 16px;
      }
   ```   




## **exercício - preparando terreno para os cartões**

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
	

## **exercício - cartões e o container**

* vamos testar no mobile e no desktop
* devtools, celular, rede, debug remoto, browsersync
* no celular fica uma merda... tela pequena com resolução alta


## Design responsivo

* view-port (meta:vp) -- apaga o resto
	* espaço disponível em px 	
  * pega o site responsivo
  * será que ele está realmente funcionando no celular?
  * dizer para o disposito móvel que o site está adaptado pra ela
  * <meta name="viewport" content="width=device-width">
* mostrar o chrome mobile mode


* vamos criar um mural para envolver os cartões
* ###atom-wrap-in-tag - alt+shfit+w
	* colocar os cartoes dentro do mural 	
* como alinhar? beautify editor - alt+control+b

*.container {
    padding: 0 10%;
  }

* vamos aplicar o container no cabecalho tbm
* vamos retirar o padding do cabeçalho pq ele nao faz mais sentido
* como esta no mobile e como esta nas telas grandes?
	* cmo deveria ficar?	 



## **exercício - devtoools e o modo responsivo**



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




* mobile first
* Progressive Enhancement
* .card --> explicar os diplays
* padrão do li é block

> há vários displays: 
> 
> inline (nao respeita top, down), 
> 
> inline-block (respeita top, bottom, margin), 
> 
> block, flex --> http://www.w3schools.com/cssref/pr_class_display.asp

> http://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_flexline
> 
> colocar 7 divs
> 
> aumentar o container para 550px;
> 
> fazer primeiro display block no cartao
> 
> depois fazer inline -- ver que ele não obedece width
>
> fazer inline-block no card -- vai ficar show
	> mas **sobrou alguns espaços** 
>
> depois usa display flex no container - vai ficar tudo apertado
>
> usa flex-wrap
	> ficou a mesma coisa do inline-block neh???
	
> usa flex-grow no card 


			```
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


			`cartao{
				
				display: inline-block;
				width: 190px;
				
			}`
		

* Mas os cartões estão descentralizados, vai colocando da esquerda pra direita
* * vamos alinhar os cartões
	* text-align: center; no mural
	* mas o texto fica zuado
	* text-align: left; no card
  

* precisamos alinhar os cartões
* O flexbox é um tipo de display pensado para dizer como os filhos de um elemento devem se posicionar dentro dele, como um conjunto, e ele é responsável em fazer os cálculos necessários.
* section class mural	 
	
			`.mural{
			 display: flex 
			 }`
	
		  
* Nesse caso, ele redimensionou todo mundo pra caber em uma única linha.
*  que ele deve manter o tamanho original e passar os elementos que não couberem para a linha de baixo. Fazemos isso com a propriedade 	
* **flex-wrap**
* podemos pedir pra ele: se tiver espaço, cresça!
* **flex-grow** no card 1
	* distribuir igual para todos 
* **flex-basis** tamanho base

> https://css-tricks.com/snippets/css/a-guide-to-flexbox/





				@media (min-width: 560px){
			
				    .cartao {
				      width: 190px;
				      display: inline-block;
				    }
			  }
  
* Nossos cartões não estão respeitando o tamanho de 190px
 	
 	* .cartao {
    box-sizing: border-box;
  }

* **box-sizing** diz ao browser como o width e height devem se comportar
* padrão `box-sizing: content-box` 


* QUal tamanho que está o cartão? 190px?


> content-box o que indica que o tamanho dele é definido pelo seu conteúdo apenas. Mas podemos trocar por box-sizing: 
 
> border-box que indica que o tamanho agora levará em conta até a borda – ou seja, o width será a soma do conteúdo com a borda e o padding.

				entrar no w3schools foi legal


## **exercício - cartões e os layouts responsivos**

### resumão do capítulo
				* cartões ok no mobile
				* adaptação para desktop usando inline-block
				* flexbox css 3 para ocupar e alinhar
				* mobile first
				* testando em vários dispositivos com Browser Sync

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

* explicar o que é dom

> mozilla JavaScript
> 
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/A_re-introduction_to_JavaScript


* explicar que daria para "alterar" por css
botaoMudaLayout:active + .mural {
		flex-direction: column;
	}
* mudanças permanentes com JavaScript
* Você pode pedir para os alunos imprimirem `document` no console. Ele lembrará a
estrutura do página que estamos exibindo.
* JSON
* BOM (**B**rowser **O**bject **M**odel).
> Podemos acessá-lo através da propriedade **window**.
`alert` e `setTimeout`, e as variávies  `console` e até mesmo
> o `document`.

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
				document.querySelector(".mural").classList.toggle("mural--linhas");
			}
	```

	Agora adicione a chamada dessa função na propriedade `onclick` do botão:

	``` html
			<button id="mudaLayout" onclick="mudaLayout()" >Linhas</button>
	```



> contains, add, remove, toggle
> 
* button id="mudaLayout" Linhas/button>
* button id="mudaLayout" onclick="alerta()" /button>

* aparecer somente para celular
*mudaLayout {
				display: none;
			}

			@media (min-width: 560px){
				#mudaLayout {
					display: inline-block;
				}
			}

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







## **exercício - Alterando visualização dos cartões com JS **


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
* <script></script> tem que abrir e fechar

## **exercício - Colocando JS no devido lugar **


* removendo os cartões
* * nav>ul>li>a acima do <p> parágrafo
* adicionando menu de cores nos cartoes
    * .card-colors_colorFirst
* retirando o texto
    * text-indent -999px ou simplesmente nao coloca texto
* deixando arredondado e com borda rgba
    * border-radius 50%
* display inline-block

	> aqui da mostrar o inline não respeita o texto
	
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


## excluir o cartão
* li.card-delete>a
* mudar card-colors para card-options
* card_delete
* background-image: url('../../img/remove.png');
* background-size: 80%;
* background-repeat: no-repeat;
* fazer o if classList contains card_delete
* this.parentNode.parentNode.parentNode.remove();
	
> aqui é interessante fazer um gráfico de árvore
			
* * parentNode - Tag pai do elemento
* previousSibling - Tag irmã que veio antes do elemento
* nextSibling - Tag irmã que veio depois do elemento
* childNodes - Lista com todos os nós filhos
* firstChild - Primeiro nó filho do elemento
* lastChild - Último nó filho do elemento


			var $card = document.querySelector('.card');
			debugger;
			console.log($card);



* removendo com transitions

	
	``` css
	.cartao--some {
		opacity: 0;
		transition: opacity 0.3s linear;
	}
	```


	``` javascript
		var botoes = document.querySelectorAll(".opcoesDoCartao-remove");
	
		for(var i = 0; i < botoes.length; i++){
			botoes[i].addEventListener("click", removeCartao);
		}
	```





* falar sobre os eventos

* vamos usar o css3 transitions
* **problema** No caso, nossa transição de .2s aplicada na classe `cartao--some` não será
visível, já que, logo após a adição da classe, o cartão é removido.
* vamos agendar uma função


> http://www.w3schools.com/css/css3_transitions.asp

> duas coisas: 
> 
> the CSS property you want to add an effect to
> 
> the duration of the effect



	```
		var botoes = document.querySelectorAll(".opcoesDoCartao-remove");
	
		for(var i = 0; i < botoes.length; i++){
			botoes[i].addEventListener("click", removeCartao);
			this.remove() //não funciona
			this.parentNode.parentNode.remove(); //aí sim
		}```

* Se em algum momento decidirmos não colocar o botão de remoção dentro da `<div class="opcoesDoCartao">`, nossa lógica de remoção para de funcionar.
* link para qual cartao!! href="#cartao_1"
* botao.href // não rola!! getAttribute
* mas semanticamente está errado, deveria estar no `<a>`
* dataset api
* data-ref

* usar o Control + D para colocar ID nos cartões

* `<div class="cartao" id="cartao_1">`


		``` 
			<button class="opcoesDoCartao-remove" data-ref="cartao_1">Remover</button>
			
		```


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

## **Exercício:** Removendo cartões com Data-Attributes




# Capítulo 4 - JQuery


## formulário para adiconar novos TODO's 





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

				$newCardForm[0].addEventListener('submit', function(e){
				
					// explicar o preventDefault
				  e.preventDefault();
				
				  var $newCardContent = document.querySelector('.newCard-content');
				
				  if(!$newCardContent.value){
				
				    if(!document.querySelector('.error')){
				      var $error = document.createElement('span');
				      $error.classList.add('error');
				      $error.textContent = 'Preencha o campo acima!';
				      $newCardForm[0].insertBefore($error, $newCardAction[0]);
				    }
				  }else{
				
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
* poderia ter clonado uma estrutura ja existente


## Motivação JQUery

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


## adicionando novo cartão
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
								campoConteudo.val("");
							});
 

* pai.append(filho)
* pai.prepend(filho)
* filho.appendTo(pai)
* filho. prependTo(pai)
* next, prev, parent, parents



* posso ouvir vários eventos

					``` javascript
					$("button").on("click mouseover", function(event) {
					  alert("Executou");
					  event.preventDefault();
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

[...]

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

				[...]
 





* remover não funciona, precisa de ID
* 
* como vai ficar o ID do Cartão?
* Contador de quantos cartões existem
* $(".cartao").length + 1



if(conteudo){

					//soma um no contador
					contador++;

					//cria atributo data-ref no botaoRemove
					var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
												  .attr("data-ref", contador)
												  .text("Remover")
												  .click(removeCartao);

					[...]

					//cria atributo id no cartao
					$("<div>").attr("id","cartao_" + contador)
					          .addClass("cartao")
					          .append(opcoes)
					          .append(conteudoTag)
					          .prependTo(".mural");
			   }






*
 
## **Exercício:** Adicionando cartões com jQuery



* quebra de linha não está rolando
* resença de caracteres "\n" e trocá-los por uma tag
`<br>`.
* mas só substitui o primeiro \n
* var frase = "Quanto é 10 mais 20?";
var padrao = /\d/;
* var frase = "Quanto é 10 mais 20?";
var padrao = /\d/g;

>/g global

* ainda não está legal
* var ocorrencias = frase.match(/\d+/g);

> http://stackoverflow.com/questions/890686/should-i-use-d-or-0-9-to-match-digits-in-a-perl-regex

* campoConteudo.val().trim().replace(/\n/g, "<br>");
* ao testar, vai ficar zuado text() x html()

`$('<p>').addClass('cartao-conteudo').html(conteudoDigitado);`

## **Exercício:** Cartões mais poderosos com Expressões Regulares


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

* O `rem` é uma medida nova parecida. A diferença é que a conta não leva em consideração todos os pais, mas apenas a raiz, o `<html>`


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

* adicionar no cartão css 

* a altura dos cartão está sendo esticada

* align-items: flex-start;
* Além de `flex-start`, temos `flex-end`, `center` e outros. Essa imagem ajuda
a entender:
* explicar o foreach



## **Exercício:** Melhorando a vizualização dos cartões


# Página 60 do Alexandre


## **Exercício:** Buscando cartões com jQuery










 
# Capítulo 5 - Dando Poderes ao Conteúdo

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


