//const Vue=require('vue');
//const App=require('./app.vue');
//const VueResource=require('vue-resource');
//require('./assets/css/main.css');
//response.setHeader("Content-type", "text/html;charset=UTF-8");
import Vue from 'vue';
import App from './app.vue';
import './assets/css/main.css';
import router from './routes/index.js';

new Vue({
    el:'#App',
    render:function(h){
        return h(App);
    },
    router:router
})
