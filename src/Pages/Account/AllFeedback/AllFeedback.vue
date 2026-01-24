<script setup>
    import {ref, onMounted} from 'vue'
    import Feedback from './Feedback';
    import {useToastStore} from '~/Store';

    const store = useToastStore();
    const {showToast} = store;
    const allFeedback = ref([]);

    const getFeedback = async () => {
        try{
            const response = await fetch('http://localhost:4000/get_all_threads', {
                method: 'GET',
                credentials: 'include',
            });

            if(response.status === 200){
                const result = await response.json();
                console.log(result);
                allFeedback.value = result;
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
        getFeedback();
    })
</script>

<template>
    <section class="all_feedback">
        <h1 class="all_feedback_title">
            My Feedback
        </h1>
        <Feedback 
            v-for="(feedback) in allFeedback" 
            :key="feedback.id" 
            :id="feedback.id"
            :title="feedback.title"
            :feedback="feedback.feedback"
            />
    </section>
</template>

<style scoped>
    .all_feedback{
        width: 500px;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 25px;
        margin: auto;
        transition: all 0.2s linear, min-height 0s;
    }
    
    .all_feedback_title{
        font-family: var(--preset-text-1-fontfamily);
        font-size: var(--preset-text-1-fontsize);
        line-height: var(--preset-text-1-lineheight);
        letter-spacing: var(--preset-text-1-letterspacing);
        color: var(--white-0);
        margin: 0px;
        align-self: center;
    }

    @media(max-width: 720px){
        .all_feedback{
            min-height: calc(100vh - 100px - 80px);
        }
    }

    @media(max-width: 620px){
        .all_feedback{
            width: 100%;
            min-height: calc(100vh - 80px - 80px);
        }

        .all_feedback_title{
            font-size: 1.5rem;
        }
    }
</style>