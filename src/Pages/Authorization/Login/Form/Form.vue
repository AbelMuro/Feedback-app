<script setup>
    import {motion} from 'motion-v';
    import EnterEmail from '~/Common/Components/EnterEmail';
    import EnterPassword from '~/Common/Components/EnterPassword';
    import {useToastStore} from '~/Store';

    const store = useToastStore();
    const {showToast} = store;

    const handleSubmit = async (e) => {
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        try{
            const response = await fetch('http://localhost:4000/login', {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email, password
                })
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
    }

</script>

<template>
    <motion.form 
        layout 
        class="form" 
        @submit="handleSubmit">
            <EnterEmail/>
            <EnterPassword/>
            <button class="form_submit">
                Login
            </button>
    </motion.form>
</template>

<style scoped>
    .form{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .form_submit{
        width: 100%;
        height: 60px;
        border-radius: 10px;
        border: none;
        background-color: var(--blue-0);
        cursor: pointer;
        color: white;
        font-family: var(--preset-text-2-fontfamily);
        font-size: var(--preset-text-2-fontsize);
        font-weight: var(--preset-text-2-fontweight);
        line-height: var(--preset-text-2-lineheight);
        letter-spacing: var(--preset-text-2-letterspacing);
    }

    .form_submit:hover{
        background-color: var(--blue-100);
    }   

    .form_submit:active{
        background-color: var(--blue-200);
    }
</style>