<script setup>
    import {ref} from 'vue';
    import Dialog from '~/Common/Components/Dialog';

    const open = ref(false);

    const handleOpen = () => {
        open.value = !open.value;
    }

    const handleLogout = () => {

    }
</script>

<template>
    <li class="account_option" @click="handleLogout">
        Log Out
    </li>
    <Dialog 
        :open="open" 
        :handleOpen="handleOpen"
        :handleSubmit="handleLogout"
        message="Are you sure you want to log out?"/>
</template>

<style scoped>
    .account_option{
        width: 100%;
        height: 60px;
        border-top: 1px solid var(--blue-0);
        color: var(--white-0);
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        line-height: var(--preset-text-3-lineheight);
        letter-spacing: var(--preset-text-3-letterspacing);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
    }

    .account_option:last-child{
        border-bottom: 1px solid var(--blue-0);
    }

    .account_option:hover{
        color: var(--blue-100);
    }
</style>