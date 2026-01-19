<script setup>
    import {ref, watch} from 'vue';
    import {motion, AnimatePresence} from 'motion-v';

    const title = ref('');
    const error = ref('');

    const handleBlur = (e) => {
        const valueMissing = e.target.validity.valueMissing;

        if(valueMissing)
            error.value = "Can't be empty"
    }

    const handleInput = () => {
        error.value = '';
    }

</script>

<template>
    <AnimatePresence>
        <motion.fieldset layout class="title_fieldset">
            <motion.label layout class="title_label"> 
                Enter Title:
            </motion.label>
            <motion.input 
                layout
                class="title_input" 
                type="text" 
                name="title" 
                v-model="title"
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
    .title_fieldset{
        display: flex;
        flex-direction: column;
        gap: 5px;
        border: none;
        padding: 0px;
        margin: 0px;
    }

    .title_label{
        font-family: 'roboto';
        font-size: 1rem;
        line-height: 130%;
        letter-spacing: 0px;
        color: var(--white-200)
    }

    .title_input{
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

    .title_input:focus{
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