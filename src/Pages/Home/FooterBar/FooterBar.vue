<script setup>
    import icons from './icons';
</script>

<template>
    <footer class="footer">
        <img class="footer_image" :src="icons['amazon']"/>
        <img class="footer_image" :src="icons['facebook']"/>
        <img class="footer_image" :src="icons['linkedin']"/>
        <img class="footer_image" :src="icons['youtube']"/>
        <img class="footer_image" :src="icons['discord']"/>
    </footer>
</template>

<style scoped>
    .footer{
        width: 100%;
        height: 150px;
        background-color: var(--black-transparent);
        display: flex;
        justify-content: center;
        gap: 25px;
    }

    .footer_image{
        object-fit: contain;
    }

    .footer_image:nth-of-type(1){
        width: 60px
    }

    .footer_image:nth-of-type(2){
        width: 50px;
    }

    .footer_image:nth-of-type(3){
        width: 55px;
    }

    .footer_image:nth-of-type(4){
        width: 60px;
    }

    .footer_image:nth-of-type(5){
        width: 50px;
    }

    @media(max-width: 620px){
        .footer{
            height: 100px;
        }

        .footer_image:nth-of-type(1){
            width: 50px
        }

        .footer_image:nth-of-type(2){
            width: 40px;
        }

        .footer_image:nth-of-type(3){
            width: 45px;
        }

        .footer_image:nth-of-type(4){
            width: 50px;
        }

        .footer_image:nth-of-type(5){
            width: 40px;
        }
    }
</style>