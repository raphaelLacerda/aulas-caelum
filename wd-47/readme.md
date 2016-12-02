# Curso WD 47

# Capitulo 1

* complexo mundo do front-end
* explicação CEEP - clicar no layout
* Site otimizado para celulares
* TODO list

# Capitulo 2 - Introdução HTML

* DOCTYPE -- ultima versao estavel
* header
* h1
* emmet.io
    * html:5 + tab

    * header>h1+button*2

## **exercício - emmet**


* inspect element - pick color
* estilo.css
    * cabecalho
        * padding 16px
* como remover os espaçamentos?
    * RESET.css == margin firefox X chrome
        * como tirar a margerm de todos os elementos?
        * criar o css/reset.css
> pode falar que o padding aqui poderia ser aplicado para todo mundo, 10%

## **exercício - preparando terreno para os cartões**

* montando cartões de um jeito fácil
    * section>div.cartao*5>p.cartao-conteudo>lorem (curso)
    * section>ol>li*5>p.cartao-conteudo>lorem40 (alura)
        * retirando o list style




## **exercício - cartões e o container**




# Capítulo 4 Jquery

* compatibilidade com outros navegadores -- blindagem
* por quê usar o ready?
* event.preventDefault();
* navegação do DOM
    * next, nextAll, prev, prevAll, parent
* função css
* addclass, removeclass, toogleclass
* criando elementos
    * var novoCartão = document.createElement("div");
	* novoCartão.classList.add("cartao");
    *  var botao = $("<button>");
* appendTo x prependTo
    * $("<span>", { class : "info" }).text("Novo span!").prependTo(".item");




# Preparando o header

* css/block/header.css
* class header, header-title (evitar o title pq é muito genérico)
    * header padding
* header-button
    * color
    * background-color
        * como retirar esse traço branco da borda do button?
            * button tem um width de 2px!!
                * reset.css - border: none
    * height
    * padding
        * texto ficou zuado!!! pois o padrão é border-box
        * box-size: content -- como explicar o box-size
            * por padrão os navegadores usam border-box, padding faz parte do 22px
            * mudar para **content-box**, padding não faz mais parte do elemento

* Como alinhar os elementos?
    * h1 -- possui display **block** --> ocupa linha inteira
    * button é inline-block
    * basta colocar o h1 como inline
    *


> há vários displays: inline (nao respeita top, down), inline-block (respeita top, bottom, margin), block, flex --> http://www.w3schools.com/cssref/pr_class_display.asp


* criando nav para alinhar elemento
    * nav>ul>li.header-button*2>a
    * deu merda pois o li é elemento block
        * header-button ==> display: inline-block para levar em conta o height

* dando um reset nos links
    * cor deve vir do pai -> color: inhreit, text-decoration

* mais ainda não está alinhado com o título!!!
    * nav é block!, mas o h1 é inline
        * float right


* alinhando/centralizando texto --- padding nos lados
    * .header-button:first-child
        * margin-right: 15px

* vamos espaçar os buttons







# Preparando os cartões


* css cartao
    * selecionar vários elementos -- control + D
    * backgroun, margin padding
    * como colocar blocos ao lado do outro?
        * display inline???? nao respeita margens nem width
        * entao usamos inline-block

    * a OL possui um padding escroto de 40px!
        * vamos retirar no reset css: padding 0

> para modificar as cores dos cartões, vamos usa http://getbem.com/introduction/
> card_color => modificador de cor

* css menu de cores
    * adicionando menu de cores nos cartoes
        * .card-colors_colorFirst
    * retirando o texto
        * text-indent -999px
    * deixando arredondado e com borda rgba
        * border-radius
    * display inline-block
    * descolocando ele pra cima
        * colocar position **absolute**: top -16px
            * deu merda pq ele está fazendo com relação à página inteira e não com relação ao pai
        * mudamos o pai para position **relative**
            * agora o filho respeita o pai

> * static por default, não são afetados por top, bottom
> * relative
> * fixed: relative to viewport -- sempre fica no mesmo lugar
> * **absolute**: posicionado relativamento ao seu pai

> entrar com os alunos aqui
> http://www.w3schools.com/css/tryit.asp?filename=trycss_position_absolute



# Colocando JavaScript

* explicar o que é dom

> mozilla , reitroducing javascript

* boas práticas $ (elementos do html)
* document.querySelector | selectorAll
* $cardColors[0].addEventListener('click'
    * primeiro faz somente no primeiro elemento
    * fazer control c + v 16 vezes?
    * $cardColors.forEach(function(elemento, contador)


* clicando na bolinha para alterar a cor do cartão
    * preciso chegar no pai
        * this.parentNode.parentNode.parentNode

> aqui neste ponto é interessante debugar com eles, e ver o que tem no this
> child, sibling

    * data-color
        * [data-color="first"]
    * $card.dataset.color = this.dataset.color;
