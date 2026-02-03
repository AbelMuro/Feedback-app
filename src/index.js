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
import UpdateDetails from './Pages/Account/UpdateDetails';
import DisplayAllFeedback from './Pages/Account/DisplayAllFeedback';
import Home from './Pages/Home';
import Thread from './Pages/Thread';
import UpdatePassword from './Pages/Account/UpdatePassword';
import DeveloperLogin from './Pages/DeveloperAuthorization/Login';

const router = createRouter({
    history: createWebHistory(),                        //this will save the URL endpoint of every route, and display it in the URL
    routes: [
        {path: '/', component: Home},
        {path: '/account', component: Account,
            children: [
                {path: 'update_details', component: UpdateDetails},
                {path: 'display_all_feedback', component: DisplayAllFeedback},
                {path: 'update_password', component: UpdatePassword}
            ]
        },
        {path: '/login', component: Login},        
        {path: '/register', component: Register},
        {path: '/feedback', component: SubmitFeedback},
        {path: '/thread/:id', component: Thread},
        {path: '/forgot_password', component: ForgotPassword},
        {path: '/reset_password/:token', component: ResetPassword},
        {path: '/developer_login', component: DeveloperLogin}
    ],
})

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#root');