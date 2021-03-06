import Vue from 'vue';
import App from './components/App.vue'
import router from './route'

const app = new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
