<script setup>
    import EnterEmail from './EnterEmail';
    import EnterName from './EnterName';
    import EnterFeedback from './EnterFeedback';
    import EnterRating from './SelectRating';
    import {motion} from 'motion-v';

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const name = e.target.elements.name.value;
            const email = e.target.elements.email.value;
            const feedback = e.target.elements.feedback.value;

            const response = await fetch('http://localhost:4000/create_feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, feedback})
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
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
</script>

<template>
    <motion.form 
        layout 
        class="form" 
        @submit="handleSubmit">
            <EnterEmail/>
            <EnterName/>
            <EnterFeedback/>
            <EnterRating/>
            <motion.button layout class="submit">
                Submit
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
        color: var(--white-200)
    }

    .submit:hover{
        background-color: var(--blue-100);
    }

    .submit:active{
        background-color: var(--blue-200);
    }
</style>