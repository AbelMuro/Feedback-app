<script setup>
    import {ref} from 'vue';
    import icons from './icons';

    const open = ref(false);

    const handleOpen = () => {
        open.value = !open.value;
    }
</script>

<template>
    <nav class="mobile">
        <button class="mobile_button" @click="handleOpen">
            <img class="mobile_icon" :src="icons['hamburger']">
        </button>
    </nav>
</template>

<style scoped>
    .mobile{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mobile_button{
        width: 60px;
        height: 50px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .mobile_icon{
        width: 50px;
        object-fit: contain;
    }
</style>