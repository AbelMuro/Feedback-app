import {createApp} from 'vue';
import {createPinia} from 'pinia';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
import Login from './Pages/Authorization/Login';
import Register from './Pages/Authorization/Register';
import ForgotPassword from './Pages/Authorization/ForgotPassword';
import ResetPassword from './Pages/Authorization/ResetPassword';
import SubmitFeedback from './Pages/SubmitFeedback';
import Account from './Pages/Account';
import Home from './Pages/Home';

const router = createRouter({
    history: createWebHistory(),                        //this will save the URL endpoint of every route, and display it in the URL
    routes: [
        {path: '/', component: Home},
        {path: '/account', component: Account},
        {path: '/login', component: Login},        
        {path: '/register', component: Register},
        {path: '/feedback', component: SubmitFeedback},
        {path: '/forgot_password', component: ForgotPassword},
        {path: '/reset_password/:token', component: ResetPassword},
    ],
})

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#root');