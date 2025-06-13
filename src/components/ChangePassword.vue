<template>
  <div class="rectangle-enter">
    <div class="back-container">
      <svg @click="BackClick()" fill="rgb(206,212,222)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13.93,12L21.666,2.443c.521-.644,.422-1.588-.223-2.109-.645-.522-1.588-.421-2.109,.223l-7.334,9.06L4.666,.557c-1.241-1.519-3.56,.357-2.332,1.887l7.736,9.557L2.334,21.557c-.521,.644-.422,1.588,.223,2.109,.64,.519,1.586,.424,2.109-.223l7.334-9.06,7.334,9.06c.524,.647,1.47,.742,2.109,.223,.645-.521,.744-1.466,.223-2.109l-7.736-9.557Z"/></svg>
      <!-- <button @click="BackClick()"><svg fill="rgb(206,212,222)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13.93,12L21.666,2.443c.521-.644,.422-1.588-.223-2.109-.645-.522-1.588-.421-2.109,.223l-7.334,9.06L4.666,.557c-1.241-1.519-3.56,.357-2.332,1.887l7.736,9.557L2.334,21.557c-.521,.644-.422,1.588,.223,2.109,.64,.519,1.586,.424,2.109-.223l7.334-9.06,7.334,9.06c.524,.647,1.47,.742,2.109,.223,.645-.521,.744-1.466,.223-2.109l-7.736-9.557Z"/></svg></button> -->
    </div>
        <p class="text">Смена пароля</p>
        <input v-model="OldPassword" type="password" placeholder="Введите текущий пароль"/>
        <input v-model="NewPassword" type="password" placeholder="Введите новый пароль"/>
        <button class="button-word">Подтвердить</button>
  </div>  
</template>

<script>
import { ref } from 'vue';

const text = ref('');

export default {
  data() {
    return {
      OldPassword: '',
      NewPassword: ''
    };
  },
  methods: {
    toUpper(event) {
      let value = event.target.value;
      if (value.length > 5) {
        value = value.slice(0, 5);
      }

      this.word = value.replace(/^[A-Za-z]?$/, '').toUpperCase();
    },
    BackClick() {
      this.$emit('close');
    }
  }
}
</script>


<style scoped>
  .back-container{
        position: relative;
        top: 2vh;
        left: 17vh;
    }

    .rectangle-enter {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
        width: 40vh;
        height: 35vh;
        background-color: rgb(33,36,48);
        border-radius: 3vh;
        gap: 1vh;
    }

    .button-word {
      background-color: rgb(52,110,255);
    }

    .text {
      color: white;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      font-size: 2vh;
    }
</style>