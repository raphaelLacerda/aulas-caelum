* bostonglobe.com
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


* view-port
  * pega o site responsivo
  * será que ele está realmente funcionando no celular?
  * dizer para o disposito móvel que o site está adaptado pra ela
  * <meta name="viewport" content="width=device-width">
* mostrar o chrome mobile mode




## adaptações maiores

* menu responsivo

* imagens vetoriais, sempre a melhor resolução possível
