<script setup>

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            const response = await fetch('http://localhost:4000/create_response', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
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
    }

</script>

<template>
    <form class="form" @submit="handleSubmit">
        <textarea
            class="textarea"
            placeholder="Enter reply here..."
        />
        <button class="submit">
            Submit Response
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