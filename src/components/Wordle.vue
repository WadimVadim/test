<template>
    <div>
        <div>
            <input v-for="(letter,index) in word" :key="index"
            v-model="word[index]"
            ref="inputs"
            class="letter"
            @keydown="handleKeydown($event, index)"
            maxlength="1"
        />
        </div>
        <div v-for="(w,indexWords) in words" :key="indexWords">
            <input v-for="(letter,index) in w" :key="index"
                :disabled = true
                class="letter"
                maxlength="1"
            />
        </div>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      word: ['', '', '', '', ''],
      words: [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']],
      isInputDisabled: [false, false, false, false, false]
    };
  },
  methods: {
    handleKeydown(event, index) {
        const key = event.key;
        const inputs = this.$refs.inputs;

        event.preventDefault();

        if (key === 'Backspace') {
            if (this.word[index] === '' && index > 0) {
                inputs[index - 1].focus();
                return;
            }
            this.word[index] = '';
            return;
        }

        if (key === 'ArrowRight' && index < 4) {
            inputs[index + 1].focus();
            return;
        }

        if (key === 'ArrowLeft' && index > 0) {
            inputs[index - 1].focus();
            return;
        }

        if (/^[a-zA-Zа-яА-ЯёЁ]$/.test(key)) {
            this.word[index] = key;

            const input = inputs[index];
            input.value = key;

            if (index < 4) {
                inputs[index + 1].focus();
            }
        }
    }
  }
};
</script>

<style scoped>
    .letter {
        height: 8vh;
        width: 8vh;
        margin: 0.5vh;
        font-size: 64pt;
        text-align: center;
        text-transform: uppercase;
        border-radius: 1vh;
        caret-color: transparent;
    }
</style>