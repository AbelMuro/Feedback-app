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
import Settings from './Pages/Account/Settings';
import AllFeedback from './Pages/Account/AllFeedback';
import Home from './Pages/Home';
import FeedbackThread from './Pages/FeedbackThread';

const router = createRouter({
    history: createWebHistory(),                        //this will save the URL endpoint of every route, and display it in the URL
    routes: [
        {path: '/', component: Home},
        {path: '/account', component: Account,
            children: [
                {path: 'settings', component: Settings},
                {path: 'feedback', component: AllFeedback}
            ]
        },
        {path: '/login', component: Login},        
        {path: '/register', component: Register},
        {path: '/feedback', component: SubmitFeedback},
        {path: '/feedback_thread/:id', component: FeedbackThread},
        {path: '/forgot_password', component: ForgotPassword},
        {path: '/reset_password/:token', component: ResetPassword},
    ],
})

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#root');