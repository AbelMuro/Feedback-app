<script setup>
    import {ref, onMounted} from 'vue'
    import Feedback from './Feedback';
    import {useToastStore} from '~/Store';
    import {useRouter} from 'vue-router'; 

    const router = useRouter();
    const store = useToastStore();
    const {showToast} = store;
    const allFeedback = ref([]);

    const handleStart = () => {
        router.push('/feedback');
    }

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
            v-if="allFeedback.length"
            v-for="(feedback) in allFeedback" 
            :key="feedback.id" 
            :id="feedback.id"
            :title="feedback.title"
            :feedback="feedback.feedback"
            />
        <p class="message" v-if="!allFeedback.length">
            You have no feedback. Create feedback using the following button
        </p>
        <button class="submit" @click="handleStart" v-if="!allFeedback.length">
            Submit Feedback
        </button>
    </section>
</template>

<style scoped>
    .all_feedback{
        width: 500px;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        gap: 25px;
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

    .message{
        margin: 0px;
        color: var(--white-0);
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        font-weight: var(--preset-text-2-fontweight);
        line-height: var(--preset-text-2-lineheight);
        letter-spacing: var(--preset-text-2-letterspacing);
        text-align: center;
    }

    .submit{
        padding: 0px 15px;
        height: 60px;
        border: 1px solid var(--blue-0);
        border-radius: 10px;
        color: var(--white-0);
        background-color: var(--blue-300);
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        font-weight: var(--preset-text-2-fontweight);
        line-height: var(--preset-text-2-lineheight);
        cursor: pointer;
        position: relative;
    }

    .submit::after{
        content: '';
        position: absolute;
        inset: 0px;
        margin: auto;
        width: 100%;
        height: 60px;
        background-color: var(--blue-0);
        filter: var(--blur-button);
        z-index: var(--farthest);
        transition: all 0.2s linear;
    }

    .submit:hover{
        background-color: var(--blue-200);
    }

    .submit:hover::after{
        filter: var(--blur-button-hover)
    }

    .submit:active{
        background-color: var(--blue-100);
    }

    .submit:active::after{
        filter: var(--blur-button-active);
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