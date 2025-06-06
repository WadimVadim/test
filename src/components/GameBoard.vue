<template>
    <div class="board" v-for="(w,indexWords) in words" :key="indexWords">
        <LetterBox v-for="index in w" :key="index"
            :disabled = true
        />
    </div>
</template>

<script>
import LetterBox from '../components/LetterBox.vue'

export default {
    data() {
        return {
            words: [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']],
        };
    },
    components: {
        LetterBox
    }
};
</script>

<style scoped>
    .board {
        display: flex;
        align-items: center;
        margin: 0.5vh;
        gap: 0.5vh;
    }
</style>