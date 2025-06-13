<template>
    <Transition name="fade">
        <div v-if="!EnterWordVisible" class="game-board">
            <div class="game-mode" @click="GamemodeClick(item)" v-for="(item, index) in GameMode">
                <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path :d="item.path"/></svg>
                {{ item.label }}
            </div>
        </div>
    </Transition>

    <Transition name="slide">
        <div v-if="EnterWordVisible" class="blurred-overlay">
            <EnterWord @close="EnterWordVisible = false"/>
        </div>
    </Transition>
</template>

<script>
import EnterWord from '../components/EnterWord.vue'
export default {
name: "Home",
    data() {
        return {
            EnterWordVisible: false,
            GameMode: [
                { label: "Поток", path: "m13.44 8.829c-2.312-1.37-3.751-1.683-3.812-1.696-.499-.106-.998.183-1.156.668-.02.059-.473 1.478-.473 4.199s.453 4.14.473 4.199c.156.489.668.774 1.156.668.061-.013 1.5-.326 3.812-1.696 2.166-1.283 3.134-2.313 3.307-2.506.337-.379.337-.951 0-1.33-.173-.193-1.141-1.223-3.307-2.506zm-1.02 4.622c-.938.556-1.702.912-2.248 1.133-.089-.597-.173-1.46-.173-2.583s.084-1.987.173-2.583c.546.221 1.31.577 2.248 1.132.963.57 1.65 1.077 2.106 1.451-.456.374-1.144.88-2.106 1.451zm-.421-12.451c-7.709 0-10.999 3.29-10.999 11s3.29 11 11 11 11-3.29 11-11-3.29-11-11-11zm0 20c-6.561 0-9-2.439-9-9s2.44-9 9.001-9 9 2.439 9 9-2.439 9-9 9z" },
                { label: "Слово часа", path: "M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm5,10c0-.553-.447-1-1-1h-3V6c0-.553-.448-1-1-1s-1,.447-1,1v6c0,.553,.448,1,1,1h4c.553,0,1-.447,1-1Z" },
                { label: "Загадать слово", path: "m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm4 13h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2z" }
            ]
        }
    },
    methods: {
        GamemodeClick(item){
            switch (item.label)
            {
                case "Поток":
                    this.$router.push("/game");
                    break;
                case "Слово часа":
                    this.$router.push("/game");
                    break;
                case "Загадать слово":
                    this.EnterWordVisible = true;
                    break;
            }
        }
    },
    components: {
        EnterWord
    }
}
</script>

<style scoped>
    .game-board {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 2vh;
        position: fixed; 
        top: 10vh; 
        transform: translateX(-50%); 
    }

    .game-mode {
        width: 25vh;
        height: 10vh;
        background-color: rgb(33,36,48);
        border-radius: 2vh;
        display: flex;
        align-items: center;
        /* justify-content: center; */
        padding-left: 5vh;
        gap: 1vh;
    }

    .game-mode svg{
        width: 18%;
        height: auto;
        color: rgb(206,212,222);
    }

    .game-mode:hover {
        transform: translateX(+2%); 
        transform: scale(0.95); 
        transition: transform 0.2 ease; 
    }

    .game-mode:active {
        cursor: pointer;
        transform: scale(0.95); 
        transition: transform 0.2 ease; 
    }

    .icon {
        fill: white;
    }

    .blurred-overlay {
        position: fixed;
        display: flex;
        align-items: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        justify-content: center;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.5); 
        backdrop-filter: blur(10px);
    }
</style>