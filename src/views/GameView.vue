<template>
    <div class="back-container">
        <button @click="BackClick()"><svg fill="rgb(206,212,222)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path d="M4.943,5.606,1.024,9.525a3.585,3.585,0,0,0,0,4.95l3.919,3.919a1.5,1.5,0,1,0,2.121-2.121L4.285,13.492l18.25-.023a1.5,1.5,0,0,0,1.5-1.5v0a1.5,1.5,0,0,0-1.5-1.5L4.3,10.492,7.064,7.727A1.5,1.5,0,0,0,4.943,5.606Z"/></svg></button>
    </div>
    <div class="game-container">
        <div>
            <WordRow v-for="(char, index) in words" 
                :key="index"
                ref="WordRowRefs"
                @key-update="keyUpdate"
            />
        </div>
        <Keyboard @key-pressed="keyPress" ref="keyboardRefs"/>
    </div>
</template>
  
<script>
import WordRow from '../components/WordRow.vue'
import GameBoard from '../components/GameBoard.vue'
import Keyboard from '../components/Keyboard.vue'

export default {
    mounted(){
        const activeIndex = this.words.findIndex(el => el.active == true);
        this.$refs.WordRowRefs[activeIndex].setActive();

    },
    data(){
        return {
            CurrentView: null,
            words: [
                {active: true},
                {active: false},
                {active: false},
                {active: false},
                {active: false},
                {active: false}
            ],
            correctWord: "ОКЕАН",
            keyState: {char: '', state: 'entry'},
            states: {}
        }
    },
    methods: {
        BackClick(){
            this.$router.push("/hub/test");
        },
        removeActive(letterIndex){
            this.words[letterIndex].active = false; 
            this.$refs.WordRowRefs[letterIndex].removeActive()
        },
        setActive(letterIndex){
            this.words[letterIndex].active = true; 
            this.$refs.WordRowRefs[letterIndex].setActive()
        },
        keyPress(event) {
            const activeIndex = this.words.findIndex(el => el.active == true);

            if (event.key === 'Enter') {
                if ((this.words.length-1 > activeIndex) && this.$refs.WordRowRefs[activeIndex].filledWord())
                {
                    if (this.$refs.WordRowRefs[activeIndex].checkWord(this.correctWord) == false){
                        this.removeActive(activeIndex);
                        this.setActive(activeIndex+1);
                    }
                    else{
                        console.log("WIN");
                    }
                }
            }
            
            this.$refs.WordRowRefs[activeIndex].handleKeydown(event);
        },
        keyUpdate(char, state){
            this.$refs.keyboardRefs.stateClass(char, state);
        },
        
    },
    components: {
        WordRow,
        GameBoard,
        Keyboard
    }
}
</script>
  
<style scoped>
    .back-container{
        position: fixed;
        top: 2vh;
        left: 2vh;
    }

    .game-container {
        display: flex;
        flex-direction: column; 
        align-items: center; 
        justify-content: space-between;
        gap: 2vh;
    }
</style>