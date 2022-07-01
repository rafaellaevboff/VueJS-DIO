<template>
    <button @click="click">
        Click ButtonVue {{count}} times
    </button>
</template>
    
<script>
// importar algo é feito no script
    export default {
        name: 'ButtonVue',
        data() {
            return {
                count: 0,
            };
        },
        methods: {
            click() {
                this.count++;
            },
        },
    }   
</script>

<style>
    
</style>