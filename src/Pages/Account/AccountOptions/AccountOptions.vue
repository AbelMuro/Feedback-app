<script setup>
    import {ref} from 'vue';

    const option = ref('settings');

    const handleOption = (opt) => {
        option.value = opt;
    }
</script>

<template>
    <ul class="account_options">
        <li class="account_option" @click="() => handleOption('settings')">
            Settings
            <div class="line" v-if="option === 'settings'"/>
        </li>
        <li class="account_option" @click="() => handleOption('password')">
            Password
            <div class="line" v-if="option === 'password'"/>
        </li>
        <li class="account_option" @click="() => handleOption('notification')">
            Notification
            <div class="line" v-if="option === 'notification'"/>
        </li>
    </ul>
</template>

<style scoped>
    .account_options{
        width: 200px;
        height: 100%;
        grid-column: 1/2;
        grid-row: 2/3;
        list-style-type: none;
        margin: 0px;
        padding: 0px;
        display: flex;
        flex-direction: column;
        gap: 0.5px;
    }

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

    .line{
        width: 2px;
        height: 25px;
        background-color: var(--white-0);
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0px;
        margin: auto;
    }
</style>