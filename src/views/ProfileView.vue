<template>
    <Transition name="fade">
        <div v-if="!ChangePasswordVisible">
            <div class="user-container">
                <div class="profile-info">
                    <svg fill="rgb(206,212,222)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-4,21.164v-2.164c0-.552.449-1,1-1h6c.551,0,1,.448,1,1v2.164c-1.226.537-2.578.836-4,.836s-2.774-.299-4-.836Zm10-1.169v-.995c0-1.654-1.346-3-3-3h-6c-1.654,0-3,1.346-3,3v.995c-2.427-1.826-4-4.73-4-7.995C2,6.486,6.486,2,12,2s10,4.486,10,10c0,3.264-1.573,6.169-4,7.995Zm-6-13.995c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,6c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z"/></svg>
                    <div class="profile-text">
                        <a class="user-text">{{ nickname }}</a> 
                        <a class="count-text">{{ count }}</a>
                    </div>
                </div>
            </div>
            <div class="button-menu" @click="GamemodeClick(item)" v-for="(item, index) in menu">
                <svg class="icon-button" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path :d="item.path"/></svg>
                {{ item.label }}
            </div>
        </div>
    </Transition>
    <Transition name="slide">
        <div v-if="ChangePasswordVisible" class="blurred-overlay">
            <ChangePassword class="overlay" @close="ChangePasswordVisible = false"/>
        </div>
    </Transition>
</template>

<script>
import ChangePassword from '../components/ChangePassword.vue'
export default {
    name: "BottomNavigation",
    props: {
        nickname: {
        type: String,
        required: true
        },
    },
    data() { 
        return {
            ChangePasswordVisible: false,
            login: "логин",
            count: 750,
            menu: [
                { label: "Сменить пароль", path: "M22,14.556v-1.556c0-2.206-1.794-4-4-4s-4,1.794-4,4v1.556c-1.19,.694-2,1.97-2,3.444v2c0,2.206,1.794,4,4,4h4c2.206,0,4-1.794,4-4v-2c0-1.474-.81-2.75-2-3.444Zm-4,5.944c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Zm-2-6.5v-1c0-1.103,.897-2,2-2s2,.897,2,2v1h-4Zm3-12H5C2.239,2,0,4.239,0,7v3c0,2.761,2.239,5,5,5h5.812c.318-.548,.72-1.039,1.188-1.46v-.54c0-.772,.152-1.508,.419-2.187-.063,.012-.124,.036-.188,.036-.256,0-.512-.098-.707-.293l-.643-.643-.643,.643c-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l.643-.643-.643-.643c-.391-.391-.391-1.023,0-1.414,.39-.391,1.023-.391,1.414,0l.643,.643,.643-.643c.391-.391,1.023-.391,1.414,0,.391,.391,.39,1.023,0,1.414l-.643,.643,.643,.643c.097,.097,.17,.21,.219,.33,1.092-1.495,2.853-2.473,4.843-2.473,2.754,0,5.074,1.867,5.777,4.4,.131-.447,.223-.91,.223-1.4v-3c0-2.761-2.239-5-5-5ZM6.707,9.143c.391,.391,.391,1.023,0,1.414-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293l-.643-.643-.643,.643c-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l.643-.643-.643-.643c-.391-.391-.391-1.023,0-1.414,.39-.391,1.023-.391,1.414,0l.643,.643,.643-.643c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-.643,.643,.643,.643Z" },
            ]
        } 
    },
    components: {
        ChangePassword
    },
    methods: {
        GamemodeClick(item){
            switch (item.label)
            {
                case "Сменить пароль":
                    this.ChangePasswordVisible = true;
                    break;
            }
        }
    }
}
</script>

<style scoped>
    .user-container {
        margin-bottom: 5vh;
        /* width: 35vh; */
        height: 12vh;
        background-color: rgb(33,36,48, 0.6);
        border-radius: 1vh;
        display: flex;
        align-items: center;
        gap: 2vh;
        box-shadow: 0 0 1vh 0.5vh rgb(52,110,255);
    }

    .user-text {
      color: white;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      font-size: 2vh;
    }

    .count-text {
      font-family: 'Roboto', sans-serif;
      color: rgb(248,207,5);
      font-weight: bold;
      font-size: 2vh;
    }

    .profile-text {
      display: flex;
      flex-direction: column;
    }

    .profile-info {
        width: 100%;
        display: flex;
        align-items: center;
        /* justify-content: center; */
        margin-left: 20%;
        gap: 2vh;
    }

    .button-menu {
        width: 25vh;
        height: 10vh;
        background-color: rgb(33,36,48);
        border-radius: 2vh;
        display: flex;
        align-items: center;
        /* justify-content: center; */
        padding-left: 3vh;
        margin-bottom: 50vh;
        gap: 1vh;
    }

    .button-menu svg{
        width: 18%;
        height: auto;
        color: rgb(206,212,222);
    }

    .button-menu:hover {
        transform: translateX(+2%); 
        transition: transform 0.2 ease; 
    }

    .button-menu:active {
        cursor: pointer;
        transform: scale(0.95); 
        transition: transform 0.2 ease; 
    }

    .icon-button {
        fill: white;
    }

    .overlay {
        position: absolute;
        z-index: 10;
    }

    .blurred-overlay {
        position: fixed;
        display: flex;
        /* align-items: center; */
        top: 15vh;
        justify-content: center;
        z-index: 2;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5); 
        backdrop-filter: blur(10px);
    }
</style>