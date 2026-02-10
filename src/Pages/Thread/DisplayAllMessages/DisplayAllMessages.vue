<script setup>
    import {ref, onMounted, onBeforeUnmount} from 'vue';
    import { useRoute } from 'vue-router';
    import {useToastStore} from '~/Store';
    import Message from './Message';

    const store = useToastStore();
    const {showToast} = store;
    const allResponses = ref([]);
    const route = useRoute();
    const threadId = route.params.id;
    let interval = null;

    const getAllResponses = async () => {
        try{
            console.log('Polling database for updates');
            const response = await fetch(`https://feedback-server.netlify.app/get_all_thread_messages/${threadId}`, {
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
                showToast(result);
                clearInterval(interval);
            }
        }
        catch(error){
            const message = error.message;
            console.log(message);
            showToast(message);
            clearInterval(interval);
        }
    }

    onMounted(() => {
        getAllResponses();
        document.addEventListener('new_response', getAllResponses)
        interval = setInterval(() => {
            getAllResponses();
        }, 5000)
    })

    onBeforeUnmount(() => {
        clearInterval(interval);
        document.removeEventListener('new_response', getAllResponses);
    })

</script>

<template>
    <Message v-for="(response) in allResponses" 
        :key="response.id" 
        :messageOwnerId="response.message_owner_id" 
        :message="response.message"
        :created_at="response.created_at"
        />
</template>
