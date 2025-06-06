<template>
    <div>
      <p>Авторизация</p>
      <form @submit.prevent="handleLogin">
        <div class="inputGroup">
          <input placeholder="Введите логин" type="login" id="login" v-model="login" required />
          <input placeholder="Введите пароль" type="password" id="password" v-model="password" required />
        </div>
        <button class="button" type="submit">Войти</button>
      </form>
      <p>Нет аккаунта? <router-link to="/register">Зарегистрироваться</router-link></p>
    </div>
</template>
  
<script>
import axios from 'axios'

export default {
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      this.$router.push({ name: 'HubView', params: { nickname: "test" } });
      this.$axios.get('https://localhost:7174/users', {
        params: { nickname: this.login }
      })
      .then(response => {
        if (response.data == this.password)
        {
          this.$showMessage('Успешный вход!');
          // this.$router.push({ name: 'HubView'});
          // this.$router.push({ name: 'HubView', params: { nickname: this.login } });
          
        }
        else
        {
          this.$showMessage('Вход не удался.');
        }
      })
      .catch(error => {
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
    width: 50%;
    margin-top: 5%;
  }
</style>