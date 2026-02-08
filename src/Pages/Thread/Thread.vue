<script setup>
    import {onMounted, ref} from 'vue';
    import {useRoute} from 'vue-router';
    import SendMessage from './SendMessage';
    import DisplayAllMessages from './DisplayAllMessages';
    import {useToastStore} from '~/Store';
    import OriginalPoster from './OriginalPoster';

    const store = useToastStore();
    const {showToast} = store;
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
                feedback.value = result[0];
            }
            else{
                const result = await response.text();
                console.log(result);
                showToast(result);
            }
        }
        catch(error){
            const message = error.message;
            console.log(message);
            showToast(message);
        }
    }

    onMounted(() => {
        getFeedbackInfo();
    })

</script>

<template>
    <section class="container">
        <OriginalPoster/>
        <h1 class="feedback_title">
            {{feedback.title}}
        </h1>
        <h2 class="feedback_desc">
            {{feedback.feedback}}
        </h2>
        <DisplayAllMessages/>
        <SendMessage :threadOwnerId="feedback.account_id"/>
    </section>
</template>

<style scoped>
    .container{
        width: 800px;
        min-height: calc(100vh - 100px);
        display: grid;
        grid-template-columns: auto 1fr;
        column-gap: 35px;
        row-gap: 15px;
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
        grid-column: 2/3;
        font-family: var(--preset-text-1-fontfamily);
        font-size: var(--preset-text-1-fontsize);
        font-weight: var(--preset-text-1-fontweight);
        line-height: var(--preset-text-1-lineheight);
        color: var(--white-0);
        margin: 0px;
        align-self: center;
    }

    .feedback_desc{
        grid-column: 1/3;
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        font-weight: var(--preset-text-2-fontweight);
        line-height: var(--preset-text-2-lineheight);
        color: var(--white-100);
        margin: 0px 0px 30px 0px;
    }

    @media(max-width: 870px){
        .container{
            width: 90%;
        }

        .feedback_title{
            font-size: 1.5rem;
        }

        .feedback_desc{
            font-size: 1.2rem;
        }
    }

    @media(max-width: 620px){
        .container{
            padding: 10px;
        }
    }
</style>