<template>
    <TopBar/>
    <component :is="CurrentView" :nickname="nickName"></component>
    <TabBar/>
</template>

<script>
import TabBar from '../components/TabBar.vue'
import TopBar from '../components/TopBar.vue'
import MainView from './MainView.vue'
import FaqView from '../views/FaqView.vue'
import RattingView from '../views/RattingView.vue'
import ProfileView from '../views/ProfileView.vue'
import { useSharedStore } from '../store/shared';
import { computed, markRaw, watch } from 'vue';

export default {
    computed: {
        nickName() {
            return this.$route.params.nickname;
        }
    },
    data(){
        return {
            CurrentView: null
        }
    },
    mounted(){
        const sharedStore = useSharedStore(); 
        const nameView = computed(() => sharedStore.View);
        this.UpdateCurrentView(nameView.value)

        watch(
            () => nameView.value,
            (name) => {
                this.UpdateCurrentView(name)
            }
        );
    },
    methods: {
        UpdateCurrentView(nameView){
            switch(nameView){
                case "Главная":
                    this.CurrentView = markRaw(MainView);
                    break;
                case "Правила":
                    this.CurrentView = markRaw(FaqView);
                    break;
                case "Рейтинг":
                    this.CurrentView = markRaw(RattingView);
                    break;
                case "Профиль":
                    this.CurrentView = markRaw(ProfileView);
                    break;
            }
        }
    },
    components: {
        MainView,
        FaqView,
        RattingView,
        ProfileView,
        TabBar,
        TopBar
    },
};
</script>

<style scoped>
    .game-field 
    {
        right: 200px;
    }
</style>