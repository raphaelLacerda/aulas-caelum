<template>
        <div>
            <div id="campoNome" class="field" v-bind:class="{ error : !isNomeComponenteValido }">
                <label>
                    {{label}}
                </label>
                <input
                    type="text"
                    name="nome"
                    v-bind:placeholder="placeholder"
                    v-model="nomeComponenteValidado">
            </div>
        </div>
</template>
<script>

    module.exports = {
        props: ['sigla', 'sugestaoNomeComponente', 'placeholder', 'label'],
        data: function () {
            return {
                nomeComponenteValidado: '',
            };
        },
        created : function (){

            this.atualizarSugestaoParaNomeDoComponente();
        },
        computed : {
            isNomeComponenteValido : function (){

                if(!this.sigla || !this.nomeComponenteValidado){
                    return this.componenteInvalido();
                }
                this.nomeComponenteValidado = this.nomeComponenteValidado.toLowerCase();

                //caso o nome do componente não comece pela sigla informada
                if(this.nomeComponenteValidado.substring(0,this.sigla.length) !== this.sigla.toLowerCase()){
                    return this.componenteInvalido();
                }

                // \w ==> Corresponde qualquer caractere alfanumérico do alfabeto basic Latin, incluindo o underline. Equivalente a [A-Za-z0-9_].
                // \W ==> Corresponde qualquer caractere que não é um alfanumérico do alfabeto basic Latin. Equivalente a [^A-Za-z0-9_].
                var validacao = this.nomeComponenteValidado.match(new RegExp(/^\w{1,3}-\b.*[a-zA-Z]+.{1,}\b/, 'g'));

                if(validacao){

                    this.$emit('nome-componente-alterado', this.nomeComponenteValidado);
                    return true;
                }
                return this.componenteInvalido();
            }
        },
        methods: {
            componenteInvalido : function (){

                this.$emit('nome-componente-alterado', '');
                return false;
            },
            atualizarSugestaoParaNomeDoComponente : function (){

                if(this.sugestaoNomeComponente){
                    this.nomeComponenteValidado = this.sigla + '-'+ this.sugestaoNomeComponente.substring(4);
                }else{
                    this.nomeComponenteValidado = this.sigla + '-';
                }
            }
        },
        watch : {
            sigla : function (){
                this.atualizarSugestaoParaNomeDoComponente();
            },
            sugestaoNomeComponente : function (){
                this.atualizarSugestaoParaNomeDoComponente();
            }
        }
    }
</script>