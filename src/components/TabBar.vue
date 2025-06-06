<template>
  <div class="bottom-navigation">
      <div class="icon" @click="handleClick(item, index)" :class="['icon-click', { active: item.isActive }]" v-html="item.svg" v-for="(item,index) in Icons" :key="index"></div>
    </div>
</template>

<script>
import { useSharedStore } from '../store/shared';
import { computed } from 'vue';

export default {
  name: "BottomNavigation",
  data() {
    return {
      Icons: [
        {
          name: "Главная",
          isActive: false,
          router: "/home",
          svg: `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"/></svg>`
        },
        {
          name: "Правила",
          isActive: false,
          router: "/faq",
          svg: `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/><path d="M12.717,5.063A4,4,0,0,0,8,9a1,1,0,0,0,2,0,2,2,0,0,1,2.371-1.967,2.024,2.024,0,0,1,1.6,1.595,2,2,0,0,1-1,2.125A3.954,3.954,0,0,0,11,14.257V15a1,1,0,0,0,2,0v-.743a1.982,1.982,0,0,1,.93-1.752,4,4,0,0,0-1.213-7.442Z"/><rect x="11" y="17" width="2" height="2" rx="1"/></svg>`
        },
        {
          name: "Рейтинг",
          isActive: false,
          router: "/ratting",
          svg: `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="m21.5,21.019h-1.5c-1.381,0-2.5-1.119-2.5-2.5v-5c0-1.381,1.119-2.5,2.5-2.5h1.5c1.381,0,2.5,1.119,2.5,2.5v5c0,1.381-1.119,2.5-2.5,2.5ZM4,9.019h-1.5c-1.381,0-2.5,1.119-2.5,2.5v7c0,1.381,1.119,2.5,2.5,2.5h1.5c1.381,0,2.5-1.119,2.5-2.5v-7c0-1.381-1.119-2.5-2.5-2.5ZM13,3.019h-2c-1.381,0-2.5,1.119-2.5,2.5v13c0,1.381,1.119,2.5,2.5,2.5h2c1.381,0,2.5-1.119,2.5-2.5V5.519c0-1.381-1.119-2.5-2.5-2.5Z"/>
              </svg>`
        },
        {
          name: "Профиль",
          isActive: false,
          router: "/profile",
          svg: `<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 1c-7.71 0-11 3.29-11 11s3.29 11 11 11 11-3.29 11-11-3.29-11-11-11zm-4.293 19.475c.377-1.544 1.37-2.475 4.293-2.475s3.917.931 4.293 2.475c-1.176.357-2.594.525-4.293.525s-3.117-.168-4.293-.525zm10.413-.845c-1.012-3.217-3.916-3.631-6.119-3.631s-5.107.413-6.119 3.631c-2.028-1.35-2.881-3.774-2.881-7.631-.001-6.56 2.438-8.999 8.999-8.999s9 2.439 9 9c0 3.857-.853 6.281-2.881 7.631zm-6.12-13.63c-2.691 0-4 1.309-4 4s1.309 4 4 4 4-1.309 4-4-1.309-4-4-4zm0 6c-1.589 0-2-.411-2-2s.411-2 2-2 2 .411 2 2-.411 2-2 2z"/></svg>`
        }
      ],
    };
  },
  mounted() {
      const sharedStore = useSharedStore();
      const nameView = computed(() => sharedStore.View);

      this.Icons.forEach(icon => { if ((icon.name === nameView.value )) icon.isActive = true });
  },
  methods: {
    handleClick(item, index) {
      this.Icons.forEach(icon => (icon.isActive = false));
      item.isActive = true;
      const useSharedData = useSharedStore();
      useSharedData.updateView(item.name);

      // this.$router.push(item.router);
    },
  },
};
</script>

<style>

    .bottom-navigation {
        width: 100%;
        height: 10vh;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: rgb(33, 36, 48);
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 12%;
        gap: 3%;
    }

    .icon {
        display: flex;
        justify-content: center; 
        align-items: center;
        background-color: rgb(23, 26, 35);
        width: 8vh;
        height: 8vh;
        border-radius: 20vh;
        transition: transform 0.2s ease;
    }

    .icon:hover svg{
        color: white;
    }

    .icon-click.active {
        color: white;
        box-shadow: 0 0 1vh 0.5vh rgb(52,110,255);
        transform: translateY(-40%);
        width: 9vh;
        height: 9vh;
    }

    .icon svg {
        width: 50%;
        height: auto;
        color: rgb(206,212,222);
        transition: color 0.3s ease;
    }

</style>