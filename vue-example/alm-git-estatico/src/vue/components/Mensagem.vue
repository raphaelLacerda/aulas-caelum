<template>
    <transition name="fade">
        <div v-bind:class="classe" v-show="msg" v-on:click="limpar" id="divMsg" class="ui visible message mini">
            {{msg}}
        </div>
    </transition>
</template>
<script>

    module.exports = {
        props: ['mensagem', 'classe'],

        computed: {
            msg : function(){

                if(this.mensagem){
                    setTimeout(function () {
                        //não atualiza o componente, dae fiz o gato do click
                        //this.msg = '';
                        document.getElementById('divMsg').click();
                    }, 10000);
                }
                return this.mensagem;
            }
        },
        methods : {
            limpar : function (){
                this.$emit('nova-msg','');
            }
        }
    }
</script>