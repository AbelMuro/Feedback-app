<script setup>
    import {motion, LayoutGroup} from 'motion-v';
    import EnterEmail from '~/Common/Components/EnterEmail';
    import EnterPassword from '~/Common/Components/EnterPassword';
    import {useRouter} from 'vue-router';

    const router = useRouter();

    const handleSubmit = async (e) => {

        try{
            e.preventDefault();
            const email = e.target.elements.email.value;
            const password = e.target.elements.password.value;

            const response = await fetch('http://localhost:4000/update_account', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email, password
                }),
                credentials: 'include',
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
            }
            else if (response.status === 401){
                const result = await response.text();
                console.log(result);
                router.push('/login');
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
    <LayoutGroup>
        <motion.form layout class="settings" @submit="handleSubmit">
            <motion.fieldset layout class="settings_header">
                <label layout class="settings_title">
                    Account Details
                </label>
                <label layout class="settings_desc">
                    Update your email or password
                </label>
            </motion.fieldset>
            <motion.fieldset layout class="settings_email">
                <EnterEmail/>
            </motion.fieldset>
            <motion.fieldset layout class="settings_password">
                <EnterPassword/>
            </motion.fieldset>
            <motion.button layout class="submit">
                Update Account
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
    }

    .settings_email{
        width: 100%;
        border: none;
        margin: 0px;
        padding: 0px;
        grid-row: 2/3;
    }

    .settings_password{
        width: 100%;
        border: none;
        margin: 0px;
        padding: 0px;
        grid-row: 3/4;
    }

    .submit{
        grid-row: 4/5;
        margin: auto;
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
</style>