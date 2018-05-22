import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Exemple from './views/Exemple.vue';
import Exercite from './views/Exercite.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/exemple',
            name: 'exemple',
            component: Exemple
        },
        {
            path: '/exercite',
            name: 'ecercite',
            component: Exercite
        }
    ]
})
