import Vue from 'vue';

//rece boid parâmetros: id e as propriedades do construtor do Vue
Vue.component('ButtonString', {
    template: '<button @click="click">Click ButtonString {{count}} times</button>',
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        click() {
            this.count++;
        }
    }
})