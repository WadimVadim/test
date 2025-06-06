<template>
    <div class="board">
        <LetterBox
            v-for="(letter, index) in word"
            :key="index"
            :letter="letter.char"
            :state="letter.state"
            :isActive="letter.active"
        />
    </div>
</template>

<script>
import LetterBox from '../components/LetterBox.vue'

export default {
    components: {
        LetterBox
    },
    data() {
        return {
            word: [
                { char: '', state: 'empty', active: false },
                { char: '', state: 'empty', active: false },
                { char: '', state: 'empty', active: false },
                { char: '', state: 'empty', active: false },
                { char: '', state: 'empty', active: false }
            ],
        };
    },
    methods: {
        checkWord(correctWord){
            for (let i = 0; i < this.word.length; i++) {
                console.log(this.word[i].state);
                if (correctWord[i] == this.word[i].char) {
                    this.word[i].state = 'correct';
                    this.$emit('key-update', this.word[i].char, "correct");
                }
                else if (correctWord.includes(this.word[i].char))
                {
                    this.word[i].state = 'partially';
                    this.$emit('key-update', this.word[i].char, "partially");
                }
                else
                {
                    this.word[i].state = 'incorrect';
                    this.$emit('key-update', this.word[i].char, "incorrect");
                }
            }
            
            return false;
        },
        filledWord(){
            return this.word.every(el => el.char != '');
        },
        removeActive(){
            const activeIndex = this.word.findIndex(el => el.active == true);
            this.word[activeIndex].active = false;
        },
        setActive(){
            this.word[0].active = true;
        },
        getActiveIndex(){
            return this.word.findIndex(item => item.active);
        },
        prevActive(currentIndex){
            this.word[currentIndex-1].active = true;
            this.word[currentIndex].active = false;
        },
        nextActive(currentIndex){
            if (currentIndex < 4) {
                this.word[currentIndex+1].active = true;
                this.word[currentIndex].active = false;
            }
        },
        removeLetter(){
            const currentIndex = this.getActiveIndex();

            if (currentIndex == (this.word.length-1) && this.word[currentIndex].char != '') {
                this.word[currentIndex].char = '';
            }
            else if (currentIndex > 0) {
                this.word[currentIndex-1].char = '';
                this.prevActive(currentIndex)
            }
        },
        setLetter(letter){
            const currentIndex = this.getActiveIndex();
            this.word[currentIndex].char = letter;
            this.nextActive(currentIndex)
        },
        handleKeydown(event) {
            console.log(event);
            const key = event.key;
            console.log(key);
            if (key === 'Backspace') {
                this.removeLetter()
                return;
            }

            if (/^[а-яА-ЯёЁ]$/.test(key)) {
                this.setLetter(key.toUpperCase())
                return;
            }
        },
    },
    mounted() {
        window.addEventListener('keydown', this.handleKeydown);
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    }
};
</script>

<style scoped>
    .board {
        display: flex;
        margin: 0.5vh;
        gap: 0.5vh;
    }
</style>