<script setup>
    import icons from './icons';
    import {ref} from 'vue';

    const rating = ref(0);
    const hover = ref(0)

    const handleStars = (newRating) => {
        rating.value = newRating;
    }

    const handleHover = (rating) => {
        hover.value = rating;
    }

    const handleMouseLeave = () => {
        hover.value = 0;
    }

</script>

<template>
    <section class="container_star">
        <p class="star_title">
            Select Rating: 
        </p>
        <div class="stars">
            <img 
                v-if="rating < 1 && hover < 1"
                :src="icons['unfilledStar']" 
                @click="handleStars(1)"
                @mouseenter="handleHover(1)"
                @mouseleave="handleMouseLeave()"
                />
            <img 
                v-else
                :src="icons['filledStar']" 
                @click="handleStars(1)"
                @mouseenter="handleHover(1)"
                @mouseleave="handleMouseLeave()"
                />
            <img 
                v-if="rating < 2 && hover < 2"
                :src="icons['unfilledStar']" 
                @click="handleStars(2)"
                @mouseenter="handleHover(2)"
                @mouseleave="handleMouseLeave()"
                />
            <img 
                v-else
                :src="icons['filledStar']" 
                @click="handleStars(2)"
                @mouseenter="handleHover(2)"
                @mouseleave="handleMouseLeave()"
                />     
            <img 
                v-if="rating < 3 && hover < 3"
                :src="icons['unfilledStar']" 
                @click="handleStars(3)"
                @mouseenter="handleHover(3)"
                @mouseleave="handleMouseLeave()"
                />
            <img 
                v-else
                :src="icons['filledStar']" 
                @click="handleStars(3)"
                @mouseenter="handleHover(3)"
                @mouseleave="handleMouseLeave()"
                />

            <img 
                v-if="rating < 4 && hover < 4"
                :src="icons['unfilledStar']" 
                @click="handleStars(4)"
                @mouseenter="handleHover(4)"
                @mouseleave="handleMouseLeave()"
                />
            <img 
                v-else
                :src="icons['filledStar']" 
                @click="handleStars(4)"
                @mouseenter="handleHover(4)"
                @mouseleave="handleMouseLeave()"
                />

            <img 
                v-if="rating < 5 && hover < 5"
                :src="icons['unfilledStar']" 
                @click="handleStars(5)"
                @mouseenter="handleHover(5)"
                @mouseleave="handleMouseLeave()"
                />
            <img 
                v-else
                :src="icons['filledStar']" 
                @click="handleStars(5)"
                @mouseenter="handleHover(5)"
                @mouseleave="handleMouseLeave()"
                />
        </div>
    </section>

</template>

<style scoped>
    .container_star{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .stars{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
    }

    .star_title{
        font-family: 'roboto';
        font-size: 1rem;
        line-height: 140%;
        letter-spacing: 0px;
        margin: 0px;
        color: var(--white-200);
    }

    .stars > img{
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
</style>
