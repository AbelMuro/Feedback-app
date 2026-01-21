<script setup>
    import {onMounted, ref} from 'vue';
    import {useRoute} from 'vue-router';
    import Respond from './Respond';
    import DisplayAllResponses from './DisplayAllResponses';

    const route = useRoute();
    const threadId = route.params.id;
    const feedback = ref({});

    const getFeedbackInfo = async () => {
        try{
            const response = await fetch(`http://localhost:4000/get_thread/${threadId}`, {
                method: 'GET',
            });

            if(response.status === 200){
                const result = await response.json();
                console.log(result[0]);
                feedback.value = result[0];
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
        getFeedbackInfo();
    })

</script>

<template>
    <section class="container">
        <header class="feedback">
            <h1 class="feedback_title">
                {{feedback.title}}
            </h1>
            <h2 class="feedback_desc">
                {{feedback.feedback}}
            </h2>
        </header>
        <DisplayAllResponses/>
        <Respond/>
    </section>
</template>

<style scoped>
    .container{
        width: 800px;
        min-height: calc(100vh - 100px);
        display: flex;
        flex-direction: column;
        gap: 35px;
        border-radius: 15px;
        border: 1px solid var(--blue-0);
        margin: auto;
        padding: 25px;
    }

    .feedback{
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .feedback_title{
        font-family: var(--preset-text-1-fontfamily);
        font-size: var(--preset-text-1-fontsize);
        font-weight: var(--preset-text-1-fontweight);
        line-height: var(--preset-text-1-lineheight);
        color: var(--white-0);
        margin: 0px;
    }

    .feedback_desc{
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        font-weight: var(--preset-text-2-fontweight);
        line-height: var(--preset-text-2-lineheight);
        color: var(--white-100);
        margin: 0px;
    }
</style>