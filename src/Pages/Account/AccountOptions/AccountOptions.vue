<script setup>
    import {watch} from 'vue';
    import {motion} from 'motion-v';
    import {useRouter} from 'vue-router';
    import {useDialogStore} from '~/Store';
    import {ref} from 'vue';
    import LogOut from './LogOut';

    const router = useRouter();
    const option = ref('settings');
    const store = useDialogStore();
    const {showDialog} = store;

    const handleOption = (opt) => {
        option.value = opt;
    }


    watch(option, (option) => {
        router.push(`/account/${option}`);
    }, {
        immediate: true,
        flush: 'post'
    })
</script>

<template>
    <ul class="account_options">
        <li class="account_option" @click="() => handleOption('settings')">
            Settings
            <motion.div layoutId="line" class="line" v-if="option === 'settings'"/>
        </li>
        <li class="account_option" @click="() => handleOption('feedback')">
            Feedback
            <motion.div layoutId="line" class="line" v-if="option === 'feedback'"/>
        </li>
        <LogOut/>
    </ul>
</template>

<style scoped>
    .account_options{
        width: 100%;
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