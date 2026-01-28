<script setup>
    import { onMounted, ref , onUnmounted} from 'vue';
    import {useRouter} from 'vue-router';
    import MobileNavigationBar from './MobileNavigationBar';
    import {useMediaQuery} from '~/Common/Hooks';
    import icons from '~/../public/icons';
    import localIcons from './icons';
    import {useToastStore} from '~/Store';

    const store = useToastStore();
    const {showToast} = store;
    const router = useRouter();
    const loggedIn = ref(false);
    const [mobile] = useMediaQuery('(max-width: 620px)');

    const handleRegister = () => {
        router.push('/register')
    }

    const handleLogin = () => {
        router.push('/login');
    }

    const handleLink = (link) => {
        router.push(link);
    }

    const handleAccount = () => {
        router.push('/account/update_details');
    }

    const checkLoggedInStatus = async () => {
        try{
            const response = await fetch('http://localhost:4000/authorization', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                loggedIn.value = true;
            }
            else{
                const result = await response.text();
                console.log(result);
                loggedIn.value = false;
            }
        }
        catch(error){
            const message = error.message;
            console.log(message);
            showToast(message);
            loggedIn.value = false;
        }
    }

    onMounted(() => {
        checkLoggedInStatus();
        document.addEventListener('auth_change', checkLoggedInStatus);
    })

    onUnmounted(() => {
        document.removeEventListener('auth_change', checkLoggedInStatus);
    })

</script>

<template>
    <nav class="nav" v-if="!mobile">
        <img class="nav_logo" :src="icons['logo']">
        <ul class="links">
            <li class="link" @click="() => handleLink('/')">
                Home
            </li>
            <li class="link" @click="() => handleLink('/')">
                About Us
            </li>
            <li class="link" @click="() => handleLink('/')">
                Contact Us
            </li>
            <li class="link" @click="() => handleLink('/')">
                Jobs
            </li>
        </ul>
        <div class="buttons">
            <button v-if="!loggedIn" class="register" @click="handleRegister">
                Sign Up
            </button>
            <button v-if="!loggedIn" class="login" @click="handleLogin">
                Login
            </button>    
            <button v-else class="account" @click="handleAccount">
                <img class="account_icon" :src="localIcons['user']"/>
            </button>
        </div>
    </nav>
    <MobileNavigationBar :loggedIn="loggedIn" v-else/>
</template>

<style scoped>
    .nav{
        width: 100%;
        height: 100px;
        padding: 0px 25px;
        background-color: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav_logo{
        width: 100px;
        object-fit: contain;
        cursor: pointer;
    }

    .links{
        margin: 0px;
        padding: 0px;
        display: flex;
        align-items: center;
        gap: 20px;
        list-style-type: none;
    }

    .link{
        color: var(--white-0);
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        font-weight: var(--preset-text-2-fontweight);
        line-height: var(--preset-text-2-lineheight);
        letter-spacing: var(--preset-text-2-letterspacing);
        cursor: pointer;
    }

    .link:hover{
        color: var(--blue-100)
    }

    .link:active{
        color: var(--blue-200);
    }

    .buttons{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .register{
        border: none;
        background-color: transparent;
        color: var(--white-0);
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        font-weight: var(--preset-text-2-fontweight);
        line-height: var(--preset-text-2-lineheight);
        letter-spacing: var(--preset-text-2-letterspacing);  
        cursor: pointer;
    }

    .register:hover{
        color: var(--blue-100);
    }

    .register:active{
        color: var(--blue-200);
    }

    .account{
        width: 60px;
    }

    .login{
        padding: 0px 15px;
    }
    
    .login, .account{
        height: 40px;
        border-radius: 10px;
        border: none;
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        font-weight: var(--preset-text-2-fontweight);
        line-height: var(--preset-text-2-lineheight);
        letter-spacing: var(--preset-text-2-letterspacing);
        background-color: var(--blue-0);
        color: var(--white-0);
        cursor: pointer;
        position: relative;
    }

    .account_icon{
        width: 25px;
        object-fit: contain;
    }

    .login::after, .account::after{
        width: 100px;
        height: 40px;
        content: '';
        position: absolute;
        inset: 0;
        margin: auto;
        background-color: var(--blue-0);
        filter: var(--blur-button);
        z-index: var(--farthest);
        transition: all 0.2s linear;
    }

    .login:hover, .account:hover{
        background-color: var(--blue-100);
    }

    .login:hover::after, .account:hover::after{
        filter: var(--blur-button-hover);
    }

    .login:active, .account:active{
        background-color: var(--blue-200);
    }

    .login:active::after, .account:active::after{
        filter: var(--blur-button-active)
    }


    @media(max-width: 800px){
        .link, .register, .login{
            font-size: 1.2rem;
        }

        .nav_logo{
            width: 70px;
        }
    }

</style>