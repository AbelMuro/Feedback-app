<script setup>
    import {motion, AnimatePresence} from 'motion-v';
    import {watch} from 'vue';
    const {open, message, handleOpen, handleSubmit} = defineProps(['open', 'message', 'handleOpen', 'handleSubmit'])
    


</script>

<template>
    <AnimatePresence>
        <motion.div 
            v-if="open"
            :initial="{opacity: 0}"
            :animate="{opacity: 1}"
            :exit="{opacity: 0}"
            class="overlay">
                <motion.dialog 
                    v-if="open"
                    :initial="{scale: 0}"
                    :animate="{scale: 1}"
                    :exit="{scale: 0}"
                    :open="true" 
                    class="dialog"> 
                        <p class="dialog_message">
                            {{message}}
                        </p>
                        <button class="dialog_cancel" @click="handleOpen">
                            Cancel
                        </button>
                        <button class="dialog_submit" @click="handleSubmit">
                            Logout
                        </button>
                </motion.dialog>
        </motion.div>
    </AnimatePresence>
</template>

<style scoped>
    .overlay{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: var(--black-transparent);
    }

    .dialog{
        width: fit-content;
        height: fit-content;
        border-radius: 15px;
        padding: 25px;
        border: none;
        background-color: rgb(1, 1, 113);
        position: absolute;
        inset: 0px;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 25px;
        row-gap: 20px;
    }

    .dialog_message{
        grid-column: 1/3;
        grid-row: 1/2;
        color: var(--white-0);
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        line-height: var(--preset-text-2-lineheight);
        letter-spacing: var(--preset-text-2-letterspacing);
        margin: 0px;
    }

    .dialog_cancel{
        width: 100px;
        height: 45px;
        border-radius: 10px;
        background-color: var(--white-200);
        border: none;
        color: var(--black-100);
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        line-height: var(--preset-text-3-lineheight);
        letter-spacing: var(--preset-text-3-letterspacing);
        justify-self: end;
        cursor: pointer;
    }

    .dialog_cancel:hover{
        background-color: var(--white-100);
    }

    .dialog_cancel:active{
        background-color: var(--white-0);
    }

    .dialog_submit{
        width: 100px;
        height: 45px;
        border-radius: 10px;
        background-color: var(--blue-200);
        border: none;
        color: var(--white-100);
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        line-height: var(--preset-text-3-lineheight);
        letter-spacing: var(--preset-text-3-letterspacing);
        cursor: pointer;
    }

    .dialog_submit:hover{
        background-color: var(--blue-100);
    }

    .dialog_submit:active{
        background-color: var(--blue-0);
    }
</style>