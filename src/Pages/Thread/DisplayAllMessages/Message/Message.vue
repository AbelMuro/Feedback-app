<script setup>
    import {ref, onMounted} from 'vue';
    import icons from '~/Common/icons';
    const {messageOwnerId, message, created_at} = defineProps(['messageOwnerId', 'message', 'created_at']);

    const name = ref('');
    const isAdmin = ref(false);
    const imageSRC = ref('');
    const loading = ref(null);
    
    const formatDate = (timestamp) => {
        const date = new Date(Number(timestamp));
        const month = date.getMonth() + 1;
        const dayOfMonth = date.getDate();
        const year = date.getFullYear();

        return `${month}/${dayOfMonth}/${year}`;
    };

    const getUserImage = async (imageId) => {
        try{
            loading.value = true;
            const response = await fetch(`https://feedback-server.netlify.app/.netlify/functions/GetImage/?imageId=${imageId}`, {
                method: 'GET'
            });

            if(response.status === 200){
                const blob = await response.blob();
                imageSRC.value = URL.createObjectURL(blob);
            }
            else{
                const result = await response.text();
                console.log(result);
                imageSRC.value = icons['emptyAvatar'];
            }
        }
        catch(error){
            const message = error.message;
            console.log(message);
            imageSRC.value = icons['emptyAvatar'];
        }
        finally{
            loading.value = false;
        }
    }
    
    const getUserInfo = async () => {
        try{
            const response = await fetch(`https://feedback-server.netlify.app/get_user/${messageOwnerId}`, {
                method: 'GET',
            });

            if(response.status === 200){
                const result = await response.json();
                name.value = result.name;
                isAdmin.value = result.isAdmin;
                getUserImage(result.imageId);
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
        getUserInfo();
    })
</script>

<template>
    <section class="response">
        <h1 class="response_name">
            {{name}}
        </h1>
        <img 
            v-if="loading === false"
            class="response_image" 
            :src="imageSRC"
            />
        <img 
            v-else   
            class="response_image"
            :src="icons['emptyAvatar']"
        >
        <p class="response_content" :style="isAdmin ? {gridRow: '1/5'} : {gridRow: '1/4'}">
            {{message}}
        </p>
        <p class="response_date">
            {{formatDate(created_at)}}
        </p>            
        <p class="response_admin" v-if="isAdmin">
            Admin
        </p>
    </section>
</template>

<style scoped>
    .response{
        grid-column: 1/3;
        width: 100%;
        padding: 15px;
        border-radius: 15px;
        border: 1px solid var(--blue-0);
        display: grid;
        grid-template-columns: auto 1fr;
        column-gap: 15px;
        row-gap: 10px;
    }

    .response_image{
        width: 50px;
        object-fit: contain;
        clip-path: circle(25px at center center);
        grid-column: 1/2;
        grid-row: 1/2;
        margin: auto;
    }
    
    .response_name{
        grid-column: 1/2;
        grid-row: 2/3;
        font-family: var(--preset-text-4-fontfamily);
        font-size: var(--preset-text-4-fontsize);
        font-weight: var(--preset-text-4-fontweight);
        line-height: var(--preset-text-4-lineheight);
        letter-spacing: var(--preset-text-4-letterspacing);
        color: var(--white-100);
        margin: 0px;
    }

    .response_content{
        grid-column: 2/4;
        margin: 0px;
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        font-weight: var(--preset-text-2-fontweight);
        line-height: var(--preset-text-2-lineheight);
        letter-spacing: var(--preset-text-2-letterspacing);
        color: var(--white-0);
    }

    .response_date{
        grid-column: 1/2;
        grid-row: 3/4;
        align-self: end;
        margin: 0px;
        font-family: var(--preset-text-4-fontfamily);
        font-size: var(--preset-text-4-fontsize);
        font-weight: var(--preset-text-4-fontweight);
        line-height: var(--preset-text-4-lineheight);
        letter-spacing: var(--preset-text-4-letterspacing);
        color: var(--white-100);
    }

    .response_admin{
        grid-column: 1/2;
        grid-row: 4/5;
        align-self: end;
        margin: 0px;
        font-family: var(--preset-text-4-fontfamily);
        font-size: var(--preset-text-4-fontsize);
        font-weight: var(--preset-text-4-fontweight);
        line-height: var(--preset-text-4-lineheight);
        letter-spacing: var(--preset-text-4-letterspacing);
        color: var(--white-0);
    }

    @media(max-width: 870px){
        .response_content{
            font-size: 1.1rem;
        }
    }

</style>
