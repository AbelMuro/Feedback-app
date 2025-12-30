<script setup>
    import {ref, watch} from 'vue';
    import {motion, AnimatePresence} from 'motion-v';

    const feedback = ref('');
    const error = ref('');

    const handleBlur = (e) => {
        const valueMissing = e.target.validity.valueMissing;
        const invalid = e.target.validity.typeMismatch;

        if(valueMissing)
            error.value = "Can't be empty"
        else if(invalid)
            error.value = "Invalid email";   
    }

    const handleInput = () => {
        error.value = '';
    }

</script>

<template>
    <AnimatePresence>
        <motion.fieldset layout class="feedback_fieldset">
            <motion.label layout class="feedback_label"> 
                Enter Feedback:
            </motion.label>
            <motion.textarea 
                layout
                class="feedback_input" 
                name="feedback"
                v-model="feedback"
                @blur="handleBlur"
                @input="handleInput"
                required
                >
            </motion.textarea>
            <motion.div 
                layout
                class="error_message" 
                v-if="error"
                :initial="{scale: 0}"
                :animate="{scale: 1}"
                :transition="{duration: 0.4}"
                :exit="{scale: 0}"
                >
                {{error}}
            </motion.div>
        </motion.fieldset>
    </AnimatePresence>
</template>

<style scoped>
    .feedback_fieldset{
        display: flex;
        flex-direction: column;
        gap: 5px;
        border: none;
        padding: 0px;
        margin: 0px;
    }

    .feedback_label{
        font-family: 'roboto';
        font-size: 1rem;
        line-height: 130%;
        letter-spacing: 0px;
        color: var(--white-200);
    }

    .feedback_input{
        width: 100%;
        height: 120px;
        border-radius: 5px;
        font-family: 'roboto';
        font-size: 1rem;
        line-height: 130%;
        letter-spacing: 0px;
        border: 1px solid black;
        padding: 20px;
        resize: none;
    }

    .feedback_input:focus{
        outline: none;
    }

    .error_message{
        transform-origin: 20px center;
        font-family: 'roboto';
        font-size: 1rem;
        line-height: 130%;
        letter-spacing: 0px;
        color: var(--red-100);
    }
</style>