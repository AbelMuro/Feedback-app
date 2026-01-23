<script setup>
    import {ref, onMounted, onBeforeMount} from 'vue';
    import { useRoute } from 'vue-router';

    const allResponses = ref([]);
    const route = useRoute();
    const threadId = route.params.id;

    const formatDate = (timestamp) => {
        const date = new Date(Number(timestamp));
        const month = date.getMonth() + 1;
        const dayOfMonth = date.getDate();
        const year = date.getFullYear();

        return `${month}/${dayOfMonth}/${year}`;
    }   

    const getAllResponses = async () => {
        try{
            const response = await fetch(`http://localhost:4000/get_all_thread_messages/${threadId}`, {
                method: 'GET'
            });

            if(response.status === 200){
                const result = await response.json();
                result.sort((a, b) => {
                    if(a.created_at > b.created_at)
                        return 1;
                    else
                        return -1;
                })
                allResponses.value = result;
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
        getAllResponses();
        document.addEventListener('new_response', getAllResponses);
    })

    onBeforeMount(() => {
        document.removeEventListener('new_response', getAllResponses);
    })

</script>

<template>
    <section class="response" v-for="(response) in allResponses" :key="response.id">
        <h1 class="response_name">
            {{response.name}}
        </h1>
        <img class="response_image" :src="`http://localhost:4000/get_image/${response.image}`"/>
        <p class="response_content">
            {{response.message}}
        </p>
        <p class="response_date">
            {{formatDate(response.created_at)}}
        </p>
    </section>
</template>

<style scoped>
    .response{
        width: 100%;
        padding: 15px 100px 15px 15px;
        border-radius: 15px;
        border: 1px solid var(--blue-0);
        display: grid;
        grid-template-columns: auto 1fr;
        column-gap: 15px;
        row-gap: 10px;
        position: relative;
    }

    .response_image{
        width: 40px;
        object-fit: contain;
        border-radius: 100%;
        grid-column: 1/2;
        grid-row: 1/2;
        margin: auto;
    }
    
    .response_name{
        grid-column: 1/2;
        grid-row: 2/3;
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        font-weight: var(--preset-text-3-fontweight);
        line-height: var(--preset-text-3-lineheight);
        letter-spacing: var(--preset-text-3-letterspacing);
        color: var(--white-100);
        margin: 0px;
    }

    .response_content{
        grid-row: 1/3;
        grid-column: 2/3;
        margin: 0px;
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        font-weight: var(--preset-text-2-fontweight);
        line-height: var(--preset-text-2-lineheight);
        letter-spacing: var(--preset-text-2-letterspacing);
        color: var(--white-0);
    }

    .response_date{
        font-family: var(--preset-text-4-fontfamily);
        font-size: var(--preset-text-4-fontsize);
        font-weight: var(--preset-text-4-fontweight);
        line-height: var(--preset-text-4-lineheight);
        letter-spacing: var(--preset-text-4-letterspacing);
        color: var(--white-100);
        position: absolute;
        top: 0px;
        right: 15px;
    }
</style>

