<script setup>
    import {ref, onMounted, onBeforeUnmount} from 'vue';
    import icons from '~/Common/icons';

    const imageSRC = ref('');
    const loading = ref(null);

    const getAccountImage = async () => {
        try{    
            loading.value = true;
            const response = await fetch(`https://feedback-server.netlify.app/.netlify/functions/AccountImage?cache=${Date.now()}`, {
                method: 'GET',
                credentials: 'include',
            });

            if(response.status === 200){
                const result = await response.blob();
                imageSRC.value = URL.createObjectURL(result);
            }
            else{
                const result = await response.text();
                console.log(result);
                imageSRC.value = icons['emptyAvatar'];
            }
        }
        catch(error) {
            const message = error.message;
            console.log(message);
            imageSRC.value = icons['emptyAvatar'];
        }
        finally{
            loading.value = false;
        }
    }


    onMounted(() => {
        getAccountImage();
        document.addEventListener('update_account', getAccountImage)
    });

    onBeforeUnmount(() => {
        document.removeEventListener('update_account', getAccountImage);
    });
</script>

<template>
    <img 
        v-if="loading === false"
        class="user_image" 
        :src="imageSRC"/>
    <img
        v-else
        class="user_image"
        :src="icons['emptyAvatar']"
    >
</template>

<style scoped>
    .user_image{
        width: 60px;
        height: 60px;
        justify-self: center;
        align-self: center;
        clip-path: circle(30px at center center);
        grid-column: 1/2;
        grid-row: 1/2;
        justify-self: center;
    }
</style>