<template>
  <div class="letter" :class="[stateClass, {'letter-focus': isActive}]">
    {{ letter }}
  </div>
</template>

<script>
export default {
  props: {
    letter: {
      type: String,
      default: '',
      validator: value => /^[A-Za-z]?$/.test(value)
    },
    state: {
      type: String,
      default: 'empty',
      validator: value => ['empty', 'correct', 'incorrect', 'partially'].includes(value)
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    stateClass() {
      return{
        'letter-correct': this.state === 'correct',
        'letter-incorrect': this.state === 'incorrect',
        'letter-partially': this.state === 'partially'
      }
    }
  }
};
</script>


<style scoped>
    .letter {
        width: 7vh;
        height: 7vh;
        background-color: rgb(43, 43, 43);
        border-radius: 0.3vh;
        border: 0.2vh solid rgb(66,66,66);
        font-size: 4vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .letter-focus {
      box-shadow: 0 0 0.2vh 0.2vh rgb(206,212,222);
    }

    .letter-correct {
      background-color: rgb(60,170,61);
      /* box-shadow: 0 0 0.2vh 0.2vh rgb(21, 216, 10); */
    }

    .letter-incorrect {
      background-color: rgb(220,47,77);
      /* box-shadow: 0 0 0.2vh 0.2vh rgb(224, 45, 26); */
    }

    .letter-partially{
      background-color: rgb(222,177,69);
      /* box-shadow: 0 0 0.2vh 0.2vh rgb(208, 219, 10); */
    }
</style>