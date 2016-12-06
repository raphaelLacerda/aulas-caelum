var $newCardForm = document.querySelectorAll('.newCard form');

var $newCardAction = document.querySelectorAll('.newCard-action');

$newCardForm[0].addEventListener('submit', function(e){

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
    $newCard.querySelector('.cartao-conteudo').textContent = $newCardContent.value;
    document.querySelector('.wrap-card').insertBefore($newCard, $card);
    definirCartoes();
  }
  $newCardForm[0].reset();


});


$(".newCard-content").on('change keydown paste input', function(){
  if(this.value.length > 0){
    if($('.error')[0]){
      $('.error').remove();
    }
  }
});
