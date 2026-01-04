import {createApp} from 'vue';
import {createPinia} from 'pinia';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
import Login from './Pages/Authorization/Login';
import Register from './Pages/Authorization/Register';
import ForgotPassword from './Pages/Authorization/ForgotPassword';

const router = createRouter({
    history: createWebHistory(),                        //this will save the URL endpoint of every route, and display it in the URL
    routes: [
        {path: '/', component: Login},
        {path: '/register', component: Register},
        {path: '/forgot_password', component: ForgotPassword}
    ],
})

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#root');