<script setup>
    import {onMounted, ref} from 'vue';
    import {useRoute} from 'vue-router';
    import icons from '~/Common/icons';

    const route = useRoute();
    const threadId = route.params.id;
    const imageSRC = ref('');
    const name = ref('');
    const loading = ref(null);

    const getOriginalPosterImage = async (imageId) => {
        try{
            loading.value = true;
            const response = await fetch(`https://feedback-server.netlify.app/.netlify/functions/GetImage/?imageId=${imageId}`, {
                method: 'GET',
            });

            if(response.status === 200){
                const blob = await response.blob();
                imageSRC.value = URL.createObjectURL(blob);
            }
            else{
                const message = await response.text();
                console.log(message);
                imageSRC.value = icons['emptyAvatar'];
            }
        }
        catch(error){
            const message = error.message;
            console.log(message);
        }
        finally{
            loading.value = false;
        }
    }

    const getOriginalPosterInfo = async () => {
        try{
            const response = await fetch(`https://feedback-server.netlify.app/get_thread_owner_info/${threadId}`, {
                method: 'GET'
            });

            if(response.status === 200){
                const result = await response.json();
                getOriginalPosterImage(result.image)
                name.value = result.name;                
            }
            else{
                const result = await response.text();
                console.log(result);
            }

        }
        catch(error){
            const message = error.message;
            console.log(message);
        }
    }

    onMounted(() => {
        getOriginalPosterInfo();
    })
</script>

<template>
    <div class="original_poster">
        <img 
            v-if="loading === false"
            class="original_poster_image" 
            :src="imageSRC"
            />
        <img 
            v-else
            class="original_poster_image"
            :src="icons['emptyAvatar']"
        >
        <p class="original_poster_name">
            {{name}}
        </p>
    </div>
</template>

<style scoped>
    .original_poster{
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .original_poster_image{
        width: 50px;
        object-fit: contain;
        clip-path: circle(25px at center center);
    }

    .original_poster_name{
        color: white;
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        font-weight: var(--preset-text-3-fontweight);
        line-height: var(--preset-text-3-lineheight);
        letter-spacing: var(--preset-text-3-letterspacing);
        margin: 0px;
    }
</style>