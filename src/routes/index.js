/**
 * Created by admin on 2019/6/1.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Index from '../views/index.vue';
import List from '../views/list.vue';
import Detail from '../views/detail.vue';

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:Index
        },
        {
            path:'/:type',
            component:List
        },
        {
            path:'/:type/:id',
            component:Detail
        }
    ]
});