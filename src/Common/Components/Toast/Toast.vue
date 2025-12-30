<script setup>
    import {watch} from 'vue';
    import {motion, AnimatePresence} from 'motion-v';
    import {useToastStore} from '~/Store';
    import {storeToRefs} from 'pinia';

    const store = useToastStore();
    const {open, message} = storeToRefs(store);
    const {hideToast} = store;

    watch(open, () => {
        setTimeout(() => {
            hideToast();
        }, 4000)
    }, {flush: 'post'})

</script>

<template>
    <AnimatePresence>
        <motion.div 
            v-if="open" 
            class="toast"
            :initial="{x: '100%'}"
            :animate="{x: '-10%'}"
            :exit="{x: '100%'}"
            :transition="{duration: 0.4}"
            >
                {{message}}
            <img class="toast_close"/>
        </motion.div>
    </AnimatePresence>
</template>

<style scoped>
    .toast{
        width: fit-content;
        height: fit-content;
        padding: 15px;
        position: fixed;
        top: 30px;
        right: 10px;
        font-family: 'roboto';
        font-size: 1rem;
        color: white;
        background-color: var(--blue-0);
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
    }

    .toast_close{
        width: 17px;
        height: 17px;
        cursor: pointer;
        mask-image: url('./icons/close.svg');
        mask-position: center;
        mask-repeat: no-repeat;
        mask-size: 17px 17px;
        background-color: var(--white-0);

    }

    .toast_close:hover{
        background-color: var(--white-100);
    }

    .toast_close:active{
        background-color: var(--white-200);
    }
</style>