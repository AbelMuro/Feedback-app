<script setup>
    import {ref, onMounted} from 'vue';
    import { useRoute } from 'vue-router';

    const allResponses = ref([]);
    const route = useRoute();
    const threadId = route.params.id;

    const getAllResponses = async () => {
        try{
            const response = await fetch(`http://localhost:4000/get_all_thread_responses/${threadId}`, {
                method: 'GET'
            });

            if(response.status === 200){
                const result = await response.json();
                console.log(result);
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
    })

</script>

<template>
    
</template>

<style scoped>

</style>

