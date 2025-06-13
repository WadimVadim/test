<template>
  <div>
    <p>Регистрация</p>
    <form @submit.prevent="handleRegister">
      <div class="inputGroup">
        <input placeholder="Введите логин" type="text" id="login" v-model="newUser.Nickname" />
        <input placeholder="Введите пароль" type="password" id="password" v-model="newUser.Password" />
      </div>
      <button class="button" type="submit">Зарегистрироваться</button>
    </form>
    <p>Есть аккаунт? <router-link to="/">Войти</router-link></p>
  </div>
</template>
  
<script>
import { apiClient } from '../main.js'

export default {
  data() {
    return {
      et: "",
      newUser: {
          Nickname: '',
          Password: ''
      }
    }
  },
  methods: {
    async handleRegister() {
      try {
        await apiClient.post('/register', this.newUser);
      
        this.$router.push('/');
        this.$showMessage("Успешная регистрация!");
      } catch (error) {
        console.log("Ошибка при запросе: ", error);
        this.$showMessage("Не удалось зарегистрироваться.");
      }
    }
  }
}
</script>

<style scoped>
  .text {
    width: 30%; 
    display: inline-block; 
  }

  .inputGroup {
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 1vh;
  }

  .button {
    margin-top: 5%;
  }
</style>