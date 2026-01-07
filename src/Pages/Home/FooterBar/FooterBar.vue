<script setup>
    import icons from './icons';
</script>

<template>
    <footer class="footer">
        <img class="footer_image" :src="icons['amazon']"/>
    </footer>
</template>

<style scoped>
    .footer{
        width: 100%;
        height: 150px;
        background-color: var(--black-transparent);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .footer_image{
        width: 80px;
        object-fit: contain;
    }
</style>