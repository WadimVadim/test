<template>
  <div class="keyboard">
    <div 
      v-for="(row, rowIndex) in keys" 
      :key="'row-' + rowIndex" 
      class="keyboard-row"
    >
      <button 
        v-for="(key, keyIndex) in row" 
        :key="'key-' + rowIndex + '-' + keyIndex"
        class="keyboard-key"
        :class="[
          {'keyboard-key-correct': key.state == 'correct'},
          {'keyboard-key-incorrect': key.state == 'incorrect'},
          {'keyboard-key-partially': key.state == 'partially'},
          {'key-size-1': rowIndex == 0}, 
          {'key-size-2': rowIndex == 1}, 
          {'key-size-3': rowIndex == 2}
        ]"
        @click="PressKey(key.char)"
      >
        <!-- {{ key }} -->
        <template v-if="key.char == 'Backspace'">
          <svg fill="#f0f0f0" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m19 2h-9.044a4.966 4.966 0 0 0 -3.946 1.931l-5.8 7.455a1 1 0 0 0 0 1.228l5.8 7.455a4.966 4.966 0 0 0 3.946 1.931h9.044a5.006 5.006 0 0 0 5-5v-10a5.006 5.006 0 0 0 -5-5zm3 15a3 3 0 0 1 -3 3h-9.044a2.979 2.979 0 0 1 -2.368-1.158l-5.321-6.842 5.321-6.842a2.979 2.979 0 0 1 2.368-1.158h9.044a3 3 0 0 1 3 3zm-4.793-6.793-1.793 1.793 1.793 1.793a1 1 0 1 1 -1.414 1.414l-1.793-1.793-1.793 1.793a1 1 0 0 1 -1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 1.414-1.414l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 1.414z"/></svg>
        </template>
        <template v-else-if="key.char == 'Enter'">
          <p>ПРОВЕРИТЬ</p>
        </template>
        <template v-else>
          {{ key.char }}
        </template>
      </button>
    </div>
  </div>
</template>

<script>
// import WordRow from '../components/WordRow.vue'
export default {
  name: "Keyboard",
  data() {
    return {
      keys: [
          [
              { char: "Й", state: "empty" }, 
              { char: "Ц", state: "empty" }, 
              { char: "У", state: "empty" }, 
              { char: "К", state: "empty" }, 
              { char: "Е", state: "empty" }, 
              { char: "Н", state: "empty" }, 
              { char: "Г", state: "empty" }, 
              { char: "Ш", state: "empty" }, 
              { char: "Щ", state: "empty" }, 
              { char: "З", state: "empty" }, 
              { char: "Х", state: "empty" }, 
              { char: "Ъ", state: "empty" }
          ],
          [
              { char: "Ф", state: "empty" }, 
              { char: "Ы", state: "empty" }, 
              { char: "В", state: "empty" }, 
              { char: "А", state: "empty" }, 
              { char: "П", state: "empty" }, 
              { char: "Р", state: "empty" }, 
              { char: "О", state: "empty" }, 
              { char: "Л", state: "empty" }, 
              { char: "Д", state: "empty" }, 
              { char: "Ж", state: "empty" }, 
              { char: "Э", state: "empty" }
          ],
          [
              { char: "Я", state: "empty" }, 
              { char: "Ч", state: "empty" }, 
              { char: "С", state: "empty" }, 
              { char: "М", state: "empty" }, 
              { char: "И", state: "empty" }, 
              { char: "Т", state: "empty" }, 
              { char: "Ь", state: "empty" }, 
              { char: "Б", state: "empty" }, 
              { char: "Ю", state: "empty" }, 
              { char: "Backspace", state: "empty" }
          ],
          [
              { char: "Enter", state: "empty" }
          ]
      ],
      reKey: [
        {"<-": "Backspace"},
        {"Проверка": "Enter"}
      ]
    };
  },
  props: {
    keyStates: {
      type: Object,
      default: () => ({}) // По умолчанию пустой объект
    }
  },
  computed: {
    // stateClass(char, state) {
    //   console.log(`CHAR: ${char}`)
    //   this.keys[0].forEach((row) => {
    //     console.log(row);
    //     console.log(char);
    //     if (row.char == char) {
    //       row.state = `keyboard-key-${state}`;
    //       // row.state = state;
    //     }
    //   })
      // const state = this.keyStates[key];
      // switch (state) {
      //   case 'correct':
      //     return 'keyboard-key-correct';
      //   case 'incorrect':
      //     return 'keyboard-key-incorrect';
      //   case 'partially':
      //     return 'keyboard-key-partially';
      //   default:
      //     return '';
      // }
    // }
  },
  methods: {
    stateClass(char, state) {
      console.log("TESSSSST");
      this.keys.forEach((row) => {
        const foundKey = row.find((key) => key.char === char);
        if (foundKey && foundKey.state != "correct") {
          foundKey.state = state;
        }
      });
    },
    PressKey(selectKey){
      // console.log(selectKey);
        this.reKey.some(obj => {
          if (Object.hasOwn(obj, selectKey)){
            selectKey = obj[selectKey];
          }
        });

        this.$emit('key-pressed', {key: selectKey});
    }
  }
} 
</script>

<style scoped>
.keyboard {
  display: flex;
  flex-direction: column;
  gap: 0.3vh;
}

.keyboard-row {
  display: flex;
  justify-content: center;
  gap: 0.3vh;
}

.keyboard-key {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2vh;
  height: 6vh;
  /* border: 0.2vh solid #ccc; */
  border-radius: 1vh;
  cursor: pointer;
  transition: background-color 0.2s;
}

.keyboard-key-correct {
  background-color: rgb(60,170,61);
}

.keyboard-key-incorrect {
  background-color: rgb(220,47,77);
}

.keyboard-key-partially {
  background-color: rgb(222,177,69);
}

.key-size-1 {
  padding: 4.3%;
}

.key-size-2 {
  padding: 5%;
}

.key-size-3 {
  padding: 5.7%;
}

@media (max-width: 768px) {
  .key-size-1 {
    padding: 4.15%;
  }

  .key-size-2 {
    padding: 4.75%;
  }

  .key-size-3 {
    padding: 5.4%;
}
}

.keyboard-key:active {
  background-color: #f0f0f0;
}

/* .wide-key {
  flex-grow: 1;
} */
</style>