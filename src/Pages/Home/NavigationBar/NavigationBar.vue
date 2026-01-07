<script setup>
    import {useRouter} from 'vue-router';
    import icons from '~/../public/icons';

    const router = useRouter();

    const handleRegister = () => {
        router.push('/register')
    }

    const handleLogin = () => {
        router.push('/');
    }
</script>

<template>
    <nav class="nav">
        <img class="nav_logo" :src="icons['logo']">
        <ul class="links">
            <li class="link">
                Home
            </li>
            <li class="link">
                About Us
            </li>
            <li class="link">
                Contact Us
            </li>
            <li class="link">
                Jobs
            </li>
        </ul>
        <div class="buttons">
            <button class="register" @click="handleRegister">
                Sign Up
            </button>
            <button class="login" @click="handleLogin">
                Login
            </button>            
        </div>
    </nav>
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

    .login{
        width: 100px;
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

    .login::after{
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

    .login:hover{
        background-color: var(--blue-100);
    }

    .login:hover::after{
        filter: var(--blur-button-hover);
    }

    .login:active{
        background-color: var(--blue-200);
    }

    .login:active::after{
        filter: var(--blur-button-active)
    }


</style>