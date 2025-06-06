<template>
  <div>
    <p>Регистрация</p>
    <form @submit.prevent="handleRegister">
      <div class="inputGroup">
        <input placeholder="Введите логин" type="text" id="login" v-model="newUser.Nickname" />
        <input placeholder="Введите пароль" type="password" id="password" v-model="newUser.PasswordHash" />
      </div>
      <button class="button" type="submit">Зарегистрироваться</button>
    </form>
    <p>Есть аккаунт? <router-link to="/">Войти</router-link></p>
  </div>
</template>
  
<script>
import axios from 'axios'

export default {
  data() {
    return {
      et: "",
      newUser: {
          Nickname: '',
          PasswordHash: ''
      }
    }
  },
  methods: {
    handleRegister() {
      this.$axios.post('https://localhost:7174/users', JSON.stringify(this.newUser), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          this.$showMessage("Успешная регистрация!");
        })
        .catch(error => {
          this.et = error;
          console.error('Ошибка при запросе:', error);
        });
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