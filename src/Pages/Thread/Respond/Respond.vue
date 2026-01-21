<script setup>
    import {ref} from 'vue';
    import {VueSpinner} from 'vue3-spinners';
    import {useRoute} from 'vue-router';

    const input = ref('');
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
            loading.value = true;
            e.preventDefault();
            const response = await fetch('http://localhost:4000/create_response', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    response: input.value,
                    threadId
                }),
                credentials: 'include'
            });

            if(response.status === 200){
                const result = await response.json();
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
        finally{
            loading.value = false;
        }
    }

</script>

<template>
    <form class="form" @submit="handleSubmit">
        <textarea
            class="textarea"
            v-model="input"
            @input="handleInput"
            @blur="handleBlur"
            @invalid="handleInvalid"
            placeholder="Enter reply here..."
            required
        />
        <button class="submit" v-if="!loading">
            Submit Response
        </button>
        <button class="submit" v-else>
            <VueSpinner size="25" color="white"/>
        </button>
    </form>
</template>

<style scoped>
    .form{
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
</style>