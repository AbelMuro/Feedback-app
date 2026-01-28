<script setup>
    import ReEnterPassword from '~/Common/Components/ReEnterPassword';
    import {LayoutGroup, motion} from 'motion-v';
    import {useToastStore} from '~/Store';
    import { VueSpinner } from 'vue3-spinners';
    import {ref} from 'vue';

    const store = useToastStore();
    const {showToast} = store;
    const password = ref('');
    const reEnterPassword = ref('');
    const error = ref('');
    const loading = ref(false);

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            loading.value = true;
            if(password.value !== reEnterPassword.value){
                error.value = "Password's don't match";
                return;
            }

            const response = await fetch('http://localhost:4000/update_password', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({password: password.value}),
                credentials: 'include'
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                showToast(result);
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
        finally{
            loading.value = false;
        }
    }   
</script>

<template>
    <LayoutGroup>
        <motion.form layout class="settings" @submit="handleSubmit">
            <motion.fieldset layout class="settings_header">
                <label layout class="settings_title">
                    Update Password
                </label>
                <label layout class="settings_desc">
                    Password must have at least 1 letter, 1 number, 1 symbol
                    and 8 characters.
                </label>
            </motion.fieldset>
            <motion.fieldset layout class="settings_input">
                <ReEnterPassword v-model="password"/>
            </motion.fieldset>
            <motion.fieldset layout class="settings_input">
                <ReEnterPassword v-model="reEnterPassword"/>
            </motion.fieldset>
            <motion.div 
                layout
                v-if="error"
                class="error_message">
                    {{error}}
            </motion.div>
            <motion.button layout class="submit" v-if="!loading">
                Update Password
            </motion.button>
            <motion.button layout class="submit" v-else>
                <VueSpinner size="25" color="white"/>
            </motion.button>
        </motion.form>
    </LayoutGroup>
</template>

<style scoped>
    .settings{
        width: 500px;
        height: 100%;
        padding: 25px;
        display: grid;
        grid-template-columns: repeat(1fr);
        column-gap: 15px;
        row-gap: 10px;
        align-content: start;
        justify-self: center;
        transition: all 0.2s linear, height 0s;
    }

    .settings_header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        grid-row: 1/2;
        border: none;
        padding: 0px;
        margin: 0px;
    }

    .settings_title{
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        line-height: var(--preset-text-2-lineheight);
        letter-spacing: var(--preset-text-2-letterspacing);
        color: var(--white-0);
        margin: 0px;
        text-align: center;
        justify-self: center;
        align-self: center;
    }

    .settings_desc{
        font-family: var(--preset-text-3-fontfamily);
        font-size: var(--preset-text-3-fontsize);
        line-height: var(--preset-text-3-lineheight);
        letter-spacing: var(--preset-text-3-letterspacing);
        color: var(--white-100);
        margin: 0px;
        justify-self: center;
        align-self: center;
        text-align: center;
    }

    .settings_input{
        width: 100%;
        border: none;
        margin: 0px;
        padding: 0px;
    }

    .settings_input:nth-of-type(2){
        grid-row: 2/3;
    }

    .settings_input:nth-of-type(3){
        grid-row: 3/4;
    }

    .submit{
        grid-row: 4/5;
        margin: auto;
        width: 100%;
        height: 60px;
        padding: 0px 25px;
        border: none;
        border-radius: 15px;
        background-color: var(--blue-0);
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        line-height: var(--preset-text-2-lineheight);
        letter-spacing: var(--preset-text-2-letterspacing);
        color: var(--white-0);
        cursor: pointer;
    }

    .submit:hover{
        background-color: var(--blue-100);
    }

    .submit:active{
        background-color: var(--blue-200);
    }

    @media(max-width: 720px){
        .settings{
            height: calc(100vh - 100px - 80px);
        }
    }


    @media(max-width: 620px){
        .settings{
            width: 100%;
            height: calc(100vh - 80px - 80px);
        }

        .settings_title{
            font-size: 1.5rem;
        }

        .settings_desc{
            font-size: 1.1rem;
        }

        .submit{
            font-size: 1rem;
            height: 50px;
        }
    }
</style>