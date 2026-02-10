<script setup>
    import {ref} from 'vue';
    import EnterTitle from './EnterTitle';
    import EnterFeedback from './EnterFeedback';
    import {useToastStore} from '~/Store';
    import {motion} from 'motion-v';
    import {VueSpinner} from 'vue3-spinners';
    import {useRouter} from 'vue-router';

    const {showToast} = useToastStore();
    const loading = ref(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const title = e.target.elements.title.value;
            const feedback = e.target.elements.feedback.value;

            const response = await fetch('https://feedback-server.netlify.app/create_thread', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, feedback}),
                credentials: 'include'
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                showToast(result);
                router.push('/account/display_all_feedback')
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
</script>

<template>
    <motion.form 
        layout 
        class="form" 
        @submit="handleSubmit">
            <EnterTitle/>
            <EnterFeedback/>
            <motion.button layout class="submit" v-if="!loading">
                Submit
            </motion.button>
            <motion.button layout class="submit" v-else>
                <VueSpinner size="25" color="white"/>
            </motion.button>
    </motion.form>
</template>

<style scoped>
    .form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
    }

    .submit{
        width: 100%;
        height: 60px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-family: 'roboto';
        font-size: 1.2rem;
        line-height: 130%;
        letter-spacing: 0px;
        margin-top: 5px;
        background-color: var(--blue-0);
        color: var(--white-0)
    }

    .submit:hover{
        background-color: var(--blue-100);
    }

    .submit:active{
        background-color: var(--blue-200);
    }
</style>