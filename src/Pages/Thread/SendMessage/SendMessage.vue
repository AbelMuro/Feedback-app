<script setup>
    import {ref} from 'vue';
    import {motion, LayoutGroup} from 'motion-v';
    import {VueSpinner} from 'vue3-spinners';
    import {useRoute} from 'vue-router';

    const {threadOwnerId} = defineProps(['threadOwnerId']); 

    const message = ref('');
    const error = ref('');
    const loading = ref(false);
    const route = useRoute();
    const threadId = route.params.id;

    const handleInput = () => {
        error.value = '';
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            error.value = "Can't be empty";
    }

    const handleInvalid = () => {
        error.value = "Can't be empty";
    }

    const handleSubmit = async (e) => {
        try{
            const textAreaMessage = e.target.elements.message.value;
            loading.value = true;
            e.preventDefault();
            const response = await fetch('https://feedback-server.netlify.app/create_message', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    message: textAreaMessage,
                    threadId,
                    threadOwnerId
                }),
                credentials: 'include'
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                const event = new CustomEvent('new_response');
                document.dispatchEvent(event);
                message.value = '';
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
        finally{
            loading.value = false;
        }
    }

</script>

<template>
    <LayoutGroup>
        <motion.form layout class="form" @submit="handleSubmit">
            <motion.textarea
                layout
                name="message"
                class="textarea"
                :value="message"
                @change="(e) => message = e.target.value"
                @input="handleInput"
                @blur="handleBlur"
                @invalid="handleInvalid"
                placeholder="Enter reply here..."
                required
            />
            <motion.div 
                layout 
                :initial="{scale: 0}"
                :animate="{scale: 1}"
                class="error_message" 
                v-if="error">
                {{error}}
            </motion.div>
            <motion.button layout class="submit" v-if="!loading">
                Submit Response
            </motion.button>
            <motion.button layout class="submit" v-else>
                <VueSpinner size="25" color="white"/>
            </motion.button>
        </motion.form>
    </LayoutGroup>
</template>

<style scoped>
    .form{
        grid-column: 1/3;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .textarea{
        width: 100%;
        height: 120px;
        padding: 15px;
        border-radius: 15px;
        border: 1px solid var(--blue-0);
        background-color: transparent;
        resize: none;
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        font-weight: var(--preset-text-3-fontweight);
        line-height: var(--preset-text-3-lineheight);
        color: var(--white-0);
    }

    .textarea:focus{
        outline: 0px;
        border-width: 3px;
    }
    
    .submit{
        width: 100%;
        height: 60px;
        border-radius: 15px;
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        font-weight: var(--preset-text-3-fontweight);
        line-height: var(--preset-text-3-lineheight);
        color: var(--white-0);
        background-color: var(--blue-0);
        border: none;
        cursor: pointer;
    }

    .submit:hover{
        background-color: var(--blue-100);
    }

    .submit:active{
        background-color: var(--blue-200);
    }

    .error_message{
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        font-weight: var(--preset-text-3-fontweight);
        line-height: var(--preset-text-3-lineheight);
        letter-spacing: var(--preset-text-3-letterspacing);
        color: var(--red-100);
    }
</style>
