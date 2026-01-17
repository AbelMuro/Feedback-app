<script setup>
    import { RouterView } from 'vue-router';
    import SideBar from './SideBar';
    import MobileSideBar from './MobileSideBar';
    import {useMediaQuery} from '~/Common/Hooks';

    const [tablet] = useMediaQuery('(max-width: 720px)');

</script>

<template>
    <section class="account">
        <SideBar v-if="!tablet"/>
        <MobileSideBar v-else/>
        <RouterView/>
    </section>
</template>

<style scoped>
    .account{
        width: 100%;
        min-height: calc(100vh - 100px);
        border-radius: 15px;
        display: grid;
        grid-template-columns: auto 1fr;
    }

    @media(max-width: 720px){
        
    }

</style>