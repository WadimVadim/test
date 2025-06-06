<template>
    <div class="top-container">
        {{ nameView }}
    </div>
</template>

<script>

    
    import { useSharedStore } from '../store/shared';
    import { computed } from 'vue';

    export default {
        setup() {
            const sharedStore = useSharedStore(); 
            const nameView = computed(() => sharedStore.View);

            console.log(nameView.value); 

            return { nameView };
        }
    }
</script>

<style scoped>
    .top-container 
    {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        background-color: rgb(33, 36, 48);
        right: 0;
        top: 0;
        width: 100%;
        height: 5vh;
    } 
</style>