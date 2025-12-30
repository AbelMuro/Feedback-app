<script setup>
    import {ref, watch} from 'vue';
    import {motion, AnimatePresence} from 'motion-v';

    const email = ref('');
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
        <motion.fieldset layout class="email_fieldset">
            <motion.label layout class="email_label"> 
                Enter Email:
            </motion.label>
            <motion.input 
                layout
                class="email_input" 
                type="email" 
                name="email" 
                v-model="email"
                @blur="handleBlur"
                @input="handleInput"
                required
                />
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
    .email_fieldset{
        display: flex;
        flex-direction: column;
        gap: 5px;
        border: none;
        padding: 0px;
        margin: 0px;
    }

    .email_label{
        font-family: 'roboto';
        font-size: 1rem;
        line-height: 130%;
        letter-spacing: 0px;
        color: var(--white-200)
    }

    .email_input{
        width: 100%;
        height: 60px;
        border-radius: 5px;
        font-family: 'roboto';
        font-size: 1rem;
        line-height: 130%;
        letter-spacing: 0px;
        border: 1px solid black;
        padding: 0px 20px;
    }

    .email_input:focus{
        outline: none;
    }

    .error_message{
        font-family: 'roboto';
        font-size: 1rem;
        line-height: 130%;
        letter-spacing: 0px;
        color: var(--red-100);
    }
</style>