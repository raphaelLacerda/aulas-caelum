//$('.cartao-conteudo').before('<nav class="wrap-card-colors"><ul><li class="card-colors" data-color="first"><a href=""></a></li><li class="card-colors" data-color="second"> <a href=""></a></li><li class="card-colors" data-color="third"><a href=""></a></li><li class="card-colors" data-color="fourth"><a href=""></a></li></ul></nav>');

var $cardColors = document.querySelectorAll('.card-colors');

$cardColors.forEach(function(elemento, index){

    elemento.addEventListener('click', function(){

        $card = this.parentNode.parentNode.parentNode;

        console.log($card.dataset);
        $card.dataset.color = this.dataset.color;
    });
});
