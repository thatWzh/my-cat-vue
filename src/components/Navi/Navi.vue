<template>
    <div id="app">
        {{message}}
    </div>
</template>

<script>
    export default {
        el:'#app',
        data(){
            return{
                message:'Hello Vue!!!!'
            }
        }
    }
</script>

<style>
#app{
    font-size: 18px;
}
</style>