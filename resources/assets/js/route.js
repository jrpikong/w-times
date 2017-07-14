import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import FrontPage from './components/views/HomePage.vue'
const routes = [
    { path: '/', component: FrontPage },
    { path: '/telegram', component:require('./components/views/TelegramPage.vue')}
]

export default new VueRouter({
    mode: 'history',
    routes
})