# Capítulo 1


* Motivar o porquê eles estão ali
* histórias da faculdades

> Fazer exercício hello.html antes de tudo

[Comece a programar em JavaScript](http://blog.caelum.com.br/comecar-a-programar-e-com-javascript/)

## O que é programação?

## O que é algoritmo?

* sequência de passos
* portugol

## o que é linguagem de programação?



## Marcando seu txt com html

* h3
* strong
* a href

[Não deixe de vistar o W3Schools](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_links_w3schools)

## Precisamos de mais interação: o que é esse tal de JavaScript?

* hello world

```javascript
<script>
    alert('olá');
</script>
```

* Falar dessas sintaxes

> Fazer exercício 1.5 - Revise seu código: seu primeiro programar


## Indo para um IDE ou Editor de texto

## Entendendo o console

> fazer exercício hello.html com console.log (data de nascimento)

* descobrindo os erros e entendendo mensagens

```javascript
<script>
    alert('olá';
</script>
```


> Exercício 1.7 - console do Chrome

* acentuação
<meta charset="UTF-8">

# Capítulo 2

## document.write

* explicando o document.write()

> Voltar no exemplo hello.html e substituir console.log

* br


## Trabalhando com tipos

> fazer este exemplo na console


```javascript
'1' + '1'
1 + 1

typeof('1')
typeof(1)
```

* Definir o que é sequencia de caracteres == String
* Definir o que são números
* Operações matemáticas (soma)
* soma e divisão (prioridades)


> Exercício 2.3 - Trabalhe com números

## Entendendo variáveis

* explicar o que é uma atribuição
* var ano = 2018;

* como calcular minha idade com document.write

> Exercício 2.6 - Organize com variáveis
> Exercício 2.7 - Consumo de combustível

* 17.833333333333332
* Math.round(53.5)
* falar do toFixed()
* Math.round(4834/3)

## evitando escrever BR - função pular linha

* falar sobre a função **pularLinha**
* e se quiséssemos fazer um traço ao invés de pular linha

```javascript

function pulaLinha() {    document.write("<br>");}
```

* explicar a palavra function, (), {} e identação
* variável guarda valores, function chama operações / ações
* substituindo br por hr


> Exercício: 2.9 - Crie sua primeira função

 
## Funções passando informações

* temos ainda um problema com instruções repetidas
* cria-se funções para evitar repetições
* frase + linha => frase + linha (isso está se repetindo)


```javascript

function mostra() {    document.write("Mostrando algo<br>");}
```

* explicar que não é útil dessa forma
* faz o mostra recebendo parâmetro
* faz o mostra recebendo parametro + chamando pulaLinha()


> Fazer o exercício 2.11 - Revise o código usando a função mostra


## Entendendo o console.log

* document.write --> mensagem para o usuário na tela
* alert --> mensagem para o usuário numa caixa de diálog
* console.log --> mensagem secreta para o programador
	* mostrar no browser com o DevTools

	
## Comentários

## Compartilhando o código feito com amigos
* jsfiddle.net
* https://jsbin.com/?html,js,output	



# Capítulo 3

* funções que a gente já trabalhava
* Que tal calcular seu índice de massa corporal?
* IMC = peso / (altura * altura)
* criar arquivo imc.html
* definir valores para peso e altura
* não esquecer da tag script para mostrar JavaScript
* var altura = 1.72 (ponto como delimitador de casa decimal)
* criar uma função para calcular IMC

```javascript

function calculaIMC(peso, altura) {   var imc = peso / (altura * altura);￼	mostra("IMC calculado é " + imc);}
```

* falar sobre escopo da vaiável imc
* mas ela deveria mostrar ou calcular?
* return do resultado

> 3.3 calculando o imc


## pegando a altura e o peso

* var nome = prompt("Bom Dia! Qual é o seu nome?");
* falar que futuramente faremos validações

> Exercicio 3.5 - revise o codigo e pergunte os dados do usuario
> Exercicio 3.6 - quantos dias vc ja viveu?


## ordem das funções

* funcoes.html
* funcao chamando funcao
* mostrando a console
* brincar com eles na console (operadores javascript)	* explicar o tipo das variaveis
* outra forma de declaracao funcao


# Capítulo 4 - condições
* calculando quantos pontos seu time tem no campeonato
* pontos_futebol.html
* (3*3)+"1" = 91 --> deveria ser 10 pontos
* tudo que vem do prompt é considerado texto, entao ele concatena
	* no número de vitórias, houve conversão automática
* empatesComoNumero -> parseInt --> depois atribuir na mesma variável
* Comparando os pontos do seu time com os pontos do outro
* **if** mostrando mensagem se está pior ou melhor
* ensinar o igual ==

> Exercício 4.3: pontos do campeonato

## voltando para o IMC

* voltar no programa do IMC e verificar se ele está ideal
* operador de bit &&


> Exercício 4.5: diagnóstico IMC

## segurança de balada

*  18 || sabe a senha

> Exercício 4.7: uma coisa ou outra


## Jogo - adivinhe o número
* Math.random() * 100
* variáveis temporárias x Math.round(Math.random() * 100);
* if and else
> 4.9 | Exercício de adivinhação
> 


# Capítulo 5 - Como repetir Tarefas?

* imprimir os anos de copa
* while true anosDeCopa + 4
* while anosDeCopa < 2014
* fazer anos de copa com o write


> Exercício: Mostre os anos de copa até cansar


## Caracters e números

* prompt("Qual é o ano limite?");
* anoDeCopa = anoDeCopa + 4; == 19304 ai inves de 1934
	* pq? usamos ela primeiramente como String mostra(anoDeCopa + " tem copa!");
> 5.5 transformando texto em números
> 5.6 Tabuadas

* Comando for ao inves do while
* for ( ; ; )￼

> 5.9 Exercicio média de idades￼
* Jogo adivinhação: mais chances para adivinhar o número

> 5.12 - Loop dentro do outro




# Capítulo 6 - Arrays

* javascript + html ( getElementById)
* associar função ao click do botao

> 6.2 campos de entrada


* coloca mais numeros no jogo da preferencia com array

* push

















