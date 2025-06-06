<template>
    <div class="ratting-container">
        <div class="time-ratting">

        <div v-for="(item,index) in Buttons" :key="index">
          <button :class="{active: item.isActive}" @click="UpdateButton(item.name)">{{item.name}}</button>
        </div>  
        </div>
            <div class="user-container" :class="GetClass(item)" v-for="(item, index) in Users" :key="index">
              <p class="place-text"> {{item.place}}</p>
              <div class="ratting-text">
                <p class="user-text">{{item.name}}</p> <p class="count-text">{{ item.count }}</p>
              </div>
          </div>
    </div>
</template>

<script>
export default {
  name: "BottomNavigation",
  data() {
    return {
      Users: [
        {
          place: 1,
          name: "user1",
          count: 1500
        },
        {
          place: 2,
          name: "user2",
          count: 1200
        },
        {
          place: 3,
          name: "user3",
          count: 900
        },
        {
          place: 4,
          name: "user4",
          count: 500
        }
        ,
        {
          place: 5,
          name: "user5",
          count: 200
        }
      ],
      Buttons: [
        {name: "Месяц", isActive: true},
        {name: "Всё время", isActive: false}
      ]
    };
  },
  methods: {
    UpdateButton(name){
      this.Buttons.forEach(button => {
        button.isActive = false;
      });

      const targetButton = this.Buttons.find((button) => button.name == name);
      if (targetButton) {
        targetButton.isActive = true;
      }
    },
    GetClass(item) {
      switch(item.place) {
        case 1:
          return { 'user-container-gold': true }
        case 2:
          return { 'user-container-silver': true }
        case 3:
          return { 'user-container-bronze': true }
      }
    }
  }
}
</script>

<style scoped>
    .time-ratting {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1vh;
        /* position: fixed; */
        top: 10vh;
        /* padding-bottom: 70vh; */
    }

    .user-container {
        width: 40vh;
        height: 9vh;
        background-color: rgb(33,36,48, 0.6);
        border-radius: 1vh;
        display: flex;
        align-items: center;
        /* justify-content: center; */
        /* margin-bottom: 65vh; */
        gap: 3vh;
    }

    .user-container-gold {
        box-shadow: 0 0 1vh 0.5vh rgb(205,166,63);
    }

    .user-container-silver {
        box-shadow: 0 0 1vh 0.5vh rgb(167,167,167);
    }

    .user-container-bronze {
        box-shadow: 0 0 1vh 0.5vh rgb(224,132,71);
    }

    .ratting-text {
      display: flex;
      margin-left: 5vh;
      gap: 17vh;
    }
      
    .place-text {
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      font-size: 3vh;
      margin-left: 2vh;
    }

    .user-text {
      /* font-family: 'Roboto', sans-serif; */
      font-weight: bold;
      font-size: 2vh;
    }

    .count-text {
      /* font-family: 'Roboto', sans-serif; */
      color: rgb(248,207,5);
      font-weight: bold;
      font-size: 2vh;
    }

    .ratting-container {
        margin-bottom: 25vh;
        display: flex;
        flex-direction: column;
        gap: 2vh;
    }

    /* button:hover {
      box-shadow: 0 0 1vh 0.5vh rgb(52,110,255);
    } */

    button.active {
      background-color: rgb(52,110,255);
    }
</style>