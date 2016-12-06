definirCartoes();

function definirCartoes() {

    var $cardOptions = document.querySelectorAll('.card-options');

    $cardOptions.forEach(function(elemento, index) {

        elemento.addEventListener('click', function() {

            for (var i = 0; i < this.parentNode.children.length; i++) {
                this.parentNode.children[i].classList.remove('isActive');
            }
            this.parentNode.parentNode.nextElementSibling.setAttribute('contenteditable', false);

            $card = this.parentNode.parentNode.parentNode;

            if (this.dataset.color) {
                $card.dataset.color = this.dataset.color;
            }

            this.classList.add('isActive');



            if (this.classList.contains('card_delete')) {
                this.parentNode.parentNode.parentNode.remove();
            }

            if (this.classList.contains('card_edit')) {
                this.parentNode.parentNode.nextElementSibling.setAttribute('contenteditable', true);
                this.parentNode.parentNode.nextElementSibling.focus();

            }

        });
    });

}
